/* 語彙と表現 ― 単元の説明に添える図・表 */
const FIGS = {

'kihon-doushi': [
  { at: 'ov', k: 'table', t: '基本動詞の中心の意味',
    cap: '辞書の訳をいくつも覚えるより、中心にある一つの感覚をつかむ。',
    head: ['動詞', '中心の感覚', '広がった使い方'],
    rows: [
      ['take', '手に取って自分のほうへ', 'take a bus, take time, take a picture'],
      ['get', '手に入れる・ある状態になる', 'get a letter, get tired, get home'],
      ['have', '自分の範囲にもつ', 'have a car, have lunch, have a cold'],
      ['make', '力を加えて形にする', 'make a cake, make a mistake, make him happy'],
      ['give', '相手のほうへ渡す', 'give a book, give a speech, give up'],
      ['run', '勢いよく進む', 'run fast, run a shop, the river runs'],
    ] },
  { at: 'sec1', k: 'svg', t: '意味はどう広がるか',
    cap: '中心の感覚から、物から事へ、具体から抽象へと使い道が広がる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="基本動詞の意味の広がりの図">'
      + '<defs><marker id="ar-kd2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<circle cx="130" cy="92" r="56" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="130" y="88" font-size="13" fill="var(--primary)">take</text>'
      + '<text x="130" y="108" font-size="10.5" fill="var(--primary)">手に取る</text>'
      + '<path d="M192,92 L240,92" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kd2)"/>'
      + '<rect x="246" y="42" width="160" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="326" y="62" font-size="11.5">take a bus</text>'
      + '<text x="326" y="78" font-size="10.5" fill="var(--muted)">乗り物を選び取る</text>'
      + '<rect x="246" y="100" width="160" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="326" y="120" font-size="11.5">take time</text>'
      + '<text x="326" y="136" font-size="10.5" fill="var(--muted)">時間を取る</text>'
      + '<path d="M410,70 L450,70" stroke="var(--primary)" stroke-width="1.2" marker-end="url(#ar-kd2)"/>'
      + '<path d="M410,120 L450,120" stroke="var(--primary)" stroke-width="1.2" marker-end="url(#ar-kd2)"/>'
      + '<rect x="456" y="70" width="160" height="50" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="536" y="90" font-size="11.5">take it easy</text>'
      + '<text x="536" y="108" font-size="10.5" fill="var(--muted)">抽象へ</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">具体から抽象へ。日本語の訳はそのつど変わるが、感覚は同じ</text>'
      + '</g></svg>' },
],

kudoushi: [
  { at: 'ov', k: 'table', t: '句動詞は副詞の意味で決まる',
    cap: '付く語の感覚が分かると、知らない組み合わせでも見当がつく。',
    head: ['付く語', '感覚', '例'],
    rows: [
      ['up', '上へ・すっかり', 'give up, eat up, grow up'],
      ['down', '下へ・落ちつく', 'break down, calm down, write down'],
      ['out', '外へ・なくなるまで', 'find out, run out, put out'],
      ['off', '離れる', 'take off, put off, call off'],
      ['on', '続ける・接する', 'go on, put on, count on'],
      ['over', '越える・ひと通り', 'get over, think over, take over'],
    ] },
  { at: 'sec1', k: 'svg', t: '目的語の置き場所',
    cap: '副詞型は目的語をあいだに置けるが、代名詞のときは必ずあいだに置く。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="句動詞の語順の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="290" height="124" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="169" y="52" font-size="12.5">動詞 ＋ 副詞（分けられる）</text>'
      + '<text x="169" y="78" font-size="11.5" fill="var(--muted)">turn on the light ○</text>'
      + '<text x="169" y="100" font-size="11.5" fill="var(--muted)">turn the light on ○</text>'
      + '<text x="169" y="124" font-size="11.5">turn it on ○　turn on it ×</text>'
      + '<text x="169" y="142" font-size="10.5" fill="var(--muted)">代名詞はあいだに置く</text>'
      + '<rect x="326" y="28" width="290" height="124" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="471" y="52" font-size="12.5" fill="var(--primary)">動詞 ＋ 前置詞（分けられない）</text>'
      + '<text x="471" y="78" font-size="11.5" fill="var(--muted)">look at the picture ○</text>'
      + '<text x="471" y="100" font-size="11.5" fill="var(--muted)">look the picture at ×</text>'
      + '<text x="471" y="124" font-size="11.5">look at it ○</text>'
      + '<text x="471" y="142" font-size="10.5" fill="var(--muted)">代名詞でも後ろのまま</text>'
      + '</g></svg>' },
],

tagigo: [
  { at: 'ov', k: 'table', t: '文脈で意味が決まる多義語',
    cap: '同じ語でも、まわりの語が意味を決める。品詞もあわせて確かめる。',
    head: ['語', '意味1', '意味2', '意味3'],
    rows: [
      ['book', '本', '予約する', '―'],
      ['matter', '問題', '物質', '重要である'],
      ['subject', '科目', '主題', '〜を受けやすい'],
      ['figure', '数字', '人物像', '思う・理解する'],
      ['order', '順序', '注文', '命令'],
      ['bear', 'くま', '耐える', '生む・産する'],
      ['last', '最後の', '続く', 'この前の'],
    ] },
  { at: 'sec1', k: 'table', t: '意味を決める手がかり',
    cap: '四つの手がかりを順に当てると、辞書なしでもかなり絞れる。',
    head: ['手がかり', '見るところ'],
    rows: [
      ['品詞', '冠詞・助動詞・語尾の形'],
      ['一緒に使う語', '前後の名詞や前置詞'],
      ['話題', '段落が何の話か'],
      ['言いかえ', '直後の that is, or で言い直していないか'],
    ] },
],

setsuji: [
  { at: 'ov', k: 'table', t: '接頭辞',
    cap: '語の前につけて意味の向きを変える。否定と方向をまず覚える。',
    head: ['接頭辞', '意味', '例'],
    rows: [
      ['un- / in- / im- / dis-', '否定', 'unknown, incorrect, impossible, dislike'],
      ['re-', 'ふたたび・元へ', 'rewrite, return'],
      ['pre- / fore-', '前もって', 'prepare, forecast'],
      ['post-', 'あとで', 'postwar'],
      ['inter-', 'あいだ', 'international'],
      ['sub-', '下・副', 'subway, subtitle'],
      ['over- / under-', '過度・不足', 'overwork, underestimate'],
    ] },
  { at: 'sec1', k: 'table', t: '接尾辞と品詞',
    cap: '接尾辞は品詞を教えてくれる。空所補充で形を決める手がかりになる。',
    head: ['接尾辞', 'なる品詞', '例'],
    rows: [
      ['-tion / -ment / -ness / -ity', '名詞', 'action, movement, kindness, ability'],
      ['-er / -or / -ist', '人・もの', 'teacher, actor, artist'],
      ['-ful / -less / -ous / -al', '形容詞', 'useful, careless, famous, natural'],
      ['-ize / -en / -ify', '動詞', 'realize, widen, simplify'],
      ['-ly', '副詞（形容詞のことも）', 'quickly, friendly'],
    ] },
  { at: 'sec2', k: 'table', t: 'よく出る語幹',
    cap: '語幹を知っていると、初見の語でも分野の見当がつく。',
    head: ['語幹', '意味', '例'],
    rows: [
      ['-spect-', '見る', 'inspect, prospect, respect'],
      ['-port-', '運ぶ', 'transport, export, import'],
      ['-dict-', '言う', 'predict, dictionary'],
      ['-duc-', '導く', 'produce, introduce'],
      ['-vis- / -vid-', '見る', 'vision, evidence'],
      ['-ject-', '投げる', 'project, reject'],
    ] },
],

ruigigo: [
  { at: 'ov', k: 'table', t: '使い分けの基準',
    cap: '意味が近い語は、程度・格式・対象のどれかで違う。',
    head: ['基準', '例', '違い'],
    rows: [
      ['程度', 'like / love / adore', '気持ちの強さ'],
      ['格式', 'buy / purchase', '話しことばか書きことばか'],
      ['対象', 'say / tell / speak / talk', '何をとるか'],
      ['見方', 'look / see / watch', '意識して見るかどうか'],
      ['範囲', 'house / home', '建物か、暮らしの場か'],
    ] },
  { at: 'sec1', k: 'table', t: 'まぎらわしい組み合わせ',
    cap: '後ろに何を置けるかで区別できる組み合わせは、形で覚える。',
    head: ['組', '後ろに置くもの', '例'],
    rows: [
      ['say', '言った内容', 'say that 〜'],
      ['tell', '人 ＋ 内容', 'tell me the truth'],
      ['speak', '言語・一方的に話す', 'speak English'],
      ['talk', 'about ＋ 話題', 'talk about it'],
      ['borrow', '動かせるものを借りる', 'borrow a book'],
      ['rent', 'お金を払って借りる', 'rent a car'],
    ] },
],

'zenchishi-goi': [
  { at: 'ov', k: 'svg', t: '前置詞の感覚は空間から広がる',
    cap: '空間のイメージをつかめば、時間や抽象の使い方も同じ感覚で説明できる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="前置詞の感覚の広がりの図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="130" y="30" font-size="12.5" fill="var(--primary)">空間</text>'
      + '<text x="320" y="30" font-size="12.5" fill="var(--primary)">時間</text>'
      + '<text x="520" y="30" font-size="12.5" fill="var(--primary)">抽象</text>'
      + '<rect x="24" y="42" width="212" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="130" y="68" font-size="11.5">on the desk（接している）</text>'
      + '<rect x="244" y="42" width="152" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="68" font-size="11.5">on Monday</text>'
      + '<rect x="404" y="42" width="212" height="42" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="510" y="68" font-size="11.5">depend on（寄りかかる）</text>'
      + '<rect x="24" y="94" width="212" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="130" y="120" font-size="11.5">in the box（中にある）</text>'
      + '<rect x="244" y="94" width="152" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="120" font-size="11.5">in May</text>'
      + '<rect x="404" y="94" width="212" height="42" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="510" y="120" font-size="11.5">in trouble（状態の中）</text>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">for は向かう先、by はそばで接すること。語ごとでなく感覚で覚える</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '動詞と前置詞の決まった組み合わせ',
    cap: '前置詞を取りちがえると意味が変わる。動詞ごと覚える。',
    head: ['組み合わせ', '意味'],
    rows: [
      ['depend on', '〜しだいである'],
      ['consist of', '〜から成る'],
      ['result in / result from', '〜という結果になる／〜から生じる'],
      ['be made of / be made from', '材料が見える／見えない'],
      ['succeed in', '〜に成功する'],
      ['be familiar with / to', '〜をよく知っている／〜によく知られている'],
    ] },
],

collocation: [
  { at: 'ov', k: 'table', t: '語と語の自然な結びつき',
    cap: '意味が合っていても、組み合わせが決まっている。ひとかたまりで覚える。',
    head: ['日本語', '自然な英語', '不自然な英語'],
    rows: [
      ['強い雨', 'heavy rain', 'strong rain'],
      ['決心する', 'make a decision', 'do a decision'],
      ['宿題をする', 'do homework', 'make homework'],
      ['写真を撮る', 'take a picture', 'make a picture'],
      ['注意を払う', 'pay attention', 'give attention'],
      ['夢をかなえる', 'realize a dream', 'achieve a dream'],
    ] },
  { at: 'sec2', k: 'table', t: '決まった言い方',
    cap: '直訳できない言い方は、場面とセットで覚える。',
    head: ['表現', '意味'],
    rows: [
      ['keep in touch', '連絡を取り続ける'],
      ['make up ones mind', '決心する'],
      ['take 〜 for granted', '当たり前と思う'],
      ['get along with', '仲よくやる'],
      ['look forward to doing', '〜を楽しみに待つ'],
      ['put up with', '我慢する'],
    ] },
],

'meishi-goi': [
  { at: 'ov', k: 'table', t: '評論でよく使う抽象名詞',
    cap: '意味が広いので、文脈でどの面を言っているかを決める。',
    head: ['語', '意味', '一緒に使う語'],
    rows: [
      ['issue', '論点・問題', 'raise an issue'],
      ['factor', '要因', 'a key factor'],
      ['impact', '影響', 'have an impact on'],
      ['approach', '取り組み方', 'a new approach to'],
      ['context', '文脈・背景', 'in this context'],
      ['perspective', '見方', 'from a different perspective'],
      ['evidence', '証拠', 'provide evidence'],
    ] },
  { at: 'sec2', k: 'table', t: '名詞と動詞の対応',
    cap: '同じ語根の名詞と動詞を一組で覚えると、書きかえ問題に強くなる。',
    head: ['名詞', '動詞', '形容詞'],
    rows: [
      ['decision', 'decide', 'decisive'],
      ['analysis', 'analyze', 'analytical'],
      ['development', 'develop', 'developed'],
      ['explanation', 'explain', 'explanatory'],
      ['significance', 'signify', 'significant'],
    ] },
],

bamen: [
  { at: 'ov', k: 'table', t: '場面別の言い方',
    cap: '相手との距離でていねいさを選ぶ。形を三段階で覚える。',
    head: ['場面', 'くだけた', 'ふつう', 'ていねい'],
    rows: [
      ['依頼', 'Can you 〜?', 'Could you 〜?', 'Would you mind doing 〜?'],
      ['申し出', 'Want some?', 'Shall I 〜?', 'Would you like me to 〜?'],
      ['提案', 'Lets 〜', 'How about 〜?', 'May I suggest 〜?'],
      ['意見', 'I think 〜', 'In my opinion 〜', 'It seems to me that 〜'],
      ['断り', 'No thanks.', 'I am afraid I cannot.', 'I would love to, but 〜'],
    ] },
  { at: 'sec2', k: 'table', t: '反論のしかた',
    cap: 'いきなり否定せず、いったん受けてから述べるのが英語の型。',
    head: ['手順', '表現'],
    rows: [
      ['受ける', 'I see your point.'],
      ['ひとこと置く', 'However, / On the other hand,'],
      ['述べる', 'I would argue that 〜'],
      ['根拠を出す', 'For one thing, 〜'],
      ['まとめる', 'That is why I think 〜'],
    ] },
],

bunka: [
  { at: 'ov', k: 'table', t: '日本語と一対一にならない語',
    cap: '訳語を当てるだけでは足りない。使われる場面ごと覚える。',
    head: ['語', 'よくある訳', '本当の範囲'],
    rows: [
      ['challenge', '挑戦', '難しいが取り組む価値のあること'],
      ['privacy', 'プライバシー', '他人に立ち入られない領域'],
      ['community', '地域社会', '共通点でつながる人の集まり'],
      ['identity', '身元', '自分が何者かという意識'],
      ['commitment', '約束', '深く関わり続ける姿勢'],
      ['sustainable', '持続可能な', '将来も続けられる'],
    ] },
  { at: 'sec1', k: 'table', t: 'たとえの違い',
    cap: '同じことを別の動物や物でたとえる。知らないと意味を取りちがえる。',
    head: ['英語', '直訳', '日本語で近い言い方'],
    rows: [
      ['It is raining cats and dogs.', '猫と犬が降る', '土砂降りだ'],
      ['a piece of cake', 'ケーキ一切れ', '朝飯前'],
      ['break the ice', '氷を割る', '場をなごませる'],
      ['once in a blue moon', '青い月に一度', 'ごくまれに'],
      ['under the weather', '天気の下で', '具合が悪い'],
    ] },
],

hantaigo: [
  { at: 'ov', k: 'table', t: '対になる語の種類',
    cap: '完全に裏返る対と、程度の両端になる対がある。訳し方が変わる。',
    head: ['種類', '説明', '例'],
    rows: [
      ['完全な対', 'どちらかしかない', 'alive / dead'],
      ['程度の両端', 'あいだがある', 'hot / cold'],
      ['向きの対', '見る側が入れかわる', 'buy / sell, teach / learn'],
      ['接辞による対', '語に接辞をつけて作る', 'possible / impossible'],
    ] },
  { at: 'sec2', k: 'svg', t: '程度の尺度',
    cap: '両端だけでなく、あいだの語も押さえると書くときに幅が出る。',
    svg: '<svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="程度の尺度の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M50,84 L590,84" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="90" cy="84" r="5" fill="var(--primary)"/><text x="90" y="64" font-size="11.5">freezing</text>'
      + '<circle cx="215" cy="84" r="5" fill="var(--primary)"/><text x="215" y="64" font-size="11.5">cold</text>'
      + '<circle cx="340" cy="84" r="5" fill="var(--primary)"/><text x="340" y="64" font-size="11.5">warm</text>'
      + '<circle cx="465" cy="84" r="5" fill="var(--primary)"/><text x="465" y="64" font-size="11.5">hot</text>'
      + '<circle cx="570" cy="84" r="5" fill="var(--primary)"/><text x="570" y="64" font-size="11.5">boiling</text>'
      + '<text x="90" y="110" font-size="10.5" fill="var(--muted)">凍える</text>'
      + '<text x="570" y="110" font-size="10.5" fill="var(--muted)">煮え立つ</text>'
      + '<text x="320" y="138" font-size="11.5" fill="var(--muted)">両端の語には very をつけず、absolutely などで強める</text>'
      + '</g></svg>' },
],

suuryou: [
  { at: 'ov', k: 'table', t: '量と頻度を表す語',
    cap: '数えられる名詞に使うか、数えられない名詞に使うかで選ぶ。',
    head: ['意味', '数えられる名詞', '数えられない名詞', '両方'],
    rows: [
      ['たくさん', 'many', 'much', 'a lot of / plenty of'],
      ['少し（ある）', 'a few', 'a little', 'some'],
      ['ほとんどない', 'few', 'little', '―'],
      ['いくらかの', 'several', '―', 'some'],
      ['ほとんど全部', 'most', 'most', 'almost all'],
    ] },
  { at: 'sec1', k: 'svg', t: '頻度を表す副詞',
    cap: '頻度の副詞は、一般動詞の前、be 動詞と助動詞の後ろに置く。',
    svg: '<svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="頻度を表す副詞の図">'
      + '<defs><marker id="ar-sr1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M50,88 L590,88" stroke="var(--primary)" stroke-width="1.5" marker-end="url(#ar-sr1)"/>'
      + '<text x="60" y="114" font-size="11" fill="var(--muted)">0％</text>'
      + '<text x="575" y="114" font-size="11" fill="var(--muted)">100％</text>'
      + '<circle cx="90" cy="88" r="5" fill="var(--primary)"/><text x="90" y="68" font-size="11.5">never</text>'
      + '<circle cx="190" cy="88" r="5" fill="var(--primary)"/><text x="190" y="68" font-size="11.5">rarely</text>'
      + '<circle cx="290" cy="88" r="5" fill="var(--primary)"/><text x="290" y="68" font-size="11.5">sometimes</text>'
      + '<circle cx="390" cy="88" r="5" fill="var(--primary)"/><text x="390" y="68" font-size="11.5">often</text>'
      + '<circle cx="480" cy="88" r="5" fill="var(--primary)"/><text x="480" y="68" font-size="11.5">usually</text>'
      + '<circle cx="560" cy="88" r="5" fill="var(--primary)"/><text x="560" y="68" font-size="11.5">always</text>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">He often goes ／ He is often late ／ He will often go</text>'
      + '</g></svg>' },
],

'shoryaku-shiji': [
  { at: 'ov', k: 'table', t: '省略が起きる場所',
    cap: 'くり返しになる部分は省かれる。何が省かれたかを補いながら読む。',
    head: ['場所', '例', '補うもの'],
    rows: [
      ['接続詞のあと', 'He is taller than I （am）.', '動詞'],
      ['比較のあと', 'I like dogs better than cats （do）.', '動詞'],
      ['不定詞', 'You may go if you want to （go）.', '動詞以下'],
      ['関係代名詞', 'the book （which） I read', '目的格の関係代名詞'],
      ['分詞構文の being', '（Being） Tired, he went to bed.', 'being'],
    ] },
  { at: 'sec1', k: 'table', t: 'くり返しを避ける代用',
    cap: '同じ語をくり返さないための代用。何を指すかを必ず押さえる。',
    head: ['代用', '指すもの', '例'],
    rows: [
      ['do / does / did', '前の動詞句', 'He runs faster than I do.'],
      ['so', '前の内容全体', 'I think so.'],
      ['one / ones', '同じ種類の別のもの', 'I want a new one.'],
      ['that / those', '同じ種類のもの（of 〜が続く）', 'the climate of Japan and that of Korea'],
      ['such', '前に述べた種類', 'such a case'],
    ] },
],

'goi-gakushu': [
  { at: 'ov', k: 'table', t: '覚える順序',
    cap: '出合う回数の多い語から固める。力の伸びが早い。',
    head: ['段階', '語の範囲', '目標'],
    rows: [
      ['1', '中学で習う約1200語', '見た瞬間に意味が出る'],
      ['2', '高校基本の約2000語', '読みながら止まらない'],
      ['3', '入試標準の約1500語', '文脈つきで覚える'],
      ['4', '分野ごとの語', '評論・物語の語に分けて'],
    ] },
  { at: 'sec1', k: 'svg', t: '忘れる前に出会い直す',
    cap: '一度で覚えようとせず、間隔を空けて出会い直すほうが残る。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="復習の間隔の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M60,140 L600,140" stroke="var(--border)" stroke-width="1.4"/>'
      + '<path d="M60,40 L60,140" stroke="var(--border)" stroke-width="1.4"/>'
      + '<path d="M60,44 C110,96 140,116 170,124" stroke="var(--muted)" stroke-width="1.6" fill="none"/>'
      + '<path d="M170,44 C230,88 270,112 310,120" stroke="var(--muted)" stroke-width="1.6" fill="none"/>'
      + '<path d="M310,44 C390,78 460,104 540,112" stroke="var(--primary)" stroke-width="1.8" fill="none"/>'
      + '<circle cx="60" cy="44" r="4" fill="var(--primary)"/>'
      + '<circle cx="170" cy="44" r="4" fill="var(--primary)"/>'
      + '<circle cx="310" cy="44" r="4" fill="var(--primary)"/>'
      + '<text x="60" y="32" font-size="10.5" fill="var(--muted)">学習</text>'
      + '<text x="170" y="32" font-size="10.5" fill="var(--muted)">翌日</text>'
      + '<text x="310" y="32" font-size="10.5" fill="var(--muted)">一週間後</text>'
      + '<text x="36" y="92" font-size="10.5" fill="var(--muted)" transform="rotate(-90 36 92)">覚えている量</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">回を重ねるほど、忘れ方がゆるやかになる</text>'
      + '</g></svg>' },
],

sougou: [
  { at: 'ov', k: 'table', t: '語彙と読解をつなぐ',
    cap: '語を知っているだけでは読めない。構造と文脈とあわせて働かせる。',
    head: ['つまずき', '原因', '対処'],
    rows: [
      ['語は分かるが意味が取れない', '構造が取れていない', '主語と動詞を決める'],
      ['訳せるが内容が残らない', '語ごとに訳している', '意味のかたまりで読む'],
      ['知らない語で止まる', '推測していない', '品詞と良し悪しだけ決めて進む'],
      ['選択肢で迷う', '本文の言いかえに気づかない', '根拠の一文を指させるか確かめる'],
    ] },
  { at: 'sec3', k: 'table', t: '分野をまたいで使う',
    cap: '語彙・文法・読解は別々でなく、同じ一つの力の別の面。',
    head: ['分野', '語彙とのつながり'],
    rows: [
      ['文法', '語の形（品詞）が文法の判断を支える'],
      ['読解', '語の言いかえに気づくと内容一致が解ける'],
      ['作文', '決まった組み合わせを使うと自然になる'],
      ['聞き取り', '音と意味が結びつくと速さについていける'],
    ] },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
