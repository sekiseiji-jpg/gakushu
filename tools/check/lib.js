// 検証スクリプトの共通部分。データの読み込みと、分野の一覧を持つ。
// 依存なし（Node の標準モジュールだけ）。
const fs = require('fs');
const path = require('path');

// リポジトリのルート（tools/check から2つ上）
const ROOT = path.resolve(__dirname, '..', '..');

// 言語チェックの最小語長。教科ごとに違う。
//   社会 = 2  … ABC・GHQ のような略語以外のラテン文字は原則出ない
//   理科・数学・国語 = 4 … 化学式・単位・数式の変数（NaCl, kJ, sinθ）があるので短い語は見ない
//   英語 = 999 … 本文が英語なのでラテン文字は見ない（キリル文字・ハングルだけ見る）
const MINLEN = { '社会': 2, '理科': 4, '数学': 4, '国語': 4, '英語': 999 };

// 全18分野。tools/tpl/apps.json には社会の4分野（日本史・世界史・地理・政治・経済）が
// 入っていないので、ここに18分野そろえて置いてある。
const APPS = [
  '社会/日本史', '社会/世界史', '社会/地理', '社会/政治・経済', '社会/倫理',
  '理科/物理', '理科/化学', '理科/生物', '理科/地学',
  '数学/数学ⅠA', '数学/数学ⅡB', '数学/数学ⅢC',
  '国語/現代文', '国語/古文', '国語/漢文', '国語/漢検2級',
  '英語/英文法', '英語/英文読解', '英語/語彙と表現',
];

// パスから教科名を取り出す（社会/日本史 でも絶対パスでも効く）
function subjectOf(dir) {
  const parts = path.resolve(dir).split(/[\\/]/);
  for (let i = parts.length - 1; i >= 0; i--) if (MINLEN[parts[i]] !== undefined) return parts[i];
  return null;
}

// 教科ごとの既定の最小語長
function minlenFor(dir) {
  const s = subjectOf(dir);
  return s === null ? 2 : MINLEN[s];
}

// 引数で分野が指定されていればそれを、なければ全18分野を返す
function dirsFromArgs(args) {
  const a = args.filter((x) => x[0] !== '-');
  return a.length ? a : APPS.map((d) => path.join(ROOT, d));
}

// 分野の表示名（社会/日本史 → 日本史）
function label(dir) {
  return path.basename(path.resolve(dir));
}

// 表示幅をそろえる（日本語や全角のローマ数字は2幅として数える）
const WIDE = /[ᄀ-ᅟⅠ-ⅿ⺀-꓏가-힣豈-﫿︰-﹯＀-｠￠-￦]/;
function pad(s, w) {
  let n = 0;
  for (const c of String(s)) n += WIDE.test(c) ? 2 : 1;
  return String(s) + ' '.repeat(Math.max(1, w - n));
}

// data-*.js を評価して中の定数を取り出す。ビルドなしの素の JS なので new Function で読める。
function evalFile(file, names) {
  if (!fs.existsSync(file)) return null;
  const src = fs.readFileSync(file, 'utf8');
  try {
    return new Function('module', 'exports', src + '\nreturn {' + names + '};')({ exports: {} }, {});
  } catch (e) {
    throw new Error(file + ' を読めない: ' + e.message);
  }
}

// 1分野のデータをまとめて読む。日本史だけ UNITS ではなく ERAS（data-eras.js）を使う。
function load(dir) {
  const u = evalFile(path.join(dir, 'data-units.js'), 'APP, UNITS');
  const e = u ? null : evalFile(path.join(dir, 'data-eras.js'), 'ERAS');
  if (!u && !e) return null;
  return {
    UNITS: u ? u.UNITS : e.ERAS,
    APP: u ? u.APP : null,            // 日本史には APP がない（cats の検査は飛ばす）
    QUIZ: (evalFile(path.join(dir, 'data-quiz.js'), 'QUIZ') || {}).QUIZ || [],
    THEMES: (evalFile(path.join(dir, 'data-themes.js'), 'THEMES') || {}).THEMES || [],
  };
}

module.exports = { ROOT, APPS, MINLEN, subjectOf, minlenFor, dirsFromArgs, label, pad, load };
