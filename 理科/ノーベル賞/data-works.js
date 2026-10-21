/* 日本人のノーベル賞 ― 設定
   この分野は作品（本文）を持たず、人物だけを並べる。WORKS は空のままにしておく。
   app.js は WORKS が空のとき、人物の一覧を入口にする（3つの読み物アプリと同じファイル）。
   人物の中身は data-authors.js にある。
*/
const APP = {
  key: 'nobel.v1',
  title: '日本人のノーベル賞',
  icon: '🏅',
  unit: '人',
  textVer: '1',
  cache: 'nobel-v4',
  textCache: 'nobel-text',          // この分野は本文を持たないが、sw.js と形をそろえておく
  authorWord: '受賞者',
  authorsLead: 'ノーベル賞の理化学分野（物理学賞・化学賞・生理学医学賞）を受けた日本人28人です。受賞年の順に並べています。',
  authorSections: {
    bio: '歩み',
    person: 'どういう人物か',
    style: '受賞した研究',
    books: 'おもな業績とできごと',
  },
  lead: 'ノーベル賞の理化学分野を受けた日本人を、受賞年の順にまとめています。',
};

const WORKS = [];

if (typeof module !== 'undefined') { module.exports = { APP, WORKS }; }
