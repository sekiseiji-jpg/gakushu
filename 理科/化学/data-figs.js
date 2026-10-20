/* 化学 ― 単元の説明に添える図・表・写真 */
const FIGS = {

bussitsu: [
  { at: 'ov', k: 'svg', t: '物質の分類',
    cap: '純物質か混合物か、単体か化合物か。この枝分かれを最初に押さえる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="物質の分類の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="258" y="12" width="124" height="32" rx="7" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="33" fill="var(--primary-text)">物質</text>'
      + '<rect x="110" y="66" width="150" height="32" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="185" y="87" fill="var(--primary)">純物質</text>'
      + '<rect x="384" y="66" width="150" height="32" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="459" y="87">混合物</text>'
      + '<rect x="24" y="124" width="140" height="32" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="94" y="145">単体</text>'
      + '<rect x="184" y="124" width="140" height="32" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="254" y="145">化合物</text>'
      + '<line x1="290" y1="44" x2="200" y2="62" stroke="var(--muted)"/>'
      + '<line x1="350" y1="44" x2="444" y2="62" stroke="var(--muted)"/>'
      + '<line x1="160" y1="98" x2="110" y2="120" stroke="var(--muted)"/>'
      + '<line x1="210" y1="98" x2="250" y2="120" stroke="var(--muted)"/>'
      + '<text x="94" y="172" font-size="11" fill="var(--muted)">O₂ Fe</text>'
      + '<text x="254" y="172" font-size="11" fill="var(--muted)">H₂O NaCl</text>'
      + '<text x="459" y="124" font-size="11" fill="var(--muted)">空気・海水・合金</text>'
      + '<text x="459" y="144" font-size="11" fill="var(--muted)">※同素体（O₂とO₃など）は</text>'
      + '<text x="459" y="160" font-size="11" fill="var(--muted)">　同じ元素の別の単体</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '分離と精製の方法',
    cap: '何の性質の違いを利用するのかを押さえると、選び方に迷わない。',
    head: ['方法', '利用する性質', '例'],
    rows: [
      ['ろ過', '粒の大きさ（溶ける／溶けない）', '泥水から砂を除く'],
      ['蒸留・分留', '沸点の違い', '海水から水、原油の分留'],
      ['再結晶', '温度による溶解度の違い', '硝酸カリウムの精製'],
      ['抽出', '溶媒への溶けやすさの違い', 'ヨウ素をヘキサンに移す'],
      ['昇華法', '固体から直接気体になる性質', 'ヨウ素、ナフタレン'],
      ['クロマトグラフィー', '吸着のしやすさの違い', '色素の分離'],
    ] },
],

genshikouzou: [
  { at: 'ov', k: 'photo', t: 'メンデレーエフ', src: 'img/periodic.jpg',
    cap: '1869年に周期表を発表。当時未発見の元素の性質まで予言し、のちに的中して周期律の正しさが認められた。', credit: 'ウィキメディア・コモンズ「Dmitri Mendeleev 1890s.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '電子配置の決まり',
    cap: '内側の殻から順に入り、各殻の最大数は 2n² になる。価電子の数が性質を決める。',
    head: ['殻', 'n', '最大の電子数', '例'],
    rows: [
      ['K殻', '1', '2', 'He（2）'],
      ['L殻', '2', '8', 'Ne（2,8）'],
      ['M殻', '3', '18', 'Ar（2,8,8）※最外殻は8で安定'],
      ['N殻', '4', '32', 'Kr'],
    ] },
  { at: 'sec2', k: 'svg', t: '周期表のなかの傾向',
    cap: '右上へ行くほど電子を引きつける力が強く、左下へ行くほど電子を手放しやすい。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="周期表の傾向の図">'
      + '<defs><marker id="ar-ch" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="70" y="34" width="420" height="110" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="90" y="56" font-size="11" fill="var(--muted)">1族</text>'
      + '<text x="452" y="56" font-size="11" fill="var(--muted)">18族</text>'
      + '<line x1="90" y1="76" x2="470" y2="76" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-ch)"/>'
      + '<text x="200" y="70" font-size="11.5" fill="var(--primary)">イオン化エネルギー・電気陰性度が大きくなる</text>'
      + '<line x1="110" y1="56" x2="110" y2="132" stroke="var(--accent)" stroke-width="2" marker-end="url(#ar-ch)"/>'
      + '<text x="124" y="118" font-size="11.5" fill="var(--accent)">原子半径が大きくなる</text>'
      + '<text x="510" y="80" font-size="11.5">右上＝非金属性</text>'
      + '<text x="510" y="104" font-size="11.5">左下＝金属性</text>'
      + '<text x="320" y="176" text-anchor="middle" font-size="11.5" fill="var(--muted)">貴ガス（18族）は最外殻が満たされており、ほとんど反応しない</text>'
      + '</g></svg>' },
],

ketsugou: [
  { at: 'ov', k: 'photo', t: '塩化ナトリウムの結晶構造', src: 'img/crystal.jpg',
    cap: 'ナトリウムイオンと塩化物イオンが交互に並ぶ。分子というまとまりはなく、全体が一つの結晶になっている。', credit: 'ウィキメディア・コモンズ「Sodium-chloride-unit-cell-3D-balls-and-sticks.png」（Public domain）' },
  { at: 'sec0', k: 'table', t: '化学結合の種類',
    cap: '何と何が、どんな力で結びついているかで分ける。結晶の性質がそこから決まる。',
    head: ['結合', '結びつくもの', '力の正体', '例'],
    rows: [
      ['イオン結合', '陽イオンと陰イオン', '静電気力（クーロン力）', 'NaCl、CaO'],
      ['共有結合', '非金属どうし', '電子対を共有', 'H₂O、ダイヤモンド'],
      ['金属結合', '金属原子', '自由電子', 'Fe、Cu'],
      ['配位結合', '一方が電子対を出す', '共有結合と同じ', 'NH₄⁺、H₃O⁺'],
      ['水素結合', 'F・O・Nと水素', '分子間力の一種（強い）', '水、DNA'],
      ['ファンデルワールス力', 'すべての分子', '弱い引力', 'ヨウ素、ドライアイス'],
    ] },
  { at: 'sec2', k: 'table', t: '結晶の種類と性質',
    cap: '融点・硬さ・電気伝導性を、結合の強さから説明できるようにする。',
    head: ['結晶', '融点', '硬さ', '電気伝導'],
    rows: [
      ['イオン結晶', '高い', 'かたいがもろい', '固体✕／融解・水溶液○'],
      ['共有結合の結晶', 'とても高い', 'とてもかたい', '✕（黒鉛は○）'],
      ['金属結晶', '幅がある', '展性・延性', '○'],
      ['分子結晶', '低い', 'やわらかい', '✕'],
    ] },
],

mol: [
  { at: 'ov', k: 'svg', t: '物質量をはさんだ換算',
    cap: 'molを中心に置くと、質量・粒子数・気体の体積のどれからどれへでも行ける。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="物質量の換算の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="250" y="80" width="140" height="44" rx="9" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="108" fill="var(--primary-text)">物質量［mol］</text>'
      + '<rect x="24" y="80" width="150" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="99" y="108">質量［g］</text>'
      + '<rect x="466" y="80" width="150" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="541" y="108">粒子の数［個］</text>'
      + '<rect x="250" y="16" width="140" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="44">気体の体積［L］</text>'
      + '<line x1="176" y1="102" x2="246" y2="102" stroke="var(--muted)"/>'
      + '<text x="211" y="94" font-size="10.5" fill="var(--muted)">÷モル質量</text>'
      + '<line x1="394" y1="102" x2="462" y2="102" stroke="var(--muted)"/>'
      + '<text x="428" y="94" font-size="10.5" fill="var(--muted)">×6.0×10²³</text>'
      + '<line x1="320" y1="62" x2="320" y2="78" stroke="var(--muted)"/>'
      + '<text x="396" y="72" font-size="10.5" fill="var(--muted)">×22.4（標準状態）</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">モル濃度［mol/L］＝ 溶質の物質量 ÷ 溶液の体積</text>'
      + '<text x="320" y="186" font-size="11.5" fill="var(--muted)">質量パーセント濃度［％］＝ 溶質の質量 ÷ 溶液の質量 × 100</text>'
      + '</g></svg>' },
],

sanenki: [
  { at: 'ov', k: 'table', t: '酸と塩基の三つの定義',
    cap: '定義が広がるほど、扱える反応の範囲も広がる。',
    head: ['定義', '酸', '塩基'],
    rows: [
      ['アレニウス', '水中で H⁺ を出す', '水中で OH⁻ を出す'],
      ['ブレンステッド・ローリー', 'H⁺ を与える', 'H⁺ を受け取る'],
      ['ルイス', '電子対を受け取る', '電子対を与える'],
    ] },
  { at: 'sec1', k: 'svg', t: 'pHと水のイオン積',
    cap: '25℃では [H⁺][OH⁻] ＝ 1.0×10⁻¹⁴。片方が決まればもう片方も決まる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="pHの尺度の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="40" y="50" width="240" height="30" fill="var(--bad-soft)" stroke="var(--border)"/>'
      + '<rect x="280" y="50" width="80" height="30" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<rect x="360" y="50" width="240" height="30" fill="var(--good-soft)" stroke="var(--border)"/>'
      + '<text x="160" y="70" text-anchor="middle" font-size="12">酸性</text>'
      + '<text x="320" y="70" text-anchor="middle" font-size="12">中性</text>'
      + '<text x="480" y="70" text-anchor="middle" font-size="12">塩基性</text>'
      + '<text x="40" y="100" font-size="11" fill="var(--muted)">pH 0</text>'
      + '<text x="306" y="100" font-size="11" fill="var(--muted)">7</text>'
      + '<text x="580" y="100" font-size="11" fill="var(--muted)">14</text>'
      + '<text x="40" y="132" font-size="12">pH ＝ －log₁₀[H⁺]</text>'
      + '<text x="300" y="132" font-size="12">[H⁺][OH⁻] ＝ 1.0×10⁻¹⁴ （25℃）</text>'
      + '<text x="40" y="164" font-size="11.5" fill="var(--muted)">pHが1小さいと、水素イオン濃度は10倍になる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '中和滴定の指示薬',
    cap: '中和点が酸性側か塩基性側かで、使える指示薬が決まる。',
    head: ['組み合わせ', '塩の性質', '中和点', '指示薬'],
    rows: [
      ['強酸＋強塩基', '中性', 'pH7', 'どちらでもよい'],
      ['弱酸＋強塩基', '塩基性', 'pH7より大', 'フェノールフタレイン'],
      ['強酸＋弱塩基', '酸性', 'pH7より小', 'メチルオレンジ'],
    ] },
],

sanka: [
  { at: 'ov', k: 'table', t: '酸化と還元の整理',
    cap: '酸素・水素・電子・酸化数、どの見方でも同じことを言っている。',
    head: ['見方', '酸化された', '還元された'],
    rows: [
      ['酸素', '受け取った', '失った'],
      ['水素', '失った', '受け取った'],
      ['電子', '失った', '受け取った'],
      ['酸化数', '増えた', '減った'],
    ] },
  { at: 'sec2', k: 'svg', t: 'イオン化傾向',
    cap: '左ほど electron を失いやすい。並びから、どの金属がどの反応を起こすか読める。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="金属のイオン化傾向の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="24" y="36" width="592" height="34" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="59" text-anchor="middle" font-size="12.5" fill="var(--primary)">'
      + 'K Ca Na Mg Al Zn Fe Ni Sn Pb (H) Cu Hg Ag Pt Au</text>'
      + '<text x="36" y="92" font-size="11" fill="var(--muted)">大きい（イオンになりやすい）</text>'
      + '<text x="604" y="92" font-size="11" fill="var(--muted)" text-anchor="end">小さい</text>'
      + '<text x="36" y="124" font-size="11.5">水と反応　K・Ca・Na（常温）／Mg（熱水）／Al・Zn・Fe（高温の水蒸気）</text>'
      + '<text x="36" y="146" font-size="11.5">塩酸・希硫酸に溶ける　（H）より左</text>'
      + '<text x="36" y="168" font-size="11.5">王水にのみ溶ける　Pt・Au</text>'
      + '</g></svg>' },
],

denchi: [
  { at: 'ov', k: 'svg', t: 'ダニエル電池',
    cap: 'イオン化傾向の大きい亜鉛が溶け、電子が導線を通って銅板へ流れる。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ダニエル電池の図">'
      + '<defs><marker id="ar-dn" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="90" y="70" width="170" height="104" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<rect x="380" y="70" width="170" height="104" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<rect x="260" y="104" width="120" height="30" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="124" font-size="10.5" fill="var(--muted)">素焼き板</text>'
      + '<rect x="166" y="50" width="16" height="104" fill="var(--muted)"/>'
      + '<text x="174" y="44" font-size="11.5">Zn（－）</text>'
      + '<rect x="458" y="50" width="16" height="104" fill="var(--accent)"/>'
      + '<text x="466" y="44" font-size="11.5">Cu（＋）</text>'
      + '<path d="M174,42 L174,22 L466,22 L466,42" fill="none" stroke="var(--primary)" stroke-width="2"/>'
      + '<line x1="250" y1="22" x2="300" y2="22" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-dn)"/>'
      + '<text x="320" y="16" font-size="11" fill="var(--primary)">電子 e⁻</text>'
      + '<text x="140" y="192" font-size="11">Zn → Zn²⁺ ＋ 2e⁻（酸化）</text>'
      + '<text x="500" y="192" font-size="11">Cu²⁺ ＋ 2e⁻ → Cu（還元）</text>'
      + '<text x="140" y="164" font-size="10.5" fill="var(--muted)">ZnSO₄水溶液</text>'
      + '<text x="500" y="164" font-size="10.5" fill="var(--muted)">CuSO₄水溶液</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: 'おもな実用電池',
    cap: '一次電池は使い切り、二次電池は充電できる。負極・正極の材料で見分ける。',
    head: ['電池', '種類', '負極', '正極', '起電力'],
    rows: [
      ['マンガン乾電池', '一次', 'Zn', 'MnO₂', '約1.5V'],
      ['アルカリマンガン乾電池', '一次', 'Zn', 'MnO₂', '約1.5V'],
      ['鉛蓄電池', '二次', 'Pb', 'PbO₂', '約2.0V'],
      ['リチウムイオン電池', '二次', '黒鉛', 'コバルト酸リチウム', '約3.7V'],
      ['燃料電池', '—', 'H₂', 'O₂', '約1.2V'],
    ] },
],

netsukagaku: [
  { at: 'ov', k: 'svg', t: 'ヘスの法則',
    cap: '反応の経路によらず、出入りする熱の総量は等しい。だから回り道でも計算できる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ヘスの法則の図">'
      + '<defs><marker id="ar-he2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="34" width="130" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="105" y="59">反応物</text>'
      + '<rect x="470" y="34" width="130" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="535" y="59">生成物</text>'
      + '<rect x="255" y="120" width="130" height="40" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="145">途中の物質</text>'
      + '<line x1="174" y1="54" x2="464" y2="54" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-he2)"/>'
      + '<text x="320" y="44" font-size="11.5" fill="var(--primary)">ΔH（直接）</text>'
      + '<line x1="120" y1="78" x2="250" y2="118" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar-he2)"/>'
      + '<text x="150" y="110" font-size="11" fill="var(--muted)">ΔH₁</text>'
      + '<line x1="390" y1="118" x2="520" y2="78" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar-he2)"/>'
      + '<text x="490" y="110" font-size="11" fill="var(--muted)">ΔH₂</text>'
      + '<text x="320" y="178" font-size="12">ΔH ＝ ΔH₁ ＋ ΔH₂</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '反応熱の種類',
    cap: '「何1molあたり」なのかが、種類ごとに決まっている。',
    head: ['反応熱', '基準', '例'],
    rows: [
      ['生成熱', '化合物1molが単体からできるとき', 'CO₂の生成熱'],
      ['燃焼熱', '物質1molが完全燃焼するとき', 'メタンの燃焼熱'],
      ['中和熱', '水1molが生じるとき', '約56.5 kJ/mol'],
      ['溶解熱', '物質1molが多量の水に溶けるとき', 'NaOHの溶解熱'],
    ] },
],

sokudo: [
  { at: 'ov', k: 'svg', t: '活性化エネルギーと触媒',
    cap: '触媒は山を低くする。反応熱（始めと終わりの差）は変えない。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="活性化エネルギーの図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="60" y1="170" x2="600" y2="170" stroke="var(--border)"/>'
      + '<line x1="60" y1="24" x2="60" y2="170" stroke="var(--border)"/>'
      + '<text x="30" y="24" font-size="11" fill="var(--muted)">E</text>'
      + '<path d="M80,120 Q200,30 320,120 Q440,150 580,146" fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<path d="M80,120 Q200,74 320,120" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-dasharray="6 4"/>'
      + '<line x1="80" y1="120" x2="580" y2="120" stroke="var(--muted)" stroke-dasharray="3 3"/>'
      + '<line x1="200" y1="46" x2="200" y2="120" stroke="var(--primary)"/>'
      + '<text x="210" y="80" font-size="11.5" fill="var(--primary)">活性化エネルギー</text>'
      + '<text x="210" y="100" font-size="11" fill="var(--accent)">触媒があると小さくなる</text>'
      + '<line x1="560" y1="120" x2="560" y2="146" stroke="var(--muted)"/>'
      + '<text x="470" y="166" font-size="11.5" fill="var(--muted)">反応熱（変わらない）</text>'
      + '<text x="76" y="112" font-size="11" fill="var(--muted)">反応物</text>'
      + '<text x="560" y="140" font-size="11" fill="var(--muted)" text-anchor="end">生成物</text>'
      + '<text x="320" y="192" text-anchor="middle" font-size="11.5" fill="var(--muted)">温度を上げると、活性化エネルギーを超える分子の割合が増えて速くなる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: 'ルシャトリエの原理',
    cap: '条件を変えると、その変化をやわらげる向きに平衡が動く。',
    head: ['変えたもの', '平衡が動く向き'],
    rows: [
      ['濃度を増やす', 'それを減らす向き'],
      ['圧力を上げる', '気体分子の数が減る向き'],
      ['温度を上げる', '吸熱の向き'],
      ['触媒を加える', '動かない（速く平衡に達するだけ）'],
    ] },
],

kitai: [
  { at: 'ov', k: 'table', t: '希薄溶液の性質',
    cap: 'どれも「溶けている粒子の数」で決まり、何が溶けているかにはよらない（束一的性質）。',
    head: ['性質', '内容', '式'],
    rows: [
      ['蒸気圧降下', '溶媒の蒸気圧が下がる', '—'],
      ['沸点上昇', '沸点が上がる', 'Δt ＝ Kb·m'],
      ['凝固点降下', '凝固点が下がる', 'Δt ＝ Kf·m'],
      ['浸透圧', '半透膜を通って溶媒が移動', 'ΠV ＝ nRT'],
    ] },
  { at: 'sec1', k: 'svg', t: '気体の溶解度（ヘンリーの法則）',
    cap: '溶ける気体の物質量は圧力に比例する。ただし体積で測ると、その圧力のもとでは一定になる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ヘンリーの法則の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="70" y1="140" x2="330" y2="140" stroke="var(--border)"/>'
      + '<line x1="70" y1="26" x2="70" y2="140" stroke="var(--border)"/>'
      + '<line x1="70" y1="140" x2="300" y2="40" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="40" y="26" font-size="11" fill="var(--muted)">物質量</text>'
      + '<text x="336" y="144" font-size="11" fill="var(--muted)">圧力</text>'
      + '<text x="380" y="60" font-size="11.5">溶ける量［mol］は圧力に比例する</text>'
      + '<text x="380" y="88" font-size="11.5" fill="var(--muted)">溶解度が小さい気体にだけ成り立つ</text>'
      + '<text x="380" y="112" font-size="11.5" fill="var(--muted)">（アンモニアや塩化水素では成り立たない）</text>'
      + '<text x="380" y="140" font-size="11.5" fill="var(--muted)">温度を上げると溶解度は小さくなる</text>'
      + '</g></svg>' },
],

muki1: [
  { at: 'ov', k: 'table', t: 'ハロゲンの性質',
    cap: '原子番号が大きいほど酸化力は弱まり、沸点は高くなる。',
    head: ['', 'F₂', 'Cl₂', 'Br₂', 'I₂'],
    rows: [
      ['常温の状態', '気体（淡黄）', '気体（黄緑）', '液体（赤褐）', '固体（黒紫）'],
      ['酸化力', '最も強い', '強い', '中くらい', '弱い'],
      ['水との反応', '激しく反応', '一部が反応', 'わずか', 'ほとんど溶けない'],
      ['水素との反応', '暗所でも爆発', '光を当てると爆発', '加熱で反応', '可逆的'],
    ] },
  { at: 'sec2', k: 'table', t: '気体の性質と捕集法',
    cap: '水に溶けるか、空気より重いかで捕集法が決まる。',
    head: ['気体', '色・におい', '水への溶解', '捕集法'],
    rows: [
      ['H₂', '無色無臭', '溶けにくい', '水上置換'],
      ['O₂', '無色無臭', '溶けにくい', '水上置換'],
      ['CO₂', '無色無臭', '少し溶ける', '下方置換（水上も可）'],
      ['NH₃', '無色・刺激臭', 'よく溶ける（塩基性）', '上方置換'],
      ['Cl₂', '黄緑・刺激臭', '溶ける（酸性）', '下方置換'],
      ['NO', '無色無臭', '溶けにくい', '水上置換'],
      ['NO₂', '赤褐・刺激臭', 'よく溶ける', '下方置換'],
    ] },
],

muki2: [
  { at: 'ov', k: 'table', t: '金属イオンの分離と確認',
    cap: '加える試薬の順序が決まっている。沈殿の色が確認のかぎになる。',
    head: ['加えるもの', '沈殿する金属イオン', '沈殿の色'],
    rows: [
      ['塩酸', 'Ag⁺、Pb²⁺', '白'],
      ['硫化水素（酸性）', 'Cu²⁺、Cd²⁺', '黒、黄'],
      ['アンモニア水', 'Al³⁺、Fe³⁺', '白、赤褐'],
      ['硫化水素（塩基性）', 'Zn²⁺、Fe²⁺', '白、黒'],
      ['炭酸アンモニウム', 'Ca²⁺、Ba²⁺', '白'],
      ['炎色反応', 'Na⁺黄、K⁺赤紫、Ca²⁺橙赤、Sr²⁺紅、Ba²⁺黄緑、Cu²⁺青緑', '—'],
    ] },
  { at: 'sec0', k: 'svg', t: '両性元素',
    cap: '酸にも強塩基にも溶ける金属。「あ、あ、すん、なり」と覚える。',
    svg: '<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="両性元素の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="160" y="26" width="320" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="51" font-size="13" fill="var(--primary)">Al　Zn　Sn　Pb</text>'
      + '<rect x="60" y="86" width="220" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="170" y="112" font-size="11.5">塩酸に溶ける → 水素を発生</text>'
      + '<rect x="360" y="86" width="220" height="42" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="470" y="112" font-size="11.5">水酸化ナトリウムにも溶ける</text>'
      + '<line x1="260" y1="64" x2="200" y2="82" stroke="var(--muted)"/>'
      + '<line x1="380" y1="64" x2="440" y2="82" stroke="var(--muted)"/>'
      + '<text x="320" y="150" font-size="11" fill="var(--muted)">※Al・Fe・Niは濃硝酸で不動態になり、それ以上溶けない</text>'
      + '</g></svg>' },
],

yuuki1: [
  { at: 'ov', k: 'svg', t: '脂肪族化合物のつながり',
    cap: '酸化の向きに並べると、官能基の関係が一本の線になる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="脂肪族化合物の酸化の図">'
      + '<defs><marker id="ar-yu" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="40" width="140" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="84" y="62">第一級アルコール</text><text x="84" y="82" font-size="11" fill="var(--muted)">R–CH₂–OH</text>'
      + '<rect x="190" y="40" width="140" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="260" y="62">アルデヒド</text><text x="260" y="82" font-size="11" fill="var(--muted)">R–CHO</text>'
      + '<rect x="366" y="40" width="140" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="436" y="62" fill="var(--primary)">カルボン酸</text><text x="436" y="82" font-size="11" fill="var(--muted)">R–COOH</text>'
      + '<rect x="520" y="40" width="106" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="573" y="62">エステル</text><text x="573" y="82" font-size="11" fill="var(--muted)">R–COO–R′</text>'
      + '<line x1="156" y1="67" x2="186" y2="67" stroke="var(--primary)" marker-end="url(#ar-yu)"/>'
      + '<line x1="332" y1="67" x2="362" y2="67" stroke="var(--primary)" marker-end="url(#ar-yu)"/>'
      + '<line x1="508" y1="67" x2="516" y2="67" stroke="var(--muted)" marker-end="url(#ar-yu)"/>'
      + '<text x="258" y="34" font-size="10.5" fill="var(--primary)">酸化</text>'
      + '<text x="434" y="34" font-size="10.5" fill="var(--primary)">酸化</text>'
      + '<text x="572" y="34" font-size="10.5" fill="var(--muted)">＋アルコール</text>'
      + '<text x="320" y="128" font-size="11.5" fill="var(--muted)">第二級アルコールを酸化するとケトン（R–CO–R′）になる</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">アルデヒドは還元性をもつ＝銀鏡反応・フェーリング液の還元</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '異性体の種類',
    cap: '分子式が同じでも構造が違う。どこが違うのかで名前が分かれる。',
    head: ['種類', '違い', '例'],
    rows: [
      ['構造異性体（連鎖）', '炭素骨格のつながり方', 'ブタンとイソブタン'],
      ['構造異性体（位置）', '官能基の位置', '1-プロパノールと2-プロパノール'],
      ['構造異性体（官能基）', '官能基の種類', 'エタノールとジメチルエーテル'],
      ['シス-トランス異性体', '二重結合まわりの配置', 'マレイン酸とフマル酸'],
      ['鏡像異性体', '不斉炭素原子をもつ', '乳酸のD体とL体'],
    ] },
],

yuuki2: [
  { at: 'ov', k: 'svg', t: '芳香族化合物の分離',
    cap: '酸と塩基の強さの違いを使って、エーテル層と水層に振り分けていく。',
    svg: '<svg viewBox="0 0 640 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="芳香族化合物の分離の図">'
      + '<defs><marker id="ar-ar" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="230" y="12" width="180" height="32" rx="7" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="33" fill="var(--primary-text)">混合物（エーテル溶液）</text>'
      + '<rect x="30" y="66" width="170" height="44" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="115" y="86">塩酸を加える</text>'
      + '<text x="115" y="102" font-size="10.5" fill="var(--muted)">アニリンが水層へ</text>'
      + '<rect x="230" y="66" width="180" height="44" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="86">炭酸水素ナトリウム水</text>'
      + '<text x="320" y="102" font-size="10.5" fill="var(--muted)">安息香酸が水層へ</text>'
      + '<rect x="440" y="66" width="170" height="44" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="525" y="86">水酸化ナトリウム水</text>'
      + '<text x="525" y="102" font-size="10.5" fill="var(--muted)">フェノールが水層へ</text>'
      + '<line x1="270" y1="44" x2="150" y2="62" stroke="var(--muted)" marker-end="url(#ar-ar)"/>'
      + '<line x1="320" y1="44" x2="320" y2="62" stroke="var(--muted)" marker-end="url(#ar-ar)"/>'
      + '<line x1="370" y1="44" x2="490" y2="62" stroke="var(--muted)" marker-end="url(#ar-ar)"/>'
      + '<rect x="200" y="132" width="240" height="40" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="157" fill="var(--primary)">エーテル層に残るのは中性のニトロベンゼンなど</text>'
      + '<text x="320" y="194" font-size="11" fill="var(--muted)">酸の強さ　塩酸 ＞ 炭酸 ＞ フェノール　という順序が分離のかぎ</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: 'ベンゼンの反応',
    cap: '不飽和結合をもつのに付加より置換が起きやすい。これが芳香族の特徴である。',
    head: ['反応', '試薬', '生成物'],
    rows: [
      ['ニトロ化', '濃硝酸＋濃硫酸', 'ニトロベンゼン'],
      ['スルホン化', '濃硫酸', 'ベンゼンスルホン酸'],
      ['ハロゲン化', 'Cl₂＋鉄粉', 'クロロベンゼン'],
      ['アルキル化', 'ハロゲン化アルキル＋AlCl₃', 'トルエンなど'],
      ['付加（例外）', 'H₂＋Ni触媒', 'シクロヘキサン'],
    ] },
],

koubunshi: [
  { at: 'ov', k: 'table', t: '合成高分子の分類',
    cap: '重合のしかたと、できる結合の種類で整理する。',
    head: ['重合', 'しくみ', '例'],
    rows: [
      ['付加重合', '二重結合が開いてつながる', 'ポリエチレン、ポリ塩化ビニル'],
      ['縮合重合', '水などが取れてつながる', 'ナイロン66、ポリエチレンテレフタラート'],
      ['開環重合', '環が開いてつながる', 'ナイロン6'],
      ['付加縮合', '付加と縮合が交互に', 'フェノール樹脂、尿素樹脂'],
    ] },
  { at: 'sec0', k: 'svg', t: '天然高分子の三つのなかま',
    cap: '単量体が何で、どんな結合でつながるかを押さえる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="天然高分子の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="30" width="196" height="94" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="112" y="54" font-size="12.5">多糖類</text>'
      + '<text x="112" y="78" font-size="11" fill="var(--muted)">単量体＝グルコース</text>'
      + '<text x="112" y="98" font-size="11" fill="var(--muted)">グリコシド結合</text>'
      + '<text x="112" y="116" font-size="11" fill="var(--muted)">デンプン・セルロース</text>'
      + '<rect x="222" y="30" width="196" height="94" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="54" font-size="12.5" fill="var(--primary)">タンパク質</text>'
      + '<text x="320" y="78" font-size="11" fill="var(--muted)">単量体＝α-アミノ酸</text>'
      + '<text x="320" y="98" font-size="11" fill="var(--muted)">ペプチド結合</text>'
      + '<text x="320" y="116" font-size="11" fill="var(--muted)">酵素・繊維状タンパク質</text>'
      + '<rect x="430" y="30" width="196" height="94" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="528" y="54" font-size="12.5">核酸</text>'
      + '<text x="528" y="78" font-size="11" fill="var(--muted)">単量体＝ヌクレオチド</text>'
      + '<text x="528" y="98" font-size="11" fill="var(--muted)">リン酸エステル結合</text>'
      + '<text x="528" y="116" font-size="11" fill="var(--muted)">DNA・RNA</text>'
      + '<text x="320" y="158" font-size="11.5" fill="var(--muted)">検出＝ヨウ素デンプン反応、ビウレット反応、キサントプロテイン反応</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
