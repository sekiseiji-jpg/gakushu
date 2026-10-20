/* 英文読解 ― 単元の説明に添える図・表 */
const FIGS = {

kokkaku: [
  { at: 'ov', k: 'svg', t: '修飾をはずして骨格を出す',
    cap: '長い文も、修飾部分をかっこに入れると主語と動詞だけが残る。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="文の骨格を出す図">'
      + '<defs><marker id="ar-kk2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="22" width="592" height="46" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="42" font-size="11.5">The students who studied abroad last year</text>'
      + '<text x="320" y="60" font-size="11.5">often say that the experience changed their lives.</text>'
      + '<path d="M320,74 L320,90" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kk2)"/>'
      + '<text x="320" y="106" font-size="11" fill="var(--muted)">関係詞節と副詞をかっこに入れる</text>'
      + '<rect x="24" y="116" width="592" height="42" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="142" font-size="11.5">The students （who studied abroad last year） （often） say that 〜</text>'
      + '<rect x="150" y="166" width="340" height="28" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="185" font-size="12" fill="var(--primary)">骨格　The students say that 〜</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '節を見分ける目印',
    cap: '節の頭にある語が、その節の働きを教えてくれる。',
    head: ['頭にある語', '節の働き', '文の中での役'],
    rows: [
      ['that / whether / 疑問詞', '名詞節', '主語・目的語・補語'],
      ['who / which / that（先行詞あり）', '形容詞節', '名詞を修飾'],
      ['when / because / if / though', '副詞節', '動詞や文全体を修飾'],
      ['分詞（doing / done）', '句', '名詞を修飾、または分詞構文'],
      ['to do', '句', '三用法のいずれか'],
    ] },
],

shushoku: [
  { at: 'ov', k: 'table', t: '後ろから名詞を修飾する形',
    cap: '英語は長い修飾を名詞の後ろに置く。どこまでが修飾かを見きわめる。',
    head: ['形', '例', '切れ目の見つけ方'],
    rows: [
      ['前置詞句', 'the book on the desk', '前置詞の直後の名詞までが一つ'],
      ['不定詞', 'something to eat', 'to の動詞と、その目的語まで'],
      ['現在分詞', 'the man standing there', '分詞とそれに続く語句まで'],
      ['過去分詞', 'a letter written in English', '分詞とそれに続く語句まで'],
      ['関係詞節', 'the city which I visited', '次の動詞が出るまで'],
    ] },
  { at: 'sec1', k: 'svg', t: '修飾の入れ子',
    cap: '修飾の中にさらに修飾が入る。内側から順に閉じていくと混乱しない。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="修飾の入れ子の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="592" height="94" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="60" y="52" font-size="11" fill="var(--primary)" text-anchor="start">名詞のかたまり</text>'
      + '<rect x="56" y="58" width="528" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="92" y="78" font-size="11" fill="var(--muted)" text-anchor="start">関係詞節</text>'
      + '<rect x="88" y="84" width="464" height="22" rx="6" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="100" font-size="11">the roof of the house which stands on the hill</text>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">which の先行詞は the house。直前の名詞に係ることが多い</text>'
      + '</g></svg>' },
],

shijigo: [
  { at: 'ov', k: 'table', t: '指示語が指すもの',
    cap: '指示語は原則として前に出たものを指す。候補を入れて意味が通るか確かめる。',
    head: ['指示語', '指す範囲', '確かめ方'],
    rows: [
      ['it', '単数の名詞、または直前の内容', '入れかえて読み直す'],
      ['they / them', '複数の名詞', '数が合うかを見る'],
      ['this / these', '直前の内容、または次に述べる内容', '前後どちらかを決める'],
      ['that / those', '前に出た名詞のくり返しを避ける', '同じ形の語を探す'],
      ['such', '前に述べた種類のもの', '範囲を文単位で取る'],
      ['so / do so', '前の動詞句', '動詞ごと置きかえる'],
    ] },
  { at: 'sec3', k: 'table', t: '指示内容を答えるときの手順',
    cap: '本文の語をそのまま使い、指示語の位置に入れて通るかを必ず確かめる。',
    head: ['手順', 'すること'],
    rows: [
      ['1', '指示語の直前から、さかのぼって候補を探す'],
      ['2', '単数か複数か、数で候補をしぼる'],
      ['3', '候補を指示語の位置に入れて読む'],
      ['4', '本文の表現のまま、必要な長さで書き出す'],
    ] },
],

tsunagigo: [
  { at: 'ov', k: 'table', t: 'つなぎ語の分類',
    cap: 'つなぎ語は、次に何が来るかの予告。見つけたら先を予測する。',
    head: ['働き', '語', '次に来るもの'],
    rows: [
      ['順接・結論', 'therefore, thus, so, as a result', '前を受けた結論'],
      ['逆接', 'however, but, nevertheless, yet', '前と反対の内容'],
      ['対比', 'on the other hand, while, in contrast', 'もう一方の立場'],
      ['例示', 'for example, for instance, such as', '具体例'],
      ['追加', 'moreover, in addition, also', '同じ向きの内容'],
      ['言いかえ', 'in other words, that is', '前と同じ内容'],
    ] },
  { at: 'sec1', k: 'svg', t: 'つなぎ語で先を予測する',
    cap: '逆接が来たら、そのあとに筆者の主張が置かれることが多い。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="つなぎ語で予測する図">'
      + '<defs><marker id="ar-tg1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="40" width="180" height="62" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="114" y="66" font-size="12">一般に言われること</text>'
      + '<text x="114" y="88" font-size="11" fill="var(--muted)">Many people think 〜</text>'
      + '<rect x="230" y="40" width="130" height="62" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="295" y="76" font-size="12.5" fill="var(--primary)">However</text>'
      + '<rect x="386" y="40" width="230" height="62" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="501" y="66" font-size="12">筆者の主張</text>'
      + '<text x="501" y="88" font-size="11" fill="var(--muted)">ここが設問になりやすい</text>'
      + '<path d="M208,71 L226,71" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-tg1)"/>'
      + '<path d="M364,71 L382,71" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-tg1)"/>'
      + '<text x="320" y="138" font-size="11.5" fill="var(--muted)">つなぎ語がない段落は、文の主語のくり返しで流れを追う</text>'
      + '</g></svg>' },
],

danraku: [
  { at: 'ov', k: 'svg', t: '段落の組み立て',
    cap: '多くの段落は、主題文・支持文・まとめの三部でできている。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="段落の組み立ての図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="40" y="24" width="560" height="42" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="43" text-anchor="middle" font-size="12.5" fill="var(--primary)">主題文（topic sentence）</text>'
      + '<text x="320" y="60" text-anchor="middle" font-size="11" fill="var(--muted)">段落の言いたいこと。多くは一文目</text>'
      + '<rect x="70" y="76" width="500" height="36" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="99" text-anchor="middle" font-size="11.5">支持文　例・数値・理由で支える</text>'
      + '<rect x="70" y="120" width="500" height="36" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="143" text-anchor="middle" font-size="11.5">支持文　さらに具体化する</text>'
      + '<rect x="40" y="164" width="560" height="30" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="184" text-anchor="middle" font-size="11.5">まとめの文（置かれないこともある）</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '段落どうしの関係',
    cap: '段落の先頭の一文を拾い読みすると、文章全体の設計が見える。',
    head: ['関係', '目印', '読み方'],
    rows: [
      ['具体化', 'For example で始まる', '前の段落の主張を支えている'],
      ['対比', 'On the other hand', '二つの立場を並べている'],
      ['反論', 'However, Critics argue', '前の立場を退けにかかる'],
      ['追加', 'Moreover, Another', '同じ向きに積み上げる'],
      ['結論', 'In conclusion, Thus', '全体のまとめ'],
    ] },
],

youshi: [
  { at: 'ov', k: 'table', t: '話題と主張を分ける',
    cap: '「何について」が話題、「それをどう考えるか」が主張。要旨は主張のほう。',
    head: ['区分', '問い', '例'],
    rows: [
      ['話題', '何について書いているか', '人工知能と仕事'],
      ['主張', 'それについてどう考えているか', '仕事は失われるより形が変わる'],
      ['根拠', 'なぜそう言えるか', '過去の技術革新の例'],
      ['要旨', '話題＋主張を一文に', '人工知能は仕事の形を変える'],
    ] },
  { at: 'sec0', k: 'svg', t: '要旨を見つける場所',
    cap: '最初の段落と最後の段落に主張が置かれることが多い。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="要旨を見つける場所の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="26" width="110" height="110" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="95" y="60" font-size="12" fill="var(--primary)">第1段落</text>'
      + '<text x="95" y="82" font-size="11" fill="var(--muted)">話題の提示</text>'
      + '<text x="95" y="102" font-size="11" fill="var(--muted)">主張の予告</text>'
      + '<rect x="166" y="26" width="300" height="110" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="316" y="60" font-size="12">中の段落</text>'
      + '<text x="316" y="82" font-size="11" fill="var(--muted)">具体例・数値・反論への答え</text>'
      + '<text x="316" y="102" font-size="11" fill="var(--muted)">枝葉になりやすい</text>'
      + '<rect x="482" y="26" width="118" height="110" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="541" y="60" font-size="12" fill="var(--primary)">最終段落</text>'
      + '<text x="541" y="82" font-size="11" fill="var(--muted)">主張のくり返し</text>'
      + '<text x="541" y="102" font-size="11" fill="var(--muted)">まとめ</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">両端で同じことを言っていれば、それが要旨</text>'
      + '</g></svg>' },
],

suiron: [
  { at: 'ov', k: 'table', t: '推論の範囲',
    cap: '本文から「言える」のか「言いすぎ」なのか。選択肢の切り分けはここで決まる。',
    head: ['段階', '内容', '正解になるか'],
    rows: [
      ['書かれている', '本文に直接ある', '内容一致なら正解'],
      ['言いかえ', '本文の別の言い方', '正解になりやすい'],
      ['推論できる', '本文から必ず導ける', '推論問題なら正解'],
      ['ありそうだが根拠なし', '常識では正しそう', '不正解'],
      ['言いすぎ', 'always, never, only などで強めた', '不正解'],
    ] },
  { at: 'sec1', k: 'table', t: '書き手の立場を示す表現',
    cap: '事実を述べているのか、考えを述べているのかを分けながら読む。',
    head: ['種類', '表現'],
    rows: [
      ['断定', 'clearly, certainly, must'],
      ['ひかえめ', 'may, might, seem, tend to, likely'],
      ['距離を置く', 'It is said that, Some argue that'],
      ['評価', 'unfortunately, surprisingly, importantly'],
    ] },
],

'hyougen-ito': [
  { at: 'ov', k: 'table', t: '表現の技法',
    cap: '技法そのものより、なぜその言い方を選んだのかが問われる。',
    head: ['技法', '説明', '例'],
    rows: [
      ['比喩', 'ほかのものにたとえる', 'Time is money.'],
      ['擬人', '人でないものを人のように', 'The wind whispered.'],
      ['反語', '反対のことを言って強める', 'What a great idea it was.'],
      ['くり返し', '同じ語を重ねて強める', 'again and again'],
      ['対比', '反対の語を並べる', 'not A but B'],
      ['控えめな言い方', 'わざと弱く言う', 'not a bad idea'],
    ] },
],

zuhyou: [
  { at: 'ov', k: 'svg', t: '図表を読む手順',
    cap: '数値を先に見ると迷う。題名と軸の単位を先に確かめる。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="図表を読む手順の図">'
      + '<defs><marker id="ar-zh1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="140" height="48" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="94" y="52" font-size="11.5" fill="var(--primary)">1　題名を読む</text>'
      + '<text x="94" y="70" font-size="10.5" fill="var(--muted)">何の図か</text>'
      + '<path d="M168,54 L186,54" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-zh1)"/>'
      + '<rect x="190" y="30" width="140" height="48" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="260" y="52" font-size="11.5">2　軸と単位</text>'
      + '<text x="260" y="70" font-size="10.5" fill="var(--muted)">割合か実数か</text>'
      + '<path d="M334,54 L352,54" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-zh1)"/>'
      + '<rect x="356" y="30" width="140" height="48" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="426" y="52" font-size="11.5">3　目立つ変化</text>'
      + '<text x="426" y="70" font-size="10.5" fill="var(--muted)">最大・最小・転換点</text>'
      + '<path d="M426,82 L426,100" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-zh1)"/>'
      + '<rect x="190" y="104" width="306" height="48" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="343" y="126" font-size="11.5" fill="var(--primary)">4　本文のどの段落の話かを対応づける</text>'
      + '<text x="343" y="144" font-size="10.5" fill="var(--muted)">図表を指す語（as shown in, the figure）を探す</text>'
      + '<text x="320" y="178" font-size="11.5" fill="var(--muted)">割合の増加と実数の増加は別のこと。選択肢のすりかえに注意</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '図表の問題で誤りやすい点',
    cap: '選択肢は、ほんの少しだけ言いかえて誤りにしてある。',
    head: ['すりかえ', '例'],
    rows: [
      ['割合と実数', '割合は下がったが人数は増えている'],
      ['比較の相手', '前年比なのか他国比なのか'],
      ['期間', '全体の傾向か、ある年だけか'],
      ['単位', '千人か万人か、円かドルか'],
      ['因果', '同時に動いているだけで原因とは限らない'],
    ] },
],

fukusuu: [
  { at: 'ov', k: 'table', t: '複数の資料の関係',
    cap: '資料どうしがどうつながるかを先に決めると、設問で探す場所が決まる。',
    head: ['関係', '見分け方', '設問になりやすい点'],
    rows: [
      ['補い合う', '同じ話題を別の面から', '両方を合わせた結論'],
      ['対立する', '反対の立場', 'どこが食い違うか'],
      ['一般と具体', '一方が例になっている', '具体例が支える主張'],
      ['本文と図表', '数値の裏づけ', '数値と記述の対応'],
      ['意見と事実', '一方が感想', 'どちらが事実か'],
    ] },
  { at: 'sec1', k: 'table', t: '読む順序',
    cap: '設問を先に見てから資料に入ると、読む範囲をしぼれる。',
    head: ['順序', 'すること'],
    rows: [
      ['1', '資料の題名と出どころを見る'],
      ['2', '設問に目を通し、何を探すか決める'],
      ['3', '資料ごとに主張を一文にする'],
      ['4', '資料どうしの関係を決める'],
      ['5', '設問に戻り、根拠の場所を示しながら答える'],
    ] },
],

jitsuyou: [
  { at: 'ov', k: 'table', t: '実用的な文章の型',
    cap: '必要な情報の置き場所が決まっている。全部を読まず、探しに行く。',
    head: ['種類', '探すところ', 'よく問われること'],
    rows: [
      ['案内・広告', '日時・場所・料金・条件', '条件に合うのはどれか'],
      ['予定表', '時刻の列と項目の行', 'いつ何があるか'],
      ['手引き', '手順の番号と注意書き', '正しい順序はどれか'],
      ['申込書', '締め切りと必要なもの', '何が足りないか'],
      ['電子メール', '件名・用件・依頼の文', '書き手が求めていること'],
    ] },
  { at: 'sec1', k: 'table', t: '見落としやすい約束ごと',
    cap: '小さく書かれた但し書きが、正解を決めていることが多い。',
    head: ['場所', '内容'],
    rows: [
      ['星印や注の記号', '例外・条件'],
      ['かっこ書き', '対象者の限定'],
      ['表の欄外', '単位・適用期間'],
      ['太字や下線', '強調された条件'],
    ] },
],

monogatari: [
  { at: 'ov', k: 'table', t: '心情を読み取る手がかり',
    cap: '気持ちを表す語がなくても、動作や情景が心情を示している。',
    head: ['手がかり', '例', '読み取れること'],
    rows: [
      ['表情・動作', 'bit her lip, looked away', 'こらえている・避けている'],
      ['体の反応', 'her hands trembled', '緊張や怒り'],
      ['情景', 'The sky turned gray.', '気分の落ち込み'],
      ['会話の切れ方', 'He said nothing.', '不満やとまどい'],
      ['くり返し', '同じ語を何度も', '強い思い'],
    ] },
  { at: 'sec2', k: 'table', t: '物語文と随筆の違い',
    cap: '随筆は、出来事そのものより、そこから考えたことが中心。',
    head: ['観点', '物語文', '随筆'],
    rows: [
      ['中心', '人物と出来事', '書き手の考え'],
      ['語り手', '登場人物または第三者', '書き手本人'],
      ['問われること', '心情とその理由', '体験から引き出した考え'],
      ['読む手順', '場面を区切る', '体験と考えを分ける'],
    ] },
],

'goi-suisoku': [
  { at: 'ov', k: 'table', t: '語の形から意味を推測する',
    cap: '接頭辞と接尾辞を知っていると、知らない語でも方向が見える。',
    head: ['部分', '意味', '例'],
    rows: [
      ['un- / in- / dis-', '否定', 'unhappy, invisible, disagree'],
      ['re-', 'ふたたび・元へ', 'rebuild, return'],
      ['pre- / fore-', '前に', 'predict, foresee'],
      ['-able / -ible', '〜できる', 'readable, visible'],
      ['-less', '〜がない', 'careless, endless'],
      ['-ness / -ity', '性質（名詞）', 'kindness, ability'],
      ['-ize / -en', '〜にする（動詞）', 'realize, strengthen'],
    ] },
  { at: 'sec0', k: 'svg', t: '文脈から意味を絞る手順',
    cap: '知らない語に出会っても止まらない。方向さえ分かれば読み進められる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="文脈から語の意味を絞る手順の図">'
      + '<defs><marker id="ar-gs1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="60" y="20" width="520" height="36" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="43" text-anchor="middle" fill="var(--primary)">1　品詞を決める（前後の語の位置から）</text>'
      + '<path d="M320,60 L320,74" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-gs1)"/>'
      + '<rect x="60" y="78" width="520" height="36" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="101" text-anchor="middle">2　良い意味か悪い意味かを決める</text>'
      + '<path d="M320,118 L320,132" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-gs1)"/>'
      + '<rect x="60" y="136" width="520" height="36" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="159" text-anchor="middle">3　言いかえや例示（that is, such as）を探す</text>'
      + '</g></svg>' },
],

setsumon: [
  { at: 'ov', k: 'table', t: '設問の型と解き方',
    cap: '型ごとに、本文のどこを見るかが決まっている。',
    head: ['設問の型', '見るところ', '注意'],
    rows: [
      ['内容一致', '選択肢の語を本文で探す', '言いかえられている'],
      ['指示内容', '指示語の直前', '入れて読み直す'],
      ['語義', '前後の言いかえ', '辞書の第一義とは限らない'],
      ['空所補充', '前後のつなぎ語と流れ', '文法の形も合わせる'],
      ['並べかえ', '指示語と冠詞のつながり', '最初の一文を決める'],
      ['主旨', '最初と最後の段落', '一部だけの内容は誤り'],
    ] },
  { at: 'sec0', k: 'table', t: '内容一致で誤りになる型',
    cap: '選択肢は本文に似せてある。どこを変えてあるかを見つける。',
    head: ['誤りの型', '見分け方'],
    rows: [
      ['言いすぎ', 'always, all, never, only がある'],
      ['主体のすりかえ', 'だれがしたのかが入れかわっている'],
      ['因果の逆転', '原因と結果が逆'],
      ['本文にない', 'もっともらしいが根拠がない'],
      ['部分の拡大', '一つの例を全体のことにしている'],
    ] },
],

sougou: [
  { at: 'ov', k: 'svg', t: '読解の時間配分',
    cap: '設問を先に見て、本文を一度で読み切るのが基本。読み返しを減らす。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="読解の時間配分の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="46" width="90" height="40" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="85" y="71" font-size="11.5" fill="var(--primary)">設問を見る</text>'
      + '<text x="85" y="104" font-size="11" fill="var(--muted)">1分</text>'
      + '<rect x="140" y="46" width="230" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="255" y="71" font-size="11.5">本文を通して読む</text>'
      + '<text x="255" y="104" font-size="11" fill="var(--muted)">6分</text>'
      + '<rect x="380" y="46" width="160" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="460" y="71" font-size="11.5">設問を解く</text>'
      + '<text x="460" y="104" font-size="11" fill="var(--muted)">5分</text>'
      + '<rect x="550" y="46" width="60" height="40" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="580" y="71" font-size="11.5">見直し</text>'
      + '<text x="580" y="104" font-size="11" fill="var(--muted)">1分</text>'
      + '<text x="320" y="30" font-size="11.5" fill="var(--muted)">六百語程度の長文で、十三分を目安にした配分の例</text>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">分からない語で止まらない。段落ごとに一言でまとめながら進む</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '読む力の伸ばし方',
    cap: '速さは語彙と構文の自動化から来る。量と復習を組み合わせる。',
    head: ['取り組み', 'ねらい', '目安'],
    rows: [
      ['音読', '語順のまま理解する', '同じ文章を三回'],
      ['区切り読み', '意味のかたまりで切る', '毎日一題'],
      ['語彙の復習', '知らない語を減らす', '前日の語を翌日に'],
      ['時間を計る', '本番の速さに慣れる', '週に二回'],
      ['要旨を書く', '主張をつかむ練習', '一題一文'],
    ] },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
