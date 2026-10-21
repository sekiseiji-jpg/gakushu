/* 日本史 ― 単元の説明に添える図・表・地図・写真
   単元id → 図版の配列。at は 'ov'（概要タブ）か 'sec0' 'sec1' …（詳細タブの節の下）。
   k は 'table' / 'svg' / 'map' / 'photo'。写真は img/ に置き、保護期間の切れたものだけを使う。
   地図は実測ではなく、位置関係をつかむための略図。
*/
const FIGS = {

genshi: [
  { at: 'ov', k: 'photo', t: '遮光器土偶', src: 'img/dogu.jpg',
    cap: '縄文時代晩期の土偶。多くは女性をかたどり、意図的に壊された状態で見つかる。豊穣や再生を祈る呪術に用いられたと考えられている。', credit: 'ウィキメディア・コモンズ「Dogu (clay figurine) with heart-shaped face, Jomon period, 2000-1000 BC, from Gobara, Higashi Agatsuma-machi, Gunma - Tokyo National Museum - DSC06322.JPG」（CC0）' },
  { at: 'ov', k: 'table', t: '旧石器と縄文のくらべかた',
    cap: '気候が変わって動植物が変われば、道具も住まいも変わる。',
    head: ['', '旧石器時代', '縄文時代'],
    rows: [
      ['気候', '氷期（寒冷）', '完新世の温暖化。海面上昇（縄文海進）'],
      ['おもな獲物', 'ナウマンゾウ・オオツノジカ', 'シカ・イノシシ・魚貝・木の実'],
      ['道具', '打製石器（ナイフ形・尖頭器・細石器）', '磨製石器・縄文土器・弓矢・骨角器'],
      ['住まい', '移動しながらの簡単な小屋', '竪穴住居。集落は定住的'],
      ['代表的な遺跡', '岩宿（群馬）', '三内丸山（青森）・大森貝塚（東京）'],
    ] },
  { at: 'sec2', k: 'svg', t: '縄文人の精神文化',
    cap: 'すべてのものに霊が宿ると考える信仰（アニミズム）が、道具や墓のかたちに表れている。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="縄文時代の信仰の図">'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="230" y="12" width="180" height="36" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="35" fill="var(--primary)">アニミズム（精霊信仰）</text>'
      + '<rect x="14" y="78" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="87" y="100">土偶</text><text x="87" y="120" font-size="11" fill="var(--muted)">多産・豊穣を祈る</text>'
      + '<rect x="172" y="78" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="245" y="100">石棒</text><text x="245" y="120" font-size="11" fill="var(--muted)">男性をかたどる</text>'
      + '<rect x="330" y="78" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="403" y="100">抜歯・屈葬</text><text x="403" y="120" font-size="11" fill="var(--muted)">通過儀礼と死者への備え</text>'
      + '<rect x="488" y="78" width="138" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="557" y="100">環状列石</text><text x="557" y="120" font-size="11" fill="var(--muted)">祭りと墓の場</text>'
      + '<line x1="280" y1="48" x2="100" y2="74" stroke="var(--muted)"/>'
      + '<line x1="305" y1="48" x2="245" y2="74" stroke="var(--muted)"/>'
      + '<line x1="335" y1="48" x2="400" y2="74" stroke="var(--muted)"/>'
      + '<line x1="360" y1="48" x2="545" y2="74" stroke="var(--muted)"/>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">貧富や身分の差を示す墓はまだ現れない＝ほぼ平等な社会だった</text>'
      + '</g></svg>' },
],

yayoi: [
  { at: 'ov', k: 'photo', t: '銅鐸', src: 'img/dotaku.jpg',
    cap: '弥生時代の青銅器。もとは鳴らす道具だったが、しだいに大型化し、見せるための祭器になった。近畿を中心に出土する。', credit: 'ウィキメディア・コモンズ「Bell (dotaku), Yayoi people, Japan, 200 BC to 20 AD, bronze - British Museum - DSC01441.jpg」（CC0）' },
  { at: 'sec1', k: 'table', t: '青銅器の分布と、そこから読めること',
    cap: '同じ祭器を使う範囲が、そのまま政治的なまとまりの範囲だったと考えられている。',
    head: ['青銅器', 'おもな分布', '用途'],
    rows: [
      ['銅鐸', '近畿を中心に', '祭りの道具。大型化して「見る銅鐸」へ'],
      ['銅矛・銅戈', '北部九州', '武器の形をした祭器'],
      ['銅剣', '瀬戸内', '同上。荒神谷遺跡で358本が一括出土'],
      ['銅鏡', '北部九州〜畿内', '中国から贈られ、権威の象徴になる'],
    ] },
  { at: 'sec2', k: 'map', t: '地図：倭の小国と中国への使い',
    cap: '北部九州の国々が、中国の皇帝から称号や印をもらうことで、国内での地位を固めようとした。',
    svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="倭の小国と中国の関係の略図">'
      + '<rect x="0" y="0" width="640" height="220" fill="var(--surface2)"/>'
      + '<defs><marker id="ar-ya" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="60" width="150" height="90" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="99" y="86">中国</text>'
      + '<text x="99" y="108" font-size="11" fill="var(--muted)">後漢 → 魏</text>'
      + '<text x="99" y="128" font-size="11" fill="var(--muted)">洛陽</text>'
      + '<rect x="386" y="40" width="130" height="54" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="451" y="62" fill="var(--primary)">奴国</text>'
      + '<text x="451" y="80" font-size="10.5" fill="var(--muted)">57年・金印を受ける</text>'
      + '<rect x="386" y="110" width="130" height="54" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="451" y="132" fill="var(--primary)">邪馬台国</text>'
      + '<text x="451" y="150" font-size="10.5" fill="var(--muted)">239年・卑弥呼が使いを送る</text>'
      + '<rect x="536" y="76" width="92" height="54" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="582" y="98" font-size="12">狗奴国</text>'
      + '<text x="582" y="116" font-size="10.5" fill="var(--muted)">邪馬台国と対立</text>'
      + '<line x1="178" y1="88" x2="382" y2="66" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-ya)"/>'
      + '<line x1="178" y1="120" x2="382" y2="136" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-ya)"/>'
      + '<line x1="518" y1="137" x2="534" y2="120" stroke="var(--muted)" stroke-dasharray="3 3"/>'
      + '<text x="280" y="62" font-size="11" fill="var(--muted)">「漢委奴国王」印</text>'
      + '<text x="280" y="164" font-size="11" fill="var(--muted)">「親魏倭王」の称号と銅鏡百枚</text>'
      + '<text x="320" y="200" font-size="11.5" fill="var(--muted)">邪馬台国が九州にあったか畿内にあったかは、いまも決着していない</text>'
      + '<text x="320" y="214" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
],

kofun: [
  { at: 'ov', k: 'photo', t: '大仙陵古墳（仁徳天皇陵古墳）', src: 'img/kofun.jpg',
    cap: '堺市にある日本最大の前方後円墳。全長約486メートル。これだけの土木工事を命じられる権力が生まれていた。', credit: 'ウィキメディア・コモンズ「Osaka Sakai Balloon 03.jpg」（CC0）' },
  { at: 'sec0', k: 'svg', t: '古墳の変化が語ること',
    cap: '大きさと副葬品の変化を追うと、支配者の性格が祭司から武人へ移っていったことが見えてくる。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="古墳の変化を示す図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="26" width="196" height="118" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="112" y="48" font-size="13">前期（3世紀後半〜4世紀）</text>'
      + '<text x="112" y="72" font-size="11.5" fill="var(--muted)">竪穴式石室</text>'
      + '<text x="112" y="92" font-size="11.5" fill="var(--muted)">副葬品＝銅鏡・玉・腕輪</text>'
      + '<text x="112" y="116" font-size="11.5" fill="var(--primary)">司祭者的な性格</text>'
      + '<rect x="222" y="26" width="196" height="118" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="48" font-size="13">中期（5世紀）</text>'
      + '<text x="320" y="72" font-size="11.5" fill="var(--muted)">規模が最大に（大仙陵古墳）</text>'
      + '<text x="320" y="92" font-size="11.5" fill="var(--muted)">副葬品＝鉄製武器・馬具</text>'
      + '<text x="320" y="116" font-size="11.5" fill="var(--primary)">武人的な性格へ</text>'
      + '<rect x="430" y="26" width="196" height="118" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="528" y="48" font-size="13">後期（6〜7世紀）</text>'
      + '<text x="528" y="72" font-size="11.5" fill="var(--muted)">横穴式石室・群集墳</text>'
      + '<text x="528" y="92" font-size="11.5" fill="var(--muted)">副葬品＝土器・日用品</text>'
      + '<text x="528" y="116" font-size="11.5" fill="var(--primary)">有力農民層まで古墳をもつ</text>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">7世紀には古墳をつくらなくなる（薄葬令）。かわりに寺院が権威の証になる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '倭の五王が中国に求めたもの',
    cap: '宋に使いを送って称号を求めたのは、朝鮮半島での立場を有利にするためだった。',
    head: ['年', '王', 'できごと'],
    rows: [
      ['413年ごろ', '讃', '東晋に使いを送る（『晋書』）'],
      ['421年', '讃', '宋に朝貢。以後、珍・済・興・武と続く'],
      ['478年', '武', '上表文を送り「安東大将軍」に任じられる'],
      ['—', '武', '稲荷山古墳の鉄剣銘の「ワカタケル大王」と同一とされる'],
    ] },
],

asuka: [
  { at: 'ov', k: 'photo', t: '法隆寺 西院伽藍', src: 'img/horyuji.jpg',
    cap: '左が金堂、右が五重塔。現存する世界最古の木造建築群で、エンタシスの柱や雲斗・雲肘木に飛鳥文化の特徴が見える。', credit: 'ウィキメディア・コモンズ「Horyu-ji Kondo and Five-story Pagoda 2022.jpg」（CC0）' },
  { at: 'sec3', k: 'table', t: '律令のしくみを一枚で',
    cap: '中央・地方・税・兵が一つの戸籍でつながっている。これが崩れると律令体制全体が崩れる。',
    head: ['項目', '内容', '補足'],
    rows: [
      ['中央', '二官八省（神祇官・太政官）', '太政官のもとに八つの省'],
      ['地方', '国・郡・里', '国司は中央から、郡司は在地の豪族'],
      ['土地', '班田収授法。6歳以上に口分田', '6年ごとに戸籍を作りなおす'],
      ['税', '租・庸・調、雑徭', '庸と調は都まで運ぶ（運脚）'],
      ['兵', '軍団・衛士・防人', '正丁3〜4人に1人の割合'],
      ['身分', '良民と賤民（五色の賤）', '賤民は人口の数パーセント'],
    ] },
  { at: 'sec1', k: 'map', t: '地図：白村江の戦いと、そのあとの備え',
    cap: '朝鮮半島での敗北が、国内の防衛体制と中央集権化を一気に進めることになった。',
    svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="白村江の戦いと防衛体制の略図">'
      + '<rect x="0" y="0" width="640" height="220" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="34" width="150" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="105" y="56">唐・新羅</text><text x="105" y="76" font-size="10.5" fill="var(--muted)">連合して百済を滅ぼす</text>'
      + '<rect x="238" y="34" width="150" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="313" y="56">百済</text><text x="313" y="76" font-size="10.5" fill="var(--muted)">660年に滅亡。復興を求める</text>'
      + '<rect x="446" y="34" width="164" height="56" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="528" y="56" fill="var(--primary)">倭</text><text x="528" y="76" font-size="10.5" fill="var(--muted)">援軍を送る（中大兄皇子）</text>'
      + '<line x1="184" y1="62" x2="234" y2="62" stroke="var(--muted)"/>'
      + '<line x1="392" y1="62" x2="442" y2="62" stroke="var(--muted)"/>'
      + '<text x="320" y="112" font-size="13" fill="var(--primary)">663年　白村江の戦い　倭は大敗</text>'
      + '<rect x="60" y="128" width="520" height="66" rx="9" fill="var(--surface)" stroke="var(--border)" stroke-dasharray="4 3"/>'
      + '<text x="320" y="150" font-size="12.5">敗戦のあとに打った手</text>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">西日本に水城・大野城・朝鮮式山城／対馬に防人と烽（のろし）</text>'
      + '<text x="320" y="187" font-size="11.5" fill="var(--muted)">都を近江大津宮へ移し、庚午年籍をつくって人民を把握</text>'
      + '<text x="320" y="212" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
],

nara: [
  { at: 'ov', k: 'photo', t: '東大寺大仏殿', src: 'img/todaiji.jpg',
    cap: '聖武天皇が国家の安泰を願って建てさせた。国分寺・国分尼寺の総本山にあたる。明治期の写真。', credit: 'ウィキメディア・コモンズ「NDL-DC 762376 0151 0012crd-Todaiji Daibutsuden.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '土地制度が崩れていく順序',
    cap: '口分田が足りなくなるたびに手を打ったが、その手がかえって公地公民の原則を壊していった。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="奈良時代の土地制度の変化の図">'
      + '<defs><marker id="ar-na" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="10" y="30" width="136" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="78" y="52">人口増・逃亡</text><text x="78" y="70" font-size="10.5" fill="var(--muted)">口分田が足りない</text>'
      + '<rect x="166" y="30" width="136" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="234" y="52">百万町歩開墾計画</text><text x="234" y="70" font-size="10.5" fill="var(--muted)">722年。実現せず</text>'
      + '<rect x="322" y="30" width="136" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="390" y="52">三世一身法</text><text x="390" y="70" font-size="10.5" fill="var(--muted)">723年。三代で返す約束</text>'
      + '<rect x="478" y="30" width="150" height="54" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="553" y="52" fill="var(--primary)">墾田永年私財法</text>'
      + '<text x="553" y="70" font-size="10.5" fill="var(--muted)">743年。永久に私有を認める</text>'
      + '<line x1="148" y1="57" x2="162" y2="57" stroke="var(--muted)" marker-end="url(#ar-na)"/>'
      + '<line x1="304" y1="57" x2="318" y2="57" stroke="var(--muted)" marker-end="url(#ar-na)"/>'
      + '<line x1="460" y1="57" x2="474" y2="57" stroke="var(--muted)" marker-end="url(#ar-na)"/>'
      + '<line x1="553" y1="86" x2="553" y2="104" stroke="var(--muted)" marker-end="url(#ar-na)"/>'
      + '<rect x="398" y="106" width="230" height="36" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="513" y="129" font-size="12">貴族や寺社が私有地を広げる（初期荘園）</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">公地公民の原則がここで実質的に破られ、荘園の時代が始まる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '奈良時代の政争',
    cap: '天皇の外戚となった家が権力を握り、別の家に倒される。この繰り返しが奈良時代の政治史である。',
    head: ['時期', '実権を握った人', '倒れたきっかけ'],
    rows: [
      ['710年代', '藤原不比等', '病死'],
      ['729年', '長屋王', '長屋王の変（藤原四子の策謀）'],
      ['737年', '藤原四子', '天然痘で四人とも死去'],
      ['740年代', '橘諸兄（玄昉・吉備真備）', '藤原広嗣の乱を経て影響力が落ちる'],
      ['757年', '藤原仲麻呂（恵美押勝）', '恵美押勝の乱で敗死'],
      ['760年代', '道鏡', '称徳天皇の死で失脚（宇佐八幡宮神託事件）'],
    ] },
],

heian: [
  { at: 'ov', k: 'photo', t: '平等院鳳凰堂', src: 'img/byodoin.jpg',
    cap: '藤原頼通が建てた阿弥陀堂。池にうつる姿が極楽浄土を思わせる。末法の世に往生を願う浄土教の広がりを、建物の形で示している。', credit: 'ウィキメディア・コモンズ「平等院鳳凰堂（2023年）.jpg」（CC0）' },
  { at: 'sec1', k: 'svg', t: '摂関政治のしくみ',
    cap: '娘を天皇の后にし、生まれた皇子を天皇に立てる。外戚になることが権力の源だった。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="摂関政治のしくみの図">'
      + '<defs><marker id="ar-he" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="30" width="150" height="48" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="95" y="50" fill="var(--primary)">藤原氏（摂関家）</text>'
      + '<text x="95" y="68" font-size="10.5" fill="var(--muted)">道長・頼通</text>'
      + '<rect x="245" y="30" width="150" height="48" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="58">娘を后（中宮）に</text>'
      + '<rect x="470" y="30" width="150" height="48" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="545" y="50">生まれた皇子</text>'
      + '<text x="545" y="68" font-size="10.5" fill="var(--muted)">幼いうちに即位</text>'
      + '<line x1="172" y1="54" x2="241" y2="54" stroke="var(--muted)" marker-end="url(#ar-he)"/>'
      + '<line x1="397" y1="54" x2="466" y2="54" stroke="var(--muted)" marker-end="url(#ar-he)"/>'
      + '<path d="M545,80 Q545,112 320,112 Q95,112 95,82" stroke="var(--primary)" fill="none" marker-end="url(#ar-he)"/>'
      + '<text x="320" y="106" font-size="11.5" fill="var(--primary)">外祖父として摂政・関白になる</text>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">天皇が幼いとき＝摂政　／　成人したあと＝関白</text>'
      + '<text x="320" y="168" font-size="11.5" fill="var(--muted)">娘に皇子が生まれないと、この仕組みは止まる（頼通の失敗）</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '武士はどこから生まれたか',
    cap: '荘園を守る必要と、地方に赴任した貴族の子孫が土着したことが重なって、武士団ができた。',
    head: ['段階', '起きたこと'],
    rows: [
      ['土地の私有化', '墾田永年私財法のあと、寄進地系荘園が広がる'],
      ['自衛の必要', '国司の取り立てや争いに備えて武装する'],
      ['棟梁の登場', '国司として下った桓武平氏・清和源氏の子孫が土着し、束ねる'],
      ['中央への進出', '平将門の乱・藤原純友の乱を鎮め、武力が認められる'],
      ['政権へ', '保元・平治の乱を経て、平清盛が太政大臣に'],
    ] },
],

kamakura: [
  { at: 'ov', k: 'photo', t: '蒙古襲来絵詞', src: 'img/moko.jpg',
    cap: '肥後の御家人・竹崎季長が、自分の戦功を記録させた絵巻。元軍の集団戦法と「てつはう」が描かれている。', credit: 'ウィキメディア・コモンズ「Mōko Shūrai Ekotoba Mongol Invasion Mitsui Sukenaga.jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: '鎌倉幕府のしくみ',
    cap: '将軍と御家人が「御恩と奉公」で結ばれる。これが武家政権の骨組みになる。',
    svg: '<svg viewBox="0 0 640 215" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="鎌倉幕府のしくみの図">'
      + '<defs><marker id="ar-ka" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="240" y="12" width="160" height="38" rx="8" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="36" fill="var(--primary-text)">将軍</text>'
      + '<rect x="30" y="74" width="150" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="105" y="98">侍所（御家人の統率）</text>'
      + '<rect x="245" y="74" width="150" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="98">政所（政務・財政）</text>'
      + '<rect x="460" y="74" width="150" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="535" y="98">問注所（裁判）</text>'
      + '<line x1="320" y1="50" x2="320" y2="70" stroke="var(--muted)"/>'
      + '<line x1="105" y1="64" x2="535" y2="64" stroke="var(--border)"/>'
      + '<line x1="105" y1="64" x2="105" y2="70" stroke="var(--muted)"/>'
      + '<line x1="535" y1="64" x2="535" y2="70" stroke="var(--muted)"/>'
      + '<rect x="130" y="130" width="170" height="38" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="215" y="154" font-size="12">守護（国ごと・軍事警察）</text>'
      + '<rect x="340" y="130" width="170" height="38" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="425" y="154" font-size="12">地頭（荘園ごと・徴税）</text>'
      + '<text x="320" y="192" font-size="11.5" fill="var(--primary)">御恩（土地を保障・新たに与える）⇔ 奉公（戦えば参陣、平時は番役）</text>'
      + '<text x="320" y="209" font-size="11" fill="var(--muted)">実権は北条氏の執権へ移り、承久の乱のあと連署・評定衆が置かれる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'map', t: '地図：二度の蒙古襲来',
    cap: '一度目は偵察的、二度目は本格的な侵攻。いずれも博多湾が戦場になった。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="蒙古襲来の経路の略図">'
      + '<rect x="0" y="0" width="640" height="210" fill="var(--surface2)"/>'
      + '<defs><marker id="ar-mk" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="70" width="120" height="50" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="80" y="92">元（大都）</text><text x="80" y="110" font-size="10.5" fill="var(--muted)">フビライ</text>'
      + '<rect x="200" y="40" width="120" height="44" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="260" y="60" font-size="12">高麗</text><text x="260" y="76" font-size="10.5" fill="var(--muted)">東路軍の出発地</text>'
      + '<rect x="200" y="120" width="120" height="44" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="260" y="140" font-size="12">旧南宋（江南）</text><text x="260" y="156" font-size="10.5" fill="var(--muted)">江南軍の出発地</text>'
      + '<circle cx="470" cy="100" r="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="470" y="78" fill="var(--primary)">博多湾</text>'
      + '<text x="470" y="134" font-size="10.5" fill="var(--muted)">対馬・壱岐を経て襲来</text>'
      + '<line x1="144" y1="90" x2="196" y2="66" stroke="var(--muted)"/>'
      + '<line x1="144" y1="104" x2="196" y2="138" stroke="var(--muted)"/>'
      + '<line x1="324" y1="66" x2="456" y2="94" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-mk)"/>'
      + '<line x1="324" y1="140" x2="456" y2="110" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-mk)"/>'
      + '<rect x="520" y="46" width="108" height="50" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="574" y="66" font-size="11.5">1274 文永の役</text>'
      + '<text x="574" y="84" font-size="10.5" fill="var(--muted)">集団戦法・てつはう</text>'
      + '<rect x="520" y="106" width="108" height="50" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="574" y="126" font-size="11.5">1281 弘安の役</text>'
      + '<text x="574" y="144" font-size="10.5" fill="var(--muted)">石塁と暴風雨で撃退</text>'
      + '<text x="320" y="188" font-size="11.5" fill="var(--muted)">防衛戦なので新しい土地が手に入らず、御恩を与えられない → 御家人の不満へ</text>'
      + '<text x="320" y="204" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
],

muromachi: [
  { at: 'ov', k: 'photo', t: '金閣（鹿苑寺）', src: 'img/kinkakuji.jpg',
    cap: '足利義満が北山に建てた。一層が寝殿造、三層が禅宗様という構成に、公家と武家の文化の融合が表れている。', credit: 'ウィキメディア・コモンズ「Exterieur van de Gouden Paviljoen Tempel in Kyoto Kinkakuji Garden Kioto. (titel op object), RP-F-F01206-AI.jpg」（CC0）' },
  { at: 'sec1', k: 'table', t: '勘合貿易のしくみと利益',
    cap: '朝貢という形をとったため、明の皇帝に臣下として接する必要があった。そこが国内で批判される。',
    head: ['項目', '内容'],
    rows: [
      ['始めた人', '足利義満（1404年）。「日本国王臣源」と称した'],
      ['形式', '朝貢貿易。勘合という割符で倭寇と区別する'],
      ['輸出品', '銅・硫黄・刀剣・扇'],
      ['輸入品', '銅銭（永楽通宝）・生糸・絹織物'],
      ['利益', '滞在費は明もちで、関税もない。幕府の大きな財源に'],
      ['のちの担い手', '義持が中断 → 義教が再開 → 細川氏と大内氏が争う（寧波の乱）'],
    ] },
  { at: 'sec2', k: 'svg', t: '民衆が力をつける順序',
    cap: '農業生産が上がって村が自治をもち、やがて借金の帳消しを実力で要求するようになる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="室町時代の民衆の成長の図">'
      + '<defs><marker id="ar-mu" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="28" width="140" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="82" y="50">生産力が上がる</text><text x="82" y="68" font-size="10.5" fill="var(--muted)">二毛作・水車・肥料</text>'
      + '<rect x="172" y="28" width="140" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="242" y="50">惣村ができる</text><text x="242" y="68" font-size="10.5" fill="var(--muted)">寄合・掟・入会地</text>'
      + '<rect x="332" y="28" width="140" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="402" y="50">一揆を結ぶ</text><text x="402" y="68" font-size="10.5" fill="var(--muted)">土一揆・国一揆・一向一揆</text>'
      + '<rect x="492" y="28" width="136" height="52" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="560" y="50" fill="var(--primary)">自治を勝ちとる</text>'
      + '<text x="560" y="68" font-size="10.5" fill="var(--muted)">山城の国一揆は8年間</text>'
      + '<line x1="154" y1="54" x2="168" y2="54" stroke="var(--muted)" marker-end="url(#ar-mu)"/>'
      + '<line x1="314" y1="54" x2="328" y2="54" stroke="var(--muted)" marker-end="url(#ar-mu)"/>'
      + '<line x1="474" y1="54" x2="488" y2="54" stroke="var(--muted)" marker-end="url(#ar-mu)"/>'
      + '<text x="320" y="116" font-size="12">1428 正長の土一揆　「日本開白以来、土民蜂起これ初めなり」</text>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">1485 山城の国一揆（国人と農民が守護を追い出す）</text>'
      + '<text x="320" y="160" font-size="11.5" fill="var(--muted)">1488 加賀の一向一揆（約100年間、門徒が国を治める）</text>'
      + '</g></svg>' },
],

azuchi: [
  { at: 'ov', k: 'photo', t: '姫路城', src: 'img/himeji.jpg',
    cap: '天守を中心とする近世の城。戦う城から、領国支配の中心と権威を見せる場へと役割が変わった。', credit: 'ウィキメディア・コモンズ「Himeji Castle 0804 1.jpg」（Public domain）' },
  { at: 'sec2', k: 'table', t: '秀吉の政策と、そのねらい',
    cap: 'どの政策も「誰が何を持っているか」を確定し、身分を固定することに向かっている。',
    head: ['政策', '年', 'ねらい'],
    rows: [
      ['太閤検地', '1582〜', '一地一作人。村ごとの石高を確定する'],
      ['刀狩', '1588', '農民から武器を取り上げ、一揆を防ぐ'],
      ['人掃令（身分統制令）', '1591', '武士・町人・百姓の身分を固定する'],
      ['バテレン追放令', '1587', '宣教師を追放。ただし貿易は続ける'],
      ['朝鮮出兵', '1592・97', '明の征服をめざすが失敗。豊臣政権を弱める'],
    ] },
  { at: 'sec1', k: 'svg', t: '信長の天下布武',
    cap: '既存の権威と武力を一つずつ取り除き、経済の流れを自分の手に握っていった。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="織田信長の政策の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="26" width="196" height="64" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="112" y="48" font-size="12.5">敵対する勢力を倒す</text>'
      + '<text x="112" y="68" font-size="11" fill="var(--muted)">今川・武田・浅井朝倉</text>'
      + '<text x="112" y="84" font-size="11" fill="var(--muted)">比叡山焼き討ち・石山戦争</text>'
      + '<rect x="222" y="26" width="196" height="64" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="48" font-size="12.5">古い権威を外す</text>'
      + '<text x="320" y="68" font-size="11" fill="var(--muted)">足利義昭を追放（室町幕府滅亡）</text>'
      + '<text x="320" y="84" font-size="11" fill="var(--muted)">寺社の特権を認めない</text>'
      + '<rect x="430" y="26" width="196" height="64" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="528" y="48" font-size="12.5" fill="var(--primary)">経済を握る</text>'
      + '<text x="528" y="68" font-size="11" fill="var(--muted)">楽市・楽座で座の特権を廃止</text>'
      + '<text x="528" y="84" font-size="11" fill="var(--muted)">関所の撤廃、堺を直轄に</text>'
      + '<text x="320" y="126" font-size="12.5">鉄砲を大量に使う（長篠の戦い 1575）</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">1582 本能寺の変で中断。事業は秀吉が引き継ぐ</text>'
      + '<text x="320" y="174" font-size="11.5" fill="var(--muted)">「天下布武」の印は、武力で天下を治める意志を示したもの</text>'
      + '</g></svg>' },
],

'edo-zen': [
  { at: 'ov', k: 'photo', t: '日本橋（東海道五十三次）', src: 'img/nihonbashi.jpg',
    cap: '五街道の起点。参勤交代と商品流通が、全国を一つの市場に結びつけていった。', credit: 'ウィキメディア・コモンズ「Tōkaidô gojūsan tsugi saiken zu’e, Nihonbashi by Hiroshige.jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: '幕藩体制で大名をどう抑えたか',
    cap: '配置・法・出費の三つを組み合わせて、大名が力を蓄えられないようにした。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="幕藩体制の大名統制の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="230" y="12" width="180" height="36" rx="8" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="36" fill="var(--primary-text)">幕府（将軍）</text>'
      + '<rect x="14" y="76" width="192" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="110" y="98" font-size="12.5">置き方で抑える</text>'
      + '<text x="110" y="118" font-size="11" fill="var(--muted)">親藩・譜代を要所に</text>'
      + '<text x="110" y="136" font-size="11" fill="var(--muted)">外様は遠国へ</text>'
      + '<rect x="224" y="76" width="192" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="98" font-size="12.5">法で縛る</text>'
      + '<text x="320" y="118" font-size="11" fill="var(--muted)">武家諸法度（城の修築も許可制）</text>'
      + '<text x="320" y="136" font-size="11" fill="var(--muted)">禁中並公家諸法度で朝廷も</text>'
      + '<rect x="434" y="76" width="192" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="530" y="98" font-size="12.5">出費で弱らせる</text>'
      + '<text x="530" y="118" font-size="11" fill="var(--muted)">参勤交代（1635年に制度化）</text>'
      + '<text x="530" y="136" font-size="11" fill="var(--muted)">手伝普請を命じる</text>'
      + '<line x1="110" y1="48" x2="110" y2="72" stroke="var(--muted)"/>'
      + '<line x1="320" y1="48" x2="320" y2="72" stroke="var(--muted)"/>'
      + '<line x1="530" y1="48" x2="530" y2="72" stroke="var(--muted)"/>'
      + '<text x="320" y="182" font-size="11.5" fill="var(--muted)">約260年の平和は、この三重の抑えと、改易・減封という強い罰に支えられていた</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'map', t: '地図：鎖国下の四つの口',
    cap: '国を閉ざしたのではなく、窓口を四つに絞って幕府が独占した、と見るほうが実態に近い。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="四つの口の略図">'
      + '<rect x="0" y="0" width="640" height="210" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="250" y="76" width="140" height="52" rx="10" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="98" fill="var(--primary-text)">幕府</text>'
      + '<text x="320" y="116" font-size="10.5" fill="var(--primary-text)">対外関係を独占</text>'
      + '<rect x="24" y="24" width="160" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="104" y="44" font-size="12">長崎口</text>'
      + '<text x="104" y="62" font-size="10.5" fill="var(--muted)">オランダ・中国（幕府直轄）</text>'
      + '<rect x="24" y="126" width="160" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="104" y="146" font-size="12">対馬口</text>'
      + '<text x="104" y="164" font-size="10.5" fill="var(--muted)">朝鮮（宗氏）・通信使</text>'
      + '<rect x="456" y="24" width="160" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="536" y="44" font-size="12">薩摩口</text>'
      + '<text x="536" y="62" font-size="10.5" fill="var(--muted)">琉球（島津氏）</text>'
      + '<rect x="456" y="126" width="160" height="56" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="536" y="146" font-size="12">松前口</text>'
      + '<text x="536" y="164" font-size="10.5" fill="var(--muted)">アイヌ（松前氏）</text>'
      + '<line x1="188" y1="58" x2="256" y2="86" stroke="var(--muted)"/>'
      + '<line x1="188" y1="150" x2="256" y2="118" stroke="var(--muted)"/>'
      + '<line x1="452" y1="58" x2="384" y2="86" stroke="var(--muted)"/>'
      + '<line x1="452" y1="150" x2="384" y2="118" stroke="var(--muted)"/>'
      + '<text x="320" y="196" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
],

'edo-ko': [
  { at: 'ov', k: 'photo', t: 'ペリー艦隊の来航', src: 'img/kurofune.jpg',
    cap: '1853年に浦賀へ来航した。翌年の日米和親条約で下田・箱館が開かれ、二百年あまりの体制が動きはじめる。', credit: 'ウィキメディア・コモンズ「Commander H.A. Adams of the Perry Expedition from the Black Ship Scroll, 1854.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '三大改革のくらべかた',
    cap: '財政の立て直しという同じ目的でも、重点の置き方が違い、どれも長続きしなかった。',
    head: ['', '享保の改革', '寛政の改革', '天保の改革'],
    rows: [
      ['時期・人', '1716〜45 徳川吉宗', '1787〜93 松平定信', '1841〜43 水野忠邦'],
      ['財政', '上げ米・定免法・新田開発', '囲米・棄捐令', '株仲間の解散・上知令'],
      ['都市', '目安箱・町火消', '人返し・七分積金', '人返しの法'],
      ['思想・風俗', '実学を奨励', '寛政異学の禁（朱子学以外を禁じる）', '出版と風俗を厳しく取り締まる'],
      ['結果', '一定の成果。ただし物価高', '厳しすぎて反発', '上知令に反対され2年余で失脚'],
    ] },
  { at: 'sec2', k: 'map', t: '地図：開国で開かれた港',
    cap: '和親条約では薪水の補給のため、修好通商条約では貿易のために港が開かれた。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="開港場の略図">'
      + '<rect x="0" y="0" width="640" height="200" fill="var(--surface2)"/>'
      + '<g font-size="12.5" fill="var(--text)">'
      + '<text x="24" y="30" font-size="12.5" fill="var(--primary)">1854 日米和親条約</text>'
      + '<rect x="24" y="40" width="112" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="80" y="62" text-anchor="middle" font-size="12">下田</text>'
      + '<rect x="148" y="40" width="112" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="204" y="62" text-anchor="middle" font-size="12">箱館</text>'
      + '<text x="276" y="62" font-size="11" fill="var(--muted)">薪水・食料の補給と領事の駐在</text>'
      + '<text x="24" y="108" font-size="12.5" fill="var(--primary)">1858 日米修好通商条約</text>'
      + '<rect x="24" y="118" width="100" height="34" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="74" y="140" text-anchor="middle" font-size="12">横浜</text>'
      + '<rect x="134" y="118" width="100" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="184" y="140" text-anchor="middle" font-size="12">長崎</text>'
      + '<rect x="244" y="118" width="100" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="294" y="140" text-anchor="middle" font-size="12">箱館</text>'
      + '<rect x="354" y="118" width="100" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="404" y="140" text-anchor="middle" font-size="12">新潟</text>'
      + '<rect x="464" y="118" width="100" height="34" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="514" y="140" text-anchor="middle" font-size="12">神戸</text>'
      + '<text x="24" y="174" font-size="11.5" fill="var(--muted)">不平等な点＝領事裁判権を認め、関税自主権がない。下田は閉鎖された</text>'
      + '<text x="24" y="192" font-size="11" fill="var(--muted)">※位置関係をつかむための略図です</text>'
      + '</g></svg>' },
],

meiji: [
  { at: 'ov', k: 'photo', t: '富岡製糸場', src: 'img/tomioka.jpg',
    cap: '官営模範工場として1872年に操業を始めた。フランスの技術を入れ、生糸の品質を上げて輸出の柱にした。', credit: 'ウィキメディア・コモンズ「NDL-DC 1312610 02-Utagawa Kuniteru-上州富岡製糸場-明治5-crd.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '三大改革が変えたもの',
    cap: '身分・土地・兵役を一度に組み替えたことで、中央集権的な近代国家の土台ができた。',
    head: ['改革', '年', '内容', '起きた反発'],
    rows: [
      ['学制', '1872', '6歳以上の男女すべてに小学校教育', '学費と労働力を奪われる負担への反対'],
      ['徴兵令', '1873', '満20歳以上の男子に兵役', '血税一揆'],
      ['地租改正', '1873', '地価の3％を地主が現金で納める', '地租改正反対一揆 → 2.5％に引き下げ'],
    ] },
  { at: 'sec1', k: 'photo', t: '銀座（1880年代）', src: 'img/ginza.jpg',
    cap: '煉瓦づくりの街並みとガス灯。文明開化は、まず都市の目に見える部分から始まった。', credit: 'ウィキメディア・コモンズ「Ginza in 1880s.JPG」（Public domain）' },
  { at: 'sec2', k: 'photo', t: '帝国議会（衆議院）', src: 'img/teikokugikai.jpg',
    cap: '1890年に開かれたアジア初の近代議会。ただし選挙権は直接国税15円以上を納める男子に限られ、有権者は人口の約1.1％だった。', credit: 'ウィキメディア・コモンズ「Imperial Diet House of Commons.jpg」（Public domain）' },
  { at: 'sec2', k: 'svg', t: '自由民権運動から憲法まで',
    cap: '政府は弾圧しながらも、議会を開くという約束で運動の勢いをそらしていった。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="自由民権運動から立憲国家までの年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="58" y1="20" x2="58" y2="164" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="58" cy="32" r="5" fill="var(--primary)"/><text x="74" y="30">1874　民撰議院設立の建白書</text>'
      + '<circle cx="58" cy="60" r="5" fill="var(--muted)"/><text x="74" y="58">1880　国会期成同盟</text>'
      + '<text x="74" y="74" font-size="11" fill="var(--muted)">政府は集会条例で取り締まる</text>'
      + '<circle cx="58" cy="94" r="5" fill="var(--primary)"/><text x="74" y="92">1881　国会開設の勅諭</text>'
      + '<text x="74" y="108" font-size="11" fill="var(--muted)">10年後の開設を約束。自由党・立憲改進党が結成される</text>'
      + '<circle cx="58" cy="128" r="5" fill="var(--muted)"/><text x="74" y="126">1889　大日本帝国憲法</text>'
      + '<text x="74" y="142" font-size="11" fill="var(--muted)">欽定憲法。天皇が統治権を総攬し、議会の権限は限られる</text>'
      + '<circle cx="58" cy="158" r="5" fill="var(--primary)"/><text x="74" y="156">1890　第1回帝国議会</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '日清戦争と日露戦争',
    cap: '勝ったのは同じでも、得たものと国民の受けとめ方はまったく違った。',
    head: ['', '日清戦争（1894〜95）', '日露戦争（1904〜05）'],
    rows: [
      ['原因', '朝鮮をめぐる対立（甲午農民戦争）', '満州・韓国をめぐる対立'],
      ['条約', '下関条約', 'ポーツマス条約'],
      ['得たもの', '遼東半島・台湾・賠償金2億両', '南樺太・旅順大連の租借権・韓国の指導権'],
      ['賠償金', 'あり（八幡製鉄所の建設に充てる）', 'なし'],
      ['あと', '三国干渉で遼東半島を返還', '日比谷焼打ち事件'],
    ] },
],

taisho: [
  { at: 'ov', k: 'photo', t: '関東大震災（1923年）', src: 'img/shinsai.jpg',
    cap: '死者・行方不明者は10万人を超えた。混乱のなかで朝鮮人への流言が広がり、多くの人が殺害される事件も起きている。', credit: 'ウィキメディア・コモンズ「1923 Great Kantō earthquake destructions.jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: '大正デモクラシーの流れ',
    cap: '二度の護憲運動と米騒動が、藩閥政治を政党政治へと押し動かした。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="大正デモクラシーの年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="58" y1="18" x2="58" y2="156" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="58" cy="30" r="5" fill="var(--muted)"/><text x="74" y="28">1912　第一次護憲運動</text>'
      + '<text x="74" y="44" font-size="11" fill="var(--muted)">「閥族打破・憲政擁護」。桂内閣が倒れる（大正政変）</text>'
      + '<circle cx="58" cy="64" r="5" fill="var(--primary)"/><text x="74" y="62">1918　米騒動 → 原敬内閣</text>'
      + '<text x="74" y="78" font-size="11" fill="var(--muted)">初の本格的な政党内閣。「平民宰相」</text>'
      + '<circle cx="58" cy="98" r="5" fill="var(--muted)"/><text x="74" y="96">1924　第二次護憲運動</text>'
      + '<circle cx="58" cy="124" r="5" fill="var(--primary)"/><text x="74" y="122">1925　普通選挙法と治安維持法</text>'
      + '<text x="74" y="138" font-size="11" fill="var(--muted)">25歳以上の男子に選挙権。同時に思想を取り締まる法ができた</text>'
      + '<text x="74" y="156" font-size="11" fill="var(--muted)">理論的な支え＝吉野作造の民本主義、美濃部達吉の天皇機関説</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '大衆文化の始まり',
    cap: '都市に勤め人が増え、同じものを同時に読む・聴く・観る社会が生まれた。',
    head: ['分野', '代表的なもの'],
    rows: [
      ['新聞・雑誌', '発行部数が百万を超える。『キング』『改造』'],
      ['出版', '円本（1冊1円の全集）、岩波文庫'],
      ['放送', '1925年にラジオ放送が始まる'],
      ['映画', '活動写真から、のちにトーキーへ'],
      ['暮らし', '洋服・洋食・文化住宅。職業婦人が増える'],
    ] },
],

'showa-senzen': [
  { at: 'sec2', k: 'photo', t: '空襲後の東京', src: 'img/kushu.jpg',
    cap: '都市への無差別爆撃で、全国の市街地が焼かれた。1945年3月の東京大空襲だけで約10万人が亡くなっている。', credit: 'ウィキメディア・コモンズ「Bomb damage in Tokyo.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '二つの恐慌が重なった',
    cap: '国内の処理の失敗と世界恐慌が重なり、農村の窮乏が軍部の台頭を後押しした。',
    head: ['', '金融恐慌（1927）', '昭和恐慌（1930〜）'],
    rows: [
      ['きっかけ', '震災手形の処理の失敗と大臣の失言', '金解禁と世界恐慌が重なる'],
      ['起きたこと', '取付け騒ぎ、銀行の休業', '物価の暴落、生糸価格の崩壊'],
      ['農村', '—', '東北で欠食児童・身売り'],
      ['対応', 'モラトリアムと日銀特融', '高橋財政（金輸出再禁止・赤字国債）'],
      ['政治への影響', '財閥と政党への不信', '軍部の発言力が強まる'],
    ] },
  { at: 'sec1', k: 'svg', t: '戦争への道',
    cap: '対外的な行動と国内のクーデタが交互に起き、歯止めが一つずつ外れていった。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="戦争への道の年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="58" y1="16" x2="58" y2="186" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="58" cy="28" r="5" fill="var(--primary)"/><text x="74" y="26">1931　満州事変</text>'
      + '<text x="74" y="42" font-size="11" fill="var(--muted)">関東軍が柳条湖で鉄道を爆破。翌年「満州国」</text>'
      + '<circle cx="58" cy="62" r="5" fill="var(--muted)"/><text x="74" y="60">1932　五・一五事件　／　1933 国際連盟脱退</text>'
      + '<circle cx="58" cy="88" r="5" fill="var(--muted)"/><text x="74" y="86">1936　二・二六事件</text>'
      + '<text x="74" y="102" font-size="11" fill="var(--muted)">鎮圧されたが、以後は軍部の発言力が決定的になる</text>'
      + '<circle cx="58" cy="122" r="5" fill="var(--primary)"/><text x="74" y="120">1937　日中戦争</text>'
      + '<text x="74" y="136" font-size="11" fill="var(--muted)">盧溝橋事件から全面戦争へ。1938 国家総動員法</text>'
      + '<circle cx="58" cy="156" r="5" fill="var(--primary)"/><text x="74" y="154">1941　太平洋戦争</text>'
      + '<text x="74" y="170" font-size="11" fill="var(--muted)">石油の禁輸を受け、真珠湾攻撃へ。1945年8月に降伏</text>'
      + '</g></svg>' },
],

sengo: [
  { at: 'ov', k: 'photo', t: '昭和天皇とマッカーサー', src: 'img/senryo.jpg',
    cap: '1945年9月の会見。この一枚の写真が新聞に載り、占領という現実を国民に強く印象づけた。', credit: 'ウィキメディア・コモンズ「Emperor Hirohito and General MacArthur.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '占領下の民主化',
    cap: 'GHQの指令で、政治・経済・教育の仕組みが一度に組み替えられた。',
    head: ['分野', '行われたこと', '結果'],
    rows: [
      ['政治', '憲法の制定、女性参政権', '1946年の総選挙で女性議員39人'],
      ['経済', '財閥解体、独占禁止法', '持株会社が解散させられる'],
      ['農村', '農地改革', '自作農が大幅に増える'],
      ['労働', '労働三法', '労働組合の結成が進む'],
      ['教育', '教育基本法・学校教育法', '六・三・三・四制、男女共学'],
    ] },
  { at: 'sec2', k: 'svg', t: '高度経済成長とその終わり',
    cap: '年平均10％前後の成長が約20年続き、二度の石油危機で終わった。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="高度経済成長の推移を示す図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="54" y1="150" x2="610" y2="150" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="54" y1="26" x2="54" y2="150" stroke="var(--border)" stroke-width="1.5"/>'
      + '<text x="20" y="34" font-size="11" fill="var(--muted)">高い</text>'
      + '<text x="20" y="148" font-size="11" fill="var(--muted)">低い</text>'
      + '<path d="M58,140 L130,96 L200,62 L270,74 L340,48 L400,56 L440,136 L500,116 L540,142 L600,124" '
      + 'fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="128" y="168" text-anchor="middle" font-size="11" fill="var(--muted)">1955</text>'
      + '<text x="268" y="168" text-anchor="middle" font-size="11" fill="var(--muted)">1964</text>'
      + '<text x="430" y="168" text-anchor="middle" font-size="11" fill="var(--muted)">1973</text>'
      + '<text x="560" y="168" text-anchor="middle" font-size="11" fill="var(--muted)">1980年代</text>'
      + '<text x="150" y="88" font-size="11" fill="var(--text)">神武景気</text>'
      + '<text x="258" y="56" font-size="11" fill="var(--text)">東京オリンピック</text>'
      + '<text x="330" y="40" font-size="11" fill="var(--text)">いざなぎ景気</text>'
      + '<text x="420" y="110" font-size="11" fill="var(--primary)">石油危機</text>'
      + '<text x="320" y="192" font-size="11.5" fill="var(--muted)">成長のかげで公害が深刻化し、1967年に公害対策基本法、1971年に環境庁ができた</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
