// cmb（組合せ）の解説と正解を突き合わせる。
// 一括置換で正解の位置だけ動かすと、解説の記号（a・b …）が置き換わらずに残ることがある。
// 使い方: node tools/check/xref.js [分野フォルダ...]   （省略すると全19分野）
const { load, label, dirsFromArgs } = require('./lib.js');

const dirs = dirsFromArgs(process.argv.slice(2));
let ng = 0, tot = 0;

for (const d of dirs) {
  const data = load(d);
  if (!data) { console.log(label(d) + ' … データがありません'); continue; }
  for (const x of data.QUIZ.filter((q) => q.type === 'cmb')) {
    tot++;
    const ok = x.choices[x.a].split('・');
    const bad = ['a', 'b', 'c', 'd'].filter((c) => !ok.includes(c));
    const msgs = [];

    // 1) 冒頭の「a・bが正しい」
    const h = /^([abcd])・([abcd])が正しい/.exec(x.exp);
    if (h && (h[1] !== ok[0] || h[2] !== ok[1])) msgs.push('冒頭' + h[1] + '・' + h[2] + '≠正解' + ok.join('・'));

    // 2)「a・cは誤り」「a・dもいずれも…」= 誤答の組のはず
    for (const m of x.exp.matchAll(/([abcd])・([abcd])(?:は|も|が)(?!正しい)/g)) {
      const p = [m[1], m[2]];
      if (!p.every((c) => bad.includes(c))) msgs.push('誤答指摘' + p.join('・') + 'に正解が混ざる');
    }

    // 3) 単独「cは誤り」「cも誤り」「cの…は誤り」
    //    「cのとおり…は誤りの定番である」のような言い回しは記号の指摘ではないので除く
    for (const m of x.exp.matchAll(/(^|[^A-Za-z0-9])([abcd])(?![A-Za-z0-9])(?!のとおり)(?:の[^、。]{0,20})?(?:は|も|が)[^、。]{0,20}?誤り/g)) {
      if (ok.includes(m[2])) msgs.push('正解' + m[2] + 'を誤りと説明');
    }

    // 4) 解説の「正解は①a・c」の丸数字と記号
    const mm = /正解は([①-④])([abcd])・([abcd])/.exec(x.exp);
    if (mm) {
      if ('①②③④'.indexOf(mm[1]) !== x.a) msgs.push('解説の番号 ' + mm[1] + ' ≠ a=' + x.a);
      if (mm[2] !== ok[0] || mm[3] !== ok[1]) msgs.push('解説の記号 ' + mm[2] + '・' + mm[3] + ' ≠ 正解' + ok.join('・'));
    }

    if (msgs.length) {
      ng++;
      console.log('⚠ ' + label(d) + ' ' + x.id + ' a=' + x.a + '(' + x.choices[x.a] + ')  ' + msgs.join(' / '));
      console.log('   ' + x.exp);
    }
  }
}

console.log('照合 ' + tot + '問 / 矛盾 ' + ng + '問');
process.exit(ng ? 1 : 0);
