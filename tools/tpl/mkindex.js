/* 全アプリの単元データから、ポータル用の検索インデックスを生成する。
   使い方: node tools/tpl/mkindex.js
   出力:   学習アプリ/search-index.js   （ポータルと教科ページが読む）

   インデックスには単元の見出し情報と用語名だけを入れる。
   説明文まで入れるとファイルが重くなるため、本文の検索は各アプリの🔍に任せる。
*/
const fs = require('fs'), path = require('path'), os = require('os');

const BASE = path.dirname(path.dirname(__dirname));
const SUBJECTS = ['社会', '理科', '数学', '国語', '英語'];

function load(file, names) {
  if (!fs.existsSync(file)) return null;
  let s = fs.readFileSync(file, 'utf8');
  if (!/module\.exports/.test(s)) s += '\n];\nmodule.exports={' + names + '};';
  const p = path.join(os.tmpdir(), '_ix_' + Buffer.from(file).toString('hex').slice(-40) + '.js');
  fs.writeFileSync(p, s); delete require.cache[p];
  try { return require(p); } catch (e) { console.log('  読めません: ' + file + ' (' + e.message + ')'); return null; }
}

const fields = [];   // 分野（アプリ）の一覧
const units = [];    // 単元の一覧
let skipped = 0;

for (const sub of SUBJECTS) {
  const dir = path.join(BASE, sub);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('._') || name.startsWith('.')) continue;
    const d = path.join(dir, name);
    if (!fs.statSync(d).isDirectory()) continue;
    const m = load(path.join(d, 'data-units.js'), 'UNITS,APP') || load(path.join(d, 'data-eras.js'), 'ERAS,APP');
    const list = m && (m.UNITS || m.ERAS);
    if (!list || !list.length) { skipped++; continue; }
    const app = (m.APP && m.APP.title) || name;
    const icon = (m.APP && m.APP.icon) || '📘';
    const url = encodeURIComponent(sub) + '/' + encodeURIComponent(name) + '/';
    fields.push({ s: sub, f: name, t: app, i: icon, u: url, n: list.length });
    for (const e of list) {
      units.push({
        s: sub, f: name, u: url, id: e.id,
        n: e.name, y: e.yomi || '', p: e.span || '', c: e.catch || '', i: e.icon || '',
        // 用語と人物・区別の見出しだけを拾う（説明文は入れない）
        w: [].concat((e.keywords || []).map((k) => k.w), (e.people || []).map((x) => x.n)),
      });
    }
  }
}

// 読み物アプリ（data-works.js を持つもの）。巻を単元と同じ形で並べ、作品名で引けるようにする。
for (const sub of SUBJECTS) {
  const dir = path.join(BASE, sub);
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith('.')) continue;
    const d = path.join(dir, name);
    if (!fs.statSync(d).isDirectory()) continue;
    const m = load(path.join(d, 'data-works.js'), 'WORKS,APP');
    if (!m || !m.WORKS || !m.WORKS.length) continue;
    const url = encodeURIComponent(sub) + '/' + encodeURIComponent(name) + '/';
    const nMaki = m.WORKS.reduce((a, w) => a + w.maki.length, 0);
    fields.push({ s: sub, f: name, t: (m.APP && m.APP.title) || name,
                  i: (m.APP && m.APP.icon) || '📕', u: url, n: nMaki });
    for (const w of m.WORKS) {
      for (const k of w.maki) {
        units.push({
          s: sub, f: name, u: url, id: w.id + '-' + k.no,
          n: k.name, y: k.yomi || '', p: w.title + '　第' + k.no + '巻', c: k.lead || '', i: w.icon || '',
          w: [w.title, w.author],
        });
      }
    }
  }
}

const out = '/* 自動生成 — tools/tpl/mkindex.js で作り直す。手で編集しない。\n'
  + '   ポータルと教科ページの検索が読む。単元の見出しと用語名だけを収める。 */\n'
  + 'const SEARCH_FIELDS = ' + JSON.stringify(fields, null, 0) + ';\n'
  + 'const SEARCH_UNITS = ' + JSON.stringify(units, null, 0) + ';\n';

const dest = path.join(BASE, 'search-index.js');
fs.writeFileSync(dest, out, 'utf8');
const kb = (Buffer.byteLength(out, 'utf8') / 1024).toFixed(1);
console.log('分野 ' + fields.length + '  単元 ' + units.length + '  用語 ' + units.reduce((a, x) => a + x.w.length, 0));
console.log('出力: ' + path.relative(BASE, dest) + '  (' + kb + ' KB)' + (skipped ? '  データ未作成でとばした分野: ' + skipped : ''));
