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

// 全19分野。tools/tpl/apps.json には社会の4分野（日本史・世界史・地理・政治・経済）が
// 入っていないので、ここに19分野そろえて置いてある。
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

// 引数で分野が指定されていればそれを、なければ全19分野を返す
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


// ---- sel・src の解説に出てくる丸数字と a の突き合わせ ----
// 解説は「③が正しい。…①は誤りで…②も誤りで…④も誤りで…」のように、ほぼ全問で
// 複数の丸数字に触れる。正解の位置を動かしたときにここを直し忘れると、
// 設定で「選択肢シャッフル」を切った人に食い違いが見えてしまう。
const MARU = '①②③④';
// 「正しい」側・「誤り」側を表す言い方。長いものから順に並べる（短いものが先に当たらないように）。
const WORD_NG = '誤りで|誤り|誤って|誤った|誤る|正しくな|適当でな|適切でな|当てはまらな|あてはまらな|成り立たな|不適';
const WORD_OK = '正しく|正しい|正し|正解|適当|適切|当てはま|あてはま|成り立つ';
// 丸数字（連続可）＋助詞など＋評価。「①②③はいずれも正しい」「①と④は誤りで」も拾う。
const ASSERT = new RegExp('([①-④]{1,4})(?:[はもがのと①-④]|に加えて|のみ|いずれも|いずれか|すべて|とも|、|まさに)*?(?:(' +
  WORD_NG + ')|(' + WORD_OK + '))', 'g');

// 解説の冒頭（または「正解は③」）が指す番号と、その評価の向き
function expVerdict(exp) {
  const e = String(exp);
  let m = e.match(new RegExp('^([①-④])[はがも](?:(' + WORD_NG + ')|(' + WORD_OK + '))'));
  if (m) return { n: m[1], pol: m[2] ? 'x' : 'o' };
  m = e.match(/正解は([①-④])/);
  if (m) return { n: m[1], pol: 'o' };
  return null;
}

// 設問が「誤っているもの」を選ばせているか。「…ものを、次の①〜④のうちから一つ選べ」の
// 直前だけを見る（本文に「誤り」の語が出てくる問題で取り違えないため）。
function askNegative(q) {
  const s = String(q);
  const m = s.match(/(.{0,10})ものを、/);
  return /誤|不適|でないもの|正しくないもの/.test(m ? m[1] : s);
}

// 1問ぶんの矛盾を返す（空配列なら問題なし）。sel・src 以外は見ない。
function expRefErrors(x) {
  if (x.type !== 'sel' && x.type !== 'src') return [];
  const e = String(x.exp);
  if (!/[①-④]/.test(e)) return [];
  const out = [];
  const v = expVerdict(e);
  // 正解の番号がどちら向きに断定されているか。冒頭の断定があればそれに合わせる。
  const ansPol = v ? v.pol : (askNegative(x.q) ? 'x' : 'o');
  if (v && MARU.indexOf(v.n) !== x.a) {
    out.push('解説の冒頭が指す番号と a が不一致（解説=' + v.n + ' / a=' + MARU[x.a] + '）');
  }
  for (const m of e.matchAll(ASSERT)) {
    const pol = m[2] ? 'x' : 'o';
    for (const ch of m[1]) {
      if (MARU.indexOf(ch) === x.a && pol !== ansPol) {
        out.push('解説が正解の' + ch + 'を逆に断定している（「' + m[0] + '」）');
      }
    }
  }
  return out;
}

// フォルダの中の写真を並べる。macOS でコピーすると `._名前.jpg` という影のファイルができる
// （リソースフォークの入れ物で、中身は画像ではない）。`ls` はドットで始まる名前を隠すが
// readdirSync は返すので、ここで落とさないと「使われていない写真」として挙がってしまう。
// .gitignore で `._*` を無視しているのと同じことを、ファイルを数える側でもやる。
function jpgsIn(dir) {
  return fs.readdirSync(dir).filter((f) => !f.startsWith('._') && f.endsWith('.jpg'));
}

module.exports = { ROOT, APPS, MINLEN, subjectOf, minlenFor, dirsFromArgs, label, pad, load, expRefErrors, jpgsIn };
