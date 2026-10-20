/* 英文法 ― 単元の説明に添える図・表 */
const FIGS = {

bunkei: [
  { at: 'ov', k: 'table', t: '五つの文型',
    cap: '動詞のあとに何が来るかで決まる。まず動詞を見つけ、その右側を見る。',
    head: ['文型', '形', '例', '見分け方'],
    rows: [
      ['第1文型', 'S＋V', 'Birds fly.', '動詞のあとに名詞が要らない'],
      ['第2文型', 'S＋V＋C', 'He is a teacher.', 'S＝C が成り立つ'],
      ['第3文型', 'S＋V＋O', 'I read books.', 'S≠O で、目的語が一つ'],
      ['第4文型', 'S＋V＋O＋O', 'He gave me a book.', '「人に物を」の二つ'],
      ['第5文型', 'S＋V＋O＋C', 'We call him Tom.', 'O＝C が成り立つ'],
    ] },
  { at: 'sec0', k: 'svg', t: '文の要素と修飾語',
    cap: '修飾語をはずしても文は成り立つ。骨格だけを残すと意味がつかみやすい。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="文の要素と修飾語の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="26" font-size="12.5" fill="var(--muted)">The tall boy in the park reads a book every day.</text>'
      + '<rect x="30" y="44" width="120" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="90" y="66" font-size="12.5" fill="var(--primary)">boy</text>'
      + '<text x="90" y="84" font-size="10.5" fill="var(--primary)">主語 S</text>'
      + '<rect x="170" y="44" width="120" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="230" y="66" font-size="12.5" fill="var(--primary)">reads</text>'
      + '<text x="230" y="84" font-size="10.5" fill="var(--primary)">述語動詞 V</text>'
      + '<rect x="310" y="44" width="120" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="370" y="66" font-size="12.5" fill="var(--primary)">a book</text>'
      + '<text x="370" y="84" font-size="10.5" fill="var(--primary)">目的語 O</text>'
      + '<rect x="30" y="108" width="190" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="125" y="127" font-size="11.5">The tall / in the park</text>'
      + '<text x="125" y="144" font-size="10.5" fill="var(--muted)">名詞を修飾</text>'
      + '<rect x="240" y="108" width="190" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="335" y="127" font-size="11.5">every day</text>'
      + '<text x="335" y="144" font-size="10.5" fill="var(--muted)">動詞を修飾</text>'
      + '<text x="530" y="78" font-size="11.5" fill="var(--muted)">骨格は</text>'
      + '<text x="530" y="98" font-size="11.5" fill="var(--muted)">boy reads a book</text>'
      + '</g></svg>' },
],

jisei: [
  { at: 'ov', k: 'svg', t: '時制の時間軸',
    cap: '「いつのことか」を線の上に置いて考えると、形の選択で迷わなくなる。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="時制の時間軸の図">'
      + '<defs><marker id="ar-js1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M40,96 L600,96" stroke="var(--muted)" stroke-width="1.4" marker-end="url(#ar-js1)"/>'
      + '<circle cx="140" cy="96" r="6" fill="var(--primary)"/>'
      + '<circle cx="320" cy="96" r="6" fill="var(--primary)"/>'
      + '<circle cx="500" cy="96" r="6" fill="var(--primary)"/>'
      + '<text x="140" y="62" font-size="12.5">過去</text>'
      + '<text x="140" y="82" font-size="11" fill="var(--muted)">went</text>'
      + '<text x="320" y="62" font-size="12.5">現在</text>'
      + '<text x="320" y="82" font-size="11" fill="var(--muted)">go / goes</text>'
      + '<text x="500" y="62" font-size="12.5">未来</text>'
      + '<text x="500" y="82" font-size="11" fill="var(--muted)">will go</text>'
      + '<text x="140" y="124" font-size="11" fill="var(--muted)">yesterday</text>'
      + '<text x="320" y="124" font-size="11" fill="var(--muted)">every day</text>'
      + '<text x="500" y="124" font-size="11" fill="var(--muted)">tomorrow</text>'
      + '<text x="320" y="154" font-size="11.5" fill="var(--muted)">時を示す語が、使う時制を決めてくれる</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '進行形にしない動詞',
    cap: '状態を表す動詞は、もともと続いている意味なので進行形にしない。',
    head: ['種類', '動詞', '注意'],
    rows: [
      ['心の状態', 'know, believe, want, like', '―'],
      ['知覚', 'see, hear, smell', 'look at, listen to は進行形にできる'],
      ['所有', 'have, own, belong', 'have a meal の意味なら進行形にできる'],
      ['状態', 'be, resemble, consist', 'be は一時的な態度なら進行形も可'],
    ] },
],

kanryou: [
  { at: 'ov', k: 'svg', t: '現在完了は過去と現在をつなぐ',
    cap: '過去形は過去の点だけ、現在完了は過去から現在までの幅を表す。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="現在完了と過去形の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="24" font-size="12.5" fill="var(--primary)">現在完了　have ＋ 過去分詞</text>'
      + '<path d="M60,54 L580,54" stroke="var(--border)" stroke-width="1.4"/>'
      + '<rect x="140" y="46" width="300" height="16" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<circle cx="440" cy="54" r="6" fill="var(--primary)"/>'
      + '<text x="140" y="84" font-size="11" fill="var(--muted)">過去の出来事</text>'
      + '<text x="440" y="84" font-size="11" fill="var(--primary)">今</text>'
      + '<text x="290" y="36" font-size="11" fill="var(--muted)">今につながっている</text>'
      + '<text x="320" y="116" font-size="12.5">過去形　過去の一点だけ</text>'
      + '<path d="M60,142 L580,142" stroke="var(--border)" stroke-width="1.4"/>'
      + '<circle cx="140" cy="142" r="6" fill="var(--text)"/>'
      + '<circle cx="440" cy="142" r="6" fill="var(--muted)"/>'
      + '<text x="140" y="170" font-size="11" fill="var(--muted)">過去の出来事（今とは切れている）</text>'
      + '<text x="440" y="170" font-size="11" fill="var(--muted)">今</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '現在完了の四つの用法',
    cap: '一緒に使う語が用法を教えてくれる。語を見たら用法を決める。',
    head: ['用法', '意味', '一緒に使う語', '例'],
    rows: [
      ['完了', '〜したところだ', 'just, already, yet', 'I have just finished it.'],
      ['結果', '〜してしまった', 'gone, lost', 'He has gone to Osaka.'],
      ['経験', '〜したことがある', 'ever, never, before, times', 'I have been there twice.'],
      ['継続', 'ずっと〜している', 'for, since, how long', 'I have lived here for ten years.'],
    ] },
  { at: 'sec1', k: 'table', t: '現在完了と一緒に使えない語',
    cap: '過去の一点を指す語があると現在完了は使えない。設問でよく問われる。',
    head: ['使えない語', '言いかえ'],
    rows: [
      ['yesterday', 'そのまま過去形にする'],
      ['last week / last year', '過去形にする'],
      ['ago（three days ago）', '過去形にする、または for を使う'],
      ['when で始まる疑問文', 'When did you 〜? とする'],
    ] },
],

jodoushi: [
  { at: 'ov', k: 'table', t: '助動詞の意味',
    cap: '一つの助動詞が複数の意味をもつ。文脈でどちらかを決める。',
    head: ['助動詞', '意味1', '意味2', '過去・ていねい'],
    rows: [
      ['can', '〜できる', '〜でありうる', 'could'],
      ['may', '〜してよい', '〜かもしれない', 'might'],
      ['must', '〜しなければならない', '〜にちがいない', 'had to（義務のみ）'],
      ['will', '〜するつもりだ', '〜だろう', 'would'],
      ['should', '〜すべきだ', '〜のはずだ', '―'],
      ['need', '〜する必要がある', '―', 'need not'],
    ] },
  { at: 'sec2', k: 'svg', t: '推量の確からしさ',
    cap: 'どのくらい確信があるかで助動詞を選ぶ。並べて覚えると選びやすい。',
    svg: '<svg viewBox="0 0 640 155" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="推量の確からしさの図">'
      + '<defs><marker id="ar-jd1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M50,100 L600,100" stroke="var(--primary)" stroke-width="1.6" marker-end="url(#ar-jd1)"/>'
      + '<text x="70" y="126" font-size="11" fill="var(--muted)">弱い</text>'
      + '<text x="580" y="126" font-size="11" fill="var(--muted)">強い</text>'
      + '<circle cx="130" cy="100" r="5" fill="var(--primary)"/>'
      + '<text x="130" y="76" font-size="12">might</text>'
      + '<text x="130" y="58" font-size="10.5" fill="var(--muted)">ひょっとすると</text>'
      + '<circle cx="250" cy="100" r="5" fill="var(--primary)"/>'
      + '<text x="250" y="76" font-size="12">may</text>'
      + '<text x="250" y="58" font-size="10.5" fill="var(--muted)">かもしれない</text>'
      + '<circle cx="380" cy="100" r="5" fill="var(--primary)"/>'
      + '<text x="380" y="76" font-size="12">should</text>'
      + '<text x="380" y="58" font-size="10.5" fill="var(--muted)">のはずだ</text>'
      + '<circle cx="510" cy="100" r="5" fill="var(--primary)"/>'
      + '<text x="510" y="76" font-size="12">must</text>'
      + '<text x="510" y="58" font-size="10.5" fill="var(--muted)">にちがいない</text>'
      + '<text x="320" y="148" font-size="11.5" fill="var(--muted)">否定の推量は cannot（〜のはずがない）</text>'
      + '</g></svg>' },
],

taidoushi: [
  { at: 'ov', k: 'svg', t: '能動態から受動態へ',
    cap: '目的語を主語の位置へ動かし、動詞を be ＋ 過去分詞に変える。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="能動態と受動態の図">'
      + '<defs><marker id="ar-td1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="24" font-size="12.5" fill="var(--muted)">能動態</text>'
      + '<rect x="90" y="36" width="130" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="155" y="60" fill="var(--primary)">Tom</text>'
      + '<rect x="240" y="36" width="130" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="305" y="60">wrote</text>'
      + '<rect x="390" y="36" width="160" height="38" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="470" y="60">this letter</text>'
      + '<path d="M470,80 C470,100 155,100 155,136" stroke="var(--primary)" stroke-width="1.3" fill="none" marker-end="url(#ar-td1)"/>'
      + '<path d="M155,80 C155,100 470,100 470,136" stroke="var(--muted)" stroke-width="1.3" fill="none" marker-end="url(#ar-td1)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="130" font-size="12.5" fill="var(--muted)">受動態</text>'
      + '<rect x="40" y="140" width="160" height="38" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="120" y="164">This letter</text>'
      + '<rect x="215" y="140" width="190" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="310" y="164">was written</text>'
      + '<rect x="420" y="140" width="180" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="510" y="164" fill="var(--primary)">by Tom</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '受動態で気をつける形',
    cap: '前置詞ごと動かす、by を使わない、といった例外が出題されやすい。',
    head: ['形', '例', '注意'],
    rows: [
      ['句動詞の受動態', 'He was laughed at.', '前置詞を落とさない'],
      ['by 以外の前置詞', 'be interested in / be known to', '決まった前置詞を覚える'],
      ['第4文型から', 'I was given a book.', '目的語が二つあるので二通り作れる'],
      ['第5文型から', 'He was called Tom.', '補語はそのまま残る'],
      ['助動詞つき', 'It must be done.', 'be は原形のまま'],
    ] },
],

futeishi: [
  { at: 'ov', k: 'table', t: '不定詞の三用法',
    cap: '文の中でどの品詞の働きをしているかで分ける。前後を見て判断する。',
    head: ['用法', '働き', '訳し方', '例'],
    rows: [
      ['名詞用法', '主語・目的語・補語', '〜すること', 'To read is fun.'],
      ['形容詞用法', '名詞を修飾', '〜するための', 'I have work to do.'],
      ['副詞用法（目的）', '動詞を修飾', '〜するために', 'I came to see you.'],
      ['副詞用法（原因）', '感情の理由', '〜して', 'I am glad to hear it.'],
      ['副詞用法（結果）', '結果を示す', '〜して…になった', 'He grew up to be a doctor.'],
    ] },
  { at: 'sec3', k: 'table', t: 'よく使う不定詞の型',
    cap: '形で覚えておくと、長文の中でも意味がすぐ取れる。',
    head: ['型', '意味', '例'],
    rows: [
      ['too 〜 to do', '…すぎて〜できない', 'too tired to walk'],
      ['〜 enough to do', '〜するほど十分に…', 'old enough to drive'],
      ['It is 〜 for A to do', 'Ａが〜するのは…だ', 'It is hard for me to say it.'],
      ['It is 〜 of A to do', 'Ａが〜するとは…だ', 'It is kind of you to help.'],
      ['疑問詞 ＋ to do', '何を〜すべきか', 'I know what to do.'],
    ] },
],

doumeishi: [
  { at: 'ov', k: 'table', t: '動名詞か不定詞か',
    cap: '動詞ごとに決まっている。動名詞は「すでに／実際に」、不定詞は「これから」が目安。',
    head: ['とる形', '動詞', '目安'],
    rows: [
      ['動名詞のみ', 'enjoy, finish, mind, avoid, give up, stop', 'すでに起きたこと'],
      ['不定詞のみ', 'want, hope, decide, promise, expect, refuse', 'これから起きること'],
      ['どちらも（意味同じ）', 'like, begin, start, continue', '大きな差はない'],
      ['どちらも（意味が違う）', 'remember, forget, try, stop', '形で意味が変わる'],
    ] },
  { at: 'sec1', k: 'table', t: '形で意味が変わる動詞',
    cap: '設問によく出る。時間の前後で覚える。',
    head: ['動詞', '＋ doing', '＋ to do'],
    rows: [
      ['remember', '〜したのを覚えている', '忘れずに〜する'],
      ['forget', '〜したのを忘れる', '〜するのを忘れる'],
      ['try', 'ためしに〜してみる', '〜しようと努める'],
      ['stop', '〜するのをやめる', '〜するために立ち止まる'],
      ['regret', '〜したのを後悔する', '残念ながら〜する'],
    ] },
],

bunshi: [
  { at: 'ov', k: 'table', t: '現在分詞と過去分詞',
    cap: '修飾する名詞が「する側」か「される側」かで選ぶ。',
    head: ['分詞', '意味', '名詞との関係', '例'],
    rows: [
      ['現在分詞（doing）', '〜している', '名詞がする側', 'a sleeping baby'],
      ['過去分詞（done）', '〜された', '名詞がされる側', 'a broken window'],
      ['後ろから修飾', '語が続くとき', '―', 'the boy running there'],
      ['感情を表す語', '―', 'ing は物、ed は人', 'exciting game / excited fans'],
    ] },
  { at: 'sec2', k: 'svg', t: '分詞構文の作り方',
    cap: '接続詞と主語を消して、動詞を ing にする。意味は文脈から決まる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="分詞構文の作り方の図">'
      + '<defs><marker id="ar-bs1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="60" y="24" width="520" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="49">When he saw me, he ran away.</text>'
      + '<path d="M320,68 L320,84" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-bs1)"/>'
      + '<text x="320" y="100" font-size="11" fill="var(--muted)">接続詞 When を消す／主語 he を消す／saw を ing にする</text>'
      + '<path d="M320,108 L320,124" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-bs1)"/>'
      + '<rect x="60" y="128" width="520" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="153" fill="var(--primary)">Seeing me, he ran away.</text>'
      + '<text x="320" y="186" font-size="11.5" fill="var(--muted)">主語が違うときは残す（独立分詞構文）。受身なら Being を省いて過去分詞で始める</text>'
      + '</g></svg>' },
],

kankeishi: [
  { at: 'ov', k: 'table', t: '関係代名詞の使い分け',
    cap: '先行詞が人か物か、節の中でどの役をするかの二点で決まる。',
    head: ['先行詞', '主格', '目的格', '所有格'],
    rows: [
      ['人', 'who', 'whom（who）', 'whose'],
      ['物・動物', 'which', 'which', 'whose（of which）'],
      ['人・物どちらも', 'that', 'that', '―'],
      ['先行詞を含む', 'what（〜するもの・こと）', 'what', '―'],
    ] },
  { at: 'sec2', k: 'svg', t: '制限用法と非制限用法',
    cap: 'コンマがあるかないかで、先行詞がしぼられるかどうかが変わる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="制限用法と非制限用法の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="290" height="124" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="169" y="54" font-size="12.5">制限用法（コンマなし）</text>'
      + '<text x="169" y="80" font-size="11.5" fill="var(--muted)">I have two sons who are doctors.</text>'
      + '<text x="169" y="104" font-size="11.5">息子のうち、医者である二人</text>'
      + '<text x="169" y="130" font-size="11" fill="var(--muted)">息子は三人以上いるかもしれない</text>'
      + '<rect x="326" y="30" width="290" height="124" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="471" y="54" font-size="12.5" fill="var(--primary)">非制限用法（コンマあり）</text>'
      + '<text x="471" y="80" font-size="11.5" fill="var(--muted)">I have two sons, who are doctors.</text>'
      + '<text x="471" y="104" font-size="11.5">息子は二人で、二人とも医者だ</text>'
      + '<text x="471" y="130" font-size="11" fill="var(--muted)">息子はこの二人だけ</text>'
      + '<text x="320" y="176" font-size="11.5" fill="var(--muted)">非制限用法では that を使えない</text>'
      + '</g></svg>' },
],

setsuzokushi: [
  { at: 'ov', k: 'table', t: '接続詞と節',
    cap: '等位接続詞は対等につなぎ、従属接続詞は一方を部品にする。',
    head: ['種類', '語', '働き'],
    rows: [
      ['等位', 'and, but, or, so, for', '語・句・節を対等につなぐ'],
      ['名詞節', 'that, whether, if', '主語・目的語・補語になる'],
      ['時', 'when, while, before, after, until, since', '副詞節'],
      ['理由', 'because, since, as', '副詞節'],
      ['条件', 'if, unless, as long as', '副詞節'],
      ['譲歩', 'though, although, even if', '副詞節'],
    ] },
  { at: 'sec2', k: 'table', t: '時と条件の副詞節',
    cap: '未来のことでも現在形を使う。名詞節の if・when とは区別する。',
    head: ['節の種類', '例', '未来の表し方'],
    rows: [
      ['副詞節', 'If it rains tomorrow, 〜', '現在形（rains）'],
      ['名詞節', 'I do not know if it will rain.', '未来形（will rain）'],
      ['副詞節', 'When he comes, 〜', '現在形（comes）'],
      ['名詞節', 'I wonder when he will come.', '未来形（will come）'],
    ] },
],

hikaku: [
  { at: 'ov', k: 'table', t: '比較の三段階',
    cap: '比べる相手を示す語がそれぞれ決まっている。形とセットで覚える。',
    head: ['段階', '形', '相手を示す語', '例'],
    rows: [
      ['原級', 'as 〜 as', 'as', 'as tall as my brother'],
      ['比較級', '-er / more 〜', 'than', 'taller than my brother'],
      ['最上級', 'the -est / the most 〜', 'in / of', 'the tallest in the class'],
      ['否定の原級', 'not as 〜 as', 'as', 'not as tall as 〜'],
    ] },
  { at: 'sec3', k: 'table', t: '比較の慣用表現',
    cap: '形が決まっているので、見た瞬間に意味を取れるようにしておく。',
    head: ['表現', '意味'],
    rows: [
      ['the 比較級, the 比較級', '〜すればするほど…'],
      ['比較級 ＋ and ＋ 比較級', 'だんだん〜'],
      ['no more than', 'たった（＝only）'],
      ['not more than', '多くても（＝at most）'],
      ['no less than', '〜も（＝as much as）'],
      ['none the less', 'それでもやはり'],
    ] },
],

kateihou: [
  { at: 'ov', k: 'svg', t: '仮定法は時制を一つずらす',
    cap: '現実とちがうことを言うために、わざと一つ古い時制を使う。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="仮定法の時制のずらしの図">'
      + '<defs><marker id="ar-kt1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="170" y="28" font-size="12.5" fill="var(--muted)">言いたい時</text>'
      + '<text x="470" y="28" font-size="12.5" fill="var(--primary)">使う形</text>'
      + '<rect x="40" y="42" width="260" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="170" y="66" font-size="12">今のこと（現実と違う）</text>'
      + '<text x="170" y="86" font-size="11" fill="var(--muted)">If I were rich, 〜</text>'
      + '<rect x="340" y="42" width="260" height="56" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="470" y="66" font-size="12" fill="var(--primary)">仮定法過去</text>'
      + '<text x="470" y="86" font-size="11" fill="var(--muted)">過去形 ／ would ＋ 原形</text>'
      + '<path d="M304,70 L336,70" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kt1)"/>'
      + '<rect x="40" y="112" width="260" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="170" y="136" font-size="12">過去のこと（事実と違う）</text>'
      + '<text x="170" y="156" font-size="11" fill="var(--muted)">If I had been rich, 〜</text>'
      + '<rect x="340" y="112" width="260" height="56" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="470" y="136" font-size="12" fill="var(--primary)">仮定法過去完了</text>'
      + '<text x="470" y="156" font-size="11" fill="var(--muted)">had ＋ 過去分詞 ／ would have ＋ 過去分詞</text>'
      + '<path d="M304,140 L336,140" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kt1)"/>'
      + '<text x="320" y="190" font-size="11.5" fill="var(--muted)">主語が単数でも were を使うのが原則</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '仮定法の慣用表現',
    cap: 'if がなくても仮定法になる形がある。形を手がかりに見つける。',
    head: ['表現', '意味'],
    rows: [
      ['I wish ＋ 仮定法', '〜ならいいのに'],
      ['as if ＋ 仮定法', 'まるで〜のように'],
      ['It is time ＋ 過去形', 'もう〜してよいころだ'],
      ['without / but for 〜', '〜がなければ'],
      ['倒置（Were I 〜 / Had I 〜）', 'if を省いた形'],
    ] },
],

meishi: [
  { at: 'ov', k: 'table', t: '数えられる名詞と数えられない名詞',
    cap: '日本語の感覚とずれる語が出題される。語ごとに覚えるしかない。',
    head: ['種類', '例', '量の表し方'],
    rows: [
      ['数えられる', 'book, apple, idea', 'many, a few, 数詞'],
      ['数えられない（物質）', 'water, paper, bread', 'much, a little, a piece of'],
      ['数えられない（抽象）', 'information, advice, news', 'much, a piece of'],
      ['数えられない（集合）', 'furniture, baggage, equipment', 'much, a piece of'],
      ['どちらにもなる', 'paper（紙・新聞）, glass（ガラス・コップ）', '意味で変わる'],
    ] },
  { at: 'sec1', k: 'table', t: '冠詞の使い分け',
    cap: '聞き手がどれのことか分かるかどうかが判断の軸。',
    head: ['冠詞', '使う場面', '例'],
    rows: [
      ['a / an', '初めて出す、どれでもよい一つ', 'I saw a dog.'],
      ['the', 'どれのことか分かる', 'The dog was big.'],
      ['the', 'ただ一つしかないもの', 'the sun, the earth'],
      ['無冠詞', '本来の目的で使うとき', 'go to school, at night'],
      ['無冠詞', '数えられない名詞一般', 'Water is important.'],
    ] },
],

zenchishi: [
  { at: 'ov', k: 'svg', t: '場所を示す前置詞',
    cap: '点・線・面・空間のどれでとらえるかで前置詞が決まる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="場所を示す前置詞の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="186" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<circle cx="117" cy="68" r="7" fill="var(--primary)"/>'
      + '<text x="117" y="100" font-size="13" fill="var(--primary)">at</text>'
      + '<text x="117" y="122" font-size="11" fill="var(--muted)">点としての場所　at the door</text>'
      + '<rect x="226" y="30" width="186" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="276" y="54" width="86" height="26" rx="3" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="319" y="100" font-size="13" fill="var(--primary)">on</text>'
      + '<text x="319" y="122" font-size="11" fill="var(--muted)">面に接する　on the wall</text>'
      + '<rect x="428" y="30" width="188" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="482" y="46" width="80" height="42" rx="4" fill="none" stroke="var(--primary)"/>'
      + '<circle cx="522" cy="67" r="6" fill="var(--primary)"/>'
      + '<text x="522" y="100" font-size="13" fill="var(--primary)">in</text>'
      + '<text x="522" y="122" font-size="11" fill="var(--muted)">空間の中　in the room</text>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">時にも同じ感覚が使える　at six ／ on Monday ／ in May</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '時を示す前置詞',
    cap: '時間の幅の大きさで at・on・in を選ぶ。期間を表す語も区別する。',
    head: ['前置詞', '使う範囲', '例'],
    rows: [
      ['at', '時刻・一点', 'at seven, at noon'],
      ['on', '日・曜日', 'on Monday, on May 5'],
      ['in', '月・季節・年', 'in May, in 2020'],
      ['for', '期間の長さ', 'for three days'],
      ['during', '特定の期間の間', 'during the summer'],
      ['by / until', '期限／継続の終わり', 'by five ／ until five'],
    ] },
],

tokushu: [
  { at: 'ov', k: 'table', t: '倒置が起きる場面',
    cap: '強調したい語を前に出すと、主語と動詞の順が入れかわる。',
    head: ['先頭に来る語', '語順', '例'],
    rows: [
      ['否定の副詞（never, little, hardly）', '疑問文の語順', 'Never have I seen it.'],
      ['Only ＋ 語句', '疑問文の語順', 'Only then did I know.'],
      ['方向・場所の副詞', '動詞 ＋ 主語', 'Here comes the bus.'],
      ['補語の強調', '補語 ＋ 動詞 ＋ 主語', 'Happy is the man who 〜'],
      ['if の省略', 'Were / Had / Should ＋ 主語', 'Had I known it, 〜'],
    ] },
  { at: 'sec0', k: 'table', t: '強調の仕方',
    cap: 'どこを強めたいかで形を選ぶ。強調構文は訳し分けが問われる。',
    head: ['方法', '形', '例'],
    rows: [
      ['強調構文', 'It is 〜 that …', 'It was Tom that broke it.'],
      ['動詞の強調', 'do / does / did ＋ 原形', 'I do like it.'],
      ['疑問詞の強調', '疑問詞 ＋ on earth', 'What on earth is it?'],
      ['否定の強調', 'not 〜 at all', 'not tired at all'],
      ['最上級の強調', 'by far the 〜', 'by far the best'],
    ] },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
