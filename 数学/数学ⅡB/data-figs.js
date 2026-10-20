/* 数学ⅡB ― 単元の説明に添える図・表 */
const FIGS = {

shikisyoumei: [
  { at: 'ov', k: 'svg', t: 'パスカルの三角形と二項定理',
    cap: '各行の数が二項係数 nCr。両どなりの和で次の行ができる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="パスカルの三角形">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<text x="200" y="36">1</text>'
      + '<text x="176" y="62">1</text><text x="224" y="62">1</text>'
      + '<text x="152" y="88">1</text><text x="200" y="88">2</text><text x="248" y="88">1</text>'
      + '<text x="128" y="114">1</text><text x="176" y="114">3</text><text x="224" y="114">3</text><text x="272" y="114">1</text>'
      + '<text x="104" y="140">1</text><text x="152" y="140">4</text><text x="200" y="140" fill="var(--primary)">6</text>'
      + '<text x="248" y="140">4</text><text x="296" y="140">1</text>'
      + '<line x1="188" y1="120" x2="196" y2="132" stroke="var(--primary)"/>'
      + '<line x1="212" y1="120" x2="204" y2="132" stroke="var(--primary)"/>'
      + '<text x="470" y="56" font-size="12">(a＋b)ⁿ ＝ Σ nCr aⁿ⁻ʳ bʳ</text>'
      + '<text x="470" y="88" font-size="11.5" fill="var(--muted)">第 r＋1 項の係数が nCr</text>'
      + '<text x="470" y="112" font-size="11.5" fill="var(--muted)">(a＋b)⁴ ＝ a⁴＋4a³b＋6a²b²＋4ab³＋b⁴</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">nC0＋nC1＋…＋nCn ＝ 2ⁿ（各行の和）</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '不等式の証明の型',
    cap: '差をとる、平方で考える、相加相乗。この三つでたいてい解ける。',
    head: ['方法', 'やり方', '使いどころ'],
    rows: [
      ['差をとる', 'A－B ≧ 0 を示す', '基本。平方完成に持ちこむ'],
      ['平方の利用', '(実数)² ≧ 0', '等号は中身が0のとき'],
      ['相加相乗平均', 'a＋b ≧ 2√(ab)（a,b＞0）', '積が一定のときの最小値'],
      ['コーシー・シュワルツ', '(a²＋b²)(x²＋y²) ≧ (ax＋by)²', '内積の形が見えるとき'],
    ] },
],

fukusosuu: [
  { at: 'ov', k: 'table', t: '複素数の計算',
    cap: 'i² ＝ －1 だけを覚えて、あとは文字式と同じように扱う。',
    head: ['操作', '結果'],
    rows: [
      ['i²', '－1'],
      ['(a＋bi)＋(c＋di)', '(a＋c)＋(b＋d)i'],
      ['(a＋bi)(c＋di)', '(ac－bd)＋(ad＋bc)i'],
      ['共役 a＋bi の相手', 'a－bi'],
      ['(a＋bi)(a－bi)', 'a²＋b²（実数になる）'],
      ['実数係数の方程式', '虚数解は共役な組で現れる'],
    ] },
  { at: 'sec3', k: 'svg', t: '高次方程式の解き方',
    cap: '因数定理で1つ解を見つけ、次数を下げていく。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="高次方程式の手順の図">'
      + '<defs><marker id="ar-m1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="40" width="180" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="104" y="64">① 候補を試す</text>'
      + '<text x="104" y="84" font-size="11" fill="var(--muted)">±(定数項の約数)/(最高次の約数)</text>'
      + '<rect x="226" y="40" width="180" height="60" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="316" y="64" fill="var(--primary)">② 因数定理</text>'
      + '<text x="316" y="84" font-size="11" fill="var(--muted)">P(α)＝0 なら (x－α) で割れる</text>'
      + '<rect x="438" y="40" width="188" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="532" y="64">③ 組立除法</text>'
      + '<text x="532" y="84" font-size="11" fill="var(--muted)">次数を下げて二次方程式へ</text>'
      + '<line x1="198" y1="70" x2="222" y2="70" stroke="var(--muted)" marker-end="url(#ar-m1)"/>'
      + '<line x1="410" y1="70" x2="434" y2="70" stroke="var(--muted)" marker-end="url(#ar-m1)"/>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">三次方程式の解と係数　α＋β＋γ＝－b/a、αβ＋βγ＋γα＝c/a、αβγ＝－d/a</text>'
      + '</g></svg>' },
],

zukeihouteishiki: [
  { at: 'ov', k: 'table', t: '点・直線・円の公式',
    cap: '距離と方程式の形をまとめて押さえる。',
    head: ['項目', '式'],
    rows: [
      ['2点間の距離', '√((x₂－x₁)²＋(y₂－y₁)²)'],
      ['内分点', '((nx₁＋mx₂)/(m＋n), (ny₁＋my₂)/(m＋n))'],
      ['点と直線の距離', '|ax₀＋by₀＋c| / √(a²＋b²)'],
      ['円', '(x－a)²＋(y－b)² ＝ r²'],
      ['2直線が垂直', 'm₁m₂ ＝ －1'],
      ['円の接線（円上の点）', 'x₁x＋y₁y ＝ r²'],
    ] },
  { at: 'sec3', k: 'svg', t: '不等式が表す領域',
    cap: '境界線を引いてから、どちら側かを原点などで確かめる。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="領域の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="60" y1="150" x2="320" y2="150" stroke="var(--border)"/>'
      + '<line x1="160" y1="26" x2="160" y2="170" stroke="var(--border)"/>'
      + '<polygon points="60,110 320,42 320,26 60,26" fill="var(--primary-soft)" opacity="0.7"/>'
      + '<line x1="60" y1="110" x2="320" y2="42" stroke="var(--primary)" stroke-width="2"/>'
      + '<text x="240" y="58" font-size="11.5" fill="var(--primary)">y ＞ ax＋b</text>'
      + '<text x="200" y="130" font-size="11" fill="var(--muted)">原点を代入して確かめる</text>'
      + '<text x="370" y="56" font-size="12">① 境界の線を引く</text>'
      + '<text x="370" y="84" font-size="12">② 不等号が ＜ ＞ なら点線、≦ ≧ なら実線</text>'
      + '<text x="370" y="112" font-size="12">③ 適当な点を代入して成り立つ側を塗る</text>'
      + '<text x="370" y="146" font-size="11.5" fill="var(--muted)">連立なら、すべてを満たす重なりの部分</text>'
      + '</g></svg>' },
],

sankakukansuu: [
  { at: 'ov', k: 'svg', t: 'sin と cos のグラフ',
    cap: '周期2π、振幅1。cos は sin を左へ π/2 ずらした形になっている。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三角関数のグラフ">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="40" y1="96" x2="610" y2="96" stroke="var(--border)"/>'
      + '<line x1="60" y1="26" x2="60" y2="166" stroke="var(--border)"/>'
      + '<path d="M60,96 Q130,20 200,96 Q270,172 340,96 Q410,20 480,96 Q550,172 600,120" '
      + 'fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M60,30 Q130,96 200,162 Q270,96 340,30 Q410,96 480,162 Q530,120 600,70" '
      + 'fill="none" stroke="var(--accent)" stroke-width="2" stroke-dasharray="6 4"/>'
      + '<text x="150" y="42" fill="var(--primary)">y ＝ sin x</text>'
      + '<text x="380" y="52" fill="var(--accent)">y ＝ cos x</text>'
      + '<text x="200" y="112" font-size="11" fill="var(--muted)">π</text>'
      + '<text x="340" y="112" font-size="11" fill="var(--muted)">2π</text>'
      + '<text x="320" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">tan x は周期π。x＝π/2＋nπ で定義されない</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '加法定理とそこから出る公式',
    cap: '加法定理さえ覚えれば、2倍角も半角も合成も導ける。',
    head: ['公式', '内容'],
    rows: [
      ['加法定理', 'sin(α±β) ＝ sinαcosβ ± cosαsinβ'],
      ['', 'cos(α±β) ＝ cosαcosβ ∓ sinαsinβ'],
      ['2倍角', 'sin2α ＝ 2sinαcosα、cos2α ＝ 1－2sin²α'],
      ['半角', 'sin²(α/2) ＝ (1－cosα)/2'],
      ['合成', 'a sinθ＋b cosθ ＝ √(a²＋b²) sin(θ＋α)'],
    ] },
],

shisuutaisuu: [
  { at: 'ov', k: 'svg', t: '指数関数と対数関数',
    cap: '互いに逆関数で、y＝x について対称。底が1より大きいか小さいかで増減が変わる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="指数関数と対数関数のグラフ">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="60" y1="150" x2="340" y2="150" stroke="var(--border)"/>'
      + '<line x1="140" y1="26" x2="140" y2="170" stroke="var(--border)"/>'
      + '<line x1="60" y1="150" x2="300" y2="30" stroke="var(--muted)" stroke-dasharray="4 4"/>'
      + '<path d="M80,148 Q140,140 180,100 Q215,56 240,26" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M146,142 Q190,110 236,78 Q290,56 330,48" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<text x="248" y="40" fill="var(--primary)">y ＝ aˣ</text>'
      + '<text x="300" y="70" fill="var(--accent)">y ＝ logₐx</text>'
      + '<text x="280" y="140" font-size="11" fill="var(--muted)">y ＝ x</text>'
      + '<text x="390" y="54" font-size="12">logₐMN ＝ logₐM ＋ logₐN</text>'
      + '<text x="390" y="82" font-size="12">logₐ(M/N) ＝ logₐM － logₐN</text>'
      + '<text x="390" y="110" font-size="12">logₐMᵏ ＝ k logₐM</text>'
      + '<text x="390" y="138" font-size="12">底の変換 logₐb ＝ logcb / logca</text>'
      + '<text x="320" y="184" text-anchor="middle" font-size="11.5" fill="var(--muted)">真数は正、底は正で1でない。これを確かめてから解く</text>'
      + '</g></svg>' },
],

bibun: [
  { at: 'ov', k: 'svg', t: '微分係数は接線の傾き',
    cap: '平均変化率の極限が微分係数。グラフの各点での傾きを表す。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="微分係数の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="50" y1="160" x2="360" y2="160" stroke="var(--border)"/>'
      + '<line x1="70" y1="26" x2="70" y2="176" stroke="var(--border)"/>'
      + '<path d="M80,150 Q180,140 250,70 Q290,34 340,26" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<circle cx="200" cy="112" r="5" fill="var(--primary)"/>'
      + '<line x1="130" y1="152" x2="290" y2="60" stroke="var(--accent)" stroke-width="2"/>'
      + '<text x="296" y="56" fill="var(--accent)">接線</text>'
      + '<text x="206" y="130" font-size="11">(a, f(a))</text>'
      + '<text x="400" y="56" font-size="12">f′(a) ＝ lim (f(a＋h)－f(a)) / h</text>'
      + '<text x="400" y="86" font-size="11.5" fill="var(--muted)">h → 0 の極限</text>'
      + '<text x="400" y="118" font-size="12">接線 y ＝ f′(a)(x－a)＋f(a)</text>'
      + '<text x="400" y="148" font-size="11.5" fill="var(--muted)">(xⁿ)′ ＝ nxⁿ⁻¹</text>'
      + '<text x="320" y="188" text-anchor="middle" font-size="11.5" fill="var(--muted)">f′(x)＞0 なら増加、f′(x)＜0 なら減少。符号の変わり目が極値</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '増減表の書き方',
    cap: '導関数の符号を並べて、増減と極値を一目で見えるようにする。',
    head: ['行', '書くこと'],
    rows: [
      ['1行目 x', 'f′(x)＝0 となる値を小さい順に並べる'],
      ['2行目 f′(x)', '各区間での符号（＋または－）'],
      ['3行目 f(x)', '増加は ↗、減少は ↘、極値はその値'],
      ['最後に', '定義域の端の値も確かめて、最大最小を決める'],
    ] },
],

sekibun: [
  { at: 'ov', k: 'svg', t: '定積分と面積',
    cap: 'x軸より下の部分は負になる。面積を求めるときは絶対値や上下の差で考える。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="定積分と面積の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="50" y1="130" x2="360" y2="130" stroke="var(--border)"/>'
      + '<line x1="70" y1="26" x2="70" y2="170" stroke="var(--border)"/>'
      + '<path d="M90,110 Q160,30 230,70 Q290,100 340,46" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M120,130 L120,86 Q160,30 230,70 L230,130 Z" fill="var(--primary-soft)" opacity="0.8"/>'
      + '<text x="175" y="112" text-anchor="middle" font-size="11.5" fill="var(--primary)">S</text>'
      + '<text x="120" y="146" text-anchor="middle" font-size="11">a</text>'
      + '<text x="230" y="146" text-anchor="middle" font-size="11">b</text>'
      + '<text x="400" y="56" font-size="12">S ＝ ∫ₐᵇ f(x) dx</text>'
      + '<text x="400" y="86" font-size="12">2曲線の間 ＝ ∫(上－下) dx</text>'
      + '<text x="400" y="118" font-size="11.5" fill="var(--muted)">(1/6)公式　∫(x－α)(x－β)dx</text>'
      + '<text x="400" y="138" font-size="11.5" fill="var(--muted)">　＝ －(β－α)³/6</text>'
      + '<text x="320" y="178" text-anchor="middle" font-size="11.5" fill="var(--muted)">微分積分の基本定理　d/dx ∫ₐˣ f(t)dt ＝ f(x)</text>'
      + '</g></svg>' },
],

suuretsu: [
  { at: 'ov', k: 'table', t: '等差数列と等比数列',
    cap: '一般項と和。どちらの数列かを見分けるのが最初の一歩。',
    head: ['', '等差数列', '等比数列'],
    rows: [
      ['となりとの関係', '差が一定（公差 d）', '比が一定（公比 r）'],
      ['一般項', 'aₙ ＝ a＋(n－1)d', 'aₙ ＝ arⁿ⁻¹'],
      ['和', 'Sₙ ＝ n(a＋aₙ)/2', 'Sₙ ＝ a(1－rⁿ)/(1－r)　（r≠1）'],
      ['特徴', '平均が真ん中の項', '対数をとると等差になる'],
    ] },
  { at: 'sec2', k: 'svg', t: 'シグマの公式',
    cap: '上から順に、1の和・1乗の和・2乗の和・3乗の和。3乗の和は1乗の和の2乗になる。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="シグマの公式">'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<text x="60" y="44">Σ 1 ＝ n</text>'
      + '<text x="60" y="76">Σ k ＝ n(n＋1)/2</text>'
      + '<text x="60" y="108">Σ k² ＝ n(n＋1)(2n＋1)/6</text>'
      + '<text x="60" y="140">Σ k³ ＝ { n(n＋1)/2 }²</text>'
      + '<rect x="380" y="30" width="236" height="118" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="400" y="56" font-size="11.5" fill="var(--muted)">階差数列を使うとき</text>'
      + '<text x="400" y="82" font-size="11.5">aₙ ＝ a₁ ＋ Σ(k＝1〜n－1) bₖ</text>'
      + '<text x="400" y="110" font-size="11.5" fill="var(--muted)">※n ≧ 2 のときの式なので、</text>'
      + '<text x="400" y="130" font-size="11.5" fill="var(--muted)">　n＝1 を必ず確かめる</text>'
      + '</g></svg>' },
],

zenkashiki: [
  { at: 'ov', k: 'table', t: '漸化式の型と解き方',
    cap: '形を見分けて、決まった手順に乗せる。',
    head: ['型', '形', '手'],
    rows: [
      ['等差型', 'aₙ₊₁ ＝ aₙ ＋ d', 'そのまま等差数列'],
      ['等比型', 'aₙ₊₁ ＝ r aₙ', 'そのまま等比数列'],
      ['階差型', 'aₙ₊₁ ＝ aₙ ＋ f(n)', '階差数列の和をとる'],
      ['特性方程式型', 'aₙ₊₁ ＝ p aₙ ＋ q', 'α＝pα＋q を解き、aₙ－α を等比に'],
      ['分数型', 'aₙ₊₁ ＝ (paₙ＋q)/(raₙ＋s)', '逆数をとるなどで置きかえる'],
    ] },
  { at: 'sec1', k: 'svg', t: '数学的帰納法',
    cap: 'ドミノ倒しと同じ。最初が倒れることと、次々に倒れることを示す。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="数学的帰納法の図">'
      + '<defs><marker id="ar-m2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="40" width="230" height="70" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="155" y="64" fill="var(--primary)">① n＝1 のとき成り立つ</text>'
      + '<text x="155" y="90" font-size="11" fill="var(--muted)">最初のドミノが倒れる</text>'
      + '<rect x="370" y="40" width="230" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="485" y="64">② n＝k で成り立つと仮定すると</text>'
      + '<text x="485" y="90" font-size="11" fill="var(--muted)">n＝k＋1 でも成り立つ</text>'
      + '<line x1="276" y1="75" x2="364" y2="75" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-m2)"/>'
      + '<text x="320" y="148" font-size="11.5" fill="var(--muted)">①と②が言えれば、すべての自然数について成り立つ</text>'
      + '</g></svg>' },
],

vector: [
  { at: 'ov', k: 'svg', t: 'ベクトルの和と内積',
    cap: '和は平行四辺形、内積は「長さ×長さ×cos」。成分なら対応どうしを掛けて足す。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ベクトルの図">'
      + '<defs><marker id="ar-vc" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="70" y1="150" x2="190" y2="110" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-vc)"/>'
      + '<line x1="70" y1="150" x2="120" y2="50" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-vc)"/>'
      + '<line x1="190" y1="110" x2="240" y2="40" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<line x1="120" y1="50" x2="240" y2="40" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<line x1="70" y1="150" x2="238" y2="42" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar-vc)"/>'
      + '<text x="140" y="140" fill="var(--primary)">a</text>'
      + '<text x="82" y="92" fill="var(--primary)">b</text>'
      + '<text x="188" y="78" fill="var(--accent)">a＋b</text>'
      + '<text x="330" y="54" font-size="12">a·b ＝ |a||b| cosθ</text>'
      + '<text x="330" y="84" font-size="12">成分なら a₁b₁ ＋ a₂b₂</text>'
      + '<text x="330" y="114" font-size="11.5" fill="var(--muted)">垂直 ⇔ a·b ＝ 0</text>'
      + '<text x="330" y="138" font-size="11.5" fill="var(--muted)">平行 ⇔ a ＝ k b</text>'
      + '<text x="320" y="174" text-anchor="middle" font-size="11.5" fill="var(--muted)">内分点の位置ベクトル　(nOA＋mOB)/(m＋n)</text>'
      + '</g></svg>' },
],

'vector-zukei': [
  { at: 'ov', k: 'table', t: 'ベクトルで図形を解く型',
    cap: '条件を式にする型を覚えておくと、交点や共線の問題が機械的に処理できる。',
    head: ['条件', 'ベクトルでの表し方'],
    rows: [
      ['直線AB上の点P', 'OP ＝ (1－t)OA ＋ tOB'],
      ['3点が一直線上', 'AB ＝ k AC となる k がある'],
      ['線分の内分点', '(nOA＋mOB)/(m＋n)'],
      ['三角形の重心', '(OA＋OB＋OC)/3'],
      ['平面ABC上の点', 'OP ＝ sOA＋tOB＋uOC（s＋t＋u＝1）'],
      ['垂直', '内積が0'],
    ] },
],

toukei: [
  { at: 'ov', k: 'svg', t: '正規分布',
    cap: '平均を中心に左右対称。標準偏差の何倍の範囲に、どれだけ入るかを覚えておく。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正規分布の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="50" y1="150" x2="600" y2="150" stroke="var(--border)"/>'
      + '<path d="M70,148 Q180,146 240,90 Q290,26 325,26 Q360,26 410,90 Q470,146 580,148" '
      + 'fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<line x1="325" y1="26" x2="325" y2="150" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<text x="325" y="168" text-anchor="middle" font-size="11">μ</text>'
      + '<text x="240" y="168" text-anchor="middle" font-size="11">μ－σ</text>'
      + '<text x="410" y="168" text-anchor="middle" font-size="11">μ＋σ</text>'
      + '<text x="325" y="104" text-anchor="middle" font-size="11.5" fill="var(--primary)">約68％</text>'
      + '<text x="500" y="60" font-size="11.5">±1σ　約68％</text>'
      + '<text x="500" y="82" font-size="11.5">±2σ　約95％</text>'
      + '<text x="500" y="104" font-size="11.5">±3σ　約99.7％</text>'
      + '<text x="320" y="188" text-anchor="middle" font-size="11.5" fill="var(--muted)">標準化 Z ＝ (X－μ)/σ で、標準正規分布に直してから表を引く</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '確率変数の性質',
    cap: '期待値は線形、分散は2乗がかかる。ここを取り違えやすい。',
    head: ['量', '式'],
    rows: [
      ['期待値', 'E(aX＋b) ＝ aE(X)＋b'],
      ['分散', 'V(aX＋b) ＝ a²V(X)'],
      ['分散の計算', 'V(X) ＝ E(X²) － {E(X)}²'],
      ['二項分布 B(n,p)', 'E ＝ np、V ＝ np(1－p)'],
      ['独立なとき', 'E(XY) ＝ E(X)E(Y)、V(X＋Y) ＝ V(X)＋V(Y)'],
    ] },
],

kousikihouteishiki: [
  { at: 'ov', k: 'table', t: '対称式と基本対称式',
    cap: 'どんな対称式も、和と積だけで表せる。これが計算を楽にする。',
    head: ['式', '和と積での表し方'],
    rows: [
      ['α²＋β²', '(α＋β)² － 2αβ'],
      ['α³＋β³', '(α＋β)³ － 3αβ(α＋β)'],
      ['1/α＋1/β', '(α＋β)/αβ'],
      ['α²β＋αβ²', 'αβ(α＋β)'],
      ['(α－β)²', '(α＋β)² － 4αβ'],
    ] },
],

'kiseki-ryouiki': [
  { at: 'ov', k: 'svg', t: '線形計画法',
    cap: '条件が表す領域をかき、目的の式を直線として平行移動させて、最大・最小の点を探す。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="線形計画法の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="60" y1="160" x2="360" y2="160" stroke="var(--border)"/>'
      + '<line x1="80" y1="26" x2="80" y2="176" stroke="var(--border)"/>'
      + '<polygon points="80,160 80,70 170,50 260,110 260,160" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<circle cx="170" cy="50" r="5" fill="var(--primary)"/>'
      + '<text x="180" y="44" fill="var(--primary)">最大になる頂点</text>'
      + '<line x1="100" y1="170" x2="290" y2="60" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>'
      + '<line x1="60" y1="150" x2="250" y2="40" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3" opacity="0.5"/>'
      + '<text x="300" y="66" fill="var(--accent)">k ＝ ax＋by</text>'
      + '<text x="400" y="60" font-size="12">① 制約条件の領域をかく</text>'
      + '<text x="400" y="90" font-size="12">② 目的の式を直線とみる</text>'
      + '<text x="400" y="120" font-size="12">③ 平行に動かして端を探す</text>'
      + '<text x="400" y="150" font-size="11.5" fill="var(--muted)">最大・最小は必ず頂点か辺で起きる</text>'
      + '</g></svg>' },
],

ouyou: [
  { at: 'ov', k: 'svg', t: '方程式の解の個数をグラフで見る',
    cap: 'f(x)＝a の解の個数は、y＝f(x) と水平線 y＝a の交点の数になる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="解の個数をグラフで見る図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="50" y1="150" x2="400" y2="150" stroke="var(--border)"/>'
      + '<line x1="70" y1="26" x2="70" y2="172" stroke="var(--border)"/>'
      + '<path d="M80,60 Q140,180 210,90 Q270,20 340,140" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<line x1="60" y1="74" x2="390" y2="74" stroke="var(--accent)" stroke-width="2" stroke-dasharray="5 3"/>'
      + '<text x="396" y="78" fill="var(--accent)">y ＝ a</text>'
      + '<circle cx="104" cy="74" r="4" fill="var(--accent)"/>'
      + '<circle cx="232" cy="74" r="4" fill="var(--accent)"/>'
      + '<circle cx="296" cy="74" r="4" fill="var(--accent)"/>'
      + '<text x="440" y="58" font-size="12">① 増減表をかいて極値を求める</text>'
      + '<text x="440" y="88" font-size="12">② y＝a を上下に動かす</text>'
      + '<text x="440" y="118" font-size="12">③ 交点の数が解の個数</text>'
      + '<text x="440" y="150" font-size="11.5" fill="var(--muted)">極大値と極小値が境目になる</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
