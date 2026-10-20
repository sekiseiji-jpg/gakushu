/* 古典文学 ― 読むためのアプリ
   画面は3つ（作品一覧 / 作品の扉 / 巻）。URLのハッシュで行き来する。
     #w=genji            作品の扉
     #w=genji&m=5        第5帖
     #w=genji&m=5&t=genbun  原文で開く
   本文は巻ごとの別ファイルで、開いた巻だけを <script> で読み込む。
*/
(function () {
  'use strict';

  var KEY = APP.key;
  var $ = function (id) { return document.getElementById(id); };
  var el = function (tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  };
  var workById = {};
  WORKS.forEach(function (w) { workById[w.id] = w; });

  /* ---------- 保存（設定と読んだ記録） ---------- */
  var st = { size: 'm', theme: 'auto', lh: 'n', read: {}, last: null };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var o = JSON.parse(raw);
      for (var k in st) if (o[k] !== undefined) st[k] = o[k];
    }
  } catch (e) { /* 読めなくても既定値で動かす */ }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }
  function applySettings() {
    var r = document.documentElement;
    r.setAttribute('data-size', st.size);
    r.setAttribute('data-lh', st.lh);
    if (st.theme === 'auto') r.removeAttribute('data-theme');
    else r.setAttribute('data-theme', st.theme);
  }

  /* ---------- 本文の読み込み ---------- */
  var cache = {};            // 'genji/5' -> {y:[], g:[]}
  var pending = {};
  window.TEXT = function (no, data) {   // 本文ファイルが呼ぶ
    var key = window.__loadingWork + '/' + no;
    cache[key] = data;
    if (pending[key]) { pending[key].forEach(function (f) { f(data); }); delete pending[key]; }
  };
  function loadText(workId, no, cb, onErr) {
    var key = workId + '/' + no;
    if (cache[key]) { cb(cache[key]); return; }
    if (pending[key]) { pending[key].push(cb); return; }
    pending[key] = [cb];
    window.__loadingWork = workId;
    var s = document.createElement('script');
    s.src = 'text/' + workId + '/' + (no < 10 ? '0' + no : no) + '.js?v=1';
    s.onerror = function () { delete pending[key]; onErr(); };
    document.head.appendChild(s);
  }

  /* ---------- 画面1 作品一覧 ---------- */
  function renderWorks() {
    $('works-lead').textContent = APP.lead;
    var box = $('work-list');
    box.textContent = '';
    WORKS.forEach(function (w) {
      var b = el('button', 'card');
      b.style.setProperty('--wc', w.color);
      b.appendChild(el('div', 'ic', w.icon));
      b.appendChild(el('h2', null, w.title));
      b.appendChild(el('div', 'by', w.author + '　' + w.era));
      b.appendChild(el('div', 'ld', w.lead));
      var read = countRead(w);
      b.appendChild(el('div', 'meta',
        '全' + w.maki.length + '巻　' + fmt(totalChars(w)) + '字' +
        (read ? '　／　読んだ巻 ' + read : '')));
      b.onclick = function () { go('#w=' + w.id); };
      box.appendChild(b);
    });
  }
  function totalChars(w) {
    return w.maki.reduce(function (a, m) { return a + m.chars[0] + m.chars[1]; }, 0);
  }
  function countRead(w) {
    return w.maki.filter(function (m) { return st.read[w.id + '/' + m.no]; }).length;
  }
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  /* ---------- 画面2 作品の扉 ---------- */
  var curWork = null;
  function renderWork(w) {
    curWork = w;
    var h = $('work-hero');
    h.textContent = '';
    h.appendChild(el('div', 'ic', w.icon));
    h.appendChild(el('h2', null, w.title + '　' + '（' + w.yomi + '）'));
    h.appendChild(el('div', 'by', w.author + '　' + w.era));
    h.appendChild(el('div', 'ld', w.lead));

    // 巻一覧（部ごとにまとめる）
    var mk = $('work-maki');
    mk.textContent = '';
    w.parts.forEach(function (p) {
      var pb = el('div', 'partbox');
      var t = el('div');
      t.appendChild(el('b', null, p.t));
      t.appendChild(el('span', 'rg', p.range));
      pb.appendChild(t);
      pb.appendChild(el('p', null, p.b));
      mk.appendChild(pb);
      var list = el('div', 'makilist');
      w.maki.filter(function (m) { return m.part === p.n; }).forEach(function (m) {
        list.appendChild(makiRow(w, m));
      });
      mk.appendChild(list);
    });

    // この作品について
    var ab = $('work-about');
    ab.textContent = '';
    w.about.forEach(function (p) { ab.appendChild(el('p', 'about', p)); });

    // 本文の出どころ
    var sr = $('work-source');
    sr.textContent = '';
    w.sources.forEach(function (s) {
      var d = el('div', 'src');
      var t2 = el('div');
      t2.appendChild(el('b', null, s.label));
      t2.appendChild(el('span', 'who', s.by));
      d.appendChild(t2);
      d.appendChild(el('p', null, s.note));
      sr.appendChild(d);
    });
  }
  function makiRow(w, m) {
    var b = el('button', 'mk');
    b.appendChild(el('div', 'no', String(m.no)));
    var tx = el('div', 'tx');
    var nm = el('div', 'nm', m.name);
    nm.appendChild(el('span', 'ym', m.yomi));
    tx.appendChild(nm);
    tx.appendChild(el('div', 'ld', m.lead));
    b.appendChild(tx);
    if (st.read[w.id + '/' + m.no]) b.appendChild(el('div', 'rd', '読了'));
    b.onclick = function () { go('#w=' + w.id + '&m=' + m.no); };
    return b;
  }
  document.querySelectorAll('[data-wtab]').forEach(function (t) {
    t.onclick = function () {
      document.querySelectorAll('[data-wtab]').forEach(function (x) { x.classList.remove('on'); });
      t.classList.add('on');
      ['maki', 'about', 'source'].forEach(function (k) {
        $('work-' + k).classList.toggle('hidden', k !== t.dataset.wtab);
      });
    };
  });

  /* ---------- 画面3 巻 ---------- */
  var curMaki = null, curType = 'yaku';
  function renderMaki(w, m, type) {
    curWork = w; curMaki = m; curType = type;
    var h = $('maki-head');
    h.textContent = '';
    h.appendChild(el('div', 'no', w.title + '　第' + m.no + '帖'));
    var t = el('h2', null, m.name);
    h.appendChild(t);
    h.appendChild(el('div', 'ym', m.yomi));

    var s = $('maki-summary');
    s.textContent = '';
    s.appendChild(el('b', null, 'この巻のあらすじ'));
    m.summary.forEach(function (p) { s.appendChild(el('p', null, p)); });

    document.querySelectorAll('[data-text]').forEach(function (b) {
      b.classList.toggle('on', b.dataset.text === type);
      b.onclick = function () { go('#w=' + w.id + '&m=' + m.no + '&t=' + b.dataset.text); };
    });
    $('sw-note').textContent = type === 'genbun'
      ? '原文は底本の翻字です。句読点と濁点は付いていません。'
      : '与謝野晶子訳です。';

    var body = $('maki-body');
    body.className = 'body' + (type === 'genbun' ? ' genbun' : '');
    body.textContent = '';
    body.appendChild(el('div', 'loading', '本文を読み込んでいます…'));

    loadText(w.id, m.no, function (d) {
      if (curMaki !== m || curType !== type) return;    // 読み込み中に別の巻へ移ったとき
      paint(body, d, type);
      st.read[w.id + '/' + m.no] = 1;
      st.last = { w: w.id, m: m.no, t: type };
      save();
    }, function () {
      body.textContent = '';
      body.appendChild(el('div', 'err', '本文を読み込めませんでした。通信を確かめて、もう一度お試しください。'));
    });

    // 前後の巻
    var pg = $('maki-pager');
    pg.textContent = '';
    var i = w.maki.indexOf(m);
    var prev = el('button', null, i > 0 ? '◀ 第' + w.maki[i - 1].no + '帖　' + w.maki[i - 1].name : '◀ 前の巻');
    prev.disabled = i <= 0;
    prev.onclick = function () { go('#w=' + w.id + '&m=' + w.maki[i - 1].no + '&t=' + type); };
    var next = el('button', null, i < w.maki.length - 1 ? '第' + w.maki[i + 1].no + '帖　' + w.maki[i + 1].name + ' ▶' : '次の巻 ▶');
    next.disabled = i >= w.maki.length - 1;
    next.onclick = function () { go('#w=' + w.id + '&m=' + w.maki[i + 1].no + '&t=' + type); };
    pg.appendChild(prev); pg.appendChild(next);
  }
  function paint(body, d, type) {
    body.textContent = '';
    var frag = document.createDocumentFragment();
    if (type === 'genbun') {
      d.g.forEach(function (line) {
        var waka = line.charAt(0) === 'w';
        frag.appendChild(el('p', waka ? 'waka' : null, line.slice(1)));
      });
    } else {
      d.y.forEach(function (p) { frag.appendChild(el('p', null, p)); });
    }
    body.appendChild(frag);
  }

  /* ---------- 画面の切り替え ---------- */
  function show(v) {
    ['works', 'work', 'maki'].forEach(function (k) {
      $('view-' + k).classList.toggle('hidden', k !== v);
    });
  }
  function go(hash) {
    if (location.hash === hash) route();
    else location.hash = hash;
  }
  function parse() {
    var o = {};
    location.hash.replace(/^#/, '').split('&').forEach(function (kv) {
      var i = kv.indexOf('=');
      if (i > 0) o[kv.slice(0, i)] = decodeURIComponent(kv.slice(i + 1));
    });
    return o;
  }
  function route() {
    var q = parse();
    // ポータル検索からは #u=<作品id>-<巻番号> の形で来る
    if (q.u && !q.w) {
      var mm = /^(.+)-(\d+)$/.exec(q.u);
      if (mm && workById[mm[1]]) { q.w = mm[1]; q.m = mm[2]; }
    }
    var w = q.w && workById[q.w];
    if (w && q.m) {
      var m = w.maki.filter(function (x) { return String(x.no) === String(q.m); })[0];
      if (m) {
        renderMaki(w, m, q.t === 'genbun' ? 'genbun' : 'yaku');
        show('maki');
        $('bar-title').textContent = w.title + '　' + m.name;
        window.scrollTo(0, 0);
        return;
      }
    }
    if (w) {
      renderWork(w);
      show('work');
      $('bar-title').textContent = w.title;
      window.scrollTo(0, 0);
      return;
    }
    renderWorks();
    show('works');
    $('bar-title').textContent = APP.title;
  }
  window.addEventListener('hashchange', route);

  $('btn-back').onclick = function () {
    var q = parse();
    if (q.m) location.hash = '#w=' + q.w;
    else if (q.w) location.hash = '';
    else location.href = '../';
  };

  /* ---------- 設定 ---------- */
  $('btn-set').onclick = function () {
    $('set-size').value = st.size;
    $('set-theme').value = st.theme;
    $('set-lh').value = st.lh;
    var n = 0;
    for (var k in st.read) n++;
    $('cache-hint').textContent =
      '読んだ巻は ' + n + '。一度開いた巻の本文は端末に残るので、次からは通信がなくても読めます。';
    $('setwrap').classList.remove('hidden');
  };
  $('btn-close').onclick = function () { $('setwrap').classList.add('hidden'); };
  $('setwrap').onclick = function (e) { if (e.target === $('setwrap')) $('setwrap').classList.add('hidden'); };
  $('set-size').onchange = function () { st.size = this.value; applySettings(); save(); };
  $('set-theme').onchange = function () { st.theme = this.value; applySettings(); save(); };
  $('set-lh').onchange = function () { st.lh = this.value; applySettings(); save(); };
  $('btn-clear').onclick = function () {
    if (!confirm('読んだ巻の記録を消します。よろしいですか。')) return;
    st.read = {}; st.last = null; save(); route();
  };

  /* ---------- 起動 ---------- */
  applySettings();
  route();
  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    navigator.serviceWorker.register('sw.js').catch(function () {});
  }
})();
