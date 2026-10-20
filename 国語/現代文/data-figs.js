/* 現代文 ― 単元の説明に添える図・表 */
const FIGS = {

'hyouron-kihon': [
  { at: 'ov', k: 'svg', t: '評論文のかたち',
    cap: '話題を出し、一般の見方を示し、それを覆して主張へ。この流れをつかむと要旨が取れる。',
    svg: '<svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="評論文の構成の図">'
      + '<defs><marker id="ar-g1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="160" y="16" width="320" height="32" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="37">話題の提示　「〜について考えたい」</text>'
      + '<rect x="160" y="60" width="320" height="32" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="81">一般論　「たしかに〜と言われる」</text>'
      + '<rect x="160" y="104" width="320" height="32" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="125">転換　「しかし」「だが」</text>'
      + '<rect x="160" y="148" width="320" height="36" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="171" fill="var(--primary)">筆者の主張　「〜なのである」</text>'
      + '<line x1="320" y1="48" x2="320" y2="56" stroke="var(--muted)" marker-end="url(#ar-g1)"/>'
      + '<line x1="320" y1="92" x2="320" y2="100" stroke="var(--muted)" marker-end="url(#ar-g1)"/>'
      + '<line x1="320" y1="136" x2="320" y2="144" stroke="var(--muted)" marker-end="url(#ar-g1)"/>'
      + '<text x="70" y="124" font-size="11" fill="var(--muted)">ここが</text>'
      + '<text x="70" y="140" font-size="11" fill="var(--muted)">山場</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '主張が出やすい場所',
    cap: '文章全体を読まなくても、ここを拾えば筋が見える。',
    head: ['場所', '手がかり'],
    rows: [
      ['逆接のあと', 'しかし・だが・ところが'],
      ['まとめの語のあと', 'つまり・要するに・すなわち'],
      ['問いかけの答え', '「なぜ〜か」の直後'],
      ['くり返される語', '同じ語・言いかえが何度も出る'],
      ['断定の文末', '〜のである・〜にほかならない'],
      ['最初と最後の段落', '話題の提示と結論'],
    ] },
],

shijigo: [
  { at: 'ov', k: 'table', t: '接続語で先が読める',
    cap: '接続語は、次に何が来るかの予告になっている。',
    head: ['接続語', '次に来るもの'],
    rows: [
      ['しかし・だが・ところが', '前と逆のこと（ここに主張が多い）'],
      ['つまり・すなわち・要するに', '前の言いかえ・まとめ'],
      ['たとえば', '具体例（主張ではない）'],
      ['なぜなら・というのは', '理由'],
      ['したがって・だから', '結論'],
      ['もちろん・たしかに', '譲歩。あとに「しかし」が来る'],
      ['また・さらに', '並列・付け加え'],
    ] },
  { at: 'sec0', k: 'svg', t: '指示語のたどり方',
    cap: '原則として直前を探す。見つけたら、指示語の位置に入れて意味が通るか確かめる。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="指示語の探し方の図">'
      + '<defs><marker id="ar-g2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="40" y="34" width="560" height="34" rx="6" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="56" y="56" font-size="11.5">…近代社会は個人の自由を前提としている。</text>'
      + '<rect x="40" y="82" width="560" height="34" rx="6" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="56" y="104" font-size="11.5" fill="var(--primary)">このことが、かえって孤独を生んだ。</text>'
      + '<path d="M90,96 Q70,76 90,60" fill="none" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-g2)"/>'
      + '<text x="320" y="146" text-anchor="middle" font-size="11.5" fill="var(--muted)">まれに後ろを指すこともある（「次のことが問題だ。それは…」）</text>'
      + '</g></svg>' },
],

taihi: [
  { at: 'ov', k: 'svg', t: '二項対立をとらえる',
    cap: '評論では、二つのものを対比して論を進めることが多い。表にすると関係が見える。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="二項対立の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="30" width="240" height="120" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="160" y="56" font-size="12.5">A</text>'
      + '<text x="160" y="84" font-size="11.5" fill="var(--muted)">近代・西洋・論理</text>'
      + '<text x="160" y="106" font-size="11.5" fill="var(--muted)">個人・人工・合理</text>'
      + '<text x="160" y="132" font-size="11.5" fill="var(--muted)">筆者が批判する側</text>'
      + '<rect x="360" y="30" width="240" height="120" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="480" y="56" font-size="12.5" fill="var(--primary)">B</text>'
      + '<text x="480" y="84" font-size="11.5" fill="var(--muted)">前近代・東洋・感性</text>'
      + '<text x="480" y="106" font-size="11.5" fill="var(--muted)">共同体・自然・非合理</text>'
      + '<text x="480" y="132" font-size="11.5" fill="var(--muted)">筆者が重んじる側</text>'
      + '<text x="320" y="96" font-size="18" fill="var(--muted)">⇔</text>'
      + '<text x="320" y="172" font-size="11.5" fill="var(--muted)">※どちらを支持するかは文章によって逆になる。決めつけずに本文で確かめる</text>'
      + '</g></svg>' },
],

chuushou: [
  { at: 'ov', k: 'svg', t: '抽象と具体のはしご',
    cap: '具体例は主張の証拠。主張そのものは抽象の側にある。',
    svg: '<svg viewBox="0 0 640 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="抽象と具体の図">'
      + '<defs><marker id="ar-g3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="170" y="24" width="300" height="38" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="48" fill="var(--primary)">抽象　「情報化は人の関係を変えた」</text>'
      + '<rect x="110" y="86" width="190" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="205" y="110" font-size="11.5">具体例①　SNSでの交友</text>'
      + '<rect x="340" y="86" width="190" height="38" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="435" y="110" font-size="11.5">具体例②　在宅勤務</text>'
      + '<line x1="280" y1="64" x2="225" y2="82" stroke="var(--muted)" marker-end="url(#ar-g3)"/>'
      + '<line x1="360" y1="64" x2="415" y2="82" stroke="var(--muted)" marker-end="url(#ar-g3)"/>'
      + '<text x="320" y="156" font-size="11.5" fill="var(--muted)">設問が「どういうことか」なら抽象を具体で、「なぜか」なら因果をたどる</text>'
      + '<text x="320" y="176" font-size="11.5" fill="var(--muted)">具体例は読み飛ばさず、何の例なのかだけ押さえる</text>'
      + '</g></svg>' },
],

ronri: [
  { at: 'ov', k: 'table', t: '論理の型',
    cap: '文と文がどうつながっているかを、型で見分ける。',
    head: ['型', '目印', '読み方'],
    rows: [
      ['因果', 'だから・そのため・結果として', '原因と結果を分ける'],
      ['条件', 'もし〜ならば・〜限り', '前提が成り立つ範囲を見る'],
      ['譲歩', 'たしかに〜しかし', '後半が主張'],
      ['類推', '〜のように・ちょうど〜と同じで', '何と何を重ねているか'],
      ['反復', '言いかえ・くり返し', '重要なしるし'],
      ['列挙', '第一に・第二に', '論点の数を数える'],
    ] },
],

'goi-hyouron': [
  { at: 'ov', k: 'table', t: '評論でよく出る語',
    cap: '日常の意味とずれる語を押さえると、読みが一気に軽くなる。',
    head: ['語', '評論での意味'],
    rows: [
      ['近代', '合理・個人・科学を軸にした時代。批判の対象になりやすい'],
      ['主体', '自分で考え行動する者。「主体性」はその性質'],
      ['表象', '頭に思い描かれたイメージ。実物そのものではない'],
      ['疎外', '自分が作ったものに、かえって自分が支配される'],
      ['相対化', '絶対と思われていたものを、一つの見方として見直す'],
      ['アイデンティティ', '自分が自分であるという一貫した感覚'],
      ['パラダイム', 'その時代の人々が共有する考えの枠組み'],
    ] },
],

danraku: [
  { at: 'ov', k: 'svg', t: '形式段落と意味段落',
    cap: '改行で分かれるのが形式段落、内容でまとめたのが意味段落。要約は意味段落ごとに作る。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="段落の構成の図">'
      + '<g font-size="11.5" fill="var(--text)">'
      + '<rect x="40" y="26" width="150" height="24" rx="4" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="40" y="54" width="150" height="24" rx="4" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="40" y="82" width="150" height="24" rx="4" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="40" y="110" width="150" height="24" rx="4" fill="var(--surface)" stroke="var(--border)"/>'
      + '<rect x="40" y="138" width="150" height="24" rx="4" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="20" y="42" font-size="11" fill="var(--muted)">①</text>'
      + '<text x="20" y="70" font-size="11" fill="var(--muted)">②</text>'
      + '<text x="20" y="98" font-size="11" fill="var(--muted)">③</text>'
      + '<text x="20" y="126" font-size="11" fill="var(--muted)">④</text>'
      + '<text x="20" y="154" font-size="11" fill="var(--muted)">⑤</text>'
      + '<rect x="230" y="26" width="180" height="52" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="56" text-anchor="middle" fill="var(--primary)">序論（話題）</text>'
      + '<rect x="230" y="82" width="180" height="52" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="112" text-anchor="middle">本論（根拠）</text>'
      + '<rect x="230" y="138" width="180" height="24" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="155" text-anchor="middle">結論</text>'
      + '<text x="450" y="60" font-size="11.5" fill="var(--muted)">要約の作り方</text>'
      + '<text x="450" y="84" font-size="11.5" fill="var(--muted)">① 意味段落ごとに一文</text>'
      + '<text x="450" y="106" font-size="11.5" fill="var(--muted)">② 具体例は落とす</text>'
      + '<text x="450" y="128" font-size="11.5" fill="var(--muted)">③ 主張を最後に置く</text>'
      + '</g></svg>' },
],

'shousetsu-kihon': [
  { at: 'ov', k: 'table', t: '小説を読む四つの柱',
    cap: '場面・人物・できごと・主題。この順に押さえると筋が崩れない。',
    head: ['柱', '見るところ'],
    rows: [
      ['場面', 'いつ・どこ・誰がいるか。場面の変わり目に線を引く'],
      ['人物', '立場・関係・性格。呼び方の変化にも意味がある'],
      ['できごと', '何が起きて、何が変わったか'],
      ['心情', 'できごとのたびにどう動いたか'],
      ['主題', '全体を通して何が描かれたか'],
    ] },
],

shinjou: [
  { at: 'ov', k: 'svg', t: '心情は「きっかけ」とセットで読む',
    cap: '心情そのものより、何がそれを引き起こしたかを探すほうが確実。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="心情の読み取りの図">'
      + '<defs><marker id="ar-g4" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="24" y="44" width="170" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="109" y="68">きっかけ</text>'
      + '<text x="109" y="88" font-size="11" fill="var(--muted)">できごと・相手の言葉</text>'
      + '<rect x="235" y="44" width="170" height="60" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="68" fill="var(--primary)">心情</text>'
      + '<text x="320" y="88" font-size="11" fill="var(--muted)">直接は書かれないことが多い</text>'
      + '<rect x="446" y="44" width="170" height="60" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="531" y="68">あらわれ</text>'
      + '<text x="531" y="88" font-size="11" fill="var(--muted)">表情・動作・情景描写</text>'
      + '<line x1="198" y1="74" x2="231" y2="74" stroke="var(--primary)" marker-end="url(#ar-g4)"/>'
      + '<line x1="409" y1="74" x2="442" y2="74" stroke="var(--primary)" marker-end="url(#ar-g4)"/>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">雨や夕暮れなどの情景描写は、人物の心情を映していることが多い（情景描写＝心情）</text>'
      + '</g></svg>' },
],

shiten: [
  { at: 'ov', k: 'table', t: '語りの種類',
    cap: '誰の目で語られているかで、読者が知れることの範囲が変わる。',
    head: ['語り', '人称', '知れること'],
    rows: [
      ['一人称', '「私」が語る', '「私」の内面だけ。他人の心は推測'],
      ['三人称・一元', '一人の人物に寄り添う', 'その人物の内面'],
      ['三人称・多元', '複数の人物に入る', '複数の内面'],
      ['三人称・客観', '外から見る', '行動と発言だけ'],
      ['全知', '何でも知る語り手', '過去・未来・全員の内面'],
    ] },
],

hyougen: [
  { at: 'ov', k: 'table', t: '表現技法',
    cap: '技法そのものより、「なぜそう書いたか」を答えられるようにする。',
    head: ['技法', '形', '効果'],
    rows: [
      ['直喩', '〜のような', '分かりやすく重ねる'],
      ['隠喩', '〜である（比喩の印なし）', '強く結びつける'],
      ['擬人法', '物を人のように', '親しみ・生命感'],
      ['反復', '同じ語をくり返す', '強調・リズム'],
      ['倒置', '語順を入れかえる', '語尾の語を際立たせる'],
      ['体言止め', '名詞で終える', '余韻を残す'],
      ['象徴', '具体物で抽象を示す', '直接言わずに伝える'],
    ] },
],

zuihitsu: [
  { at: 'ov', k: 'svg', t: '随筆の三層',
    cap: '体験・感想・考察。設問はたいてい「考察」の部分を問う。',
    svg: '<svg viewBox="0 0 640 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="随筆の構造の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="130" y="24" width="380" height="36" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="320" y="47">体験　いつ・どこで・何があったか</text>'
      + '<rect x="130" y="68" width="380" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="320" y="91">感想　そのときどう感じたか</text>'
      + '<rect x="130" y="112" width="380" height="36" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="320" y="135" fill="var(--primary)">考察　そこから何を考えたか（ここが主張）</text>'
      + '</g></svg>' },
],

fukusuu: [
  { at: 'ov', k: 'table', t: '複数の資料を読むときの手順',
    cap: '一つずつ読んでから、関係をつかむ。先に関係を決めつけない。',
    head: ['手順', 'すること'],
    rows: [
      ['①', '資料ごとに、何について述べているかを一言でまとめる'],
      ['②', '共通点を探す（同じ話題か）'],
      ['③', '相違点を探す（立場・時期・対象が違うか）'],
      ['④', '図表は、本文のどの部分の根拠かを確かめる'],
      ['⑤', '設問が「両方から言えること」か「一方だけ」かを見分ける'],
    ] },
],

jitsuyou: [
  { at: 'ov', k: 'table', t: '実用文の読みどころ',
    cap: '目的を先に確かめ、条件と例外を拾う。全文を読む必要はない。',
    head: ['種類', '見るところ'],
    rows: [
      ['案内・広告', '日時・場所・対象・料金・申込方法'],
      ['規約', '適用範囲・条件・例外・但し書き'],
      ['報告', '目的・方法・結果・考察の四つ'],
      ['手引き', '手順の順序、注意書き'],
      ['表・グラフ', '単位・凡例・期間。増加か減少か'],
    ] },
],

kijutsu: [
  { at: 'ov', k: 'svg', t: '記述の答案の組み立て',
    cap: '設問の文末に合わせて答える。要素を数えてから書き出す。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="記述答案の組み立ての図">'
      + '<defs><marker id="ar-g5" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="40" width="140" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="84" y="62">① 設問を読む</text>'
      + '<text x="84" y="82" font-size="11" fill="var(--muted)">何をどう答えるか</text>'
      + '<rect x="166" y="40" width="140" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="236" y="62">② 根拠を探す</text>'
      + '<text x="236" y="82" font-size="11" fill="var(--muted)">本文の言葉を使う</text>'
      + '<rect x="318" y="40" width="140" height="56" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="388" y="62">③ 要素を並べる</text>'
      + '<text x="388" y="82" font-size="11" fill="var(--muted)">字数から数を見積もる</text>'
      + '<rect x="470" y="40" width="156" height="56" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="548" y="62" fill="var(--primary)">④ 文末を合わせる</text>'
      + '<text x="548" y="82" font-size="11" fill="var(--muted)">「〜から。」「〜こと。」</text>'
      + '<line x1="158" y1="68" x2="162" y2="68" stroke="var(--muted)" marker-end="url(#ar-g5)"/>'
      + '<line x1="310" y1="68" x2="314" y2="68" stroke="var(--muted)" marker-end="url(#ar-g5)"/>'
      + '<line x1="462" y1="68" x2="466" y2="68" stroke="var(--muted)" marker-end="url(#ar-g5)"/>'
      + '<text x="320" y="136" font-size="11.5" fill="var(--muted)">目安＝30字で1要素、60字で2要素、100字で3要素</text>'
      + '<text x="320" y="162" font-size="11.5" fill="var(--muted)">指示語と比喩は、本文の言葉に直してから使う</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
