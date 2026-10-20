// 1分野のデータをまとめて検証する。
// 使い方: node tools/check/chk.js <分野フォルダ> [minlen]
//   minlen … 本文中のラテン文字を何文字から疑うか。省略するとフォルダのパスから
//             教科を判定して既定値（社会=2／理科・数学・国語=4／英語=999）を使う。
const path = require('path');
const { load, minlenFor, label } = require('./lib.js');

const D = process.argv[2];
if (!D) { console.log('使い方: node tools/check/chk.js <分野フォルダ> [minlen]'); process.exit(2); }
const MIN = process.argv[3] === undefined ? minlenFor(D) : Number(process.argv[3]);

let data;
try { data = load(D); } catch (e) { console.log('✗ ERRORS:\n' + e.message); process.exit(1); }
if (!data) { console.log('データがありません: ' + D); process.exit(1); }
const { UNITS, APP, QUIZ: q, THEMES: t } = data;

const errs = [], ids = new Set();
const sum = (f) => UNITS.reduce((a, x) => a + f(x), 0);

UNITS.forEach((x) => {
  if (ids.has(x.id)) errs.push('単元ID重複: ' + x.id);
  ids.add(x.id);
  ['name', 'yomi', 'span', 'icon', 'color', 'catch'].forEach((k) => { if (!x[k]) errs.push(x.id + ' に ' + k + ' がない'); });
  ['summary', 'sections', 'keywords', 'people', 'events', 'topics'].forEach((k) => { if (!Array.isArray(x[k]) || !x[k].length) errs.push(x.id + ' の ' + k + ' が空'); });
  (x.events || []).forEach((e) => { if (typeof e.n !== 'number') errs.push(x.id + ' の一覧に数値のnがない: ' + e.t); });
  (x.keywords || []).forEach((k) => { if (!k.w || !k.y || !k.d) errs.push(x.id + ' の用語に欠け: ' + k.w); });
  (x.people || []).forEach((p) => { if (!p.n || !p.y || !p.d) errs.push(x.id + ' の人物に欠け: ' + p.n); });
});

// --- 言語チェック（本文に日本語以外が混じっていないか） ---
// 単位・関数名・ケッペンの気候区分など、日本語の文中に正当に出てくる語は見逃す。
const ALLOW = new Set(('SNS AI GDP ODA NPO NGO SDGs QOL DNA ES iPS sin cos tan log ln exp max min lim ' +
  'cm mm km kg mL GPS ICT ' +
  'Af Am Aw As BS BW Cfa Cfb Cfc Cs Cw Df Dfa Dfb Dfc Dw ET EF H').split(' '));
const bad = [];
const scan = (id, k, s) => {
  if (!s) return;
  if (MIN > 0 && MIN < 999) for (const m of String(s).matchAll(new RegExp('[A-Za-z]{' + MIN + ',}', 'g'))) {
    const w = m[0];
    if (ALLOW.has(w)) continue;
    if (/^[A-Z0-9]+s?$/.test(w)) continue;   // 略語（NATO, IMF, GATT, SDGs …）は日本語の文中でも使う
    // 理科・数学では化学式や数式の変数（ZnSO, IBLsin …）を除くため、
    // 「全部小文字」か「先頭だけ大文字」の語（＝ふつうの英単語の形）だけを拾う
    if (MIN > 2 && !/^[a-z]+$/.test(w) && !/^[A-Z][a-z]+$/.test(w)) continue;
    bad.push(id + '/' + k + ': [' + w + ']');
  }
  // キリル文字・ハングルの混入は語長にかかわらず見る（英語の分野でも検査する）
  for (const m of String(s).matchAll(/[Ѐ-ӿ]+|[가-힣]+/g)) bad.push(id + '/' + k + ': [' + m[0] + ']');
};

UNITS.forEach((x) => {
  x.summary.forEach((p, i) => scan(x.id, 'sum' + i, p));
  x.sections.forEach((s) => { scan(x.id, 'sec', s.t); s.items.forEach((i) => { scan(x.id, 'h', i.h); scan(x.id, 'b', i.b); }); });
  x.keywords.forEach((k) => { scan(x.id, 'kw', k.w); scan(x.id, 'kw', k.d); });
  x.people.forEach((p) => { scan(x.id, 'ppl', p.n); scan(x.id, 'ppl', p.d); });
  x.events.forEach((e) => { scan(x.id, 'ev', e.t); scan(x.id, 'ev', e.d); });
  x.topics.forEach((tp) => { scan(x.id, 'tp', tp.t); scan(x.id, 'tp', tp.lead); tp.body.forEach((b) => scan(x.id, 'tp', b)); });
});
// テーマの steps[].era は単元ID（ローマ字）なので本文チェックの対象外
t.forEach((th) => { scan(th.id, 'th', th.title); scan(th.id, 'th', th.lead); th.steps.forEach((s) => { scan(th.id, 'th', s.t); scan(th.id, 'th', s.b); }); });

// --- クイズ ---
const byU = {}, ty = {}, ca = {}, qids = new Set(), C = '①②③④⑤⑥';
q.forEach((x) => {
  if (qids.has(x.id)) errs.push('問題ID重複: ' + x.id);
  qids.add(x.id);
  if (!(x.a >= 0 && x.a < x.choices.length)) errs.push('正解インデックス不正: ' + x.id);
  if (x.type === 'ord' && x.choices.length !== 6) errs.push('ordが6択でない: ' + x.id);
  if (x.type !== 'ord' && x.choices.length !== 4) errs.push('4択でない: ' + x.id);
  if (x.type === 'src' && !x.src) errs.push('資料本文がない: ' + x.id);
  if (!x.exp) errs.push('解説がない: ' + x.id);
  if (!(x.lv >= 1 && x.lv <= 3)) errs.push('lvが不正: ' + x.id);
  if (!ids.has(x.era)) errs.push('存在しない単元: ' + x.id + ' -> ' + x.era);
  if (APP && APP.cats && !APP.cats.includes(x.cat)) errs.push('分野区分が不正: ' + x.id + ' -> ' + x.cat);
  // 解説の丸数字と a の一致
  const m = String(x.exp).match(/正解は([①-⑥])/) || String(x.exp).match(/^([①-⑥])が(?:正しい|誤り)/);
  if (m && C.indexOf(m[1]) !== x.a) errs.push('解説の正解番号とaが不一致: ' + x.id + '（解説=' + m[1] + ' / a=' + C[x.a] + '）');
  // 組合せの選択肢には2通りある。
  //   ['a・c','a・d','b・c','b・d'] … {a,b} から1つ・{c,d} から1つ。この型だけ構造規則が効く
  //   ['a・b','a・d','b・c','c・d'] … 社会4分野が使う型。規則が違うので形だけ見る
  if (x.type === 'cmb') {
    const pairType = x.choices.join(',') === 'a・c,a・d,b・c,b・d';
    if (pairType && !/^[ab]・[cd]$/.test(x.choices[x.a])) errs.push('cmbの正解の形が不正: ' + x.id + ' -> ' + x.choices[x.a]);
    if (!x.choices.every((c) => /^[abcd]・[abcd]$/.test(c))) errs.push('cmbの選択肢の形が不正: ' + x.id);
  }
  scan(x.id, 'q', x.q); scan(x.id, 'src', x.src); scan(x.id, 'exp', x.exp);
  x.choices.forEach((c, i) => scan(x.id, 'ch' + i, c));
  byU[x.era] = (byU[x.era] || 0) + 1; ty[x.type] = (ty[x.type] || 0) + 1; ca[x.cat] = (ca[x.cat] || 0) + 1;
});
if (bad.length) errs.push('非日本語の混入:\n   ' + bad.slice(0, 15).join('\n   '));

console.log('■ ' + label(D) + '  単元' + UNITS.length +
  '  一覧' + sum((x) => x.events.length) + ' 用語' + sum((x) => x.keywords.length) +
  ' 人物' + sum((x) => x.people.length) +
  ' 詳細' + sum((x) => x.sections.reduce((b, s) => b + s.items.length, 0)) +
  ' トピック' + sum((x) => x.topics.length) +
  '  テーマ' + t.length + '  クイズ' + q.length);
if (q.length) {
  console.log('  形式 ' + JSON.stringify(ty) + '  分野 ' + JSON.stringify(ca));
  console.log('  単元別 ' + UNITS.map((y) => y.id + ':' + (byU[y.id] || 0)).join(' '));
  UNITS.forEach((y) => { if ((byU[y.id] || 0) < 12) errs.push('12問未満: ' + y.id + '=' + (byU[y.id] || 0)); });
  const dist = {};
  q.forEach((x) => { (dist[x.type] = dist[x.type] || {})[x.a] = ((dist[x.type] || {})[x.a] || 0) + 1; });
  Object.entries(dist).forEach(([ty2, d]) => {
    const n = Object.values(d).reduce((a, b) => a + b, 0), mx = Math.max(...Object.values(d));
    console.log('  正解位置 ' + ty2 + ': ' + JSON.stringify(d));
    // cmb と ord はシャッフルされないので、ここが極端に偏ると学習者に見えてしまう。
    // 細かい基準は bias.js（cmb 35%／ord 30%）が見る。ここは明らかな偏りだけ落とす。
    if ((ty2 === 'cmb' || ty2 === 'ord') && n >= 6 && mx > n * 0.5) errs.push(ty2 + ' の正解位置が偏っている（' + mx + '/' + n + '）');
  });
}
console.log(errs.length ? '✗ ERRORS:\n' + errs.join('\n') : '✓ 検証OK');
process.exit(errs.length ? 1 : 0);
