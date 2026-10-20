/* 生物 ― 単元の説明に添える図・表・写真 */
const FIGS = {

saibou: [
  { at: 'ov', k: 'photo', t: 'フックが描いたコルクの細胞', src: 'img/cell.jpg',
    cap: '1665年『ミクログラフィア』より。小部屋のように見えたことから cell（細胞）と名づけられた。実際に見えていたのは細胞壁である。', credit: 'ウィキメディア・コモンズ「Micrographia Schem 11.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '動物細胞と植物細胞',
    cap: '共通するものと、植物だけがもつものを分けて覚える。',
    head: ['細胞小器官', '動物', '植物', 'はたらき'],
    rows: [
      ['核', '○', '○', 'DNAを収め、遺伝情報を保つ'],
      ['ミトコンドリア', '○', '○', '呼吸でATPをつくる'],
      ['小胞体・ゴルジ体', '○', '○', 'タンパク質の輸送と加工'],
      ['リボソーム', '○', '○', 'タンパク質の合成'],
      ['リソソーム', '○', '△', '分解'],
      ['中心体', '○', '△', '細胞分裂の極になる'],
      ['細胞壁', '✕', '○', 'セルロース。形を保つ'],
      ['葉緑体', '✕', '○', '光合成'],
      ['発達した液胞', '✕', '○', '物質の貯蔵、浸透圧の調節'],
    ] },
  { at: 'sec1', k: 'svg', t: '浸透圧と細胞',
    cap: '細胞壁があるかないかで、水が入ったときの運命が変わる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="浸透圧と細胞の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="159" y="54" font-size="12.5">動物細胞（細胞壁なし）</text>'
      + '<text x="159" y="80" font-size="11.5" fill="var(--muted)">低張液 → 吸水してふくらみ、破れる（溶血）</text>'
      + '<text x="159" y="102" font-size="11.5" fill="var(--muted)">高張液 → 水が出て縮む</text>'
      + '<text x="159" y="124" font-size="11.5" fill="var(--muted)">等張液 → 変化しない</text>'
      + '<rect x="346" y="30" width="270" height="110" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="481" y="54" font-size="12.5" fill="var(--primary)">植物細胞（細胞壁あり）</text>'
      + '<text x="481" y="80" font-size="11.5" fill="var(--muted)">低張液 → 膨圧が生じ、破れない</text>'
      + '<text x="481" y="102" font-size="11.5" fill="var(--muted)">高張液 → 原形質分離が起きる</text>'
      + '<text x="481" y="124" font-size="11.5" fill="var(--muted)">細胞壁が内側からの圧力を受け止める</text>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">細胞膜はリン脂質二重層。小さい分子は通し、大きい分子やイオンは輸送体を使う</text>'
      + '</g></svg>' },
],

tanpaku: [
  { at: 'ov', k: 'svg', t: 'タンパク質の四段階の構造',
    cap: 'アミノ酸の並びが決まると、立体構造も決まる。構造が崩れると働きも失われる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="タンパク質の構造の図">'
      + '<defs><marker id="ar-tp" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="34" width="144" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="84" y="58">一次構造</text><text x="84" y="80" font-size="11" fill="var(--muted)">アミノ酸の配列</text>'
      + '<rect x="172" y="34" width="144" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="244" y="58">二次構造</text><text x="244" y="80" font-size="11" fill="var(--muted)">αヘリックス・βシート</text>'
      + '<rect x="332" y="34" width="144" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="404" y="58">三次構造</text><text x="404" y="80" font-size="11" fill="var(--muted)">S-S結合で折りたたまれる</text>'
      + '<rect x="492" y="34" width="136" height="66" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="560" y="58" fill="var(--primary)">四次構造</text><text x="560" y="80" font-size="11" fill="var(--muted)">サブユニットの集合</text>'
      + '<line x1="158" y1="67" x2="168" y2="67" stroke="var(--muted)" marker-end="url(#ar-tp)"/>'
      + '<line x1="318" y1="67" x2="328" y2="67" stroke="var(--muted)" marker-end="url(#ar-tp)"/>'
      + '<line x1="478" y1="67" x2="488" y2="67" stroke="var(--muted)" marker-end="url(#ar-tp)"/>'
      + '<text x="320" y="134" font-size="11.5" fill="var(--muted)">熱や強い酸・塩基で立体構造が壊れることを変性という（ゆで卵が戻らない理由）</text>'
      + '<text x="320" y="158" font-size="11.5" fill="var(--muted)">ヘモグロビンは4つのサブユニットからなる四次構造の代表例</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '酵素のはたらきの特徴',
    cap: '基質特異性と最適条件。この二つが酵素の性質をほとんど説明する。',
    head: ['性質', '内容', '例・注意'],
    rows: [
      ['基質特異性', '決まった基質にしか働かない', '鍵と鍵穴の関係'],
      ['最適温度', '35〜40℃付近（ヒト）', '高温では変性して失活する'],
      ['最適pH', '酵素ごとに違う', 'ペプシンは2、トリプシンは8付近'],
      ['触媒作用', '活性化エネルギーを下げる', '自身は変化しない'],
      ['競争的阻害', '基質とよく似た物質が活性部位を奪う', '基質を増やせば回復する'],
      ['非競争的阻害', 'アロステリック部位に結合', '基質を増やしても回復しない'],
    ] },
],

taisha: [
  { at: 'ov', k: 'photo', t: 'ミトコンドリア（電子顕微鏡）', src: 'img/mitochondria.jpg',
    cap: '内膜が折れこんだクリステをもつ。ここでATPが大量につくられるため「細胞の発電所」と呼ばれる。', credit: 'ウィキメディア・コモンズ「Mitochondrion 186.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: 'ATPのはたらき',
    cap: '高エネルギーリン酸結合が切れるときにエネルギーが出る。使うそばから作り直される。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ATPとADPの循環の図">'
      + '<defs><marker id="ar-at" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="90" y="54" width="140" height="44" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="160" y="82" fill="var(--primary)">ATP</text>'
      + '<rect x="410" y="54" width="140" height="44" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="480" y="82">ADP ＋ リン酸</text>'
      + '<path d="M234,66 Q320,26 406,66" fill="none" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-at)"/>'
      + '<text x="320" y="36" font-size="11.5" fill="var(--primary)">分解 → エネルギーを放出（約30 kJ/mol）</text>'
      + '<path d="M406,88 Q320,128 234,88" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar-at)"/>'
      + '<text x="320" y="128" font-size="11.5" fill="var(--muted)">合成 ← 呼吸や光合成でエネルギーを使う</text>'
      + '<text x="320" y="156" font-size="11.5" fill="var(--muted)">筋収縮・能動輸送・物質の合成――どれもATPを使う</text>'
      + '</g></svg>' },
],

kokyuu: [
  { at: 'ov', k: 'svg', t: '呼吸の3段階',
    cap: 'どこで行われ、ATPがいくつできるか。この組み合わせで覚える。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="呼吸の3段階の図">'
      + '<defs><marker id="ar-ko" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="34" width="190" height="86" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="58" font-size="12.5">解糖系</text>'
      + '<text x="109" y="80" font-size="11" fill="var(--muted)">細胞質基質</text>'
      + '<text x="109" y="98" font-size="11" fill="var(--muted)">グルコース → ピルビン酸</text>'
      + '<text x="109" y="114" font-size="11" fill="var(--primary)">ATP 2</text>'
      + '<rect x="224" y="34" width="190" height="86" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="58" font-size="12.5">クエン酸回路</text>'
      + '<text x="319" y="80" font-size="11" fill="var(--muted)">ミトコンドリアのマトリックス</text>'
      + '<text x="319" y="98" font-size="11" fill="var(--muted)">CO₂を放出、NADHをつくる</text>'
      + '<text x="319" y="114" font-size="11" fill="var(--primary)">ATP 2</text>'
      + '<rect x="434" y="34" width="192" height="86" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="530" y="58" font-size="12.5" fill="var(--primary)">電子伝達系</text>'
      + '<text x="530" y="80" font-size="11" fill="var(--muted)">ミトコンドリア内膜</text>'
      + '<text x="530" y="98" font-size="11" fill="var(--muted)">O₂が電子を受け取り水に</text>'
      + '<text x="530" y="114" font-size="11" fill="var(--primary)">ATP 最大34</text>'
      + '<line x1="206" y1="77" x2="220" y2="77" stroke="var(--muted)" marker-end="url(#ar-ko)"/>'
      + '<line x1="416" y1="77" x2="430" y2="77" stroke="var(--muted)" marker-end="url(#ar-ko)"/>'
      + '<text x="320" y="152" font-size="12">C₆H₁₂O₆ ＋ 6O₂ ＋ 6H₂O → 6CO₂ ＋ 12H₂O ＋ 最大38ATP</text>'
      + '<text x="320" y="178" font-size="11.5" fill="var(--muted)">酸素がないと解糖系だけになり、発酵（アルコール発酵・乳酸発酵）に進む</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '呼吸と発酵のちがい',
    cap: '酸素を使うかどうかで、取り出せるエネルギーが20倍近く違う。',
    head: ['', '呼吸', 'アルコール発酵', '乳酸発酵'],
    rows: [
      ['酸素', '必要', '不要', '不要'],
      ['最終産物', 'CO₂と水', 'エタノールとCO₂', '乳酸'],
      ['ATP（グルコース1分子あたり）', '最大38', '2', '2'],
      ['行う生物', 'ほとんどの生物', '酵母', '乳酸菌、筋肉'],
    ] },
],

kougousei: [
  { at: 'ov', k: 'photo', t: '葉緑体', src: 'img/chloroplast.jpg',
    cap: '内部に重なったチラコイドをもつ。ここで光のエネルギーが化学エネルギーに変えられる。', credit: 'ウィキメディア・コモンズ「The Biological bulletin (20379036205).jpg」（No restrictions）' },
  { at: 'sec0', k: 'svg', t: '光合成の二つの反応',
    cap: '光がいる反応と、いらない反応。切り分けて考えると流れが見える。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="光合成のしくみの図">'
      + '<defs><marker id="ar-kg" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="34" width="250" height="96" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="149" y="58" font-size="12.5" fill="var(--primary)">チラコイドでの反応</text>'
      + '<text x="149" y="82" font-size="11" fill="var(--muted)">光が必要。水を分解して酸素を出す</text>'
      + '<text x="149" y="102" font-size="11" fill="var(--muted)">ATPとNADPHをつくる</text>'
      + '<text x="149" y="120" font-size="11" fill="var(--muted)">光化学系Ⅰ・Ⅱ、電子伝達系</text>'
      + '<rect x="366" y="34" width="250" height="96" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="491" y="58" font-size="12.5">ストロマでの反応</text>'
      + '<text x="491" y="82" font-size="11" fill="var(--muted)">光は直接は不要（カルビン回路）</text>'
      + '<text x="491" y="102" font-size="11" fill="var(--muted)">CO₂を固定して有機物にする</text>'
      + '<text x="491" y="120" font-size="11" fill="var(--muted)">ルビスコがはたらく</text>'
      + '<line x1="278" y1="82" x2="360" y2="82" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-kg)"/>'
      + '<text x="319" y="74" font-size="10.5" fill="var(--primary)">ATP・NADPH</text>'
      + '<text x="320" y="164" font-size="12">6CO₂ ＋ 12H₂O ＋ 光 → C₆H₁₂O₆ ＋ 6O₂ ＋ 6H₂O</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '光合成の速さを決めるもの',
    cap: '一番足りていないものが全体の速さを決める（限定要因）。',
    head: ['要因', '増やすと', '限界'],
    rows: [
      ['光の強さ', '弱いうちは比例して増える', '光飽和点で頭打ち'],
      ['二酸化炭素濃度', '低いうちは効く', '高濃度では効かなくなる'],
      ['温度', '酵素反応なので上がると速い', '高温では失活する'],
      ['—', '光補償点＝見かけの光合成が0になる光の強さ', '—'],
    ] },
],

dna: [
  { at: 'ov', k: 'photo', t: 'DNAの二重らせん', src: 'img/dnamodel.jpg',
    cap: '1953年にワトソンとクリックが提唱した構造。二本の鎖が逆向きに並び、塩基どうしが対になって内側を向く。', credit: 'ウィキメディア・コモンズ「DNA Double Helix by NHGRI.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'DNAとRNA',
    cap: '糖・塩基・鎖の数の三点が違う。ここを取り違えないようにする。',
    head: ['', 'DNA', 'RNA'],
    rows: [
      ['糖', 'デオキシリボース', 'リボース'],
      ['塩基', 'A・T・G・C', 'A・U・G・C'],
      ['鎖', '二本鎖', '一本鎖'],
      ['はたらき', '遺伝情報の保存', '情報の伝達と翻訳（mRNA・tRNA・rRNA）'],
      ['塩基対', 'A＝T（2本の水素結合）、G≡C（3本）', '—'],
    ] },
  { at: 'sec1', k: 'svg', t: '半保存的複製',
    cap: 'もとの鎖の一本がそのまま残り、新しい鎖と対になる。メセルソンとスタールが証明した。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="半保存的複製の図">'
      + '<defs><marker id="ar-dn2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="56" y="54" width="20" height="70" fill="var(--primary)"/>'
      + '<rect x="84" y="54" width="20" height="70" fill="var(--primary)"/>'
      + '<text x="80" y="144" font-size="11">もとのDNA</text>'
      + '<line x1="124" y1="88" x2="176" y2="88" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar-dn2)"/>'
      + '<rect x="206" y="54" width="20" height="70" fill="var(--primary)"/>'
      + '<rect x="234" y="54" width="20" height="70" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="230" y="144" font-size="11">複製①</text>'
      + '<rect x="300" y="54" width="20" height="70" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<rect x="328" y="54" width="20" height="70" fill="var(--primary)"/>'
      + '<text x="324" y="144" font-size="11">複製②</text>'
      + '<text x="500" y="70" font-size="11.5">■ もとの鎖　□ 新しい鎖</text>'
      + '<text x="500" y="94" font-size="11.5" fill="var(--muted)">DNAポリメラーゼが5′→3′に合成</text>'
      + '<text x="500" y="116" font-size="11.5" fill="var(--muted)">リーディング鎖とラギング鎖（岡崎フラグメント）</text>'
      + '</g></svg>' },
],

hatsugen: [
  { at: 'ov', k: 'svg', t: 'セントラルドグマ',
    cap: 'DNAの情報がRNAに写され、タンパク質に翻訳される。情報の流れは基本的に一方向である。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="セントラルドグマの図">'
      + '<defs><marker id="ar-ce" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="52" width="140" height="48" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="110" y="82">DNA</text>'
      + '<rect x="250" y="52" width="140" height="48" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="82" fill="var(--primary)">mRNA</text>'
      + '<rect x="460" y="52" width="140" height="48" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="530" y="82">タンパク質</text>'
      + '<line x1="184" y1="76" x2="244" y2="76" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-ce)"/>'
      + '<text x="214" y="66" font-size="11" fill="var(--primary)">転写</text>'
      + '<line x1="394" y1="76" x2="454" y2="76" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-ce)"/>'
      + '<text x="424" y="66" font-size="11" fill="var(--primary)">翻訳</text>'
      + '<text x="320" y="128" font-size="11.5" fill="var(--muted)">真核生物ではスプライシングでイントロンが除かれる</text>'
      + '<text x="320" y="150" font-size="11.5" fill="var(--muted)">コドン（3つの塩基）が1つのアミノ酸を指定する。開始コドンはAUG</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '遺伝子発現の調節',
    cap: 'すべての細胞が同じDNAをもつのに、違う細胞になるのは発現の調節による。',
    head: ['段階', '調節のしかた', '例'],
    rows: [
      ['転写', '調節タンパク質がプロモーターに結合', 'オペロン説（ジャコブとモノー）'],
      ['転写後', 'スプライシングの切り方を変える', '一つの遺伝子から複数のタンパク質'],
      ['翻訳', 'mRNAの寿命、翻訳開始の制御', 'miRNA'],
      ['翻訳後', '糖鎖の付加、切断', 'インスリンの成熟'],
    ] },
],

bunretsu: [
  { at: 'ov', k: 'table', t: '体細胞分裂と減数分裂',
    cap: '回数・染色体数・できる細胞の数と性質が、すべて違う。',
    head: ['', '体細胞分裂', '減数分裂'],
    rows: [
      ['分裂の回数', '1回', '2回'],
      ['娘細胞の数', '2個', '4個'],
      ['染色体数', '変わらない（2n→2n）', '半分になる（2n→n）'],
      ['対合・乗換え', '起きない', '第一分裂前期に起きる'],
      ['遺伝的な性質', '親と同じ', '多様な組み合わせ'],
      ['起きる場所', '体の細胞', '生殖細胞をつくるとき'],
    ] },
  { at: 'sec0', k: 'svg', t: '細胞周期',
    cap: '分裂期は全体の一部で、多くの時間は間期にある。DNAはS期に複製される。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="細胞周期の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<circle cx="190" cy="98" r="72" fill="none" stroke="var(--border)" stroke-width="18"/>'
      + '<path d="M190,26 A72,72 0 0,1 253,134" fill="none" stroke="var(--primary)" stroke-width="18"/>'
      + '<text x="190" y="94" font-size="12">細胞周期</text>'
      + '<text x="190" y="112" font-size="10.5" fill="var(--muted)">間期＋分裂期</text>'
      + '<text x="264" y="60" font-size="11" fill="var(--primary)">S期</text>'
      + '<text x="268" y="150" font-size="11">G₂期</text>'
      + '<text x="118" y="156" font-size="11">M期（分裂期）</text>'
      + '<text x="104" y="54" font-size="11">G₁期</text>'
      + '<text x="430" y="52" font-size="12">S期　DNAが複製される（2倍に）</text>'
      + '<text x="430" y="78" font-size="12">M期　前期・中期・後期・終期</text>'
      + '<text x="430" y="104" font-size="11.5" fill="var(--muted)">中期＝染色体が赤道面に並ぶ</text>'
      + '<text x="430" y="126" font-size="11.5" fill="var(--muted)">後期＝染色体が両極へ分かれる</text>'
      + '<text x="430" y="152" font-size="11.5" fill="var(--muted)">各期の細胞数の比は、その期の長さの比に等しい</text>'
      + '</g></svg>' },
],

hassei: [
  { at: 'ov', k: 'photo', t: '脊椎動物の初期発生（古い比較図）', src: 'img/embryo.jpg',
    cap: '初期の胚は種をこえてよく似ている。発生のしくみが共通していることを示す古典的な図版。', credit: 'ウィキメディア・コモンズ「Comparative embryology of the vertebrates; with 2057 drawings and photos. grouped as 380 illus (1953) (20049543203).jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '三胚葉から何ができるか',
    cap: 'どの胚葉からどの器官ができるかは、試験でよく問われる。',
    head: ['胚葉', 'できる器官'],
    rows: [
      ['外胚葉', '表皮、神経管（脳・脊髄）、感覚器'],
      ['中胚葉', '脊索、骨格、筋肉、心臓・血管、腎臓、生殖腺'],
      ['内胚葉', '消化管の上皮、肺、肝臓、すい臓、甲状腺'],
    ] },
  { at: 'sec2', k: 'svg', t: '形成体と誘導',
    cap: 'ある部分が隣の部分の運命を決める。シュペーマンの実験が示した発生の基本原理。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="形成体と誘導の図">'
      + '<defs><marker id="ar-hs" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="48" width="170" height="54" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="125" y="70" fill="var(--primary)">形成体（オーガナイザー）</text>'
      + '<text x="125" y="90" font-size="11" fill="var(--muted)">原口背唇部</text>'
      + '<rect x="330" y="48" width="170" height="54" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="415" y="70">接する外胚葉</text>'
      + '<text x="415" y="90" font-size="11" fill="var(--muted)">神経管になる</text>'
      + '<line x1="214" y1="75" x2="324" y2="75" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-hs)"/>'
      + '<text x="269" y="66" font-size="11" fill="var(--primary)">誘導</text>'
      + '<text x="320" y="134" font-size="11.5" fill="var(--muted)">誘導は連鎖する（眼杯 → 水晶体 → 角膜）</text>'
      + '<text x="320" y="156" font-size="11.5" fill="var(--muted)">移植すると二次胚ができることから、形成体の存在が確かめられた</text>'
      + '</g></svg>' },
],

idenhousoku: [
  { at: 'ov', k: 'photo', t: 'メンデル', src: 'img/mendel.jpg',
    cap: '修道院の庭でエンドウを交配し、形質が粒のように伝わることを示した。発表（1865）当時は理解されなかった。', credit: 'ウィキメディア・コモンズ「Gregor Mendel.png」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'メンデルの法則',
    cap: '三つの法則と、それが成り立たない場合をセットで押さえる。',
    head: ['法則', '内容', '例外・注意'],
    rows: [
      ['優性（顕性）の法則', '雑種第一代には一方の形質だけが現れる', '不完全優性（中間雑種）がある'],
      ['分離の法則', '対立遺伝子は配偶子をつくるとき分かれる', '例外はほぼない'],
      ['独立の法則', '別の形質は互いに影響せず伝わる', '同じ染色体上にあると連鎖する'],
    ] },
  { at: 'sec2', k: 'svg', t: '伴性遺伝',
    cap: 'X染色体上の遺伝子は、男女で現れ方が違う。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="伴性遺伝の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="34" width="250" height="90" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="165" y="58" font-size="12.5">女性（XX）</text>'
      + '<text x="165" y="82" font-size="11.5" fill="var(--muted)">2本のうち1本が正常なら発症しない</text>'
      + '<text x="165" y="104" font-size="11.5" fill="var(--muted)">保因者になりうる</text>'
      + '<rect x="350" y="34" width="250" height="90" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="475" y="58" font-size="12.5" fill="var(--primary)">男性（XY）</text>'
      + '<text x="475" y="82" font-size="11.5" fill="var(--muted)">X染色体は1本しかない</text>'
      + '<text x="475" y="104" font-size="11.5" fill="var(--muted)">劣性でもそのまま発症する</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">赤緑色覚多様性や血友病が、男性に多く現れるのはこのため</text>'
      + '</g></svg>' },
],

kousei: [
  { at: 'ov', k: 'photo', t: '赤血球（電子顕微鏡）', src: 'img/blood.jpg',
    cap: '中央がくぼんだ円盤状で、核をもたない。この形が表面積を広げ、酸素の受け渡しを効率よくしている。', credit: 'ウィキメディア・コモンズ「Malaria-infected Red Blood Cell (26834372607).jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '自律神経とホルモン',
    cap: '速いが短い神経の調節と、遅いが長く続くホルモンの調節が組み合わさる。',
    head: ['', '交感神経', '副交感神経'],
    rows: [
      ['はたらく場面', '活動時・緊張時', '休息時・食後'],
      ['心拍', '速くなる', '遅くなる'],
      ['瞳孔', '拡大', '縮小'],
      ['消化', '抑制', '促進'],
      ['気管支', '拡張', '収縮'],
    ] },
  { at: 'sec2', k: 'svg', t: '血糖濃度の調節',
    cap: '下げるホルモンは一つだけ、上げるホルモンは複数ある。飢餓への備えの名残とされる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="血糖調節の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="34" width="250" height="100" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="165" y="58" font-size="12.5" fill="var(--primary)">高いとき → 下げる</text>'
      + '<text x="165" y="84" font-size="11.5" fill="var(--muted)">インスリン（すい臓ランゲルハンス島B細胞）</text>'
      + '<text x="165" y="108" font-size="11.5" fill="var(--muted)">グルコースをグリコーゲンに変える</text>'
      + '<rect x="350" y="34" width="250" height="100" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="475" y="58" font-size="12.5">低いとき → 上げる</text>'
      + '<text x="475" y="82" font-size="11.5" fill="var(--muted)">グルカゴン（A細胞）</text>'
      + '<text x="475" y="102" font-size="11.5" fill="var(--muted)">アドレナリン（副腎髄質）</text>'
      + '<text x="475" y="122" font-size="11.5" fill="var(--muted)">糖質コルチコイド（副腎皮質）</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">結果が原因にもどって調節する仕組みをフィードバックという</text>'
      + '</g></svg>' },
],

meneki: [
  { at: 'ov', k: 'svg', t: '免疫の三段構え',
    cap: '物理的な壁、すぐ働く自然免疫、あとから効くが記憶する獲得免疫。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="免疫の段階の図">'
      + '<defs><marker id="ar-mn" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="34" width="190" height="86" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="58" font-size="12.5">① 物理・化学的防御</text>'
      + '<text x="109" y="82" font-size="11" fill="var(--muted)">皮膚、粘液、胃酸</text>'
      + '<text x="109" y="100" font-size="11" fill="var(--muted)">リゾチーム</text>'
      + '<rect x="224" y="34" width="190" height="86" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="58" font-size="12.5">② 自然免疫</text>'
      + '<text x="319" y="82" font-size="11" fill="var(--muted)">食作用（好中球・マクロファージ）</text>'
      + '<text x="319" y="100" font-size="11" fill="var(--muted)">炎症、NK細胞</text>'
      + '<rect x="434" y="34" width="192" height="86" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="530" y="58" font-size="12.5" fill="var(--primary)">③ 獲得免疫</text>'
      + '<text x="530" y="82" font-size="11" fill="var(--muted)">体液性（B細胞・抗体）</text>'
      + '<text x="530" y="100" font-size="11" fill="var(--muted)">細胞性（キラーT細胞）</text>'
      + '<line x1="206" y1="77" x2="220" y2="77" stroke="var(--muted)" marker-end="url(#ar-mn)"/>'
      + '<line x1="416" y1="77" x2="430" y2="77" stroke="var(--muted)" marker-end="url(#ar-mn)"/>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">一度出会った抗原を記憶細胞が覚えているので、二度目は速く強く反応する（二次応答）</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">予防接種はこのしくみを利用している</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '免疫がうまく働かないとき',
    cap: '過剰・誤り・不足の三つの方向に異常が起きる。',
    head: ['状態', '中身', '例'],
    rows: [
      ['アレルギー', '過剰な反応', '花粉症、アナフィラキシー'],
      ['自己免疫疾患', '自分の体を攻撃', '関節リウマチ、1型糖尿病'],
      ['免疫不全', '働きが足りない', 'エイズ（HIVがヘルパーT細胞を壊す）'],
      ['拒絶反応', '他人の細胞を異物とみなす', '臓器移植'],
    ] },
],

shinkei: [
  { at: 'ov', k: 'photo', t: '神経細胞の古典的なスケッチ', src: 'img/neuron.jpg',
    cap: '染色法によって神経細胞の形が描けるようになり、神経系が独立した細胞の集まりであることが分かった。', credit: 'ウィキメディア・コモンズ「The brain of the tiger salamander, Ambystoma tigrinum (1948) (20220979489).jpg」（No restrictions）' },
  { at: 'sec0', k: 'svg', t: '興奮の伝導と伝達',
    cap: '細胞の中は電気で、細胞のあいだは化学物質で伝わる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="興奮の伝導と伝達の図">'
      + '<defs><marker id="ar-sn" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<circle cx="90" cy="76" r="24" fill="var(--surface)" stroke="var(--primary)" stroke-width="2"/>'
      + '<line x1="114" y1="76" x2="300" y2="76" stroke="var(--primary)" stroke-width="6"/>'
      + '<polygon points="300,66 330,76 300,86" fill="var(--primary)"/>'
      + '<circle cx="400" cy="76" r="24" fill="var(--surface)" stroke="var(--muted)" stroke-width="2"/>'
      + '<line x1="140" y1="56" x2="260" y2="56" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-sn)"/>'
      + '<text x="200" y="46" text-anchor="middle" font-size="11" fill="var(--primary)">伝導（電気・活動電位）</text>'
      + '<text x="358" y="46" text-anchor="middle" font-size="11" fill="var(--muted)">伝達</text>'
      + '<text x="358" y="116" text-anchor="middle" font-size="10.5" fill="var(--muted)">神経伝達物質</text>'
      + '<text x="460" y="60" font-size="11.5">静止電位　約 －60 mV</text>'
      + '<text x="460" y="82" font-size="11.5">活動電位　＋30 mV 前後まで</text>'
      + '<text x="460" y="104" font-size="11.5" fill="var(--muted)">全か無かの法則</text>'
      + '<text x="320" y="156" text-anchor="middle" font-size="11.5" fill="var(--muted)">有髄神経繊維では、ランビエ絞輪を跳ぶ跳躍伝導で速く伝わる</text>'
      + '</g></svg>' },
],

seitaikei: [
  { at: 'ov', k: 'photo', t: '熱帯雨林', src: 'img/forest.jpg',
    cap: '多層の林冠が光をほとんど受け止める。生産者のつくる有機物が、生態系全体のエネルギーの入り口になる。', credit: 'ウィキメディア・コモンズ「Afternoon Clouds over the Amazon Rainforest.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '物質循環とエネルギーの流れ',
    cap: '物質は循環するが、エネルギーは一方向に流れて最後は熱になる。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="物質循環とエネルギーの流れの図">'
      + '<defs><marker id="ar-st" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="54" width="140" height="44" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="100" y="82" fill="var(--primary)">生産者</text>'
      + '<rect x="240" y="54" width="140" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="310" y="82">消費者</text>'
      + '<rect x="450" y="54" width="150" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="525" y="82">分解者</text>'
      + '<line x1="174" y1="76" x2="234" y2="76" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-st)"/>'
      + '<line x1="384" y1="76" x2="444" y2="76" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-st)"/>'
      + '<path d="M525,100 Q525,140 300,140 Q100,140 100,102" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar-st)"/>'
      + '<text x="310" y="134" font-size="11" fill="var(--muted)">無機物にもどって循環する</text>'
      + '<text x="100" y="40" font-size="11" fill="var(--muted)">太陽のエネルギー ↓</text>'
      + '<text x="320" y="174" font-size="11.5" fill="var(--muted)">各段階で多くが熱として失われるため、栄養段階を上がるほど量は減る（生態ピラミッド）</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: 'おもな環境問題',
    cap: '原因となる物質と、起きることをセットで覚える。',
    head: ['問題', '原因', '影響'],
    rows: [
      ['地球温暖化', '二酸化炭素・メタン', '海面上昇、気候の変化'],
      ['オゾン層の破壊', 'フロン', '紫外線の増加'],
      ['酸性雨', '硫黄酸化物・窒素酸化物', '森林の枯死、湖沼の酸性化'],
      ['富栄養化', '窒素・リンの流入', '赤潮、アオコ'],
      ['生物濃縮', '分解されにくい物質', '食物連鎖の上位ほど高濃度に'],
      ['外来生物', '人による持ちこみ', '在来種の減少'],
    ] },
],

shinka: [
  { at: 'ov', k: 'photo', t: '始祖鳥（アーケオプテリクス）', src: 'img/archaeopteryx.jpg',
    cap: '羽毛と翼をもちながら、歯と長い尾の骨も残す。は虫類と鳥類をつなぐ中間型の化石として知られる。', credit: 'ウィキメディア・コモンズ「PSM V36 D401 Archaeopteryx macroura.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '進化の証拠',
    cap: 'いくつもの別々の方向からの証拠が、同じ結論を指している。',
    head: ['証拠', '中身', '例'],
    rows: [
      ['化石', '中間型の生物が見つかる', '始祖鳥、イクチオステガ'],
      ['相同器官', '形は違うが起源が同じ', 'ヒトの腕、クジラのひれ、コウモリの翼'],
      ['相似器官', '起源は違うが働きが同じ', '鳥の翼と昆虫の翅'],
      ['痕跡器官', '働きを失った器官が残る', 'ヒトの虫垂、クジラの後肢の骨'],
      ['発生', '初期の胚がよく似る', '脊椎動物の鰓裂'],
      ['分子', '塩基配列やアミノ酸配列の違い', '分子時計で分岐年代を推定'],
    ] },
  { at: 'sec1', k: 'svg', t: '進化のしくみ',
    cap: '変異が生まれ、選ばれ、隔離されて別の種になる。この流れが基本になる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="進化のしくみの図">'
      + '<defs><marker id="ar-sk2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="38" width="144" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="84" y="62">突然変異</text><text x="84" y="84" font-size="11" fill="var(--muted)">遺伝的な変異が生じる</text>'
      + '<rect x="172" y="38" width="144" height="66" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="244" y="62" fill="var(--primary)">自然選択</text><text x="244" y="84" font-size="11" fill="var(--muted)">適した個体が子を多く残す</text>'
      + '<rect x="332" y="38" width="144" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="404" y="62">隔離</text><text x="404" y="84" font-size="11" fill="var(--muted)">地理的・生殖的に分かれる</text>'
      + '<rect x="492" y="38" width="136" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="560" y="62">種分化</text><text x="560" y="84" font-size="11" fill="var(--muted)">別の種になる</text>'
      + '<line x1="158" y1="71" x2="168" y2="71" stroke="var(--muted)" marker-end="url(#ar-sk2)"/>'
      + '<line x1="318" y1="71" x2="328" y2="71" stroke="var(--muted)" marker-end="url(#ar-sk2)"/>'
      + '<line x1="478" y1="71" x2="488" y2="71" stroke="var(--muted)" marker-end="url(#ar-sk2)"/>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">小さな集団では偶然によっても遺伝子頻度が変わる（遺伝的浮動）</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">多くの変異は有利でも不利でもない、という考えが木村資生の中立説</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
