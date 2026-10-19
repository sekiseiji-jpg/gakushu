/* 共通テストの出題形式に合わせる。
   type: sel 正誤判定 / cmb 組合せ / ord 大小配列 / src 計算・資料
   cmb の選択肢は ['a・c','a・d','b・c','b・d'] で固定。正解の2文は a/b から1つ、c/d から1つにする。
   ord の選択肢は Ⅰ−Ⅱ−Ⅲ 〜 Ⅲ−Ⅱ−Ⅰ の6通りを固定の順で並べる。
   id は学習記録の主キーなので、あとから変えない。
*/
const QUIZ = [
];

if (typeof module !== 'undefined') { module.exports = { QUIZ }; }