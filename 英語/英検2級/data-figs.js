/* 英検2級 ― 単元の説明に添える図・表 */
const FIGS = {

kurashi: [
  { at: 'ov', k: 'table', t: '家事の動詞は、対象とセットで',
    cap: '動詞だけを訳語で覚えると、どの場面で使うのか分からないまま終わる。',
    head: ['動詞', '意味', 'よく一緒に使う語'],
    rows: [
      ['sweep', '掃く', 'the floor（床）'],
      ['dust', 'ほこりを払う', 'the shelves（棚）'],
      ['polish', 'みがく', 'the shoes（靴）'],
      ['rinse', 'すすぐ', 'the cups（カップ）'],
      ['fold', 'たたむ', 'the clothes（服）'],
      ['mend', '繕う', 'a torn pocket（破れた袋）'],
    ] },
  { at: 'sec2', k: 'svg', t: '借りると貸すの使い分け',
    cap: 'お金を払うかどうかと、貸す側か借りる側かの二つで決まる。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="borrow と rent と lend の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="34" width="186" height="96" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="117" y="58" font-size="13" fill="var(--primary)">borrow</text>'
      + '<text x="117" y="82" font-size="11.5" fill="var(--muted)">無料で借りる</text>'
      + '<text x="117" y="106" font-size="11" fill="var(--muted)">borrow an umbrella</text>'
      + '<rect x="226" y="34" width="186" height="96" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="58" font-size="13">rent</text>'
      + '<text x="319" y="82" font-size="11.5" fill="var(--muted)">お金を払って借りる</text>'
      + '<text x="319" y="106" font-size="11" fill="var(--muted)">rent a car</text>'
      + '<rect x="428" y="34" width="188" height="96" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="522" y="58" font-size="13">lend</text>'
      + '<text x="522" y="82" font-size="11.5" fill="var(--muted)">貸す（逆の立場）</text>'
      + '<text x="522" y="106" font-size="11" fill="var(--muted)">lend him a book</text>'
      + '<text x="320" y="158" font-size="11.5" fill="var(--muted)">rent は「貸す」の意味でも使えるので、主語で判断する</text>'
      + '</g></svg>' },
],

manabi: [
  { at: 'ov', k: 'table', t: '試験と成績の語を分ける',
    cap: '日本語ではどれも「テスト」「成績」で済むので、意識して分けておく。',
    head: ['語', '指すもの', '例'],
    rows: [
      ['exam', '正式な試験', 'the final exam（期末試験）'],
      ['quiz', '授業中の小テスト', 'a weekly quiz（毎週の小テスト）'],
      ['test', '両方に使える広い語', 'a listening test'],
      ['grade', 'A・B・C のような評価', 'get a good grade'],
      ['score', '何点という数字', 'a high score'],
      ['result', '結果の知らせ', 'the exam results'],
    ] },
  { at: 'sec2', k: 'svg', t: '遅れると追いつくの言い分け',
    cap: '位置関係で考えると、三つの句動詞が整理できる。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="fall behind と catch up with と keep up with の図">'
      + '<defs><marker id="ar-mb1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M40,86 L600,86" stroke="var(--border)" stroke-width="1.6"/>'
      + '<text x="580" y="74" font-size="11" fill="var(--muted)">授業の進み</text>'
      + '<circle cx="150" cy="86" r="7" fill="var(--muted)"/>'
      + '<text x="150" y="118" font-size="11.5">fall behind</text>'
      + '<text x="150" y="136" font-size="10.5" fill="var(--muted)">遅れる</text>'
      + '<circle cx="360" cy="86" r="7" fill="var(--primary)"/>'
      + '<text x="360" y="118" font-size="11.5" fill="var(--primary)">catch up with</text>'
      + '<text x="360" y="136" font-size="10.5" fill="var(--muted)">追いつく</text>'
      + '<circle cx="520" cy="86" r="7" fill="var(--primary)"/>'
      + '<text x="520" y="118" font-size="11.5" fill="var(--primary)">keep up with</text>'
      + '<text x="520" y="136" font-size="10.5" fill="var(--muted)">遅れずについていく</text>'
      + '<path d="M168,86 L344,86" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-mb1)"/>'
      + '<text x="320" y="36" font-size="11.5" fill="var(--muted)">遅れた位置から追いつき、そのまま並んで進む</text>'
      + '</g></svg>' },
],

shigoto: [
  { at: 'ov', k: 'svg', t: '応募から退職までの流れ',
    cap: '語を流れの順に並べると、物語のように覚えられる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="応募から退職までの流れの図">'
      + '<defs><marker id="ar-sg2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="16" y="40" width="112" height="52" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="72" y="62" font-size="12" fill="var(--primary)">apply for</text>'
      + '<text x="72" y="80" font-size="10.5" fill="var(--muted)">応募する</text>'
      + '<path d="M132,66 L148,66" stroke="var(--primary)" stroke-width="1.3" marker-end="url(#ar-sg2)"/>'
      + '<rect x="152" y="40" width="112" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="208" y="62" font-size="12">interview</text>'
      + '<text x="208" y="80" font-size="10.5" fill="var(--muted)">面接</text>'
      + '<path d="M268,66 L284,66" stroke="var(--primary)" stroke-width="1.3" marker-end="url(#ar-sg2)"/>'
      + '<rect x="288" y="40" width="112" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="344" y="62" font-size="12">hire</text>'
      + '<text x="344" y="80" font-size="10.5" fill="var(--muted)">雇う</text>'
      + '<path d="M404,66 L420,66" stroke="var(--primary)" stroke-width="1.3" marker-end="url(#ar-sg2)"/>'
      + '<rect x="424" y="40" width="112" height="52" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="480" y="62" font-size="12">employee</text>'
      + '<text x="480" y="80" font-size="10.5" fill="var(--muted)">従業員</text>'
      + '<text x="320" y="128" font-size="12" fill="var(--primary)">辞めるときは三つに分かれる</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">quit（やめる・くだけた）／ resign（辞職する・正式）／ retire（定年で退く）</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '給料まわりの語',
    cap: '決まり方で語が変わる。求人の文章を読むときに効く。',
    head: ['語', '決まり方', '例'],
    rows: [
      ['salary', '月や年で決まる', 'an annual salary（年俸）'],
      ['wage', '時間や日で決まる', 'the hourly wage（時給）'],
      ['bonus', '臨時に出る', 'a summer bonus'],
      ['benefit', 'お金以外も含む待遇', 'good benefits（福利厚生）'],
      ['overtime', '所定を超えた分', 'work overtime（残業する）'],
    ] },
],

okane: [
  { at: 'ov', k: 'table', t: '「料金」は場面で語が変わる',
    cap: '日本語ではどれも料金だが、英語は場面ごとに別の語を使う。',
    head: ['語', '使う場面', '例'],
    rows: [
      ['price', '品物の値段', 'the price of the book'],
      ['cost', 'かかる費用', 'the cost of living'],
      ['fare', '乗り物の運賃', 'the train fare'],
      ['fee', '手数料・受講料・入場料', 'the entrance fee'],
      ['charge', 'サービスへの請求', 'a delivery charge'],
      ['rate', '割合・料率', 'the interest rate'],
    ] },
  { at: 'sec0', k: 'table', t: 'カタカナになって意味がずれた語',
    cap: '日本語で知っている語ほど、英語での意味を確かめ直す値打ちがある。',
    head: ['カタカナ', '日本語での意味', '英語の本当の意味', '言いたいときは'],
    rows: [
      ['バーゲン', '特売', 'bargain は買い得品そのもの', 'sale'],
      ['クレーム', '苦情', 'claim は主張する', 'complaint'],
      ['サービス', '無料', 'service は役務。無料の意味はない', 'free'],
      ['マンション', '集合住宅', 'mansion は大邸宅', 'apartment'],
    ] },
],

kenkou: [
  { at: 'ov', k: 'svg', t: '「焼く」が英語では三つに割れる',
    cap: '分かれ目は、熱をどう伝えるか。料理の文化がそのまま語に残っている。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="grill と bake と fry の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="34" width="186" height="100" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="117" y="58" font-size="13" fill="var(--primary)">grill</text>'
      + '<text x="117" y="82" font-size="11.5" fill="var(--muted)">火に直接あてる</text>'
      + '<text x="117" y="106" font-size="11" fill="var(--muted)">魚・ステーキ</text>'
      + '<rect x="226" y="34" width="186" height="100" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="58" font-size="13">bake</text>'
      + '<text x="319" y="82" font-size="11.5" fill="var(--muted)">囲まれた熱で通す</text>'
      + '<text x="319" y="106" font-size="11" fill="var(--muted)">パン・菓子</text>'
      + '<rect x="428" y="34" width="188" height="100" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="522" y="58" font-size="13">fry</text>'
      + '<text x="522" y="82" font-size="11.5" fill="var(--muted)">油を熱の媒介にする</text>'
      + '<text x="522" y="106" font-size="11" fill="var(--muted)">炒め物・揚げ物</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">塊のまま焼くのは roast、湯で煮るのは boil、蒸すのは steam</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '症状の言い方は二通り',
    cap: '名詞で言う型と、形容詞で言う型。どちらも一つずつ口に出せるようにしておく。',
    head: ['型', '形', '例'],
    rows: [
      ['名詞で言う', 'have ＋ a ＋ 症状', 'I have a headache.（頭が痛い）'],
      ['名詞で言う', 'have ＋ 症状', 'I have a fever.（熱がある）'],
      ['形容詞で言う', 'feel ＋ 形容詞', 'I feel dizzy.（めまいがする）'],
      ['形容詞で言う', 'be ＋ 形容詞', 'I am exhausted.（疲れきっている）'],
      ['動詞で言う', '部位 ＋ hurts', 'My knee hurts.（膝が痛む）'],
    ] },
],

tabi: [
  { at: 'ov', k: 'table', t: '乗り物で変わる前置詞',
    cap: '動詞だけでは使えない。かたまりで覚える。',
    head: ['乗り物', '乗る', '降りる', '理由'],
    rows: [
      ['電車・バス・飛行機', 'get on', 'get off', '立って歩ける広さがある'],
      ['車・タクシー', 'get in', 'get out of', '体をかがめて入る'],
      ['自転車・馬', 'get on', 'get off', 'またがる'],
      ['船', 'board / get on', 'get off', '甲板に上がる'],
    ] },
  { at: 'sec1', k: 'table', t: '空港とホテルの流れ',
    cap: 'リスニングで出る場面は決まっている。順に並べて覚える。',
    head: ['場面', '語', '意味'],
    rows: [
      ['出発前', 'book / reserve', '予約する'],
      ['空港', 'check in', '搭乗手続きをする'],
      ['空港', 'boarding pass', '搭乗券'],
      ['機内へ', 'board', '搭乗する'],
      ['到着', 'customs', '税関'],
      ['宿', 'vacancy', '空き部屋'],
      ['宿を出る', 'check out', '精算して出る'],
    ] },
],

shizen: [
  { at: 'ov', k: 'table', t: '守る側とこわす側',
    cap: '長文では、筆者がどちら側に立っているかが問われる。二列に分けて覚える。',
    head: ['守る側', '意味', 'こわす側', '意味'],
    rows: [
      ['protect', '危害から守る', 'pollute', '汚染する'],
      ['preserve', 'そのまま保つ', 'destroy', 'こわす'],
      ['conserve', 'むだ遣いしない', 'damage', '傷つける'],
      ['recycle', '再生利用する', 'consume', '消費する'],
      ['generate', '生み出す', 'threaten', 'おびやかす'],
    ] },
  { at: 'sec2', k: 'svg', t: '環境の文章は因果でできている',
    cap: 'この三つの型を知っていると、長文の筋がすぐ追える。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="因果を表す表現の図">'
      + '<defs><marker id="ar-sz1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="30" width="130" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="105" y="55" fill="var(--primary)">原因</text>'
      + '<path d="M176,50 L254,50" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sz1)"/>'
      + '<rect x="260" y="30" width="150" height="40" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="335" y="55" font-size="11.5">leads to</text>'
      + '<path d="M416,50 L464,50" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-sz1)"/>'
      + '<rect x="470" y="30" width="130" height="40" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="535" y="55" fill="var(--primary)">結果</text>'
      + '<text x="320" y="100" font-size="11.5" fill="var(--muted)">A results in B ／ A contributes to B ／ B is due to A</text>'
      + '<text x="320" y="134" font-size="11.5" fill="var(--muted)">Warming leads to stronger storms.（温暖化は強い嵐につながる）</text>'
      + '</g></svg>' },
],

shakai: [
  { at: 'ov', k: 'table', t: '許す側と禁じる側',
    cap: '後ろに来る形まで一組で覚える。動詞だけでは文が作れない。',
    head: ['語', '意味', '後ろの形'],
    rows: [
      ['allow', '許す', 'allow 人 to do'],
      ['permit', '許可する（正式）', 'permit 人 to do'],
      ['forbid', '禁じる', 'forbid 人 to do'],
      ['ban', '禁止する', 'ban 〜 / ban doing'],
      ['prevent', '妨げる', 'prevent 人 from doing'],
    ] },
  { at: 'sec1', k: 'table', t: '賛成と反対を一組で',
    cap: '意見を書く問題で、そのまま使える。どちらの立場でも書けるようにしておく。',
    head: ['賛成', '反対'],
    rows: [
      ['support（支持する）', 'oppose（反対する）'],
      ['agree with（同意する）', 'disagree with（反対する）'],
      ['in favor of（賛成して）', 'against（反対して）'],
      ['approve（承認する）', 'reject（はねつける）'],
    ] },
],

gijutsu: [
  { at: 'ov', k: 'table', t: '機器は操作の動詞とセットで',
    cap: '名詞だけ知っていても文にならない。二語のかたまりで取りこむ。',
    head: ['動詞', '意味', 'よく一緒に使う語'],
    rows: [
      ['install', '入れる、備えつける', 'the software / solar panels'],
      ['connect', 'つなぐ', 'to the network'],
      ['update', '新しくする', 'the software'],
      ['download', '取りこむ', 'a file'],
      ['delete', '消す', 'old files'],
      ['detect', '見つけ出す', 'movement（動き）'],
    ] },
  { at: 'sec1', k: 'table', t: '対になる動き',
    cap: '反対の動きを並べると、二語まとめて入る。',
    head: ['一方', 'もう一方'],
    rows: [
      ['download（取りこむ）', 'upload（送り上げる）'],
      ['turn on（電源を入れる）', 'turn off（電源を切る）'],
      ['install（入れる）', 'delete（消す）'],
      ['launch（打ち上げる）', 'land（着陸する）'],
    ] },
],

bunka: [
  { at: 'ov', k: 'svg', t: 'win と beat は後ろが違う',
    cap: '日本語の「勝つ」が一語で引き受けているところを、英語は二つに分けている。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="win と beat の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="34" width="266" height="96" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="163" y="58" font-size="13" fill="var(--primary)">win ＋ もの</text>'
      + '<text x="163" y="82" font-size="11.5" fill="var(--muted)">勝ち取ったものを置く</text>'
      + '<text x="163" y="106" font-size="11.5">win the game / win a prize</text>'
      + '<rect x="344" y="34" width="266" height="96" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="477" y="58" font-size="13">beat ＋ 人</text>'
      + '<text x="477" y="82" font-size="11.5" fill="var(--muted)">負かした相手を置く</text>'
      + '<text x="477" y="106" font-size="11.5">beat them / beat the champions</text>'
      + '<text x="320" y="156" font-size="11.5" fill="var(--muted)">win them / beat the game はどちらも誤り</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: '行事を紹介する型',
    cap: 'この二文があれば、祭りや行事の説明は形になる。面接でも使える。',
    head: ['言うこと', '型', '例'],
    rows: [
      ['いつ・どこで', 'It is held every 〜 in 〜.', 'It is held every August in Kyoto.'],
      ['何をするか', 'People 〜 and 〜.', 'People wear yukata and watch fireworks.'],
      ['由来', 'It started about 〜 years ago.', 'It started about 400 years ago.'],
      ['感想', 'It is worth seeing because 〜.', '―'],
    ] },
],

kokoro: [
  { at: 'ov', k: 'svg', t: '感情の ed と ing',
    cap: '人が受ける側なら -ed、物が与える側なら -ing。一字で意味がまるごと入れかわる。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="感情の ed と ing の図">'
      + '<defs><marker id="ar-kk3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="200" y="22" width="240" height="38" rx="8" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="46" font-size="12.5">bore（退屈させる）という動詞</text>'
      + '<path d="M280,64 C240,80 200,80 165,92" stroke="var(--primary)" stroke-width="1.3" fill="none" marker-end="url(#ar-kk3)"/>'
      + '<path d="M360,64 C400,80 440,80 475,92" stroke="var(--primary)" stroke-width="1.3" fill="none" marker-end="url(#ar-kk3)"/>'
      + '<rect x="30" y="98" width="266" height="68" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="163" y="122" font-size="12.5" fill="var(--primary)">bored（-ed）＝ 感じている人</text>'
      + '<text x="163" y="146" font-size="11.5" fill="var(--muted)">I was bored.（私は退屈した）</text>'
      + '<rect x="344" y="98" width="266" height="68" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="477" y="122" font-size="12.5">boring（-ing）＝ 感じさせるもの</text>'
      + '<text x="477" y="146" font-size="11.5" fill="var(--muted)">The lecture was boring.</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '気持ちの強さを三つ並べる',
    cap: '程度配列の問題は、この並びをそのまま問う。',
    head: ['弱い', '中くらい', '強い'],
    rows: [
      ['annoyed（いらっと）', 'angry（怒って）', 'furious（激怒して）'],
      ['pleased（満足して）', 'glad（うれしくて）', 'delighted（大喜びで）'],
      ['surprised（驚いて）', 'amazed（たいへん驚いて）', 'astonished（仰天して）'],
      ['nervous（緊張して）', 'worried（気がかりで）', 'terrified（おびえきって）'],
    ] },
],

kangae: [
  { at: 'ov', k: 'svg', t: '意見文の型',
    cap: '中身を考える前に並べ方を決めておくと、時間内に書き終わる。',
    svg: '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="意見文の型の図">'
      + '<defs><marker id="ar-kg1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="60" y="20" width="520" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="44" text-anchor="middle" fill="var(--primary)">1　立場を先に言う　I think that 〜.</text>'
      + '<path d="M320,62 L320,76" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kg1)"/>'
      + '<rect x="60" y="80" width="520" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="104" text-anchor="middle">2　理由を二つ　First, 〜. Second, 〜.</text>'
      + '<path d="M320,122 L320,136" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kg1)"/>'
      + '<rect x="60" y="140" width="520" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="164" text-anchor="middle">3　例を添える　For example, 〜.</text>'
      + '<path d="M320,182 L320,194" stroke="var(--primary)" stroke-width="1.4" marker-end="url(#ar-kg1)"/>'
      + '<text x="320" y="212" text-anchor="middle" font-size="11.5" fill="var(--muted)">4　もう一度立場を言う　Therefore, 〜.</text>'
      + '</g></svg>' },
  { at: 'sec1', k: 'table', t: 'つなぎの表現',
    cap: '次に何が来るかの予告になる。読むときも書くときも手がかりになる。',
    head: ['働き', '表現'],
    rows: [
      ['理由を示す', 'because / since / due to'],
      ['結果を示す', 'therefore / as a result / consequently'],
      ['例を挙げる', 'for example / for instance'],
      ['対比する', 'on the other hand / however / in contrast'],
      ['付け加える', 'in addition / moreover / besides'],
      ['言いかえる', 'in other words / that is'],
      ['まとめる', 'in conclusion / to sum up'],
    ] },
],

teido: [
  { at: 'ov', k: 'svg', t: '程度の副詞を強さの順に',
    cap: '一語ずつ訳で覚えるより、並べて覚えるほうが早い。',
    svg: '<svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="程度の副詞の強さの図">'
      + '<defs><marker id="ar-td1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<path d="M50,88 L600,88" stroke="var(--primary)" stroke-width="1.6" marker-end="url(#ar-td1)"/>'
      + '<text x="60" y="114" font-size="11" fill="var(--muted)">弱い</text>'
      + '<text x="578" y="114" font-size="11" fill="var(--muted)">強い</text>'
      + '<circle cx="120" cy="88" r="5" fill="var(--primary)"/><text x="120" y="68" font-size="11.5">slightly</text>'
      + '<circle cx="240" cy="88" r="5" fill="var(--primary)"/><text x="240" y="68" font-size="11.5">somewhat</text>'
      + '<circle cx="360" cy="88" r="5" fill="var(--primary)"/><text x="360" y="68" font-size="11.5">quite</text>'
      + '<circle cx="465" cy="88" r="5" fill="var(--primary)"/><text x="465" y="68" font-size="11.5">very</text>'
      + '<circle cx="560" cy="88" r="5" fill="var(--primary)"/><text x="560" y="68" font-size="11.5">extremely</text>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">huge や perfect のように端にある語には very をつけず、absolutely を使う</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '頻度の副詞と置く場所',
    cap: '置く場所がまちがいやすい。一般動詞の前、be 動詞の後ろ。',
    head: ['副詞', '意味', '置く場所の例'],
    rows: [
      ['always', 'いつも', 'She always arrives early.'],
      ['usually', 'ふだんは', 'I usually walk to school.'],
      ['often', 'しばしば', 'He often forgets his key.'],
      ['sometimes', 'ときどき', 'We sometimes eat out.'],
      ['seldom', 'めったに〜ない', 'She is seldom late.'],
      ['never', '一度も〜ない', 'I have never been there.'],
    ] },
],

ugoki: [
  { at: 'ov', k: 'svg', t: 'rise と raise の分かれ目',
    cap: '「何を」と聞けるかどうか。これだけで取りちがえが減る。',
    svg: '<svg viewBox="0 0 640 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="rise と raise の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="34" width="266" height="100" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="163" y="58" font-size="13" fill="var(--primary)">rise（目的語なし）</text>'
      + '<text x="163" y="82" font-size="11.5" fill="var(--muted)">自分で上がる</text>'
      + '<text x="163" y="104" font-size="11.5">Prices rise.</text>'
      + '<text x="163" y="124" font-size="10.5" fill="var(--muted)">rise - rose - risen</text>'
      + '<rect x="344" y="34" width="266" height="100" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="477" y="58" font-size="13">raise（目的語あり）</text>'
      + '<text x="477" y="82" font-size="11.5" fill="var(--muted)">何かを上げる</text>'
      + '<text x="477" y="104" font-size="11.5">The shop raised prices.</text>'
      + '<text x="477" y="124" font-size="10.5" fill="var(--muted)">raise - raised - raised</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">同じ関係に lie と lay、sit と seat がある</text>'
      + '</g></svg>' },
  { at: 'sec2', k: 'table', t: '現れる側と消える側',
    cap: '対にしておくと、どちらの話かがすぐつかめる。',
    head: ['現れる', '意味', '消える', '意味'],
    rows: [
      ['appear', '現れる', 'vanish', 'ふっと消える'],
      ['emerge', '姿を見せる', 'fade', '薄れる'],
      ['arise', '生じる', 'sink', '沈む'],
      ['occur', '起こる', 'slip', '滑り落ちる'],
    ] },
],

jukugo: [
  { at: 'ov', k: 'table', t: '付く語ごとの感覚',
    cap: 'この感覚が分かると、知らない組でも見当がつく。',
    head: ['付く語', '感覚', '例'],
    rows: [
      ['up', 'すっかり・上へ', 'use up / grow up / show up'],
      ['off', '離れる', 'take off / call off / put off'],
      ['out', '外へ・なくなるまで', 'find out / hand out / run out'],
      ['over', '越えて・ひと通り', 'get over / think over / look over'],
      ['on', '続ける・接する', 'go on / keep on / count on'],
      ['into', '中へ・変化', 'look into / run into / turn into'],
      ['with', '相手がいる', 'put up with / deal with'],
    ] },
  { at: 'sec3', k: 'svg', t: '目的語はどこに置くか',
    cap: '代名詞を入れて口に出してみると、どちらの型かが分かる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="句動詞の語順の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="30" width="290" height="124" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="169" y="54" font-size="12.5" fill="var(--primary)">動詞 ＋ 副詞（分けられる）</text>'
      + '<text x="169" y="80" font-size="11.5" fill="var(--muted)">turn on the light ○</text>'
      + '<text x="169" y="102" font-size="11.5" fill="var(--muted)">turn the light on ○</text>'
      + '<text x="169" y="126" font-size="11.5">turn it on ○　／　turn on it ×</text>'
      + '<text x="169" y="146" font-size="10.5" fill="var(--muted)">代名詞は必ずあいだに置く</text>'
      + '<rect x="326" y="30" width="290" height="124" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="471" y="54" font-size="12.5">動詞 ＋ 前置詞（分けられない）</text>'
      + '<text x="471" y="80" font-size="11.5" fill="var(--muted)">look at the picture ○</text>'
      + '<text x="471" y="102" font-size="11.5" fill="var(--muted)">look the picture at ×</text>'
      + '<text x="471" y="126" font-size="11.5">look at it ○</text>'
      + '<text x="471" y="146" font-size="10.5" fill="var(--muted)">代名詞でも後ろのまま</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
