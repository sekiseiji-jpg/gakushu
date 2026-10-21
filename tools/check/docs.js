// 収録量の数字を実データから出して、ドキュメントの記述と突き合わせる。
// 数えられる数字だけがズレる、という形で何度も事故が起きた（知見 15.3 / 16.3）。
//   ・README.md と 設計書.md の「収録量」の表 … 分野ごとの9列と合計行
//   ・図版の内訳（表・図・地図・写真）
//   ・再現プロンプト.md の教科ごとの表と合計行
//   ・検索索引の件数（分野・単元・用語）
//   ・読み物2分野の量（作品・章・字数・文豪）… 数え方は reader.js のものを使う
// 使い方: node tools/check/docs.js
const fs = require('fs');
const path = require('path');
const { ROOT, APPS, label, pad } = require('./lib.js');
const { check: readerCheck, READERS } = require('./reader.js');

// ドキュメントでの分野の呼び名（フォルダ名と違うものだけ）
// 表示用の項目名（くいちがいを知らせるときに使う）
const LABEL = {
  unit: '単元', fig: '図版', list: '年表・統計', word: '用語', person: '人物・区別',
  detail: '詳細項目', topic: 'トピック', theme: 'テーマ', quiz: 'クイズ',
};

const DOCNAME = { '数学ⅠA': '数学Ⅰ・A', '数学ⅡB': '数学Ⅱ・B', '数学ⅢC': '数学Ⅲ・C' };

// 表の見出し → 数える項目。README と設計書で見出しが少し違うので両方を引く。
const COL = {
  '単元': 'unit', '図・表・写真': 'fig', '年表・統計・公式': 'list', '年表・統計': 'list',
  '用語': 'word', '人物・区別': 'person', '詳細項目': 'detail', 'トピック': 'topic',
  'テーマ': 'theme', 'クイズ': 'quiz',
};

function evalFile(file, names) {
  if (!fs.existsSync(file)) return null;
  try {
    return new Function('module', 'exports', fs.readFileSync(file, 'utf8') +
      '\nreturn {' + names + '};')({ exports: {} }, {});
  } catch (e) {
    throw new Error(file + ' を読めない: ' + e.message);
  }
}

// ---- 実データを数える ----
function metrics() {
  const per = {};
  for (const app of APPS) {
    const dir = path.join(ROOT, app);
    const u = evalFile(path.join(dir, 'data-units.js'), 'UNITS') ||
              evalFile(path.join(dir, 'data-eras.js'), 'ERAS');
    const UNITS = u.UNITS || u.ERAS;
    const QUIZ = (evalFile(path.join(dir, 'data-quiz.js'), 'QUIZ') || {}).QUIZ || [];
    const THEMES = (evalFile(path.join(dir, 'data-themes.js'), 'THEMES') || {}).THEMES || [];
    const FIGS = (evalFile(path.join(dir, 'data-figs.js'), 'FIGS') || {}).FIGS || {};
    const sum = (f) => UNITS.reduce((a, x) => a + f(x), 0);
    const figs = Object.values(FIGS).flat();
    const kind = (k) => figs.filter((f) => f.k === k).length;
    const name = label(dir);
    per[DOCNAME[name] || name] = {
      unit: UNITS.length,
      fig: figs.length,
      table: kind('table'), svg: kind('svg'), map: kind('map'), photo: kind('photo'),
      list: sum((x) => x.events.length),
      word: sum((x) => x.keywords.length),
      person: sum((x) => x.people.length),
      detail: sum((x) => x.sections.reduce((b, s) => b + s.items.length, 0)),
      topic: sum((x) => x.topics.length),
      theme: THEMES.length,
      quiz: QUIZ.length,
      subject: app.split('/')[0],
    };
  }
  return per;
}

// ---- ドキュメントの表を読む ----
// 「| 分野 | 単元 | … |」の行をヘッダーとみなし、以降の | で始まる行を中身として返す
function tableOf(md, needs) {
  const lines = md.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    if (lines[i][0] !== '|') continue;
    const head = cells(lines[i]);
    if (!needs.every((h) => head.includes(h))) continue;
    const rows = [];
    for (let j = i + 2; j < lines.length && lines[j][0] === '|'; j++) rows.push(cells(lines[j]));
    return { head, rows };
  }
  return null;
}
const cells = (line) => line.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
// 「15時代」「203問」「**285**」から数を取り出す
const num = (cell) => {
  const m = /-?\d+/.exec(String(cell).replace(/\*/g, ''));
  return m ? Number(m[0]) : null;
};

const ng = [];
const say = (where, m) => ng.push(where + ': ' + m);

// 期待と実際をくらべる
function eq(where, what, want, got) {
  if (want !== got) say(where, what + ' が ' + want + '（実際は ' + got + '）');
}

const per = metrics();
const names = Object.keys(per);
const total = (k) => names.reduce((a, n) => a + per[n][k], 0);

// ---- 1. 収録量の表（README.md と 設計書.md）----
function checkTable(file) {
  const md = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const t = tableOf(md, ['分野', '単元', 'クイズ']);
  if (!t) { say(file, '収録量の表が見つからない'); return; }

  const idx = {};
  t.head.forEach((h, i) => { if (COL[h]) idx[COL[h]] = i; });
  for (const k of Object.values(COL)) {
    if (idx[k] === undefined) say(file, '表に「' + LABEL[k] + '」の列がない');
  }

  const seen = new Set();
  for (const row of t.rows) {
    const first = row[0].replace(/\*/g, '');
    if (first.includes('合計')) {
      for (const [k, i] of Object.entries(idx)) {
        eq(file + ' 合計行', LABEL[k], num(row[i]), total(k));
      }
      seen.add('合計');
      continue;
    }
    if (!per[first]) { say(file, '表にない分野「' + first + '」が書かれている'); continue; }
    seen.add(first);
    for (const [k, i] of Object.entries(idx)) {
      eq(file + ' ' + first, LABEL[k], num(row[i]), per[first][k]);
    }
  }
  for (const n of names) if (!seen.has(n)) say(file, '表に ' + n + ' の行がない');
  if (!seen.has('合計')) say(file, '表に合計行がない');
}

checkTable('README.md');
checkTable('社会/設計書.md');

// ---- 2. 図版の内訳 ----
// 設計書: 「表295・図212・地図23・写真94（計624点」
{
  const f = '社会/設計書.md';
  const md = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const m = /表(\d+)・図(\d+)・地図(\d+)・写真(\d+)（計(\d+)点/.exec(md);
  if (!m) say(f, '図版の内訳（表…・図…・地図…・写真…（計…点）が見つからない');
  else {
    eq(f + ' 図版の内訳', '表', Number(m[1]), total('table'));
    eq(f + ' 図版の内訳', '図', Number(m[2]), total('svg'));
    eq(f + ' 図版の内訳', '地図', Number(m[3]), total('map'));
    eq(f + ' 図版の内訳', '写真', Number(m[4]), total('photo'));
    eq(f + ' 図版の内訳', '計', Number(m[5]), total('fig'));
  }
}
// README: 「全分野で624点そえています」「写真94点はすべて」
{
  const f = 'README.md';
  const md = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const a = /全分野で(\d+)点そえて/.exec(md);
  const b = /写真(\d+)点はすべて/.exec(md);
  if (!a) say(f, '「全分野で…点そえています」が見つからない');
  else eq(f, '図版の総数', Number(a[1]), total('fig'));
  if (!b) say(f, '「写真…点はすべて」が見つからない');
  else eq(f, '写真の数', Number(b[1]), total('photo'));
}

// ---- 3. 再現プロンプトの表 ----
{
  const f = '社会/再現プロンプト.md';
  const md = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const t = tableOf(md, ['教科', '分野', 'クイズ']);
  if (!t) say(f, '教科ごとの表が見つからない');
  else {
    const bySub = {};
    for (const n of names) bySub[per[n].subject] = (bySub[per[n].subject] || 0) + per[n].quiz;
    const done = new Set();
    for (const row of t.rows) {
      const sub = row[0].replace(/\*/g, '');
      if (sub.includes('合計')) {
        // 「**19分野・285単元・図版624点**」と「**3455問**」
        const m = /(\d+)分野・(\d+)単元・図版(\d+)点/.exec(row[1]);
        if (!m) say(f, '合計行が「N分野・N単元・図版N点」の形でない');
        else {
          eq(f + ' 合計行', '分野数', Number(m[1]), names.length);
          eq(f + ' 合計行', '単元数', Number(m[2]), total('unit'));
          eq(f + ' 合計行', '図版数', Number(m[3]), total('fig'));
        }
        eq(f + ' 合計行', 'クイズ', num(row[2]), total('quiz'));
        done.add('合計');
        continue;
      }
      if (sub.includes('読み物')) continue;   // 読み物は 5 で見る
      if (bySub[sub] === undefined) { say(f, '表にない教科「' + sub + '」が書かれている'); continue; }
      done.add(sub);
      eq(f + ' ' + sub, 'クイズ', num(row[2]), bySub[sub]);
      // 「日本史203・世界史180・…」の分野ごとの数も見る
      for (const n of names.filter((x) => per[x].subject === sub)) {
        const m = new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*(\\d+)').exec(row[1]);
        if (!m) say(f + ' ' + sub, n + ' が書かれていない');
        else eq(f + ' ' + sub, n + ' のクイズ', Number(m[1]), per[n].quiz);
      }
    }
    for (const s of Object.keys(bySub)) if (!done.has(s)) say(f, '表に ' + s + ' の行がない');
    if (!done.has('合計')) say(f, '表に合計行がない');
  }
}

// ---- 4. 検索索引の件数 ----
{
  const file = path.join(ROOT, 'search-index.js');
  const { SEARCH_FIELDS, SEARCH_UNITS } = evalFile(file, 'SEARCH_FIELDS, SEARCH_UNITS');
  const nWord = SEARCH_UNITS.reduce((a, u) => a + (u.w || []).length, 0);
  const kb = Math.round(fs.statSync(file).size / 1024);
  const want = { fields: SEARCH_FIELDS.length, units: SEARCH_UNITS.length, words: nWord };
  // 設計書 9章: 「SEARCH_FIELDS（分野21件…）と SEARCH_UNITS（単元610件…）」「用語4729件を含めて約260KB」
  const f = '社会/設計書.md';
  const md = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const mf = /分野(\d+)件/.exec(md), mu = /単元(\d+)件/.exec(md), mw = /用語(\d+)件/.exec(md);
  if (!mf || !mu || !mw) say(f, '索引の件数（分野…件／単元…件／用語…件）が見つからない');
  else {
    eq(f + ' 索引', '分野', Number(mf[1]), want.fields);
    eq(f + ' 索引', '単元', Number(mu[1]), want.units);
    eq(f + ' 索引', '用語', Number(mw[1]), want.words);
  }
  // README 検索の節: 「610項目・用語4729件で約260KB」
  const r = 'README.md';
  const rmd = fs.readFileSync(path.join(ROOT, r), 'utf8');
  const mr = /(\d+)項目・用語(\d+)件で約(\d+)KB/.exec(rmd);
  if (!mr) say(r, '「…項目・用語…件で約…KB」が見つからない');
  else {
    eq(r + ' 索引', '項目', Number(mr[1]), want.units);
    eq(r + ' 索引', '用語', Number(mr[2]), want.words);
    // 容量は 10KB 単位で書いてあるので、丸めて合うかだけ見る
    if (Math.abs(Number(mr[3]) - kb) > 10) say(r, '索引の容量が約' + mr[3] + 'KB（実際は ' + kb + 'KB）');
  }
  console.log(pad('索引', 14) + '分野' + want.fields + ' 単元' + want.units + ' 用語' + want.words + ' ' + kb + 'KB');
}

// ---- 5. 読み物2分野の量 ----
{
  const got = {};
  for (const rel of READERS) got[rel] = readerCheck(rel).n;
  const man = (c) => Math.round(c / 10000);     // 「約262万字」の万
  const ko = got['国語/古典文学'], kin = got['国語/近現代文学'];
  console.log(pad('読み物', 14) + '古典文学 ' + ko.works + '作品' + ko.maki + '章' + man(ko.chars) + '万字' +
    ' ／ 近現代文学 ' + kin.works + '作品' + kin.maki + '章' + man(kin.chars) + '万字 文豪' + kin.auth + '人');

  // 再現プロンプト: 「古典文学：4作品85巻（約262万字）／近現代文学：30作品214章（約160万字）・文豪26人」
  const f = '社会/再現プロンプト.md';
  const md = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const m = /古典文学：(\d+)作品(\d+)巻（約(\d+)万字）／近現代文学：(\d+)作品(\d+)章（約(\d+)万字）・文豪(\d+)人/.exec(md);
  if (!m) say(f, '読み物の欄が見つからない');
  else {
    eq(f + ' 読み物', '古典文学の作品数', Number(m[1]), ko.works);
    eq(f + ' 読み物', '古典文学の巻数', Number(m[2]), ko.maki);
    eq(f + ' 読み物', '古典文学の字数（万）', Number(m[3]), man(ko.chars));
    eq(f + ' 読み物', '近現代文学の作品数', Number(m[4]), kin.works);
    eq(f + ' 読み物', '近現代文学の章数', Number(m[5]), kin.maki);
    eq(f + ' 読み物', '近現代文学の字数（万）', Number(m[6]), man(kin.chars));
    eq(f + ' 読み物', '文豪の数', Number(m[7]), kin.auth);
  }
  // 設計書 13章の表: 「85巻・約262万字」「214章・約160万字」
  const g = '社会/設計書.md';
  const gmd = fs.readFileSync(path.join(ROOT, g), 'utf8');
  const a = /(\d+)巻・約(\d+)万字/.exec(gmd), b = /(\d+)章・約(\d+)万字/.exec(gmd);
  if (!a || !b) say(g, '読み物の量（…巻・約…万字 ／ …章・約…万字）が見つからない');
  else {
    eq(g + ' 読み物', '古典文学の巻数', Number(a[1]), ko.maki);
    eq(g + ' 読み物', '古典文学の字数（万）', Number(a[2]), man(ko.chars));
    eq(g + ' 読み物', '近現代文学の章数', Number(b[1]), kin.maki);
    eq(g + ' 読み物', '近現代文学の字数（万）', Number(b[2]), man(kin.chars));
  }
}

// ---- まとめ ----
console.log(pad('クイズ19分野', 14) + names.length + '分野 ' + total('unit') + '単元 ' + total('quiz') + '問 図版' +
  total('fig') + '点（表' + total('table') + ' 図' + total('svg') + ' 地図' + total('map') + ' 写真' + total('photo') + '）');

console.log('');
if (ng.length) {
  for (const m of ng) console.log('✗ ' + m);
  console.log('\n収録量: ' + ng.length + '件のくいちがい');
  process.exit(1);
}
console.log('✓ README.md・設計書.md・再現プロンプト.md の収録量は実データと一致している');
