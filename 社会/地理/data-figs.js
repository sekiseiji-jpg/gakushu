/* 地理 ― 単元の説明に添える図・表・地図・写真
   単元id → 図版の配列。at は 'ov'（概要タブ）か 'sec0' 'sec1' …（詳細タブの節の下）。
   k は 'table' / 'svg' / 'map' / 'photo'。写真は img/ に置き、保護期間の切れたものだけを使う。
*/
const FIGS = {

chizu: [
  { at: 'ov', k: 'table', t: '地図投影法の使い分け',
    cap: '球を平面に写すと、面積・角度・距離・方位のどれかが必ず狂う。何を正しく写したいかで図法を選ぶ。',
    head: ['図法', '正しく表せるもの', 'おもな用途', '注意'],
    rows: [
      ['メルカトル図法', '角度（等角）', '航海図。等角航路が直線になる', '高緯度ほど面積が大きく見える'],
      ['モルワイデ図法', '面積（正積）', '分布図。人口や生産の分布', '周辺部の形がゆがむ'],
      ['サンソン図法', '面積（正積）', '低緯度の分布図', '高緯度の形がゆがむ'],
      ['グード図法', '面積（正積）', '世界全図。海を切って陸のゆがみを減らす', '海洋の連続性が失われる'],
      ['正距方位図法', '中心からの距離と方位', '航空図。中心からの大圏航路が直線', '中心以外どうしは正しくない'],
    ] },
  { at: 'sec1', k: 'svg', t: '時差の計算のしかた',
    cap: '経度15度で1時間。東にあるほど時刻は進んでいる。日付変更線をまたぐと1日ずれる。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="時差の計算を示す図">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<line x1="40" y1="90" x2="600" y2="90" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="180" cy="90" r="6" fill="var(--muted)"/><text x="180" y="72">ロンドン</text>'
      + '<text x="180" y="112" font-size="11" fill="var(--muted)">経度0度・正午</text>'
      + '<circle cx="470" cy="90" r="6" fill="var(--primary)"/><text x="470" y="72" fill="var(--primary)">東京</text>'
      + '<text x="470" y="112" font-size="11" fill="var(--muted)">東経135度・午後9時</text>'
      + '<text x="325" y="60" font-size="12" fill="var(--primary)">135 ÷ 15 ＝ 9時間の差</text>'
      + '<path d="M196,84 L454,84" stroke="var(--primary)" stroke-dasharray="5 4"/>'
      + '<text x="60" y="90" font-size="11" fill="var(--muted)">西</text>'
      + '<text x="596" y="90" font-size="11" fill="var(--muted)">東</text>'
      + '<rect x="90" y="134" width="460" height="52" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="154" font-size="11.5">サマータイムを採る国では、夏のあいだ1時間進む</text>'
      + '<text x="320" y="174" font-size="11.5" fill="var(--muted)">日付変更線を西から東へこえると1日戻し、東から西へこえると1日進める</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '地形図の等高線と縮尺',
    cap: '等高線の間隔は縮尺で決まる。線が混んでいるところは傾斜が急である。',
    head: ['縮尺', '計曲線', '主曲線', '地図上1cmの実距離'],
    rows: [
      ['5万分の1', '100mごと', '20mごと', '500m'],
      ['2万5千分の1', '50mごと', '10mごと', '250m'],
    ] },
],

chikei: [
  { at: 'ov', k: 'photo', t: '扇状地（タクラマカン砂漠）', src: 'img/senjochi.jpg',
    cap: '山地から平地へ出たところで、川が運んだ砂礫が扇形に積もる。水は伏流しやすく、果樹園や畑に使われることが多い。', credit: 'ウィキメディア・コモンズ「Alluvial fan, Taklimakan Desert, XinJiang Province, China, NASA, ASTER.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'プレートの境界と、そこにできるもの',
    cap: '地震や火山の分布は、プレートの境界の分布とほぼ重なる。',
    head: ['境界', '動き', 'できる地形', '例'],
    rows: [
      ['狭まる（海溝）', '海洋プレートが沈みこむ', '海溝・弧状列島・火山', '日本列島、アンデス山脈'],
      ['狭まる（衝突）', '大陸どうしがぶつかる', '高い褶曲山脈', 'ヒマラヤ山脈、アルプス山脈'],
      ['広がる', '両側へ離れる', '海嶺・地溝帯', '大西洋中央海嶺、アフリカ大地溝帯'],
      ['ずれる', '横にすれ違う', 'トランスフォーム断層', 'サンアンドレアス断層'],
    ] },
  { at: 'sec1', k: 'svg', t: '河川がつくる地形の並び',
    cap: '上流から下流へ、川の運ぶ力と積もらせる力の関係が変わるにつれて、地形が入れかわる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="河川がつくる地形の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M20,40 L180,40 L300,70 L470,100 L620,120 L620,150 L20,150 Z" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="90" y="62" font-size="12.5">山地</text>'
      + '<text x="90" y="82" font-size="11" fill="var(--muted)">V字谷・河岸段丘</text>'
      + '<text x="250" y="96" font-size="12.5">扇状地</text>'
      + '<text x="250" y="116" font-size="11" fill="var(--muted)">砂礫・水が伏流／果樹園</text>'
      + '<text x="420" y="124" font-size="12.5">氾濫原</text>'
      + '<text x="420" y="142" font-size="11" fill="var(--muted)">自然堤防（集落）と後背湿地（水田）</text>'
      + '<text x="580" y="140" font-size="12.5">三角州</text>'
      + '<line x1="20" y1="30" x2="620" y2="30" stroke="var(--primary)" stroke-dasharray="4 4"/>'
      + '<text x="320" y="22" font-size="11" fill="var(--primary)">上流 ← 侵食がまさる　／　堆積がまさる → 下流</text>'
      + '<text x="320" y="176" font-size="11.5" fill="var(--muted)">海面が下がったり土地が隆起すると、同じ場所に段丘ができる</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'photo', t: '三角州（レナ川）', src: 'img/delta.jpg',
    cap: '川が海や湖に注ぐところで、運んできた土砂が積もってできる。枝分かれした流路が網の目をつくる。', credit: 'ウィキメディア・コモンズ「Lena River Delta - Landsat 2000.jpg」（Public domain）' },
  { at: 'sec2', k: 'photo', t: '氷河（ウプサラ氷河）', src: 'img/glacier.jpg',
    cap: '氷の重みと流れが谷を削り、U字谷やカール（圏谷）をつくる。溶けた先にはモレーン（堆石）が残る。', credit: 'ウィキメディア・コモンズ「Upsala Glacier, Argentina.jpg」（Public domain）' },
  { at: 'sec2', k: 'photo', t: 'フィヨルド（ノルウェー）', src: 'img/fjord.jpg',
    cap: '氷河が削ったU字谷に海水が入りこんだ入り江。水深が深く、良港になりやすい。', credit: 'ウィキメディア・コモンズ「Terrain of Norway with red snow.jpg」（Public domain）' },
  { at: 'sec2', k: 'photo', t: 'カルスト地形（桂林）', src: 'img/karst.jpg',
    cap: '石灰岩が雨水に溶けてできる地形。塔のように残った岩がタワーカルストである。', credit: 'ウィキメディア・コモンズ「Guilin Scenery.jpg」（Public domain）' },
],

kikou: [
  { at: 'ov', k: 'svg', t: '大気大循環と気候帯の並び',
    cap: '赤道で上昇した空気が高緯度で下降する。この循環が、雨の多い帯と乾いた帯を交互につくる。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大気大循環の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="80" y1="200" x2="80" y2="24" stroke="var(--border)" stroke-width="1.5"/>'
      + '<text x="24" y="204" font-size="11" fill="var(--muted)">赤道0度</text>'
      + '<text x="24" y="150" font-size="11" fill="var(--muted)">30度</text>'
      + '<text x="24" y="98" font-size="11" fill="var(--muted)">60度</text>'
      + '<text x="24" y="40" font-size="11" fill="var(--muted)">90度</text>'
      + '<rect x="96" y="184" width="300" height="26" rx="5" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="108" y="202" font-size="11.5" fill="var(--primary)">赤道低圧帯（上昇気流・多雨）＝熱帯雨林</text>'
      + '<rect x="96" y="132" width="300" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="108" y="150" font-size="11.5">亜熱帯高圧帯（下降気流・乾燥）＝砂漠</text>'
      + '<rect x="96" y="80" width="300" height="26" rx="5" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="108" y="98" font-size="11.5" fill="var(--primary)">亜寒帯低圧帯（上昇気流・多雨）＝西岸海洋性</text>'
      + '<rect x="96" y="28" width="300" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="108" y="46" font-size="11.5">極高圧帯（下降気流・乾燥）＝氷雪</text>'
      + '<text x="430" y="202" font-size="11.5" fill="var(--muted)">貿易風（北東・南東）</text>'
      + '<text x="430" y="150" font-size="11.5" fill="var(--muted)">中緯度高圧帯から吹き出す</text>'
      + '<text x="430" y="98" font-size="11.5" fill="var(--muted)">偏西風</text>'
      + '<text x="430" y="46" font-size="11.5" fill="var(--muted)">極偏東風</text>'
      + '<text x="430" y="172" font-size="11" fill="var(--muted)">※気圧帯は季節で南北に移動する</text>'
      + '<text x="430" y="122" font-size="11" fill="var(--muted)">　これがサバナ気候や地中海性気候を生む</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: 'ケッペンの気候区分',
    cap: '気温と降水量だけで区分する。記号の一文字目が気候帯、二文字目以降が雨の降り方を示す。',
    head: ['記号', '気候', '特徴', '例'],
    rows: [
      ['Af', '熱帯雨林', '一年中高温多雨', 'シンガポール、マナオス'],
      ['Aw', 'サバナ', '雨季と乾季がはっきり', 'バンコク、ブラジリア'],
      ['BW', '砂漠', '降水量がごく少ない', 'カイロ、リヤド'],
      ['BS', 'ステップ', '短い雨季。草原', 'ウランバートル'],
      ['Cs', '地中海性', '夏に乾燥、冬に雨', 'ローマ、サンフランシスコ'],
      ['Cfa', '温暖湿潤', '夏は高温多雨、冬は乾燥しがち', '東京、ニューヨーク'],
      ['Cfb', '西岸海洋性', '一年中おだやかで雨が平均', 'ロンドン、パリ'],
      ['Df', '亜寒帯湿潤', '冬が長く寒い。針葉樹林', 'モスクワ、札幌'],
      ['ET', 'ツンドラ', '最暖月が0〜10度', 'バロー'],
    ] },
  { at: 'sec0', k: 'photo', t: 'サハラ砂漠', src: 'img/desert.jpg',
    cap: '亜熱帯高圧帯の下で下降気流が続くため、雲ができにくく雨が降らない。国際宇宙ステーションからの撮影。', credit: 'ウィキメディア・コモンズ「ISS-64 Sahara Desert, Murzuq District in central Libya.jpg」（Public domain）' },
],

shokusei: [
  { at: 'ov', k: 'photo', t: 'アマゾンの熱帯雨林', src: 'img/rainforest.jpg',
    cap: '高温多雨の土地にできるラトソルは、養分が流れ出しやすく、じつは農業に向かない。白い筋は焼畑や森林火災の煙。', credit: 'ウィキメディア・コモンズ「Fires Arrive in the Amazon Rainforest (1489375).jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '気候帯と土壌の対応',
    cap: '成帯土壌は気候に応じてできる。それと別に、母岩に由来する間帯土壌がある。',
    head: ['土壌', '気候', '肥沃さ', '利用'],
    rows: [
      ['ラトソル', '熱帯', '低い（養分が流出）', '焼畑、プランテーション'],
      ['砂漠土', '乾燥帯', '低い（塩分が集まる）', 'オアシス農業'],
      ['チェルノーゼム', 'ステップ', 'きわめて高い', '小麦地帯（ウクライナ、北米）'],
      ['褐色森林土', '温帯', '比較的高い', '混合農業'],
      ['ポドゾル', '亜寒帯', '低い（酸性）', '林業'],
      ['テラロッサ', '石灰岩（間帯）', '中程度', '地中海の果樹'],
      ['レグール', '玄武岩（間帯）', '高い', 'インドの綿花'],
    ] },
  { at: 'sec1', k: 'svg', t: '自然災害と、その備え',
    cap: '災害の種類ごとに、起きる場所と有効な備えが違う。ハザードマップはその地域の弱点を示す。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="自然災害と備えの図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="24" width="150" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="87" y="46">地震・津波</text>'
      + '<text x="87" y="66" font-size="11" fill="var(--muted)">プレート境界</text>'
      + '<text x="87" y="82" font-size="11" fill="var(--muted)">耐震化・高台移転</text>'
      + '<rect x="174" y="24" width="150" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="249" y="46">火山噴火</text>'
      + '<text x="249" y="66" font-size="11" fill="var(--muted)">火砕流・火山灰</text>'
      + '<text x="249" y="82" font-size="11" fill="var(--muted)">監視と避難計画</text>'
      + '<rect x="336" y="24" width="150" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="411" y="46">洪水・土砂災害</text>'
      + '<text x="411" y="66" font-size="11" fill="var(--muted)">氾濫原・扇状地</text>'
      + '<text x="411" y="82" font-size="11" fill="var(--muted)">遊水地・砂防ダム</text>'
      + '<rect x="498" y="24" width="130" height="66" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="563" y="46">干ばつ・高潮</text>'
      + '<text x="563" y="66" font-size="11" fill="var(--muted)">乾燥帯・低平地</text>'
      + '<text x="563" y="82" font-size="11" fill="var(--muted)">灌漑・防潮堤</text>'
      + '<rect x="140" y="112" width="360" height="42" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="138" fill="var(--primary)">ハザードマップで、住む場所の危険を先に知っておく</text>'
      + '<text x="320" y="176" font-size="11.5" fill="var(--muted)">同じ強さの災害でも、備えのある社会とない社会で被害はまったく違う</text>'
      + '</g></svg>' },
],

nougyou: [
  { at: 'ov', k: 'photo', t: '棚田（佐渡）', src: 'img/terrace.jpg',
    cap: '斜面を段々に開いて水田にしたもの。限られた平地を補うために、人の手で地形そのものを作り変えている。', credit: 'ウィキメディア・コモンズ「Sado Island’s Riches (153867).jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '世界の農業の型',
    cap: '気候と人口、そして市場との距離が、どの農業が成り立つかを決める。',
    head: ['型', '地域', '作物・家畜', '特徴'],
    rows: [
      ['焼畑農業', '熱帯', 'イモ類・雑穀', '数年で移動。人口が増えると森が回復しない'],
      ['オアシス農業', '乾燥帯', 'ナツメヤシ・小麦', '地下水路（カナート・フォガラ）'],
      ['遊牧', '乾燥帯・寒帯', 'ヒツジ・ラクダ・トナカイ', '水と草を求めて移動'],
      ['アジア式稲作', 'モンスーンアジア', '米', '小規模・労働集約的。人口を支える'],
      ['混合農業', 'ヨーロッパ', '小麦と豚・牛', '作物と家畜を組み合わせる'],
      ['地中海式農業', '地中海沿岸', 'オリーブ・ブドウ・小麦', '夏の乾燥に耐える樹木作物'],
      ['企業的穀物農業', '北米・豪州', '小麦・とうもろこし', '大型機械。土地生産性は低く労働生産性は高い'],
      ['プランテーション', '熱帯の旧植民地', 'コーヒー・カカオ・天然ゴム', '単一作物に依存しがち'],
    ] },
  { at: 'sec0', k: 'svg', t: 'チューネンの農業立地論',
    cap: '市場からの距離と、運ぶ費用・いたみやすさで、作る物が同心円状に分かれるという考え方。',
    svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="チューネン圏の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<circle cx="200" cy="110" r="96" fill="var(--surface)" stroke="var(--border)"/>'
      + '<circle cx="200" cy="110" r="72" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<circle cx="200" cy="110" r="48" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<circle cx="200" cy="110" r="22" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="200" y="114" font-size="11" fill="var(--primary-text)">市場</text>'
      + '<text x="200" y="146" font-size="10.5" fill="var(--primary)">自由式</text>'
      + '<text x="200" y="170" font-size="10.5" fill="var(--text)">輪栽式</text>'
      + '<text x="200" y="196" font-size="10.5" fill="var(--text)">穀草式</text>'
      + '<text x="360" y="60" font-size="12.5">近いほど…</text>'
      + '<text x="360" y="82" font-size="11.5" fill="var(--muted)">いたみやすい・かさばるもの</text>'
      + '<text x="360" y="100" font-size="11.5" fill="var(--muted)">（野菜・牛乳）</text>'
      + '<text x="360" y="132" font-size="12.5">遠いほど…</text>'
      + '<text x="360" y="154" font-size="11.5" fill="var(--muted)">日もち・軽いもの</text>'
      + '<text x="360" y="172" font-size="11.5" fill="var(--muted)">（穀物・畜産）</text>'
      + '<text x="320" y="214" font-size="11" fill="var(--muted)">※冷蔵輸送が発達した現代では、この同心円はくずれている</text>'
      + '</g></svg>' },
],

suisan: [
  { at: 'ov', k: 'table', t: '世界のおもな漁場',
    cap: '魚が多く集まるのは、プランクトンが育ちやすい浅い海や、暖流と寒流がぶつかるところである。',
    head: ['漁場', '成り立ち', 'おもな魚'],
    rows: [
      ['北西太平洋', '潮目（黒潮と親潮）と大陸棚', 'サンマ・サバ・イワシ'],
      ['北東大西洋', 'バンク（ドッガーバンク）', 'ニシン・タラ'],
      ['北西大西洋', 'グランドバンク。潮目', 'タラ'],
      ['南東太平洋', '湧昇流（ペルー海流）', 'アンチョビー'],
    ] },
  { at: 'sec1', k: 'svg', t: '「とる漁業」から「育てる漁業」へ',
    cap: '排他的経済水域の設定と資源の減少で、日本の漁業は遠洋から養殖・栽培へ軸足を移した。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="漁業の形の変化の図">'
      + '<defs><marker id="ar-fi" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="30" width="170" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="99" y="52" font-size="12.5">遠洋漁業</text>'
      + '<text x="99" y="72" font-size="11" fill="var(--muted)">1970年代に最盛</text>'
      + '<text x="99" y="90" font-size="11" fill="var(--muted)">200海里で激減</text>'
      + '<rect x="206" y="30" width="170" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="291" y="52" font-size="12.5">沖合漁業</text>'
      + '<text x="291" y="72" font-size="11" fill="var(--muted)">1980年代の主力</text>'
      + '<text x="291" y="90" font-size="11" fill="var(--muted)">イワシの不漁で減少</text>'
      + '<rect x="398" y="30" width="228" height="70" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="512" y="52" font-size="12.5" fill="var(--primary)">養殖業・栽培漁業</text>'
      + '<text x="512" y="72" font-size="11" fill="var(--muted)">養殖＝出荷まで育てる</text>'
      + '<text x="512" y="90" font-size="11" fill="var(--muted)">栽培＝稚魚を放流して獲る</text>'
      + '<line x1="188" y1="65" x2="202" y2="65" stroke="var(--muted)" marker-end="url(#ar-fi)"/>'
      + '<line x1="380" y1="65" x2="394" y2="65" stroke="var(--muted)" marker-end="url(#ar-fi)"/>'
      + '<text x="320" y="134" font-size="11.5" fill="var(--muted)">1977年ごろから各国が200海里の排他的経済水域を設定した</text>'
      + '<text x="320" y="156" font-size="11.5" fill="var(--muted)">日本は水産物の輸入国になり、食料自給率の低さの一因にもなっている</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '食料をめぐる二つの問題',
    cap: '世界には足りない地域と余る地域があり、同時に起きている。',
    head: ['', '飢餓・栄養不足', '飽食・食品ロス'],
    rows: [
      ['地域', 'サハラ以南アフリカ、南アジア', '先進国'],
      ['原因', '紛争・干ばつ・輸出用作物への偏り', '過剰生産と流通の仕組み'],
      ['関連する語', 'モノカルチャー経済、フードセキュリティ', 'バーチャルウォーター、フードマイレージ'],
      ['対策', '品種改良、灌漑、公正な取引', '地産地消、ロスの削減'],
    ] },
],

shigen: [
  { at: 'ov', k: 'photo', t: 'ペルシア湾岸の夜', src: 'img/oilfield.jpg',
    cap: '明るい点は都市と油田のフレア（随伴ガスの燃焼）。世界の石油埋蔵量の約半分がこの地域に集まっている。', credit: 'ウィキメディア・コモンズ「Persian Gulf at Night.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '三つの化石燃料',
    cap: '偏りの大きさと燃やしたときの二酸化炭素の量が、エネルギー政策を左右する。',
    head: ['', '石炭', '石油', '天然ガス'],
    rows: [
      ['おもな産地', '中国・インド・米国・豪州', '中東・米国・ロシア', '米国・ロシア・中東'],
      ['偏り', '比較的分散', '中東に集中', '比較的分散'],
      ['輸送', '船・鉄道', 'タンカー・パイプライン', 'パイプライン・LNG船'],
      ['二酸化炭素', '多い', '中くらい', '少ない'],
      ['課題', '大気汚染', '価格の変動と政情', '液化と輸送に費用がかかる'],
    ] },
  { at: 'sec2', k: 'photo', t: '三峡ダム（中国）', src: 'img/dam.jpg',
    cap: '世界最大級の水力発電所。再生可能エネルギーである一方、住民の移転や生態系への影響という問題も抱えている。', credit: 'ウィキメディア・コモンズ「Three gorges dam from space.jpg」（Public domain）' },
  { at: 'sec2', k: 'svg', t: '発電方式の組み合わせは国で違う',
    cap: '資源があるか、国土の条件はどうか、何を重く見るかによって、電源の構成が分かれる。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="各国の発電方式の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<text x="20" y="30" font-size="11.5" fill="var(--muted)">火力が中心</text>'
      + '<rect x="20" y="38" width="300" height="26" rx="5" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="34" y="56" font-size="11.5">中国・インド・日本　石炭と天然ガスに依存</text>'
      + '<text x="20" y="90" font-size="11.5" fill="var(--muted)">原子力が中心</text>'
      + '<rect x="20" y="98" width="300" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="34" y="116" font-size="11.5">フランス　国内に資源が乏しく、原子力を選んだ</text>'
      + '<text x="20" y="150" font-size="11.5" fill="var(--muted)">水力・再生可能が中心</text>'
      + '<rect x="20" y="158" width="300" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="34" y="176" font-size="11.5">ノルウェー・ブラジル・カナダ　地形を生かす</text>'
      + '<rect x="346" y="38" width="274" height="146" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="483" y="62" text-anchor="middle" font-size="12.5">再生可能エネルギーの課題</text>'
      + '<text x="483" y="88" text-anchor="middle" font-size="11.5" fill="var(--muted)">天候に左右され、出力が安定しない</text>'
      + '<text x="483" y="110" text-anchor="middle" font-size="11.5" fill="var(--muted)">発電所に広い土地が要る</text>'
      + '<text x="483" y="132" text-anchor="middle" font-size="11.5" fill="var(--muted)">送電網と蓄電の整備が必要</text>'
      + '<text x="483" y="160" text-anchor="middle" font-size="11.5" fill="var(--primary)">だが二酸化炭素を出さず、資源の輸入に頼らない</text>'
      + '</g></svg>' },
],

kougyou: [
  { at: 'ov', k: 'table', t: 'ウェーバーの工業立地',
    cap: '原料と製品のどちらを運ぶほうが高くつくかで、工場を置く場所が決まる。',
    head: ['型', '置く場所', '理由', '例'],
    rows: [
      ['原料指向', '原料の産地', '加工すると軽くなる', 'セメント、製鉄、パルプ'],
      ['市場指向', '消費地の近く', '製品がかさばる・いたみやすい', 'ビール、印刷、家具'],
      ['労働力指向', '賃金の安い地域', '人手が多く要る', '繊維、組立'],
      ['交通指向', '港湾・空港', '輸入原料や軽薄短小な製品', '石油化学、IC（集積回路）'],
      ['集積指向', '関連工場の近く', '部品のやりとりが多い', '自動車'],
    ] },
  { at: 'sec2', k: 'svg', t: '産業構造が移っていく順序',
    cap: '経済が発展するにつれて、働く人の重心が第一次から第三次へ移る（ペティ・クラークの法則）。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="産業構造の変化の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="40" y="36" width="170" height="34" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="125" y="58" text-anchor="middle" font-size="11.5">第一次（農林水産）</text>'
      + '<rect x="40" y="80" width="90" height="34" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="85" y="102" text-anchor="middle" font-size="11.5">第二次</text>'
      + '<rect x="40" y="124" width="60" height="34" rx="6" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="70" y="146" text-anchor="middle" font-size="11.5">第三次</text>'
      + '<text x="232" y="58" font-size="11.5" fill="var(--muted)">←　発展途上の段階</text>'
      + '<rect x="400" y="36" width="60" height="34" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="430" y="58" text-anchor="middle" font-size="11.5">第一次</text>'
      + '<rect x="400" y="80" width="110" height="34" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="455" y="102" text-anchor="middle" font-size="11.5">第二次</text>'
      + '<rect x="400" y="124" width="200" height="34" rx="6" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="500" y="146" text-anchor="middle" font-size="11.5">第三次（サービス・情報）</text>'
      + '<text x="430" y="26" text-anchor="middle" font-size="11.5" fill="var(--muted)">先進国の段階</text>'
      + '<text x="320" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">工場が海外へ移ると、国内の製造業が細る（産業の空洞化）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'map', t: '地図：世界のおもな工業地域',
    cap: '原料の産地、港、そして技術者の集まる場所に、工業地域ができている。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="世界の工業地域の略図">'
      + '<rect x="0" y="0" width="640" height="210" fill="var(--surface2)"/>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="18" y="30" width="180" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="108" y="52" font-size="12.5">北アメリカ</text>'
      + '<text x="108" y="72" fill="var(--muted)">五大湖・メガロポリス</text>'
      + '<text x="108" y="90" fill="var(--muted)">サンベルト・シリコンヴァレー</text>'
      + '<rect x="228" y="30" width="180" height="70" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="318" y="52" font-size="12.5">ヨーロッパ</text>'
      + '<text x="318" y="72" fill="var(--muted)">ルール・ロレーヌ（重工業）</text>'
      + '<text x="318" y="90" fill="var(--muted)">「青いバナナ」の帯</text>'
      + '<rect x="438" y="30" width="184" height="70" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="530" y="52" font-size="12.5" fill="var(--primary)">東アジア・東南アジア</text>'
      + '<text x="530" y="72" fill="var(--muted)">太平洋ベルト（日本）</text>'
      + '<text x="530" y="90" fill="var(--muted)">経済特区（中国）・NIEs</text>'
      + '<rect x="130" y="120" width="180" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="220" y="142" font-size="12.5">ロシア・中央アジア</text>'
      + '<text x="220" y="162" fill="var(--muted)">資源に立地するコンビナート</text>'
      + '<rect x="334" y="120" width="180" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="424" y="142" font-size="12.5">南アジア・ブラジル</text>'
      + '<text x="424" y="162" fill="var(--muted)">ベンガルール（IT）・BRICS</text>'
      + '<text x="320" y="198" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
],

koutsuu: [
  { at: 'ov', k: 'photo', t: '夜の地球', src: 'img/citylight.jpg',
    cap: '明かりの分布は、人口・経済活動・電力網の分布をそのまま映している。暗い部分は砂漠・森林・海、そして電力の届かない地域。', credit: 'ウィキメディア・コモンズ「Earth’s City Lights by DMSP, 1994-1995 (large).jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '交通機関の使い分け',
    cap: '速さ・運べる量・費用・融通のきき方が違うので、距離と荷物の性質で選ばれる。',
    head: ['機関', '速さ', '量', '費用', '向いているもの'],
    rows: [
      ['船舶', '遅い', 'とても多い', '安い', '鉄鉱石・石油・コンテナ'],
      ['鉄道', '速い', '多い', '安い', '大陸内の大量輸送'],
      ['自動車', '中くらい', '少ない', '中くらい', '戸口から戸口まで'],
      ['航空機', 'とても速い', '少ない', '高い', 'IC・医薬品・生花・旅客'],
      ['パイプライン', '一定', '多い', '安い', '原油・天然ガス'],
    ] },
  { at: 'sec2', k: 'svg', t: '地域経済統合の広がり',
    cap: '関税を下げ、人や資本の移動を自由にするしくみ。統合の深さには段階がある。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="地域経済統合の段階の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="20" y="26" width="596" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="34" y="44" font-size="11.5">① 自由貿易協定（FTA）　域内の関税をなくす</text>'
      + '<rect x="20" y="58" width="520" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="34" y="76" font-size="11.5">② 関税同盟　域外への関税もそろえる</text>'
      + '<rect x="20" y="90" width="440" height="26" rx="5" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="34" y="108" font-size="11.5">③ 共同市場　人・モノ・資本・サービスが自由に動く</text>'
      + '<rect x="20" y="122" width="340" height="26" rx="5" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="34" y="140" font-size="11.5" fill="var(--primary)">④ 経済同盟　通貨や経済政策まで共通に（EU）</text>'
      + '<text x="20" y="172" font-size="11.5" fill="var(--muted)">おもな枠組み＝EU／USMCA／MERCOSUR／ASEAN／RCEP／CPTPP</text>'
      + '</g></svg>' },
],

jinkou: [
  { at: 'ov', k: 'svg', t: '人口転換と人口ピラミッド',
    cap: '多産多死から多産少死を経て少産少死へ。その段階が、ピラミッドの形に表れる。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="人口転換と人口ピラミッドの図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<polygon points="90,40 150,160 30,160" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="90" y="180" font-size="12.5">富士山型</text>'
      + '<text x="90" y="198" fill="var(--muted)">多産多死・発展途上</text>'
      + '<polygon points="255,40 300,160 210,160 215,100 295,100" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="255" y="180" font-size="12.5">つりがね型</text>'
      + '<text x="255" y="198" fill="var(--muted)">少産少死・安定</text>'
      + '<polygon points="420,40 455,160 385,160 392,110 448,110" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="400" y="140" width="40" height="20" fill="var(--surface2)"/>'
      + '<text x="420" y="180" font-size="12.5">つぼ型</text>'
      + '<text x="420" y="198" fill="var(--muted)">少子高齢・人口減少</text>'
      + '<rect x="500" y="36" width="130" height="128" rx="8" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="565" y="58" font-size="12">覚えかた</text>'
      + '<text x="565" y="80" font-size="11" fill="var(--muted)">裾が広い＝若い国</text>'
      + '<text x="565" y="100" font-size="11" fill="var(--muted)">胴が太い＝働き手が多い</text>'
      + '<text x="565" y="120" font-size="11" fill="var(--muted)">頭が重い＝高齢化</text>'
      + '<text x="565" y="146" font-size="11" fill="var(--primary)">日本は1990年代に</text>'
      + '<text x="565" y="160" font-size="11" fill="var(--primary)">つぼ型に入った</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '先進国と発展途上国の人口問題',
    cap: '人口が増えすぎる悩みと、減りすぎる悩みが、同じ時代に別の場所で起きている。',
    head: ['', '発展途上国', '先進国'],
    rows: [
      ['状況', '人口爆発', '少子高齢化・人口減少'],
      ['原因', '医療の普及で死亡率だけが下がった', '晩婚化、育児の負担、価値観の変化'],
      ['問題', '食料・教育・雇用が追いつかない', '労働力不足、社会保障の負担'],
      ['都市', 'プライメートシティ、スラムの拡大', '過疎と限界集落、都心の空洞化'],
      ['対策', '家族計画の普及と女性の教育', '保育の整備、移民の受け入れ、定年の延長'],
    ] },
  { at: 'sec2', k: 'svg', t: '人口移動の型',
    cap: '移動の理由が「押し出す力」か「引き寄せる力」かで、起きることが違ってくる。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="人口移動の型の図">'
      + '<defs><marker id="ar-jk" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="36" width="170" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="58" font-size="12.5">押し出す力</text>'
      + '<text x="109" y="78" font-size="11" fill="var(--muted)">貧困・紛争・災害・迫害</text>'
      + '<rect x="446" y="36" width="170" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="531" y="58" font-size="12.5">引き寄せる力</text>'
      + '<text x="531" y="78" font-size="11" fill="var(--muted)">仕事・賃金・教育・治安</text>'
      + '<rect x="240" y="36" width="160" height="60" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="58" font-size="12.5" fill="var(--primary)">移動</text>'
      + '<text x="320" y="78" font-size="11" fill="var(--muted)">出稼ぎ・移民・難民</text>'
      + '<line x1="198" y1="66" x2="236" y2="66" stroke="var(--primary)" marker-end="url(#ar-jk)"/>'
      + '<line x1="442" y1="66" x2="404" y2="66" stroke="var(--primary)" marker-end="url(#ar-jk)"/>'
      + '<text x="320" y="128" font-size="11.5" fill="var(--muted)">受け入れ側＝労働力が増える一方、摩擦も生まれる</text>'
      + '<text x="320" y="150" font-size="11.5" fill="var(--muted)">送り出し側＝送金が入る一方、働き手と頭脳が流出する</text>'
      + '</g></svg>' },
],

toshi: [
  { at: 'ov', k: 'photo', t: '東京（衛星画像）', src: 'img/megacity.jpg',
    cap: '人口3千万を超える都市圏。市街地が連続して広がり、どこまでが一つの都市か線を引きにくくなっている。', credit: 'ウィキメディア・コモンズ「Landsat View, Tokyo, Japan - Flickr - NASA Goddard Photo and Video.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '都市の内部構造',
    cap: '中心から外へ、土地の使われ方が層になって並ぶ。地価がその並びを決めている。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="都市の内部構造の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<circle cx="190" cy="105" r="92" fill="var(--surface)" stroke="var(--border)"/>'
      + '<circle cx="190" cy="105" r="66" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<circle cx="190" cy="105" r="38" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="190" y="108" font-size="11" fill="var(--primary)">CBD</text>'
      + '<text x="190" y="156" font-size="11">住宅地</text>'
      + '<text x="190" y="188" font-size="11">郊外</text>'
      + '<text x="420" y="50" font-size="12.5">中心業務地区（CBD）</text>'
      + '<text x="420" y="70" font-size="11" fill="var(--muted)">地価が最も高い。昼間人口が多い</text>'
      + '<text x="420" y="100" font-size="12.5">住宅地・工業地</text>'
      + '<text x="420" y="120" font-size="11" fill="var(--muted)">インナーシティ問題が起きやすい</text>'
      + '<text x="420" y="150" font-size="12.5">郊外</text>'
      + '<text x="420" y="170" font-size="11" fill="var(--muted)">ニュータウン。のちに高齢化する</text>'
      + '<text x="320" y="202" font-size="11" fill="var(--muted)">都心の空洞化（ドーナツ化）のあと、再開発で都心回帰が起きることもある</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '都市問題のくらべかた',
    cap: '発展途上国と先進国では、同じ「都市問題」でも中身がまったく違う。',
    head: ['', '発展途上国の都市', '先進国の都市'],
    rows: [
      ['人口', '農村からの流入で急増', '都心は減り、郊外へ広がる'],
      ['住まい', 'スラムの拡大', 'インナーシティの老朽化'],
      ['仕事', 'インフォーマルセクター', '失業と格差'],
      ['インフラ', '上下水道・交通が追いつかない', '施設の更新費用がかさむ'],
      ['特徴的な語', 'プライメートシティ', 'スプロール、ジェントリフィケーション'],
    ] },
],

minzoku: [
  { at: 'ov', k: 'table', t: '世界のおもな宗教',
    cap: '信者の数だけでなく、戒律が生活のどこまで及ぶかを見ると、地域の暮らしが読み取れる。',
    head: ['宗教', '分布', '特徴'],
    rows: [
      ['キリスト教', 'ヨーロッパ・南北アメリカ・オセアニア', 'カトリック・プロテスタント・正教会'],
      ['イスラーム', '西アジア・北アフリカ・東南アジアの一部', '豚肉と飲酒を避ける。1日5回の礼拝'],
      ['ヒンドゥー教', 'インド・ネパール', '牛を神聖視。カースト制と結びつく'],
      ['仏教', '東アジア・東南アジア', '上座部（東南アジア）と大乗（東アジア）'],
      ['ユダヤ教', 'イスラエルと各地', '選民思想。コーシェルの食の規定'],
    ] },
  { at: 'sec1', k: 'svg', t: '国境の引き方',
    cap: '自然を使った国境と、人が線を引いた国境がある。後者は紛争の種になりやすい。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="国境の種類の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="110" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="159" y="54" font-size="13">自然的国境</text>'
      + '<text x="159" y="78" font-size="11.5" fill="var(--muted)">山脈＝ピレネー（仏西）</text>'
      + '<text x="159" y="98" font-size="11.5" fill="var(--muted)">河川＝リオグランデ（米墨）</text>'
      + '<text x="159" y="118" font-size="11.5" fill="var(--muted)">湖沼・海峡</text>'
      + '<rect x="346" y="30" width="270" height="110" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="481" y="54" font-size="13" fill="var(--primary)">人為的国境</text>'
      + '<text x="481" y="78" font-size="11.5" fill="var(--muted)">経緯線＝アフリカの直線的な国境</text>'
      + '<text x="481" y="98" font-size="11.5" fill="var(--muted)">植民地時代に列強が引いた</text>'
      + '<text x="481" y="118" font-size="11.5" fill="var(--muted)">民族の分布を無視している</text>'
      + '<text x="320" y="168" font-size="11.5" fill="var(--muted)">一つの民族が複数国に分かれる（クルド人）と、民族問題が長く続きやすい</text>'
      + '</g></svg>' },
],

'chishi-asia': [
  { at: 'ov', k: 'map', t: '地図：アジアの区分',
    cap: '気候と宗教、そして経済発展の段階で、アジアはいくつもの顔をもつ。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="アジアの地域区分の略図">'
      + '<rect x="0" y="0" width="640" height="215" fill="var(--surface2)"/>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="440" y="24" width="180" height="76" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="530" y="46" font-size="12.5" fill="var(--primary)">東アジア</text>'
      + '<text x="530" y="66" fill="var(--muted)">中国・韓国・日本</text>'
      + '<text x="530" y="84" fill="var(--muted)">儒教文化圏／工業化が進む</text>'
      + '<rect x="440" y="118" width="180" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="530" y="140" font-size="12.5">東南アジア</text>'
      + '<text x="530" y="160" fill="var(--muted)">ASEAN・モンスーン</text>'
      + '<text x="530" y="178" fill="var(--muted)">仏教・イスラーム・キリスト教</text>'
      + '<rect x="236" y="118" width="180" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="326" y="140" font-size="12.5">南アジア</text>'
      + '<text x="326" y="160" fill="var(--muted)">インド・パキスタン</text>'
      + '<text x="326" y="178" fill="var(--muted)">ヒンドゥー教／ITと人口</text>'
      + '<rect x="236" y="24" width="180" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="326" y="46" font-size="12.5">中央アジア</text>'
      + '<text x="326" y="66" fill="var(--muted)">乾燥帯・旧ソ連</text>'
      + '<text x="326" y="84" fill="var(--muted)">資源とシルクロード</text>'
      + '<rect x="24" y="24" width="188" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="118" y="46" font-size="12.5">西アジア</text>'
      + '<text x="118" y="66" fill="var(--muted)">イスラーム・石油</text>'
      + '<text x="118" y="84" fill="var(--muted)">OPEC・紛争</text>'
      + '<rect x="24" y="118" width="188" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="118" y="140" font-size="12.5">アフリカ</text>'
      + '<text x="118" y="160" fill="var(--muted)">サハラで南北に分かれる</text>'
      + '<text x="118" y="178" fill="var(--muted)">モノカルチャー経済が残る</text>'
      + '<text x="320" y="210" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '中国の地域差',
    cap: '東の沿海部と西の内陸部で、気候も産業も所得も大きく違う。',
    head: ['', '東部（沿海）', '西部（内陸）'],
    rows: [
      ['気候', '湿潤。北は畑作、南は稲作', '乾燥帯・高山'],
      ['産業', '経済特区・輸出向け工業', '牧畜、資源開発'],
      ['人口', '密集', '希薄。少数民族が多い'],
      ['政策', '改革開放で先に発展', '西部大開発で格差を縮めようとする'],
    ] },
],

'chishi-west': [
  { at: 'ov', k: 'photo', t: '夜のヨーロッパ', src: 'img/europe-night.jpg',
    cap: '国境をこえて明かりが連なる。人口が集まる帯は、そのまま工業と交通の軸にもなっている。', credit: 'ウィキメディア・コモンズ「ISS-45 south east Europe at night.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'EUのしくみと課題',
    cap: '統合を深めるほど、豊かな国と厳しい国のあいだの溝が見えやすくなる。',
    head: ['項目', '内容'],
    rows: [
      ['始まり', 'ECSC（1952）→ EEC → EC → EU（1993、マーストリヒト条約）'],
      ['共通通貨', 'ユーロ。導入していない国もある'],
      ['自由移動', 'シェンゲン協定で国境検査をなくす'],
      ['共通政策', '共通農業政策（CAP）、地域政策'],
      ['課題', '南北の経済格差、移民・難民の受け入れ、イギリスの離脱'],
    ] },
  { at: 'sec1', k: 'svg', t: 'アメリカ合衆国の農業地域',
    cap: '気温と降水量に応じて、東西・南北に帯状の農業地域が並ぶ（適地適作）。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="アメリカの農業地域の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<rect x="40" y="26" width="560" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="54" y="44">酪農地帯　五大湖周辺。涼しく、大都市が近い</text>'
      + '<rect x="40" y="58" width="560" height="26" rx="5" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="54" y="76" fill="var(--primary)">とうもろこし地帯（コーンベルト）　中西部。飼料と肉牛・豚</text>'
      + '<rect x="40" y="90" width="560" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="54" y="108">小麦地帯　グレートプレーンズ。北は春小麦、南は冬小麦</text>'
      + '<rect x="40" y="122" width="560" height="26" rx="5" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="54" y="140">綿花地帯（旧コットンベルト）　南部。現在は大豆や畜産に転換が進む</text>'
      + '<text x="320" y="176" text-anchor="middle" font-size="11.5" fill="var(--muted)">西経100度の線を境に、東は農耕、西は放牧が中心になる</text>'
      + '</g></svg>' },
],

nihon: [
  { at: 'ov', k: 'photo', t: '日本列島（衛星画像）', src: 'img/japanmap.jpg',
    cap: '国土の約4分の3が山地。平野は海沿いに点在し、そこに人口と産業が集中している。', credit: 'ウィキメディア・コモンズ「Satellite image of Japan in April 2018.png」（Public domain）' },
  { at: 'sec0', k: 'photo', t: '噴火する火山（エトナ山）', src: 'img/volcano.jpg',
    cap: '日本も同じ変動帯にある。火山は災害をもたらす一方、温泉・地熱・観光という恵みももたらす。', credit: 'ウィキメディア・コモンズ「Etna eruption seen from the International Space Station.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '日本の自然の特徴',
    cap: '変動帯にあり、モンスーンの影響を受けることが、災害と恵みの両方を生んでいる。',
    head: ['項目', '内容', '結果'],
    rows: [
      ['位置', '4つのプレートがぶつかる変動帯', '地震・火山が多い'],
      ['地形', '国土の約75％が山地。川は短く急', '扇状地・三角州が発達。水害が起きやすい'],
      ['気候', 'モンスーンと梅雨、台風', '降水量が多く、水に恵まれる'],
      ['季節風', '冬は北西、夏は南東', '日本海側は雪、太平洋側は夏に雨'],
      ['海流', '黒潮・親潮・対馬海流・リマン海流', '潮目が好漁場になる'],
    ] },
  { at: 'sec2', k: 'svg', t: '日本の産業の地理',
    cap: '原料の輸入と製品の輸出に便利な海沿いに、工業が帯のように連なってきた。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="日本の工業地域の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="40" width="600" height="46" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="60" font-size="12.5" fill="var(--primary)">太平洋ベルト</text>'
      + '<text x="320" y="78" fill="var(--muted)">京浜・中京・阪神・瀬戸内・北九州</text>'
      + '<text x="130" y="112" font-size="12">中京＝自動車</text>'
      + '<text x="320" y="112" font-size="12">京浜＝機械・印刷</text>'
      + '<text x="510" y="112" font-size="12">瀬戸内＝石油化学・鉄鋼</text>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">内陸には高速道路に沿って工業団地ができた（北関東工業地域）</text>'
      + '<text x="320" y="168" font-size="11.5" fill="var(--muted)">空洞化が進む一方、ICや医薬品など軽くて高価な製品は空港の近くに立地する</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
