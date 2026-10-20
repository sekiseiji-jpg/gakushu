// sel（正誤判定）と src（短文・資料）の解説に出てくる丸数字と、正解 a を突き合わせる。
// 解説は「③が正しい。…①は誤りで…②も誤りで…④も誤りで…」のように、ほぼ全問で複数の
// 丸数字に触れる。正解の位置を動かしたときにここを直し忘れると、設定で「選択肢シャッフル」
// を切った人に食い違いが見えてしまう。tools/fix/selfix.js の後始末はこれで見る。
// 使い方: node tools/check/xsel.js [分野フォルダ...]   （省略すると全19分野）
const NL = String.fromCharCode(10);
const { load, label, pad, dirsFromArgs, expRefErrors } = require('./lib.js');

const dirs = dirsFromArgs(process.argv.slice(2));
let tot = 0, ng = 0;

for (const d of dirs) {
  const data = load(d);
  if (!data) { console.log(label(d) + ' … データがありません'); continue; }
  const qs = data.QUIZ.filter((x) => x.type === 'sel' || x.type === 'src');
  const withMaru = qs.filter((x) => /[①-④]/.test(String(x.exp)));
  const bad = [];
  for (const x of withMaru) {
    const e = expRefErrors(x);
    if (e.length) bad.push('  ' + x.id + ': ' + e.join(' / '));
  }
  tot += withMaru.length; ng += bad.length;
  console.log(pad(label(d), 13) + 'sel・src ' + pad(qs.length + '問', 7) + '解説に丸数字 ' + pad(withMaru.length + '問', 7) +
    (bad.length ? '✗ 矛盾 ' + bad.length + '問' : '✓'));
  if (bad.length) console.log(bad.join(NL));
}

console.log('解説に丸数字のある sel・src ' + tot + '問  矛盾 ' + ng + '問');
if (ng) process.exit(1);
console.log('✓ 解説の丸数字と正解は一致している');
