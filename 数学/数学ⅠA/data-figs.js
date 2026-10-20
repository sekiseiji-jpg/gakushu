/* 数学ⅠA ― 単元の説明に添える図・表 */
const FIGS = {

suushiki: [
  { at: 'ov', k: 'svg', t: '数の分類',
    cap: '自然数から実数まで、どこまで含むかを入れ子で押さえる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="実数の分類の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="20" width="600" height="146" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="70" y="40" font-size="11.5">実数</text>'
      + '<rect x="40" y="48" width="360" height="104" rx="9" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="90" y="68" font-size="11.5">有理数</text>'
      + '<rect x="58" y="76" width="320" height="62" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="110" y="96" font-size="11.5" fill="var(--primary)">整数</text>'
      + '<rect x="76" y="104" width="160" height="26" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="156" y="122" font-size="11.5">自然数 1, 2, 3, …</text>'
      + '<text x="306" y="122" font-size="11" fill="var(--muted)">0、負の整数</text>'
      + '<text x="300" y="68" font-size="11" fill="var(--muted)">分数・有限小数・循環小数</text>'
      + '<rect x="420" y="48" width="180" height="104" rx="9" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="510" y="92" font-size="11.5">無理数</text>'
      + '<text x="510" y="114" font-size="11" fill="var(--muted)">√2、π、循環しない無限小数</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '展開・因数分解の公式',
    cap: '左から右が展開、右から左が因数分解。同じ式を両方向から見る。',
    head: ['展開', '因数分解'],
    rows: [
      ['(a＋b)² ＝ a²＋2ab＋b²', 'a²＋2ab＋b² ＝ (a＋b)²'],
      ['(a＋b)(a－b) ＝ a²－b²', 'a²－b² ＝ (a＋b)(a－b)'],
      ['(x＋a)(x＋b) ＝ x²＋(a＋b)x＋ab', 'x²＋(a＋b)x＋ab ＝ (x＋a)(x＋b)'],
      ['(a＋b)³ ＝ a³＋3a²b＋3ab²＋b³', 'a³＋b³ ＝ (a＋b)(a²－ab＋b²)'],
      ['(a＋b＋c)² ＝ a²＋b²＋c²＋2ab＋2bc＋2ca', 'a³－b³ ＝ (a－b)(a²＋ab＋b²)'],
    ] },
],

ichiji: [
  { at: 'ov', k: 'svg', t: '不等式を数直線で表す',
    cap: '端点を含むか含まないかを、黒丸と白丸で区別する。連立は重なった部分。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="不等式の数直線">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="60" y1="46" x2="600" y2="46" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="200" y1="46" x2="600" y2="46" stroke="var(--primary)" stroke-width="4"/>'
      + '<circle cx="200" cy="46" r="6" fill="var(--surface)" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="200" y="32" text-anchor="middle" font-size="11">2</text>'
      + '<text x="620" y="50" font-size="11" fill="var(--muted)">x</text>'
      + '<text x="60" y="70" font-size="11.5" fill="var(--primary)">x ＞ 2（白丸＝含まない）</text>'
      + '<line x1="60" y1="108" x2="600" y2="108" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="60" y1="108" x2="420" y2="108" stroke="var(--accent)" stroke-width="4"/>'
      + '<circle cx="420" cy="108" r="6" fill="var(--accent)"/>'
      + '<text x="420" y="94" text-anchor="middle" font-size="11">5</text>'
      + '<text x="60" y="132" font-size="11.5" fill="var(--accent)">x ≦ 5（黒丸＝含む）</text>'
      + '<text x="60" y="162" font-size="11.5" fill="var(--muted)">連立すると 2 ＜ x ≦ 5。両方を満たす重なりの部分になる</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '不等式を変形するときの注意',
    cap: '負の数をかけたり割ったりするときだけ、不等号の向きが変わる。',
    head: ['操作', '不等号', '例'],
    rows: [
      ['両辺に同じ数を足す・引く', '変わらない', 'x＋3 ＜ 5 → x ＜ 2'],
      ['正の数をかける・割る', '変わらない', '2x ＜ 6 → x ＜ 3'],
      ['負の数をかける・割る', '向きが変わる', '－2x ＜ 6 → x ＞ －3'],
      ['絶対値 |x| ＜ a（a＞0）', '—', '－a ＜ x ＜ a'],
      ['絶対値 |x| ＞ a（a＞0）', '—', 'x ＜ －a または a ＜ x'],
    ] },
],

shuugou: [
  { at: 'ov', k: 'svg', t: '必要条件と十分条件',
    cap: '「p ならば q」が真のとき、pは十分条件、qは必要条件。集合の包含で考えると迷わない。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="必要条件と十分条件の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<ellipse cx="220" cy="92" rx="140" ry="62" fill="var(--surface)" stroke="var(--border)"/>'
      + '<ellipse cx="170" cy="92" rx="66" ry="40" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="170" y="96" fill="var(--primary)">P</text>'
      + '<text x="312" y="96">Q</text>'
      + '<text x="430" y="62" font-size="12">P ⊂ Q　のとき</text>'
      + '<text x="430" y="90" font-size="11.5" fill="var(--primary)">p は q の十分条件</text>'
      + '<text x="430" y="112" font-size="11.5">q は p の必要条件</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">小さいほうが十分、大きいほうが必要。両方なら必要十分条件（同値）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '命題の言いかえ',
    cap: 'もとの命題と対偶は真偽が一致する。逆と裏は一致しない。',
    head: ['名前', '形', 'もとの命題との関係'],
    rows: [
      ['もとの命題', 'p ⇒ q', '—'],
      ['逆', 'q ⇒ p', '真偽は一致しない'],
      ['裏', '¬p ⇒ ¬q', '真偽は一致しない'],
      ['対偶', '¬q ⇒ ¬p', '真偽がつねに一致する'],
      ['ド・モルガン', '¬(p かつ q) ＝ ¬p または ¬q', '否定のとき「かつ」と「または」が入れかわる'],
    ] },
],

nijikansuu: [
  { at: 'ov', k: 'svg', t: '平方完成と頂点',
    cap: 'y ＝ a(x－p)²＋q の形にすれば、頂点 (p, q) がそのまま読める。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="二次関数のグラフ">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="40" y1="170" x2="420" y2="170" stroke="var(--border)"/>'
      + '<line x1="200" y1="20" x2="200" y2="190" stroke="var(--border)"/>'
      + '<path d="M90,36 Q200,230 310,36" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<circle cx="200" cy="134" r="5" fill="var(--primary)"/>'
      + '<text x="212" y="130" font-size="11.5" fill="var(--primary)">頂点 (p, q)</text>'
      + '<line x1="200" y1="134" x2="200" y2="170" stroke="var(--muted)" stroke-dasharray="3 3"/>'
      + '<text x="426" y="60" font-size="12">y ＝ ax²＋bx＋c</text>'
      + '<text x="426" y="86" font-size="12">　＝ a(x－p)²＋q</text>'
      + '<text x="426" y="118" font-size="11.5" fill="var(--muted)">p ＝ －b/2a</text>'
      + '<text x="426" y="140" font-size="11.5" fill="var(--muted)">q ＝ －(b²－4ac)/4a</text>'
      + '<text x="426" y="170" font-size="11.5" fill="var(--muted)">a ＞ 0 なら下に凸、a ＜ 0 なら上に凸</text>'
      + '<text x="320" y="206" text-anchor="middle" font-size="11.5" fill="var(--muted)">定義域に制限があるときは、頂点が範囲の内か外かで場合分けする</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: 'グラフの移動',
    cap: '平行移動は符号に注意。xは逆向きに入ることを覚えておく。',
    head: ['移動', '式の変化'],
    rows: [
      ['x軸方向に p', 'x を x－p に置きかえる'],
      ['y軸方向に q', 'y を y－q に置きかえる'],
      ['x軸について対称', 'y を －y に'],
      ['y軸について対称', 'x を －x に'],
      ['原点について対称', 'x, y をともに符号反転'],
    ] },
],

nijihouteishiki: [
  { at: 'ov', k: 'svg', t: '判別式とグラフの位置',
    cap: 'D の符号で、x軸との交わり方が決まる。二次不等式の解もここから読める。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="判別式とグラフの関係">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<line x1="30" y1="120" x2="610" y2="120" stroke="var(--border)"/>'
      + '<path d="M50,50 Q120,180 190,50" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="120" y="152">D ＞ 0</text><text x="120" y="170" fill="var(--muted)">異なる2つの実数解</text>'
      + '<path d="M250,50 Q320,190 390,50" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<circle cx="320" cy="120" r="4" fill="var(--accent)"/>'
      + '<text x="320" y="152">D ＝ 0</text><text x="320" y="170" fill="var(--muted)">重解（接する）</text>'
      + '<path d="M450,40 Q520,150 590,40" fill="none" stroke="var(--muted)" stroke-width="2.5"/>'
      + '<text x="520" y="152">D ＜ 0</text><text x="520" y="170" fill="var(--muted)">実数解なし</text>'
      + '<text x="320" y="26" font-size="12">D ＝ b² － 4ac</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '解と係数の関係',
    cap: '解を求めずに、和と積だけで処理できる問題が多い。',
    head: ['式', '内容'],
    rows: [
      ['α＋β', '－b/a'],
      ['αβ', 'c/a'],
      ['α²＋β²', '(α＋β)² － 2αβ'],
      ['(α－β)²', '(α＋β)² － 4αβ'],
      ['1/α＋1/β', '(α＋β)/αβ'],
    ] },
],

sankakuhi: [
  { at: 'ov', k: 'svg', t: '三角比の定義',
    cap: '直角三角形の辺の比。単位円に拡張すると、鈍角まで同じ定義で扱える。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角比の定義の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<polygon points="60,160 260,160 260,60" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"/>'
      + '<rect x="244" y="144" width="16" height="16" fill="none" stroke="var(--primary)"/>'
      + '<text x="160" y="178" text-anchor="middle" font-size="11.5">隣辺</text>'
      + '<text x="276" y="114" font-size="11.5">対辺</text>'
      + '<text x="140" y="104" font-size="11.5">斜辺</text>'
      + '<path d="M96,160 A36,36 0 0,0 88,140" fill="none" stroke="var(--muted)"/>'
      + '<text x="82" y="152" font-size="11.5">θ</text>'
      + '<text x="330" y="66" font-size="12.5">sinθ ＝ 対辺 / 斜辺</text>'
      + '<text x="330" y="96" font-size="12.5">cosθ ＝ 隣辺 / 斜辺</text>'
      + '<text x="330" y="126" font-size="12.5">tanθ ＝ 対辺 / 隣辺</text>'
      + '<text x="330" y="162" font-size="11.5" fill="var(--muted)">sin²θ＋cos²θ ＝ 1</text>'
      + '<text x="330" y="182" font-size="11.5" fill="var(--muted)">tanθ ＝ sinθ / cosθ</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '覚えておく三角比の値',
    cap: '30・45・60度の値は、二つの三角定規から導ける。',
    head: ['θ', '0°', '30°', '45°', '60°', '90°'],
    rows: [
      ['sinθ', '0', '1/2', '√2/2', '√3/2', '1'],
      ['cosθ', '1', '√3/2', '√2/2', '1/2', '0'],
      ['tanθ', '0', '√3/3', '1', '√3', 'なし'],
    ] },
],

seigen: [
  { at: 'ov', k: 'table', t: '正弦定理と余弦定理の使い分け',
    cap: '与えられた要素の組み合わせで、どちらを使うかが決まる。',
    head: ['分かっているもの', '使う定理', '求まるもの'],
    rows: [
      ['1辺と2角', '正弦定理', '他の辺'],
      ['2辺とそのあいだの角', '余弦定理', '残りの辺'],
      ['3辺', '余弦定理', '角'],
      ['2辺とその一方の対角', '正弦定理', '角（2通りの場合あり）'],
      ['外接円の半径', '正弦定理 a/sinA ＝ 2R', '—'],
    ] },
  { at: 'sec0', k: 'svg', t: '二つの定理',
    cap: '余弦定理は三平方の定理を一般の三角形に広げたもの。C＝90°なら cosC＝0 で三平方になる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正弦定理と余弦定理の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<polygon points="60,150 230,150 160,50" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"/>'
      + '<text x="52" y="164" font-size="11.5">B</text>'
      + '<text x="234" y="164" font-size="11.5">C</text>'
      + '<text x="156" y="42" font-size="11.5">A</text>'
      + '<text x="146" y="168" font-size="11" fill="var(--muted)">a</text>'
      + '<text x="206" y="98" font-size="11" fill="var(--muted)">b</text>'
      + '<text x="98" y="98" font-size="11" fill="var(--muted)">c</text>'
      + '<rect x="290" y="38" width="330" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="455" y="60" text-anchor="middle" font-size="12.5">正弦定理</text>'
      + '<text x="455" y="82" text-anchor="middle" font-size="12">a/sinA ＝ b/sinB ＝ c/sinC ＝ 2R</text>'
      + '<rect x="290" y="104" width="330" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="455" y="126" text-anchor="middle" font-size="12.5" fill="var(--primary)">余弦定理</text>'
      + '<text x="455" y="148" text-anchor="middle" font-size="12">a² ＝ b²＋c²－2bc cosA</text>'
      + '<text x="60" y="180" font-size="11.5" fill="var(--muted)">面積 S ＝ ½bc sinA</text>'
      + '</g></svg>' },
],

keiryou: [
  { at: 'ov', k: 'table', t: '立体の体積と表面積',
    cap: '錐は柱の3分の1。球だけは別に覚える。',
    head: ['立体', '体積', '表面積'],
    rows: [
      ['角柱・円柱', '底面積 × 高さ', '側面積 ＋ 底面積×2'],
      ['角錐・円錐', '底面積 × 高さ ÷ 3', '側面積 ＋ 底面積'],
      ['球（半径r）', '4πr³/3', '4πr²'],
      ['円錐の側面', '—', 'πrℓ（ℓは母線）'],
    ] },
  { at: 'sec2', k: 'svg', t: '最短経路は展開して直線',
    cap: '立体の表面を通る最短経路は、展開図のうえでは線分になる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="展開図と最短経路の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<path d="M70,140 L190,140 L130,40 Z" fill="var(--surface)" stroke="var(--border)"/>'
      + '<ellipse cx="130" cy="140" rx="60" ry="16" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="130" y="166" text-anchor="middle">立体（円錐）</text>'
      + '<path d="M380,130 A110,110 0 0,1 480,36 L420,130 Z" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<line x1="384" y1="124" x2="474" y2="44" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<text x="420" y="166" text-anchor="middle">展開図では直線になる</text>'
      + '<text x="240" y="90" font-size="20" fill="var(--muted)">→</text>'
      + '<text x="60" y="30" font-size="11.5" fill="var(--muted)">表面に沿った最短の道を求めるときは、まず展開してみる</text>'
      + '</g></svg>' },
],

data: [
  { at: 'ov', k: 'svg', t: '箱ひげ図の読み方',
    cap: '五つの数（最小・第1四分位・中央・第3四分位・最大）で分布のかたちをつかむ。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="箱ひげ図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<line x1="110" y1="70" x2="530" y2="70" stroke="var(--muted)" stroke-width="1.5"/>'
      + '<line x1="110" y1="56" x2="110" y2="84" stroke="var(--muted)" stroke-width="2"/>'
      + '<line x1="530" y1="56" x2="530" y2="84" stroke="var(--muted)" stroke-width="2"/>'
      + '<rect x="210" y="46" width="230" height="48" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2"/>'
      + '<line x1="310" y1="46" x2="310" y2="94" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="110" y="112" font-size="11">最小値</text>'
      + '<text x="210" y="112" font-size="11">第1四分位数</text>'
      + '<text x="310" y="112" font-size="11" fill="var(--primary)">中央値</text>'
      + '<text x="440" y="112" font-size="11">第3四分位数</text>'
      + '<text x="530" y="112" font-size="11">最大値</text>'
      + '<text x="325" y="36" font-size="11" fill="var(--muted)">四分位範囲（データの中央50％）</text>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">外れ値の影響を受けにくいのが中央値と四分位範囲、受けやすいのが平均値と範囲</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '代表値と散らばり',
    cap: '何を知りたいかで使う指標を選ぶ。分散と標準偏差は単位が違う。',
    head: ['指標', '意味', '性質'],
    rows: [
      ['平均値', '合計 ÷ 個数', '外れ値に弱い'],
      ['中央値', '並べて真ん中', '外れ値に強い'],
      ['最頻値', '最も多い値', 'カテゴリにも使える'],
      ['分散', '偏差の2乗の平均', '単位がもとの2乗'],
      ['標準偏差', '分散の正の平方根', '単位がもとと同じ'],
      ['相関係数', '－1 ≦ r ≦ 1', '直線的な関係の強さ。因果ではない'],
    ] },
],

baai: [
  { at: 'ov', k: 'svg', t: '和の法則と積の法則',
    cap: '「どちらか」なら足す、「続けて」なら掛ける。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="和の法則と積の法則の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="108" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="54" font-size="12.5" fill="var(--primary)">和の法則</text>'
      + '<text x="159" y="78" font-size="11.5" fill="var(--muted)">同時には起こらない</text>'
      + '<text x="159" y="100" font-size="11.5" fill="var(--muted)">「AまたはB」</text>'
      + '<text x="159" y="124" font-size="11.5">m ＋ n 通り</text>'
      + '<rect x="346" y="30" width="270" height="108" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="54" font-size="12.5">積の法則</text>'
      + '<text x="481" y="78" font-size="11.5" fill="var(--muted)">続けて起こる</text>'
      + '<text x="481" y="100" font-size="11.5" fill="var(--muted)">「AしてからB」</text>'
      + '<text x="481" y="124" font-size="11.5">m × n 通り</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">重なりがあるときは、和集合の個数 n(A∪B) ＝ n(A)＋n(B)－n(A∩B)</text>'
      + '</g></svg>' },
],

junretsu: [
  { at: 'ov', k: 'table', t: '順列と組合せ',
    cap: '並べ方（順序が意味をもつ）か、選び方（順序を問わない）かで式が変わる。',
    head: ['種類', '式', '例'],
    rows: [
      ['順列 nPr', 'n! / (n－r)!', '5人から3人選んで並べる＝60'],
      ['組合せ nCr', 'n! / (r!(n－r)!)', '5人から3人選ぶ＝10'],
      ['円順列', '(n－1)!', '5人が円卓に座る＝24'],
      ['じゅず順列', '(n－1)! / 2', '裏返しを同じとみる'],
      ['重複順列', 'nʳ', '3種類から5回選ぶ＝243'],
      ['同じものを含む順列', 'n! / (p!q!…)', 'aabbcの並べ方＝30'],
    ] },
],

kakuritsu: [
  { at: 'ov', k: 'svg', t: '確率の考え方',
    cap: 'すべての場合が同じ確からしさで起きることが前提。分母の数え方を間違えないこと。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="確率の基本の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="160" y="26" width="320" height="44" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="54" fill="var(--primary)">P(A) ＝ 事象Aの場合の数 ÷ 全体の場合の数</text>'
      + '<text x="150" y="104" font-size="11.5">余事象　P(Ā) ＝ 1 － P(A)</text>'
      + '<text x="470" y="104" font-size="11.5">和事象　P(A∪B) ＝ P(A)＋P(B)－P(A∩B)</text>'
      + '<text x="150" y="132" font-size="11.5">独立試行　P ＝ P₁ × P₂</text>'
      + '<text x="470" y="132" font-size="11.5">反復試行　nCr pʳ(1－p)ⁿ⁻ʳ</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">「少なくとも1つ」は余事象を使うと速い</text>'
      + '</g></svg>' },
],

jouken: [
  { at: 'ov', k: 'svg', t: '条件付き確率',
    cap: 'Aが起きたと分かっている世界で、Bが起きる割合。分母がAに狭まる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="条件付き確率の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="30" width="300" height="110" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<ellipse cx="150" cy="86" rx="80" ry="44" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<ellipse cx="240" cy="86" rx="80" ry="44" fill="var(--accent)" fill-opacity="0.25" stroke="var(--accent)"/>'
      + '<text x="110" y="90" fill="var(--primary)">A</text>'
      + '<text x="282" y="90">B</text>'
      + '<text x="195" y="90" font-size="11">A∩B</text>'
      + '<text x="490" y="60" font-size="12.5">P(B|A) ＝ P(A∩B) / P(A)</text>'
      + '<text x="490" y="90" font-size="11.5" fill="var(--muted)">乗法定理 P(A∩B) ＝ P(A)·P(B|A)</text>'
      + '<text x="490" y="116" font-size="11.5" fill="var(--muted)">独立なら P(B|A) ＝ P(B)</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">期待値 ＝ Σ（値 × その確率）。何回も試したときの平均を表す</text>'
      + '</g></svg>' },
],

seisuu: [
  { at: 'ov', k: 'table', t: '整数の道具',
    cap: '約数・倍数から不定方程式まで、使う道具を整理しておく。',
    head: ['道具', '内容'],
    rows: [
      ['素因数分解', 'すべての自然数は素数の積に一通りに分解できる'],
      ['約数の個数', '素因数分解 p^a·q^b … なら (a＋1)(b＋1)…'],
      ['最大公約数と最小公倍数', 'G × L ＝ a × b'],
      ['ユークリッドの互除法', '割った余りで置きかえていく'],
      ['合同式', 'a ≡ b (mod m)。余りで分類する'],
      ['不定方程式', 'ax＋by＝c。互除法で特殊解を見つける'],
    ] },
  { at: 'sec1', k: 'svg', t: 'ユークリッドの互除法',
    cap: '大きい数を小さい数で割り、余りで置きかえていく。余りが0になったときの割る数が最大公約数。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ユークリッドの互除法の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<text x="60" y="44">1073 ＝ 1 × 806 ＋ 267</text>'
      + '<text x="60" y="72">806 ＝ 3 × 267 ＋ 5</text>'
      + '<text x="60" y="100">267 ＝ 53 × 5 ＋ 2</text>'
      + '<text x="60" y="128">5 ＝ 2 × 2 ＋ 1</text>'
      + '<text x="60" y="156" fill="var(--primary)">2 ＝ 2 × 1 ＋ 0　→　最大公約数は 1</text>'
      + '<rect x="370" y="36" width="246" height="76" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="390" y="60" font-size="11.5" fill="var(--muted)">割る数と余りを次の行へ送る</text>'
      + '<text x="390" y="84" font-size="11.5" fill="var(--muted)">余りが0になった行の割る数が</text>'
      + '<text x="390" y="102" font-size="11.5" fill="var(--muted)">最大公約数になる</text>'
      + '</g></svg>' },
],

zukei: [
  { at: 'ov', k: 'table', t: '三角形の五心',
    cap: 'どの線が交わる点かを覚えれば、性質も思い出せる。',
    head: ['心', '交わる線', '性質'],
    rows: [
      ['重心', '中線', '各中線を2:1に内分する'],
      ['外心', '辺の垂直二等分線', '3頂点から等距離。外接円の中心'],
      ['内心', '角の二等分線', '3辺から等距離。内接円の中心'],
      ['垂心', '頂点から対辺への垂線', '—'],
      ['傍心', '1つの内角と2つの外角の二等分線', '傍接円の中心。3つある'],
    ] },
  { at: 'sec1', k: 'svg', t: '円に関する定理',
    cap: '円周角・接弦角・方べき。どれも円のなかの長さや角を結びつける。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="円の定理の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<circle cx="130" cy="92" r="62" fill="none" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="80" y1="130" x2="180" y2="130" stroke="var(--primary)"/>'
      + '<line x1="80" y1="130" x2="130" y2="30" stroke="var(--primary)"/>'
      + '<line x1="180" y1="130" x2="130" y2="30" stroke="var(--primary)"/>'
      + '<text x="130" y="174">円周角の定理</text>'
      + '<text x="130" y="50" font-size="10.5" fill="var(--muted)">中心角の半分</text>'
      + '<circle cx="320" cy="92" r="62" fill="none" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="240" y1="146" x2="400" y2="146" stroke="var(--accent)"/>'
      + '<line x1="285" y1="146" x2="350" y2="46" stroke="var(--accent)"/>'
      + '<text x="320" y="174">接弦定理</text>'
      + '<circle cx="510" cy="92" r="62" fill="none" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="430" y1="70" x2="590" y2="110" stroke="var(--primary)"/>'
      + '<line x1="430" y1="130" x2="590" y2="60" stroke="var(--primary)"/>'
      + '<text x="510" y="174">方べきの定理</text>'
      + '<text x="510" y="186" font-size="10.5" fill="var(--muted)">PA·PB ＝ PC·PD</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
