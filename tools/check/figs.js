// 単元の説明に添えた図・表・写真（data-figs.js）を調べる。
//   ・単元idと、出す場所（ov / secN）が実在するか
//   ・表の行の長さが見出しとそろっているか
//   ・図（svg）が viewBox をもち、閉じているか
//   ・写真があり、大きすぎず、出どころが Public domain / CC0 か
//   ・日本語以外の文字がまぎれていないか
//   ・どの単元にいくつ付いているか（まだ無い単元を一覧にする）
// 使い方: node tools/check/figs.js [社会/世界史 ...]   （無指定なら全分野）
const fs = require('fs');
const path = require('path');
const os = require('os');
const { jpgsIn } = require('./lib.js');

const ROOT = path.dirname(path.dirname(__dirname));
const FIELDS = ['社会/日本史', '社会/世界史', '社会/地理', '社会/政治・経済', '社会/倫理',
  '理科/物理', '理科/化学', '理科/生物', '理科/地学',
  '数学/数学ⅠA', '数学/数学ⅡB', '数学/数学ⅢC',
  '国語/現代文', '国語/古文', '国語/漢文', '国語/漢検2級',
  '英語/英文法', '英語/英文読解', '英語/語彙と表現', '英語/英検2級'];

function load(file, names) {
  let s = fs.readFileSync(file, 'utf8');
  if (!/module\.exports/.test(s)) s += '\n];\nmodule.exports={' + names + '};';
  const p = path.join(os.tmpdir(), '_fg' + Buffer.from(file).toString('hex').slice(-40) + '.js');
  fs.writeFileSync(p, s);
  delete require.cache[p];
  return require(p);
}

const NG_SCRIPT = /[Ѐ-ӿ؀-ۿ가-힯]/;   // キリル・アラビア・ハングル
const LATIN = /[A-Za-z]{3,}/g;
const MAXKB = 130;

function check(rel) {
  const dir = path.join(ROOT, rel);
  const isNihonshi = rel.indexOf('日本史') >= 0;
  const uf = path.join(dir, isNihonshi ? 'data-eras.js' : 'data-units.js');
  const units = load(uf, (isNihonshi ? 'ERAS' : 'UNITS') + ',QUIZ,THEMES,APP')[isNihonshi ? 'ERAS' : 'UNITS'];
  const byId = {};
  units.forEach((u) => { byId[u.id] = u; });

  const ff = path.join(dir, 'data-figs.js');
  if (!fs.existsSync(ff)) return { ng: ['data-figs.js がない'], n: {} };
  const { FIGS } = load(ff, 'FIGS');
  const ng = [];
  const say = (m) => ng.push(m);
  let nFig = 0, nPhoto = 0, nTable = 0, nSvg = 0, nMap = 0, bytes = 0;
  const withFig = new Set();

  for (const id of Object.keys(FIGS)) {
    const u = byId[id];
    if (!u) { say(`${id}: そんな単元はない`); continue; }
    withFig.add(id);
    FIGS[id].forEach((f, i) => {
      const at = `${id}[${i}]`;
      nFig++;
      if (!f.t) say(`${at}: 見出し t がない`);
      if (!['table', 'svg', 'map', 'photo'].includes(f.k)) say(`${at}: 種類 k がおかしい（${f.k}）`);
      if (f.at !== 'ov') {
        const m = /^sec(\d+)$/.exec(f.at || '');
        if (!m) say(`${at}: at が ov でも secN でもない（${f.at}）`);
        else if (Number(m[1]) >= u.sections.length) {
          say(`${at}: 第${m[1]}節は無い（この単元は${u.sections.length}節）`);
        }
      }
      // 文章に日本語以外がまぎれていないか（写真のファイル名は除く）
      const texts = [f.t, f.cap || ''];
      if (f.k === 'table') texts.push(...f.head, ...f.rows.flat());
      // 図の中の文字も見る（タグを外してから調べる）
      if (f.k === 'svg' || f.k === 'map') texts.push((f.svg || '').replace(/<[^>]*>/g, ' '));
      for (const t of texts) {
        if (NG_SCRIPT.test(t)) say(`${at}: 日本語以外の文字 ${t.slice(0, 30)}`);
      }
      if (f.k === 'table') {
        nTable++;
        if (!Array.isArray(f.head) || !f.head.length) say(`${at}: 表の見出しがない`);
        f.rows.forEach((r, j) => {
          if (r.length !== f.head.length) {
            say(`${at}: ${j + 1}行目の列数が${r.length}（見出しは${f.head.length}）`);
          }
        });
      } else if (f.k === 'svg' || f.k === 'map') {
        if (f.k === 'map') nMap++; else nSvg++;
        const s = f.svg || '';
        if (!s.startsWith('<svg')) say(`${at}: svg が <svg で始まっていない`);
        if (s.indexOf('viewBox') < 0) say(`${at}: svg に viewBox がない`);
        if ((s.match(/<svg/g) || []).length !== (s.match(/<\/svg>/g) || []).length) {
          say(`${at}: svg のタグが閉じていない`);
        }
        if (s.indexOf('role="img"') < 0) say(`${at}: svg に role="img" がない`);
        if (/#[0-9a-fA-F]{3,6}\b/.test(s)) say(`${at}: svg に色の直書きがある（CSS変数を使う）`);
      } else if (f.k === 'photo') {
        nPhoto++;
        const m = /^img\/([A-Za-z0-9_-]+)\.jpg$/.exec(f.src || '');
        if (!m) { say(`${at}: src が img/xxx.jpg の形でない（${f.src}）`); return; }
        const p = path.join(dir, 'img', m[1] + '.jpg');
        if (!fs.existsSync(p)) { say(`${at}: 写真 ${f.src} がない`); return; }
        const kb = fs.statSync(p).size / 1024;
        bytes += fs.statSync(p).size;
        if (kb > MAXKB) say(`${at}: 写真が大きい（${Math.round(kb)}KB）`);
        if (!f.credit) say(`${at}: 写真の出どころがない`);
        // No restrictions は米議会図書館の「権利制限なし」の表示で、実質的に自由に使える
        else if (!/（(Public domain|CC0|No restrictions)/.test(f.credit)) {
          say(`${at}: 写真の権利が Public domain / CC0 でない（${f.credit.slice(-24)}）`);
        }
      }
    });
  }
  // 使われていない写真
  const idir = path.join(dir, 'img');
  if (fs.existsSync(idir)) {
    const used = new Set();
    for (const id of Object.keys(FIGS)) {
      for (const f of FIGS[id]) if (f.k === 'photo' && f.src) used.add(f.src.slice(4, -4));
    }
    for (const f of jpgsIn(idir)) {
      if (!used.has(f.slice(0, -4))) say(`使われていない写真: img/${f}`);
    }
  }
  const none = units.filter((u) => !withFig.has(u.id)).map((u) => u.name);
  return { ng, n: { units: units.length, done: withFig.size, none, nFig, nPhoto, nTable, nSvg, nMap, bytes } };
}

const want = process.argv.slice(2);
const list = want.length ? want : FIELDS;
let bad = 0, allFig = 0, allPhoto = 0, allBytes = 0, allDone = 0, allUnits = 0;
for (const rel of list) {
  const r = check(rel);
  const s = r.n;
  allFig += s.nFig || 0; allPhoto += s.nPhoto || 0; allBytes += s.bytes || 0;
  allDone += s.done || 0; allUnits += s.units || 0;
  if (r.ng.length) {
    bad += r.ng.length;
    console.log(`✗ ${rel}`);
    for (const m of r.ng.slice(0, 25)) console.log('    ' + m);
    if (r.ng.length > 25) console.log(`    …ほか ${r.ng.length - 25} 件`);
  } else {
    const miss = s.none && s.none.length ? `　未着手 ${s.none.length}単元` : '';
    console.log(`✓ ${rel.padEnd(16)} ${s.done}/${s.units}単元  図版${String(s.nFig).padStart(3)}`
      + `（表${s.nTable} 図${s.nSvg} 地図${s.nMap} 写真${s.nPhoto}）${miss}`);
  }
}
console.log(`\n合計 ${allDone}/${allUnits}単元  図版${allFig}点（うち写真${allPhoto}点 `
  + `${(allBytes / 1048576).toFixed(1)}MB）`);
if (bad) { console.log(`✗ 直すところが ${bad} 件あります`); process.exit(1); }
console.log('✓ 図版に問題なし');
