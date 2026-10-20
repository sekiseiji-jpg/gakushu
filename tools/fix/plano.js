// ord（配列）の正解位置を6つに均等に割り当てる計画を出す。
// 出力はそのまま ordfix.js の引数に渡せる（<id>:<目標index> の並び）。
// 使い方: node tools/fix/plano.js <data-quiz.js> [seed] | xargs node tools/fix/ordfix.js <data-quiz.js>
const fs = require('fs');
const file = process.argv[2];
if (!file) { console.log('使い方: node tools/fix/plano.js <data-quiz.js> [seed]'); process.exit(2); }
const seed0 = Number(process.argv[3] || 7);
const QUIZ = new Function('module', 'exports', fs.readFileSync(file, 'utf8') + '\nreturn QUIZ;')({ exports: {} }, {});
const ids = QUIZ.filter((x) => x.type === 'ord').map((x) => x.id);
const n = ids.length, t = [];
for (let i = 0; i < n; i++) t.push(i % 6);
// 決定的なシャッフル（seed を変えれば別の割り当てになる）
let s = seed0;
const rnd = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [t[i], t[j]] = [t[j], t[i]]; }
const c = {};
t.forEach((v) => (c[v] = (c[v] || 0) + 1));
console.error('ord ' + n + '問  配分 ' + JSON.stringify(c));
console.log(ids.map((id, i) => id + ':' + t[i]).join(' '));
