// ord（配列）の解説と正解を突き合わせる。
// 使い方: node tools/check/xord.js [分野フォルダ...]   （省略すると全18分野）
const { load, label, dirsFromArgs } = require('./lib.js');

const dirs = dirsFromArgs(process.argv.slice(2));
let tot = 0, ng = 0;

for (const d of dirs) {
  const data = load(d);
  if (!data) { console.log(label(d) + ' … データがありません'); continue; }
  for (const x of data.QUIZ.filter((q) => q.type === 'ord')) {
    tot++;
    const ans = x.choices[x.a].replace(/−/g, '');
    const msgs = [];

    // 1)「Ⅰ−Ⅱ−Ⅲ」の形で書かれた並び
    for (const m of x.exp.matchAll(/([ⅠⅡⅢ])−([ⅠⅡⅢ])−([ⅠⅡⅢ])/g)) {
      if (m[1] + m[2] + m[3] !== ans) msgs.push('解説の並び ' + m[0] + ' ≠ 正解 ' + x.choices[x.a]);
    }

    // 2)「Ⅱ…→Ⅲ…→Ⅰ…」の形（Ⅰ/Ⅱ/Ⅲ が3つとも1回ずつ出てくる場合のその順）
    const seq = [...x.exp.matchAll(/[ⅠⅡⅢ]/g)].map((m) => m[0]);
    if (seq.length === 3 && new Set(seq).size === 3 && seq.join('') !== ans) {
      msgs.push('解説に出る順 ' + seq.join('') + ' ≠ 正解 ' + ans);
    }

    // 3) 解説の「正解は⑤」の丸数字
    const mm = /正解は([①-⑥])/.exec(x.exp);
    if (mm && '①②③④⑤⑥'.indexOf(mm[1]) !== x.a) msgs.push('解説の番号 ' + mm[1] + ' ≠ a=' + x.a);

    if (msgs.length) {
      ng++;
      console.log('⚠ ' + label(d) + ' ' + x.id + ' a=' + x.a + '(' + x.choices[x.a] + ')');
      msgs.forEach((s) => console.log('    ' + s));
      console.log('    ' + x.exp);
    }
  }
}

console.log('照合 ' + tot + '問 / 要確認 ' + ng + '問');
process.exit(ng ? 1 : 0);
