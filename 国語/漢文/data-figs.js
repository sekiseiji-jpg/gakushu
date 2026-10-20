/* 漢文 ― 単元の説明に添える図・表 */
const FIGS = {

kundoku: [
  { at: 'ov', k: 'table', t: '返り点の種類',
    cap: '返り点は「下から上へ返って読む」ための符号。下に付いた点から順に処理する。',
    head: ['返り点', '読み方', '使う場面', '例'],
    rows: [
      ['レ点', 'すぐ上の一字に返る', '一字だけ飛び越すとき', '読レ書（書を読む）'],
      ['一二点', '一のあと二へ返る', '二字以上を飛び越すとき', '読二漢文一（漢文を読む）'],
      ['上下点', '一二点をまたいで返る', '一二点の外側をさらに返る', '有下読二漢文一者上'],
      ['甲乙点', '上下点をまたいで返る', 'さらに外側を返る（まれ）', '―'],
      ['ハイフン', '二字の熟語をひとまとまりに', '熟語に返り点をつけるとき', '不二読-書一'],
    ] },
  { at: 'sec1', k: 'svg', t: '返り点をたどる順序',
    cap: '返り点のない字は上から順に読み、点のある字はいったん飛ばしてあとで戻る。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="返り点をたどる順序の図">'
      + '<defs><marker id="ar-kd1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="26" font-size="12.5" fill="var(--muted)">不 読 漢 文（一二点とレ点をあわせた例）</text>'
      + '<rect x="60" y="48" width="104" height="46" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="112" y="70" font-size="14">不</text><text x="112" y="88" font-size="10.5" fill="var(--muted)">レ点</text>'
      + '<rect x="196" y="48" width="104" height="46" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="248" y="70" font-size="14">読</text><text x="248" y="88" font-size="10.5" fill="var(--muted)">二点</text>'
      + '<rect x="332" y="48" width="104" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="384" y="70" font-size="14" fill="var(--primary)">漢</text>'
      + '<rect x="468" y="48" width="104" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="520" y="70" font-size="14" fill="var(--primary)">文</text><text x="520" y="88" font-size="10.5" fill="var(--primary)">一点</text>'
      + '<path d="M384,108 L520,108" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kd1)"/>'
      + '<path d="M520,124 L248,124" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kd1)"/>'
      + '<path d="M248,140 L112,140" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kd1)"/>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">読む順序　漢 → 文 → 読 → 不</text>'
      + '<text x="320" y="190" font-size="11.5" fill="var(--muted)">書き下し　漢文を読まず</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '書き下し文のきまり',
    cap: '漢字のまま残すか、ひらがなに直すかの判断がすべて。迷ったら品詞を考える。',
    head: ['対象', 'どうするか', '例'],
    rows: [
      ['助動詞にあたる字', 'ひらがなに直す', '不 → ず、可 → べし、見 → る・らる'],
      ['助詞にあたる字', 'ひらがなに直す', '之 → の、与 → と、乎 → や'],
      ['置き字', '書かない', '而・於・于・焉・矣・兮'],
      ['再読文字', '一度目は漢字、二度目はひらがな', '未 → いまダ〜ず'],
      ['送り仮名', '歴史的仮名遣いで書く', 'いふ・をり・けふ'],
    ] },
],

saidoku: [
  { at: 'ov', k: 'table', t: 'おもな再読文字',
    cap: '一度目は副詞として、二度目は返ってきて助動詞として読む。九字をまとめて覚える。',
    head: ['字', '読み', '意味'],
    rows: [
      ['未', 'いまダ〜ず', 'まだ〜しない'],
      ['将', 'まさニ〜ントす', '今にも〜しようとする'],
      ['且', 'まさニ〜ントす', '今にも〜しようとする'],
      ['当', 'まさニ〜ベシ', '当然〜すべきだ'],
      ['応', 'まさニ〜ベシ', 'きっと〜だろう'],
      ['宜', 'よろシク〜ベシ', '〜するのがよい'],
      ['須', 'すべかラク〜ベシ', 'ぜひ〜する必要がある'],
      ['猶', 'なホ〜ノ（ガ）ごとシ', 'ちょうど〜のようだ'],
      ['盍', 'なんゾ〜ざル', 'どうして〜しないのか'],
    ] },
  { at: 'sec0', k: 'svg', t: '再読文字の読み方',
    cap: '同じ一字を二度読む。一度目は返らず、二度目は下から返ってくる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="再読文字の読み方の図">'
      + '<defs><marker id="ar-sd1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="26" font-size="12.5" fill="var(--muted)">未 帰（いまだ帰らず）</text>'
      + '<rect x="140" y="46" width="150" height="50" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="215" y="68" font-size="14" fill="var(--primary)">未</text>'
      + '<text x="215" y="88" font-size="10.5" fill="var(--primary)">一度目「いまだ」</text>'
      + '<rect x="350" y="46" width="150" height="50" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="425" y="74" font-size="14">帰</text>'
      + '<path d="M215,110 L425,110" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sd1)"/>'
      + '<path d="M425,132 L215,132" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sd1)"/>'
      + '<text x="215" y="152" font-size="10.5" fill="var(--muted)">二度目「ず」</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">書き下しでは、二度目だけをひらがなにする</text>'
      + '</g></svg>' },
],

hitei: [
  { at: 'ov', k: 'table', t: '否定を表す字',
    cap: '字ごとに打ち消す対象がちがう。無は存在を、非は判断を打ち消す。',
    head: ['字', '読み', '打ち消すもの', '例'],
    rows: [
      ['不（弗）', 'ず', '動作・状態', '不行（行かず）'],
      ['無（莫・毋）', 'なシ', '存在', '無人（人なし）'],
      ['非（匪）', 'あらズ', '「〜である」という判断', '非人（人にあらず）'],
      ['未', 'いまダ〜ず', 'まだ実現していないこと', '未知（いまだ知らず）'],
      ['勿（莫）', 'なカレ', '禁止', '勿言（言ふことなかれ）'],
    ] },
  { at: 'sec2', k: 'table', t: '部分否定と全部否定',
    cap: '否定の字と副詞のどちらが先に来るかで意味が変わる。語順を必ず確かめる。',
    head: ['語順', '呼び方', '読み', '意味'],
    rows: [
      ['不＋常', '部分否定', 'つねニハ〜ず', 'いつも〜とはかぎらない'],
      ['常＋不', '全部否定', 'つねニ〜ず', 'いつも〜しない'],
      ['不＋必', '部分否定', 'かならズシモ〜ず', '必ずしも〜とはかぎらない'],
      ['必＋不', '全部否定', 'かならズ〜ず', '必ず〜しない'],
      ['不＋尽', '部分否定', 'ことごとクハ〜ず', 'すべてが〜ではない'],
    ] },
  { at: 'sec1', k: 'table', t: '二重否定',
    cap: '否定の字が二つ重なると強い肯定になる。訳すときは肯定文にする。',
    head: ['形', '読み', '意味'],
    rows: [
      ['無不〜', '〜ざルハなシ', '〜しないものはない'],
      ['非不〜', '〜ざルニあらズ', '〜しないわけではない'],
      ['不可不〜', '〜ざルベカラず', '〜しなければならない'],
      ['未嘗不〜', 'いまダかつテ〜ずンバアラず', '今まで〜しなかったことはない'],
    ] },
],

gimon: [
  { at: 'ov', k: 'table', t: 'おもな疑問詞',
    cap: '何をたずねているかで読みが決まる。人・場所・理由・方法を区別する。',
    head: ['字', '読み', 'たずねるもの'],
    rows: [
      ['何', 'なんゾ／なにヲカ', '理由・事物'],
      ['誰（孰）', 'たれカ', '人'],
      ['安（悪・焉）', 'いづクンゾ／いづクニカ', '理由・場所'],
      ['何如', 'いかん', '状態・ようす'],
      ['如何', 'いかんセン', '方法・手段'],
      ['幾何', 'いくばくゾ', '数量'],
    ] },
  { at: 'sec1', k: 'svg', t: '疑問と反語の見分け',
    cap: '形は似ているが、答えを求めるのが疑問、強く言い切るのが反語。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="疑問と反語の見分けの図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="34" width="266" height="96" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="163" y="58" font-size="12.5">疑問</text>'
      + '<text x="163" y="80" font-size="11.5" fill="var(--muted)">文末が連体形　〜カ</text>'
      + '<text x="163" y="100" font-size="11.5" fill="var(--muted)">何為者（なにをなす者ぞ）</text>'
      + '<text x="163" y="120" font-size="11.5" fill="var(--muted)">訳「何をする者か」</text>'
      + '<rect x="344" y="34" width="266" height="96" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="477" y="58" font-size="12.5" fill="var(--primary)">反語</text>'
      + '<text x="477" y="80" font-size="11.5" fill="var(--muted)">文末が「〜ンヤ」</text>'
      + '<text x="477" y="100" font-size="11.5" fill="var(--muted)">豈不楽乎（あにたのしからずや）</text>'
      + '<text x="477" y="120" font-size="11.5" fill="var(--muted)">訳「楽しくないことがあろうか」</text>'
      + '<text x="320" y="158" font-size="11.5" fill="var(--muted)">反語は、言いたいことの反対を問いの形にした強い主張</text>'
      + '</g></svg>' },
],

shieki: [
  { at: 'ov', k: 'table', t: '使役の形',
    cap: '「使（令）＋人＋動詞」が基本形。だれにさせるかを示す字が間に入る。',
    head: ['字', '読み', '形', '例'],
    rows: [
      ['使', 'しム', '使＋人＋動詞', '使人行（人をして行かしむ）'],
      ['令', 'しム', '令＋人＋動詞', '令臣往（臣をして往かしむ）'],
      ['教', 'しム', '教＋人＋動詞', '教子学（子をして学ばしむ）'],
      ['遣', 'しム／つかハス', '遣＋人＋動詞', '遣使告（使ひを遣はして告ぐ）'],
      ['命', 'めいジテ〜しム', '命＋人＋動詞', '命将攻（将に命じて攻めしむ）'],
    ] },
  { at: 'sec2', k: 'table', t: '使役を含む表現',
    cap: '使役の字がなくても、意味の上で使役に読む場合がある。文脈で判断する。',
    head: ['形', '説明', '例'],
    rows: [
      ['字のない使役', '命じる意味の動詞があるとき', '召臣（臣を召して〜させる）'],
      ['使〜不〜', '〜させない', '使民不飢（民をして飢ゑざらしむ）'],
      ['不使〜', '〜させない（全体の否定）', '不使知（知らしめず）'],
    ] },
],

ukemi: [
  { at: 'ov', k: 'table', t: '受身の形',
    cap: '受身は四つの型で覚える。「為〜所〜」は形がはっきりしているので見つけやすい。',
    head: ['形', '読み', '例'],
    rows: [
      ['見＋動詞', 'る・らル', '見笑（笑はる）'],
      ['被＋動詞', 'る・らル', '被殺（殺さる）'],
      ['為Ａ所Ｂ', 'ＡノＢスルところトなル', '為人所笑（人の笑ふ所と為る）'],
      ['動詞＋於Ａ', 'Ａニ〜る・らル', '勝於人（人に勝たる）'],
    ] },
  { at: 'sec2', k: 'svg', t: '使役と受身を取りちがえない',
    cap: '「使」は人にさせる、「見・被」はされる。主語がどちら側かを確かめる。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="使役と受身の対比の図">'
      + '<defs><marker id="ar-uk1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="163" y="30" font-size="12.5" fill="var(--primary)">使役　使・令</text>'
      + '<rect x="30" y="42" width="96" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="78" y="67">主語</text>'
      + '<rect x="200" y="42" width="96" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="248" y="67">相手</text>'
      + '<path d="M130,62 L196,62" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-uk1)"/>'
      + '<text x="163" y="104" font-size="11" fill="var(--muted)">主語が、相手にさせる</text>'
      + '<text x="477" y="30" font-size="12.5" fill="var(--primary)">受身　見・被・為〜所</text>'
      + '<rect x="344" y="42" width="96" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="392" y="67">主語</text>'
      + '<rect x="514" y="42" width="96" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="562" y="67">相手</text>'
      + '<path d="M510,62 L444,62" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-uk1)"/>'
      + '<text x="477" y="104" font-size="11" fill="var(--muted)">主語が、相手からされる</text>'
      + '<text x="320" y="142" font-size="11.5" fill="var(--muted)">「見」は受身のほかに「まみユ（お目にかかる）」とも読むので注意</text>'
      + '</g></svg>' },
],

hikaku: [
  { at: 'ov', k: 'table', t: '比較・最上・選択の句法',
    cap: '「於」は比較の目印。「不如」は「〜に及ばない」で、下に来るほうが上という点に注意。',
    head: ['形', '読み', '意味'],
    rows: [
      ['Ａ於Ｂ', 'ＢヨリモＡ', 'ＢよりＡだ'],
      ['不如Ｂ（不若）', 'Ｂニしカず', 'Ｂに及ばない＝Ｂのほうがよい'],
      ['莫如Ｂ（莫若）', 'Ｂニしクハなシ', 'Ｂに及ぶものはない＝Ｂが最上'],
      ['最・尤', 'もっとモ', 'いちばん'],
      ['孰与（与其〜孰若）', 'いづレゾ', 'どちらが〜か（選択）'],
      ['与其Ａ寧Ｂ', 'そノＡセンヨリハむしロＢセヨ', 'ＡよりはむしろＢのほうがよい'],
    ] },
],

katei: [
  { at: 'ov', k: 'table', t: '仮定と逆接の字',
    cap: '仮定は「もし」、逆接は「〜だけれども」。字を見た瞬間に訳のかたちを決める。',
    head: ['字', '読み', '意味', '種類'],
    rows: [
      ['若・如', 'もシ', 'もし〜ならば', '仮定'],
      ['苟', 'いやしクモ', 'かりにも〜ならば', '仮定'],
      ['縦（仮令）', 'たとヒ', 'たとえ〜としても', '仮定の逆接'],
      ['雖', 'いへどモ', '〜だけれども', '逆接'],
      ['則', 'すなはチ', '〜ならばそのときは', '条件を受ける'],
      ['而', '―（置き字）', '順接にも逆接にもなる', 'つなぎ'],
    ] },
],

yokuyou: [
  { at: 'ov', k: 'table', t: '抑揚・限定・累加',
    cap: '軽いほうを先に言って重いほうを強めるのが抑揚。形を覚えておくと訳が速い。',
    head: ['種類', '形', '読み', '意味'],
    rows: [
      ['抑揚', '況〜乎', 'いはンヤ〜ヲヤ', 'まして〜はなおさらだ'],
      ['抑揚', 'Ａ且Ｂ況Ｃ乎', 'Ａスラかツ〜、いはンヤＣヲヤ', 'Ａでさえ〜、ましてＣは'],
      ['限定', '唯・惟・但・独', 'たダ〜ノミ', 'ただ〜だけだ'],
      ['限定', '〜耳・爾・而已', '〜ノミ', '〜だけだ'],
      ['累加', '不唯Ａ、又Ｂ', 'たダニＡノミナラず、またＢ', 'ＡだけでなくＢも'],
      ['強調', '豈不〜乎', 'あニ〜ずや', 'なんと〜ではないか'],
    ] },
],

goi: [
  { at: 'ov', k: 'svg', t: '漢文の語順',
    cap: '基本は主語・述語・目的語の順。日本語とは目的語の位置が逆なので、返り点が必要になる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="漢文の語順の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="26" font-size="12.5" fill="var(--primary)">漢文　主語 → 述語 → 目的語</text>'
      + '<rect x="70" y="40" width="150" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="145" y="65">我（主語）</text>'
      + '<rect x="245" y="40" width="150" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="65">読（述語）</text>'
      + '<rect x="420" y="40" width="150" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="495" y="65">書（目的語）</text>'
      + '<text x="320" y="112" font-size="12.5" fill="var(--primary)">日本語　主語 → 目的語 → 述語</text>'
      + '<rect x="70" y="124" width="150" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="145" y="149">我は</text>'
      + '<rect x="245" y="124" width="150" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="149">書を</text>'
      + '<rect x="420" y="124" width="150" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="495" y="149">読む</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: 'おもな置き字',
    cap: '置き字は読まないが、意味の上では働いている。送り仮名にその働きが出る。',
    head: ['字', '働き', '送り仮名に出るかたち'],
    rows: [
      ['而', '順接・逆接をつなぐ', '〜テ／〜ドモ'],
      ['於・于・乎', '場所・時・対象・比較を示す', '〜ニ／〜ヨリ／〜ヨリモ'],
      ['焉', '文末で語調をととのえる', '―'],
      ['矣', '断定・完了の語調', '―'],
      ['兮', '詩で調子をととのえる', '―'],
    ] },
  { at: 'sec1', k: 'table', t: 'まちがえやすい多義の字',
    cap: '同じ字が品詞によって読みも意味も変わる。前後の語との関係で決める。',
    head: ['字', '読みと意味'],
    rows: [
      ['之', 'の（連体）／これ（代名詞）／ゆク（行く）'],
      ['以', 'もつテ（〜で・〜を使って）／おもヘラク（思うには）'],
      ['与', 'と（並列）／あたフ（与える）／くみス（味方する）／か（疑問）'],
      ['為', 'なス（する）／たり（である）／ため二（目的）／る・らル（受身）'],
      ['所', 'ところ（〜するもの）／為〜所〜 で受身'],
      ['相', 'あひ（互いに）／相手への動作を示す'],
    ] },
],

kanshi: [
  { at: 'ov', k: 'table', t: '漢詩の形式',
    cap: '句の数と一句の字数で名前が決まる。まず何句あるかを数える。',
    head: ['形式', '句の数', '一句の字数', '押韻する句'],
    rows: [
      ['五言絶句', '4句', '5字', '第2句・第4句'],
      ['七言絶句', '4句', '7字', '第1句・第2句・第4句'],
      ['五言律詩', '8句', '5字', '第2・4・6・8句'],
      ['七言律詩', '8句', '7字', '第1・2・4・6・8句'],
      ['古詩', '定めなし', '定めなし', 'ゆるやか'],
    ] },
  { at: 'sec2', k: 'svg', t: '絶句の構成（起承転結）',
    cap: '第三句の「転」で場面や視点が変わる。設問はここを問うことが多い。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="絶句の起承転結の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="40" width="140" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="94" y="66" font-size="12.5">起（第1句）</text>'
      + '<text x="94" y="90" font-size="11" fill="var(--muted)">歌いおこす</text>'
      + '<rect x="176" y="40" width="140" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="246" y="66" font-size="12.5">承（第2句）</text>'
      + '<text x="246" y="90" font-size="11" fill="var(--muted)">受けて広げる</text>'
      + '<rect x="328" y="40" width="140" height="70" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="398" y="66" font-size="12.5" fill="var(--primary)">転（第3句）</text>'
      + '<text x="398" y="90" font-size="11" fill="var(--muted)">場面が変わる</text>'
      + '<rect x="480" y="40" width="140" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="550" y="66" font-size="12.5">結（第4句）</text>'
      + '<text x="550" y="90" font-size="11" fill="var(--muted)">思いを結ぶ</text>'
      + '<text x="320" y="142" font-size="11.5" fill="var(--muted)">律詩は 首聯・頷聯・頸聯・尾聯 の四つに分け、中の二聯を対句にする</text>'
      + '</g></svg>' },
],

'kanshi-shuji': [
  { at: 'ov', k: 'table', t: '漢詩によくある主題',
    cap: '主題の型を知っていると、情景描写が何を示しているかが見当づけやすい。',
    head: ['主題', '出てくる情景', '心情'],
    rows: [
      ['別離', '柳・酒・渡し場・見送り', '名残りおしさ'],
      ['望郷', '月・雁・霜・ふるさとの山', '故郷を思う'],
      ['懐古', '古い城跡・草の茂る宮殿', '世のうつろい'],
      ['隠逸', '山・田園・酒・菊', '俗世をはなれる'],
      ['送別の旅', '関所・長い道・砂漠', '別れと不安'],
      ['時の流れ', '春の花・散る花・白髪', '老いと無常'],
    ] },
  { at: 'sec2', k: 'table', t: '対句の見分け方',
    cap: '同じ位置の語が、品詞も意味の分野もそろっていれば対句。律詩では中の二聯が原則対句。',
    head: ['そろうもの', '例'],
    rows: [
      ['品詞', '名詞と名詞、動詞と動詞'],
      ['意味の分野', '山と川、天と地、花と鳥'],
      ['構造', '上二字＋下三字のような切れ方が同じ'],
      ['数や色', '両岸と千山、白と青'],
    ] },
],

shisou: [
  { at: 'ov', k: 'table', t: '諸子百家',
    cap: '「人をどう治めるか」への答えのちがいとして並べると覚えやすい。',
    head: ['学派', '代表', '中心の考え', 'ことば'],
    rows: [
      ['儒家', '孔子・孟子・荀子', '仁と礼で民を治める', '仁・礼・徳治'],
      ['道家', '老子・荘子', '作為をやめ自然にしたがう', '無為自然'],
      ['法家', '韓非子・商鞅', '法と罰で国をまとめる', '法・術・勢'],
      ['墨家', '墨子', 'わけへだてのない愛と非戦', '兼愛・非攻'],
      ['兵家', '孫子', '戦わずに勝つ', '知彼知己'],
      ['名家', '公孫竜', '名と実のずれを論じる', '白馬非馬'],
    ] },
  { at: 'sec1', k: 'table', t: '論じ方の型',
    cap: '短い説話で始まり、最後に主張が来る形が多い。結論部の目印を見つける。',
    head: ['部分', '目印になる語', '役割'],
    rows: [
      ['たとえ', '昔者・有人・今夫', '具体的な話を出す'],
      ['展開', '然・而・故', '話を進める'],
      ['結論', '是故・由是観之・故曰', '主張を述べる'],
      ['反語での強調', '豈〜乎・寧〜乎', '言いたいことを念押しする'],
    ] },
],

shiden: [
  { at: 'ov', k: 'table', t: 'おもな故事成語',
    cap: '由来の話を知っていると意味を忘れない。出典とセットで覚える。',
    head: ['故事成語', '意味', '出典'],
    rows: [
      ['矛盾', 'つじつまが合わない', '韓非子'],
      ['蛇足', 'よけいな付け足し', '戦国策'],
      ['五十歩百歩', 'たいした差がない', '孟子'],
      ['漁夫の利', '争う二者のそばで第三者が得をする', '戦国策'],
      ['四面楚歌', '周りが敵ばかり', '史記'],
      ['臥薪嘗胆', '復讐のため苦労に耐える', '十八史略'],
      ['塞翁が馬', '幸不幸は予測できない', '淮南子'],
      ['推敲', '文章を練り直す', '唐詩紀事'],
    ] },
  { at: 'sec0', k: 'table', t: '史伝を読む手順',
    cap: '登場人物が多いので、だれが何をしたかを整理しながら読む。',
    head: ['手順', 'すること'],
    rows: [
      ['1', '人名と地名に印をつけ、数を数える'],
      ['2', 'だれの発言かを確かめる（曰・対曰の上を見る）'],
      ['3', '時の流れを示す語（既・乃・遂・後）を追う'],
      ['4', '最後の評（太史公曰など）で筆者の見方をつかむ'],
    ] },
],

sougou: [
  { at: 'ov', k: 'svg', t: '漢文を読む手順',
    cap: '句法の見きわめを先にすると、訳が大きくずれることがなくなる。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="漢文を読む手順の図">'
      + '<defs><marker id="ar-sg1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="40" y="20" width="250" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="165" y="45" text-anchor="middle" fill="var(--primary)">1　返り点をたどって書き下す</text>'
      + '<path d="M165,64 L165,80" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sg1)"/>'
      + '<rect x="40" y="84" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="165" y="109" text-anchor="middle">2　句法の目印をさがす</text>'
      + '<path d="M165,128 L165,144" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sg1)"/>'
      + '<rect x="40" y="148" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="165" y="173" text-anchor="middle">3　主語と述語を決める</text>'
      + '<rect x="350" y="20" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="475" y="45" text-anchor="middle">4　だれの発言かを確かめる</text>'
      + '<path d="M475,64 L475,80" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sg1)"/>'
      + '<rect x="350" y="84" width="250" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="475" y="109" text-anchor="middle">5　話の筋を一文でまとめる</text>'
      + '<path d="M475,128 L475,144" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sg1)"/>'
      + '<rect x="350" y="148" width="250" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="475" y="173" text-anchor="middle" fill="var(--primary)">6　設問の該当箇所に戻る</text>'
      + '<text x="320" y="214" text-anchor="middle" font-size="11.5" fill="var(--muted)">句法を飛ばして意味だけで読むと、否定・反語で逆の意味に取ってしまう</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '設問の型と見るところ',
    cap: '問われ方は決まっている。型を知って、本文のどこを見るかを決める。',
    head: ['設問の型', '見るところ'],
    rows: [
      ['書き下し文を選ぶ', '返り点と送り仮名、助動詞のひらがな化'],
      ['訳を選ぶ', '句法（否定・反語・使役・受身）の処理'],
      ['傍線部の理由', '直前の出来事と、直後の「故・是以」'],
      ['主旨', '結論部の「故曰」や、最後の評'],
      ['漢詩の空所', '押韻する位置の字の韻と、対句のそろい'],
    ] },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
