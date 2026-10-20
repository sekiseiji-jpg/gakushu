/* 数学ⅢC ― 単元の説明に添える図・表 */
const FIGS = {

'bunsuu-muri': [
  { at: 'ov', k: 'svg', t: '分数関数と無理関数のグラフ',
    cap: '分数関数は漸近線が目印、無理関数は定義域の端から始まる半分の形になる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="分数関数と無理関数のグラフ">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="40" y1="100" x2="280" y2="100" stroke="var(--border)"/>'
      + '<line x1="160" y1="26" x2="160" y2="176" stroke="var(--border)"/>'
      + '<path d="M176,30 Q200,80 274,94" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M46,106 Q120,120 144,170" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="200" y="48" fill="var(--primary)">y ＝ k/x</text>'
      + '<text x="60" y="188" font-size="11" fill="var(--muted)">漸近線は x軸と y軸</text>'
      + '<line x1="340" y1="150" x2="600" y2="150" stroke="var(--border)"/>'
      + '<line x1="380" y1="26" x2="380" y2="176" stroke="var(--border)"/>'
      + '<path d="M380,150 Q450,100 590,56" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<text x="480" y="80" fill="var(--accent)">y ＝ √x</text>'
      + '<text x="380" y="188" font-size="11" fill="var(--muted)">定義域 x ≧ 0</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '逆関数と合成関数',
    cap: '逆関数はxとyを入れかえて解き直す。グラフは y＝x について対称になる。',
    head: ['項目', '内容'],
    rows: [
      ['逆関数の求め方', 'y＝f(x) を x について解き、x と y を入れかえる'],
      ['存在する条件', '1対1である（単調増加または単調減少）'],
      ['グラフ', 'y＝x について対称'],
      ['合成関数', '(g∘f)(x) ＝ g(f(x))。内側から順に'],
      ['定義域', '内側の値域が外側の定義域に収まること'],
    ] },
],

'suuretsu-kyokugen': [
  { at: 'ov', k: 'table', t: '無限等比数列・級数の収束',
    cap: '公比rの大きさで決まる。級数は |r|＜1 のときだけ収束する。',
    head: ['公比 r', '数列 rⁿ', '級数 Σarⁿ⁻¹'],
    rows: [
      ['r ＞ 1', '正の無限大に発散', '発散'],
      ['r ＝ 1', '1に収束', '発散（a≠0）'],
      ['－1 ＜ r ＜ 1', '0に収束', 'a/(1－r) に収束'],
      ['r ＝ －1', '振動', '発散'],
      ['r ＜ －1', '振動して発散', '発散'],
    ] },
  { at: 'sec0', k: 'svg', t: '収束と発散',
    cap: 'ある値に限りなく近づけば収束。そうでなければ発散または振動。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="数列の収束と発散の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="40" y1="140" x2="280" y2="140" stroke="var(--border)"/>'
      + '<line x1="40" y1="60" x2="280" y2="60" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<path d="M50,130 Q110,66 180,62 Q230,60 275,60" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="200" y="50" fill="var(--primary)">収束</text>'
      + '<text x="26" y="64" font-size="11" fill="var(--muted)">α</text>'
      + '<line x1="360" y1="140" x2="600" y2="140" stroke="var(--border)"/>'
      + '<path d="M370,136 Q440,120 500,80 Q550,44 595,26" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<text x="520" y="64" fill="var(--accent)">発散</text>'
      + '<text x="320" y="172" text-anchor="middle" font-size="11.5" fill="var(--muted)">∞－∞ や ∞/∞ の形は、そのままでは決まらない（不定形）</text>'
      + '</g></svg>' },
],

'kansuu-kyokugen': [
  { at: 'ov', k: 'svg', t: '連続とはどういうことか',
    cap: '左からの極限・右からの極限・その点の値、三つが一致すれば連続。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="関数の連続性の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="40" y1="140" x2="280" y2="140" stroke="var(--border)"/>'
      + '<path d="M50,120 Q110,60 160,80 Q220,100 270,46" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="150" y="166" text-anchor="middle">連続</text>'
      + '<line x1="360" y1="140" x2="600" y2="140" stroke="var(--border)"/>'
      + '<path d="M370,120 Q410,70 470,70" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<path d="M480,40 Q540,36 595,60" fill="none" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<circle cx="470" cy="70" r="5" fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>'
      + '<circle cx="480" cy="40" r="5" fill="var(--accent)"/>'
      + '<text x="480" y="166" text-anchor="middle">不連続（とびがある）</text>'
      + '<text x="320" y="30" text-anchor="middle" font-size="11.5" fill="var(--muted)">中間値の定理：閉区間で連続なら、その間のどんな値もとる</text>'
      + '</g></svg>' },
],

'bibun-kousiki': [
  { at: 'ov', k: 'table', t: '微分の公式',
    cap: '積・商・合成の三つを押さえれば、たいていの関数は微分できる。',
    head: ['関数', '導関数'],
    rows: [
      ['xⁿ', 'n xⁿ⁻¹'],
      ['f·g', 'f′g ＋ fg′'],
      ['f/g', '(f′g － fg′)/g²'],
      ['f(g(x))', 'f′(g(x))·g′(x)'],
      ['sin x / cos x / tan x', 'cos x / －sin x / 1/cos²x'],
      ['eˣ / aˣ', 'eˣ / aˣ log a'],
      ['log x', '1/x'],
    ] },
],

'bibun-ouyou': [
  { at: 'ov', k: 'svg', t: '凹凸と変曲点',
    cap: '一次導関数で増減、二次導関数で曲がり方が分かる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="凹凸と変曲点の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="50" y1="150" x2="590" y2="150" stroke="var(--border)"/>'
      + '<path d="M70,130 Q170,160 300,96 Q430,32 580,46" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<circle cx="300" cy="96" r="5" fill="var(--primary)"/>'
      + '<text x="310" y="90" fill="var(--primary)">変曲点</text>'
      + '<text x="150" y="110" font-size="11.5">f″ ＞ 0　下に凸</text>'
      + '<text x="430" y="86" font-size="11.5">f″ ＜ 0　上に凸</text>'
      + '<text x="320" y="182" text-anchor="middle" font-size="11.5" fill="var(--muted)">f′＝0 かつ f″ の符号が変わる点が極値、f″＝0 で符号が変わる点が変曲点</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: 'グラフをかく手順',
    cap: '順番どおりに調べれば、どんな関数でも概形がかける。',
    head: ['手順', '調べること'],
    rows: [
      ['①', '定義域、対称性（偶関数・奇関数）'],
      ['②', '軸との交点、符号'],
      ['③', 'f′ を求めて増減と極値'],
      ['④', 'f″ を求めて凹凸と変曲点'],
      ['⑤', '漸近線（x→±∞、分母が0になる点）'],
      ['⑥', '増減表にまとめてかく'],
    ] },
],

'sekibun-kousiki': [
  { at: 'ov', k: 'table', t: '積分の技法',
    cap: '形を見て、どの技法に持ちこむかを選ぶ。',
    head: ['技法', '使う場面', '形'],
    rows: [
      ['置換積分', '合成関数の形', '∫f(g(x))g′(x)dx ＝ ∫f(u)du'],
      ['部分積分', '積の形', '∫f g′ ＝ fg － ∫f′g'],
      ['部分分数分解', '分母が因数分解できる', '1/((x－a)(x－b)) に分ける'],
      ['三角関数の置換', '√(a²－x²) など', 'x ＝ a sinθ'],
      ['対称性の利用', '偶関数・奇関数', '奇関数の対称区間での定積分は0'],
    ] },
],

'sekibun-menseki': [
  { at: 'ov', k: 'svg', t: '区分求積法',
    cap: '細い長方形で埋めつくし、幅を0に近づけると定積分になる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="区分求積法の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="60" y1="150" x2="380" y2="150" stroke="var(--border)"/>'
      + '<path d="M80,130 Q180,40 350,56" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<rect x="80" y="130" width="38" height="20" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<rect x="118" y="104" width="38" height="46" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<rect x="156" y="86" width="38" height="64" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<rect x="194" y="74" width="38" height="76" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<rect x="232" y="66" width="38" height="84" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<rect x="270" y="60" width="38" height="90" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="430" y="70" font-size="12">lim (1/n) Σ f(k/n) ＝ ∫₀¹ f(x)dx</text>'
      + '<text x="430" y="104" font-size="11.5" fill="var(--muted)">和の形を見たら、1/n と k/n を探す</text>'
      + '<text x="430" y="130" font-size="11.5" fill="var(--muted)">k/n が x に、1/n が dx に変わる</text>'
      + '</g></svg>' },
],

'sekibun-ouyou': [
  { at: 'ov', k: 'svg', t: '回転体の体積',
    cap: '輪切りにした円の面積を足し合わせる。半径が f(x) なので面積は πf(x)²。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="回転体の体積の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="60" y1="110" x2="380" y2="110" stroke="var(--border)"/>'
      + '<path d="M90,74 Q180,36 340,62" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M90,146 Q180,184 340,158" fill="none" stroke="var(--primary)" stroke-width="2.5" opacity="0.4"/>'
      + '<ellipse cx="220" cy="110" rx="12" ry="58" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<line x1="220" y1="110" x2="220" y2="52" stroke="var(--accent)"/>'
      + '<text x="228" y="86" fill="var(--accent)">f(x)</text>'
      + '<text x="440" y="70" font-size="12">V ＝ π∫ₐᵇ {f(x)}² dx</text>'
      + '<text x="440" y="104" font-size="11.5" fill="var(--muted)">y軸まわりなら π∫{g(y)}² dy</text>'
      + '<text x="440" y="132" font-size="11.5" fill="var(--muted)">曲線の長さ L ＝ ∫√(1＋(y′)²) dx</text>'
      + '</g></svg>' },
],

fukusoheimen: [
  { at: 'ov', k: 'svg', t: '複素数平面と極形式',
    cap: '複素数を平面上の点とみる。かけ算は「回転と拡大」になる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="複素数平面の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="50" y1="140" x2="330" y2="140" stroke="var(--border)"/>'
      + '<line x1="140" y1="26" x2="140" y2="176" stroke="var(--border)"/>'
      + '<text x="338" y="144" font-size="11" fill="var(--muted)">実軸</text>'
      + '<text x="146" y="24" font-size="11" fill="var(--muted)">虚軸</text>'
      + '<line x1="140" y1="140" x2="260" y2="60" stroke="var(--primary)" stroke-width="2"/>'
      + '<circle cx="260" cy="60" r="5" fill="var(--primary)"/>'
      + '<text x="268" y="56" fill="var(--primary)">z ＝ a＋bi</text>'
      + '<path d="M176,140 A36,36 0 0,0 168,118" fill="none" stroke="var(--muted)"/>'
      + '<text x="182" y="128" font-size="11">θ</text>'
      + '<text x="182" y="100" font-size="11" fill="var(--muted)">r</text>'
      + '<text x="400" y="52" font-size="12">z ＝ r(cosθ ＋ i sinθ)</text>'
      + '<text x="400" y="82" font-size="11.5" fill="var(--muted)">r ＝ |z| ＝ √(a²＋b²)</text>'
      + '<text x="400" y="108" font-size="12">z₁z₂ ＝ r₁r₂{cos(θ₁＋θ₂)＋i sin(θ₁＋θ₂)}</text>'
      + '<text x="400" y="138" font-size="12">ド・モアブル　zⁿ ＝ rⁿ(cos nθ ＋ i sin nθ)</text>'
      + '<text x="320" y="182" text-anchor="middle" font-size="11.5" fill="var(--muted)">i をかけることは、原点のまわりに90度回すことにあたる</text>'
      + '</g></svg>' },
],

nijikyokusen: [
  { at: 'ov', k: 'table', t: '二次曲線のまとめ',
    cap: '定義（距離の条件）と標準形をセットで覚える。',
    head: ['曲線', '定義', '標準形', '焦点'],
    rows: [
      ['放物線', '焦点と準線から等距離', 'y² ＝ 4px', '(p, 0)'],
      ['楕円', '2定点からの距離の和が一定', 'x²/a²＋y²/b² ＝ 1', '(±√(a²－b²), 0)'],
      ['双曲線', '2定点からの距離の差が一定', 'x²/a²－y²/b² ＝ 1', '(±√(a²＋b²), 0)'],
    ] },
  { at: 'sec2', k: 'svg', t: '三つの曲線の形',
    cap: '離心率 e の値で、同じ族の曲線が三つに分かれる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="二次曲線の形">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<path d="M60,140 Q110,40 160,140" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="110" y="162">放物線　e ＝ 1</text>'
      + '<ellipse cx="320" cy="92" rx="76" ry="46" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="320" y="162">楕円　e ＜ 1</text>'
      + '<path d="M470,36 Q520,92 470,148" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M590,36 Q540,92 590,148" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="530" y="162">双曲線　e ＞ 1</text>'
      + '</g></svg>' },
],

'baikai-kyokusen': [
  { at: 'ov', k: 'svg', t: '極座標',
    cap: '原点からの距離 r と、x軸からの角 θ で点を表す。円や渦巻きが簡潔に書ける。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="極座標の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="60" y1="130" x2="330" y2="130" stroke="var(--border)"/>'
      + '<circle cx="110" cy="130" r="4" fill="var(--muted)"/>'
      + '<text x="104" y="150" font-size="11" fill="var(--muted)">O</text>'
      + '<line x1="110" y1="130" x2="250" y2="50" stroke="var(--primary)" stroke-width="2"/>'
      + '<circle cx="250" cy="50" r="5" fill="var(--primary)"/>'
      + '<text x="258" y="46" fill="var(--primary)">P(r, θ)</text>'
      + '<path d="M146,130 A36,36 0 0,0 140,110" fill="none" stroke="var(--muted)"/>'
      + '<text x="152" y="120" font-size="11">θ</text>'
      + '<text x="170" y="82" font-size="11" fill="var(--muted)">r</text>'
      + '<text x="400" y="54" font-size="12">x ＝ r cosθ　y ＝ r sinθ</text>'
      + '<text x="400" y="84" font-size="12">r ＝ √(x²＋y²)</text>'
      + '<text x="400" y="114" font-size="11.5" fill="var(--muted)">サイクロイド　x ＝ a(θ－sinθ)</text>'
      + '<text x="400" y="134" font-size="11.5" fill="var(--muted)">　　　　　　　y ＝ a(1－cosθ)</text>'
      + '</g></svg>' },
],

'kyokugen-ouyou': [
  { at: 'ov', k: 'table', t: '覚えておく極限',
    cap: 'これらを知っていれば、多くの不定形が処理できる。',
    head: ['極限', '値'],
    rows: [
      ['lim(x→0) sin x / x', '1'],
      ['lim(x→0) (1－cos x)/x²', '1/2'],
      ['lim(x→0) (eˣ－1)/x', '1'],
      ['lim(x→0) log(1＋x)/x', '1'],
      ['lim(n→∞) (1＋1/n)ⁿ', 'e ≒ 2.718'],
      ['lim(x→∞) xⁿ/eˣ', '0（指数のほうが強い）'],
    ] },
],

bibunhouteishiki: [
  { at: 'ov', k: 'svg', t: '変数分離形',
    cap: 'y の項と x の項を左右に分けて、それぞれ積分する。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="変数分離形の図">'
      + '<defs><marker id="ar-bd" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="34" width="170" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="115" y="66">dy/dx ＝ f(x)g(y)</text>'
      + '<rect x="235" y="34" width="170" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="66" fill="var(--primary)">dy/g(y) ＝ f(x)dx</text>'
      + '<rect x="440" y="34" width="170" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="525" y="66">∫dy/g(y) ＝ ∫f(x)dx</text>'
      + '<line x1="204" y1="61" x2="231" y2="61" stroke="var(--muted)" marker-end="url(#ar-bd)"/>'
      + '<line x1="409" y1="61" x2="436" y2="61" stroke="var(--muted)" marker-end="url(#ar-bd)"/>'
      + '<text x="320" y="126" font-size="11.5" fill="var(--muted)">成長 dy/dt ＝ ky　→　y ＝ Ce^{kt}（k＞0で増加、k＜0で減衰）</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">初期条件を代入して、積分定数 C を決める</text>'
      + '</g></svg>' },
],

'kuukan-vector': [
  { at: 'ov', k: 'table', t: '空間の図形の方程式',
    cap: '平面の方程式と法線ベクトルの関係を押さえると、距離も角度も求まる。',
    head: ['図形', '方程式', '補足'],
    rows: [
      ['球面', '(x－a)²＋(y－b)²＋(z－c)² ＝ r²', '中心 (a,b,c)、半径 r'],
      ['平面', 'ax＋by＋cz＋d ＝ 0', '法線ベクトル (a,b,c)'],
      ['直線', '(x－x₀)/l ＝ (y－y₀)/m ＝ (z－z₀)/n', '方向ベクトル (l,m,n)'],
      ['点と平面の距離', '|ax₀＋by₀＋cz₀＋d| / √(a²＋b²+c²)', '—'],
      ['2平面のなす角', '法線ベクトルのなす角', '内積で求める'],
    ] },
],

sougou: [
  { at: 'ov', k: 'svg', t: '方針の立て方',
    cap: '手が止まったときに戻る場所を決めておくと、入試本番でも崩れにくい。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="解法の方針の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="30" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="87" y="54" font-size="12">① 具体化する</text>'
      + '<text x="87" y="74" fill="var(--muted)">小さい数で試す</text>'
      + '<text x="87" y="90" fill="var(--muted)">図をかく</text>'
      + '<rect x="172" y="30" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="245" y="54" font-size="12">② 言いかえる</text>'
      + '<text x="245" y="74" fill="var(--muted)">条件を式に</text>'
      + '<text x="245" y="90" fill="var(--muted)">別の分野の言葉に</text>'
      + '<rect x="330" y="30" width="146" height="70" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="403" y="54" font-size="12" fill="var(--primary)">③ 既知に帰着</text>'
      + '<text x="403" y="74" fill="var(--muted)">知っている型に寄せる</text>'
      + '<rect x="488" y="30" width="138" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="557" y="54" font-size="12">④ 検算する</text>'
      + '<text x="557" y="74" fill="var(--muted)">次元・符号・極端な値</text>'
      + '<text x="320" y="142" font-size="11.5" fill="var(--muted)">「答えの形」から逆算するのも有効（対称性があるか、整数になるか）</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">部分点をねらうなら、方針と使う定理を先に書いておく</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
