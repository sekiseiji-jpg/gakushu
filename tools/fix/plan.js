// cmb（組合せ）の正解位置を4つに均等に割り当てる計画を出す。
// 出力はそのまま cmbfix.js の引数に渡せる（<id>:<目標index> の並び）。
// 使い方: node tools/fix/plan.js <data-quiz.js> [seed] | xargs node tools/fix/cmbfix.js <data-quiz.js>
const fs = require('fs');
const file = process.argv[2];
if (!file) { console.log('使い方: node tools/fix/plan.js <data-quiz.js> [seed]'); process.exit(2); }
const seed0 = Number(process.argv[3] || 7);
const src = fs.readFileSync(file, 'utf8');
const QUIZ = new Function('module', 'exports', src + '\nreturn QUIZ;')({ exports: {} }, {});
const ids = QUIZ.filter((x) => x.type === 'cmb').map((x) => x.id);
const n = ids.length;
const targets = [];
for (let i = 0; i < n; i++) targets.push(i % 4);
// 決定的なシャッフル（seed を変えれば別の割り当てになる）
let s = seed0;
const rnd = () => (s = (s * 1103515245 + 12345) % 2147483648) / 2147483648;
for (let i = n - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [targets[i], targets[j]] = [targets[j], targets[i]]; }
const cnt = {};
targets.forEach((t) => (cnt[t] = (cnt[t] || 0) + 1));
console.error('cmb ' + n + '問  配分 ' + JSON.stringify(cnt));
console.log(ids.map((id, i) => id + ':' + targets[i]).join(' '));
