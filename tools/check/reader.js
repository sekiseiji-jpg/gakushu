// 読み物アプリ（古典文学・近現代文学）のデータを調べる。
// クイズアプリの chk.js にあたるもので、見るのは次の点。
//   ・APP と sw.js のキャッシュ名、index.html と sw.js の ?v= が揃っているか
//   ・巻（章）の番号が 1 から連番か、要約があるか
//   ・本文ファイルがあり、TEXT() の番号と中身の字数が data-works.js と合うか
//   ・入力者注記の消し残し（［＃…］）や、置きかえられなかった外字（〓）がないか
//   ・段落の種類（rich のとき）とルビ記法が壊れていないか
//   ・語注（data-notes.js）の語が、その章の原文に実在するか
//   ・日本語以外の文字がまぎれこんでいないか
// 使い方: node tools/check/reader.js [国語/近現代文学 ...]   （無指定なら読み物すべて）
const fs = require('fs');
const path = require('path');
const { minlenFor } = require('./lib.js');

const ROOT = path.dirname(path.dirname(__dirname));
const READERS = ['国語/古典文学', '国語/近現代文学', '英語/英米文学', '理科/ノーベル賞'];

// data-works.js / data-authors.js を読み込む。
// 末尾に module.exports があるので、偽の module を渡して評価すれば取り出せる（lib.js と同じ方式）。
// 一時ファイルに書き出して require する方式はやめた。ファイル名をパスの末尾から作っていたため
// 古典文学と近現代文学が同じ名前になり（どちらも「文学/data-works.js」で終わる）、
// さらに os.tmpdir() がシンボリックリンクで require.cache の削除も効かず、
// 近現代文学を読んだつもりで古典文学のデータが返っていた（知見 16.1）。
function load(file) {
  const mod = { exports: {} };
  try {
    new Function('module', 'exports', fs.readFileSync(file, 'utf8'))(mod, mod.exports);
  } catch (e) {
    throw new Error(file + ' を読めない: ' + e.message);
  }
  return mod.exports;
}

// ルビ記法と改行を外した、見かけの字数。
// JavaScript の length は UTF-16 の数なので、BMP 外の漢字が 2 と数えられてしまう。
// データ側は文字の数で持っているため、ここでも文字の数で数える。
const plain = (s) => s.replace(/《[^》]*》/g, '').replace(/[｜\n]/g, '');
const clen = (s) => [...plain(s)].length;

// 本文ファイルから TEXT(no, {...}) を取り出す
function readText(file) {
  const s = fs.readFileSync(file, 'utf8');
  const m = /TEXT\((\d+),\s*(\{[\s\S]*\})\);/.exec(s);
  if (!m) return null;
  return { no: Number(m[1]), data: JSON.parse(m[2]) };
}

const NG_SCRIPT = /[Ѐ-ӿ؀-ۿ가-힯]/;   // キリル・アラビア・ハングル
// 何文字以上のラテン文字を疑うかは教科で違う（クイズの言語チェックと同じ基準を使う）。
// 理科・数学は 4 以上（iPS細胞・GFPのような略語を本文に書くため）、社会・国語は 3 以上。
const latinRe = (rel) => new RegExp('[A-Za-z]{' + Math.max(3, minlenFor(rel)) + ',}', 'g');
// 本文には原典由来の欧文が出てくるので、要約・見出しだけ厳しく見る
// p=本文 v=韻文 c=地寄せ h=小見出し（大文字は前を一行あける）／ w=和歌（古典文学の原文）
const KIND = /^[pPvVcChw]/;

function check(rel) {
  const dir = path.join(ROOT, rel);
  // 英語の読み物は原文が英語なので、ラテン文字を疑わない（クイズの minlen=999 と同じ考え方）
  const latin = rel.startsWith('英語/') ? null : latinRe(rel);
  const ng = [];
  const say = (m) => ng.push(m);
  const { APP, WORKS } = load(path.join(dir, 'data-works.js'));

  // ---- 版とキャッシュ名 ----
  const sw = fs.readFileSync(path.join(dir, 'sw.js'), 'utf8');
  const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
  const cache = (/const CACHE = '([^']+)'/.exec(sw) || [])[1];
  const texts = (/const TEXTS = '([^']+)'/.exec(sw) || [])[1];
  if (cache !== APP.cache) say(`キャッシュ名がずれている: APP.cache=${APP.cache} / sw.js=${cache}`);
  if (texts !== APP.textCache) say(`本文のキャッシュ名がずれている: APP.textCache=${APP.textCache} / sw.js=${texts}`);
  const vSw = [...new Set((sw.match(/\?v=(\d+)/g) || []))];
  const vHtml = [...new Set((html.match(/\?v=(\d+)/g) || []))];
  if (vSw.length !== 1 || vHtml.length !== 1 || vSw[0] !== vHtml[0]) {
    say(`?v= が揃っていない: index.html=${vHtml.join(',')} / sw.js=${vSw.join(',')}`);
  }
  for (const k of ['key', 'title', 'icon', 'unit', 'textVer', 'cache', 'textCache', 'lead']) {
    if (!APP[k]) say(`APP.${k} がない`);
  }

  // ---- 作品と巻 ----
  const ids = new Set();
  const gtext = {};            // 「作品id/章」→ その章の原文（語注の突き合わせ用）
  let nMaki = 0, nChar = 0, nPara = 0;
  for (const w of WORKS) {
    if (ids.has(w.id)) say(`作品idの重複: ${w.id}`);
    ids.add(w.id);
    for (const k of ['title', 'yomi', 'author', 'era', 'icon', 'color', 'lead']) {
      if (!w[k]) say(`${w.id}: ${k} がない`);
    }
    if (!Array.isArray(w.about) || !w.about.length) say(`${w.id}: about がない`);
    if (!Array.isArray(w.sources) || !w.sources.length) say(`${w.id}: sources がない`);
    // 作品の解説にも、書いているうちに他言語がまぎれこむことがある
    for (const t of [w.lead, w.era, w.genre || ''].concat(w.about || [])) {
      if (NG_SCRIPT.test(t)) say(`${w.id}: 解説に日本語以外の文字 ${t.slice(0, 30)}`);
      const lat = latin && t.match(latin);
      if (lat) say(`${w.id}: 解説に英単語 ${lat.join(',')}`);
    }
    // 出どころの注記は、底本名やライセンス名に欧文が入るので日本語以外の字だけ見る
    for (const x of w.sources || []) {
      if (NG_SCRIPT.test(x.note || '')) say(`${w.id}: 出どころに日本語以外の文字`);
    }
    if (w.parts) {
      for (const m of w.maki) {
        if (!w.parts.some((p) => p.n === m.part)) say(`${w.id}/${m.no}: part が parts にない`);
      }
    }
    w.maki.forEach((m, i) => {
      const at = `${w.id}/${m.no}`;
      if (m.no !== i + 1) say(`${at}: 番号が連番でない（${i + 1} のはず）`);
      if (!Array.isArray(m.chars) || m.chars.length !== 2) say(`${at}: chars が [訳,原文] でない`);
      if (!Array.isArray(m.summary) || !m.summary.length) say(`${at}: 要約がない`);
      (m.summary || []).forEach((s, j) => {
        if (s.length < 20) say(`${at}: 要約${j + 1}が短すぎる`);
        if (NG_SCRIPT.test(s)) say(`${at}: 要約に日本語以外の文字 ${s.slice(0, 30)}`);
        const lat = latin && s.match(latin);
        if (lat) say(`${at}: 要約に英単語 ${lat.join(',')}`);
      });
      if (m.lead && NG_SCRIPT.test(m.lead)) say(`${at}: leadに日本語以外の文字`);

      // ---- 本文ファイル ----
      const f = path.join(dir, 'text', w.id, String(m.no).padStart(2, '0') + '.js');
      if (!fs.existsSync(f)) { say(`${at}: 本文ファイルがない`); return; }
      const t = readText(f);
      if (!t) { say(`${at}: TEXT() を読めない`); return; }
      if (t.no !== m.no) say(`${at}: TEXT() の番号が ${t.no} になっている`);
      const y = t.data.y || [], g = t.data.g || [];
      // 種類つきの段落は先頭1字が種類。訳は rich の作品だけ、原文は常に種類つき。
      const cy = y.reduce((a, s) => a + clen(w.rich ? s.slice(1) : s), 0);
      const cg = g.reduce((a, s) => a + clen(s.slice(1)), 0);
      if (cy !== m.chars[0]) say(`${at}: 訳の字数が合わない（データ${m.chars[0]} / 本文${cy}）`);
      if (cg !== m.chars[1]) say(`${at}: 原文の字数が合わない（データ${m.chars[1]} / 本文${cg}）`);
      if (m.aligned && y.length !== g.length) say(`${at}: aligned なのに段落数が違う（${y.length}/${g.length}）`);
      nMaki++; nChar += cy + cg; nPara += y.length + g.length;
      // 語注の突き合わせに使う（原文を1本につないで持つ）
      gtext[w.id + '/' + m.no] = g.map((p) => p.slice(1)).join('\n').toLowerCase();

      for (const [kind, list] of [[!!w.rich, y], [true, g]]) {
        for (const p of list) {
          const body = kind ? p.slice(1) : p;
          if (kind && !KIND.test(p)) say(`${at}: 段落の種類がおかしい ${p.slice(0, 20)}`);
          if (/［＃/.test(p)) say(`${at}: 注記の消し残し ${p.slice(0, 40)}`);
          if (p.includes('〓')) say(`${at}: 置きかえられなかった外字 ${p.slice(0, 40)}`);
          if (!body.trim()) say(`${at}: 空の段落`);
          if (NG_SCRIPT.test(p)) say(`${at}: 本文に日本語以外の文字 ${p.slice(0, 30)}`);
          // ルビ記法：《 と 》 が同数で、必ず 《 が先
          let depth = 0, bad = false;
          for (const ch of p) {
            if (ch === '《') depth++;
            else if (ch === '》') { depth--; if (depth < 0) bad = true; }
          }
          if (bad || depth !== 0) say(`${at}: ルビ記法が閉じていない ${p.slice(0, 40)}`);
        }
      }
    });
  }
  // ---- 語注（data-notes.js を置いた分野だけ） ----
  // 語注の見出しは、その章の原文に実在する語でなければならない。
  // 記憶で書くと必ず入っていない語がまぎれる（初回に122件のうち18件が実在しなかった）。
  let nNote = 0;
  const nf = path.join(dir, 'data-notes.js');
  if (fs.existsSync(nf)) {
    const { NOTES } = load(nf);
    for (const key of Object.keys(NOTES)) {
      if (!/^[a-z0-9_-]+\/\d+$/.test(key)) { say(`語注のキーがおかしい: ${key}`); continue; }
      if (gtext[key] === undefined) { say(`語注の行き先がない: ${key}`); continue; }
      for (const g of NOTES[key]) {
        nNote++;
        if (!g.w || !g.d) { say(`${key}: 語注に w か d がない`); continue; }
        if (NG_SCRIPT.test(g.d)) say(`${key}: 語注の説明に日本語以外の文字 ${g.d.slice(0, 20)}`);
        // 見出しは原文に出てくる形で書く（大文字小文字は問わない）
        if (!gtext[key].includes(g.w.toLowerCase())) say(`${key}: 原文に出てこない語注「${g.w}」`);
      }
    }
  }

  // ---- 人物（data-authors.js がある分野だけ。文豪・作家・受賞者） ----
  const af = path.join(dir, 'data-authors.js');
  let nAuth = 0;
  if (fs.existsSync(af)) {
    const { AUTHORS } = load(af);
    nAuth = AUTHORS.length;
    // 作品のない分野（人物だけを並べるもの）がある。作品との結びつきはそのときだけ見る
    const hasWorks = WORKS.length > 0;
    const names = new Set(WORKS.map((w) => w.author));
    const seen = new Set();
    const aid = new Set();
    for (const a of AUTHORS) {
      const at = a.id;
      if (aid.has(a.id)) say(`文豪idの重複: ${a.id}`);
      aid.add(a.id);
      for (const k of ['name', 'yomi', 'life', 'home', 'lead']) {
        if (!a[k]) say(`${at}: ${k} がない`);
      }
      if (hasWorks && !names.has(a.name)) say(`${at}: ${a.name} という著者の作品が WORKS にない`);
      seen.add(a.name);
      // 存命の人は died がない
      if (!(a.born > 1700 && a.born < 2100)) say(`${at}: 生年がおかしい`);
      if (a.died && !(a.born < a.died && a.died < 2100)) say(`${at}: 没年がおかしい`);
      const need = ['bio', 'person', 'style', 'books', 'tags'].concat(hasWorks ? ['works'] : []);
      for (const k of need) {
        if (!Array.isArray(a[k]) || !a[k].length) say(`${at}: ${k} がない`);
      }
      const mine = WORKS.filter((w) => w.author === a.name).map((w) => w.id).sort().join(',');
      if (hasWorks && (a.works || []).slice().sort().join(',') !== mine) {
        say(`${at}: works が WORKS と合わない（${(a.works || []).join(',')} / ${mine}）`);
      }
      for (const b of a.books || []) {
        if (!b.t || !b.y || !b.b) say(`${at}: 代表作の項目が欠けている`);
      }
      // 文章に他言語がまぎれていないか
      for (const t of [a.lead, a.life, a.home].concat(a.bio, a.person, a.style,
                       (a.books || []).map((b) => b.b))) {
        if (NG_SCRIPT.test(t)) say(`${at}: 文章に日本語以外の文字 ${t.slice(0, 30)}`);
        const lat = latin && t.match(latin);
        if (lat) say(`${at}: 文章に英単語 ${lat.join(',')}`);
      }
      // 肖像。photo を書いた人にだけある（写真を載せない分野もある）
      if (a.photo) {
        const img = path.join(dir, 'authors', a.id + '.jpg');
        if (!fs.existsSync(img)) say(`${at}: 肖像 authors/${a.id}.jpg がない`);
        else if (fs.statSync(img).size > 60 * 1024) say(`${at}: 肖像が大きすぎる`);
        if (!/^public domain/i.test(a.photo.lic || '')) {
          say(`${at}: 肖像の権利が「Public domain」でない`);
        }
        if (!a.photo.file || !a.photo.page) say(`${at}: 肖像の出どころがない`);
      }
    }
    if (hasWorks) for (const n of names) if (!seen.has(n)) say(`著者 ${n} の紹介がない`);
    // 余分な画像が残っていないか（肖像を置かない分野にはフォルダ自体がない）
    const adir = path.join(dir, 'authors');
    if (fs.existsSync(adir)) {
      for (const f of fs.readdirSync(adir).filter((x) => x.endsWith('.jpg'))) {
        if (!aid.has(f.slice(0, -4))) say(`使われていない肖像: ${f}`);
      }
    }
  }

  return { ng, n: { works: WORKS.length, maki: nMaki, chars: nChar, paras: nPara, auth: nAuth, note: nNote,
                    word: APP.authorWord || '文豪' } };
}

// 収録量の突き合わせ（docs.js）からも check() を呼ぶ。数え方を2か所に置くと値がずれるため
// （知見 12.4）、数えるのはここだけにする。
module.exports = { check, READERS };

// ---- ここから下はコマンドとして動かしたときだけ ----
if (require.main === module) {
  const want = process.argv.slice(2);
  const list = want.length ? want : READERS;
  let bad = 0;
  for (const rel of list) {
    const r = check(rel);
    const s = r.n;
    if (r.ng.length) {
      bad += r.ng.length;
      console.log(`✗ ${rel}`);
      for (const m of r.ng.slice(0, 40)) console.log('    ' + m);
      if (r.ng.length > 40) console.log(`    …ほか ${r.ng.length - 40} 件`);
    } else {
      const body = s.works ? `${s.works}作品 ${s.maki}章 ${s.paras}段 ${s.chars.toLocaleString('ja-JP')}字` : '';
      console.log(`✓ ${rel.padEnd(18)} ` + body
        + (s.auth ? `${body ? ' ' : ''}${s.word}${s.auth}人` : '')
        + (s.note ? ` 語注${s.note}件` : ''));
    }
  }
  if (bad) { console.log(`\n読み物: ${bad}件の問題`); process.exit(1); }
  console.log('\n読み物: 問題なし');
}
