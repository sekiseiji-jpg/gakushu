// cmb（組合せ）と ord（配列）の正解位置の偏りを見る。
// この2形式は出題時にシャッフルしないので、正解がいつも同じ番号だと学習者に見えてしまう。
// 使い方: node tools/check/bias.js [分野フォルダ...]   （省略すると全18分野）
const { load, label, pad, dirsFromArgs } = require('./lib.js');

// 警告のしきい値（最大割合）。cmb は4択、ord は6択なので基準が違う。
const LIMIT = { cmb: 0.35, ord: 0.30 };
const N = { cmb: 4, ord: 6 };

const dirs = dirsFromArgs(process.argv.slice(2));
const warns = [];

for (const d of dirs) {
  const data = load(d);
  if (!data) { console.log(label(d) + ' … データがありません'); continue; }
  const cells = [];
  for (const t of ['cmb', 'ord']) {
    const q = data.QUIZ.filter((x) => x.type === t);
    const c = {};
    for (const x of q) c[x.a] = (c[x.a] || 0) + 1;
    const arr = [];
    for (let i = 0; i < N[t]; i++) arr.push(c[i] || 0);
    const max = Math.max(...arr), pct = q.length ? max / q.length : 0;
    cells.push(t + '[' + arr.join('/') + (q.length ? ' max=' + Math.round(pct * 100) + '%' : '') + ']');
    if (q.length && pct > LIMIT[t]) {
      warns.push(label(d) + ' の ' + t + ' が偏っている（' + max + '/' + q.length +
        ' = ' + Math.round(pct * 100) + '% > ' + Math.round(LIMIT[t] * 100) + '%）');
    }
  }
  console.log(pad(label(d), 13) + cells.join('  '));
}

console.log('しきい値 cmb ' + Math.round(LIMIT.cmb * 100) + '% ／ ord ' + Math.round(LIMIT.ord * 100) + '%');
if (warns.length) { console.log('⚠ 偏り ' + warns.length + '件:\n  ' + warns.join('\n  ')); process.exit(1); }
console.log('✓ 偏りなし');
