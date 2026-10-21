/* 世界史 ― 単元の説明に添える図・表・写真
   単元id → 図版の配列。at は 'ov'（概要タブ）か 'sec0' 'sec1' …（詳細タブの節の下）。
   k は 'table' / 'svg' / 'photo'。写真は img/ に置き、保護期間の切れたものだけを使う。
   credit は tools/ のスクリプトが img/_credit.json から埋める。
*/
const FIGS = {

orient: [
  { at: 'sec0', k: 'map', t: '地図：肥沃な三日月地帯',
    cap: '二つの大河にはさまれた弧の形をした一帯。東西南北どこからも入りやすい地形だった。',
    svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="肥沃な三日月地帯の略図">'
      + '<rect x="0" y="0" width="640" height="250" fill="var(--surface2)"/>'
      + '<g fill="none" stroke="var(--border)" stroke-width="1.5">'
      + '<path d="M60,210 Q150,60 330,52 Q500,46 580,150" stroke="var(--primary)" stroke-width="22" stroke-linecap="round" opacity="0.18"/>'
      + '</g>'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<path d="M110,205 Q150,120 215,80" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<path d="M140,210 Q180,125 245,85" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<text x="150" y="150" font-size="11.5" fill="var(--primary)">ティグリス川</text>'
      + '<text x="60" y="130" font-size="11.5" fill="var(--primary)">ユーフラテス川</text>'
      + '<path d="M560,60 Q545,130 552,215" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<text x="566" y="140" font-size="11.5" fill="var(--primary)">ナイル川</text>'
      + '<circle cx="128" cy="196" r="5" fill="var(--primary)"/><text x="138" y="200">ウル</text>'
      + '<circle cx="168" cy="150" r="5" fill="var(--primary)"/><text x="178" y="154">バビロン</text>'
      + '<circle cx="245" cy="85" r="5" fill="var(--primary)"/><text x="255" y="78">ニネヴェ</text>'
      + '<circle cx="400" cy="66" r="5" fill="var(--muted)"/><text x="410" y="60">ヒッタイト</text>'
      + '<circle cx="545" cy="205" r="5" fill="var(--primary)"/><text x="470" y="222">メンフィス</text>'
      + '<text x="300" y="36" text-anchor="middle" font-size="13" fill="var(--muted)">肥沃な三日月地帯</text>'
      + '<text x="330" y="150" font-size="11.5" fill="var(--muted)">シリア砂漠</text>'
      + '<text x="60" y="235" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'ハンムラビ法典碑（上部）', src: 'img/hammurabi.jpg',
    cap: '玉座の太陽神シャマシュから、王ハンムラビが法を授かる場面。下に楔形文字で282条が刻まれている。', credit: 'ウィキメディア・コモンズ「Milkau Oberer Teil der Stele mit dem Text von Hammurapis Gesetzescode 369-2.jpg」（Public domain）' },
  { at: 'ov', k: 'table', t: '四大文明のくらべかた',
    cap: 'どれも大河のほとりで生まれたが、地形の違いが歴史の形を分けた。',
    head: ['文明', '川', '時期', '文字', '歴史の特徴'],
    rows: [
      ['メソポタミア', 'ティグリス・ユーフラテス', '前3500年ごろ〜', '楔形文字', '四方に開け、支配者が次々に交代'],
      ['エジプト', 'ナイル', '前3000年ごろ〜', '神聖文字', '砂漠と海に守られ、約3000年続く'],
      ['インダス', 'インダス', '前2600年ごろ〜', 'インダス文字（未解読）', '計画都市。衰退の理由は不明'],
      ['中国', '黄河・長江', '前1600年ごろ〜', '甲骨文字', '王朝は交代しつつ文字文化は連続'],
    ] },
  { at: 'sec3', k: 'svg', t: 'オリエント統一までの流れ',
    cap: '分立していたオリエントは、アッシリアが初めて統一し、4国分立を経てアケメネス朝が再統一した。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="オリエント統一の流れ図">'
      + '<defs><marker id="ar-or" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="13" fill="var(--text)" text-anchor="middle">'
      + '<rect x="8" y="14" width="130" height="46" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="73" y="34">諸民族の分立</text><text x="73" y="51" font-size="11" fill="var(--muted)">エジプト・ヒッタイトなど</text>'
      + '<rect x="178" y="14" width="130" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="243" y="34" fill="var(--primary)">アッシリア</text><text x="243" y="51" font-size="11" fill="var(--muted)">前7世紀・最初の統一</text>'
      + '<rect x="348" y="14" width="130" height="46" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="413" y="34">4国分立</text><text x="413" y="51" font-size="11" fill="var(--muted)">前612年の滅亡後</text>'
      + '<rect x="502" y="14" width="130" height="46" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="567" y="34" fill="var(--primary)">アケメネス朝</text><text x="567" y="51" font-size="11" fill="var(--muted)">前550年・再統一</text>'
      + '<line x1="140" y1="37" x2="174" y2="37" stroke="var(--muted)" marker-end="url(#ar-or)"/>'
      + '<line x1="310" y1="37" x2="344" y2="37" stroke="var(--muted)" marker-end="url(#ar-or)"/>'
      + '<line x1="480" y1="37" x2="498" y2="37" stroke="var(--muted)" marker-end="url(#ar-or)"/>'
      + '<text x="320" y="88" font-size="12" fill="var(--muted)">4国＝リディア・メディア・新バビロニア・エジプト</text>'
      + '<rect x="70" y="110" width="500" height="74" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="134" font-size="12.5">統治のしかたの違いが、続いた長さを分けた</text>'
      + '<text x="320" y="155" font-size="11.5" fill="var(--muted)">アッシリア＝強制移住と重税 → 各地が反発し、統一から約60年で崩壊</text>'
      + '<text x="320" y="173" font-size="11.5" fill="var(--muted)">アケメネス朝＝貢納を納めれば自治と信仰を認める → 約200年続く</text>'
      + '</g></svg>' },
],

'ancient-asia': [
  { at: 'ov', k: 'map', t: '地図：古代インドと中国',
    cap: 'インダス川・ガンジス川の流域と、黄河・長江の流域。どちらも大河のほとりで国家が育った。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="古代インドと中国の略図">'
      + '<rect x="0" y="0" width="640" height="230" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<path d="M80,40 Q60,120 120,200" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<text x="34" y="120" font-size="11.5" fill="var(--primary)">インダス川</text>'
      + '<path d="M140,70 Q200,100 250,120" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<text x="170" y="92" font-size="11.5" fill="var(--primary)">ガンジス川</text>'
      + '<circle cx="95" cy="95" r="5" fill="var(--primary)"/><text x="104" y="92">ハラッパー</text>'
      + '<circle cx="110" cy="160" r="5" fill="var(--primary)"/><text x="119" y="164">モエンジョ＝ダーロ</text>'
      + '<circle cx="232" cy="113" r="5" fill="var(--muted)"/><text x="196" y="138">マガダ国</text>'
      + '<path d="M400,60 Q470,80 560,70" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<text x="430" y="52" font-size="11.5" fill="var(--primary)">黄河</text>'
      + '<path d="M400,150 Q480,170 580,150" stroke="var(--primary)" stroke-width="2.5" fill="none"/>'
      + '<text x="430" y="186" font-size="11.5" fill="var(--primary)">長江</text>'
      + '<circle cx="455" cy="70" r="5" fill="var(--primary)"/><text x="464" y="66">殷墟</text>'
      + '<circle cx="415" cy="64" r="5" fill="var(--muted)"/><text x="360" y="80">鎬京</text>'
      + '<text x="135" y="206" text-anchor="middle" font-size="13" fill="var(--muted)">インド</text>'
      + '<text x="490" y="206" text-anchor="middle" font-size="13" fill="var(--muted)">中国</text>'
      + '<line x1="300" y1="30" x2="300" y2="200" stroke="var(--border)" stroke-dasharray="4 4"/>'
      + '<text x="306" y="30" font-size="11" fill="var(--muted)">ヒマラヤ山脈</text>'
      + '<text x="20" y="222" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: '孔子', src: 'img/confucius.jpg',
    cap: '唐代の呉道子が描いたとされる像の拓本。儒家の祖として、以後二千年の東アジアの規範になった。', credit: 'ウィキメディア・コモンズ「Confucius Tang Dynasty, black print.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'インドの三つの宗教',
    cap: 'バラモン教への批判から仏教とジャイナ教が生まれ、やがてバラモン教が土着信仰を取りこんでヒンドゥー教になる。',
    head: ['宗教', '成立', '開祖', '身分制度への態度', '特徴'],
    rows: [
      ['バラモン教', '前1000年ごろ', '—', 'ヴァルナ制を支える', 'ヴェーダと祭式が中心'],
      ['仏教', '前5世紀ごろ', 'ガウタマ=シッダールタ', '否定', '八正道・中道。苦の原因を断つ'],
      ['ジャイナ教', '前5世紀ごろ', 'ヴァルダマーナ', '否定', '徹底した不殺生と苦行'],
      ['ヒンドゥー教', '4世紀ごろ', '—', 'カースト制と結びつく', '多神教。シヴァ・ヴィシュヌ信仰'],
    ] },
  { at: 'sec2', k: 'svg', t: '諸子百家のおもな立場',
    cap: '春秋・戦国の乱世をどう収めるかという同じ問いに、まったく違う答えが出された。',
    svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="諸子百家の比較図">'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<text x="320" y="20" text-anchor="middle" font-size="13" fill="var(--muted)">問い：乱れた世をどう治めるか</text>'
      + '<rect x="10" y="36" width="200" height="88" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="24" y="58" font-size="14" fill="var(--primary)">儒家</text>'
      + '<text x="24" y="79">孔子・孟子・荀子</text>'
      + '<text x="24" y="99" font-size="11.5" fill="var(--muted)">仁と礼で、人の心を正す</text>'
      + '<text x="24" y="116" font-size="11.5" fill="var(--muted)">漢以後、国家の学問になる</text>'
      + '<rect x="222" y="36" width="200" height="88" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="236" y="58" font-size="14">法家</text>'
      + '<text x="236" y="79">商鞅・韓非・李斯</text>'
      + '<text x="236" y="99" font-size="11.5" fill="var(--muted)">法と刑罰で、力ずくで治める</text>'
      + '<text x="236" y="116" font-size="11.5" fill="var(--muted)">秦の統一を支えた</text>'
      + '<rect x="434" y="36" width="196" height="88" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="448" y="58" font-size="14">道家</text>'
      + '<text x="448" y="79">老子・荘子</text>'
      + '<text x="448" y="99" font-size="11.5" fill="var(--muted)">作為を捨て、自然に任せる</text>'
      + '<text x="448" y="116" font-size="11.5" fill="var(--muted)">無為自然</text>'
      + '<rect x="10" y="136" width="200" height="60" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="24" y="158" font-size="14">墨家</text>'
      + '<text x="24" y="178" font-size="11.5" fill="var(--muted)">兼愛・非攻。差別のない愛</text>'
      + '<rect x="222" y="136" width="200" height="60" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="236" y="158" font-size="14">兵家</text>'
      + '<text x="236" y="178" font-size="11.5" fill="var(--muted)">孫子。戦わずに勝つ</text>'
      + '<rect x="434" y="136" width="196" height="60" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="448" y="158" font-size="14">縦横家</text>'
      + '<text x="448" y="178" font-size="11.5" fill="var(--muted)">蘇秦の合従、張儀の連衡</text>'
      + '<text x="320" y="222" text-anchor="middle" font-size="11.5" fill="var(--muted)">性善説（孟子）と性悪説（荀子）の対立が、儒家と法家の分かれ目になった</text>'
      + '</g></svg>' },
],

'greece-rome': [
  { at: 'sec2', k: 'map', t: '地図：ローマが地中海を囲むまで',
    cap: 'イタリア半島の一都市が、三度のポエニ戦争を経て地中海全域を「われらの海」と呼ぶに至る。',
    svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ローマの地中海支配の略図">'
      + '<rect x="0" y="0" width="640" height="250" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<ellipse cx="320" cy="140" rx="268" ry="62" fill="var(--primary-soft)" stroke="var(--primary)" stroke-dasharray="5 4"/>'
      + '<text x="320" y="145" text-anchor="middle" font-size="13" fill="var(--primary)">地中海</text>'
      + '<text x="320" y="164" text-anchor="middle" font-size="11" fill="var(--muted)">「われらの海」</text>'
      + '<rect x="276" y="52" width="86" height="30" rx="6" fill="var(--surface)" stroke="var(--primary)"/>'
      + '<text x="319" y="72" text-anchor="middle" fill="var(--primary)">ローマ</text>'
      + '<rect x="60" y="56" width="104" height="26" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="112" y="74" text-anchor="middle" font-size="11.5">ヒスパニア</text>'
      + '<rect x="420" y="50" width="104" height="26" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="472" y="68" text-anchor="middle" font-size="11.5">マケドニア</text>'
      + '<rect x="540" y="86" width="90" height="26" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="585" y="104" text-anchor="middle" font-size="11.5">シリア</text>'
      + '<rect x="200" y="198" width="104" height="26" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="252" y="216" text-anchor="middle" font-size="11.5">カルタゴ</text>'
      + '<rect x="470" y="198" width="104" height="26" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="522" y="216" text-anchor="middle" font-size="11.5">エジプト</text>'
      + '<text x="24" y="196" font-size="11.5" fill="var(--muted)">前264〜前146 ポエニ戦争</text>'
      + '<text x="24" y="214" font-size="11.5" fill="var(--muted)">前30 エジプト併合で完成</text>'
      + '<text x="24" y="240" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'パルテノン神殿', src: 'img/parthenon.jpg',
    cap: 'ペリクロスの時代にアテネのアクロポリスに建てられた。市民が政治を担う都市の象徴である。', credit: 'ウィキメディア・コモンズ「Athens. The Parthenon LOC matpc.15126.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'アテネ民主政ができるまで',
    cap: '戦い方の変化が、政治に参加できる人の範囲を押し広げていった。',
    head: ['時期', '改革者', '内容', '意味'],
    rows: [
      ['前7世紀', 'ドラコン', '慣習法を成文化', '貴族の恣意ではなく、法が文字で示される'],
      ['前594年', 'ソロン', '債務奴隷の禁止、財産政治', '血統ではなく財産で参政権を決める'],
      ['前6世紀半ば', 'ペイシストラトス', '僭主政', '貴族を抑え、平民を保護'],
      ['前508年', 'クレイステネス', '部族制の再編、陶片追放', '血縁のつながりを断ち、僭主の復活を防ぐ'],
      ['前5世紀半ば', 'ペリクレス', '民会中心、官職に手当', '無産市民も政治に参加できるようになる'],
    ] },
  { at: 'sec3', k: 'svg', t: 'ローマの領域と政体の移り変わり',
    cap: '共和政で地中海を制したローマは、広がりすぎた領域を一人で統べるしくみへと変わっていった。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ローマの政体の移り変わり">'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<line x1="30" y1="112" x2="616" y2="112" stroke="var(--border)" stroke-width="2"/>'
      + '<g text-anchor="middle">'
      + '<rect x="30" y="40" width="120" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="90" y="65">王政</text>'
      + '<rect x="160" y="40" width="200" height="40" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="260" y="58" fill="var(--primary)">共和政</text>'
      + '<text x="260" y="74" font-size="11" fill="var(--muted)">元老院・コンスル・護民官</text>'
      + '<rect x="370" y="40" width="130" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="435" y="58">元首政</text><text x="435" y="74" font-size="11" fill="var(--muted)">プリンキパトゥス</text>'
      + '<rect x="510" y="40" width="106" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="563" y="58">専制君主政</text><text x="563" y="74" font-size="11" fill="var(--muted)">ドミナトゥス</text>'
      + '<text x="90" y="130" font-size="11" fill="var(--muted)">前753〜前509</text>'
      + '<text x="260" y="130" font-size="11" fill="var(--muted)">前509〜前27</text>'
      + '<text x="435" y="130" font-size="11" fill="var(--muted)">前27〜284</text>'
      + '<text x="563" y="130" font-size="11" fill="var(--muted)">284〜476</text>'
      + '</g>'
      + '<text x="320" y="158" text-anchor="middle" font-size="11.5" fill="var(--muted)">ポエニ戦争の勝利で属州が増え、中小農民が没落 → 内乱の一世紀 → オクタウィアヌスの元首政へ</text>'
      + '</g></svg>' },
],

'east-asia': [
  { at: 'sec2', k: 'map', t: '地図：唐と東アジアのつながり',
    cap: '長安を中心に、朝鮮・日本・西域が制度と文物で結ばれた。これを東アジア文化圏という。',
    svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="唐を中心とした東アジアの略図">'
      + '<rect x="0" y="0" width="640" height="240" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<circle cx="300" cy="120" r="62" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="300" y="116" fill="var(--primary)" font-size="14">唐</text>'
      + '<text x="300" y="136" font-size="11" fill="var(--muted)">長安</text>'
      + '<rect x="430" y="52" width="100" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="480" y="68" font-size="12">新羅</text><text x="480" y="82" font-size="10.5" fill="var(--muted)">朝鮮半島を統一</text>'
      + '<rect x="430" y="104" width="100" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="480" y="120" font-size="12">渤海</text><text x="480" y="134" font-size="10.5" fill="var(--muted)">「海東の盛国」</text>'
      + '<rect x="430" y="156" width="100" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="480" y="172" font-size="12">日本</text><text x="480" y="186" font-size="10.5" fill="var(--muted)">遣唐使</text>'
      + '<rect x="70" y="104" width="110" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="125" y="120" font-size="12">西域・中央アジア</text>'
      + '<text x="125" y="134" font-size="10.5" fill="var(--muted)">ソグド商人</text>'
      + '<line x1="362" y1="110" x2="426" y2="74" stroke="var(--muted)"/>'
      + '<line x1="362" y1="120" x2="426" y2="122" stroke="var(--muted)"/>'
      + '<line x1="358" y1="136" x2="426" y2="170" stroke="var(--muted)"/>'
      + '<line x1="238" y1="120" x2="184" y2="120" stroke="var(--muted)"/>'
      + '<text x="320" y="212" font-size="11.5" fill="var(--muted)">共通したもの＝漢字・儒教・仏教・律令</text>'
      + '<text x="320" y="230" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: '唐三彩', src: 'img/terracotta.jpg',
    cap: '唐代の副葬品。西域の人や馬を写した像が多く、国際色ゆたかな長安の空気を伝える。', credit: 'ウィキメディア・コモンズ「Tang Sancai Figure 01.jpg」（CC0）' },
  { at: 'sec0', k: 'table', t: '秦と漢のちがい',
    cap: '秦は急ぎすぎて15年で倒れ、漢はその反省の上に四百年の型をつくった。',
    head: ['', '秦（前221〜前206）', '漢（前202〜220）'],
    rows: [
      ['地方制度', '郡県制（すべて中央が任命）', '郡国制 → 実質的な郡県制へ'],
      ['思想', '法家。焚書坑儒', '儒学を官学に（董仲舒の献策）'],
      ['官吏の採用', '—', '郷挙里選（地方の推薦）'],
      ['おもな事業', '万里の長城、文字・度量衡の統一', '西域経営、塩鉄専売、紙の改良'],
      ['倒れた理由', '重い労役と法に民が耐えられず', '外戚・宦官の専横、黄巾の乱'],
    ] },
  { at: 'sec2', k: 'svg', t: '律令体制のしくみ',
    cap: '隋唐で整った三省六部・均田制・租庸調・府兵制は、そのまま日本の律令国家の手本になった。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="隋唐の律令体制の図">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="250" y="8" width="140" height="34" rx="7" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="30" fill="var(--primary-text)">皇帝</text>'
      + '<line x1="320" y1="42" x2="320" y2="58" stroke="var(--muted)"/>'
      + '<rect x="60" y="58" width="150" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="135" y="80">中書省（起草）</text>'
      + '<rect x="245" y="58" width="150" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="80">門下省（審議）</text>'
      + '<rect x="430" y="58" width="150" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="505" y="80">尚書省（執行）</text>'
      + '<line x1="135" y1="50" x2="505" y2="50" stroke="var(--border)"/>'
      + '<line x1="135" y1="50" x2="135" y2="58" stroke="var(--muted)"/>'
      + '<line x1="505" y1="50" x2="505" y2="58" stroke="var(--muted)"/>'
      + '<line x1="505" y1="92" x2="505" y2="106" stroke="var(--muted)"/>'
      + '<rect x="400" y="106" width="210" height="30" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="505" y="126" font-size="11.5">六部（吏・戸・礼・兵・刑・工）</text>'
      + '<rect x="30" y="152" width="580" height="66" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="174" font-size="12.5">土地・税・兵を一つの台帳でつなぐ</text>'
      + '<text x="320" y="196" font-size="11.5" fill="var(--muted)">均田制（国が口分田を配る）→ 租庸調（穀物・労役・布で納める）→ 府兵制（農民が兵になる）</text>'
      + '<text x="320" y="212" font-size="11.5" fill="var(--muted)">農民が逃げると土地も税も兵も崩れる → 両税法（780年）と募兵制へ</text>'
      + '</g></svg>' },
],

islam: [
  { at: 'sec0', k: 'map', t: '地図：イスラーム世界の広がり',
    cap: 'アラビア半島に始まり、100年ほどでイベリア半島から中央アジアまで達した。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="イスラーム世界の拡大の略図">'
      + '<rect x="0" y="0" width="640" height="230" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<ellipse cx="330" cy="120" rx="290" ry="74" fill="var(--primary-soft)" stroke="var(--primary)" stroke-dasharray="5 4"/>'
      + '<circle cx="330" cy="124" r="7" fill="var(--primary)"/>'
      + '<text x="300" y="150" font-size="12" fill="var(--primary)">メッカ・メディナ</text>'
      + '<text x="300" y="166" font-size="10.5" fill="var(--muted)">622 ヒジュラ</text>'
      + '<text x="60" y="80" font-size="12">イベリア半島</text>'
      + '<text x="60" y="96" font-size="10.5" fill="var(--muted)">711 西ゴートを滅ぼす</text>'
      + '<text x="190" y="196" font-size="12">北アフリカ</text>'
      + '<text x="470" y="80" font-size="12">イラン・中央アジア</text>'
      + '<text x="470" y="96" font-size="10.5" fill="var(--muted)">642 ニハーヴァンドの戦い</text>'
      + '<text x="470" y="190" font-size="12">インド北西部</text>'
      + '<line x1="330" y1="118" x2="140" y2="86" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<line x1="330" y1="130" x2="250" y2="186" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<line x1="340" y1="118" x2="462" y2="86" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<line x1="340" y1="130" x2="462" y2="182" stroke="var(--primary)" stroke-width="1.5"/>'
      + '<text x="20" y="222" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: '岩のドーム（エルサレム）', src: 'img/mosque.jpg',
    cap: '7世紀末にウマイヤ朝が建てた、現存する最古級のイスラーム建築。手前右は鎖のドーム。1900年ごろの写真。', credit: 'ウィキメディア・コモンズ「Jerusalem. Mosquée d’Omar LCCN2003653104.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: 'イスラーム世界のおもな王朝',
    cap: 'カリフの地位をめぐる対立と、各地の自立が重なって、イスラーム世界は多極化していった。',
    head: ['王朝', '時期', '都', '特徴'],
    rows: [
      ['正統カリフ時代', '632〜661', 'メディナ', '選挙でカリフを選ぶ。大征服が始まる'],
      ['ウマイヤ朝', '661〜750', 'ダマスクス', 'アラブ人優位。非アラブ人に重い税'],
      ['アッバース朝', '750〜1258', 'バグダード', 'イスラーム教徒の平等。税制の統一'],
      ['ファーティマ朝', '909〜1171', 'カイロ', 'シーア派。カリフを名のる'],
      ['セルジューク朝', '1038〜1194', 'イスファハーン', 'トルコ系。スルタンの称号を得る'],
      ['オスマン帝国', '1300ごろ〜1922', 'イスタンブル', 'ビザンツ帝国を滅ぼし、三大陸を支配'],
    ] },
  { at: 'sec2', k: 'svg', t: 'イスラーム文化が運んだもの',
    cap: 'ギリシアやインドの知がアラビア語に訳され、改良されて、やがてヨーロッパへ渡った。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="イスラーム文化の媒介を示す図">'
      + '<defs><marker id="ar-is" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="10" y="40" width="150" height="80" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="85" y="64">ギリシア</text>'
      + '<text x="85" y="84" font-size="11" fill="var(--muted)">哲学・医学・天文</text>'
      + '<text x="85" y="102" font-size="11" fill="var(--muted)">アリストテレス</text>'
      + '<rect x="196" y="40" width="150" height="80" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="271" y="64">インド</text>'
      + '<text x="271" y="84" font-size="11" fill="var(--muted)">数字・ゼロの考え</text>'
      + '<rect x="245" y="8" width="150" height="26" rx="6" fill="none" stroke="none"/>'
      + '<rect x="380" y="24" width="120" height="112" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="440" y="50" fill="var(--primary)">イスラーム</text>'
      + '<text x="440" y="72" font-size="11" fill="var(--muted)">翻訳して受けとり</text>'
      + '<text x="440" y="90" font-size="11" fill="var(--muted)">代数学・光学・化学</text>'
      + '<text x="440" y="108" font-size="11" fill="var(--muted)">イブン＝シーナー</text>'
      + '<text x="440" y="126" font-size="11" fill="var(--muted)">イブン＝ルシュド</text>'
      + '<rect x="520" y="40" width="110" height="80" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="575" y="68">ヨーロッパ</text>'
      + '<text x="575" y="88" font-size="11" fill="var(--muted)">12世紀ルネサンス</text>'
      + '<text x="575" y="106" font-size="11" fill="var(--muted)">スコラ学へ</text>'
      + '<line x1="162" y1="80" x2="376" y2="80" stroke="var(--primary)" marker-end="url(#ar-is)"/>'
      + '<line x1="348" y1="80" x2="376" y2="80" stroke="var(--primary)" marker-end="url(#ar-is)"/>'
      + '<line x1="502" y1="80" x2="516" y2="80" stroke="var(--primary)" marker-end="url(#ar-is)"/>'
      + '<text x="320" y="158" font-size="11.5" fill="var(--muted)">アラビア数字・代数（algebra）・アルコールなど、言葉そのものが通り道を示している</text>'
      + '</g></svg>' },
],

'medieval-europe': [
  { at: 'ov', k: 'map', t: '地図：中世の地中海世界は三つに分かれた',
    cap: 'ローマ帝国の跡地は、西ヨーロッパ・ビザンツ・イスラームの三つの世界に分かれて並び立った。',
    svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="中世地中海世界の三分割の略図">'
      + '<rect x="0" y="0" width="640" height="220" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="30" width="190" height="130" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="115" y="56" font-size="14" fill="var(--primary)">西ヨーロッパ世界</text>'
      + '<text x="115" y="80" font-size="11.5" fill="var(--muted)">ローマ＝カトリック教会</text>'
      + '<text x="115" y="100" font-size="11.5" fill="var(--muted)">ゲルマン人の諸国家</text>'
      + '<text x="115" y="120" font-size="11.5" fill="var(--muted)">封建制・荘園制</text>'
      + '<text x="115" y="142" font-size="11.5" fill="var(--muted)">800 カールの戴冠</text>'
      + '<rect x="225" y="30" width="190" height="130" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="56" font-size="14">ビザンツ帝国</text>'
      + '<text x="320" y="80" font-size="11.5" fill="var(--muted)">ギリシア正教</text>'
      + '<text x="320" y="100" font-size="11.5" fill="var(--muted)">皇帝が教会の頂点</text>'
      + '<text x="320" y="120" font-size="11.5" fill="var(--muted)">コンスタンティノープル</text>'
      + '<text x="320" y="142" font-size="11.5" fill="var(--muted)">1453 オスマンに滅ぶ</text>'
      + '<rect x="430" y="30" width="190" height="130" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="525" y="56" font-size="14">イスラーム世界</text>'
      + '<text x="525" y="80" font-size="11.5" fill="var(--muted)">カリフ・スルタン</text>'
      + '<text x="525" y="100" font-size="11.5" fill="var(--muted)">先進的な学問と商業</text>'
      + '<text x="525" y="120" font-size="11.5" fill="var(--muted)">イベリアと北アフリカ</text>'
      + '<text x="525" y="142" font-size="11.5" fill="var(--muted)">十字軍の相手</text>'
      + '<text x="320" y="192" font-size="11.5" fill="var(--muted)">三者が接するところ（イベリア・シチリア）で、学問がヨーロッパへ流れこんだ</text>'
      + '<text x="320" y="210" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'ノートルダム大聖堂（パリ）', src: 'img/cathedral.jpg',
    cap: '尖頭アーチと高い塔をもつゴシック建築。都市の富と信仰が結びついた中世後期の象徴。1890年代の写真。', credit: 'ウィキメディア・コモンズ「Notre Dame, Paris, France, ca. 1890-1900.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '封建社会のしくみ',
    cap: '上下の主従関係が双務的な契約だったこと、荘園が自給自足だったことが、分権的な社会をつくった。',
    svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="中世ヨーロッパの封建社会の図">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="235" y="8" width="170" height="32" rx="7" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="29" fill="var(--primary-text)">国王</text>'
      + '<rect x="235" y="62" width="170" height="32" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="83">諸侯</text>'
      + '<rect x="235" y="116" width="170" height="32" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="137">騎士</text>'
      + '<rect x="215" y="176" width="210" height="36" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="199">農奴（荘園で働く）</text>'
      + '<line x1="290" y1="40" x2="290" y2="62" stroke="var(--muted)"/>'
      + '<line x1="350" y1="62" x2="350" y2="40" stroke="var(--muted)"/>'
      + '<line x1="290" y1="94" x2="290" y2="116" stroke="var(--muted)"/>'
      + '<line x1="350" y1="116" x2="350" y2="94" stroke="var(--muted)"/>'
      + '<line x1="320" y1="148" x2="320" y2="176" stroke="var(--muted)"/>'
      + '<text x="150" y="56" font-size="11.5" fill="var(--muted)">上から：封土（領地）を与える</text>'
      + '<text x="500" y="110" font-size="11.5" fill="var(--muted)">下から：軍役をつとめる</text>'
      + '<text x="320" y="232" font-size="11.5" fill="var(--muted)">一人の家臣が複数の主君に仕えることもあり、王の力は弱かった（西ヨーロッパの特徴）</text>'
      + '<rect x="18" y="176" width="176" height="36" rx="7" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="106" y="193" font-size="11.5">賦役・貢納・十分の一税</text>'
      + '<text x="106" y="207" font-size="11" fill="var(--muted)">結婚税・死亡税も課された</text>'
      + '<rect x="446" y="176" width="176" height="36" rx="7" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="534" y="193" font-size="11.5">教会は別の階層をなす</text>'
      + '<text x="534" y="207" font-size="11" fill="var(--muted)">教皇・司教も領主だった</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '中世後期に起きた四つの変動',
    cap: 'どれも荘園制と教会の権威をゆるがし、結果として王権の強化につながった。',
    head: ['できごと', '時期', '起きたこと', '行きついた先'],
    rows: [
      ['十字軍', '1096〜1270', '聖地回復に失敗', '教皇の権威が落ち、諸侯も疲弊'],
      ['貨幣経済の広がり', '12世紀〜', '遠隔地商業と都市の成長', '賦役が貨幣地代に変わる'],
      ['黒死病', '1348年ごろ', '人口の3分の1が死亡', '農民の立場が強まり、農奴解放が進む'],
      ['百年戦争・バラ戦争', '1339〜1485', '諸侯と騎士が没落', 'イギリス・フランスで王権が伸びる'],
    ] },
],

'inner-asia': [
  { at: 'sec2', k: 'map', t: '地図：モンゴル帝国と四つのハン国',
    cap: 'チンギス＝ハンの子孫が各地を分け取り、ゆるやかに連なる巨大な連合ができた。',
    svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="モンゴル帝国と四ハン国の略図">'
      + '<rect x="0" y="0" width="640" height="240" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="402" y="92" width="218" height="86" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="511" y="120" font-size="14" fill="var(--primary)">元（大ハン）</text>'
      + '<text x="511" y="142" font-size="11.5" fill="var(--muted)">フビライ。都は大都</text>'
      + '<text x="511" y="162" font-size="11.5" fill="var(--muted)">1279 南宋を滅ぼす</text>'
      + '<rect x="258" y="30" width="180" height="54" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="348" y="52" font-size="12.5">キプチャク＝ハン国</text>'
      + '<text x="348" y="70" font-size="10.5" fill="var(--muted)">南ロシア。「タタールのくびき」</text>'
      + '<rect x="258" y="96" width="130" height="54" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="323" y="118" font-size="12.5">チャガタイ＝ハン国</text>'
      + '<text x="323" y="136" font-size="10.5" fill="var(--muted)">中央アジア</text>'
      + '<rect x="258" y="162" width="130" height="54" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="323" y="184" font-size="12.5">イル＝ハン国</text>'
      + '<text x="323" y="202" font-size="10.5" fill="var(--muted)">イラン。アッバース朝を滅ぼす</text>'
      + '<rect x="26" y="96" width="150" height="54" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="101" y="118" font-size="12.5">オゴタイ＝ハン国</text>'
      + '<text x="101" y="136" font-size="10.5" fill="var(--muted)">モンゴル高原の西</text>'
      + '<line x1="398" y1="135" x2="392" y2="123" stroke="var(--muted)"/>'
      + '<line x1="438" y1="110" x2="440" y2="64" stroke="var(--muted)"/>'
      + '<line x1="398" y1="150" x2="392" y2="180" stroke="var(--muted)"/>'
      + '<line x1="256" y1="123" x2="180" y2="123" stroke="var(--muted)"/>'
      + '<text x="320" y="232" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'チンギス＝ハン', src: 'img/genghis.jpg',
    cap: '元代に描かれた肖像。遊牧民の騎馬軍団を束ね、ユーラシアを結ぶ帝国の礎を築いた。', credit: 'ウィキメディア・コモンズ「YuanEmperorAlbumGenghisPortrait.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '宋と征服王朝',
    cap: '中国の王朝は北方民族への対応に苦しみ、やがて支配される側になった。',
    head: ['国', '民族', '時期', '中国との関係'],
    rows: [
      ['遼', '契丹', '916〜1125', '燕雲十六州を得る。澶淵の盟で宋から歳幣'],
      ['西夏', 'タングート', '1038〜1227', '宋と争い、やはり歳幣を得る'],
      ['金', '女真', '1115〜1234', '北宋を滅ぼし、華北を支配（靖康の変）'],
      ['元', 'モンゴル', '1271〜1368', '南宋を滅ぼし、中国全土を支配'],
    ] },
  { at: 'sec2', k: 'svg', t: 'モンゴル帝国が結んだ東西',
    cap: '駅伝制（ジャムチ）によって人と物と情報が行き交い、ユーラシアが一つの通路になった。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="モンゴル帝国の東西交流の図">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<line x1="40" y1="70" x2="600" y2="70" stroke="var(--primary)" stroke-width="2" stroke-dasharray="7 4"/>'
      + '<circle cx="60" cy="70" r="7" fill="var(--primary)"/><text x="60" y="48">大都</text>'
      + '<circle cx="215" cy="70" r="6" fill="var(--muted)"/><text x="215" y="48">カラコルム</text>'
      + '<circle cx="370" cy="70" r="6" fill="var(--muted)"/><text x="370" y="48">サマルカンド</text>'
      + '<circle cx="505" cy="70" r="6" fill="var(--muted)"/><text x="505" y="48">タブリーズ</text>'
      + '<circle cx="600" cy="70" r="7" fill="var(--primary)"/><text x="600" y="48">ヨーロッパ</text>'
      + '<text x="130" y="96" font-size="11" fill="var(--muted)">駅伝（ジャムチ）</text>'
      + '<text x="440" y="96" font-size="11" fill="var(--muted)">牌符をもつ者は宿と馬を使える</text>'
      + '<rect x="24" y="112" width="186" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="117" y="132" font-size="11.5">東から西へ</text>'
      + '<text x="117" y="152" font-size="11" fill="var(--muted)">火薬・羅針盤・活版印刷</text>'
      + '<rect x="226" y="112" width="186" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="132" font-size="11.5">西から東へ</text>'
      + '<text x="319" y="152" font-size="11" fill="var(--muted)">イスラーム天文学・暦法</text>'
      + '<rect x="428" y="112" width="188" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="522" y="132" font-size="11.5">行き来した人</text>'
      + '<text x="522" y="152" font-size="11" fill="var(--muted)">マルコ＝ポーロ、モンテ＝コルヴィノ</text>'
      + '</g></svg>' },
],

'early-modern': [
  { at: 'sec1', k: 'map', t: '地図：大航海時代の三つの航路',
    cap: 'ポルトガルはアフリカ回りでインドへ、スペインは西回りでアメリカへ。やがて世界が一周される。',
    svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大航海時代の航路の略図">'
      + '<rect x="0" y="0" width="640" height="250" fill="var(--surface2)"/>'
      + '<defs><marker id="ar-vo" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<circle cx="250" cy="70" r="6" fill="var(--primary)"/><text x="196" y="60">リスボン</text>'
      + '<path d="M248,78 Q215,160 268,206 Q330,232 420,176" stroke="var(--primary)" stroke-width="2" fill="none" marker-end="url(#ar-vo)"/>'
      + '<text x="250" y="226" font-size="11.5" fill="var(--primary)">ヴァスコ＝ダ＝ガマ（1498 カリカット）</text>'
      + '<path d="M240,76 Q160,96 96,118" stroke="var(--muted)" stroke-width="2" fill="none" stroke-dasharray="5 3" marker-end="url(#ar-vo)"/>'
      + '<text x="40" y="112" font-size="11.5" fill="var(--muted)">コロンブス</text>'
      + '<text x="40" y="128" font-size="11" fill="var(--muted)">1492 サンサルバドル島</text>'
      + '<path d="M244,82 Q150,186 210,214" stroke="var(--border)" stroke-width="2" fill="none" stroke-dasharray="3 3"/>'
      + '<text x="430" y="170" font-size="11.5">インド</text>'
      + '<text x="470" y="96" font-size="11.5" fill="var(--muted)">マゼラン一行は1522年に世界一周を達成</text>'
      + '<text x="470" y="116" font-size="11" fill="var(--muted)">（本人はフィリピンで戦死）</text>'
      + '<text x="20" y="242" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'photo', t: 'モナ＝リザ（レオナルド＝ダ＝ヴィンチ）', src: 'img/renaissance.jpg',
    cap: '遠近法とぼかし（スフマート）を用いた代表作。神ではなく人間を見つめる視線が、ルネサンスの核心にある。', credit: 'ウィキメディア・コモンズ「Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg」（Public domain）' },
  { at: 'sec2', k: 'table', t: '宗教改革の三つの流れ',
    cap: '「救われるために何が必要か」という同じ問いへの違う答えが、ヨーロッパを分けた。',
    head: ['', 'ルター派', 'カルヴァン派', 'イギリス国教会'],
    rows: [
      ['始まり', '1517年 九十五カ条の論題', '1541年 ジュネーヴの改革', '1534年 国王至上法'],
      ['救いの考え', '信仰のみ。聖書のみ', '予定説。救いは神が決めている', '教義はカトリックに近い'],
      ['職業と富', '天職として肯定', '蓄財を肯定 → 商工業者に広がる', '—'],
      ['広がった地域', '北ドイツ・北欧', 'スイス・オランダ・スコットランド・フランス', 'イングランド'],
      ['呼び名', '—', 'ユグノー、ゴイセン、ピューリタン', 'アングリカン'],
    ] },
  { at: 'sec1', k: 'svg', t: '大航海時代が変えたもの',
    cap: '航路が開かれた結果、ヨーロッパの経済の中心が地中海から大西洋へ移った。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大航海時代の影響の図">'
      + '<defs><marker id="ar-dk" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="20" width="170" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="99" y="42">新航路の開拓</text>'
      + '<text x="99" y="62" font-size="11" fill="var(--muted)">ヴァスコ＝ダ＝ガマ／コロンブス</text>'
      + '<rect x="235" y="20" width="170" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="42" fill="var(--primary)">商業革命</text>'
      + '<text x="320" y="62" font-size="11" fill="var(--muted)">中心が地中海 → 大西洋へ</text>'
      + '<rect x="456" y="20" width="170" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="541" y="42" fill="var(--primary)">価格革命</text>'
      + '<text x="541" y="62" font-size="11" fill="var(--muted)">銀の流入で物価が上がる</text>'
      + '<line x1="186" y1="47" x2="231" y2="47" stroke="var(--muted)" marker-end="url(#ar-dk)"/>'
      + '<line x1="407" y1="47" x2="452" y2="47" stroke="var(--muted)" marker-end="url(#ar-dk)"/>'
      + '<rect x="90" y="106" width="200" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="190" y="128" font-size="11.5">西ヨーロッパ</text>'
      + '<text x="190" y="147" font-size="11" fill="var(--muted)">固定地代の領主が没落</text>'
      + '<text x="190" y="163" font-size="11" fill="var(--muted)">商工業者が力をつける</text>'
      + '<rect x="350" y="106" width="200" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="450" y="128" font-size="11.5">東ヨーロッパ</text>'
      + '<text x="450" y="147" font-size="11" fill="var(--muted)">穀物の輸出地になり</text>'
      + '<text x="450" y="163" font-size="11" fill="var(--muted)">農奴制が強まる（再版農奴制）</text>'
      + '<line x1="250" y1="78" x2="190" y2="102" stroke="var(--muted)" marker-end="url(#ar-dk)"/>'
      + '<line x1="390" y1="78" x2="450" y2="102" stroke="var(--muted)" marker-end="url(#ar-dk)"/>'
      + '</g></svg>' },
],

sovereign: [
  { at: 'sec2', k: 'map', t: '地図：18世紀ヨーロッパの勢力',
    cap: '西では海外に植民地を争い、東では三国が領土を広げて啓蒙専制主義を掲げた。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="18世紀ヨーロッパの勢力の略図">'
      + '<rect x="0" y="0" width="640" height="230" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="18" y="34" width="284" height="162" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="160" y="58" font-size="13" fill="var(--primary)">西ヨーロッパ</text>'
      + '<rect x="36" y="72" width="118" height="46" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="95" y="92" font-size="12">イギリス</text><text x="95" y="108" font-size="10.5" fill="var(--muted)">議会政治・海上覇権</text>'
      + '<rect x="168" y="72" width="118" height="46" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="227" y="92" font-size="12">フランス</text><text x="227" y="108" font-size="10.5" fill="var(--muted)">絶対王政の典型</text>'
      + '<text x="160" y="142" font-size="11.5" fill="var(--muted)">第2次百年戦争＝北米とインドで衝突</text>'
      + '<text x="160" y="164" font-size="11.5" fill="var(--muted)">七年戦争・パリ条約（1763）で</text>'
      + '<text x="160" y="180" font-size="11.5" fill="var(--muted)">イギリスが優位を固める</text>'
      + '<rect x="320" y="34" width="302" height="162" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="471" y="58" font-size="13">東ヨーロッパ</text>'
      + '<rect x="336" y="72" width="88" height="46" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="380" y="92" font-size="12">プロイセン</text><text x="380" y="108" font-size="10.5" fill="var(--muted)">フリードリヒ2世</text>'
      + '<rect x="432" y="72" width="88" height="46" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="476" y="92" font-size="12">オーストリア</text><text x="476" y="108" font-size="10.5" fill="var(--muted)">マリア＝テレジア</text>'
      + '<rect x="528" y="72" width="86" height="46" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="571" y="92" font-size="12">ロシア</text><text x="571" y="108" font-size="10.5" fill="var(--muted)">エカチェリーナ2世</text>'
      + '<text x="471" y="146" font-size="11.5" fill="var(--muted)">三国でポーランドを分割（1772・93・95）</text>'
      + '<text x="471" y="168" font-size="11.5" fill="var(--muted)">農奴制の上に立つ「上からの近代化」</text>'
      + '<text x="320" y="220" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'ルイ14世', src: 'img/versailles.jpg',
    cap: '「太陽王」。ヴェルサイユ宮殿に貴族を住まわせ、王の権威を目に見える形にした絶対王政の典型。', credit: 'ウィキメディア・コモンズ「Louis XIV of France.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '絶対王政のくらべかた',
    cap: '同じ絶対王政でも、何を財源にし、誰を抑えたかは国ごとに違う。',
    head: ['国', '代表的な王', '支えた財源', '特徴'],
    rows: [
      ['スペイン', 'フェリペ2世', '新大陸の銀', '「太陽の沈まぬ国」。無敵艦隊の敗北で衰退'],
      ['フランス', 'ルイ14世', '重商主義（コルベール）', 'ヴェルサイユ宮殿。ナントの王令を廃止'],
      ['イギリス', 'エリザベス1世', '毛織物工業と海賊的貿易', '議会との関係を保ち、のちに革命へ'],
      ['プロイセン', 'フリードリヒ2世', 'ユンカーと常備軍', '「君主は国家第一の僕」。啓蒙専制主義'],
      ['ロシア', 'ピョートル1世', '農奴制と領土拡大', '西欧化政策、ペテルブルク建設'],
    ] },
  { at: 'sec0', k: 'svg', t: '主権国家体制ができるまで',
    cap: '宗教戦争に疲れた結果、信仰ではなく国家の利害で動く国際関係が生まれた。',
    svg: '<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="主権国家体制の成立の図">'
      + '<defs><marker id="ar-sv" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="10" y="26" width="140" height="50" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="80" y="48">宗教改革</text><text x="80" y="66" font-size="11" fill="var(--muted)">16世紀</text>'
      + '<rect x="176" y="26" width="150" height="50" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="251" y="48">宗教戦争</text><text x="251" y="66" font-size="11" fill="var(--muted)">ユグノー戦争・三十年戦争</text>'
      + '<rect x="352" y="26" width="150" height="50" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="427" y="48" fill="var(--primary)">ウェストファリア条約</text>'
      + '<text x="427" y="66" font-size="11" fill="var(--muted)">1648年</text>'
      + '<rect x="528" y="26" width="102" height="50" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="579" y="48" fill="var(--primary)">主権国家</text>'
      + '<text x="579" y="66" font-size="11" fill="var(--muted)">体制の成立</text>'
      + '<line x1="152" y1="51" x2="172" y2="51" stroke="var(--muted)" marker-end="url(#ar-sv)"/>'
      + '<line x1="328" y1="51" x2="348" y2="51" stroke="var(--muted)" marker-end="url(#ar-sv)"/>'
      + '<line x1="504" y1="51" x2="524" y2="51" stroke="var(--muted)" marker-end="url(#ar-sv)"/>'
      + '<text x="320" y="108" font-size="11.5" fill="var(--muted)">条約で決まったこと：各国は対等／内政に干渉しない／神聖ローマ帝国は有名無実に</text>'
      + '<text x="320" y="132" font-size="11.5" fill="var(--muted)">このあと、国の利害を計る「勢力均衡」が外交の原理になる</text>'
      + '</g></svg>' },
],

revolution: [
  { at: 'sec3', k: 'map', t: '地図：大西洋の三角貿易',
    cap: 'ヨーロッパ・アフリカ・アメリカを結ぶ三角形。産業革命の資本は、この回路から生まれた。',
    svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大西洋三角貿易の略図">'
      + '<rect x="0" y="0" width="640" height="240" fill="var(--surface2)"/>'
      + '<defs><marker id="ar-tr" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="238" y="20" width="164" height="44" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="40" fill="var(--primary)">ヨーロッパ</text>'
      + '<text x="320" y="56" font-size="10.5" fill="var(--muted)">リヴァプール・ナント</text>'
      + '<rect x="420" y="160" width="164" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="502" y="180">アフリカ西岸</text>'
      + '<rect x="56" y="160" width="164" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="138" y="180">アメリカ・西インド諸島</text>'
      + '<text x="138" y="196" font-size="10.5" fill="var(--muted)">プランテーション</text>'
      + '<line x1="356" y1="66" x2="470" y2="156" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-tr)"/>'
      + '<text x="448" y="104" font-size="11.5" fill="var(--primary)">武器・雑貨</text>'
      + '<line x1="416" y1="182" x2="226" y2="182" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-tr)"/>'
      + '<text x="320" y="174" font-size="11.5" fill="var(--primary)">奴隷</text>'
      + '<text x="320" y="200" font-size="10.5" fill="var(--muted)">中間航路</text>'
      + '<line x1="170" y1="156" x2="284" y2="66" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-tr)"/>'
      + '<text x="180" y="104" font-size="11.5" fill="var(--primary)">砂糖・綿花・タバコ</text>'
      + '<text x="320" y="230" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'photo', t: '民衆を導く自由の女神（ドラクロワ）', src: 'img/liberty.jpg',
    cap: '1830年の七月革命を描いた作品。市民革命の理念そのものを一枚にした絵として知られる。', credit: 'ウィキメディア・コモンズ「Eugène Delacroix - La liberté guidant le peuple.jpg」（Public domain）' },
  { at: 'ov', k: 'table', t: '三つの市民革命のくらべかた',
    cap: '誰が、何に対して、どんな理屈で立ち上がったのかを並べると、違いがはっきりする。',
    head: ['', 'イギリス革命', 'アメリカ独立革命', 'フランス革命'],
    rows: [
      ['時期', '1640〜1688', '1775〜1783', '1789〜1799'],
      ['相手', '国王（ステュアート朝）', '本国イギリス', '国王と特権身分'],
      ['中心', 'ジェントリと商工業者', '植民地の地主・商人', '第三身分（市民と農民）'],
      ['掲げた理屈', '議会の伝統的な権利', '代表なくして課税なし', '人間と市民の権利の宣言'],
      ['結果', '立憲君主政（権利の章典）', '合衆国憲法・三権分立', '共和政 → ナポレオンの帝政'],
    ] },
  { at: 'sec3', k: 'svg', t: '産業革命が回りはじめるしくみ',
    cap: '技術だけでは起きない。資本・労働力・原料・市場がそろって初めて連鎖が始まる。',
    svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="産業革命の条件と連鎖の図">'
      + '<defs><marker id="ar-ir" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="18" font-size="12.5" fill="var(--muted)">イギリスでそろった条件</text>'
      + '<rect x="14" y="28" width="140" height="38" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="84" y="52">資本（貿易の利益）</text>'
      + '<rect x="176" y="28" width="140" height="38" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="246" y="52">労働力（囲い込み）</text>'
      + '<rect x="338" y="28" width="140" height="38" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="408" y="52">原料（インドの綿花）</text>'
      + '<rect x="494" y="28" width="132" height="38" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="560" y="52">市場（植民地）</text>'
      + '<line x1="320" y1="70" x2="320" y2="88" stroke="var(--muted)" marker-end="url(#ar-ir)"/>'
      + '<rect x="200" y="90" width="240" height="38" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="114" fill="var(--primary)">綿工業の機械化（飛び杼・紡績機）</text>'
      + '<line x1="320" y1="132" x2="320" y2="148" stroke="var(--muted)" marker-end="url(#ar-ir)"/>'
      + '<rect x="110" y="150" width="200" height="38" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="210" y="174">蒸気機関（ワット）</text>'
      + '<rect x="330" y="150" width="200" height="38" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="430" y="174">製鉄・石炭の需要増</text>'
      + '<text x="320" y="210" font-size="11.5" fill="var(--muted)">→ 交通革命（蒸気機関車・蒸気船）／ 資本家と労働者という新しい階級の対立</text>'
      + '</g></svg>' },
],

nation: [
  { at: 'sec2', k: 'map', t: '地図：イタリアとドイツの統一',
    cap: '小国に分かれていた二つの地域が、それぞれ一つの国民国家にまとまった。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="イタリアとドイツの統一の略図">'
      + '<rect x="0" y="0" width="640" height="230" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="18" y="30" width="290" height="168" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="163" y="54" font-size="13">イタリア</text>'
      + '<rect x="36" y="70" width="120" height="40" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="96" y="86" font-size="12" fill="var(--primary)">サルデーニャ王国</text>'
      + '<text x="96" y="102" font-size="10.5" fill="var(--muted)">北の中心・カヴール</text>'
      + '<rect x="172" y="70" width="120" height="40" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="232" y="86" font-size="12">両シチリア王国</text>'
      + '<text x="232" y="102" font-size="10.5" fill="var(--muted)">ガリバルディが占領して献上</text>'
      + '<text x="163" y="136" font-size="11.5" fill="var(--muted)">1861 イタリア王国成立</text>'
      + '<text x="163" y="156" font-size="11.5" fill="var(--muted)">1866 ヴェネツィア　1870 ローマ</text>'
      + '<text x="163" y="180" font-size="11.5" fill="var(--muted)">南チロル・トリエステは残る（未回収のイタリア）</text>'
      + '<rect x="326" y="30" width="296" height="168" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="474" y="54" font-size="13">ドイツ</text>'
      + '<rect x="344" y="70" width="128" height="40" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="408" y="86" font-size="12" fill="var(--primary)">プロイセン</text>'
      + '<text x="408" y="102" font-size="10.5" fill="var(--muted)">ビスマルクの鉄血政策</text>'
      + '<rect x="486" y="70" width="120" height="40" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="546" y="86" font-size="12">オーストリア</text>'
      + '<text x="546" y="102" font-size="10.5" fill="var(--muted)">普墺戦争で排除される</text>'
      + '<text x="474" y="136" font-size="11.5" fill="var(--muted)">1834 関税同盟 → 1866 北ドイツ連邦</text>'
      + '<text x="474" y="156" font-size="11.5" fill="var(--muted)">1870 普仏戦争 → 1871 ドイツ帝国</text>'
      + '<text x="474" y="180" font-size="11.5" fill="var(--muted)">ヴェルサイユ宮殿で戴冠式を行った</text>'
      + '<text x="320" y="220" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'photo', t: 'ビスマルク', src: 'img/bismarck.jpg',
    cap: 'プロイセン首相。「鉄血演説」のとおり軍備と戦争でドイツ統一を果たし、以後は巧みな外交で平和を保った。', credit: 'ウィキメディア・コモンズ「Count Otto von Bismarck portrait by Franz von Lenbach.jpg」（Public domain）' },
  { at: 'ov', k: 'svg', t: 'ウィーン体制が崩れていく流れ',
    cap: '正統主義で時計を戻そうとしたが、自由主義と国民主義の波は止まらなかった。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ウィーン体制の動揺の年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="60" y1="40" x2="60" y2="170" stroke="var(--border)" stroke-width="2"/>'
      + '<g text-anchor="start">'
      + '<circle cx="60" cy="52" r="5" fill="var(--primary)"/><text x="76" y="50">1815　ウィーン会議</text>'
      + '<text x="76" y="66" font-size="11" fill="var(--muted)">正統主義と勢力均衡。神聖同盟・四国同盟</text>'
      + '<circle cx="60" cy="88" r="5" fill="var(--muted)"/><text x="76" y="86">1830　フランス七月革命</text>'
      + '<text x="76" y="102" font-size="11" fill="var(--muted)">ベルギー独立。各地に波及</text>'
      + '<circle cx="60" cy="124" r="5" fill="var(--primary)"/><text x="76" y="122">1848　二月革命・諸国民の春</text>'
      + '<text x="76" y="138" font-size="11" fill="var(--muted)">メッテルニヒ失脚 → ウィーン体制の崩壊</text>'
      + '<circle cx="60" cy="158" r="5" fill="var(--muted)"/><text x="76" y="156">1860〜71　イタリア・ドイツの統一</text>'
      + '</g></g></svg>' },
  { at: 'sec2', k: 'table', t: 'イタリアとドイツの統一',
    cap: 'どちらも小国分立から統一へ向かうが、中心になった国と手順が異なる。',
    head: ['', 'イタリア', 'ドイツ'],
    rows: [
      ['中心の国', 'サルデーニャ王国', 'プロイセン王国'],
      ['指導者', 'カヴール、ガリバルディ', 'ビスマルク'],
      ['経済的な下地', '—', 'ドイツ関税同盟（1834）'],
      ['おもな戦争', 'イタリア統一戦争（対オーストリア）', 'デンマーク・普墺・普仏戦争'],
      ['達成', '1861年王国成立、1870年ローマ併合', '1871年ドイツ帝国成立（ヴェルサイユで戴冠）'],
      ['残った課題', '「未回収のイタリア」', '南北の対立、カトリックと社会主義者の弾圧'],
    ] },
],

imperialism: [
  { at: 'sec0', k: 'map', t: '地図：アフリカ分割の縦と横',
    cap: 'イギリスは南北に、フランスは東西に進み、スーダンのファショダで正面からぶつかった。',
    svg: '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="アフリカ分割の略図">'
      + '<rect x="0" y="0" width="640" height="250" fill="var(--surface2)"/>'
      + '<defs><marker id="ar-af" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<ellipse cx="320" cy="130" rx="150" ry="104" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="246" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '<line x1="320" y1="34" x2="320" y2="222" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#ar-af)"/>'
      + '<text x="250" y="48" font-size="11.5" fill="var(--primary)">イギリス＝縦断政策</text>'
      + '<text x="250" y="64" font-size="10.5" fill="var(--muted)">カイロ → ケープタウン</text>'
      + '<line x1="150" y1="118" x2="498" y2="118" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#ar-af)"/>'
      + '<text x="470" y="104" font-size="11.5" fill="var(--accent)">フランス＝横断政策</text>'
      + '<text x="470" y="88" font-size="10.5" fill="var(--muted)">サハラ → ジブチ</text>'
      + '<circle cx="342" cy="118" r="8" fill="none" stroke="var(--primary)" stroke-width="2"/>'
      + '<text x="392" y="140" font-size="11.5">ファショダ事件（1898）</text>'
      + '<text x="392" y="156" font-size="10.5" fill="var(--muted)">フランスが譲り、英仏協商へ</text>'
      + '<text x="150" y="196" font-size="11" fill="var(--muted)">独立を保ったのは</text>'
      + '<text x="150" y="212" font-size="11" fill="var(--muted)">エチオピアとリベリアだけ</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: '「中国という菓子を分ける王たち」', src: 'img/china-cartoon.jpg',
    cap: '1898年フランスの風刺画。英・独・露・仏・日が清を分け合おうとする様子を描いている。', credit: 'ウィキメディア・コモンズ「China, the cake of kings and emperors, Le Petit Journal 1898.jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: 'なぜ帝国主義になったのか',
    cap: '第2次産業革命で資本が余り、不況で市場が足りなくなったことが、植民地獲得の動機になった。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="帝国主義の成立の図">'
      + '<defs><marker id="ar-im" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="22" width="180" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="104" y="44">第2次産業革命</text>'
      + '<text x="104" y="63" font-size="11" fill="var(--muted)">鉄鋼・電気・化学・石油</text>'
      + '<rect x="230" y="22" width="180" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="44">独占資本の形成</text>'
      + '<text x="320" y="63" font-size="11" fill="var(--muted)">巨大な設備には巨大な資本が要る</text>'
      + '<rect x="446" y="22" width="180" height="52" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="536" y="44" fill="var(--primary)">資本の輸出先を求める</text>'
      + '<text x="536" y="63" font-size="11" fill="var(--muted)">植民地・勢力圏の獲得へ</text>'
      + '<line x1="196" y1="48" x2="226" y2="48" stroke="var(--muted)" marker-end="url(#ar-im)"/>'
      + '<line x1="412" y1="48" x2="442" y2="48" stroke="var(--muted)" marker-end="url(#ar-im)"/>'
      + '<rect x="90" y="104" width="460" height="62" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="126" font-size="12">分割の現場</text>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">アフリカ＝ベルリン会議（1884）で「早い者勝ち」を取り決め → ファショダ事件</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">アジア＝英の3C政策、独の3B政策、米の門戸開放宣言</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '東アジアの三国が選んだ道',
    cap: '同じ圧力を受けながら、改革の深さと時期の違いが、その後を大きく分けた。',
    head: ['', '日本', '清', '朝鮮'],
    rows: [
      ['開国', '1854 日米和親条約', '1842 南京条約（アヘン戦争）', '1876 日朝修好条規'],
      ['最初の改革', '明治維新（1868）＝体制ごと変える', '洋務運動（1860s）＝技術だけ', '開化派と守旧派の対立'],
      ['挫折', '—', '日清戦争の敗北で洋務運動が破綻', '甲午農民戦争 → 日清戦争の舞台に'],
      ['次の動き', '憲法・議会（1889・90）', '変法運動（1898）→ 戊戌の政変で失敗', '大韓帝国（1897）'],
      ['20世紀初め', '列強の一員に', '辛亥革命（1911）で清が滅亡', '日本に併合（1910）'],
    ] },
],

ww1: [
  { at: 'ov', k: 'map', t: '地図：大戦前夜のヨーロッパ',
    cap: '二つの陣営が向かい合い、その接点にあるバルカン半島が「ヨーロッパの火薬庫」と呼ばれた。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="第一次世界大戦前のヨーロッパの略図">'
      + '<rect x="0" y="0" width="640" height="230" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="206" y="26" width="228" height="48" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="46" fill="var(--primary)">ドイツ・オーストリア</text>'
      + '<text x="320" y="64" font-size="10.5" fill="var(--muted)">3B政策／パン＝ゲルマン主義</text>'
      + '<rect x="24" y="104" width="170" height="48" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="124">イギリス・フランス</text>'
      + '<text x="109" y="142" font-size="10.5" fill="var(--muted)">3C政策／植民地を守る</text>'
      + '<rect x="446" y="104" width="170" height="48" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="531" y="124">ロシア</text>'
      + '<text x="531" y="142" font-size="10.5" fill="var(--muted)">南下政策／パン＝スラヴ主義</text>'
      + '<rect x="232" y="134" width="176" height="62" rx="9" fill="var(--surface2)" stroke="var(--primary)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="154" font-size="12.5" fill="var(--primary)">バルカン半島</text>'
      + '<text x="320" y="172" font-size="10.5" fill="var(--muted)">セルビア・ボスニア</text>'
      + '<text x="320" y="188" font-size="10.5" fill="var(--muted)">1914 サライェヴォ事件</text>'
      + '<line x1="276" y1="76" x2="300" y2="134" stroke="var(--muted)"/>'
      + '<line x1="364" y1="76" x2="340" y2="134" stroke="var(--muted)"/>'
      + '<line x1="196" y1="130" x2="228" y2="148" stroke="var(--muted)"/>'
      + '<line x1="444" y1="130" x2="412" y2="148" stroke="var(--muted)"/>'
      + '<text x="320" y="218" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'ソンムの戦いの塹壕（1916年）', src: 'img/trench.jpg',
    cap: '機関銃と鉄条網の前に突撃は通じず、戦線は塹壕で膠着した。総力戦という言葉が生まれた戦争である。', credit: 'ウィキメディア・コモンズ「Cheshire Regiment trench Somme 1916.jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: '二つの陣営と、開戦までの連鎖',
    cap: '同盟のネットワークがあったために、一つの事件が大戦に拡大した。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="第一次世界大戦の同盟関係の図">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="20" width="250" height="84" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="149" y="44" fill="var(--primary)">三国同盟（1882）</text>'
      + '<text x="149" y="68" font-size="11.5" fill="var(--muted)">ドイツ・オーストリア・イタリア</text>'
      + '<text x="149" y="90" font-size="11" fill="var(--muted)">※イタリアは未回収問題で離脱し、協商側へ</text>'
      + '<rect x="366" y="20" width="250" height="84" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="491" y="44">三国協商（1907）</text>'
      + '<text x="491" y="68" font-size="11.5" fill="var(--muted)">イギリス・フランス・ロシア</text>'
      + '<text x="491" y="90" font-size="11" fill="var(--muted)">露仏同盟・英仏協商・英露協商を結んで成立</text>'
      + '<text x="320" y="66" font-size="20" fill="var(--muted)">⇔</text>'
      + '<rect x="60" y="126" width="520" height="66" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="148" font-size="12">火種：バルカン半島（「ヨーロッパの火薬庫」）</text>'
      + '<text x="320" y="168" font-size="11.5" fill="var(--muted)">パン＝ゲルマン主義とパン＝スラヴ主義の衝突</text>'
      + '<text x="320" y="185" font-size="11.5" fill="var(--muted)">1914年6月 サライェヴォ事件 → 1か月で全面戦争へ</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: 'ヴェルサイユ体制のしくみと弱点',
    cap: '平和の制度を作ったが、肝心の仕組みに穴があり、二十年ももたなかった。',
    head: ['項目', '決まったこと', '弱点'],
    rows: [
      ['ドイツ', '全植民地を失い、巨額の賠償金', '国民の反発がナチスの土壌になる'],
      ['国際連盟', '1920年発足。史上初の国際平和機構', 'アメリカ不参加、ソ連・独は排除。制裁は経済制裁のみ'],
      ['民族自決', '東欧に多くの独立国が誕生', 'アジア・アフリカには適用されず'],
      ['軍縮', 'ワシントン・ロンドン海軍軍縮条約', '陸軍は対象外。やがて各国が離脱'],
    ] },
],

ww2: [
  { at: 'sec2', k: 'map', t: '地図：第二次世界大戦の二つの戦場',
    cap: 'ヨーロッパと太平洋で別々に始まった戦いが、1941年末に一つの世界戦争になった。',
    svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="第二次世界大戦の戦域の略図">'
      + '<rect x="0" y="0" width="640" height="240" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="18" y="30" width="290" height="176" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="163" y="54" font-size="13">ヨーロッパ戦線</text>'
      + '<text x="163" y="80" font-size="11.5" fill="var(--muted)">1939.9 ドイツがポーランド侵攻</text>'
      + '<text x="163" y="100" font-size="11.5" fill="var(--muted)">1940 パリ陥落　1941.6 独ソ戦</text>'
      + '<text x="163" y="120" font-size="11.5" fill="var(--muted)">1943 スターリングラードで転換</text>'
      + '<text x="163" y="140" font-size="11.5" fill="var(--muted)">1944.6 ノルマンディー上陸</text>'
      + '<text x="163" y="162" font-size="11.5" fill="var(--primary)">1945.5 ドイツ降伏</text>'
      + '<text x="163" y="188" font-size="10.5" fill="var(--muted)">※ホロコーストが並行して進む</text>'
      + '<rect x="326" y="30" width="296" height="176" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="474" y="54" font-size="13">アジア・太平洋戦線</text>'
      + '<text x="474" y="80" font-size="11.5" fill="var(--muted)">1937 日中戦争</text>'
      + '<text x="474" y="100" font-size="11.5" fill="var(--muted)">1941.12 真珠湾攻撃・マレー上陸</text>'
      + '<text x="474" y="120" font-size="11.5" fill="var(--muted)">1942.6 ミッドウェー海戦で転換</text>'
      + '<text x="474" y="140" font-size="11.5" fill="var(--muted)">1945.3 東京大空襲　6 沖縄戦</text>'
      + '<text x="474" y="162" font-size="11.5" fill="var(--primary)">1945.8 広島・長崎 → 日本降伏</text>'
      + '<text x="474" y="188" font-size="10.5" fill="var(--muted)">※ソ連の対日参戦は8月8日</text>'
      + '<text x="320" y="228" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'photo', t: 'ヤルタ会談（1945年2月）', src: 'img/yalta.jpg',
    cap: 'チャーチル・ローズヴェルト・スターリン。戦後処理を決めたこの会談が、そのまま冷戦の下地になった。', credit: 'ウィキメディア・コモンズ「Yalta summit 1945 with Churchill, Roosevelt, Stalin.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '世界恐慌への対応のちがい',
    cap: '植民地や資源を持つ国と持たない国で、採れる手が分かれた。それが戦争への道を決めた。',
    head: ['国', '採った策', '内容', '行きついた先'],
    rows: [
      ['アメリカ', 'ニューディール', '公共事業、農業調整法、ワグナー法', '政府が経済に関与する型をつくる'],
      ['イギリス・フランス', 'ブロック経済', '本国と植民地で関税の壁を囲う', '持たざる国を締め出す'],
      ['ソ連', '五カ年計画', '計画経済のため恐慌の影響が小さい', '国際的な評価が高まる'],
      ['ドイツ・イタリア・日本', '対外膨張', '軍需と領土拡大で活路を求める', 'ファシズムと戦争へ'],
    ] },
  { at: 'sec1', k: 'svg', t: 'ファシズムが育つ条件',
    cap: '恐慌と敗戦の記憶、そして既存政党への不信が重なったところで、強い指導者への期待が生まれた。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ファシズム台頭の条件の図">'
      + '<defs><marker id="ar-fa" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="10" y="20" width="150" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="85" y="45">世界恐慌と失業</text>'
      + '<rect x="10" y="70" width="150" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="85" y="95">ヴェルサイユへの不満</text>'
      + '<rect x="10" y="120" width="150" height="40" rx="7" fill="var(--surface)" stroke="var(--border)"/><text x="85" y="145">共産主義への恐れ</text>'
      + '<path d="M164,40 L212,84" stroke="var(--muted)" fill="none" marker-end="url(#ar-fa)"/>'
      + '<path d="M164,90 L212,90" stroke="var(--muted)" fill="none" marker-end="url(#ar-fa)"/>'
      + '<path d="M164,140 L212,96" stroke="var(--muted)" fill="none" marker-end="url(#ar-fa)"/>'
      + '<rect x="216" y="64" width="180" height="52" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="306" y="86" fill="var(--primary)">ファシズム</text>'
      + '<text x="306" y="105" font-size="11" fill="var(--muted)">一党独裁・指導者原理・対外膨張</text>'
      + '<line x1="398" y1="90" x2="424" y2="90" stroke="var(--muted)" marker-end="url(#ar-fa)"/>'
      + '<rect x="428" y="44" width="200" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="528" y="66" font-size="11.5">イタリア＝ムッソリーニ（1922）</text>'
      + '<rect x="428" y="84" width="200" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="528" y="106" font-size="11.5">ドイツ＝ヒトラー（1933）</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">英仏の宥和政策（ミュンヘン会談 1938）が、かえって侵略を後押しした</text>'
      + '</g></svg>' },
],

coldwar: [
  { at: 'sec0', k: 'map', t: '地図：鉄のカーテン',
    cap: 'バルト海のシュテッティンからアドリア海のトリエステまで。ヨーロッパは東西に断ち切られた。',
    svg: '<svg viewBox="0 0 640 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="鉄のカーテンの略図">'
      + '<rect x="0" y="0" width="640" height="240" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="30" width="268" height="168" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="154" y="54" font-size="13">西側（資本主義）</text>'
      + '<text x="154" y="80" font-size="11.5" fill="var(--muted)">アメリカ・イギリス・フランス</text>'
      + '<text x="154" y="100" font-size="11.5" fill="var(--muted)">西ドイツ・イタリア</text>'
      + '<text x="154" y="126" font-size="11.5" fill="var(--muted)">マーシャル＝プランで復興</text>'
      + '<text x="154" y="146" font-size="11.5" fill="var(--muted)">NATO（1949）</text>'
      + '<rect x="352" y="30" width="268" height="168" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="486" y="54" font-size="13" fill="var(--primary)">東側（社会主義）</text>'
      + '<text x="486" y="80" font-size="11.5" fill="var(--muted)">ソ連・ポーランド・東ドイツ</text>'
      + '<text x="486" y="100" font-size="11.5" fill="var(--muted)">チェコスロヴァキア・ハンガリー</text>'
      + '<text x="486" y="126" font-size="11.5" fill="var(--muted)">コメコン（1949）</text>'
      + '<text x="486" y="146" font-size="11.5" fill="var(--muted)">ワルシャワ条約機構（1955）</text>'
      + '<line x1="320" y1="20" x2="320" y2="208" stroke="var(--primary)" stroke-width="4" stroke-dasharray="10 6"/>'
      + '<text x="320" y="16" font-size="11.5" fill="var(--primary)">シュテッティン</text>'
      + '<text x="320" y="224" font-size="11.5" fill="var(--primary)">トリエステ</text>'
      + '<text x="320" y="118" font-size="11" fill="var(--muted)" transform="rotate(-90 320 118)">鉄のカーテン</text>'
      + '</g></svg>' },
  { at: 'ov', k: 'photo', t: 'ケネディとフルシチョフ（1961年ウィーン）', src: 'img/coldwar.jpg',
    cap: '翌年のキューバ危機で世界は核戦争の寸前まで行き、その反省からホットラインと部分的核実験禁止条約が生まれた。', credit: 'ウィキメディア・コモンズ「John Kennedy, Nikita Khrushchev 1961.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '冷戦の東西対立',
    cap: '政治・経済・軍事の三つの面で、鏡写しのような組織が作られた。',
    head: ['面', '西側（アメリカ中心）', '東側（ソ連中心）'],
    rows: [
      ['宣言', 'トルーマン＝ドクトリン（1947）', 'コミンフォルム（1947）'],
      ['経済', 'マーシャル＝プラン（1947）', 'コメコン（1949）'],
      ['軍事', '北大西洋条約機構（1949）', 'ワルシャワ条約機構（1955）'],
      ['ドイツ', 'ドイツ連邦共和国（西独）', 'ドイツ民主共和国（東独）'],
      ['象徴', 'ベルリン封鎖への空輸（1948〜49）', 'ベルリンの壁（1961）'],
    ] },
  { at: 'sec2', k: 'svg', t: '冷戦が終わるまで',
    cap: 'ソ連国内の行き詰まりと、東欧の自立の動きが重なって、体制そのものが解けていった。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="冷戦終結までの年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="62" y1="30" x2="62" y2="168" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="62" cy="40" r="5" fill="var(--muted)"/><text x="78" y="38">1985　ゴルバチョフ就任</text>'
      + '<text x="78" y="54" font-size="11" fill="var(--muted)">ペレストロイカ（立て直し）とグラスノスチ（情報公開）</text>'
      + '<circle cx="62" cy="76" r="5" fill="var(--muted)"/><text x="78" y="74">1989　東欧革命</text>'
      + '<text x="78" y="90" font-size="11" fill="var(--muted)">ポーランド・ハンガリーから各国へ。ベルリンの壁が開く</text>'
      + '<circle cx="62" cy="112" r="5" fill="var(--primary)"/><text x="78" y="110">1989　マルタ会談</text>'
      + '<text x="78" y="126" font-size="11" fill="var(--muted)">ブッシュとゴルバチョフが冷戦の終結を宣言</text>'
      + '<circle cx="62" cy="148" r="5" fill="var(--primary)"/><text x="78" y="146">1990 ドイツ統一　／　1991 ソ連解体</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
