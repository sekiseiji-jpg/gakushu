/* 政治・経済 ― 単元の説明に添える図・表・写真
   単元id → 図版の配列。at は 'ov'（概要タブ）か 'sec0' 'sec1' …（詳細タブの節の下）。
   k は 'table' / 'svg' / 'map' / 'photo'。写真は img/ に置き、権利の自由なものだけを使う。
*/
const FIGS = {

minshu: [
  { at: 'ov', k: 'table', t: '社会契約説の三人',
    cap: '自然状態をどう見るかで、国家に何を任せるか、抵抗してよいかの答えが変わる。',
    head: ['', 'ホッブズ', 'ロック', 'ルソー'],
    rows: [
      ['主著', '『リヴァイアサン』', '『統治二論』', '『社会契約論』'],
      ['自然状態', '万人の万人に対する闘争', 'おおむね平和。ただし不安定', '自由で平等。だが私有財産が不平等を生む'],
      ['契約の中身', '自然権を全面的に譲る', '信託する（自然権は手放さない）', '一般意志に従う'],
      ['政治の形', '絶対王政を正当化', '間接民主制・権力分立', '直接民主制・人民主権'],
      ['抵抗権', '認めない', '認める', '一般意志に反する政府は無効'],
      ['影響', '—', '名誉革命・アメリカ独立宣言', 'フランス革命'],
    ] },
  { at: 'sec1', k: 'svg', t: '法の支配と法治主義のちがい',
    cap: '「法で治める」だけでは足りない。その法の中身が人権に適っているかが問われる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="法の支配と法治主義の比較図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="270" height="116" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="52" font-size="13" fill="var(--primary)">法の支配（英米）</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">国王も議会も法に従う</text>'
      + '<text x="159" y="96" font-size="11.5" fill="var(--muted)">法の中身が人権に適うことを求める</text>'
      + '<text x="159" y="120" font-size="11.5" fill="var(--muted)">違憲審査で悪法を退けられる</text>'
      + '<rect x="346" y="28" width="270" height="116" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="52" font-size="13">形式的法治主義（かつての独）</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">法律の形をとっていればよい</text>'
      + '<text x="481" y="96" font-size="11.5" fill="var(--muted)">中身は問わない</text>'
      + '<text x="481" y="120" font-size="11.5" fill="var(--muted)">「悪法もまた法なり」になりうる</text>'
      + '<text x="320" y="170" font-size="11.5" fill="var(--muted)">ナチスは合法的に権力を握った。その反省から、戦後は実質的法治主義へ</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '議院内閣制と大統領制',
    cap: '行政府が議会から生まれるか、別に選ばれるかで、権力の抑え方が変わる。',
    head: ['', '議院内閣制（英・日）', '大統領制（米）'],
    rows: [
      ['首長の選び方', '議会が指名する', '国民が選ぶ（間接選挙）'],
      ['議会との関係', '内閣は議会に連帯して責任を負う', '互いに独立。閣僚は議員を兼ねない'],
      ['不信任', '議会が不信任できる', 'できない（弾劾は別）'],
      ['解散', '内閣が議会を解散できる', 'できない'],
      ['法案提出', '内閣が提出できる', '大統領はできない（教書で勧告）'],
      ['長所と短所', '連携しやすいが、与党が強いと抑制が弱い', '抑制が働くが、対立すると動かない'],
    ] },
],

kenpou: [
  { at: 'ov', k: 'svg', t: '日本国憲法の三つの柱',
    cap: '国民主権・基本的人権の尊重・平和主義。この三つが互いを支えている。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="日本国憲法の三大原理の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="230" y="14" width="180" height="36" rx="8" fill="var(--primary)" stroke="var(--primary)"/>'
      + '<text x="320" y="38" fill="var(--primary-text)">日本国憲法（1946公布）</text>'
      + '<rect x="18" y="80" width="190" height="78" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="113" y="104" font-size="12.5">国民主権</text>'
      + '<text x="113" y="124" font-size="11" fill="var(--muted)">前文・第1条</text>'
      + '<text x="113" y="142" font-size="11" fill="var(--muted)">天皇は象徴。国政の権能をもたない</text>'
      + '<rect x="224" y="80" width="190" height="78" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="319" y="104" font-size="12.5" fill="var(--primary)">基本的人権の尊重</text>'
      + '<text x="319" y="124" font-size="11" fill="var(--muted)">第11条・第97条</text>'
      + '<text x="319" y="142" font-size="11" fill="var(--muted)">侵すことのできない永久の権利</text>'
      + '<rect x="430" y="80" width="192" height="78" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="526" y="104" font-size="12.5">平和主義</text>'
      + '<text x="526" y="124" font-size="11" fill="var(--muted)">前文・第9条</text>'
      + '<text x="526" y="142" font-size="11" fill="var(--muted)">戦争の放棄、戦力の不保持</text>'
      + '<line x1="280" y1="50" x2="140" y2="76" stroke="var(--muted)"/>'
      + '<line x1="320" y1="50" x2="320" y2="76" stroke="var(--muted)"/>'
      + '<line x1="360" y1="50" x2="500" y2="76" stroke="var(--muted)"/>'
      + '<text x="320" y="182" font-size="11" fill="var(--muted)">改正には各議院の総議員の3分の2以上の賛成と、国民投票での過半数が要る（第96条）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '基本的人権の分類',
    cap: '国家にやめさせる権利、国家に求める権利、国家に参加する権利、という三つの向きで整理できる。',
    head: ['分類', '性格', 'おもな条文', '例'],
    rows: [
      ['平等権', '差別されない', '14条', '法の下の平等、両性の本質的平等'],
      ['自由権（精神）', '国家は干渉するな', '19〜23条', '思想良心、信教、表現、学問'],
      ['自由権（人身）', '同上', '18・31〜40条', '奴隷的拘束の禁止、適正手続、黙秘権'],
      ['自由権（経済）', '同上', '22・29条', '居住移転・職業選択、財産権'],
      ['社会権', '国家は保障せよ', '25〜28条', '生存権、教育を受ける権利、労働三権'],
      ['参政権', '国家に参加する', '15・79・96条', '選挙権、国民審査、国民投票'],
      ['請求権', '救済を求める', '16・17・32・40条', '請願、国家賠償、裁判を受ける権利'],
    ] },
  { at: 'sec2', k: 'svg', t: '新しい人権',
    cap: '条文に直接は書かれていないが、13条の幸福追求権などを根拠に認められてきた。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="新しい人権の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="200" y="14" width="240" height="34" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="36" fill="var(--primary)">第13条　幸福追求権・個人の尊重</text>'
      + '<rect x="14" y="76" width="148" height="64" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="88" y="98">環境権</text><text x="88" y="118" font-size="11" fill="var(--muted)">日照権。25条も根拠</text>'
      + '<rect x="174" y="76" width="148" height="64" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="248" y="98">プライバシーの権利</text>'
      + '<text x="248" y="118" font-size="11" fill="var(--muted)">「宴のあと」事件</text>'
      + '<rect x="334" y="76" width="148" height="64" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="408" y="98">知る権利</text><text x="408" y="118" font-size="11" fill="var(--muted)">情報公開法。21条も根拠</text>'
      + '<rect x="494" y="76" width="132" height="64" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="560" y="98">自己決定権</text><text x="560" y="118" font-size="11" fill="var(--muted)">インフォームド・コンセント</text>'
      + '<text x="320" y="166" font-size="11.5" fill="var(--muted)">人権は「公共の福祉」によって制約されうるが、その線引きはつねに争われる</text>'
      + '</g></svg>' },
],

touchi: [
  { at: 'ov', k: 'photo', t: '国会議事堂', src: 'img/kokkai.jpg',
    cap: '国権の最高機関であり、国の唯一の立法機関（第41条）。左が衆議院、右が参議院。', credit: 'ウィキメディア・コモンズ「National Diet Building - Tokyo, Japan - DSC06736.JPG」（CC0）' },
  { at: 'ov', k: 'svg', t: '三権分立のしくみ',
    cap: '三つの機関が互いに抑えあう。矢印の一つひとつが、具体的な権限にあたる。',
    svg: '<svg viewBox="0 0 640 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="三権分立の図">'
      + '<defs><marker id="ar-sk" markerWidth="8" markerHeight="8" refX="6" refY="2.5" orient="auto">'
      + '<path d="M0,0 L6,2.5 L0,5 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="240" y="12" width="160" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="37" fill="var(--primary)">国会（立法）</text>'
      + '<rect x="24" y="130" width="170" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="155">内閣（行政）</text>'
      + '<rect x="446" y="130" width="170" height="40" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="531" y="155">裁判所（司法）</text>'
      + '<line x1="258" y1="54" x2="140" y2="126" stroke="var(--muted)" marker-end="url(#ar-sk)"/>'
      + '<text x="150" y="86" font-size="10.5" fill="var(--muted)" text-anchor="end">内閣総理大臣の指名</text>'
      + '<text x="150" y="100" font-size="10.5" fill="var(--muted)" text-anchor="end">内閣不信任決議</text>'
      + '<line x1="168" y1="126" x2="286" y2="54" stroke="var(--muted)" marker-end="url(#ar-sk)"/>'
      + '<text x="236" y="112" font-size="10.5" fill="var(--muted)" text-anchor="start">衆議院の解散</text>'
      + '<line x1="382" y1="54" x2="500" y2="126" stroke="var(--muted)" marker-end="url(#ar-sk)"/>'
      + '<text x="492" y="86" font-size="10.5" fill="var(--muted)" text-anchor="start">裁判官の弾劾裁判</text>'
      + '<line x1="472" y1="126" x2="354" y2="54" stroke="var(--muted)" marker-end="url(#ar-sk)"/>'
      + '<text x="404" y="112" font-size="10.5" fill="var(--muted)" text-anchor="end">違憲立法審査</text>'
      + '<line x1="198" y1="144" x2="442" y2="144" stroke="var(--muted)" marker-end="url(#ar-sk)"/>'
      + '<text x="320" y="138" font-size="10.5" fill="var(--muted)">最高裁長官の指名</text>'
      + '<line x1="442" y1="160" x2="198" y2="160" stroke="var(--muted)" marker-end="url(#ar-sk)"/>'
      + '<text x="320" y="176" font-size="10.5" fill="var(--muted)">行政処分の違憲・違法審査</text>'
      + '<rect x="200" y="196" width="240" height="30" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="216" font-size="11.5">国民　選挙・世論・国民審査</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'photo', t: '最高裁判所', src: 'img/saikousai.jpg',
    cap: '違憲審査の終審裁判所であることから「憲法の番人」と呼ばれる。ただし実際に法令を違憲とした例は多くない。', credit: 'ウィキメディア・コモンズ「The-Supreme-Court-of-Japan-1.jpg」（CC0）' },
  { at: 'sec0', k: 'table', t: '衆議院の優越',
    cap: '任期が短く解散もあるため、民意をより新しく反映しているとされ、いくつかの点で優越する。',
    head: ['事項', '衆議院の優越'],
    rows: [
      ['法律案', '参議院が否決しても、衆議院で出席議員の3分の2以上で再可決すれば成立'],
      ['予算・条約・首相指名', '両院協議会でも一致しなければ衆議院の議決が国会の議決に'],
      ['予算の先議', '予算は衆議院が先に審議する'],
      ['内閣不信任', '衆議院だけがもつ'],
    ] },
],

chihou: [
  { at: 'ov', k: 'svg', t: '地方自治は二つの自治からなる',
    cap: '国から独立していること（団体自治）と、住民が決めること（住民自治）。両方そろって地方自治になる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="地方自治の二つの要素の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="30" width="250" height="100" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="165" y="56" font-size="13">団体自治</text>'
      + '<text x="165" y="80" font-size="11.5" fill="var(--muted)">国から独立した団体が</text>'
      + '<text x="165" y="100" font-size="11.5" fill="var(--muted)">自らの責任で事務を処理する</text>'
      + '<text x="165" y="120" font-size="11.5" fill="var(--muted)">条例の制定、課税自主権</text>'
      + '<rect x="350" y="30" width="250" height="100" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="475" y="56" font-size="13" fill="var(--primary)">住民自治</text>'
      + '<text x="475" y="80" font-size="11.5" fill="var(--muted)">その地域の住民の意思で</text>'
      + '<text x="475" y="100" font-size="11.5" fill="var(--muted)">政治が行われる</text>'
      + '<text x="475" y="120" font-size="11.5" fill="var(--muted)">首長と議員の直接選挙、直接請求</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">「地方自治は民主主義の学校である」（ブライス）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '直接請求権',
    cap: '署名を集めれば、住民が直接に政治を動かせる。必要な署名の数が重さを表している。',
    head: ['請求', '必要な署名', '請求先', 'その後'],
    rows: [
      ['条例の制定・改廃', '有権者の50分の1以上', '首長', '議会にかける'],
      ['事務の監査', '50分の1以上', '監査委員', '監査を実施'],
      ['議会の解散', '3分の1以上', '選挙管理委員会', '住民投票で過半数なら解散'],
      ['首長・議員の解職', '3分の1以上', '選挙管理委員会', '住民投票で過半数なら失職'],
      ['主要公務員の解職', '3分の1以上', '首長', '議会の3分の2以上の出席、4分の3以上の同意'],
    ] },
  { at: 'sec2', k: 'svg', t: '地方財政の構造',
    cap: '自前の収入が3〜4割にとどまる状態は、長く「三割自治」と呼ばれてきた。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="地方財政の歳入構造の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<rect x="40" y="40" width="220" height="40" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="150" y="65" text-anchor="middle" fill="var(--primary)">地方税（自主財源）</text>'
      + '<rect x="260" y="40" width="150" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="335" y="65" text-anchor="middle">地方交付税</text>'
      + '<rect x="410" y="40" width="120" height="40" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="470" y="65" text-anchor="middle">国庫支出金</text>'
      + '<rect x="530" y="40" width="70" height="40" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="565" y="65" text-anchor="middle">地方債</text>'
      + '<text x="150" y="104" text-anchor="middle" font-size="11" fill="var(--muted)">使い道は自由</text>'
      + '<text x="335" y="104" text-anchor="middle" font-size="11" fill="var(--muted)">使い道は自由。格差を調整</text>'
      + '<text x="470" y="104" text-anchor="middle" font-size="11" fill="var(--muted)">使い道が決まっている</text>'
      + '<text x="320" y="142" text-anchor="middle" font-size="11.5" fill="var(--muted)">三位一体の改革で税源を移したが、地域間の格差はなお大きい</text>'
      + '</g></svg>' },
],

senkyo: [
  { at: 'ov', k: 'table', t: '選挙制度のくらべかた',
    cap: '一つの選挙区から何人選ぶかで、死票の多さと政党の数が変わってくる。',
    head: ['', '小選挙区制', '大選挙区制', '比例代表制'],
    rows: [
      ['定数', '1人', '2人以上', '得票に応じて配分'],
      ['死票', '多い', '少なめ', 'とても少ない'],
      ['政党の数', '二大政党になりやすい', '多党化しやすい', '多党化しやすい'],
      ['長所', '政権が安定しやすい', '少数意見も通る', '民意を正確に映す'],
      ['短所', '民意とのずれが大きい', '同じ党の候補が争う', '小党が乱立し政権が不安定'],
    ] },
  { at: 'sec0', k: 'svg', t: '日本の選挙制度',
    cap: '衆議院と参議院で組み合わせ方が違う。衆議院では重複立候補と惜敗率の制度がある。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="日本の選挙制度の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="26" width="270" height="118" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="50" font-size="13" fill="var(--primary)">衆議院（任期4年・解散あり）</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">小選挙区比例代表並立制</text>'
      + '<text x="159" y="98" font-size="11.5" fill="var(--muted)">小選挙区289＋比例176</text>'
      + '<text x="159" y="122" font-size="11.5" fill="var(--muted)">比例は全国11ブロック・拘束名簿式</text>'
      + '<rect x="346" y="26" width="270" height="118" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="50" font-size="13">参議院（任期6年・3年ごと半数改選）</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">選挙区＋比例代表</text>'
      + '<text x="481" y="98" font-size="11.5" fill="var(--muted)">選挙区148＋比例100</text>'
      + '<text x="481" y="122" font-size="11.5" fill="var(--muted)">比例は全国1区・非拘束名簿式</text>'
      + '<text x="320" y="168" font-size="11.5" fill="var(--muted)">一票の格差をめぐる訴訟が繰り返され、定数の是正が続いている</text>'
      + '</g></svg>' },
],

'kokusai-sei': [
  { at: 'ov', k: 'svg', t: '国際連盟と国際連合',
    cap: '同じ失敗を繰り返さないよう、参加国・議決方法・制裁手段が変えられた。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="国際連盟と国際連合の比較図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="24" y="26" width="270" height="130" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="159" y="50" text-anchor="middle" font-size="13">国際連盟（1920〜46）</text>'
      + '<text x="40" y="76" font-size="11.5" fill="var(--muted)">本部＝ジュネーヴ</text>'
      + '<text x="40" y="98" font-size="11.5" fill="var(--muted)">米は不参加、独ソは排除・脱退</text>'
      + '<text x="40" y="120" font-size="11.5" fill="var(--muted)">総会は全会一致</text>'
      + '<text x="40" y="142" font-size="11.5" fill="var(--muted)">制裁は経済制裁のみ</text>'
      + '<rect x="346" y="26" width="270" height="130" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="481" y="50" text-anchor="middle" font-size="13" fill="var(--primary)">国際連合（1945〜）</text>'
      + '<text x="362" y="76" font-size="11.5" fill="var(--muted)">本部＝ニューヨーク</text>'
      + '<text x="362" y="98" font-size="11.5" fill="var(--muted)">大国がそろって参加</text>'
      + '<text x="362" y="120" font-size="11.5" fill="var(--muted)">総会は多数決。安保理に拒否権</text>'
      + '<text x="362" y="142" font-size="11.5" fill="var(--muted)">軍事的措置もとれる</text>'
      + '<text x="320" y="182" text-anchor="middle" font-size="11.5" fill="var(--muted)">ただし五大国が対立すると拒否権で安保理が動かない（「安保理の機能麻痺」）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '国連のおもな機関',
    cap: '総会と安保理の関係、そして専門機関のつながりをおさえる。',
    head: ['機関', '構成', '役割'],
    rows: [
      ['総会', '全加盟国。一国一票', '勧告を行う。拘束力はない'],
      ['安全保障理事会', '常任5＋非常任10', '平和の維持。決議に拘束力。常任国に拒否権'],
      ['経済社会理事会', '54か国', '専門機関との連携、NGOとの協議'],
      ['国際司法裁判所', '15人の裁判官', '国家間の紛争。当事国の同意が要る'],
      ['事務局', '事務総長が長', '日常業務。総会が任命'],
    ] },
],

heiwa: [
  { at: 'ov', k: 'svg', t: '憲法9条の解釈の変化',
    cap: '条文は変わっていないが、政府の解釈と自衛隊の役割は段階的に広がってきた。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="憲法9条をめぐる経過の年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="58" y1="18" x2="58" y2="186" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="58" cy="30" r="5" fill="var(--primary)"/><text x="74" y="28">1946　憲法公布。戦力の不保持</text>'
      + '<circle cx="58" cy="60" r="5" fill="var(--muted)"/><text x="74" y="58">1950　警察予備隊（朝鮮戦争）</text>'
      + '<circle cx="58" cy="88" r="5" fill="var(--muted)"/><text x="74" y="86">1954　自衛隊の発足</text>'
      + '<text x="74" y="102" font-size="11" fill="var(--muted)">政府見解＝自衛のための必要最小限度の実力は戦力にあたらない</text>'
      + '<circle cx="58" cy="122" r="5" fill="var(--muted)"/><text x="74" y="120">1992　PKO協力法</text>'
      + '<circle cx="58" cy="148" r="5" fill="var(--muted)"/><text x="74" y="146">2003　イラク特措法</text>'
      + '<circle cx="58" cy="176" r="5" fill="var(--primary)"/><text x="74" y="174">2014・15　集団的自衛権の限定的行使を容認、安全保障関連法</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '日米安全保障条約の要点',
    cap: '基地を置かせるかわりに守ってもらう、という形になっている。',
    head: ['項目', '内容'],
    rows: [
      ['始まり', '1951年に締結、1960年に改定（新安保条約）'],
      ['米の義務', '日本の施政下にある領域が攻撃されたら共同で対処（第5条）'],
      ['日本の義務', '米軍に施設と区域を提供（第6条）'],
      ['関連の取り決め', '日米地位協定。思いやり予算'],
      ['課題', '基地の約7割が沖縄に集中。騒音・事故・事件'],
    ] },
],

'keizai-taisei': [
  { at: 'ov', k: 'svg', t: '資本主義はどう姿を変えてきたか',
    cap: '市場に任せるか、政府が関わるか。その振れ幅のなかで経済政策が決まってきた。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="資本主義の変容の図">'
      + '<defs><marker id="ar-kz" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="12" y="34" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="85" y="56">自由放任</text>'
      + '<text x="85" y="76" font-size="11" fill="var(--muted)">アダム＝スミス</text>'
      + '<text x="85" y="94" font-size="11" fill="var(--muted)">「見えざる手」・小さな政府</text>'
      + '<rect x="170" y="34" width="146" height="70" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="243" y="56" fill="var(--primary)">修正資本主義</text>'
      + '<text x="243" y="76" font-size="11" fill="var(--muted)">ケインズ</text>'
      + '<text x="243" y="94" font-size="11" fill="var(--muted)">有効需要・大きな政府</text>'
      + '<rect x="328" y="34" width="146" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="401" y="56">新自由主義</text>'
      + '<text x="401" y="76" font-size="11" fill="var(--muted)">フリードマン</text>'
      + '<text x="401" y="94" font-size="11" fill="var(--muted)">規制緩和・民営化</text>'
      + '<rect x="486" y="34" width="142" height="70" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="557" y="56">現在</text>'
      + '<text x="557" y="76" font-size="11" fill="var(--muted)">格差と環境への対応</text>'
      + '<text x="557" y="94" font-size="11" fill="var(--muted)">政府の役割を問い直す</text>'
      + '<line x1="160" y1="69" x2="166" y2="69" stroke="var(--muted)" marker-end="url(#ar-kz)"/>'
      + '<line x1="318" y1="69" x2="324" y2="69" stroke="var(--muted)" marker-end="url(#ar-kz)"/>'
      + '<line x1="476" y1="69" x2="482" y2="69" stroke="var(--muted)" marker-end="url(#ar-kz)"/>'
      + '<text x="320" y="138" font-size="11.5" fill="var(--muted)">転機＝1929年の世界恐慌（自由放任の限界）と、1970年代のスタグフレーション（大きな政府の限界）</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">社会主義計画経済は、効率と自由の面で行き詰まり、1991年にソ連が解体した</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '経済の三つの主体',
    cap: 'それぞれが何を出し、何を受け取るかを追うと、お金とモノの流れが見える。',
    head: ['主体', '出すもの', '受け取るもの'],
    rows: [
      ['家計', '労働力・資本・土地、税金', '賃金・利子・地代、公共サービス'],
      ['企業', '財とサービス、税金', '代金、補助金・公共サービス'],
      ['政府', '公共財・社会保障', '税金'],
    ] },
],

shijou: [
  { at: 'ov', k: 'svg', t: '需要と供給で価格が決まる',
    cap: '価格が高ければ売りたい人が増え、買いたい人が減る。釣り合うところが均衡価格である。',
    svg: '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="需要曲線と供給曲線の図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="80" y1="190" x2="560" y2="190" stroke="var(--border)" stroke-width="1.5"/>'
      + '<line x1="80" y1="24" x2="80" y2="190" stroke="var(--border)" stroke-width="1.5"/>'
      + '<text x="566" y="194" font-size="11" fill="var(--muted)">数量</text>'
      + '<text x="56" y="22" font-size="11" fill="var(--muted)">価格</text>'
      + '<line x1="110" y1="40" x2="470" y2="180" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="474" y="178" font-size="11.5" fill="var(--primary)">需要D</text>'
      + '<line x1="110" y1="180" x2="470" y2="40" stroke="var(--accent)" stroke-width="2.5"/>'
      + '<text x="474" y="44" font-size="11.5" fill="var(--accent)">供給S</text>'
      + '<circle cx="290" cy="110" r="6" fill="var(--text)"/>'
      + '<line x1="80" y1="110" x2="290" y2="110" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<line x1="290" y1="110" x2="290" y2="190" stroke="var(--muted)" stroke-dasharray="4 3"/>'
      + '<text x="300" y="104" font-size="11.5">均衡点</text>'
      + '<text x="46" y="114" font-size="11" fill="var(--muted)">均衡価格</text>'
      + '<text x="290" y="208" font-size="11" fill="var(--muted)" text-anchor="middle">均衡数量</text>'
      + '<text x="500" y="90" font-size="11" fill="var(--muted)">価格が高いと</text>'
      + '<text x="500" y="106" font-size="11" fill="var(--muted)">売れ残り（超過供給）</text>'
      + '<text x="500" y="140" font-size="11" fill="var(--muted)">価格が低いと</text>'
      + '<text x="500" y="156" font-size="11" fill="var(--muted)">品不足（超過需要）</text>'
      + '<text x="320" y="224" text-anchor="middle" font-size="11.5" fill="var(--muted)">所得が増えると需要曲線そのものが右へ動く（シフト）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '市場の失敗',
    cap: '市場に任せるとうまくいかない場合があり、そこに政府が関わる理由がある。',
    head: ['種類', '中身', '対応'],
    rows: [
      ['独占・寡占', '価格が下がらず、競争が働かない', '独占禁止法、公正取引委員会'],
      ['外部不経済', '公害など、費用を払わずに他人へ損害', '規制、課税、汚染者負担の原則'],
      ['外部経済', '教育や研究の利益が広く及ぶ', '補助金、公的な供給'],
      ['公共財', '道路や灯台。ただ乗りが起きる', '政府が供給する'],
      ['情報の非対称性', '売り手と買い手で情報が違う', '情報開示の義務づけ'],
    ] },
],

'kokumin-shotoku': [
  { at: 'ov', k: 'table', t: '国民所得の諸概念',
    cap: '何を足して何を引くかで名前が変わる。つながりを一度たどっておくと混乱しない。',
    head: ['記号', '名前', '計算'],
    rows: [
      ['GDP', '国内総生産', '国内で1年間に生み出された付加価値の合計'],
      ['GNI', '国民総所得', 'GDP ＋ 海外からの純所得'],
      ['NNP', '国民純生産', 'GNI － 固定資本減耗'],
      ['NI', '国民所得', 'NNP － 間接税 ＋ 補助金'],
      ['—', '三面等価', '生産＝分配＝支出。どこから測っても同じ'],
    ] },
  { at: 'sec1', k: 'svg', t: '景気循環',
    cap: '好況・後退・不況・回復をくり返す。周期の長さによって四つの波が区別される。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="景気循環の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<line x1="40" y1="110" x2="608" y2="110" stroke="var(--border)" stroke-dasharray="4 4"/>'
      + '<path d="M40,110 Q110,40 180,110 Q250,180 320,110 Q390,40 460,110 Q530,180 600,110" '
      + 'fill="none" stroke="var(--primary)" stroke-width="2.5"/>'
      + '<text x="110" y="34" text-anchor="middle" font-size="11.5">好況</text>'
      + '<text x="215" y="150" text-anchor="middle" font-size="11.5">後退</text>'
      + '<text x="285" y="190" text-anchor="middle" font-size="11.5">不況</text>'
      + '<text x="390" y="34" text-anchor="middle" font-size="11.5">回復</text>'
      + '<rect x="40" y="152" width="560" height="40" rx="7" fill="var(--surface)" stroke="var(--border)" fill-opacity="0.6"/>'
      + '<text x="320" y="168" text-anchor="middle" font-size="11">キチン（約40か月・在庫）　ジュグラー（約10年・設備）</text>'
      + '<text x="320" y="184" text-anchor="middle" font-size="11">クズネッツ（約20年・建設）　コンドラチェフ（約50年・技術革新）</text>'
      + '</g></svg>' },
],

kinyuu: [
  { at: 'ov', k: 'photo', t: '日本銀行本店', src: 'img/nichigin.jpg',
    cap: '発券銀行・銀行の銀行・政府の銀行という三つの顔をもつ。物価の安定と金融システムの安定を任務とする。', credit: 'ウィキメディア・コモンズ「Bank of Japan building (79799).jpg」（CC0）' },
  { at: 'sec1', k: 'table', t: '金融政策の手段',
    cap: '景気が悪いときは世の中のお金を増やし、物価が上がりすぎるときは減らす。',
    head: ['手段', '不況のとき', '好況・インフレのとき'],
    rows: [
      ['公開市場操作', '買いオペ（資金を供給）', '売りオペ（資金を吸収）'],
      ['政策金利', '下げる', '上げる'],
      ['預金準備率操作', '下げる', '上げる'],
      ['非伝統的手段', '量的緩和、マイナス金利', '—'],
    ] },
  { at: 'sec0', k: 'svg', t: '信用創造のしくみ',
    cap: '銀行が貸し出すと、預金が預金を生む。最初の預金の何倍ものお金が世の中に生まれる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="信用創造のしくみの図">'
      + '<defs><marker id="ar-sy" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<rect x="18" y="30" width="150" height="56" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="93" y="52" font-size="12.5" fill="var(--primary)">A銀行</text>'
      + '<text x="93" y="72" fill="var(--muted)">預金100 → 貸出90</text>'
      + '<rect x="196" y="30" width="150" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="271" y="52" font-size="12.5">B銀行</text>'
      + '<text x="271" y="72" fill="var(--muted)">預金90 → 貸出81</text>'
      + '<rect x="374" y="30" width="150" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="449" y="52" font-size="12.5">C銀行</text>'
      + '<text x="449" y="72" fill="var(--muted)">預金81 → 貸出72.9</text>'
      + '<text x="572" y="62" font-size="20" fill="var(--muted)">…</text>'
      + '<line x1="170" y1="58" x2="192" y2="58" stroke="var(--muted)" marker-end="url(#ar-sy)"/>'
      + '<line x1="348" y1="58" x2="370" y2="58" stroke="var(--muted)" marker-end="url(#ar-sy)"/>'
      + '<rect x="130" y="108" width="380" height="46" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="128" font-size="12">預金準備率が10％なら、合計の預金は 100 ÷ 0.1 ＝ 1000</text>'
      + '<text x="320" y="146" font-size="11" fill="var(--muted)">信用創造額＝1000 － 100 ＝ 900</text>'
      + '</g></svg>' },
],

zaisei: [
  { at: 'ov', k: 'table', t: '財政の三つの働き',
    cap: 'ただお金を使うだけでなく、所得を配り直し、景気を調整する役割がある。',
    head: ['機能', '中身', '例'],
    rows: [
      ['資源配分', '市場では供給されにくい財を提供', '道路・警察・消防・教育'],
      ['所得再分配', '格差をならす', '累進課税、社会保障給付'],
      ['景気の安定', '自動的に、または意図的に調整', '自動安定化装置、裁量的財政政策'],
    ] },
  { at: 'sec1', k: 'svg', t: '直接税と間接税',
    cap: '負担する人と納める人が同じか違うかで分かれる。両者の比率を直間比率という。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="直接税と間接税の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="28" width="270" height="110" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="159" y="52" font-size="13" fill="var(--primary)">直接税</text>'
      + '<text x="159" y="76" font-size="11.5" fill="var(--muted)">負担する人＝納める人</text>'
      + '<text x="159" y="98" font-size="11.5" fill="var(--muted)">所得税・法人税・相続税</text>'
      + '<text x="159" y="122" font-size="11.5" fill="var(--muted)">累進課税で格差をならせる</text>'
      + '<rect x="346" y="28" width="270" height="110" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="481" y="52" font-size="13">間接税</text>'
      + '<text x="481" y="76" font-size="11.5" fill="var(--muted)">負担する人≠納める人</text>'
      + '<text x="481" y="98" font-size="11.5" fill="var(--muted)">消費税・酒税・関税</text>'
      + '<text x="481" y="122" font-size="11.5" fill="var(--muted)">景気に左右されにくいが逆進的</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">所得の低い人ほど負担率が重くなることを逆進性という（軽減税率はその緩和策）</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '公債をめぐる原則と現実',
    cap: '建設国債は認められ、赤字国債は特例法で発行されてきた。その積み重ねが大きい。',
    head: ['項目', '内容'],
    rows: [
      ['建設国債', '財政法4条で認められる。公共事業など'],
      ['赤字国債', '原則は禁止。毎年の特例法で発行'],
      ['市中消化の原則', '日銀が直接引き受けることは禁じられている'],
      ['問題', '将来世代への負担、利払い費の増加、クラウディングアウト'],
    ] },
],

'nihon-keizai': [
  { at: 'ov', k: 'svg', t: '戦後日本経済の歩み',
    cap: '復興 → 高度成長 → 安定成長 → バブル → 長期停滞。転機になった出来事を押さえる。',
    svg: '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="戦後日本経済の年表図">'
      + '<g font-size="12" fill="var(--text)">'
      + '<line x1="58" y1="18" x2="58" y2="196" stroke="var(--border)" stroke-width="2"/>'
      + '<circle cx="58" cy="30" r="5" fill="var(--muted)"/><text x="74" y="28">1945〜　復興期</text>'
      + '<text x="74" y="44" font-size="11" fill="var(--muted)">傾斜生産方式、ドッジ・ライン、朝鮮特需</text>'
      + '<circle cx="58" cy="64" r="5" fill="var(--primary)"/><text x="74" y="62">1955〜73　高度経済成長</text>'
      + '<text x="74" y="78" font-size="11" fill="var(--muted)">年平均10％前後。所得倍増計画、東京オリンピック</text>'
      + '<circle cx="58" cy="98" r="5" fill="var(--muted)"/><text x="74" y="96">1973　石油危機 → 安定成長へ</text>'
      + '<circle cx="58" cy="124" r="5" fill="var(--muted)"/><text x="74" y="122">1985　プラザ合意 → 円高 → バブル経済</text>'
      + '<circle cx="58" cy="152" r="5" fill="var(--primary)"/><text x="74" y="150">1991　バブル崩壊</text>'
      + '<text x="74" y="166" font-size="11" fill="var(--muted)">不良債権、デフレ、「失われた20年」</text>'
      + '<circle cx="58" cy="186" r="5" fill="var(--muted)"/><text x="74" y="184">2008 世界金融危機　2011 東日本大震災　以後も低成長が続く</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '日本経済の構造的な課題',
    cap: 'どれも人口の変化と結びついており、一つだけを直しても解決しにくい。',
    head: ['課題', '中身'],
    rows: [
      ['少子高齢化', '働き手が減り、社会保障の支え手も減る'],
      ['財政赤字', '国と地方の長期債務が国内総生産の2倍を超える'],
      ['デフレと低成長', '物価と賃金が上がらず、投資も伸びない'],
      ['中小企業と格差', '大企業との生産性・賃金の差、非正規雇用の増加'],
      ['地域格差', '東京一極集中と地方の人口減少'],
    ] },
],

roudou: [
  { at: 'ov', k: 'table', t: '労働三権と労働三法',
    cap: '働く人が一人では交渉できないため、団結する権利が憲法で保障されている。',
    head: ['', '内容', '根拠法'],
    rows: [
      ['団結権', '労働組合をつくる', '労働組合法'],
      ['団体交渉権', '使用者と交渉する', '労働組合法'],
      ['団体行動権', 'ストライキなどを行う', '労働組合法'],
      ['労働基準法', '最低限の労働条件（1日8時間・週40時間など）', '—'],
      ['労働関係調整法', '争議の調整（斡旋・調停・仲裁）', '—'],
    ] },
  { at: 'sec2', k: 'svg', t: '社会保障の四つの柱',
    cap: '保険で備え、足りないところを扶助で支え、施設と予防で下から支える。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="社会保障の四つの柱の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="28" width="150" height="90" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="89" y="52" font-size="12.5" fill="var(--primary)">社会保険</text>'
      + '<text x="89" y="74" font-size="11" fill="var(--muted)">医療・年金・雇用</text>'
      + '<text x="89" y="92" font-size="11" fill="var(--muted)">労災・介護</text>'
      + '<text x="89" y="110" font-size="11" fill="var(--muted)">保険料が主な財源</text>'
      + '<rect x="176" y="28" width="150" height="90" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="251" y="52" font-size="12.5">公的扶助</text>'
      + '<text x="251" y="74" font-size="11" fill="var(--muted)">生活保護</text>'
      + '<text x="251" y="92" font-size="11" fill="var(--muted)">憲法25条の生存権</text>'
      + '<text x="251" y="110" font-size="11" fill="var(--muted)">全額が税</text>'
      + '<rect x="338" y="28" width="150" height="90" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="413" y="52" font-size="12.5">社会福祉</text>'
      + '<text x="413" y="74" font-size="11" fill="var(--muted)">高齢者・障害者</text>'
      + '<text x="413" y="92" font-size="11" fill="var(--muted)">児童・ひとり親</text>'
      + '<rect x="500" y="28" width="126" height="90" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="563" y="52" font-size="12.5">公衆衛生</text>'
      + '<text x="563" y="74" font-size="11" fill="var(--muted)">感染症対策</text>'
      + '<text x="563" y="92" font-size="11" fill="var(--muted)">上下水道・保健所</text>'
      + '<text x="320" y="154" font-size="11.5" fill="var(--muted)">日本は1961年に国民皆保険・皆年金を実現した</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">少子高齢化で、給付と負担のつり合いをどう取るかが大きな課題になっている</text>'
      + '</g></svg>' },
],

'kokusai-keizai': [
  { at: 'ov', k: 'photo', t: 'ブレトンウッズ会議（1944年）', src: 'img/bretton.jpg',
    cap: '戦後の国際経済の枠組みを決めた会議。ここで IMF と国際復興開発銀行（世界銀行）の設立が合意された。', credit: 'ウィキメディア・コモンズ「Morgenthau Bretton Woods opening 1944.jpg」（Public domain）' },
  { at: 'sec0', k: 'svg', t: '比較生産費説',
    cap: '両方の生産で劣っていても、得意なほうに特化して交換すれば、双方の取り分が増える。',
    svg: '<svg viewBox="0 0 640 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="比較生産費説の図">'
      + '<g font-size="11.5" fill="var(--text)" text-anchor="middle">'
      + '<text x="320" y="22" font-size="12.5" fill="var(--muted)">1単位を作るのに必要な労働量（リカードの例）</text>'
      + '<rect x="120" y="34" width="180" height="32" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="210" y="55">イギリス　ラシャ100／ぶどう酒120</text>'
      + '<rect x="340" y="34" width="180" height="32" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="430" y="55">ポルトガル　ラシャ90／ぶどう酒80</text>'
      + '<text x="320" y="88" font-size="11.5" fill="var(--muted)">ポルトガルは両方で有利。それでも…</text>'
      + '<rect x="120" y="100" width="180" height="46" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="210" y="120" fill="var(--primary)">イギリスはラシャに特化</text>'
      + '<text x="210" y="138" font-size="11" fill="var(--muted)">220の労働で2.2単位</text>'
      + '<rect x="340" y="100" width="180" height="46" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="430" y="120" fill="var(--primary)">ポルトガルはぶどう酒に特化</text>'
      + '<text x="430" y="138" font-size="11" fill="var(--muted)">170の労働で2.125単位</text>'
      + '<text x="320" y="174" font-size="11.5" fill="var(--muted)">交換すれば、どちらも特化前より多く手に入る＝自由貿易の利益</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '円高・円安で何が変わるか',
    cap: '為替の動きは、輸出企業と輸入企業、そして家計に逆向きに効く。',
    head: ['', '円高（1ドル150円→100円）', '円安（1ドル100円→150円）'],
    rows: [
      ['輸出', '不利（現地価格が上がる）', '有利'],
      ['輸入', '有利（安く買える）', '不利'],
      ['海外旅行', '行きやすい', '行きにくい'],
      ['訪日旅行', '来にくい', '来やすい'],
      ['物価', '下がりやすい', '上がりやすい'],
    ] },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
