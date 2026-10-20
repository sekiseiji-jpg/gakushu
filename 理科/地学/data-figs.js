/* 地学 ― 単元の説明に添える図・表・地図・写真 */
const FIGS = {

naibu: [
  { at: 'ov', k: 'photo', t: '地球（アポロ17号）', src: 'img/earth.jpg',
    cap: '1972年の撮影。アフリカ大陸と南極が写り、雲と海と陸の配置が一枚で見てとれる。', credit: 'ウィキメディア・コモンズ「The Earth seen from Apollo 17.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '地球の層構造',
    cap: '物質で分けると地殻・マントル・核。かたさで分けるとリソスフェア・アセノスフェア。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="地球の層構造の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<circle cx="180" cy="106" r="94" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<circle cx="180" cy="106" r="62" fill="var(--surface)" stroke="var(--border)"/>'
      + '<circle cx="180" cy="106" r="32" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="180" y="110" text-anchor="middle" font-size="11" fill="var(--primary)">内核</text>'
      + '<text x="180" y="156" text-anchor="middle" font-size="11">外核</text>'
      + '<text x="180" y="188" text-anchor="middle" font-size="11">マントル</text>'
      + '<text x="350" y="46" font-size="12">地殻　大陸は30〜40km、海洋は5〜10km</text>'
      + '<text x="350" y="74" font-size="12">マントル　深さ約2900kmまで。かんらん岩質</text>'
      + '<text x="350" y="102" font-size="12">外核　液体の鉄とニッケル。S波が伝わらない</text>'
      + '<text x="350" y="130" font-size="12">内核　固体の鉄</text>'
      + '<text x="350" y="166" font-size="11.5" fill="var(--muted)">地殻とマントル最上部を合わせた固い層＝リソスフェア</text>'
      + '<text x="350" y="186" font-size="11.5" fill="var(--muted)">その下のやわらかい層＝アセノスフェア</text>'
      + '<text x="350" y="206" font-size="11.5" fill="var(--muted)">地殻とマントルの境＝モホロビチッチ不連続面</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '地震波の性質',
    cap: '伝わる速さと、通れる場所の違いから、地球の内部構造が分かった。',
    head: ['', 'P波', 'S波'],
    rows: [
      ['波の種類', '縦波（疎密波）', '横波'],
      ['速さ', '速い（約7km/s）', '遅い（約4km/s）'],
      ['液体中', '伝わる', '伝わらない'],
      ['初動', '初期微動', '主要動'],
      ['分かったこと', '—', '外核が液体であること'],
    ] },
],

plate: [
  { at: 'ov', k: 'map', t: '地図：プレートの境界',
    cap: '地震と火山の帯は、プレートの境界とほぼ重なる。日本は4枚が集まる場所にある。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="プレート境界の略図">'
      + '<rect x="0" y="0" width="640" height="210" fill="var(--surface2)"/>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="180" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="114" y="52" font-size="12.5">狭まる境界</text>'
      + '<text x="114" y="72" fill="var(--muted)">海溝・弧状列島・火山</text>'
      + '<text x="114" y="90" fill="var(--muted)">日本海溝、アンデス</text>'
      + '<rect x="230" y="30" width="180" height="76" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="52" font-size="12.5" fill="var(--primary)">広がる境界</text>'
      + '<text x="320" y="72" fill="var(--muted)">海嶺・地溝帯</text>'
      + '<text x="320" y="90" fill="var(--muted)">大西洋中央海嶺、アフリカ大地溝帯</text>'
      + '<rect x="436" y="30" width="180" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="526" y="52" font-size="12.5">ずれる境界</text>'
      + '<text x="526" y="72" fill="var(--muted)">トランスフォーム断層</text>'
      + '<text x="526" y="90" fill="var(--muted)">サンアンドレアス断層</text>'
      + '<rect x="150" y="126" width="340" height="56" rx="9" fill="var(--surface)" stroke="var(--primary)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="148" font-size="12.5">日本付近は4枚が集まる</text>'
      + '<text x="320" y="170" fill="var(--muted)">太平洋・フィリピン海・北アメリカ・ユーラシア</text>'
      + '<text x="320" y="200" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '震度とマグニチュード',
    cap: '揺れの強さと、地震そのものの大きさ。まったく別のものを測っている。',
    head: ['', '震度', 'マグニチュード'],
    rows: [
      ['測るもの', 'その場所の揺れの強さ', '地震が出したエネルギー'],
      ['一つの地震で', '場所ごとに違う', '一つだけ'],
      ['階級', '0〜7（5と6は強弱に分かれ10階級）', '連続した数値'],
      ['1大きいと', '—', 'エネルギーは約32倍'],
      ['2大きいと', '—', 'エネルギーは1000倍'],
    ] },
],

kazan: [
  { at: 'ov', k: 'photo', t: '溶岩の噴出', src: 'img/volcano.jpg',
    cap: '粘り気の小さい玄武岩質のマグマは、噴水のように流れ出る。粘り気が大きいと爆発的な噴火になる。', credit: 'ウィキメディア・コモンズ「Lava fountain dome 2.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'マグマの粘り気と火山の形',
    cap: '二酸化ケイ素の量がすべてを決める。形・噴火・岩石・色がセットで変わる。',
    head: ['SiO₂', '粘り気', '火山の形', '噴火', '火山岩'],
    rows: [
      ['少ない（約50％）', '小さい', '盾状火山', 'おだやか', '玄武岩（黒っぽい）'],
      ['中くらい（約60％）', '中くらい', '成層火山', '中間', '安山岩'],
      ['多い（約70％）', '大きい', '溶岩ドーム', '爆発的', '流紋岩（白っぽい）'],
    ] },
  { at: 'sec1', k: 'photo', t: '花こう岩', src: 'img/granite.jpg',
    cap: 'マグマが地下深くでゆっくり冷えると、鉱物が大きく成長して等粒状組織になる。深成岩の代表。', credit: 'ウィキメディア・コモンズ「Alkalic granite (GeoDIL number - 22).jpg」（CC0）' },
  { at: 'sec1', k: 'svg', t: '火成岩の分類',
    cap: '冷え方（組織）と化学組成（色）の二つの軸で、六つに分かれる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="火成岩の分類表">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="150" y="30" width="150" height="34" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="225" y="52" font-size="11.5">白っぽい（SiO₂多）</text>'
      + '<rect x="300" y="30" width="150" height="34" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="375" y="52" font-size="11.5">中間</text>'
      + '<rect x="450" y="30" width="150" height="34" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="525" y="52" font-size="11.5">黒っぽい（SiO₂少）</text>'
      + '<rect x="30" y="64" width="120" height="48" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="90" y="84" font-size="11.5">火山岩</text>'
      + '<text x="90" y="102" font-size="10.5" fill="var(--muted)">急冷・斑状組織</text>'
      + '<rect x="150" y="64" width="150" height="48" fill="var(--surface)" stroke="var(--border)"/><text x="225" y="94">流紋岩</text>'
      + '<rect x="300" y="64" width="150" height="48" fill="var(--surface)" stroke="var(--border)"/><text x="375" y="94">安山岩</text>'
      + '<rect x="450" y="64" width="150" height="48" fill="var(--surface)" stroke="var(--border)"/><text x="525" y="94">玄武岩</text>'
      + '<rect x="30" y="112" width="120" height="48" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="90" y="132" font-size="11.5">深成岩</text>'
      + '<text x="90" y="150" font-size="10.5" fill="var(--muted)">徐冷・等粒状組織</text>'
      + '<rect x="150" y="112" width="150" height="48" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="225" y="142" fill="var(--primary)">花こう岩</text>'
      + '<rect x="300" y="112" width="150" height="48" fill="var(--surface)" stroke="var(--border)"/><text x="375" y="142">閃緑岩</text>'
      + '<rect x="450" y="112" width="150" height="48" fill="var(--surface)" stroke="var(--border)"/><text x="525" y="142">斑れい岩</text>'
      + '</g></svg>' },
],

taiseki: [
  { at: 'ov', k: 'photo', t: '地層（グランドキャニオン）', src: 'img/strata.jpg',
    cap: '下ほど古い（地層累重の法則）。境目や色の違いから、堆積した当時の環境が読める。', credit: 'ウィキメディア・コモンズ「Grand Canyon National Park, Yavapai Museum of Geology 2926 - Flickr - Grand Canyon NPS.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '堆積岩の分類',
    cap: '何が、どのようにして固まったかで分ける。',
    head: ['分類', 'できかた', '例'],
    rows: [
      ['砕屑岩', '岩石の破片が固まる', 'れき岩・砂岩・泥岩'],
      ['火山砕屑岩', '火山噴出物が固まる', '凝灰岩'],
      ['生物岩', '生物の遺骸が積もる', '石灰岩・チャート'],
      ['化学岩', '水に溶けた成分が沈殿', '岩塩・石こう'],
    ] },
  { at: 'sec2', k: 'photo', t: 'アンモナイト', src: 'img/ammonite.jpg',
    cap: '中生代に栄え、白亜紀末に絶滅した。広い範囲に短期間だけ分布したので、示準化石として地層の年代を決められる。', credit: 'ウィキメディア・コモンズ「Asteroceras sp., Early Early Jurassic, Frodingham Ironstone Formation, Scunthorpe, England - Houston Museum of Natural Science - DSC01894.JPG」（CC0）' },
],

henseigan: [
  { at: 'ov', k: 'photo', t: '片麻岩', src: 'img/gneiss.jpg',
    cap: '高い温度と圧力で鉱物が並び、縞模様ができている。広域変成作用でできる代表的な変成岩。', credit: 'ウィキメディア・コモンズ「Gneiss, Kópháza .jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '変成作用の種類',
    cap: '何が原因で変わったかによって、できる岩石も構造も変わる。',
    head: ['', '接触変成作用', '広域変成作用'],
    rows: [
      ['原因', 'マグマの熱', 'プレートの沈みこみによる熱と圧力'],
      ['範囲', '狭い（貫入岩の周り）', '広い（造山帯）'],
      ['できる岩石', 'ホルンフェルス、結晶質石灰岩', '結晶片岩、片麻岩'],
      ['組織', '方向性がない', '片理・片麻構造（方向性がある）'],
    ] },
],

taiki: [
  { at: 'ov', k: 'photo', t: '大気の層（国際宇宙ステーションから）', src: 'img/limb.jpg',
    cap: '地平線のきわに見える薄い青い層が大気。地球の半径に比べて驚くほど薄い。', credit: 'ウィキメディア・コモンズ「Viewing Earth’s Limb (3338 - ISS001-421-24 lrg).jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: '大気の層構造',
    cap: '気温が上がるか下がるかで層を区切る。オゾン層が成層圏を暖めている。',
    svg: '<svg viewBox="0 0 640 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大気の層構造の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<rect x="70" y="26" width="300" height="34" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="82" y="48">熱圏　約80km〜　オーロラ、電離層</text>'
      + '<rect x="70" y="60" width="300" height="34" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="82" y="82">中間圏　約50〜80km　気温は下がる</text>'
      + '<rect x="70" y="94" width="300" height="34" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="82" y="116" fill="var(--primary)">成層圏　約11〜50km　オゾン層</text>'
      + '<rect x="70" y="128" width="300" height="34" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="82" y="150">対流圏　地表〜約11km　天気が起きる</text>'
      + '<path d="M400,160 L430,130 L410,96 L450,62 L420,30" fill="none" stroke="var(--accent)" stroke-width="2"/>'
      + '<text x="462" y="40" font-size="11" fill="var(--accent)">気温の変化</text>'
      + '<text x="400" y="186" font-size="11.5" fill="var(--muted)">対流圏では100mで約0.65℃下がる</text>'
      + '<text x="82" y="186" font-size="11.5" fill="var(--muted)">大気圧は高さとともに急に下がる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '温室効果のしくみ',
    cap: '太陽からは可視光で届き、地球からは赤外線で出ていく。その赤外線を温室効果ガスが捕まえる。',
    head: ['段階', '起きること'],
    rows: [
      ['① 入射', '太陽放射（おもに可視光）が大気を通って地表を暖める'],
      ['② 放射', '地表が赤外線を出す'],
      ['③ 吸収', '二酸化炭素・水蒸気・メタンが赤外線を吸収する'],
      ['④ 再放射', '大気が地表へ赤外線を返す。これが温室効果'],
      ['結果', 'この効果がなければ地表の平均気温は－18℃ほどになる'],
    ] },
],

tenki: [
  { at: 'ov', k: 'photo', t: '台風（宇宙から）', src: 'img/typhoon.jpg',
    cap: '中心の目のまわりを雲が渦巻く。暖かい海からの水蒸気がエネルギー源になっている。', credit: 'ウィキメディア・コモンズ「Hurricane Isabel from ISS.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '温暖前線と寒冷前線',
    cap: '暖気と寒気のどちらが押すかで、雲の形も雨の降り方も変わる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="前線の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="30" y1="130" x2="610" y2="130" stroke="var(--border)" stroke-width="2"/>'
      + '<path d="M60,130 L300,60" stroke="var(--bad)" stroke-width="2.5" fill="none"/>'
      + '<text x="70" y="52" font-size="12" fill="var(--bad)">温暖前線</text>'
      + '<text x="70" y="70" font-size="11" fill="var(--muted)">暖気が寒気の上をはい上がる</text>'
      + '<text x="70" y="88" font-size="11" fill="var(--muted)">乱層雲　広い範囲に弱い雨が長く</text>'
      + '<path d="M580,130 L430,50" stroke="var(--good)" stroke-width="2.5" fill="none"/>'
      + '<text x="430" y="40" font-size="12" fill="var(--good)">寒冷前線</text>'
      + '<text x="372" y="92" font-size="11" fill="var(--muted)">寒気が暖気を押し上げる</text>'
      + '<text x="372" y="110" font-size="11" fill="var(--muted)">積乱雲　狭い範囲に強い雨が短く</text>'
      + '<text x="320" y="152" text-anchor="middle" font-size="11.5">通過後　温暖前線＝気温が上がる／寒冷前線＝気温が下がり風向が変わる</text>'
      + '<text x="320" y="174" text-anchor="middle" font-size="11.5" fill="var(--muted)">寒冷前線が温暖前線に追いつくと閉塞前線になる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '日本の四季と気団',
    cap: 'どの気団が強いかで、季節の天気が決まる。',
    head: ['季節', '気圧配置', '気団', '天気'],
    rows: [
      ['冬', '西高東低', 'シベリア（寒冷・乾燥）', '日本海側は雪、太平洋側は晴れ'],
      ['春・秋', '移動性高気圧と低気圧が交互', '揚子江（温暖・乾燥）', '天気が周期的に変わる'],
      ['梅雨', '停滞前線', 'オホーツク海と小笠原がぶつかる', '長雨'],
      ['夏', '南高北低', '小笠原（温暖・湿潤）', '蒸し暑く晴れる'],
    ] },
],

kaiyou: [
  { at: 'ov', k: 'photo', t: '海流と海面水温', src: 'img/ocean.jpg',
    cap: '暖流が高緯度へ熱を運ぶ。海は大気よりはるかに多くの熱を蓄え、気候を安定させている。', credit: 'ウィキメディア・コモンズ「Gulf Stream Sea Surface Currents and Temperatures NASA SVS.jpg」（Public domain）' },
  { at: 'sec2', k: 'svg', t: 'エルニーニョ現象',
    cap: '貿易風が弱まると暖水が東へ移り、世界中の天候に影響する。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="エルニーニョ現象の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="159" y="54" font-size="12.5">平常時</text>'
      + '<text x="159" y="78" fill="var(--muted)">貿易風が暖水を西へ吹き寄せる</text>'
      + '<text x="159" y="98" fill="var(--muted)">西（インドネシア）＝高温・多雨</text>'
      + '<text x="159" y="118" fill="var(--muted)">東（ペルー沖）＝湧昇流で冷たく好漁場</text>'
      + '<rect x="346" y="30" width="270" height="110" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="481" y="54" font-size="12.5" fill="var(--primary)">エルニーニョ</text>'
      + '<text x="481" y="78" fill="var(--muted)">貿易風が弱まり、暖水が東へ広がる</text>'
      + '<text x="481" y="98" fill="var(--muted)">ペルー沖の水温が上がり、漁獲が減る</text>'
      + '<text x="481" y="118" fill="var(--muted)">日本は冷夏・暖冬になりやすい</text>'
      + '<text x="320" y="168" font-size="11.5" fill="var(--muted)">逆に貿易風が強まる場合をラニーニャ現象という</text>'
      + '</g></svg>' },
],

taiyoukei: [
  { at: 'ov', k: 'photo', t: '太陽のフレア', src: 'img/sun.jpg',
    cap: '表面の爆発現象。放出された荷電粒子が地球に届くと、オーロラや通信障害を起こすことがある。', credit: 'ウィキメディア・コモンズ「Strong Solar Flare Erupts from Sun, May 27, 2024 and Another May 29th (SVS14597 - SDO May 29 2024 1434UT 131).jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '惑星の分類',
    cap: '密度と大きさで二つに分かれる。太陽からの距離がその違いを生んだ。',
    head: ['', '地球型惑星', '木星型惑星'],
    rows: [
      ['該当', '水星・金星・地球・火星', '木星・土星・天王星・海王星'],
      ['大きさ', '小さい', '大きい'],
      ['密度', '大きい（約5g/cm³）', '小さい（約1g/cm³）'],
      ['主成分', '岩石と金属', '水素とヘリウム（＋氷）'],
      ['自転', '遅い', '速い'],
      ['衛星・環', '少ない／ない', '多い／ある'],
    ] },
],

kousei: [
  { at: 'ov', k: 'photo', t: '球状星団', src: 'img/starcluster.jpg',
    cap: '数十万個の星が重力で球状に集まっている。銀河系の形成初期にできた古い星の集まり。', credit: 'ウィキメディア・コモンズ「Heart of M13 Hercules Globular Cluster.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: 'HR図の読み方',
    cap: '横軸が温度（左ほど高温）、縦軸が明るさ。星の一生の段階が位置で分かる。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="HR図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="80" y1="180" x2="560" y2="180" stroke="var(--border)"/>'
      + '<line x1="80" y1="24" x2="80" y2="180" stroke="var(--border)"/>'
      + '<text x="300" y="202" text-anchor="middle" font-size="11" fill="var(--muted)">← 表面温度が高い　　低い →</text>'
      + '<text x="46" y="24" font-size="11" fill="var(--muted)">明</text>'
      + '<text x="46" y="178" font-size="11" fill="var(--muted)">暗</text>'
      + '<line x1="120" y1="40" x2="500" y2="162" stroke="var(--primary)" stroke-width="12" stroke-linecap="round" opacity="0.35"/>'
      + '<text x="300" y="112" font-size="12" fill="var(--primary)">主系列星</text>'
      + '<ellipse cx="450" cy="58" rx="70" ry="22" fill="var(--accent)" opacity="0.3"/>'
      + '<text x="450" y="62" text-anchor="middle" font-size="11.5">赤色巨星</text>'
      + '<ellipse cx="180" cy="152" rx="52" ry="18" fill="var(--muted)" opacity="0.3"/>'
      + '<text x="180" y="156" text-anchor="middle" font-size="11.5">白色矮星</text>'
      + '<text x="540" y="40" font-size="11" fill="var(--muted)">星の一生</text>'
      + '<text x="540" y="56" font-size="11" fill="var(--muted)">主系列 →</text>'
      + '<text x="540" y="72" font-size="11" fill="var(--muted)">巨星 →</text>'
      + '<text x="540" y="88" font-size="11" fill="var(--muted)">白色矮星</text>'
      + '<text x="540" y="104" font-size="11" fill="var(--muted)">（重い星は</text>'
      + '<text x="540" y="120" font-size="11" fill="var(--muted)">超新星爆発へ）</text>'
      + '</g></svg>' },
],

ginga: [
  { at: 'ov', k: 'photo', t: '渦巻銀河', src: 'img/galaxy.jpg',
    cap: '円盤と渦状の腕をもつ。われわれの銀河系も、外から見ればこのような姿をしていると考えられている。', credit: 'ウィキメディア・コモンズ「Messier51 sRGB.jpg」（Public domain）' },
  { at: 'sec2', k: 'svg', t: 'ハッブルの法則と宇宙の膨張',
    cap: '遠い銀河ほど速く遠ざかる。これをさかのぼると、宇宙に始まりがあったことになる。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ハッブルの法則の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="80" y1="150" x2="400" y2="150" stroke="var(--border)"/>'
      + '<line x1="80" y1="24" x2="80" y2="150" stroke="var(--border)"/>'
      + '<line x1="80" y1="150" x2="380" y2="40" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<circle cx="150" cy="124" r="4" fill="var(--text)"/>'
      + '<circle cx="230" cy="94" r="4" fill="var(--text)"/>'
      + '<circle cx="310" cy="66" r="4" fill="var(--text)"/>'
      + '<text x="46" y="24" font-size="11" fill="var(--muted)">後退速度</text>'
      + '<text x="406" y="154" font-size="11" fill="var(--muted)">距離</text>'
      + '<text x="440" y="56" font-size="12">v ＝ H₀ d</text>'
      + '<text x="440" y="82" font-size="11.5" fill="var(--muted)">遠い銀河ほど速く遠ざかる</text>'
      + '<text x="440" y="104" font-size="11.5" fill="var(--muted)">スペクトルが赤方偏移する</text>'
      + '<text x="440" y="130" font-size="11.5" fill="var(--muted)">宇宙年齢 ≒ 1/H₀ ≒ 138億年</text>'
      + '<text x="320" y="180" text-anchor="middle" font-size="11.5" fill="var(--muted)">宇宙マイクロ波背景放射の発見が、ビッグバン説の決め手になった</text>'
      + '</g></svg>' },
],

chikyuushi1: [
  { at: 'ov', k: 'photo', t: 'ストロマトライト', src: 'img/stromatolite.jpg',
    cap: 'シアノバクテリアがつくる層状の岩。約27億年前から酸素を出し続け、地球の大気を変えた。', credit: 'ウィキメディア・コモンズ「Stromatolites.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '先カンブリア時代の大事件',
    cap: '地球の歴史の約9割を占める時代。生命と大気の土台がここでできた。',
    head: ['時期', 'できごと'],
    rows: [
      ['約46億年前', '地球の誕生。マグマオーシャン'],
      ['約40億年前', '海の形成。最古の岩石'],
      ['約38億年前', '生命の誕生（最古の生命の痕跡）'],
      ['約27億年前', 'シアノバクテリアが酸素を出し始める'],
      ['約22億年前', '縞状鉄鉱層の形成。酸素が大気へ'],
      ['約21億年前', '真核生物の出現'],
      ['約6億年前', 'エディアカラ生物群。全球凍結のあと'],
    ] },
  { at: 'sec2', k: 'svg', t: '古生代の流れ',
    cap: '海から陸へ、そして大森林と大量絶滅へ。六つの紀の順序を押さえる。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="古生代の年表図">'
      + '<g font-size="11" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="40" width="100" height="40" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="70" y="58" font-size="11.5" fill="var(--primary)">カンブリア紀</text>'
      + '<text x="70" y="74" fill="var(--muted)">生物の爆発的増加</text>'
      + '<rect x="120" y="40" width="90" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="165" y="58" font-size="11.5">オルドビス紀</text><text x="165" y="74" fill="var(--muted)">魚類の出現</text>'
      + '<rect x="210" y="40" width="90" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="255" y="58" font-size="11.5">シルル紀</text><text x="255" y="74" fill="var(--muted)">植物が上陸</text>'
      + '<rect x="300" y="40" width="90" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="345" y="58" font-size="11.5">デボン紀</text><text x="345" y="74" fill="var(--muted)">両生類が上陸</text>'
      + '<rect x="390" y="40" width="110" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="445" y="58" font-size="11.5">石炭紀</text><text x="445" y="74" fill="var(--muted)">シダの大森林</text>'
      + '<rect x="500" y="40" width="120" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="560" y="58" font-size="11.5">ペルム紀</text><text x="560" y="74" fill="var(--muted)">史上最大の絶滅</text>'
      + '<text x="320" y="118" font-size="11.5" fill="var(--muted)">示準化石＝三葉虫、フズリナ（紡錘虫）、クサリサンゴ</text>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">ペルム紀末には海の生物の9割以上が絶滅したとされる</text>'
      + '</g></svg>' },
],

chikyuushi2: [
  { at: 'ov', k: 'table', t: '中生代と新生代',
    cap: '代表的な生物と、代わり目に起きた出来事をセットで覚える。',
    head: ['時代', '紀', 'おもな生物', '示準化石'],
    rows: [
      ['中生代', '三畳紀・ジュラ紀・白亜紀', '恐竜、アンモナイト、裸子植物', 'アンモナイト、恐竜'],
      ['—', '白亜紀末', '隕石衝突で恐竜が絶滅', 'イリジウムの異常濃集'],
      ['新生代', '古第三紀・新第三紀', '哺乳類と被子植物が繁栄', 'ビカリア、カヘイ石'],
      ['新生代', '第四紀', '氷期と間氷期。人類の時代', 'ナウマンゾウ、マンモス'],
    ] },
  { at: 'sec2', k: 'svg', t: '人類の進化',
    cap: '直立二足歩行から脳の大型化へ。道具と火の使用が重なっていく。',
    svg: '<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="人類の進化の図">'
      + '<defs><marker id="ar-hm" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="36" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="85" y="58" font-size="12">猿人</text><text x="85" y="78" fill="var(--muted)">約700万年前〜</text>'
      + '<text x="85" y="92" fill="var(--muted)">直立二足歩行</text>'
      + '<rect x="172" y="36" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="245" y="58" font-size="12">原人</text><text x="245" y="78" fill="var(--muted)">約240万年前〜</text>'
      + '<text x="245" y="92" fill="var(--muted)">石器・火の使用</text>'
      + '<rect x="332" y="36" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="405" y="58" font-size="12">旧人</text><text x="405" y="78" fill="var(--muted)">約60万年前〜</text>'
      + '<text x="405" y="92" fill="var(--muted)">埋葬の習慣</text>'
      + '<rect x="492" y="36" width="136" height="62" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="560" y="58" font-size="12" fill="var(--primary)">新人</text><text x="560" y="78" fill="var(--muted)">約20万年前〜</text>'
      + '<text x="560" y="92" fill="var(--muted)">洞穴絵画、言語</text>'
      + '<line x1="160" y1="67" x2="168" y2="67" stroke="var(--muted)" marker-end="url(#ar-hm)"/>'
      + '<line x1="320" y1="67" x2="328" y2="67" stroke="var(--muted)" marker-end="url(#ar-hm)"/>'
      + '<line x1="480" y1="67" x2="488" y2="67" stroke="var(--muted)" marker-end="url(#ar-hm)"/>'
      + '<text x="320" y="136" font-size="11.5" fill="var(--muted)">脳容積は猿人の約400mLから新人の約1400mLへ増えた</text>'
      + '</g></svg>' },
],

nihonshizen: [
  { at: 'ov', k: 'table', t: '日本で起きる災害',
    cap: '変動帯にあり、季節風と台風の通り道にあることが、災害の多さの理由になっている。',
    head: ['災害', '原因', '備え'],
    rows: [
      ['地震・津波', 'プレートの境界と活断層', '耐震化、避難経路、緊急地震速報'],
      ['火山噴火', '沈みこみ帯のマグマ', '監視、火山ハザードマップ'],
      ['台風・豪雨', '季節風と台風の経路', '堤防、遊水地、早めの避難'],
      ['土砂災害', '急な地形と多い雨', '砂防ダム、警戒区域の指定'],
      ['豪雪', '日本海側の冬の季節風', '除雪、雪崩対策'],
    ] },
  { at: 'sec0', k: 'svg', t: '日本列島の成り立ち',
    cap: '大陸の縁が割れて移動し、二つの弧がぶつかって今の形になった。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="日本列島の成り立ちの図">'
      + '<defs><marker id="ar-nh" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="40" width="170" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="62" font-size="12">約2000万年前</text>'
      + '<text x="109" y="84" fill="var(--muted)">大陸の縁が割れはじめる</text>'
      + '<rect x="234" y="40" width="170" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="62" font-size="12">約1500万年前</text>'
      + '<text x="319" y="84" fill="var(--muted)">日本海が広がり、列島が離れる</text>'
      + '<rect x="444" y="40" width="172" height="60" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="530" y="62" font-size="12" fill="var(--primary)">その後</text>'
      + '<text x="530" y="84" fill="var(--muted)">伊豆の衝突、フォッサマグナ</text>'
      + '<line x1="198" y1="70" x2="230" y2="70" stroke="var(--muted)" marker-end="url(#ar-nh)"/>'
      + '<line x1="408" y1="70" x2="440" y2="70" stroke="var(--muted)" marker-end="url(#ar-nh)"/>'
      + '<text x="320" y="138" font-size="11.5" fill="var(--muted)">糸魚川–静岡構造線を境に、東北日本と西南日本に分かれる</text>'
      + '</g></svg>' },
],

kansoku: [
  { at: 'ov', k: 'photo', t: '宇宙望遠鏡の主鏡', src: 'img/telescope.jpg',
    cap: '大気のない宇宙から観測すれば、ゆらぎや吸収の影響を受けずに、赤外線まで見わたせる。', credit: 'ウィキメディア・コモンズ「James Webb Space Telescope Mirror37.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '年代の測りかた',
    cap: '対象の古さに応じて、使う方法が変わる。',
    head: ['方法', '利用するもの', '測れる範囲'],
    rows: [
      ['放射性炭素（¹⁴C）', '半減期 約5730年', '数万年前まで'],
      ['カリウム・アルゴン法', '半減期 約12.5億年', '古い岩石'],
      ['ウラン・鉛法', '半減期 約45億年', '地球最古の岩石'],
      ['地層累重の法則', '上下関係', '相対年代'],
      ['示準化石', '短期間・広範囲に分布した生物', '相対年代'],
    ] },
  { at: 'sec0', k: 'svg', t: '天球と季節の変化',
    cap: '地軸が傾いたまま公転するため、太陽の南中高度と昼の長さが一年で変わる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="天球と季節の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="40" y1="140" x2="600" y2="140" stroke="var(--border)" stroke-width="2"/>'
      + '<path d="M70,140 Q320,20 570,140" fill="none" stroke="var(--primary)" stroke-width="2"/>'
      + '<path d="M70,140 Q320,60 570,140" fill="none" stroke="var(--muted)" stroke-width="2" stroke-dasharray="4 3"/>'
      + '<path d="M70,140 Q320,100 570,140" fill="none" stroke="var(--accent)" stroke-width="2"/>'
      + '<text x="320" y="36" text-anchor="middle" font-size="11.5" fill="var(--primary)">夏至　南中高度が最も高い</text>'
      + '<text x="320" y="76" text-anchor="middle" font-size="11.5" fill="var(--muted)">春分・秋分</text>'
      + '<text x="320" y="116" text-anchor="middle" font-size="11.5" fill="var(--accent)">冬至　最も低い</text>'
      + '<text x="46" y="158" font-size="11" fill="var(--muted)">東</text>'
      + '<text x="590" y="158" font-size="11" fill="var(--muted)">西</text>'
      + '<text x="320" y="172" text-anchor="middle" font-size="11.5" fill="var(--muted)">南中高度＝90°－緯度＋傾き（夏至＋23.4°、冬至－23.4°）</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
