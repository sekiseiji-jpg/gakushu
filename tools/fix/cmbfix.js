// cmb（組合せ）問題の a〜d の中身を入れ替えて、正解位置を指定の番号に動かす。
// 問題文の a〜d の行と、解説の記号参照・丸数字もあわせて書き換えるので、
// 「正解の位置だけ動いて解説が取り残される」ことが起きない。
//
// 使い方: node tools/fix/cmbfix.js <data-quiz.js> <id>:<目標index> ...   （--dry で確認のみ）
// 目標index は tools/fix/plan.js が出す割り当てをそのまま渡せる。
//
// 注意: data-quiz.js を直接書き換える。必ず git で差分を確認し、
//       そのあと node tools/check/all.js を通すこと。
const fs = require('fs');
const BS = String.fromCharCode(92);
const MARU = '①②③④';
const args = process.argv.slice(2);
const dry = args.includes('--dry');
const [file, ...rest] = args.filter((x) => x !== '--dry');
if (!file) { console.log('使い方: node tools/fix/cmbfix.js <data-quiz.js> <id>:<目標index> ... [--dry]'); process.exit(2); }
let src = fs.readFileSync(file, 'utf8');
const L = ['a', 'b', 'c', 'd'];
const log = [];

for (const spec of rest) {
  const [id, tRaw] = spec.split(':');
  const t = Number(tRaw);
  const i = src.indexOf("id:'" + id + "'");
  if (i < 0) { log.push('× 見つからない: ' + id); continue; }
  const j = src.indexOf('\n{ id:\'', i + 1);
  const end = j < 0 ? src.length : j;
  let blk = src.slice(i, end);

  const cm = /choices:\[([^\]]*)\],\s*a:(\d),/.exec(blk);
  if (!cm) { log.push('× choices/a を取れない: ' + id); continue; }
  const pairs = (cm[1].match(/'([abcd])・([abcd])'/g) || []).map((s) => [s[1], s[3]]);
  if (pairs.length !== 4) { log.push('× 組合せ形式でない: ' + id); continue; }
  const a0 = Number(cm[2]);
  if (a0 === t) { log.push('= 変更なし: ' + id); continue; }

  // 置換 σ: 旧記号 → 新記号（正解どうし・誤答どうしを対応させる）
  const cur = pairs[a0], tgt = pairs[t];
  const curW = L.filter((x) => !cur.includes(x));
  const tgtW = L.filter((x) => !tgt.includes(x));
  const sig = {};
  sig[cur[0]] = tgt[0]; sig[cur[1]] = tgt[1];
  sig[curW[0]] = tgtW[0]; sig[curW[1]] = tgtW[1];
  const inv = {}; for (const k in sig) inv[sig[k]] = k;

  // q の各記号の本文を取り出す（区切りは半角／全角スペースのどちらもある）
  const qm = /\n  q:'([\s\S]*?)',\n/.exec(blk);
  if (!qm) { log.push('× q を取れない: ' + id); continue; }
  const q = qm[1];
  const first = q.indexOf(BS + 'na');
  if (first < 0) { log.push('× a の行がない: ' + id); continue; }
  const SEP = q[first + 3];
  if (SEP !== ' ' && SEP !== '\u3000') { log.push('× 区切りが不明: ' + id + ' ' + JSON.stringify(SEP)); continue; }
  const marks = L.map((c) => ({ c, at: q.indexOf(BS + 'n' + c + SEP) }));
  if (marks.some((m) => m.at < 0)) { log.push('× a〜d の行を取れない: ' + id); continue; }
  if (marks.some((m, k) => k && m.at < marks[k - 1].at)) { log.push('× a〜d の順序が不正: ' + id); continue; }
  const head = q.slice(0, marks[0].at);
  const body = {};
  marks.forEach((m, k) => {
    body[m.c] = q.slice(m.at + 3 + SEP.length, k < 3 ? marks[k + 1].at : q.length);
  });
  const newQ = head + L.map((c) => BS + 'n' + c + SEP + body[inv[c]]).join('');

  // exp の記号参照だけを置換（英単語の一部は触らない）
  const em = /\n  exp:'([\s\S]*?)'\s*\}/.exec(blk);
  if (!em) { log.push('× exp を取れない: ' + id); continue; }
  const exp0 = em[1];
  let exp = exp0
    .replace(/(^|[^A-Za-z0-9])([abcd])(?![A-Za-z0-9])/g, (s, p, c) => p + '\u0001' + c)
    .replace(/\u0001([abcd])/g, (s, c) => sig[c])
    .replace(/正解は[①-④]/, '正解は' + MARU[t]);

  let nb = blk.replace(qm[0], '\n  q:\'' + newQ + '\',\n');
  nb = nb.replace(em[0], em[0].replace(exp0, exp));
  nb = nb.replace(/(choices:\[[^\]]*\],\s*a:)\d,/, '$1' + t + ',');

  log.push('○ ' + id + '  a:' + a0 + '→' + t + '  σ=' + L.map((c) => c + '→' + sig[c]).join(' '));
  if (!dry) src = src.slice(0, i) + nb + src.slice(end);
}
if (!dry) fs.writeFileSync(file, src);
console.log(log.join('\n'));
