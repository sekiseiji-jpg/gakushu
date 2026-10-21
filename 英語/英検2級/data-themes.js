/* 英検2級 ― テーマ別（単元をまたいで語をつなぐ） */
const THEMES = [

  {
    id: 'gobi',
    icon: '🔤',
    title: '語尾から品詞を読む',
    color: '#8a5a14',
    lead: '長い語ほど、見た目で品詞が決まる。空所補充では、意味を知らなくても形で二つに絞れる。',
    steps: [
      { era: '名詞をつくる', t: '-tion / -sion', b: 'education、decision、discrimination。動作や状態を名詞にする、いちばん多い語尾。' },
      { era: '名詞をつくる', t: '-ment / -ness / -ity', b: 'development、kindness、quality。-ment は動詞から、-ness は形容詞から作られる。' },
      { era: '人をつくる', t: '-er / -or / -ist / -ee', b: 'teacher、director、journalist、employee。-ee は「される側」で、employer と対になる。' },
      { era: '形容詞をつくる', t: '-al / -ful / -less / -ous', b: 'national、useful、careless、famous。-less は「〜がない」で、-ful と対になる。' },
      { era: '形容詞をつくる', t: '-able / -ive', b: 'affordable、sustainable、creative、productive。-able は「〜できる」。' },
      { era: '動詞をつくる', t: '-ize / -en / -ify', b: 'organize、widen、simplify。形容詞や名詞を「〜にする」に変える。' },
      { era: '副詞をつくる', t: '-ly', b: 'clearly、gradually。ただし friendly や lively は -ly でも形容詞なので、例外として覚える。' },
      { era: '使い方', t: '空所の品詞を先に決める', b: '前に the があれば名詞、be のあとなら形容詞。品詞が決まれば、知らない語でも選択肢が減る。' },
    ],
  },

  {
    id: 'fukushi',
    icon: '🔗',
    title: '句動詞に付く語の感覚',
    color: '#8a5a14',
    lead: '付く副詞ごとに、だいたいの意味の向きが決まっている。知らない組でも見当がつくようになる。',
    steps: [
      { era: 'up', t: 'すっかり・上へ', b: 'use up（使いきる）、eat up（食べきる）、grow up（育つ）、show up（姿を見せる）。終わりまで、という感じ。' },
      { era: 'off', t: '離れる', b: 'take off（脱ぐ・離陸する）、call off（中止する）、put off（延期する）。くっついていたものが離れる。' },
      { era: 'out', t: '外へ・なくなるまで', b: 'find out（調べて知る）、hand out（配る）、run out（尽きる）。中にあったものが外に出る。' },
      { era: 'over', t: '越えて・ひと通り', b: 'get over（立ち直る）、think over（よく考える）、look over（ざっと見る）。上を通って全体に及ぶ。' },
      { era: 'on', t: '続ける・接する', b: 'go on（続く）、keep on（し続ける）、count on（あてにする）。切れずにつながっている。' },
      { era: 'into', t: '中へ・変化', b: 'look into（調査する）、run into（偶然出会う）、turn into（〜に変わる）。' },
      { era: 'with', t: '相手がいる', b: 'put up with（我慢する）、get along with（仲よくやる）、deal with（対処する）。' },
      { era: '語順', t: '目的語をどこに置くか', b: '動詞＋副詞なら間に置ける（turn it on）。動詞＋前置詞なら後ろのまま（look at it）。' },
    ],
  },

  {
    id: 'edding',
    icon: '😊',
    title: '感情の ed と ing',
    color: '#8a5a14',
    lead: '人が受ける側なら -ed、物が与える側なら -ing。一字で意味がまるごと入れかわる。',
    steps: [
      { era: '基本', t: 'もとは動詞', b: 'bore（退屈させる）、excite（わくわくさせる）。感情の形容詞はどれも、この動詞から作られている。' },
      { era: '-ed', t: '感じている人', b: 'I was bored.（私は退屈した）。動詞を受けた側なので、人が主語になることが多い。' },
      { era: '-ing', t: '感じさせるもの', b: 'The lecture was boring.（講義は退屈だった）。原因のほうが主語になる。' },
      { era: 'よく出る組', t: 'interested / interesting', b: 'I am interested in history. と History is interesting. の二文で覚える。' },
      { era: 'よく出る組', t: 'surprised / surprising', b: 'surprised は驚いた人、surprising は驚かせる知らせ。' },
      { era: '気をつける', t: 'I am boring. は言わない', b: '「私は人を退屈させる」の意味になる。面接では言わないよう気をつけたい。' },
      { era: '前置詞まで', t: 'in / about / with / at', b: 'interested in、worried about、satisfied with、surprised at。形容詞と前置詞を一組で覚える。' },
    ],
  },

  {
    id: 'teido',
    icon: '📏',
    title: '程度の強さで並べる',
    color: '#8a5a14',
    lead: '一語ずつ訳で覚えるのではなく、弱いほうから強いほうへ三つ並べる。程度配列の問題がそのまま解ける。',
    steps: [
      { era: '怒り', t: 'annoyed → angry → furious', b: 'annoyed はいらっと、furious は激怒。upset はこの軸とは別で、悲しみも含む。' },
      { era: '喜び', t: 'pleased → glad → delighted', b: 'pleased は満足、delighted は大喜び。happy は真ん中あたり。' },
      { era: '驚き', t: 'surprised → amazed → astonished', b: 'shocked は悪い知らせに使い、よい驚きには使いにくい。' },
      { era: '大きさ', t: 'tiny → small → large → huge', b: 'tiny と huge は両端なので、very をつけない。' },
      { era: '程度の副詞', t: 'slightly → fairly → quite → extremely', b: 'quite は「けっこう」でやや控えめ。very より弱いことがある。' },
      { era: '頻度の副詞', t: 'never → seldom → sometimes → often → always', b: '一般動詞の前、be 動詞の後ろに置く。' },
      { era: '強め方', t: '端の語には absolutely', b: 'very perfect とは言わず absolutely perfect。尺度の端にある語は別の副詞で強める。' },
    ],
  },

  {
    id: 'magirawashii',
    icon: '🔍',
    title: 'まぎらわしい二語の見分け',
    color: '#8a5a14',
    lead: '日本語では一語で済むのに、英語では分かれる。分かれ目を一つ決めておくと迷わない。',
    steps: [
      { era: '料金', t: 'price / cost / fare / fee', b: '品物の値段が price、かかる費用が cost、乗り物が fare、手数料や受講料が fee。' },
      { era: '借りる', t: 'borrow / rent / lend', b: '無料で借りるのが borrow、お金を払って借りるのが rent、貸すのが lend。' },
      { era: '勝つ', t: 'win / beat', b: 'win のあとは試合や賞、beat のあとは相手。「何を」か「誰を」かで決まる。' },
      { era: '上がる', t: 'rise / raise', b: 'rise は自分で上がる、raise は何かを上げる。目的語を取るかどうか。' },
      { era: '守る', t: 'protect / preserve / conserve', b: '危害から守るのが protect、形を保つのが preserve、むだ遣いしないのが conserve。' },
      { era: '言う', t: 'say / tell / speak / talk', b: 'say は内容、tell は人＋内容、speak は言語、talk は about ＋ 話題。' },
      { era: '感じ', t: 'sensible / sensitive', b: 'sensible は分別のある、sensitive は感じやすい。つづりが似ていて印象が逆。' },
      { era: '数と量', t: 'number / amount', b: '数えられるものは number、数えられないものは amount。many と much も同じ分かれ方。' },
    ],
  },

  {
    id: 'tsukaikata',
    icon: '🎯',
    title: '覚えた語を試験で使う',
    color: '#8a5a14',
    lead: '覚えるところで終わらせない。読む・書く・話すのどこで出るかを決めておくと、定着が早い。',
    steps: [
      { era: '読む', t: '長文は話題が偏っている', b: '学校・環境・技術・働き方。この四つの単元を押さえると、毎回いくつかの長文が読みやすくなる。' },
      { era: '読む', t: 'つなぎ語で先を予測する', b: 'However のあとに筆者の主張が来ることが多い。設問はそこを問う。' },
      { era: '書く', t: '意見文は型を決める', b: '立場 → 理由二つ → 例 → もう一度立場。中身より並べ方で点が決まる。' },
      { era: '書く', t: '賛成と反対を一組で', b: 'support と oppose、in favor of と against。どちらの立場でも書けるようにしておく。' },
      { era: '話す', t: '自分のことで例文を作る', b: '趣味・将来の仕事・休日の過ごし方。三つについて、三文ずつ言えるようにする。' },
      { era: '聞く', t: '場面ごとの決まり文句', b: '店・空港・病院・受付。やりとりの型を知っていれば、細部が聞き取れなくても筋は追える。' },
      { era: '覚え直す', t: '忘れる前に出会い直す', b: '翌日・一週間後・一か月後。間隔を空けて三度出会うと、ほとんど残る。' },
      { era: '確かめる', t: '一覧タブの単語帳を使う', b: '「意味をかくす」を押すと、説明が隠れる。おぼえたか試してから、押して確かめる。' },
    ],
  },

];

if (typeof module !== 'undefined') { module.exports = { THEMES }; }
