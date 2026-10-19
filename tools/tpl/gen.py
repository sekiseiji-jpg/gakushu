# -*- coding: utf-8 -*-
"""日本史アプリの index.html / style.css / app.js を雛形に、
   他教科のアプリ一式（UI部分）を生成する。"""
import os, sys, re, json

SP = os.path.dirname(os.path.abspath(__file__))
ROOT = os.environ.get('GEN_ROOT', '/Users/seki/Desktop/アプリ開発/seki/TOOL/学習アプリ/理科')

def read(p): return open(p, encoding='utf-8').read()
def write(p, s):
    open(p, 'w', encoding='utf-8').write(s)
    print('  ->', os.path.relpath(p, ROOT))

# ---------- app.js（全教科で共通。ラベルは APP から読む） ----------
def build_app():
    s = read(os.path.join(SP, 'app.base.js'))
    s = s.replace('ERAS', 'UNITS').replace('eraById', 'unitById')
    s = s.replace("const KEY = 'nihonshi.v1';", "const KEY = APP.key;\nconst U = APP.unitWord;   // 「時代」「分野」など、単元の呼び名\nconst L = APP.listWord;   // 「年表」「統計」など、一覧タブの呼び名")
    s = s.replace("const TYPE_LABEL = { sel: '正誤判定', cmb: '組合せ', ord: '年代配列', src: '史料' };",
                  "const TYPE_LABEL = APP.typeLabels;")
    s = s.replace("const CATS = ['政治', '外交', '社会経済', '文化'];", "const CATS = APP.cats;")
    reps = [
        ('/* ========== 時代一覧 ========== */', '/* ========== 単元一覧 ========== */'),
        ('/* ========== 時代詳細 ========== */', '/* ========== 単元詳細 ========== */'),
        ('/* ========== 年表 ========== */', '/* ========== 一覧（年表・統計など） ========== */'),
        ('この時代のおもなできごと', 'この${U}のおもな${L === \'年表\' ? \'できごと\' : \'ポイント\'}'),
        ('年表をすべて見る →', '${L}をすべて見る →'),
        ('<p>この時代の問題は', '<p>この${U}の問題は'),
        ('共通テスト形式（正誤判定・組合せ・年代配列・史料）で出題します。',
         '共通テスト形式（${Object.values(TYPE_LABEL).join(\'・\')}）で出題します。'),
        ('▶ この時代のクイズを解く', '▶ この${U}のクイズを解く'),
        ("'<div class=\"empty\">該当する年表項目がありません</div>'", "`<div class=\"empty\">該当する${L}の項目がありません</div>`"),
        ('data-all="1">すべての時代<', 'data-all="1">すべての${U}<'),
        ('<div class="tk">読んだ時代</div>', '<div class="tk">読んだ${U}</div>'),
        ('「詳細」を読み直すのがおすすめです。', '「詳細」を読み直すのがおすすめです。'),
    ]
    for a, b in reps:
        assert a in s, 'app.js: 置換対象が見つからない -> ' + a[:40]
        s = s.replace(a, b)
    # 起動時に APP の内容を画面に反映する処理を足す
    s = s.replace("/* ========== 起動 ========== */\napplySettings();",
                  """/* ========== 起動 ========== */
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
applySettings();""")
    return s

# ---------- index.html ----------
def build_index(c):
    s = read(os.path.join(SP, 'index.base.html'))
    reps = [
        ('<meta name="theme-color" content="#9b2d20">', '<meta name="theme-color" content="%s">' % c['color']),
        ('<meta name="description" content="高校日本史を時代の概要・詳細・トピック・年表・共通テスト形式のクイズで学べるアプリ">',
         '<meta name="description" content="%s">' % c['desc']),
        ('<meta name="apple-mobile-web-app-title" content="日本史マスター">',
         '<meta name="apple-mobile-web-app-title" content="%s">' % c['short']),
        ('<title>日本史マスター</title>', '<title>%s</title>' % c['title']),
        ('<h1>⛩️ 日本史マスター</h1>', '<h1 id="app-title">%s %s</h1>' % (c['icon'], c['title'])),
        ('<span class="tl">時代</span>', '<span class="tl" id="tab-label-unit">%s</span>' % c['unit']),
        ('<span class="tl">年表</span>', '<span class="tl" id="tab-label-list">%s</span>' % c['list']),
        ('<p class="lead">時代を選ぶと、概要・詳細・重要用語・人物・年表・トピックが読めます。</p>',
         '<p class="lead" id="lead-units">%s</p>' % c['leadUnits']),
        ('<button id="btn-era-back" class="btn ghost">← 時代一覧</button>',
         '<button id="btn-era-back" class="btn ghost">← %s一覧</button>' % c['unit']),
        ('<button class="subtab" data-sub="chrono">年表</button>',
         '<button class="subtab" data-sub="chrono"><span id="sub-label-list">%s</span></button>' % c['list']),
        ('<input id="tl-search" type="text" placeholder="🔍 年表を検索（例：改革、条約、一揆）">',
         '<input id="tl-search" type="text" placeholder="%s">' % c['searchPlaceholder']),
        ('<strong>時代別の正答率</strong>', '<strong id="stat-label-unit">%s別の正答率</strong>' % c['unit']),
        ('<strong>📖 読んだ時代</strong>', '<strong id="stat-label-read">📖 読んだ%s</strong>' % c['unit']),
        ('<button class="subtab" data-sub="words">用語・人物</button>',
         '<button class="subtab" data-sub="words">%s</button>' % c['wordsTab']),
        ('<button class="tab" data-tab="timeline"><span class="ti">🗓️</span>',
         '<button class="tab" data-tab="timeline"><span class="ti">%s</span>' % c.get('listIcon', '🗓️')),
        ('<span class="tl">テーマ史</span>', '<span class="tl">%s</span>' % c.get('themeWord', 'テーマ史')),
        ('title="前の時代"', 'title="前の%s"' % c['unit']),
        ('title="次の時代"', 'title="次の%s"' % c['unit']),
        ('placeholder="用語・人物・できごとを検索"',
         'placeholder="%s を検索"' % '・'.join([c['kinds']['word'], c['kinds']['person'], c['kinds']['event']]) if c.get('kinds') else 'placeholder="用語・人物・できごとを検索"'),
        ('<script src="data-eras.js?v=2"></script>', '<script src="data-units.js?v=1"></script>'),
        ('<script src="data-quiz.js?v=2"></script>', '<script src="data-quiz.js?v=1"></script>'),
        ('<script src="data-themes.js?v=2"></script>', '<script src="data-themes.js?v=1"></script>'),
        ('<script src="app.js?v=2"></script>', '<script src="app.js?v=1"></script>'),
        ('<link rel="stylesheet" href="style.css?v=2">', '<link rel="stylesheet" href="style.css?v=1">'),
        ('<p class="lead">時代をまたいで一本の流れとして眺めると、因果関係が見えてきます。</p>',
         '<p class="lead">%s</p>' % c['leadThemes']),
        ('<p class="lead">「なぜそうなったのか」を掘り下げた読み物です。論述や考察問題の土台になります。</p>',
         '<p class="lead">%s</p>' % c['leadTopics']),
    ]
    for a, b in reps:
        assert a in s, 'index.html: 置換対象が見つからない -> ' + a[:50]
        s = s.replace(a, b)
    return s

# ---------- style.css ----------
def build_style(c):
    s = read(os.path.join(SP, 'style.base.css'))
    reps = [
        ('  --bg: #f6f3ee;', '  --bg: %s;' % c['bg']),
        ('  --surface2: #faf7f2;', '  --surface2: %s;' % c['surface2']),
        ('  --border: #e2dace;', '  --border: %s;' % c['border']),
        ('  --primary: #9b2d20;\n  --primary-soft: #f6e6e3;', '  --primary: %s;\n  --primary-soft: %s;' % (c['color'], c['soft'])),
        ('  --header-bg: #9b2d20;', '  --header-bg: %s;' % c['color']),
        ('  --accent: #b9892f;', '  --accent: %s;' % c['accent']),
        ('    --bg: #17140f;', '    --bg: %s;' % c['dbg']),
        ('    --surface: #221e19;', '    --surface: %s;' % c['dsurface']),
        ('    --surface2: #1c1915;', '    --surface2: %s;' % c['dsurface2']),
        ('    --border: #3a332b;', '    --border: %s;' % c['dborder']),
        ('    --primary: #e0705f;\n    --primary-soft: #3a211d;\n    --primary-text: #2a1512;\n    --header-bg: #4a211a;\n    --header-fg: #f3e2dd;',
         '    --primary: %s;\n    --primary-soft: %s;\n    --primary-text: %s;\n    --header-bg: %s;\n    --header-fg: %s;' % (c['dcolor'], c['dsoft'], c['dtext'], c['dheader'], c['dheaderfg'])),
        ('    --accent: #d7a94a;', '    --accent: %s;' % c['daccent']),
        ('  --bg: #17140f; --surface: #221e19; --surface2: #1c1915; --text: #ece6dd;',
         '  --bg: %s; --surface: %s; --surface2: %s; --text: %s;' % (c['dbg'], c['dsurface'], c['dsurface2'], c['dtextfg'])),
        ('  --muted: #a39a8d; --border: #3a332b; --primary: #e0705f; --primary-soft: #3a211d; --primary-text: #2a1512;',
         '  --muted: %s; --border: %s; --primary: %s; --primary-soft: %s; --primary-text: %s;' % (c['dmuted'], c['dborder'], c['dcolor'], c['dsoft'], c['dtext'])),
        ('  --header-bg: #4a211a; --header-fg: #f3e2dd;', '  --header-bg: %s; --header-fg: %s;' % (c['dheader'], c['dheaderfg'])),
        ('  --accent: #d7a94a; --good: #5fc08c;', '  --accent: %s; --good: #5fc08c;' % c['daccent']),
        ('  font-family: "Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "Noto Serif JP", "Segoe UI", serif;',
         '  font-family: %s;' % c['font']),
        ('  --text: #241f1c;', '  --text: %s;' % c['text']),
        ('  --muted: #6f675f;', '  --muted: %s;' % c['muted']),
        ('    --text: #ece6dd;', '    --text: %s;' % c['dtextfg']),
        ('    --muted: #a39a8d;', '    --muted: %s;' % c['dmuted']),
    ]
    for a, b in reps:
        assert a in s, 'style.css: 置換対象が見つからない -> ' + a[:50]
        s = s.replace(a, b)
    return s

# ---------- sw.js / manifest / 起動スクリプト ----------
def build_sw(c):
    return """// オフライン対応: アプリのファイルはネット優先で取得し、つながらないときはキャッシュを使う
// ファイルを更新したら CACHE の番号と、index.html の ?v= の番号を一緒に上げる
const CACHE = '%s-v1';
const FILES = [
  './',
  'index.html',
  'style.css',
  'app.js',
  'data-units.js',
  'data-quiz.js',
  'data-themes.js',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-512.png',
  'apple-touch-icon.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  const fresh = req.mode === 'navigate' ? fetch(req.url, { cache: 'no-cache' }) : fetch(req, { cache: 'no-cache' });
  e.respondWith(
    fresh
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match('index.html'))),
  );
});
""" % c['slug']

def build_manifest(c):
    return json.dumps({
        "name": c['title'], "short_name": c['short'], "description": c['desc'],
        "lang": "ja", "start_url": "./", "scope": "./", "display": "standalone",
        "orientation": "portrait", "background_color": c['bg'], "theme_color": c['color'],
        "icons": [
            {"src": "icon-192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "icon-512.png", "sizes": "512x512", "type": "image/png"},
            {"src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
        ],
    }, ensure_ascii=False, indent=2) + '\n'

def build_command(c):
    return """#!/bin/bash
cd "$(dirname "$0")"
echo ""
echo "  %s を起動しました"
echo "  ---------------------------------------------"
echo "  このPC:  http://localhost:%d/"
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)
[ -n "$IP" ] && echo "  スマホ(同じWi-Fi):  http://$IP:%d/"
echo "  終了するにはこのウィンドウを閉じてください"
echo "  ---------------------------------------------"
echo ""
sleep 1 && open "http://localhost:%d/" &
python3 -m http.server %d
""" % (c['title'], c['port'], c['port'], c['port'], c['port'])

def build_bat(c):
    return """@echo off
chcp 65001 >nul
cd /d "%%~dp0"
echo.
echo  %s を起動しました
echo  ---------------------------------------------
echo  このPC:  http://localhost:%d/
for /f "tokens=2 delims=:" %%%%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  for /f "tokens=* delims= " %%%%b in ("%%%%a") do echo  スマホ(同じWi-Fi):  http://%%%%b:%d/
)
echo  終了するにはこの画面を閉じてください
echo  ---------------------------------------------
echo.
start "" http://localhost:%d/
python -m http.server %d
""" % (c['title'], c['port'], c['port'], c['port'], c['port'])

def build_launch(c):
    return json.dumps({"version": "0.0.1", "configurations": [
        {"name": c['slug'], "runtimeExecutable": "python3",
         "runtimeArgs": ["-m", "http.server", str(c['port'])], "port": c['port']}]},
        ensure_ascii=False, indent=2) + '\n'

def gen(c):
    d = os.path.join(ROOT, c['dir'])
    print('  出力先:', d)
    os.makedirs(os.path.join(d, '.claude'), exist_ok=True)
    print(c['dir'] + ':')
    write(os.path.join(d, 'app.js'), build_app())
    write(os.path.join(d, 'index.html'), build_index(c))
    write(os.path.join(d, 'style.css'), build_style(c))
    write(os.path.join(d, 'sw.js'), build_sw(c))
    write(os.path.join(d, 'manifest.webmanifest'), build_manifest(c))
    write(os.path.join(d, 'start.command'), build_command(c))
    os.chmod(os.path.join(d, 'start.command'), 0o755)
    write(os.path.join(d, 'start.bat'), build_bat(c))
    write(os.path.join(d, '.claude', 'launch.json'), build_launch(c))

if __name__ == '__main__':
    conf = json.load(open(os.path.join(SP, 'apps.json'), encoding='utf-8'))
    for c in conf:
        gen(c)
