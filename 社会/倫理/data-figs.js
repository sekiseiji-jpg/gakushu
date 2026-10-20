/* 倫理 ― 単元の説明に添える図・表・写真
   単元id → 図版の配列。at は 'ov'（概要タブ）か 'sec0' 'sec1' …（詳細タブの節の下）。
   k は 'table' / 'svg' / 'map' / 'photo'。写真は img/ に置き、保護期間の切れたものだけを使う。
*/
const FIGS = {

seinen: [
  { at: 'ov', k: 'svg', t: '青年期という時期',
    cap: '子どもでも大人でもない時期。社会が複雑になるほど、この期間は長くなる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="青年期の位置づけの図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="20" y="40" width="160" height="42" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="100" y="66">子ども</text>'
      + '<rect x="196" y="34" width="248" height="54" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="56" font-size="13" fill="var(--primary)">青年期</text>'
      + '<text x="320" y="76" font-size="11" fill="var(--muted)">マージナル・マン（境界人）／心理的離乳</text>'
      + '<rect x="460" y="40" width="160" height="42" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="540" y="66">大人</text>'
      + '<text x="320" y="116" font-size="11.5">ルソー「第二の誕生」　エリクソン「心理社会的モラトリアム」</text>'
      + '<text x="320" y="142" font-size="11.5" fill="var(--muted)">この時期の課題＝アイデンティティ（自我同一性）の確立</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">うまくいかないと役割の混乱（アイデンティティ拡散）が起きる</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '欲求と、それがかなわないときの反応',
    cap: '防衛機制は無意識に働く心の仕組み。良い悪いではなく、まず型を知っておく。',
    head: ['防衛機制', '中身', '例'],
    rows: [
      ['抑圧', '不快な記憶を意識から締め出す', '嫌な出来事を思い出せない'],
      ['合理化', 'もっともらしい理由をつける', '「あのぶどうは酸っぱい」'],
      ['同一視', '他人の価値を自分のものとする', '憧れの人のまねをする'],
      ['投射', '自分の感情を相手のものとする', '自分が嫌っているのに「嫌われている」と思う'],
      ['反動形成', '逆の態度をとる', '好きな子に意地悪をする'],
      ['昇華', '社会的に認められる形に変える', '攻撃性をスポーツに向ける'],
      ['退行', '前の発達段階に戻る', '弟が生まれて甘えが強くなる'],
    ] },
  { at: 'sec2', k: 'svg', t: 'マズローの欲求階層',
    cap: '下の欲求が満たされると、より上の欲求が現れるという考え方。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="マズローの欲求階層の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<polygon points="320,20 400,60 240,60" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="52" fill="var(--primary-text)" font-size="11">自己実現</text>'
      + '<polygon points="240,62 400,62 430,98 210,98" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="86" fill="var(--primary)">承認（自尊）の欲求</text>'
      + '<polygon points="210,100 430,100 460,136 180,136" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="124">所属と愛情の欲求</text>'
      + '<polygon points="180,138 460,138 490,174 150,174" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="162">安全の欲求</text>'
      + '<polygon points="150,176 490,176 510,200 130,200" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="194">生理的欲求</text>'
      + '<text x="548" y="48" font-size="11" fill="var(--muted)">成長欲求</text>'
      + '<text x="556" y="160" font-size="11" fill="var(--muted)">欠乏欲求</text>'
      + '</g></svg>' },
],

girisha: [
  { at: 'ov', k: 'photo', t: 'ソクラテス', src: 'img/socrates.jpg',
    cap: '「無知の知」を出発点に、問答によって相手に自ら気づかせた。著作を残さず、弟子プラトンが対話篇に記した。', credit: 'ウィキメディア・コモンズ「Socrates Louvre.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '自然哲学者が立てた「万物の根源」',
    cap: '神話ではなく自然そのもので世界を説明しようとした点が、哲学の始まりとされる。',
    head: ['人', 'アルケー（万物の根源）'],
    rows: [
      ['タレス', '水'],
      ['アナクシマンドロス', 'ト・アペイロン（無限なるもの）'],
      ['ピタゴラス', '数'],
      ['ヘラクレイトス', '火。「万物は流転する」'],
      ['パルメニデス', '「ある」もの。変化は見せかけ'],
      ['エンペドクレス', '土・水・火・空気の四元素'],
      ['デモクリトス', '原子（アトム）'],
    ] },
  { at: 'sec2', k: 'photo', t: 'プラトン', src: 'img/plato.jpg',
    cap: 'イデア界こそが真の実在だと説き、洞窟の比喩で感覚の世界の不確かさを示した。アカデメイアを開いた。', credit: 'ウィキメディア・コモンズ「Plato Silanion Musei Capitolini MC1377.png」（Public domain）' },
  { at: 'sec3', k: 'photo', t: 'アリストテレス', src: 'img/aristotle.jpg',
    cap: 'プラトンの弟子。イデアを現実の個物の内にある形相として捉え直し、あらゆる学問を体系化した。', credit: 'ウィキメディア・コモンズ「Aristotle Altemps Inv8575.jpg」（Public domain）' },
  { at: 'sec3', k: 'svg', t: 'プラトンとアリストテレスの違い',
    cap: '真の実在をどこに置くかが分かれ目。ラファエロの絵で一人が天を、一人が地を指すのはこの違いを表す。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="プラトンとアリストテレスの比較図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="270" height="110" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="52" font-size="13" fill="var(--primary)">プラトン</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">真の実在はイデア界にある</text>'
      + '<text x="159" y="96" font-size="11.5" fill="var(--muted)">魂の三分説と四元徳</text>'
      + '<text x="159" y="118" font-size="11.5" fill="var(--muted)">哲人政治</text>'
      + '<rect x="346" y="28" width="270" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="52" font-size="13">アリストテレス</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">形相は個物のうちにある</text>'
      + '<text x="481" y="96" font-size="11.5" fill="var(--muted)">知性的徳と習性的徳。中庸</text>'
      + '<text x="481" y="118" font-size="11.5" fill="var(--muted)">「人間はポリス的動物である」</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">ヘレニズム期にはストア派（禁欲・アパテイア）とエピクロス派（快楽・アタラクシア）が現れる</text>'
      + '</g></svg>' },
],

isshinkyo: [
  { at: 'ov', k: 'photo', t: 'キリストのイコン（シナイ、6世紀）', src: 'img/jesus.jpg',
    cap: '現存最古級のキリスト像。左右で表情が違い、裁く者と救う者という二つの面を表すと言われる。', credit: 'ウィキメディア・コモンズ「Christ Icon Sinai 6th century.jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: 'ユダヤ教とキリスト教',
    cap: '同じ神を信じながら、律法をどう見るかで道が分かれた。',
    head: ['', 'ユダヤ教', 'キリスト教'],
    rows: [
      ['神', 'ヤハウェ（唯一神）', '同じ神。三位一体として理解する'],
      ['救いの範囲', '選民思想。イスラエルの民', '全人類'],
      ['律法', '守ることが救いの条件', '律法の形式より内面の愛'],
      ['愛', '隣人愛', 'アガペー（神の無差別の愛）、敵をも愛する'],
      ['聖典', '旧約聖書（タナハ）', '旧約＋新約聖書'],
    ] },
  { at: 'sec2', k: 'svg', t: 'キリスト教思想の展開',
    cap: '信仰と理性の関係をどう整理するかが、教父哲学とスコラ哲学の主題だった。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="キリスト教思想の展開の図">'
      + '<defs><marker id="ar-is2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="34" width="180" height="74" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="114" y="58" font-size="12.5">教父哲学</text>'
      + '<text x="114" y="80" font-size="11" fill="var(--muted)">アウグスティヌス</text>'
      + '<text x="114" y="98" font-size="11" fill="var(--muted)">恩寵なしに人は救われない</text>'
      + '<rect x="230" y="34" width="180" height="74" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="58" font-size="12.5" fill="var(--primary)">スコラ哲学</text>'
      + '<text x="320" y="80" font-size="11" fill="var(--muted)">トマス＝アクィナス</text>'
      + '<text x="320" y="98" font-size="11" fill="var(--muted)">信仰と理性は矛盾しない</text>'
      + '<rect x="436" y="34" width="180" height="74" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="526" y="58" font-size="12.5">宗教改革へ</text>'
      + '<text x="526" y="80" font-size="11" fill="var(--muted)">ルター・カルヴァン</text>'
      + '<text x="526" y="98" font-size="11" fill="var(--muted)">聖書のみ、信仰のみ</text>'
      + '<line x1="208" y1="71" x2="226" y2="71" stroke="var(--muted)" marker-end="url(#ar-is2)"/>'
      + '<line x1="414" y1="71" x2="432" y2="71" stroke="var(--muted)" marker-end="url(#ar-is2)"/>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">「哲学は神学のはしため」＝理性は信仰に仕えるもの、という位置づけ</text>'
      + '</g></svg>' },
],

islam: [
  { at: 'ov', k: 'photo', t: 'クルアーンの写本', src: 'img/quran.jpg',
    cap: 'アラビア語で下された神の言葉そのものとされ、翻訳は解説とみなされる。偶像を描かないため、書と幾何文様が発達した。', credit: 'ウィキメディア・コモンズ「Qur’an manuscript Surat al-Nisa’. (1).tif」（Public domain）' },
  { at: 'sec1', k: 'table', t: '六信と五行',
    cap: '何を信じるか（六信）と、何を行うか（五行）が、はっきり決まっている。',
    head: ['', '内容'],
    rows: [
      ['六信', '神（アッラー）・天使・啓典・預言者・来世・天命'],
      ['五行①信仰告白', '「アッラーのほかに神はなく、ムハンマドはその使徒である」'],
      ['五行②礼拝', '1日5回、メッカの方角に向かって'],
      ['五行③喜捨', 'ザカート（義務の救貧税）'],
      ['五行④断食', 'ラマダーン月の日中'],
      ['五行⑤巡礼', '一生に一度、メッカへ（ハッジ）'],
    ] },
  { at: 'sec2', k: 'svg', t: 'イスラームの社会のかたち',
    cap: '宗教と法と政治が切り離されていないことが、この文明の大きな特徴である。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="イスラーム社会の構造の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="230" y="14" width="180" height="34" rx="8" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="37" fill="var(--primary-text)">クルアーンとハディース</text>'
      + '<rect x="40" y="72" width="160" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="120" y="94">シャリーア（法）</text>'
      + '<text x="120" y="114" font-size="11" fill="var(--muted)">信仰も商取引も婚姻も</text>'
      + '<rect x="240" y="72" width="160" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="94">ウンマ（共同体）</text>'
      + '<text x="320" y="114" font-size="11" fill="var(--muted)">民族をこえた信徒の集まり</text>'
      + '<rect x="440" y="72" width="160" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="520" y="94">カリフ／ウラマー</text>'
      + '<text x="520" y="114" font-size="11" fill="var(--muted)">政治の長と法学者</text>'
      + '<line x1="280" y1="48" x2="150" y2="68" stroke="var(--muted)"/>'
      + '<line x1="320" y1="48" x2="320" y2="68" stroke="var(--muted)"/>'
      + '<line x1="360" y1="48" x2="490" y2="68" stroke="var(--muted)"/>'
      + '<text x="320" y="154" font-size="11.5" fill="var(--muted)">スンナ派（多数派）とシーア派（アリーの子孫を指導者とする）に分かれる</text>'
      + '</g></svg>' },
],

bukkyo: [
  { at: 'ov', k: 'photo', t: '説法する仏陀（ガンダーラ）', src: 'img/buddha.jpg',
    cap: 'ヘレニズムの影響を受けた仏像。それまで仏は法輪や足跡で示され、人の姿では表されていなかった。', credit: 'ウィキメディア・コモンズ「Preaching Buddha Seated on a Lotus Throne, Gandhara, Kushan dynasty, 100s-200s AD, gray schist - Portland Art Museum - Portland, Oregon - DSC08481.jpg」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '四諦と八正道',
    cap: '苦しみを病気にたとえると、診断・原因・治るという見通し・処方、という順序になっている。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="四諦と八正道の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="28" width="146" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="87" y="50">苦諦</text><text x="87" y="70" font-size="11" fill="var(--muted)">人生は苦である</text>'
      + '<rect x="172" y="28" width="146" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="245" y="50">集諦</text><text x="245" y="70" font-size="11" fill="var(--muted)">原因は煩悩・渇愛</text>'
      + '<rect x="330" y="28" width="146" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="403" y="50">滅諦</text><text x="403" y="70" font-size="11" fill="var(--muted)">煩悩を消せば苦も消える</text>'
      + '<rect x="488" y="28" width="138" height="56" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="557" y="50" fill="var(--primary)">道諦</text><text x="557" y="70" font-size="11" fill="var(--muted)">その道が八正道</text>'
      + '<rect x="60" y="104" width="520" height="54" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="126" font-size="11.5">正見・正思・正語・正業・正命・正精進・正念・正定</text>'
      + '<text x="320" y="146" font-size="11" fill="var(--muted)">苦行にも快楽にも偏らない中道の実践</text>'
      + '<text x="320" y="184" font-size="11.5" fill="var(--muted)">三法印＝諸行無常・諸法無我・涅槃寂静（一切皆苦を加えて四法印）</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '上座部仏教と大乗仏教',
    cap: '誰が、どうやって救われるのかという点で、大きく考え方が分かれた。',
    head: ['', '上座部仏教', '大乗仏教'],
    rows: [
      ['救いの対象', '出家して修行する者', 'すべての人（一切衆生）'],
      ['理想の人格', '阿羅漢', '菩薩（自利と利他をあわせ行う）'],
      ['中心の考え', '戒律を守り自ら悟る', '空の思想（龍樹）、唯識（世親）'],
      ['伝わった地域', 'スリランカ・東南アジア（南伝）', '中国・朝鮮・日本（北伝）'],
    ] },
],

chugoku: [
  { at: 'ov', k: 'photo', t: '孔子', src: 'img/koushi.jpg',
    cap: '仁と礼によって乱れた世を正そうとした。その言行は弟子たちによって『論語』にまとめられた。', credit: 'ウィキメディア・コモンズ「Cropped version of Confucius Portrait, Kongzi (Confucius) Family Mansion, Qufu (13044335945).jpg」（Public domain）' },
  { at: 'sec0', k: 'table', t: '諸子百家',
    cap: '乱世をどう治めるかという同じ問いに、まったく違う答えが出された。',
    head: ['学派', '代表', '主張'],
    rows: [
      ['儒家', '孔子・孟子・荀子', '仁と礼。徳によって治める'],
      ['道家', '老子・荘子', '無為自然。作為を捨てる'],
      ['墨家', '墨子', '兼愛・非攻。差別のない愛'],
      ['法家', '商鞅・韓非', '法と刑罰で厳しく治める'],
      ['名家', '公孫竜', '名（言葉）と実の関係を論じる'],
      ['兵家', '孫子', '戦わずして勝つ'],
      ['陰陽家', '鄒衍', '陰陽と五行で世界を説明する'],
    ] },
  { at: 'sec2', k: 'svg', t: '性善説と性悪説',
    cap: '人の本性をどう見るかで、教育と政治のあり方が正反対になる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="性善説と性悪説の比較図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="270" height="110" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="52" font-size="13" fill="var(--primary)">孟子（性善説）</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">四端の心（惻隠・羞悪・辞譲・是非）</text>'
      + '<text x="159" y="96" font-size="11.5" fill="var(--muted)">育てれば四徳になる</text>'
      + '<text x="159" y="118" font-size="11.5" fill="var(--muted)">王道政治。易姓革命を認める</text>'
      + '<rect x="346" y="28" width="270" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="52" font-size="13">荀子（性悪説）</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">人の性は悪。善は後天的な矯正</text>'
      + '<text x="481" y="96" font-size="11.5" fill="var(--muted)">礼によって外から整える</text>'
      + '<text x="481" y="118" font-size="11.5" fill="var(--muted)">弟子の韓非が法家へ進む</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">のちに朱子学（理気二元論・性即理）と陽明学（心即理・知行合一）へ展開する</text>'
      + '</g></svg>' },
],

'nihon-kodai': [
  { at: 'ov', k: 'photo', t: '伊勢神宮（錦絵）', src: 'img/ise.jpg',
    cap: '清らかさを尊び、けがれを祓うという古代以来の信仰が、式年遷宮という形で今も続いている。', credit: 'ウィキメディア・コモンズ「Ise-Grand-Shrine-Emperor-Meiji-Sadahide-Utagawa-1869.png」（Public domain）' },
  { at: 'sec1', k: 'svg', t: '古代日本の倫理観',
    cap: '善悪ではなく、清いか濁っているかで物事をはかるのが、古代の感覚だった。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="古代日本の倫理観の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="34" width="240" height="90" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="160" y="58" font-size="13" fill="var(--primary)">よいこと</text>'
      + '<text x="160" y="82" font-size="11.5" fill="var(--muted)">清き明き心（清明心）</text>'
      + '<text x="160" y="104" font-size="11.5" fill="var(--muted)">正直・まこと</text>'
      + '<rect x="360" y="34" width="240" height="90" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="480" y="58" font-size="13">わるいこと</text>'
      + '<text x="480" y="82" font-size="11.5" fill="var(--muted)">きたなき心・私心</text>'
      + '<text x="480" y="104" font-size="11.5" fill="var(--muted)">罪とけがれ</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">けがれは祓いと禊で落とせる。内面の罪というより、取り除ける汚れと捉えた</text>'
      + '</g></svg>' },
  { at: 'sec3', k: 'table', t: '平安仏教の二つの流れ',
    cap: '国家の仏教から、山にこもって修行する仏教へ。やがて貴族の信仰と結びつく。',
    head: ['', '天台宗', '真言宗'],
    rows: [
      ['開祖', '最澄', '空海'],
      ['本山', '比叡山延暦寺', '高野山金剛峯寺'],
      ['よりどころ', '法華経。一切衆生悉有仏性', '大日如来。密教'],
      ['修行', '止観', '三密（身・口・意）の行'],
      ['のちの展開', '鎌倉仏教の祖師の多くを輩出', '加持祈祷が貴族に広まる'],
    ] },
],

'nihon-bukkyo': [
  { at: 'ov', k: 'photo', t: '親鸞', src: 'img/shinran.jpg',
    cap: '「善人なをもて往生をとぐ、いはんや悪人をや」。自力をたのむ心を捨てたところに救いがあると説いた。', credit: 'ウィキメディア・コモンズ「ShinranShonin.png」（Public domain）' },
  { at: 'sec3', k: 'table', t: '鎌倉仏教の祖師たち',
    cap: '難しい修行ではなく、誰にでもできる一つの行（易行）を選びとった点が共通している。',
    head: ['宗派', '開祖', '行', '主著'],
    rows: [
      ['浄土宗', '法然', '専修念仏（南無阿弥陀仏）', '『選択本願念仏集』'],
      ['浄土真宗', '親鸞', '絶対他力。悪人正機', '『教行信証』'],
      ['時宗', '一遍', '踊念仏。全国を遊行', '—'],
      ['臨済宗', '栄西', '坐禅と公案', '『興禅護国論』'],
      ['曹洞宗', '道元', '只管打坐。修証一等', '『正法眼蔵』'],
      ['日蓮宗', '日蓮', '題目（南無妙法蓮華経）', '『立正安国論』'],
    ] },
  { at: 'sec3', k: 'svg', t: '鎌倉仏教に共通するもの',
    cap: '末法の世という危機感のもとで、救いの道が万人に開かれた。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="鎌倉仏教の特徴の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="210" y="14" width="220" height="34" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="37" fill="var(--primary)">末法の世という危機感</text>'
      + '<rect x="24" y="76" width="180" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="114" y="98">易行</text><text x="114" y="118" font-size="11" fill="var(--muted)">誰にでもできる行</text>'
      + '<rect x="230" y="76" width="180" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="98">選択</text><text x="320" y="118" font-size="11" fill="var(--muted)">一つの行だけを選ぶ</text>'
      + '<rect x="436" y="76" width="180" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="526" y="98">専修</text><text x="526" y="118" font-size="11" fill="var(--muted)">ひたすらそれに打ちこむ</text>'
      + '<line x1="270" y1="48" x2="140" y2="72" stroke="var(--muted)"/>'
      + '<line x1="320" y1="48" x2="320" y2="72" stroke="var(--muted)"/>'
      + '<line x1="370" y1="48" x2="500" y2="72" stroke="var(--muted)"/>'
      + '<text x="320" y="156" font-size="11.5" fill="var(--muted)">貴族のものだった仏教が、武士と民衆のものになった</text>'
      + '</g></svg>' },
],

kinsei: [
  { at: 'ov', k: 'photo', t: '本居宣長（自画像）', src: 'img/norinaga.jpg',
    cap: '『源氏物語』に「もののあはれ」を見いだし、儒教や仏教に染まる前の日本の心を取り出そうとした。', credit: 'ウィキメディア・コモンズ「Motoori Norinaga self portrait.jpg」（Public domain）' },
  { at: 'sec1', k: 'table', t: '近世日本の思想家',
    cap: '朱子学から出発しながら、それを批判して独自の道を開いた人が多い。',
    head: ['学派', '人', '主張'],
    rows: [
      ['朱子学', '林羅山', '上下定分の理。幕府の官学に'],
      ['陽明学', '中江藤樹', '知行合一。孝を重んじる'],
      ['古学', '山鹿素行', '士道。武士の存在意義を問う'],
      ['古義学', '伊藤仁斎', '『論語』にじかに向かう。仁は愛'],
      ['古文辞学', '荻生徂徠', '経世済民。制度を整えることが先'],
      ['国学', '本居宣長', 'もののあはれ、漢意を去る'],
      ['町人の思想', '石田梅岩', '石門心学。正直と倹約、商人の利は正当'],
      ['農民の思想', '安藤昌益', '万人直耕の自然世'],
    ] },
],

'kindai-nihon': [
  { at: 'ov', k: 'photo', t: '福沢諭吉', src: 'img/fukuzawa.jpg',
    cap: '「天は人の上に人を造らず」。独立自尊と実学を説き、個人が自立してこそ国も独立すると考えた。', credit: 'ウィキメディア・コモンズ「Fukuzawa Yukichi 1891.jpg」（Public domain）' },
  { at: 'sec2', k: 'svg', t: '近代日本の思想の流れ',
    cap: '西洋をどう受け止めるかという問いが、形を変えながら受け継がれた。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="近代日本の思想の流れの図">'
      + '<defs><marker id="ar-kn" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="30" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="87" y="54">啓蒙思想</text>'
      + '<text x="87" y="74" font-size="11" fill="var(--muted)">福沢諭吉・中村正直</text>'
      + '<text x="87" y="92" font-size="11" fill="var(--muted)">明六社</text>'
      + '<rect x="172" y="30" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="245" y="54">自由民権</text>'
      + '<text x="245" y="74" font-size="11" fill="var(--muted)">中江兆民</text>'
      + '<text x="245" y="92" font-size="11" fill="var(--muted)">「東洋のルソー」</text>'
      + '<rect x="330" y="30" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="403" y="54">キリスト教</text>'
      + '<text x="403" y="74" font-size="11" fill="var(--muted)">内村鑑三・新渡戸稲造</text>'
      + '<text x="403" y="92" font-size="11" fill="var(--muted)">二つのJ、武士道</text>'
      + '<rect x="488" y="30" width="138" height="70" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="557" y="54" fill="var(--primary)">近代的自我</text>'
      + '<text x="557" y="74" font-size="11" fill="var(--muted)">夏目漱石・森鴎外</text>'
      + '<text x="557" y="92" font-size="11" fill="var(--muted)">自己本位・諦念</text>'
      + '<line x1="162" y1="65" x2="168" y2="65" stroke="var(--muted)" marker-end="url(#ar-kn)"/>'
      + '<line x1="320" y1="65" x2="326" y2="65" stroke="var(--muted)" marker-end="url(#ar-kn)"/>'
      + '<line x1="478" y1="65" x2="484" y2="65" stroke="var(--muted)" marker-end="url(#ar-kn)"/>'
      + '<text x="320" y="138" font-size="11.5" fill="var(--muted)">日本独自の哲学＝西田幾多郎の純粋経験、和辻哲郎の間柄的存在と風土</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">民衆に目を向けた人＝柳田国男（常民）、南方熊楠、柳宗悦（民芸）</text>'
      + '</g></svg>' },
],

akebono: [
  { at: 'ov', k: 'table', t: '経験論と合理論',
    cap: '知識はどこから来るのか。感覚からか、理性からか。この対立をカントが統合する。',
    head: ['', '経験論', '合理論'],
    rows: [
      ['知識の源', '経験・感覚', '生まれつきの理性（生得観念）'],
      ['方法', '帰納法', '演繹法'],
      ['代表', 'ベーコン、ロック、ヒューム', 'デカルト、スピノザ、ライプニッツ'],
      ['有名な語', 'イドラ、「知は力なり」、タブラ・ラサ', '方法的懐疑、「われ思う、ゆえにわれあり」'],
      ['地域', 'イギリス', '大陸'],
    ] },
  { at: 'sec0', k: 'svg', t: 'ルネサンスと宗教改革が変えたもの',
    cap: 'どちらも、人と神のあいだにある権威を取り払おうとする動きだった。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ルネサンスと宗教改革の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="270" height="94" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="54" font-size="13" fill="var(--primary)">ルネサンス</text>'
      + '<text x="159" y="78" font-size="11.5" fill="var(--muted)">人間性の回復（ヒューマニズム）</text>'
      + '<text x="159" y="100" font-size="11.5" fill="var(--muted)">ピコ「人間の尊厳」／エラスムス</text>'
      + '<rect x="346" y="30" width="270" height="94" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="54" font-size="13">宗教改革</text>'
      + '<text x="481" y="78" font-size="11.5" fill="var(--muted)">聖書のみ・信仰のみ・万人司祭</text>'
      + '<text x="481" y="100" font-size="11.5" fill="var(--muted)">ルター／カルヴァンの職業召命観</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">ウェーバーは、カルヴァン派の禁欲が資本主義の精神を育てたと論じた</text>'
      + '</g></svg>' },
],

keimo: [
  { at: 'ov', k: 'photo', t: 'ルソー', src: 'img/rousseau.jpg',
    cap: '「自然に帰れ」。文明が人を不平等にしたと批判し、一般意志にもとづく人民主権を説いた。', credit: 'ウィキメディア・コモンズ「Jean-Jacques Rousseau (painted portrait).jpg」（Public domain）' },
  { at: 'sec2', k: 'photo', t: 'カント', src: 'img/kant.jpg',
    cap: '経験論と合理論を統合し、道徳は結果ではなく動機にあると論じた。「なすべきであるから、なしうる」。', credit: 'ウィキメディア・コモンズ「Immanuel Kant - Gemaelde 1.jpg」（Public domain）' },
  { at: 'sec2', k: 'svg', t: 'カントの道徳哲学',
    cap: '「〜したければ〜せよ」ではなく、無条件に「〜せよ」と命じるものが道徳法則である。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="カントの道徳哲学の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="270" height="92" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="159" y="52" font-size="12.5">仮言命法</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">「ほめられたいなら正直であれ」</text>'
      + '<text x="159" y="98" font-size="11.5" fill="var(--muted)">条件つき。道徳ではない</text>'
      + '<rect x="346" y="28" width="270" height="92" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="481" y="52" font-size="12.5" fill="var(--primary)">定言命法</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">「正直であれ」</text>'
      + '<text x="481" y="98" font-size="11.5" fill="var(--muted)">無条件。これが道徳法則</text>'
      + '<text x="320" y="148" font-size="11.5">「汝の意志の格率が、つねに同時に普遍的立法の原理となるように行為せよ」</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">人格を手段としてのみ扱わず、つねに目的としても扱え → 目的の王国</text>'
      + '</g></svg>' },
],

kanen: [
  { at: 'ov', k: 'photo', t: 'マルクス', src: 'img/marx.jpg',
    cap: '資本主義のもとで労働が人間から切り離される（疎外）と論じ、生産関係から歴史を説明した。', credit: 'ウィキメディア・コモンズ「Karl Marx by John Jabez Edwin Mayall 1875 - Restored.png」（Public domain）' },
  { at: 'sec1', k: 'table', t: '功利主義の二人',
    cap: '快楽を量ではかるか、質の違いを認めるか。ここが分かれ目になる。',
    head: ['', 'ベンサム', 'J.S.ミル'],
    rows: [
      ['原理', '最大多数の最大幸福', '同じ。ただし質を重んじる'],
      ['快楽', '量で計算できる（快楽計算）', '質の高い快楽がある'],
      ['有名な語', '量的功利主義', '「満足した豚であるより、不満足な人間であるほうがよい」'],
      ['制裁', '物理的・政治的・道徳的・宗教的', '内的制裁（良心）を重んじる'],
      ['自由', '—', '他者危害原則。『自由論』'],
    ] },
  { at: 'sec0', k: 'svg', t: 'ヘーゲルの弁証法',
    cap: '対立するものがぶつかり、より高い段階へ統合される。この運動として歴史を捉えた。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ヘーゲルの弁証法の図">'
      + '<defs><marker id="ar-hg" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="30" width="170" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="125" y="58">正（テーゼ）</text>'
      + '<rect x="430" y="30" width="170" height="44" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="515" y="58">反（アンチテーゼ）</text>'
      + '<text x="320" y="58" font-size="18" fill="var(--muted)">⇔</text>'
      + '<line x1="125" y1="76" x2="290" y2="108" stroke="var(--muted)" marker-end="url(#ar-hg)"/>'
      + '<line x1="515" y1="76" x2="350" y2="108" stroke="var(--muted)" marker-end="url(#ar-hg)"/>'
      + '<rect x="215" y="112" width="210" height="44" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="132" fill="var(--primary)">合（ジンテーゼ）</text>'
      + '<text x="320" y="149" font-size="11" fill="var(--muted)">止揚（アウフヘーベン）</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">「世界史とは自由の意識の進歩である」。人倫は家族→市民社会→国家へ</text>'
      + '</g></svg>' },
],

jitsuzon: [
  { at: 'ov', k: 'photo', t: 'ニーチェ（ムンク画）', src: 'img/nietzsche.jpg',
    cap: '「神は死んだ」。よりどころを失った時代に、運命を引き受けて生きる超人を説いた。', credit: 'ウィキメディア・コモンズ「Edvard Munch Friedrich Nietzsche Thielska 292.tif」（Public domain）' },
  { at: 'sec1', k: 'table', t: '実存主義の人びと',
    cap: '一般的な「人間」ではなく、いま・ここにいるこの私をどう生きるかを問う。',
    head: ['人', '立場', 'かぎになる語'],
    rows: [
      ['キルケゴール', '有神論的実存', '主体的真理、絶望、実存の三段階'],
      ['ニーチェ', '無神論的実存', '神の死、力への意志、永劫回帰、超人'],
      ['ヤスパース', '有神論的実存', '限界状況、実存的交わり、超越者'],
      ['ハイデガー', '存在の問い', '現存在、死への存在、世人（ダス・マン）'],
      ['サルトル', '無神論的実存', '実存は本質に先立つ、アンガジュマン'],
    ] },
  { at: 'sec2', k: 'svg', t: '構造主義とその後',
    cap: '自由に選んでいるつもりの主体も、じつは構造に規定されている、という問いかけ。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="構造主義とその後の図">'
      + '<defs><marker id="ar-jz" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="30" width="176" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="102" y="54">実存主義</text>'
      + '<text x="102" y="76" font-size="11" fill="var(--muted)">主体が自由に選ぶ</text>'
      + '<text x="102" y="94" font-size="11" fill="var(--muted)">サルトル</text>'
      + '<rect x="230" y="30" width="176" height="76" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="318" y="54" fill="var(--primary)">構造主義</text>'
      + '<text x="318" y="76" font-size="11" fill="var(--muted)">無意識の構造が決める</text>'
      + '<text x="318" y="94" font-size="11" fill="var(--muted)">レヴィ＝ストロース</text>'
      + '<rect x="446" y="30" width="180" height="76" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="536" y="54">ポスト構造主義</text>'
      + '<text x="536" y="76" font-size="11" fill="var(--muted)">権力・言説・差異</text>'
      + '<text x="536" y="94" font-size="11" fill="var(--muted)">フーコー、デリダ</text>'
      + '<line x1="192" y1="68" x2="226" y2="68" stroke="var(--muted)" marker-end="url(#ar-jz)"/>'
      + '<line x1="408" y1="68" x2="442" y2="68" stroke="var(--muted)" marker-end="url(#ar-jz)"/>'
      + '<text x="320" y="146" font-size="11.5" fill="var(--muted)">レヴィ＝ストロースは「未開」とされた社会にも精緻な構造があることを示し、</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">西洋中心の進歩史観を根本から揺さぶった</text>'
      + '</g></svg>' },
],

gendai: [
  { at: 'ov', k: 'table', t: '現代の倫理的課題',
    cap: 'どれも「どこまで許されるか」の線を、社会が決めなければならない問題である。',
    head: ['分野', '問題', 'かぎになる考え'],
    rows: [
      ['生命倫理', '安楽死・尊厳死、臓器移植、出生前診断', 'SOL（生命の尊厳）とQOL（生活の質）'],
      ['生命倫理', '遺伝子操作、クローン', 'インフォームド・コンセント、自己決定権'],
      ['環境倫理', '地球温暖化、資源の枯渇', '世代間倫理、自然の生存権、地球全体主義'],
      ['情報社会', 'プライバシー、フェイクニュース', 'メディア・リテラシー、デジタル・デバイド'],
      ['共生', '多文化共生、障害者の社会参加', 'ノーマライゼーション、バリアフリー'],
    ] },
  { at: 'sec3', k: 'svg', t: '正義をめぐる二つの立場',
    cap: '公正な分配をどう決めるか。ロールズとセンは、違う角度から答えを出した。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="正義論の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="270" height="104" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="52" font-size="13" fill="var(--primary)">ロールズ</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">無知のヴェールのもとで選ぶ</text>'
      + '<text x="159" y="96" font-size="11.5" fill="var(--muted)">平等な自由の原理</text>'
      + '<text x="159" y="116" font-size="11.5" fill="var(--muted)">格差原理＝不遇な人の利益になる不平等のみ可</text>'
      + '<rect x="346" y="28" width="270" height="104" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="52" font-size="13">セン</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">財の量ではなく、何ができるか</text>'
      + '<text x="481" y="96" font-size="11.5" fill="var(--muted)">潜在能力（ケイパビリティ）</text>'
      + '<text x="481" y="116" font-size="11.5" fill="var(--muted)">人間開発指数の考え方のもとに</text>'
      + '<text x="320" y="160" font-size="11.5" fill="var(--muted)">これに対し、共同体の価値を重んじる立場（サンデルらのコミュニタリアニズム）もある</text>'
      + '<text x="320" y="178" font-size="11.5" fill="var(--muted)">自由を最優先する立場（ノージックのリバタリアニズム）とも対立する</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
