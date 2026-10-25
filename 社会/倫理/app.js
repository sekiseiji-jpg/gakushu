/* 日本史マスター - アプリ本体 */
'use strict';

/* ========== 保存データ ========== */
const KEY = APP.key;
const U = APP.unitWord;   // 「時代」「分野」など、単元の呼び名
const L = APP.listWord;   // 「年表」「統計」など、一覧タブの呼び名
const defaults = {
  read: {},        // eraId -> true（概要を読んだ）
  qstat: {},       // qid -> {o: 出題数, x: 誤答数}
  erastat: {},     // eraId -> {o, c}
  catstat: {},     // cat -> {o, c}
  savedWords: [],  // {w,y,d,era}
  savedQuiz: [],   // qid
  sessions: [],    // {d: 日付, n: 問題数, c: 正解数}
  days: {},        // 日付 -> その日に解いた問題数
  set: { furigana: false, shuffle: true, fontsize: 16, theme: 'auto', mask: false }
};
let S = load();

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    return Object.assign({}, defaults, raw, { set: Object.assign({}, defaults.set, raw.set || {}) });
  } catch (e) { return JSON.parse(JSON.stringify(defaults)); }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* 容量超過などは無視 */ }
}

/* ========== 小さな道具 ========== */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const unitById = (id) => UNITS.find((e) => e.id === id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const nl2br = (s) => esc(s).replace(/\n/g, '<br>');
const WH = (typeof APP !== 'undefined' && APP.wordsHeads) || ['重要用語', 'おもな人物'];
const KINDS = (typeof APP !== 'undefined' && APP.kinds) || { word: '用語', person: '人物', event: 'できごと' };
const KIND_HINT = KINDS.word + '・' + KINDS.person + '・' + KINDS.event;
const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];
const TYPE_LABEL = APP.typeLabels;
const CATS = APP.cats;

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 1800);
}
// 本文資料や選択肢そのものに丸数字がある問では、丸数字が操作の番号や本文の文を指している
// （社会/知見.md 8.7）。並べ替えると番号と中身が合わなくなるので、データの並びのまま出す。
function hasOwnMaru(q) { return /[①-⑳]/.test((q.src || '') + q.choices.join('')); }

// 解説の丸数字はデータの並び（choices の順）で書いてある。並べ替えて出したときは、
// 画面の番号に付け替える。「①②③はいずれも」のような続き番号は、付け替えたあと小さい順に並べる。
function renumberExp(exp, idx) {
  if (idx.every((oi, n) => oi === n)) return exp;
  return String(exp).replace(/[①-⑧]+/g, (run) => {
    const ns = [...run].map((c) => idx.indexOf(CIRCLED.indexOf(c)));
    if (ns.some((n) => n < 0)) return run;
    return ns.sort((x, y) => x - y).map((n) => CIRCLED[n]).join('');
  });
}

function shuffle(a) {
  const r = a.slice();
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}
function pct(c, o) { return o ? Math.round((c / o) * 100) : 0; }
function today() { return new Date().toISOString().slice(0, 10); }

/* ========== タブ ========== */
$$('.tab').forEach((t) => t.addEventListener('click', () => {
  $$('.tab').forEach((x) => x.classList.toggle('active', x === t));
  const name = t.dataset.tab;
  $$('.panel').forEach((p) => p.classList.toggle('active', p.id === 'tab-' + name));
  if (name === 'stats') renderStats();
  if (name === 'saved') renderSaved();
  window.scrollTo({ top: 0 });
}));

/* 読み上げ。端末に入っている音声で語を読む。ネットは使わないのでオフラインでも鳴る。
   APP.speak に言語（'en-US' など）を入れた分野にだけ、一覧に 🔊 が出る。
   立てていない分野ではボタンを作らないので、何も変わらない（cardMode と同じ考え方）。 */
const SPEAK = (typeof APP !== 'undefined' && APP.speak) || '';
const SYN = window.speechSynthesis || null;
let sayVoice;              // undefined=まだ選んでいない / null=その言語の声が無い
function sayPick() {
  if (sayVoice !== undefined) return sayVoice;
  const vs = (SYN && SYN.getVoices && SYN.getVoices()) || [];
  if (!vs.length) return null;        // 声の一覧はあとから届く端末がある。次に押したとき決まる
  const head = SPEAK.split('-')[0];
  sayVoice = vs.find((v) => v.lang.replace('_', '-') === SPEAK)
    || vs.find((v) => v.lang.replace('_', '-').split('-')[0] === head) || null;
  return sayVoice;
}
function say(text, btn) {
  if (!SPEAK || !SYN || typeof SpeechSynthesisUtterance === 'undefined') return;
  SYN.cancel();                       // 続けて押したら、前の語は打ち切る
  const u = new SpeechSynthesisUtterance(text);
  u.lang = SPEAK;
  const v = sayPick();
  if (v) u.voice = v;
  if (btn) {
    $$('.say.on').forEach((b) => b.classList.remove('on'));
    btn.classList.add('on');
    u.onend = () => btn.classList.remove('on');
    u.onerror = () => btn.classList.remove('on');
  }
  SYN.speak(u);
}
const ipaHTML = (v) => (v.p ? `<span class="tl-ipa">${esc(v.p)}</span>` : '');
const sayHTML = (w) => (SPEAK
  ? `<button class="say" type="button" data-say="${esc(w)}" aria-label="${esc(w)} を読み上げる">🔊</button>` : '');
function bindSay(root) {
  if (!SPEAK) return;
  $$('.say', root).forEach((b) => b.addEventListener('click', (e) => {
    e.stopPropagation();              // 単語帳で、押した行の意味が開いてしまわないように
    say(b.dataset.say, b);
  }));
}

/* ========== 単元一覧 ========== */
function renderEraGrid() {
  $('#era-grid').innerHTML = UNITS.map((e) => `
    <button class="era-card" style="--ec:${e.color}" data-era="${e.id}">
      ${S.read[e.id] ? '<span class="ec-badge">読了</span>' : ''}
      <div class="ec-top"><span class="ec-icon">${e.icon}</span>
        <div><div class="ec-name">${esc(e.name)}</div>
        <div class="ec-span">${esc(e.span)}</div></div></div>
      <div class="ec-catch">${esc(e.catch)}</div>
    </button>`).join('');
  $$('#era-grid .era-card').forEach((b) => b.addEventListener('click', () => openEra(b.dataset.era)));
}

/* ========== 単元詳細 ========== */
let curEra = null, curSub = 'summary';

function openEra(id, sub) {
  curEra = id;
  curSub = sub || 'summary';
  const e = unitById(id);
  $('#era-list-view').classList.add('hidden');
  $('#era-detail-view').classList.remove('hidden');
  $('#era-hero').style.setProperty('--ec', e.color);
  $('#era-hero').innerHTML = `
    <div class="eh-icon">${e.icon}</div>
    <h2>${esc(e.name)}</h2>
    <div class="eh-yomi">${esc(e.yomi)}</div>
    <div class="eh-span">${esc(e.span)}</div>
    <div class="eh-catch">${esc(e.catch)}</div>`;
  $$('#era-subtabs .subtab').forEach((b) => b.classList.toggle('active', b.dataset.sub === curSub));
  if (!S.read[id]) { S.read[id] = true; save(); }
  renderEraBody();
  window.scrollTo({ top: 0 });
}

$('#btn-era-back').addEventListener('click', () => {
  $('#era-detail-view').classList.add('hidden');
  $('#era-list-view').classList.remove('hidden');
  renderEraGrid();
  window.scrollTo({ top: 0 });
});
$('#btn-era-prev').addEventListener('click', () => stepEra(-1));
$('#btn-era-next').addEventListener('click', () => stepEra(1));
function stepEra(d) {
  const i = UNITS.findIndex((e) => e.id === curEra);
  const n = (i + d + UNITS.length) % UNITS.length;
  openEra(UNITS[n].id, curSub);
}
$$('#era-subtabs .subtab').forEach((b) => b.addEventListener('click', () => {
  curSub = b.dataset.sub;
  $$('#era-subtabs .subtab').forEach((x) => x.classList.toggle('active', x === b));
  renderEraBody();
}));

function renderEraBody() {
  const e = unitById(curEra);
  const box = $('#era-body');
  const fg = S.set.furigana;
  if (curSub === 'summary') {
    box.innerHTML = `<div class="card">${e.summary.map((p) => `<p class="para">${esc(p)}</p>`).join('')}</div>
      ${figsHTML(e, 'ov', true)}
      <div class="card"><div class="sec-title">この${U}のおもな${L === '年表' ? 'できごと' : 'ポイント'}</div>
      ${e.events.slice(0, 6).map((v) => `<div class="item"><div class="item-h">${esc(v.y)} ${esc(v.t)}</div></div>`).join('')}
      <button class="more-btn" data-goto="chrono">${L}をすべて見る →</button></div>`;
    const g = $('[data-goto]', box);
    if (g) g.addEventListener('click', () => { curSub = 'chrono'; $$('#era-subtabs .subtab').forEach((x) => x.classList.toggle('active', x.dataset.sub === 'chrono')); renderEraBody(); });
  } else if (curSub === 'detail') {
    box.innerHTML = e.sections.map((s, si) => `<div class="card">
      <div class="sec-title">${esc(s.t)}</div>
      ${s.items.map((i) => `<div class="item"><div class="item-h">${esc(i.h)}</div><p class="item-b">${esc(i.b)}</p></div>`).join('')}
      ${figsHTML(e, 'sec' + si)}
    </div>`).join('');
  } else if (curSub === 'words') {
    box.innerHTML = `<div class="card"><div class="sec-title">${WH[0]}</div><div class="kw-list">
      ${e.keywords.map((k) => kwHTML(k, e, fg)).join('')}</div></div>
      <div class="card"><div class="sec-title">${WH[1]}</div><div class="kw-list">
      ${e.people.map((p) => kwHTML({ w: p.n, y: p.y, d: p.d }, e, fg)).join('')}</div></div>`;
    bindStars(box);
  } else if (curSub === 'chrono') {
    box.innerHTML = `<div class="card"><ol class="timeline" style="--ec:${e.color}">
      ${e.events.map((v) => `<li class="tl-item"><div class="tl-y">${esc(v.y)}</div>
        <div class="tl-t">${esc(v.t)}${ipaHTML(v)}${sayHTML(v.t)}</div><div class="tl-d">${esc(v.d)}</div></li>`).join('')}
    </ol></div>`;
    bindSay(box);
  } else if (curSub === 'topic') {
    box.innerHTML = e.topics.map((t) => topicHTML(t, e)).join('');
    bindFold(box);
  } else if (curSub === 'eq') {
    const list = QUIZ.filter((q) => q.era === curEra);
    box.innerHTML = `<div class="card">
      <p>この${U}の問題は <b>${list.length}問</b> あります。共通テスト形式（${Object.values(TYPE_LABEL).join('・')}）で出題します。</p>
      <div class="row"><span class="spacer"></span><button class="btn primary" id="btn-era-quiz">▶ この${U}のクイズを解く</button></div></div>`;
    $('#btn-era-quiz').addEventListener('click', () => {
      qFilter.era = new Set([curEra]); qFilter.cat = new Set(CATS); qFilter.type = new Set(Object.keys(TYPE_LABEL));
      $$('.tab').forEach((x) => x.classList.toggle('active', x.dataset.tab === 'quiz'));
      $$('.panel').forEach((p) => p.classList.toggle('active', p.id === 'tab-quiz'));
      renderQuizSetup();
      startQuiz();
    });
  }
}

function kwHTML(k, e, fg) {
  const on = S.savedWords.some((w) => w.w === k.w);
  return `<div class="kw"><div class="kw-main">
    <span class="kw-w">${esc(k.w)}</span>${fg ? `<span class="kw-y">${esc(k.y)}</span>` : ''}
    <div class="kw-d">${esc(k.d)}</div></div>
    <button class="star ${on ? 'on' : ''}" data-w="${esc(k.w)}" data-y="${esc(k.y)}" data-d="${esc(k.d)}" data-era="${e.id}" title="保存">${on ? '★' : '☆'}</button></div>`;
}
function bindStars(root) {
  $$('.star', root).forEach((b) => b.addEventListener('click', () => {
    const w = b.dataset.w;
    const i = S.savedWords.findIndex((x) => x.w === w);
    if (i >= 0) { S.savedWords.splice(i, 1); b.classList.remove('on'); b.textContent = '☆'; toast('保存を解除しました'); }
    else { S.savedWords.push({ w, y: b.dataset.y, d: b.dataset.d, era: b.dataset.era }); b.classList.add('on'); b.textContent = '★'; toast('⭐ 保存しました'); }
    save();
  }));
}
/* ========== 図・表・写真 ========== */
/* 単元データの figs に図版を置くと、ここで描かれる。
   at  … 出す場所。'ov' は概要タブ、'sec0' 'sec1' … は詳細タブの何番目の節の下か
   k   … 種類。'table'（表）/ 'svg'（図解）/ 'photo'（写真）
   svg は自分たちで書いたものだけを入れる（色は CSS 変数を使うので配色に追随する）。*/
function figHTML(f) {
  let body = '';
  if (f.k === 'table') {
    body = `<div class="fig-scroll"><table class="fig-table">
      <thead><tr>${f.head.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${f.rows.map((r) => `<tr>${r.map((c, i) => (i === 0
        ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody>
    </table></div>`;
  } else if (f.k === 'svg' || f.k === 'map') {
    body = `<div class="fig-svg${f.k === 'map' ? ' fig-map' : ''}">${f.svg}</div>`;
  } else if (f.k === 'photo') {
    body = `<div class="fig-photo"><img src="${esc(f.src)}" alt="${esc(f.t)}" loading="lazy"></div>`;
  }
  return `<figure class="fig">
    <figcaption class="fig-t">${esc(f.t)}</figcaption>
    ${body}
    ${f.cap ? `<p class="fig-cap">${esc(f.cap)}</p>` : ''}
    ${f.credit ? `<p class="fig-credit">${esc(f.credit)}</p>` : ''}
  </figure>`;
}
function figsOf(e) {
  if (typeof FIGS !== 'undefined' && FIGS[e.id]) return FIGS[e.id];
  return e.figs || [];
}
function figsHTML(e, at, card) {
  const list = figsOf(e).filter((f) => f.at === at);
  if (!list.length) return '';
  const h = list.map(figHTML).join('');
  return card ? `<div class="card">${h}</div>` : h;
}
function topicHTML(t, e) {
  return `<div class="card topic-card" style="--ec:${e.color}">
    <span class="topic-era">${esc(e.name)}</span>
    <h3>${esc(t.t)}</h3>
    <p class="topic-lead">${esc(t.lead)}</p>
    <div class="topic-body fold">${t.body.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
    <button class="more-btn">続きを読む ▼</button></div>`;
}
function bindFold(root) {
  $$('.topic-card', root).forEach((c) => {
    const body = $('.topic-body', c), btn = $('.more-btn', c);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = body.classList.toggle('fold');
      btn.textContent = open ? '続きを読む ▼' : '閉じる ▲';
      if (open) c.scrollIntoView({ block: 'nearest' });
    });
  });
}

/* ========== 一覧（年表・統計など） ========== */
const ALL_EVENTS = UNITS.flatMap((e) => e.events.map((v) => Object.assign({}, v, { era: e.id, eraName: e.name, color: e.color })))
  .sort((a, b) => a.n - b.n);
let tlEra = 'all';

function renderTlChips() {
  const chips = [{ id: 'all', name: 'すべて' }].concat(UNITS.map((e) => ({ id: e.id, name: e.name })));
  $('#tl-chips').innerHTML = chips.map((c) => `<button class="chip ${tlEra === c.id ? 'active' : ''}" data-e="${c.id}">${esc(c.name)}</button>`).join('');
  $$('#tl-chips .chip').forEach((b) => b.addEventListener('click', () => { tlEra = b.dataset.e; renderTlChips(); renderTimeline(); }));
}
/* 単語帳（意味をかくして覚える）
   APP.cardMode を立てた分野だけ、一覧タブに「意味をかくす」が出る。
   かくした説明は、その行をおすと一つずつ出る（赤シートと同じ使い方）。
   立てていない分野では、ボタンも作られないので何も変わらない。 */
const CARD_MODE = (typeof APP !== 'undefined' && !!APP.cardMode);
function setupCardMode() {
  if (!CARD_MODE) return;
  const count = $('#tl-count');
  const b = document.createElement('button');
  b.id = 'tl-mask';
  b.className = 'chip mask-btn';
  count.parentNode.insertBefore(b, count);
  const draw = () => {
    b.textContent = S.set.mask ? '意味を出す' : '意味をかくす';
    b.classList.toggle('active', !!S.set.mask);
  };
  b.addEventListener('click', () => {
    S.set.mask = !S.set.mask;
    save(); draw(); renderTimeline();
  });
  draw();
}

function renderTimeline() {
  const q = $('#tl-search').value.trim();
  let list = ALL_EVENTS;
  if (tlEra !== 'all') list = list.filter((v) => v.era === tlEra);
  if (q) list = list.filter((v) => (v.y + v.t + v.d + v.eraName).includes(q));
  $('#tl-count').textContent = `${list.length}件`;
  const hi = (s) => (q ? esc(s).split(esc(q)).join(`<mark>${esc(q)}</mark>`) : esc(s));
  const mask = CARD_MODE && S.set.mask ? ' masked' : '';
  $('#tl-list').innerHTML = list.length ? list.map((v) => `
    <li class="tl-item" style="--ec:${v.color}">
      <div><span class="tl-y">${hi(v.y)}</span><span class="tl-era" data-era="${v.era}">${esc(v.eraName)}</span></div>
      <div class="tl-t">${hi(v.t)}${ipaHTML(v)}${sayHTML(v.t)}</div><div class="tl-d${mask}">${hi(v.d)}</div></li>`).join('')
    : `<div class="empty">該当する${L}の項目がありません</div>`;
  $$('#tl-list .tl-era').forEach((b) => b.addEventListener('click', () => gotoEra(b.dataset.era)));
  bindSay($('#tl-list'));
  if (mask) {
    $$('#tl-list .tl-d').forEach((d) => d.addEventListener('click', () => d.classList.toggle('open')));
  }
}
$('#tl-search').addEventListener('input', renderTimeline);

function gotoEra(id, sub) {
  $$('.tab').forEach((x) => x.classList.toggle('active', x.dataset.tab === 'eras'));
  $$('.panel').forEach((p) => p.classList.toggle('active', p.id === 'tab-eras'));
  openEra(id, sub);
}

/* ========== テーマ史 ========== */
function renderThemes() {
  $('#theme-list').innerHTML = THEMES.map((t) => `
    <div class="card theme-card" style="--ec:${t.color}">
      <div class="theme-h"><span class="th-icon">${t.icon}</span><h3>${esc(t.title)}</h3></div>
      <p class="theme-lead">${esc(t.lead)}</p>
      <div class="theme-steps">
        ${t.steps.map((s) => `<div class="th-step"><div class="th-era">${esc(s.era)}</div>
          <div class="th-t">${esc(s.t)}</div><div class="th-b">${esc(s.b)}</div></div>`).join('')}
      </div></div>`).join('');
}

/* ========== トピック ========== */
let topicEra = 'all';
function renderTopicChips() {
  const chips = [{ id: 'all', name: 'すべて' }].concat(UNITS.filter((e) => e.topics.length).map((e) => ({ id: e.id, name: e.name })));
  $('#topic-chips').innerHTML = chips.map((c) => `<button class="chip ${topicEra === c.id ? 'active' : ''}" data-e="${c.id}">${esc(c.name)}</button>`).join('');
  $$('#topic-chips .chip').forEach((b) => b.addEventListener('click', () => { topicEra = b.dataset.e; renderTopicChips(); renderTopics(); }));
}
function renderTopics() {
  const eras = topicEra === 'all' ? UNITS : UNITS.filter((e) => e.id === topicEra);
  const html = eras.flatMap((e) => e.topics.map((t) => topicHTML(t, e))).join('');
  $('#topic-list').innerHTML = html || '<div class="empty">トピックがありません</div>';
  bindFold($('#topic-list'));
}

/* ========== クイズ ========== */
const qFilter = { era: new Set(UNITS.map((e) => e.id)), cat: new Set(CATS), type: new Set(Object.keys(TYPE_LABEL)) };
let session = null;

function renderQuizSetup() {
  const all = qFilter.era.size === UNITS.length;
  $('#q-era-chips').innerHTML =
    `<button class="chip ${all ? 'active' : ''}" data-all="1">すべての${U}</button>` +
    UNITS.map((e) => `<button class="chip ${qFilter.era.has(e.id) && !all ? 'active' : ''}" data-e="${e.id}">${esc(e.name)}</button>`).join('');
  $('#q-cat-chips').innerHTML = CATS.map((c) => `<button class="chip ${qFilter.cat.has(c) ? 'active' : ''}" data-c="${c}">${c}</button>`).join('');
  $('#q-type-chips').innerHTML = Object.entries(TYPE_LABEL).map(([k, v]) => `<button class="chip ${qFilter.type.has(k) ? 'active' : ''}" data-t="${k}">${v}</button>`).join('');

  $$('#q-era-chips .chip').forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.all) qFilter.era = new Set(UNITS.map((e) => e.id));
    else {
      if (qFilter.era.size === UNITS.length) qFilter.era = new Set();
      qFilter.era.has(b.dataset.e) ? qFilter.era.delete(b.dataset.e) : qFilter.era.add(b.dataset.e);
      if (!qFilter.era.size) qFilter.era = new Set(UNITS.map((e) => e.id));
    }
    renderQuizSetup();
  }));
  $$('#q-cat-chips .chip').forEach((b) => b.addEventListener('click', () => {
    qFilter.cat.has(b.dataset.c) ? qFilter.cat.delete(b.dataset.c) : qFilter.cat.add(b.dataset.c);
    if (!qFilter.cat.size) qFilter.cat = new Set(CATS);
    renderQuizSetup();
  }));
  $$('#q-type-chips .chip').forEach((b) => b.addEventListener('click', () => {
    qFilter.type.has(b.dataset.t) ? qFilter.type.delete(b.dataset.t) : qFilter.type.add(b.dataset.t);
    if (!qFilter.type.size) qFilter.type = new Set(Object.keys(TYPE_LABEL));
    renderQuizSetup();
  }));
  $('#q-pool').textContent = `出題対象 ${poolQuestions().length}問`;
}
function poolQuestions() {
  return QUIZ.filter((q) => qFilter.era.has(q.era) && qFilter.cat.has(q.cat) && qFilter.type.has(q.type));
}

$('#btn-quiz-start').addEventListener('click', startQuiz);
function startQuiz() {
  let pool = poolQuestions();
  if (!pool.length) { toast('条件に合う問題がありません'); return; }
  if ($('#q-weak').checked) {
    pool = pool.slice().sort((a, b) => {
      const sa = S.qstat[a.id] || { o: 0, x: 0 }, sb = S.qstat[b.id] || { o: 0, x: 0 };
      return (sb.x - sb.o * 0.01) - (sa.x - sa.o * 0.01);
    });
  } else pool = shuffle(pool);
  const n = Number($('#q-count').value) || pool.length;
  session = { list: pool.slice(0, n), i: 0, correct: 0, log: [] };
  $('#quiz-setup').classList.add('hidden');
  $('#quiz-result').classList.add('hidden');
  $('#quiz-play').classList.remove('hidden');
  showQuestion();
}
$('#btn-quiz-quit').addEventListener('click', backToSetup);
function backToSetup() {
  session = null;
  $('#quiz-play').classList.add('hidden');
  $('#quiz-result').classList.add('hidden');
  $('#quiz-setup').classList.remove('hidden');
  renderQuizSetup();
  window.scrollTo({ top: 0 });
}

function showQuestion() {
  const q = session.list[session.i];
  const e = unitById(q.era);
  $('#q-progress').textContent = `第${session.i + 1}問 / 全${session.list.length}問　正解 ${session.correct}`;
  $('#q-bar').style.width = (session.i / session.list.length * 100) + '%';
  // 年代配列・組合せは選択肢の順序に意味があるためシャッフルしない
  const canShuffle = S.set.shuffle && (q.type === 'sel' || q.type === 'src') && !hasOwnMaru(q);
  let idx = q.choices.map((_, i) => i);
  if (canShuffle) idx = shuffle(idx);
  session.cur = { q, idx, answered: false };

  $('#q-area').innerHTML = `<div class="card">
    <div class="q-meta">
      <span class="q-tag era">${esc(e.name)}</span>
      <span class="q-tag">${TYPE_LABEL[q.type]}</span>
      <span class="q-tag">${esc(q.cat)}</span>
      <span class="q-tag">${'★'.repeat(q.lv)}</span>
    </div>
    <div class="q-text">${nl2br(q.q)}</div>
    ${q.src ? `<div class="q-src">${nl2br(q.src)}</div>` : ''}
    <div class="choices">
      ${idx.map((oi, n) => `<button class="choice" data-oi="${oi}">
        <span class="num">${CIRCLED[n]}</span><span>${esc(q.choices[oi])}</span></button>`).join('')}
    </div>
    <div id="q-feedback"></div>
  </div>`;
  $('#btn-q-next').classList.add('hidden');
  updateSaveBtn();
  $$('#q-area .choice').forEach((b) => b.addEventListener('click', () => answer(Number(b.dataset.oi))));
}

function answer(oi) {
  if (session.cur.answered) return;
  session.cur.answered = true;
  const q = session.cur.q;
  const exp = renumberExp(q.exp, session.cur.idx);
  const ok = oi === q.a;
  if (ok) session.correct++;
  session.log.push({ id: q.id, ok, exp });

  const st = S.qstat[q.id] || { o: 0, x: 0 };
  st.o++; if (!ok) st.x++;
  S.qstat[q.id] = st;
  S.days[today()] = (S.days[today()] || 0) + 1;
  const es = S.erastat[q.era] || { o: 0, c: 0 }; es.o++; if (ok) es.c++; S.erastat[q.era] = es;
  const cs = S.catstat[q.cat] || { o: 0, c: 0 }; cs.o++; if (ok) cs.c++; S.catstat[q.cat] = cs;
  save();

  $$('#q-area .choice').forEach((b) => {
    b.disabled = true;
    const v = Number(b.dataset.oi);
    if (v === q.a) b.classList.add('correct');
    else if (v === oi) b.classList.add('wrong');
  });
  const pos = session.cur.idx.indexOf(q.a) + 1;
  $('#q-feedback').innerHTML = `
    <div class="verdict ${ok ? 'ok' : 'ng'}">${ok ? '◯ 正解' : '✕ 不正解'}　正解は ${CIRCLED[pos - 1]}</div>
    <div class="exp"><div class="exp-h">解説</div>${esc(exp)}</div>`;
  $('#btn-q-next').classList.remove('hidden');
  $('#btn-q-next').textContent = session.i + 1 >= session.list.length ? '結果を見る →' : '次の問題 →';
  $('#q-bar').style.width = ((session.i + 1) / session.list.length * 100) + '%';
}

$('#btn-q-next').addEventListener('click', () => {
  session.i++;
  if (session.i >= session.list.length) finishQuiz();
  else { showQuestion(); window.scrollTo({ top: 0 }); }
});

function finishQuiz() {
  const n = session.list.length, c = session.correct, p = pct(c, n);
  S.sessions.push({ d: today(), n, c });
  if (S.sessions.length > 300) S.sessions = S.sessions.slice(-300);
  save();
  const msg = p === 100 ? '満点です。文句なし！' : p >= 80 ? '共通テスト本番でも十分戦えるレベルです。' :
    p >= 60 ? 'あと一歩。解説を読み直して穴を埋めましょう。' : '基本事項の確認から始めましょう。「詳細」を読み直すのがおすすめです。';
  // 解説は、出題したときの番号に付け替えたものを出す
  const wrong = session.log.filter((l) => !l.ok).map((l) => ({ ...QUIZ.find((q) => q.id === l.id), exp: l.exp }));

  $('#quiz-play').classList.add('hidden');
  $('#quiz-result').classList.remove('hidden');
  $('#quiz-result').innerHTML = `
    <div class="card"><div class="result-score">
      <div class="rs-num">${c} / ${n}</div>
      <div class="rs-sub">正答率 ${p}%</div>
      <div class="rs-msg">${esc(msg)}</div>
    </div></div>
    ${wrong.length ? `<div class="card"><div class="sec-title">まちがえた問題</div>
      ${wrong.map((q) => `<div class="item"><div class="item-h">${esc(unitById(q.era).name)}・${TYPE_LABEL[q.type]}</div>
        <p class="item-b">${esc(q.q.split('\n')[0])}</p>
        <div class="exp" style="margin-top:6px"><div class="exp-h">解説</div>${esc(q.exp)}</div></div>`).join('')}
      </div>` : ''}
    <div class="row"><button class="btn ghost" id="btn-res-back">← 設定へ</button><span class="spacer"></span>
      <button class="btn primary" id="btn-res-again">同じ条件でもう一度</button></div>`;
  $('#btn-res-back').addEventListener('click', backToSetup);
  $('#btn-res-again').addEventListener('click', startQuiz);
  window.scrollTo({ top: 0 });
}

$('#btn-q-save').addEventListener('click', () => {
  if (!session || !session.cur) return;
  const id = session.cur.q.id;
  const i = S.savedQuiz.indexOf(id);
  if (i >= 0) { S.savedQuiz.splice(i, 1); toast('保存を解除しました'); }
  else { S.savedQuiz.push(id); toast('⭐ 問題を保存しました'); }
  save(); updateSaveBtn();
});
function updateSaveBtn() {
  if (!session || !session.cur) return;
  const on = S.savedQuiz.includes(session.cur.q.id);
  $('#btn-q-save').textContent = on ? '★ 保存ずみ' : '⭐ この問題を保存';
}

/* ========== 記録 ========== */
function renderStats() {
  const totO = Object.values(S.qstat).reduce((a, v) => a + v.o, 0);
  const totX = Object.values(S.qstat).reduce((a, v) => a + v.x, 0);
  const totC = totO - totX;
  const readN = Object.keys(S.read).length;
  const days = Object.keys(S.days || {}).length;
  $('#stat-tiles').innerHTML = `
    <div class="tile"><div class="tv">${totO}</div><div class="tk">解いた問題</div></div>
    <div class="tile"><div class="tv">${pct(totC, totO)}%</div><div class="tk">通算正答率</div></div>
    <div class="tile"><div class="tv">${readN}/${UNITS.length}</div><div class="tk">読んだ${U}</div></div>
    <div class="tile"><div class="tv">${days}</div><div class="tk">学習した日数</div></div>`;

  $('#stat-era').innerHTML = UNITS.map((e) => {
    const s = S.erastat[e.id] || { o: 0, c: 0 };
    const p = pct(s.c, s.o);
    return `<div class="bar-row"><div class="bl">${esc(e.name)}</div>
      <div class="bar-track"><div style="width:${p}%;background:${e.color}"></div></div>
      <div class="bn">${s.o ? p + '%' : '—'}</div></div>`;
  }).join('');

  $('#stat-cat').innerHTML = CATS.map((c) => {
    const s = S.catstat[c] || { o: 0, c: 0 };
    const p = pct(s.c, s.o);
    return `<div class="bar-row"><div class="bl">${c}</div>
      <div class="bar-track"><div style="width:${p}%"></div></div>
      <div class="bn">${s.o ? p + '%' : '—'}</div></div>`;
  }).join('');

  $('#stat-read').innerHTML = UNITS.map((e) => `<span class="read-pill ${S.read[e.id] ? 'on' : ''}">${esc(e.name)}</span>`).join('');

  const weak = Object.entries(S.qstat).filter(([, v]) => v.x > 0)
    .sort((a, b) => b[1].x - a[1].x).slice(0, 10)
    .map(([id, v]) => ({ q: QUIZ.find((x) => x.id === id), v })).filter((x) => x.q);
  $('#stat-weak').innerHTML = weak.length ? weak.map((w) => `
    <li data-era="${w.q.era}"><span class="miss">${w.v.x}回ミス</span>
    <span>${esc(w.q.q.split('\n')[0].slice(0, 48))}…</span></li>`).join('')
    : '<div class="empty">まちがえた問題はまだありません</div>';
  $$('#stat-weak li').forEach((li) => li.addEventListener('click', () => gotoEra(li.dataset.era, 'detail')));
}

$('#btn-reset-stats').addEventListener('click', () => {
  if (!confirm('学習記録（正答率・読了・まちがえた問題）をすべて消去します。よろしいですか？\n※保存した用語・問題は残ります。')) return;
  S.read = {}; S.qstat = {}; S.erastat = {}; S.catstat = {}; S.sessions = []; S.days = {};
  save(); renderStats(); renderEraGrid(); toast('学習記録をリセットしました');
});

/* ========== 保存 ========== */
let savedTab = 'word';
$$('.savedtab').forEach((b) => b.addEventListener('click', () => {
  savedTab = b.dataset.sv;
  $$('.savedtab').forEach((x) => x.classList.toggle('active', x === b));
  renderSaved();
}));
function renderSaved() {
  const box = $('#saved-area');
  if (savedTab === 'word') {
    if (!S.savedWords.length) { box.innerHTML = '<div class="empty">用語の ☆ を押すとここに保存されます</div>'; return; }
    box.innerHTML = `<div class="card"><div class="kw-list">${S.savedWords.map((w) => {
      const e = unitById(w.era) || UNITS[0];
      return kwHTML(w, e, true);
    }).join('')}</div></div>`;
    bindStars(box);
    $$('.star', box).forEach((b) => b.addEventListener('click', () => setTimeout(renderSaved, 0)));
  } else {
    const list = S.savedQuiz.map((id) => QUIZ.find((q) => q.id === id)).filter(Boolean);
    if (!list.length) { box.innerHTML = '<div class="empty">クイズ中に「⭐ この問題を保存」を押すとここに入ります</div>'; return; }
    box.innerHTML = list.map((q) => `<div class="card">
      <div class="q-meta"><span class="q-tag era">${esc(unitById(q.era).name)}</span>
        <span class="q-tag">${TYPE_LABEL[q.type]}</span><span class="q-tag">${esc(q.cat)}</span></div>
      <div class="q-text">${nl2br(q.q)}</div>
      ${q.src ? `<div class="q-src">${nl2br(q.src)}</div>` : ''}
      <div class="choices">${q.choices.map((c, i) => `<div class="choice ${i === q.a ? 'correct' : ''}">
        <span class="num">${CIRCLED[i]}</span><span>${esc(c)}</span></div>`).join('')}</div>
      <div class="exp" style="margin-top:12px"><div class="exp-h">解説</div>${esc(q.exp)}</div>
      <div class="row"><span class="spacer"></span>
        <button class="btn ghost" data-del="${q.id}">保存を解除</button></div></div>`).join('');
    $$('[data-del]', box).forEach((b) => b.addEventListener('click', () => {
      S.savedQuiz = S.savedQuiz.filter((x) => x !== b.dataset.del);
      save(); renderSaved(); toast('保存を解除しました');
    }));
  }
}

/* ========== 検索 ========== */
const INDEX = [];
UNITS.forEach((e) => {
  e.keywords.forEach((k) => INDEX.push({ w: k.w, y: k.y, d: k.d, era: e, kind: KINDS.word, sub: 'words' }));
  e.people.forEach((p) => INDEX.push({ w: p.n, y: p.y, d: p.d, era: e, kind: KINDS.person, sub: 'words' }));
  e.events.forEach((v) => INDEX.push({ w: v.t, y: v.y, d: v.d, era: e, kind: KINDS.event, sub: 'chrono' }));
  e.topics.forEach((t) => INDEX.push({ w: t.t, y: '', d: t.lead, era: e, kind: 'トピック', sub: 'topic' }));
  e.sections.forEach((s) => s.items.forEach((i) => INDEX.push({ w: i.h, y: '', d: i.b, era: e, kind: '詳細', sub: 'detail' })));
});

const sdDlg = $('#search-dialog');
$('#btn-search').addEventListener('click', () => { sdDlg.showModal(); $('#sd-input').focus(); });
$('#sd-close').addEventListener('click', () => sdDlg.close());
$('#sd-input').addEventListener('input', () => {
  const q = $('#sd-input').value.trim();
  const box = $('#sd-results');
  if (!q) { box.innerHTML = `<div class="empty">${KIND_HINT}を入力してください</div>`; return; }
  const hits = INDEX.filter((x) => (x.w + x.y + x.d).includes(q)).slice(0, 40);
  box.innerHTML = hits.length ? hits.map((h, i) => `<div class="sd-item" data-i="${i}">
    <div class="sd-w">${esc(h.w)}</div>
    <div class="sd-meta">${esc(h.era.name)}・${h.kind}${h.y ? '・' + esc(h.y) : ''}</div>
    <div class="sd-d">${esc(h.d.slice(0, 80))}${h.d.length > 80 ? '…' : ''}</div></div>`).join('')
    : '<div class="empty">見つかりませんでした</div>';
  $$('.sd-item', box).forEach((el) => el.addEventListener('click', () => {
    const h = hits[Number(el.dataset.i)];
    sdDlg.close();
    gotoEra(h.era.id, h.sub);
  }));
});

/* ========== 設定 ========== */
const setDlg = $('#settings-dialog');
$('#btn-settings').addEventListener('click', () => setDlg.showModal());
function applySettings() {
  document.documentElement.style.setProperty('--fs', S.set.fontsize + 'px');
  document.documentElement.setAttribute('data-theme', S.set.theme);
  $('#set-furigana').checked = S.set.furigana;
  $('#set-shuffle').checked = S.set.shuffle;
  $('#set-fontsize').value = String(S.set.fontsize);
  $('#set-theme').value = S.set.theme;
}
$('#set-furigana').addEventListener('change', (e) => { S.set.furigana = e.target.checked; save(); if (curEra) renderEraBody(); });
$('#set-shuffle').addEventListener('change', (e) => { S.set.shuffle = e.target.checked; save(); });
$('#set-fontsize').addEventListener('change', (e) => { S.set.fontsize = Number(e.target.value); save(); applySettings(); });
$('#set-theme').addEventListener('change', (e) => { S.set.theme = e.target.value; save(); applySettings(); });

/* ========== 起動 ========== */
function applyBranding() {
  document.title = APP.title;
  $('#app-title').textContent = APP.icon + ' ' + APP.title;
  $('#tab-label-unit').textContent = U;
  $('#tab-label-list').textContent = L;
  $('#sub-label-list').textContent = L;
  $('#btn-era-back').textContent = '← ' + U + '一覧';
  $('#lead-units').textContent = APP.leadUnits;
  $('#tl-search').placeholder = APP.searchPlaceholder;
  $('#stat-label-unit').textContent = U + '別の正答率';
  $('#stat-label-read').textContent = '📖 読んだ' + U;
  $('#type-notes').innerHTML = APP.typeNotes.map((t) => '<li>' + t + '</li>').join('');
  $('#sd-input').placeholder = KIND_HINT + ' を検索';
}
applyBranding();
applySettings();
renderEraGrid();
renderTlChips();
setupCardMode();
renderTimeline();
renderThemes();
renderTopicChips();
renderTopics();
renderQuizSetup();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

/* ========== ポータルの検索から単元を直接開く ========== */
// 例: .../index.html#u=girisha      単元を開く
//     .../index.html#u=girisha&s=detail  サブタブも指定する
function openFromHash() {
  const m = /[#&]u=([^&]+)/.exec(location.hash);
  if (!m) return;
  const list = (typeof UNITS !== 'undefined') ? UNITS : UNITS;
  const id = decodeURIComponent(m[1]);
  if (!list.some((e) => e.id === id)) return;
  const sm = /[#&]s=([^&]+)/.exec(location.hash);
  gotoEra(id, sm ? decodeURIComponent(sm[1]) : 'summary');
}
window.addEventListener('hashchange', openFromHash);
openFromHash();
