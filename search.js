/* ポータルの検索
   search-index.js を読みこんだうえで使う。
   ページ側に #ps-input と #ps-results を置き、body の data-subject で範囲を絞る。
   （data-subject が空なら全教科、"社会" ならその教科だけを対象にする）
*/
(function () {
  'use strict';
  const input = document.getElementById('ps-input');
  const box = document.getElementById('ps-results');
  if (!input || !box || typeof SEARCH_UNITS === 'undefined') return;

  const scope = document.body.dataset.subject || '';
  const base = document.body.dataset.base || '';   // 教科ページからは '../' を渡す
  const units = scope ? SEARCH_UNITS.filter((u) => u.s === scope) : SEARCH_UNITS;
  const fields = scope ? SEARCH_FIELDS.filter((f) => f.s === scope) : SEARCH_FIELDS;
  const MAX = 40;

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mark = (s, q) => (q ? esc(s).split(esc(q)).join('<mark>' + esc(q) + '</mark>') : esc(s));

  function search(q) {
    const hitFields = fields.filter((f) => (f.f + f.t).includes(q));
    const hits = [];
    for (const u of units) {
      // 単元名・よみ・サブタイトル・キャッチのどれかに当たれば単元として拾う
      if ((u.n + u.y + u.p + u.c).includes(q)) { hits.push({ u, kind: 'unit', word: '' }); continue; }
      // 用語名に当たれば、その用語を手がかりとして示す
      const w = u.w.find((x) => x.includes(q));
      if (w) hits.push({ u, kind: 'word', word: w });
    }
    return { hitFields, hits };
  }

  function render() {
    const q = input.value.trim();
    if (!q) {
      box.innerHTML = '<p class="ps-hint">単元名・用語・人物などを入力してください。'
        + '<br>対象は' + (scope ? esc(scope) : 'すべての教科') + 'の全' + units.length + '単元です。</p>';
      return;
    }
    const { hitFields, hits } = search(q);
    if (!hitFields.length && !hits.length) {
      box.innerHTML = '<p class="ps-hint">「' + esc(q) + '」に当たるものは見つかりませんでした。</p>';
      return;
    }
    let html = '';
    if (hitFields.length) {
      html += '<div class="ps-group"><div class="ps-gh">分野</div>'
        + hitFields.map((f) => '<a class="ps-item" href="' + base + f.u + '">'
          + '<span class="ps-ic">' + f.i + '</span>'
          + '<span class="ps-main"><span class="ps-t">' + mark(f.t, q) + '</span>'
          + '<span class="ps-sub">' + esc(f.s) + ' ／ 全' + f.n + '単元</span></span></a>').join('')
        + '</div>';
    }
    const shown = hits.slice(0, MAX);
    if (shown.length) {
      html += '<div class="ps-group"><div class="ps-gh">単元'
        + (hits.length > MAX ? '（' + hits.length + '件中' + MAX + '件を表示）' : '（' + hits.length + '件）')
        + '</div>'
        + shown.map((h) => '<a class="ps-item" href="' + base + h.u.u + '#u=' + encodeURIComponent(h.u.id) + '">'
          + '<span class="ps-ic">' + (h.u.i || '📘') + '</span>'
          + '<span class="ps-main"><span class="ps-t">' + mark(h.u.n, q) + '</span>'
          + '<span class="ps-sub">' + esc(h.u.s) + ' ／ ' + esc(h.u.f)
          + (h.kind === 'word' ? ' ／ 用語 ' + mark(h.word, q) : '') + '</span>'
          + '<span class="ps-c">' + mark(h.u.c || h.u.p, q) + '</span></span></a>').join('')
        + '</div>';
    }
    box.innerHTML = html;
  }

  input.addEventListener('input', render);
  render();
  // ページを開いた直後に入力できるようにする（スマホでは自動で開かない）
  if (!('ontouchstart' in window)) input.focus();
}());
