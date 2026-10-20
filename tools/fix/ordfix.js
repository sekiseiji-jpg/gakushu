// ord（配列）問題の Ⅰ・Ⅱ・Ⅲ の中身を入れ替えて、正解位置を指定の番号に動かす。
// 問題文の Ⅰ〜Ⅲ の行と、解説のローマ数字・丸数字もあわせて書き換える。
//
// 使い方: node tools/fix/ordfix.js <data-quiz.js> <id>:<目標index> ...   （--dry で確認のみ）
// 目標index は tools/fix/plano.js が出す割り当てをそのまま渡せる。
//
// 注意: data-quiz.js を直接書き換える。必ず git で差分を確認し、
//       そのあと node tools/check/all.js を通すこと。
const fs = require('fs');
const ORD = [['Ⅰ', 'Ⅱ', 'Ⅲ'], ['Ⅰ', 'Ⅲ', 'Ⅱ'], ['Ⅱ', 'Ⅰ', 'Ⅲ'], ['Ⅱ', 'Ⅲ', 'Ⅰ'], ['Ⅲ', 'Ⅰ', 'Ⅱ'], ['Ⅲ', 'Ⅱ', 'Ⅰ']];
const MARU = ['①', '②', '③', '④', '⑤', '⑥'];
const RN = ['Ⅰ', 'Ⅱ', 'Ⅲ'];
const BS = String.fromCharCode(92);
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const [file, ...rest] = args.filter((x) => x !== '--dry');
if (!file) { console.log('使い方: node tools/fix/ordfix.js <data-quiz.js> <id>:<目標index> ... [--dry]'); process.exit(2); }
let src = fs.readFileSync(file, 'utf8');
const log = [];

for (const spec of rest) {
  const [id, tRaw] = spec.split(':');
  const t = Number(tRaw);
  const i = src.indexOf("id:'" + id + "'");
  if (i < 0) { log.push('× 見つからない: ' + id); continue; }
  const j = src.indexOf('\n{ id:\'', i + 1);
  const end = j < 0 ? src.length : j;
  let blk = src.slice(i, end);

  const am = /\ba:(\d),/.exec(blk);
  if (!am) { log.push('× a を取れない: ' + id); continue; }
  const a0 = Number(am[1]);
  if (a0 === t) { log.push('= 変更なし: ' + id); continue; }

  const qm = /\n  q:'([\s\S]*?)',\n/.exec(blk);
  if (!qm) { log.push('× q を取れない: ' + id); continue; }
  const q = qm[1];
  // 区切り文字（半角スペース／全角スペース）を見てから行を切り出す
  const first = q.indexOf(BS + 'nⅠ');
  if (first < 0) { log.push('× Ⅰ の行がない: ' + id); continue; }
  const SEP = q[first + 3];
  if (SEP !== ' ' && SEP !== '\u3000') { log.push('× 区切りが不明: ' + id + ' ' + JSON.stringify(SEP)); continue; }
  const marks = RN.map((L) => ({ L, at: q.indexOf(BS + 'n' + L + SEP) }));
  if (marks.some((m) => m.at < 0)) { log.push('× Ⅰ〜Ⅲ の行を取れない: ' + id); continue; }
  if (marks[1].at < marks[0].at || marks[2].at < marks[1].at) { log.push('× Ⅰ〜Ⅲ の順序が不正: ' + id); continue; }
  const head = q.slice(0, marks[0].at);
  const body = {};
  marks.forEach((m, k) => { body[m.L] = q.slice(m.at + 4, k < 2 ? marks[k + 1].at : q.length); });

  // 旧ラベル → 新ラベル
  const map = {}; ORD[a0].forEach((L, k) => (map[L] = ORD[t][k]));
  const inv = {}; for (const L in map) inv[map[L]] = L;
  const newQ = head + RN.map((L) => BS + 'n' + L + SEP + body[inv[L]]).join('');

  const em = /\n  exp:'([\s\S]*?)'\s*\}/.exec(blk);
  if (!em) { log.push('× exp を取れない: ' + id); continue; }
  const exp0 = em[1];
  let exp = exp0.replace(/[ⅠⅡⅢ]/g, (c) => '\u0001' + c).replace(/\u0001([ⅠⅡⅢ])/g, (_, c) => map[c]);
  exp = exp.replace(/正解は[①-⑥]/, '正解は' + MARU[t]);

  let nb = blk.replace(qm[0], '\n  q:\'' + newQ + '\',\n');
  nb = nb.replace(em[0], em[0].replace(exp0, exp));
  nb = nb.replace(am[0], 'a:' + t + ',');

  log.push('○ ' + id + '  a:' + a0 + '→' + t + '  ' + ORD[a0].join('') + '→' + ORD[t].join(''));
  if (exp0 !== exp) { log.push('    exp旧: ' + exp0.slice(0, 64)); log.push('    exp新: ' + exp.slice(0, 64)); }
  if (!dry) src = src.slice(0, i) + nb + src.slice(end);
}
if (!dry) fs.writeFileSync(file, src);
console.log(log.join('\n'));
