// sel（正誤判定）と src（短文・資料）の正解位置を均す。
//
// cmb・ord と違い、sel・src は選択肢の並び自体に意味がないので、
// 「正解の文を取り出して別の位置に差し込む」ことで正解位置を動かす。
// 残り3つの相対順序は変えないので、解説が誤答に触れる順序（①→②→③…）も崩れない。
//
// 解説（exp）の丸数字はすべて新しい番号に付け替える。設問文（q）の
// 「①〜④のうちから一つ選べ」は触らない（置換は exp に限定する）。
//
// 次の問題は動かさない（ロック）。
//   ・src や choices の中に丸数字があるもの（丸数字が選択肢ではなく資料を指している）
//   ・選択肢が数値の昇順・降順に並んでいるもの（計算問題の数値は並び順に意味がある）
//
// 使い方: node tools/fix/selfix.js <分野フォルダ> [--dry] [--seed N]
//
// 注意: data-quiz.js を直接書き換える。必ず git で差分を確認し、
//       そのあと node tools/check/all.js と node tools/check/xsel.js を通すこと。
const fs = require('fs');
const path = require('path');
const BS = String.fromCharCode(92);
const MARU = '①②③④';

const args = process.argv.slice(2);
const dry = args.includes('--dry');
const si = args.indexOf('--seed');
const seed0 = si < 0 ? 7 : Number(args[si + 1]);
const dir = args.filter((x) => x[0] !== '-' && x !== String(seed0))[0];
if (!dir) { console.log('使い方: node tools/fix/selfix.js <分野フォルダ> [--dry] [--seed N]'); process.exit(2); }
const file = path.join(dir, 'data-quiz.js');

let src = fs.readFileSync(file, 'utf8');
const QUIZ = new Function('module', 'exports', src + '\nreturn QUIZ;')({ exports: {} }, {});

// ---- ロックの判定 ----
// 選択肢の先頭にある数値を取り出す（'1.5 m/s²' → 1.5、'約 20 %' → 20）
function headNum(s) {
  const m = String(s).match(/^[^0-9+\-]*([-+]?[0-9]+(?:\.[0-9]+)?)/);
  return m ? parseFloat(m[1]) : null;
}
function locked(x) {
  if (/[①-⑥]/.test(String(x.src || ''))) return '資料に丸数字';
  if (x.choices.some((c) => /[①-⑥]/.test(c))) return '選択肢に丸数字';
  const ns = x.choices.map(headNum);
  if (ns.every((v) => v !== null)) {
    const asc = ns.every((v, i) => i === 0 || ns[i - 1] < v);
    const desc = ns.every((v, i) => i === 0 || ns[i - 1] > v);
    if (asc || desc) return '数値が順に並ぶ';
  }
  return null;
}

// ---- 決定的な擬似乱数 ----
let s = seed0;
const rnd = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648;
function shuffled(a) {
  const b = a.slice();
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}

// ---- 1形式ぶんの割り当てを決める ----
function planType(type) {
  const qs = QUIZ.filter((x) => x.type === type);
  if (!qs.length) return { plan: {}, note: type + ' なし' };
  const lk = qs.filter((x) => locked(x)), free = qs.filter((x) => !locked(x));
  const lcnt = [0, 0, 0, 0]; lk.forEach((x) => lcnt[x.a]++);

  // 最大割合が最小になるように、空いている位置から順に埋めていく
  const cnt = lcnt.slice();
  for (let i = 0; i < free.length; i++) {
    let m = 0;
    for (let j = 1; j < 4; j++) if (cnt[j] < cnt[m]) m = j;
    cnt[m]++;
  }
  const quota = cnt.map((v, i) => v - lcnt[i]);

  // まず今の位置のままで足りるものはそのままにする（差分を小さくする）
  const plan = {}, rest = [];
  for (const x of shuffled(free)) {
    if (quota[x.a] > 0) { quota[x.a]--; plan[x.id] = x.a; } else rest.push(x);
  }
  // 残りを空いている位置に入れる
  for (const x of rest) {
    let t = -1;
    for (let j = 0; j < 4; j++) if (quota[j] > 0 && (t < 0 || quota[j] > quota[t])) t = j;
    quota[t]--; plan[x.id] = t;
  }
  const moved = Object.entries(plan).filter(([id, t]) => QUIZ.find((x) => x.id === id).a !== t).length;
  const before = [0, 0, 0, 0]; qs.forEach((x) => before[x.a]++);
  return {
    plan,
    note: type + ' ' + qs.length + '問（動かさない' + lk.length + '問）  ' +
      before.join('/') + '（最大' + Math.round(Math.max(...before) / qs.length * 100) + '%） → ' +
      cnt.join('/') + '（最大' + Math.round(Math.max(...cnt) / qs.length * 100) + '%）  書き換え' + moved + '問',
  };
}

// ---- 文字列リテラルを1つ読む（'…' のエスケープを尊重する） ----
function readStr(t, i) {
  if (t[i] !== "'") return null;
  let j = i + 1;
  while (j < t.length) {
    if (t[j] === BS) { j += 2; continue; }
    if (t[j] === "'") return { raw: t.slice(i, j + 1), end: j + 1 };
    j++;
  }
  return null;
}

// ---- 解説の丸数字を付け替える（旧→仮の記号→新 の二段階） ----
// 一段階でやると、先に置き換えた番号をもう一度置き換えてしまう。
function renumber(exp, map) {
  let t = exp.replace(/[①-④]/g, (c) => '\u0001' + MARU.indexOf(c));
  t = t.replace(/\u0001([0-3])/g, (m, d) => MARU[map[Number(d)]]);
  // 「②③④はいずれも…」のように区切りなしで並ぶものは昇順に直す（念のための網）。
  // 上の並べ替えは誤答どうしの相対順序を変えないので、実際にはここは効かない。
  // 「①と②は〜と〜が入れかわっている」のような対応づけのある並びは触らない。
  t = t.replace(/[①-④]{2,}/g, (r) => [...r].sort().join(''));
  return t;
}

// ---- 1問を書き換える ----
function apply(id, t) {
  const i = src.indexOf("id:'" + id + "'");
  if (i < 0) return '× 見つからない: ' + id;
  const j = src.indexOf("\n{ id:'", i + 1);
  const end = j < 0 ? src.length : j;
  let blk = src.slice(i, end);

  // choices の中身を「リテラル」と「あいだの文字」に分けて取り出す
  const cs = blk.indexOf('choices:[');
  if (cs < 0) return '× choices がない: ' + id;
  let k = cs + 'choices:['.length;
  const items = [], gaps = []; let gap = '';
  while (k < blk.length && blk[k] !== ']') {
    if (blk[k] === "'") {
      const r = readStr(blk, k);
      if (!r) return '× 選択肢を読めない: ' + id;
      gaps.push(gap); gap = ''; items.push(r.raw); k = r.end;
    } else { gap += blk[k]; k++; }
  }
  if (blk[k] !== ']' || items.length !== 4) return '× 選択肢が4つでない: ' + id;
  const tailGap = gap, close = k;

  const am = /^\]\s*,\s*a:(\d)\s*,/.exec(blk.slice(close));
  if (!am) return '× a を取れない: ' + id;
  const a0 = Number(am[1]);
  if (a0 === t) return '= 変更なし: ' + id;

  // 正解の文を抜いて、目標の位置に差し込む（残り3つの相対順序は保つ）
  const order = items.map((_, n) => n);
  order.splice(a0, 1); order.splice(t, 0, a0);
  const map = order.map((_, n) => order.indexOf(n));   // 旧番号 → 新番号

  // choices を組み立て直す。あいだの文字（改行・字下げ・カンマ）は元の位置のまま使う。
  const head = blk.slice(0, cs + 'choices:['.length);
  const mid = gaps.map((g, n) => g + items[order[n]]).join('') + tailGap;

  // ']' から後ろ。a: を目標値に差し替え、exp の丸数字を付け替える。
  let tail = blk.slice(close).replace(/^(\]\s*,\s*a:)\d/, '$1' + t);
  const es = tail.indexOf("exp:'");
  if (es < 0) return '× exp が choices より後ろにない: ' + id;
  const er = readStr(tail, es + 4);
  if (!er) return '× exp を読めない: ' + id;
  const exp0 = er.raw.slice(1, -1);
  const exp1 = renumber(exp0, map);
  tail = tail.slice(0, es + 4) + "'" + exp1 + "'" + tail.slice(es + 4 + er.raw.length);

  src = src.slice(0, i) + head + mid + tail + src.slice(end);
  return '○ ' + id + '  a:' + a0 + '→' + t + '  並べ替え ' + order.map((o) => o + 1).join('') +
    '  解説の丸数字' + (exp0.match(/[①-④]/g) || []).length + '箇所';
}

const log = [];
for (const type of ['sel', 'src']) {
  const { plan, note } = planType(type);
  console.log(note);
  for (const [id, t] of Object.entries(plan)) log.push(apply(id, t));
}
if (!dry) fs.writeFileSync(file, src);
const ok = log.filter((l) => l[0] === '○').length, ng = log.filter((l) => l[0] === '×');
console.log('書き換え ' + ok + '問' + (ng.length ? '\n' + ng.join('\n') : '') + (dry ? '（--dry なので書き込んでいない）' : ''));
if (ng.length) process.exit(1);
