/* 物理 ― 単元の説明に添える図・表・写真
   単元id → 図版の配列。at は 'ov'（概要タブ）か 'sec0' 'sec1' …（詳細タブの節の下）。
   k は 'table' / 'svg' / 'map' / 'photo'。
*/
const FIGS = {

undou: [
  { at: 'ov', k: 'svg', t: 'v-tグラフの読み方',
    cap: '傾きが加速度、面積が変位。この二つを押さえれば、等加速度運動の式はすべて図から読める。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="速度と時間のグラフ">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="70" y1="180" x2="560" y2="180" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="70" y1="24" x2="70" y2="180" stroke="var(--border)" stroke-width="1.5"/>'
      + '<text x="566" y="184" font-size="11" fill="var(--muted)">時刻 t</text>'
      + '<text x="52" y="22" font-size="11" fill="var(--muted)">速度 v</text>'
      + '<polygon points="70,150 430,50 430,180 70,180" fill="var(--primary-soft)" opacity="0.7"/>'
      + '<line x1="70" y1="150" x2="430" y2="50" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<line x1="70" y1="150" x2="430" y2="150" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<line x1="430" y1="150" x2="430" y2="50" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<text x="250" y="166" font-size="11" fill="var(--muted)" text-anchor="middle">t</text>'
      + '<text x="444" y="104" font-size="11" fill="var(--muted)">at</text>'
      + '<text x="46" y="154" font-size="11" fill="var(--muted)">v₀</text>'
      + '<text x="250" y="120" font-size="12" fill="var(--primary)" text-anchor="middle">面積 ＝ 変位 x</text>'
      + '<text x="300" y="72" font-size="11.5" fill="var(--primary)">傾き ＝ 加速度 a</text>'
      + '<text x="490" y="60" font-size="12">v ＝ v₀ ＋ at</text>'
      + '<text x="490" y="84" font-size="12">x ＝ v₀t ＋ ½at²</text>'
      + '<text x="490" y="108" font-size="12">v² － v₀² ＝ 2ax</text>'
      + '<text x="320" y="206" font-size="11.5" fill="var(--muted)" text-anchor="middle">x-tグラフの傾きは速度。a-tグラフの面積は速度の変化</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '相対速度の考え方',
    cap: '「Aから見たBの速度」は、Bの速度からAの速度を引く。向きを符号で表すのがこつ。',
    head: ['場面', '計算', '結果'],
    rows: [
      ['同じ向き（+20と+15）', '15 － 20', '－5 m/s（後ろへ下がって見える）'],
      ['逆向き（+20と－15）', '(－15) － 20', '－35 m/s（速く近づく）'],
      ['直角に進む', 'ベクトルの引き算', '三平方の定理で大きさを求める'],
    ] },
],

chikara: [
  { at: 'ov', k: 'svg', t: '力の分解（斜面上の物体）',
    cap: '重力を斜面に平行な成分と垂直な成分に分けると、運動の向きの力がすぐ出る。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="斜面上の力の分解の図">'
      + '<defs><marker id="ar-ph" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<polygon points="60,180 480,180 480,60" fill="var(--surface)" stroke="var(--border)" stroke-width="1.5"/>'
      + '<rect x="280" y="104" width="44" height="30" rx="4" fill="var(--primary-soft)" stroke="var(--primary)" '
      + 'transform="rotate(-16 302 119)"/>'
      + '<line x1="302" y1="119" x2="302" y2="196" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-ph)"/>'
      + '<text x="308" y="192" font-size="11.5" fill="var(--primary)">mg</text>'
      + '<line x1="302" y1="119" x2="236" y2="140" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar-ph)"/>'
      + '<text x="188" y="142" font-size="11.5" fill="var(--accent)">mg sinθ</text>'
      + '<line x1="302" y1="119" x2="326" y2="192" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>'
      + '<text x="334" y="170" font-size="11.5" fill="var(--muted)">mg cosθ</text>'
      + '<path d="M440,180 A48,48 0 0,0 468,146" fill="none" stroke="var(--muted)"/>'
      + '<text x="444" y="166" font-size="11.5">θ</text>'
      + '<text x="60" y="40" font-size="12">斜面に沿って下る力　＝ mg sinθ</text>'
      + '<text x="60" y="62" font-size="12">面を押す力（＝垂直抗力）＝ mg cosθ</text>'
      + '<text x="320" y="208" text-anchor="middle" font-size="11.5" fill="var(--muted)">θが大きいほど下る力は大きく、面を押す力は小さくなる</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '力の種類',
    cap: 'どんな力が働いているかを数え落とさないことが、力学の第一歩になる。',
    head: ['力', '向き', 'はたらく条件'],
    rows: [
      ['重力', '鉛直下向き', 'つねに（大きさ mg）'],
      ['垂直抗力', '面に垂直', '面に接しているとき'],
      ['摩擦力', '面に平行', '動こうとする向きと逆'],
      ['張力', '糸に沿って', '糸でつながれているとき'],
      ['弾性力', '自然長に戻る向き', 'ばねが伸び縮みしているとき（F＝kx）'],
      ['浮力', '鉛直上向き', '流体中。押しのけた流体の重さ'],
    ] },
],

undouhousoku: [
  { at: 'ov', k: 'photo', t: 'ニュートン', src: 'img/newton.jpg',
    cap: '運動の三法則と万有引力の法則を『プリンキピア』（1687）にまとめ、地上と天体の運動を一つの理論で説明した。', credit: 'ウィキメディア・コモンズ「Portrait of Sir Isaac Newton, 1689.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'ニュートンの運動の3法則',
    cap: '第1法則が「何が起きないか」、第2法則が「どう起きるか」、第3法則が「相手にも起きる」を述べている。',
    head: ['法則', '内容', '注意'],
    rows: [
      ['第1（慣性）', '力がはたらかなければ、静止または等速直線運動を続ける', '成り立つ座標系を慣性系という'],
      ['第2（運動方程式）', 'ma ＝ F', '加速度は力に比例し、質量に反比例'],
      ['第3（作用反作用）', '二つの物体が及ぼしあう力は、大きさが等しく向きが逆', '別々の物体にはたらく。つり合いとは違う'],
    ] },
  { at: 'sec1', k: 'svg', t: '運動方程式の立て方',
    cap: '物体を一つずつ切り離して、その物体にはたらく力だけを描く（自由物体図）のが近道。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="運動方程式の手順の図">'
      + '<defs><marker id="ar-um" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="34" width="140" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="82" y="58">① 物体を選ぶ</text>'
      + '<text x="82" y="80" font-size="11" fill="var(--muted)">一つずつ切り離す</text>'
      + '<rect x="166" y="34" width="140" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="236" y="58">② 力をすべて描く</text>'
      + '<text x="236" y="80" font-size="11" fill="var(--muted)">重力・抗力・張力・摩擦</text>'
      + '<rect x="320" y="34" width="140" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="390" y="58">③ 正の向きを決める</text>'
      + '<text x="390" y="80" font-size="11" fill="var(--muted)">運動する向きにとる</text>'
      + '<rect x="474" y="34" width="154" height="62" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="551" y="58" fill="var(--primary)">④ ma ＝ F を書く</text>'
      + '<text x="551" y="80" font-size="11" fill="var(--muted)">物体の数だけ式を立てる</text>'
      + '<line x1="154" y1="65" x2="162" y2="65" stroke="var(--muted)" marker-end="url(#ar-um)"/>'
      + '<line x1="308" y1="65" x2="316" y2="65" stroke="var(--muted)" marker-end="url(#ar-um)"/>'
      + '<line x1="462" y1="65" x2="470" y2="65" stroke="var(--muted)" marker-end="url(#ar-um)"/>'
      + '<text x="320" y="138" font-size="11.5" fill="var(--muted)">糸でつながれた2物体では、加速度の大きさが等しいことを使って連立させる</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">張力は糸の両端で同じ大きさ（糸の質量と滑車の摩擦を無視する場合）</text>'
      + '</g></svg>' },
],

shigoto: [
  { at: 'ov', k: 'svg', t: '力学的エネルギー保存則',
    cap: '摩擦や空気抵抗がなければ、運動エネルギーと位置エネルギーの和は変わらない。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="力学的エネルギー保存則の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<path d="M60,50 Q160,190 300,186 Q440,182 580,60" fill="none" stroke="var(--border)" stroke-width="3"/>'
      + '<circle cx="70" cy="56" r="9" fill="var(--primary)"/>'
      + '<circle cx="300" cy="176" r="9" fill="var(--primary)"/>'
      + '<circle cx="556" cy="76" r="9" fill="var(--primary)"/>'
      + '<text x="46" y="42" font-size="11.5">位置エネルギー大</text>'
      + '<text x="46" y="28" font-size="11.5" fill="var(--muted)">運動エネルギー0</text>'
      + '<text x="300" y="206" text-anchor="middle" font-size="11.5">運動エネルギー最大</text>'
      + '<text x="540" y="62" font-size="11.5" text-anchor="middle">ふたたび高く</text>'
      + '<rect x="196" y="48" width="250" height="56" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="321" y="72" text-anchor="middle" font-size="12.5" fill="var(--primary)">½mv² ＋ mgh ＝ 一定</text>'
      + '<text x="321" y="92" text-anchor="middle" font-size="11" fill="var(--muted)">保存力だけがはたらくとき</text>'
      + '<text x="320" y="128" text-anchor="middle" font-size="11.5" fill="var(--muted)">摩擦があるときは、減った分だけ熱に変わる（エネルギーの総量は保存）</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '仕事の計算で間違えやすいところ',
    cap: '力と移動の向きの関係をいつも確かめる。垂直な力は仕事をしない。',
    head: ['場面', '仕事', '理由'],
    rows: [
      ['力と移動が同じ向き', 'W ＝ Fx', 'cos0° ＝ 1'],
      ['角θをなす', 'W ＝ Fx cosθ', '移動方向の成分だけが効く'],
      ['力と移動が垂直', '0', 'cos90° ＝ 0（円運動の向心力など）'],
      ['力と移動が逆向き', '負の仕事', '動摩擦力など'],
      ['静止している物体を押す', '0', '移動していないので仕事ではない'],
    ] },
],

undouryou: [
  { at: 'ov', k: 'table', t: '運動量保存則と力学的エネルギー',
    cap: '衝突では運動量はつねに保存するが、エネルギーは保存するとは限らない。',
    head: ['衝突', '反発係数 e', '運動量', '力学的エネルギー'],
    rows: [
      ['弾性衝突', 'e ＝ 1', '保存', '保存'],
      ['非弾性衝突', '0 < e < 1', '保存', '減る（熱・音・変形に）'],
      ['完全非弾性衝突', 'e ＝ 0', '保存', '最も減る（一体になる）'],
    ] },
  { at: 'sec0', k: 'svg', t: '力積と運動量の関係',
    cap: '同じ運動量の変化でも、時間を長くとれば力は小さくてすむ。これが衝撃をやわらげる原理。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="力積と運動量の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="60" y1="140" x2="300" y2="140" stroke="var(--border)"/>'
      + '<line x1="60" y1="30" x2="60" y2="140" stroke="var(--border)"/>'
      + '<rect x="80" y="54" width="60" height="86" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="110" y="100" text-anchor="middle" font-size="11" fill="var(--primary)">大きい力</text>'
      + '<text x="110" y="116" text-anchor="middle" font-size="11" fill="var(--primary)">短い時間</text>'
      + '<rect x="170" y="100" width="118" height="40" fill="var(--surface2)" stroke="var(--muted)"/>'
      + '<text x="229" y="124" text-anchor="middle" font-size="11" fill="var(--muted)">小さい力・長い時間</text>'
      + '<text x="180" y="44" font-size="11.5" fill="var(--muted)">面積（＝力積）は同じ</text>'
      + '<text x="40" y="28" font-size="11" fill="var(--muted)">力 F</text>'
      + '<text x="306" y="144" font-size="11" fill="var(--muted)">時間 t</text>'
      + '<rect x="350" y="46" width="266" height="76" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="483" y="72" text-anchor="middle" font-size="12.5">F·Δt ＝ mv′ － mv</text>'
      + '<text x="483" y="96" text-anchor="middle" font-size="11" fill="var(--muted)">力積　＝　運動量の変化</text>'
      + '<text x="320" y="170" text-anchor="middle" font-size="11.5" fill="var(--muted)">エアバッグ、受け身、ボールを引きながら捕る――どれも時間を延ばして力を減らしている</text>'
      + '</g></svg>' },
],

enundou: [
  { at: 'ov', k: 'svg', t: '等速円運動にはたらく力',
    cap: '速さは変わらないのに向きが変わる。だから中心向きの加速度があり、中心向きの力が必要になる。',
    svg: '<svg viewBox="0 0 640 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="等速円運動の図">'
      + '<defs><marker id="ar-en" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<circle cx="190" cy="104" r="76" fill="none" stroke="var(--border)" stroke-width="1.5" stroke-dasharray="5 4"/>'
      + '<circle cx="190" cy="104" r="5" fill="var(--muted)"/>'
      + '<circle cx="266" cy="104" r="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<line x1="266" y1="104" x2="200" y2="104" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-en)"/>'
      + '<text x="214" y="96" font-size="11" fill="var(--primary)">向心力</text>'
      + '<line x1="266" y1="104" x2="266" y2="40" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar-en)"/>'
      + '<text x="274" y="48" font-size="11" fill="var(--accent)">速度 v</text>'
      + '<text x="190" y="196" text-anchor="middle" font-size="11" fill="var(--muted)">半径 r</text>'
      + '<rect x="330" y="40" width="290" height="110" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="350" y="66" font-size="12">角速度　ω ＝ v / r　［rad/s］</text>'
      + '<text x="350" y="90" font-size="12">向心加速度　a ＝ v²/r ＝ rω²</text>'
      + '<text x="350" y="114" font-size="12">向心力　F ＝ mv²/r ＝ mrω²</text>'
      + '<text x="350" y="138" font-size="11.5" fill="var(--muted)">周期　T ＝ 2πr / v ＝ 2π/ω</text>'
      + '<text x="320" y="190" text-anchor="middle" font-size="11.5" fill="var(--muted)">遠心力は、回転する立場から見たときに現れる見かけの力</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: 'ケプラーの3法則',
    cap: '惑星の観測事実をまとめたもので、のちに万有引力の法則から導かれた。',
    head: ['法則', '内容', '式'],
    rows: [
      ['第1法則', '惑星は太陽を焦点の一つとする楕円を描く', '—'],
      ['第2法則', '面積速度は一定（近日点で速く、遠日点で遅い）', '—'],
      ['第3法則', '公転周期の2乗は軌道長半径の3乗に比例', 'T² / a³ ＝ 一定'],
    ] },
],

tanshindou: [
  { at: 'ov', k: 'svg', t: '単振動のしくみ',
    cap: '変位に比例して、もとに戻す向きの力がはたらく。この条件がそろえば必ず単振動になる。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="単振動の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="50" y1="100" x2="590" y2="100" stroke="var(--border)" stroke-dasharray="4 4"/>'
      + '<path d="M50,100 Q110,30 170,100 Q230,170 290,100 Q350,30 410,100 Q470,170 530,100 Q560,66 590,54" '
      + 'fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="60" y="26" font-size="11.5" fill="var(--muted)">変位 x</text>'
      + '<text x="596" y="104" font-size="11" fill="var(--muted)">t</text>'
      + '<rect x="200" y="130" width="250" height="56" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="325" y="152" text-anchor="middle" font-size="12" fill="var(--primary)">F ＝ －Kx　（復元力）</text>'
      + '<text x="325" y="174" text-anchor="middle" font-size="11.5" fill="var(--muted)">周期 T ＝ 2π√(m/K)</text>'
      + '<text x="470" y="40" font-size="11.5" fill="var(--muted)">ばね振り子　T ＝ 2π√(m/k)</text>'
      + '<text x="470" y="60" font-size="11.5" fill="var(--muted)">単振り子　T ＝ 2π√(l/g)</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '周期が何で決まるか',
    cap: '単振り子の周期は、おもりの重さにも振れ幅にもよらない（振れ角が小さいとき）。',
    head: ['振り子', '周期', '関係するもの', '関係しないもの'],
    rows: [
      ['ばね振り子', 'T ＝ 2π√(m/k)', '質量とばね定数', '振幅、重力加速度'],
      ['単振り子', 'T ＝ 2π√(l/g)', '長さと重力加速度', '質量、振幅（等時性）'],
    ] },
],

netsu: [
  { at: 'ov', k: 'table', t: '気体の状態変化',
    cap: '四つの変化で、何が0になるかを押さえると熱力学第一法則の計算が速くなる。',
    head: ['変化', '一定なもの', 'ΔU', 'W（気体がする仕事）', 'Q'],
    rows: [
      ['定積変化', '体積', 'nCvΔT', '0', 'ΔU'],
      ['定圧変化', '圧力', 'nCvΔT', 'pΔV', 'ΔU ＋ W'],
      ['等温変化', '温度', '0', 'Q に等しい', 'W'],
      ['断熱変化', '熱の出入り', '－W', '－ΔU', '0'],
    ] },
  { at: 'sec1', k: 'svg', t: '気体の法則',
    cap: 'ボイル・シャルル・状態方程式は、どれも同じことを別の面から見ている。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="気体の法則の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="18" y="30" width="180" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="108" y="54">ボイルの法則</text>'
      + '<text x="108" y="78" font-size="11.5" fill="var(--muted)">温度一定　pV ＝ 一定</text>'
      + '<rect x="230" y="30" width="180" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="54">シャルルの法則</text>'
      + '<text x="320" y="78" font-size="11.5" fill="var(--muted)">圧力一定　V/T ＝ 一定</text>'
      + '<rect x="442" y="30" width="180" height="70" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="532" y="54" fill="var(--primary)">状態方程式</text>'
      + '<text x="532" y="78" font-size="11.5" fill="var(--muted)">pV ＝ nRT</text>'
      + '<text x="320" y="136" font-size="11.5" fill="var(--muted)">絶対温度 T［K］＝ セ氏温度 ＋ 273　（0 K が絶対零度）</text>'
      + '<text x="320" y="158" font-size="11.5" fill="var(--muted)">理想気体では、分子の大きさと分子間力を無視する</text>'
      + '</g></svg>' },
],

hadou: [
  { at: 'ov', k: 'svg', t: '波の要素',
    cap: '波長・振幅・周期・振動数。これらと速さの関係 v＝fλ がすべての土台になる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="波の要素の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="40" y1="92" x2="600" y2="92" stroke="var(--border)" stroke-dasharray="4 4"/>'
      + '<path d="M40,92 Q110,28 180,92 Q250,156 320,92 Q390,28 460,92 Q530,156 600,92" '
      + 'fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<line x1="180" y1="112" x2="460" y2="112" stroke="var(--muted)"/>'
      + '<line x1="180" y1="106" x2="180" y2="118" stroke="var(--muted)"/>'
      + '<line x1="460" y1="106" x2="460" y2="118" stroke="var(--muted)"/>'
      + '<text x="320" y="130" text-anchor="middle" font-size="11.5" fill="var(--muted)">波長 λ</text>'
      + '<line x1="110" y1="30" x2="110" y2="92" stroke="var(--accent)"/>'
      + '<text x="118" y="56" font-size="11.5" fill="var(--accent)">振幅 A</text>'
      + '<text x="60" y="164" font-size="12">v ＝ fλ　／　f ＝ 1/T</text>'
      + '<text x="300" y="164" font-size="11.5" fill="var(--muted)">横波＝振動の向きが進行方向に垂直（光）</text>'
      + '<text x="300" y="182" font-size="11.5" fill="var(--muted)">縦波＝振動の向きが進行方向に平行（音）</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '波に起きる四つの現象',
    cap: '反射・屈折・回折・干渉。どれも波であることの証拠になる。',
    head: ['現象', '起きること', '決まり'],
    rows: [
      ['反射', '境界ではね返る', '入射角 ＝ 反射角'],
      ['屈折', '速さが変わって向きが曲がる', 'sin i / sin r ＝ n（相対屈折率）'],
      ['回折', '障害物の裏へ回りこむ', '波長が長いほど回りこみやすい'],
      ['干渉', '強めあい・弱めあい', '経路差が波長の整数倍なら強めあう'],
    ] },
],

onpa: [
  { at: 'ov', k: 'svg', t: 'ドップラー効果',
    cap: '音源が近づくと波が詰まって振動数が上がり、遠ざかると伸びて下がる。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ドップラー効果の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<circle cx="300" cy="90" r="7" fill="var(--primary)"/>'
      + '<circle cx="286" cy="90" r="28" fill="none" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<circle cx="272" cy="90" r="56" fill="none" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<circle cx="258" cy="90" r="84" fill="none" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<text x="300" y="72" text-anchor="middle" font-size="11" fill="var(--primary)">音源 →</text>'
      + '<text x="430" y="66" font-size="11.5">前方　波長が短い</text>'
      + '<text x="430" y="84" font-size="11.5" fill="var(--muted)">振動数が高く聞こえる</text>'
      + '<text x="36" y="66" font-size="11.5">後方　波長が長い</text>'
      + '<text x="36" y="84" font-size="11.5" fill="var(--muted)">振動数が低く聞こえる</text>'
      + '<rect x="150" y="146" width="340" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="170" text-anchor="middle" font-size="12" fill="var(--primary)">f′ ＝ (V － v₀) / (V － vs) × f</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '弦と気柱の振動',
    cap: '端が固定か自由かで、できる定常波の形が変わる。基本振動の波長を押さえる。',
    head: ['', '両端固定の弦', '閉管（一端が閉）', '開管（両端が開）'],
    rows: [
      ['基本振動の波長', '2L', '4L', '2L'],
      ['基本振動数', 'V/2L', 'V/4L', 'V/2L'],
      ['出る倍音', 'すべて', '奇数倍のみ', 'すべて'],
      ['端の状態', '節', '閉端は節、開端は腹', '両端が腹'],
    ] },
],

hikari: [
  { at: 'ov', k: 'photo', t: '光の分散', src: 'img/spectrum.jpg',
    cap: 'プリズムを通すと色に分かれる。屈折率が波長によって違うために起きる。赤より紫のほうが大きく曲がる。', credit: 'ウィキメディア・コモンズ「Light dispersion conceptual waves.gif」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '凸レンズの作図',
    cap: '三本の光線のうち二本を描けば像が決まる。実像か虚像かは物体の位置で変わる。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="凸レンズの作図">'
      + '<defs><marker id="ar-lz" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto">'
      + '<path d="M0,0 L6,2.5 L0,5 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="30" y1="110" x2="610" y2="110" stroke="var(--border)"/>'
      + '<ellipse cx="320" cy="110" rx="12" ry="68" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<line x1="140" y1="110" x2="140" y2="56" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar-lz)"/>'
      + '<text x="112" y="50" fill="var(--accent)">物体</text>'
      + '<line x1="140" y1="56" x2="320" y2="56" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<line x1="320" y1="56" x2="500" y2="164" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<line x1="140" y1="56" x2="500" y2="164" stroke="var(--primary)" stroke-width="1.5" opacity="0.5"/>'
      + '<line x1="500" y1="110" x2="500" y2="164" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar-lz)"/>'
      + '<text x="508" y="178" fill="var(--accent)">実像（倒立）</text>'
      + '<circle cx="230" cy="110" r="3" fill="var(--muted)"/><text x="222" y="126" fill="var(--muted)">F</text>'
      + '<circle cx="410" cy="110" r="3" fill="var(--muted)"/><text x="404" y="126" fill="var(--muted)">F</text>'
      + '<text x="36" y="188" font-size="12">1/a ＋ 1/b ＝ 1/f　／　倍率 m ＝ b/a</text>'
      + '<text x="330" y="188" font-size="11.5" fill="var(--muted)">焦点より内側に置くと、拡大された正立虚像になる</text>'
      + '</g></svg>' },
],

seidenki: [
  { at: 'ov', k: 'table', t: '電場と電位',
    cap: 'ベクトル量とスカラー量の違いを押さえる。重力と高さの関係にそっくりである。',
    head: ['', '電場 E', '電位 V'],
    rows: [
      ['量の種類', 'ベクトル', 'スカラー'],
      ['意味', '1Cにはたらく力', '1Cあたりの位置エネルギー'],
      ['単位', 'N/C（＝V/m）', 'V'],
      ['点電荷から', 'E ＝ kQ/r²', 'V ＝ kQ/r'],
      ['関係', 'E ＝ V/d（一様な電場）', '—'],
    ] },
  { at: 'sec2', k: 'svg', t: 'コンデンサーの接続',
    cap: '並列は足し算、直列は逆数の和。抵抗とは逆になるので間違えやすい。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="コンデンサーの接続の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="110" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="54" font-size="12.5" fill="var(--primary)">並列</text>'
      + '<text x="159" y="80" font-size="11.5" fill="var(--muted)">電圧が等しい</text>'
      + '<text x="159" y="102" font-size="12">C ＝ C₁ ＋ C₂</text>'
      + '<text x="159" y="124" font-size="11" fill="var(--muted)">電気量は分かれる</text>'
      + '<rect x="346" y="30" width="270" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="54" font-size="12.5">直列</text>'
      + '<text x="481" y="80" font-size="11.5" fill="var(--muted)">電気量が等しい</text>'
      + '<text x="481" y="102" font-size="12">1/C ＝ 1/C₁ ＋ 1/C₂</text>'
      + '<text x="481" y="124" font-size="11" fill="var(--muted)">電圧は分かれる</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">蓄えられるエネルギー U ＝ ½CV² ＝ ½QV ＝ Q²/2C</text>'
      + '</g></svg>' },
],

denryuu: [
  { at: 'ov', k: 'svg', t: '直列と並列',
    cap: '抵抗はコンデンサーと逆。直列で足し算、並列で逆数の和になる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抵抗の接続の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="40" y1="56" x2="90" y2="56" stroke="var(--text)" stroke-width="1.5"/>'
      + '<rect x="90" y="46" width="52" height="20" fill="var(--surface)" stroke="var(--primary)"/>'
      + '<text x="116" y="40" text-anchor="middle" font-size="11">R₁</text>'
      + '<line x1="142" y1="56" x2="190" y2="56" stroke="var(--text)" stroke-width="1.5"/>'
      + '<rect x="190" y="46" width="52" height="20" fill="var(--surface)" stroke="var(--primary)"/>'
      + '<text x="216" y="40" text-anchor="middle" font-size="11">R₂</text>'
      + '<line x1="242" y1="56" x2="290" y2="56" stroke="var(--text)" stroke-width="1.5"/>'
      + '<text x="318" y="60" font-size="12">R ＝ R₁ ＋ R₂</text>'
      + '<text x="40" y="86" font-size="11" fill="var(--muted)">直列：電流が等しい</text>'
      + '<line x1="40" y1="130" x2="90" y2="130" stroke="var(--text)" stroke-width="1.5"/>'
      + '<line x1="90" y1="112" x2="90" y2="148" stroke="var(--text)" stroke-width="1.5"/>'
      + '<rect x="110" y="102" width="52" height="20" fill="var(--surface)" stroke="var(--primary)"/>'
      + '<rect x="110" y="138" width="52" height="20" fill="var(--surface)" stroke="var(--primary)"/>'
      + '<line x1="90" y1="112" x2="110" y2="112" stroke="var(--text)"/>'
      + '<line x1="90" y1="148" x2="110" y2="148" stroke="var(--text)"/>'
      + '<line x1="162" y1="112" x2="190" y2="112" stroke="var(--text)"/>'
      + '<line x1="162" y1="148" x2="190" y2="148" stroke="var(--text)"/>'
      + '<line x1="190" y1="112" x2="190" y2="148" stroke="var(--text)" stroke-width="1.5"/>'
      + '<line x1="190" y1="130" x2="240" y2="130" stroke="var(--text)" stroke-width="1.5"/>'
      + '<text x="318" y="134" font-size="12">1/R ＝ 1/R₁ ＋ 1/R₂</text>'
      + '<text x="40" y="172" font-size="11" fill="var(--muted)">並列：電圧が等しい</text>'
      + '<text x="470" y="60" font-size="11.5" fill="var(--muted)">V ＝ RI（オームの法則）</text>'
      + '<text x="470" y="84" font-size="11.5" fill="var(--muted)">P ＝ VI ＝ RI² ＝ V²/R</text>'
      + '<text x="470" y="134" font-size="11.5" fill="var(--muted)">抵抗率　R ＝ ρL/S</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: 'キルヒホッフの法則',
    cap: '複雑な回路も、この二つの式を必要な数だけ立てれば解ける。',
    head: ['法則', '内容', '意味'],
    rows: [
      ['第1法則', '分岐点に流れこむ電流の和 ＝ 流れ出る電流の和', '電荷が溜まらない'],
      ['第2法則', '閉回路を一周したときの起電力の和 ＝ 電圧降下の和', 'エネルギーが保存する'],
    ] },
],

jiba: [
  { at: 'ov', k: 'table', t: '右手と左手の使い分け',
    cap: '何を求めたいかで手が変わる。混乱しやすいので整理しておく。',
    head: ['規則', '使う場面', '対応'],
    rows: [
      ['右ねじの法則', '電流がつくる磁場の向き', '電流の向きに右ねじを進める'],
      ['フレミング左手', '磁場中の電流が受ける力', '中指＝電流、人差し指＝磁場、親指＝力'],
      ['フレミング右手', '導体が動いて生じる起電力', '中指＝起電力、人差し指＝磁場、親指＝運動'],
      ['レンツの法則', '誘導電流の向き', '磁束の変化をさまたげる向き'],
    ] },
  { at: 'sec1', k: 'svg', t: '電磁誘導',
    cap: 'コイルを貫く磁束が変化すると起電力が生じる。変化の速さに比例する。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="電磁誘導の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<ellipse cx="200" cy="96" rx="80" ry="46" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="200" y="158" text-anchor="middle" font-size="11.5" fill="var(--muted)">コイル</text>'
      + '<rect x="166" y="26" width="26" height="46" rx="4" fill="var(--accent)" opacity="0.6"/>'
      + '<text x="179" y="20" text-anchor="middle" font-size="11" fill="var(--accent)">磁石</text>'
      + '<line x1="179" y1="72" x2="179" y2="88" stroke="var(--accent)" stroke-width="2"/>'
      + '<rect x="330" y="46" width="286" height="88" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="350" y="74" font-size="12.5">V ＝ －N (ΔΦ / Δt)</text>'
      + '<text x="350" y="100" font-size="11.5" fill="var(--muted)">N＝巻数、Φ＝磁束</text>'
      + '<text x="350" y="122" font-size="11.5" fill="var(--muted)">マイナスは「変化をさまたげる向き」を表す</text>'
      + '<text x="320" y="172" text-anchor="middle" font-size="11.5" fill="var(--muted)">発電機・変圧器・IH調理器・ICカード――どれもこの原理で動く</text>'
      + '</g></svg>' },
],

genshi: [
  { at: 'ov', k: 'svg', t: '光の粒子性と電子の波動性',
    cap: '光は波でもあり粒でもある。電子もまた同じ。この二重性が量子力学の出発点になった。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="光の粒子性と電子の波動性の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="100" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="54" font-size="12.5" fill="var(--primary)">光の粒子性</text>'
      + '<text x="159" y="78" font-size="11.5" fill="var(--muted)">光電効果・コンプトン効果</text>'
      + '<text x="159" y="100" font-size="12">E ＝ hν　p ＝ h/λ</text>'
      + '<text x="159" y="120" font-size="11" fill="var(--muted)">光子（フォトン）</text>'
      + '<rect x="346" y="30" width="270" height="100" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="54" font-size="12.5">電子の波動性</text>'
      + '<text x="481" y="78" font-size="11.5" fill="var(--muted)">電子線の回折（デビッソン・ガーマー）</text>'
      + '<text x="481" y="100" font-size="12">λ ＝ h/mv</text>'
      + '<text x="481" y="120" font-size="11" fill="var(--muted)">ド・ブロイ波（物質波）</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">光電効果では、振動数が限界振動数より小さいとどんなに明るくても電子は飛び出さない</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '放射線の種類',
    cap: '正体と透過力をセットで覚える。遮蔽に何が要るかが決まる。',
    head: ['放射線', '正体', '電荷', '透過力', '止めるもの'],
    rows: [
      ['α線', 'ヘリウム原子核', '＋2e', '弱い', '紙'],
      ['β線', '電子', '－e', '中くらい', 'アルミニウム板'],
      ['γ線', '電磁波', '0', '強い', '鉛・厚いコンクリート'],
      ['中性子線', '中性子', '0', 'とても強い', '水・コンクリート'],
    ] },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
