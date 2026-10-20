/* 古文 ― 単元の説明に添える図・表 */
const FIGS = {

doushi: [
  { at: 'ov', k: 'table', t: '動詞の活用の種類',
    cap: '「ず」を付けて、直前の音が何段かで見分ける。変格活用は数が少ないので覚えてしまう。',
    head: ['種類', '見分け方', '例', '活用形'],
    rows: [
      ['四段', '「ず」の直前がア段', '書かず', 'か・き・く・く・け・け'],
      ['上二段', '「ず」の直前がイ段', '起きず', 'き・き・く・くる・くれ・きよ'],
      ['下二段', '「ず」の直前がエ段', '捨てず', 'て・て・つ・つる・つれ・てよ'],
      ['上一段', 'きみにいゐひ（着る・見るなど）', '見ず', 'み・み・みる・みる・みれ・みよ'],
      ['下一段', '蹴るのみ', '蹴ず', 'け・け・ける・ける・けれ・けよ'],
      ['カ変', '来のみ', '来ず', 'こ・き・く・くる・くれ・こ（こよ）'],
      ['サ変', 'す・おはす', 'せず', 'せ・し・す・する・すれ・せよ'],
      ['ナ変', '死ぬ・往ぬ', '死なず', 'な・に・ぬ・ぬる・ぬれ・ね'],
      ['ラ変', 'あり・をり・はべり・いまそかり', 'あらず', 'ら・り・り・る・れ・れ'],
    ] },
],

keiyoushi: [
  { at: 'ov', k: 'table', t: '形容詞・形容動詞の活用',
    cap: '本活用と補助活用（カリ活用など）の二本立てになっているのが特徴。',
    head: ['品詞', '種類', '見分け方', '例'],
    rows: [
      ['形容詞', 'ク活用', '「〜なる」と言える', '高し'],
      ['形容詞', 'シク活用', '「〜しき」になる', '美し'],
      ['形容動詞', 'ナリ活用', '「〜なり」', '静かなり'],
      ['形容動詞', 'タリ活用', '「〜たり」。漢語につく', '堂々たり'],
    ] },
],

'jodoushi-kako': [
  { at: 'ov', k: 'table', t: '過去・完了の助動詞',
    cap: '接続（何形につくか）と意味をセットで覚える。「り」はサ変未然・四段已然だけ。',
    head: ['助動詞', '接続', 'おもな意味'],
    rows: [
      ['き', '連用形', '過去（自分が直接体験した）'],
      ['けり', '連用形', '過去（伝聞）／詠嘆（〜だなあ）'],
      ['つ', '連用形', '完了／強意（きっと〜）'],
      ['ぬ', '連用形', '完了／強意'],
      ['たり', '連用形', '完了／存続（〜ている）'],
      ['り', 'サ変未然・四段已然', '完了／存続'],
    ] },
],

'jodoushi-suiryou': [
  { at: 'ov', k: 'svg', t: '「む」の意味の見分け方',
    cap: '主語が誰かで、意志・勧誘・推量のどれかが決まる。',
    svg: '<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="助動詞「む」の意味の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="36" width="190" height="80" rx="9" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="109" y="60" font-size="12.5" fill="var(--primary)">主語が一人称</text>'
      + '<text x="109" y="84" font-size="11.5" fill="var(--muted)">意志　「〜しよう」</text>'
      + '<rect x="224" y="36" width="190" height="80" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="319" y="60" font-size="12.5">主語が二人称</text>'
      + '<text x="319" y="84" font-size="11.5" fill="var(--muted)">勧誘・適当　「〜するのがよい」</text>'
      + '<rect x="434" y="36" width="192" height="80" rx="9" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="530" y="60" font-size="12.5">主語が三人称</text>'
      + '<text x="530" y="84" font-size="11.5" fill="var(--muted)">推量　「〜だろう」</text>'
      + '<text x="320" y="152" font-size="11.5" fill="var(--muted)">文中にあって体言が続くときは、婉曲「〜ような」や仮定「〜としたら」</text>'
      + '</g></svg>' },
  { at: 'sec0', k: 'table', t: '推量系の助動詞',
    cap: '「らむ」は今、「けむ」は過去、「べし」は強い推量。時間の軸で整理する。',
    head: ['助動詞', '接続', '意味'],
    rows: [
      ['む・むず', '未然形', '推量・意志・勧誘・婉曲・仮定'],
      ['べし', '終止形（ラ変は連体）', '推量・意志・可能・当然・命令・適当'],
      ['らむ', '終止形（ラ変は連体）', '現在推量（今ごろ〜だろう）'],
      ['けむ', '連用形', '過去推量（〜だっただろう）'],
      ['らし', '終止形（ラ変は連体）', '根拠のある推定'],
      ['めり', '終止形（ラ変は連体）', '視覚による推定（〜のように見える）'],
      ['なり', '終止形（ラ変は連体）', '聴覚による推定（〜のように聞こえる）'],
      ['まし', '未然形', '反実仮想（〜だったら〜だろうに）'],
    ] },
],

'jodoushi-ukemi': [
  { at: 'ov', k: 'table', t: '受身・使役・打消の助動詞',
    cap: '「る・らる」の四つの意味は、下に打消があれば可能、尊敬の人物なら尊敬と見当をつける。',
    head: ['助動詞', '接続', '意味'],
    rows: [
      ['る・らる', '未然形', '受身・可能・自発・尊敬'],
      ['す・さす・しむ', '未然形', '使役・尊敬'],
      ['ず', '未然形', '打消'],
      ['じ', '未然形', '打消推量・打消意志'],
      ['まじ', '終止形（ラ変は連体）', '打消推量・打消意志・不可能・禁止'],
      ['なり', '体言・連体形', '断定'],
      ['たり', '体言', '断定'],
    ] },
],

joshi: [
  { at: 'ov', k: 'table', t: '助詞の種類',
    cap: '何につき、何をするかで四つに分かれる。接続助詞は前後の関係を示す。',
    head: ['種類', 'はたらき', '例'],
    rows: [
      ['格助詞', '体言につき、文中の関係を示す', 'が・の・を・に・へ・と・より・から・にて・して'],
      ['接続助詞', '前後の文をつなぐ', 'ば・とも・ど・ども・が・に・を・て・つつ・ながら'],
      ['副助詞', '意味を添える', 'だに・すら・さへ・のみ・ばかり・など・まで・し'],
      ['終助詞', '文末で気持ちを表す', 'な・そ・ばや・なむ・がな・か・かな・は・よ'],
      ['係助詞', '結びに影響する', 'ぞ・なむ・や・か・こそ・は・も'],
    ] },
  { at: 'sec1', k: 'svg', t: '「ば」の意味は接続で決まる',
    cap: '未然形＋ば は仮定、已然形＋ば は確定。ここを間違えると訳が逆になる。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="助詞「ば」の図">'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="40" y="34" width="250" height="84" rx="10" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="165" y="58" font-size="12.5" fill="var(--primary)">未然形 ＋ ば</text>'
      + '<text x="165" y="82" font-size="11.5" fill="var(--muted)">仮定条件　「もし〜ならば」</text>'
      + '<text x="165" y="104" font-size="11.5" fill="var(--muted)">例：行かば＝もし行くならば</text>'
      + '<rect x="350" y="34" width="250" height="84" rx="10" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="475" y="58" font-size="12.5">已然形 ＋ ば</text>'
      + '<text x="475" y="82" font-size="11.5" fill="var(--muted)">確定条件　「〜ので」「〜ところ」</text>'
      + '<text x="475" y="104" font-size="11.5" fill="var(--muted)">例：行けば＝行ったところ</text>'
      + '<text x="320" y="148" font-size="11.5" fill="var(--muted)">現代語とは逆なので、とくに注意する</text>'
      + '</g></svg>' },
],

kakari: [
  { at: 'ov', k: 'svg', t: '係り結びの法則',
    cap: '文中に係助詞があると、文末の活用形が変わる。訳にも影響する。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="係り結びの図">'
      + '<defs><marker id="ar-k1" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)">'
      + '<rect x="60" y="40" width="200" height="36" rx="7" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="160" y="63" text-anchor="middle" fill="var(--primary)">ぞ・なむ・や・か</text>'
      + '<rect x="400" y="40" width="180" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="490" y="63" text-anchor="middle">結びは連体形</text>'
      + '<path d="M264,58 Q330,24 396,58" fill="none" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-k1)"/>'
      + '<rect x="60" y="104" width="200" height="36" rx="7" fill="var(--surface2)" stroke="var(--border)"/>'
      + '<text x="160" y="127" text-anchor="middle">こそ</text>'
      + '<rect x="400" y="104" width="180" height="36" rx="7" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="490" y="127" text-anchor="middle">結びは已然形</text>'
      + '<path d="M264,122 Q330,88 396,122" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#ar-k1)"/>'
      + '<text x="320" y="170" text-anchor="middle" font-size="11.5" fill="var(--muted)">ぞ・なむ・こそ＝強意　／　や・か＝疑問・反語</text>'
      + '</g></svg>' },
],

keigo: [
  { at: 'ov', k: 'table', t: '敬語の三分類',
    cap: '誰を敬っているかが分かれば、主語も分かる。古文の読解では主語の判定に使う。',
    head: ['種類', '敬う相手', '代表的な語'],
    rows: [
      ['尊敬語', '動作をする人', 'おはす・のたまふ・給ふ（四段）・思す・仰す'],
      ['謙譲語', '動作を受ける人', '申す・聞こゆ・奉る・参る・給ふ（下二段）'],
      ['丁寧語', '聞き手・読み手', 'はべり・さぶらふ'],
      ['最高敬語', '天皇・中宮など', 'せ給ふ・させ給ふ・おはします'],
    ] },
  { at: 'sec0', k: 'svg', t: '敬意の方向',
    cap: '地の文なら作者から、会話文なら話し手から。誰への敬意かは語の種類で決まる。',
    svg: '<svg viewBox="0 0 640 165" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="敬意の方向の図">'
      + '<defs><marker id="ar-k2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--primary)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="30" y="54" width="150" height="48" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="105" y="76">誰からの敬意か</text>'
      + '<text x="105" y="94" font-size="11" fill="var(--muted)">地の文＝作者／会話＝話し手</text>'
      + '<rect x="420" y="54" width="190" height="48" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="515" y="76" fill="var(--primary)">誰への敬意か</text>'
      + '<text x="515" y="94" font-size="11" fill="var(--muted)">尊敬＝動作主／謙譲＝受け手</text>'
      + '<line x1="186" y1="78" x2="414" y2="78" stroke="var(--primary)" stroke-width="2" marker-end="url(#ar-k2)"/>'
      + '<text x="300" y="68" font-size="11" fill="var(--muted)">敬語</text>'
      + '<text x="320" y="142" font-size="11.5" fill="var(--muted)">尊敬語が使われていれば、その動作の主語は身分の高い人だと分かる</text>'
      + '</g></svg>' },
],

shikibetsu: [
  { at: 'ov', k: 'table', t: '紛らわしい語の識別',
    cap: '前後の接続で機械的に決まる。覚えるより手順として使う。',
    head: ['語', '見分け方'],
    rows: [
      ['なむ', '未然形＋なむ＝願望／連用形＋なむ＝強意＋推量／係助詞／ナ変未然＋む'],
      ['に', '体言＋に＝格助詞／連用形＋に＝完了「ぬ」／形容動詞の活用語尾／断定「なり」'],
      ['る', '四段已然＋る＝完了「り」／未然形＋る＝受身「る」／動詞の一部'],
      ['ぬ', '終止形の位置＝完了／連体形の位置＝打消「ず」'],
      ['なり', '体言・連体形＋なり＝断定／終止形＋なり＝伝聞推定'],
      ['し', '過去「き」の連体形／副助詞／形容詞の一部／サ変連用形'],
    ] },
],

kogo: [
  { at: 'ov', k: 'table', t: '現代語とずれる古語',
    cap: '知っている形の語ほど要注意。現代の意味で読むと逆になることがある。',
    head: ['古語', '古文での意味'],
    rows: [
      ['あはれなり', 'しみじみと趣がある'],
      ['をかし', '趣がある・興味深い・こっけいだ'],
      ['いみじ', '程度がはなはだしい（よいほうにも悪いほうにも）'],
      ['うつくし', 'かわいらしい'],
      ['ありがたし', 'めったにない'],
      ['やさし', 'きまりが悪い・優美だ'],
      ['はづかし', 'こちらが恥ずかしくなるほど立派だ'],
      ['つとめて', '早朝・翌朝'],
      ['おどろく', '目を覚ます・はっと気づく'],
      ['かなし', 'いとしい'],
    ] },
],

joushiki: [
  { at: 'ov', k: 'table', t: '古文常識',
    cap: '背景を知らないと、場面が読めない。最低限ここを押さえる。',
    head: ['分野', '知っておくこと'],
    rows: [
      ['住まい', '寝殿造。御簾・几帳・母屋と廂。垣間見'],
      ['官職', '摂政・関白・大臣・大納言・中納言・受領'],
      ['結婚', '通い婚。三日夜の餅。男が女のもとへ通う'],
      ['年中行事', '正月の若菜、三月の節供、七夕、賀茂祭'],
      ['信仰', '物忌・方違え・物の怪・出家・来世'],
      ['時刻と方位', '十二支で表す。子の刻＝午前0時ごろ'],
    ] },
],

waka: [
  { at: 'ov', k: 'table', t: '和歌の修辞',
    cap: '何を飾り、何を隠しているかを見抜く。掛詞は音が同じ二語の重ね合わせ。',
    head: ['技法', '中身', '例'],
    rows: [
      ['枕詞', '特定の語を導く五音の決まり文句', 'あしひきの→山、ちはやぶる→神'],
      ['序詞', '自由に作る導入部（七音以上）', '—'],
      ['掛詞', '同じ音に二つの意味を重ねる', 'まつ（松・待つ）、あき（秋・飽き）'],
      ['縁語', '関係の深い語をちりばめる', '糸・はる・乱る'],
      ['本歌取り', '有名な古歌を下敷きにする', '—'],
      ['体言止め', '名詞で終えて余韻を残す', '—'],
      ['句切れ', '意味が切れる場所。初句・二句・三句…', '—'],
    ] },
],

monogatari: [
  { at: 'ov', k: 'table', t: '物語と日記の系譜',
    cap: 'ジャンルと成立の順序を押さえると、文学史の問題に対応できる。',
    head: ['ジャンル', '作品', '成立'],
    rows: [
      ['作り物語', '竹取物語', '平安前期'],
      ['歌物語', '伊勢物語・大和物語', '平安前期'],
      ['長編物語', '源氏物語（紫式部）', '平安中期'],
      ['歴史物語', '栄花物語・大鏡', '平安後期'],
      ['軍記物語', '平家物語・太平記', '鎌倉〜南北朝'],
      ['日記', '土佐日記（紀貫之）・蜻蛉日記・和泉式部日記・紫式部日記・更級日記', '平安'],
    ] },
],

setsuwa: [
  { at: 'ov', k: 'table', t: '説話と随筆',
    cap: '説話は教訓や興味を伝える短い話。随筆は書き手の見方が前に出る。',
    head: ['作品', '種類', '特徴'],
    rows: [
      ['今昔物語集', '説話', '天竺・震旦・本朝の三部。「今は昔」で始まる'],
      ['宇治拾遺物語', '説話', '庶民的で笑いのある話が多い'],
      ['発心集・沙石集', '説話', '仏教の教え'],
      ['枕草子', '随筆', '「をかし」の文学。類聚・日記・随想'],
      ['方丈記', '随筆', '無常観。「ゆく河の流れは絶えずして」'],
      ['徒然草', '随筆', '兼好の観察と批評。「つれづれなるままに」'],
    ] },
],

bungakushi: [
  { at: 'ov', k: 'svg', t: '読解の手順',
    cap: '主語の判定が古文読解のかなめ。敬語と助詞が手がかりになる。',
    svg: '<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="古文読解の手順の図">'
      + '<defs><marker id="ar-k3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">'
      + '<path d="M0,0 L7,3 L0,6 z" fill="var(--muted)"/></marker></defs>'
      + '<g font-size="12" fill="var(--text)" text-anchor="middle">'
      + '<rect x="14" y="36" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="87" y="60">① 人物を拾う</text>'
      + '<text x="87" y="80" font-size="11" fill="var(--muted)">登場人物に印をつける</text>'
      + '<rect x="172" y="36" width="146" height="62" rx="8" fill="var(--primary-soft)" stroke="var(--primary)"/>'
      + '<text x="245" y="60" fill="var(--primary)">② 主語を決める</text>'
      + '<text x="245" y="80" font-size="11" fill="var(--muted)">敬語と「を・に・が・ば」</text>'
      + '<rect x="330" y="36" width="146" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="403" y="60">③ 文を切る</text>'
      + '<text x="403" y="80" font-size="11" fill="var(--muted)">句点のない文を区切る</text>'
      + '<rect x="488" y="36" width="138" height="62" rx="8" fill="var(--surface)" stroke="var(--border)"/>'
      + '<text x="557" y="60">④ 訳す</text>'
      + '<text x="557" y="80" font-size="11" fill="var(--muted)">助動詞の意味を決める</text>'
      + '<line x1="162" y1="67" x2="168" y2="67" stroke="var(--muted)" marker-end="url(#ar-k3)"/>'
      + '<line x1="320" y1="67" x2="326" y2="67" stroke="var(--muted)" marker-end="url(#ar-k3)"/>'
      + '<line x1="478" y1="67" x2="484" y2="67" stroke="var(--muted)" marker-end="url(#ar-k3)"/>'
      + '<text x="320" y="140" font-size="11.5" fill="var(--muted)">「を・に・が・ば・ど・ども」のあとは主語が変わりやすい</text>'
      + '<text x="320" y="164" font-size="11.5" fill="var(--muted)">「て・で・つつ」のあとは主語が変わりにくい</text>'
      + '</g></svg>' },
],

};

if (typeof module !== 'undefined') { module.exports = { FIGS }; }
