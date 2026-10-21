// クイズの全19分野に chk・figs・bias・xref・xord・xsel を、読み物2分野に reader を、
// 版の番号（?v= と CACHE）には ver、ドキュメントの数字と日付には docs をかけ、最後に要約を出す。
// 使い方: node tools/check/all.js [-v]      -v をつけると chk の内訳もすべて表示する
const path = require('path');
const { execFileSync } = require('child_process');
const { APPS, ROOT, label, pad, minlenFor } = require('./lib.js');

const verbose = process.argv.includes('-v');
const here = (f) => path.join(__dirname, f);

// 子プロセスを動かして「出力・終了コード」を返す（終了コードが非0でも例外にしない）
function run(script, args) {
  try {
    return { out: execFileSync(process.execPath, [here(script)].concat(args), { encoding: 'utf8' }), code: 0 };
  } catch (e) {
    return { out: (e.stdout || '') + (e.stderr || ''), code: e.status === undefined ? 1 : e.status };
  }
}

// ---- 1分野ずつ chk ----
console.log('=== chk（件数・ID・正解インデックス・分野区分・言語チェック） ===');
const ngChk = [];
for (const app of APPS) {
  const dir = path.join(ROOT, app);
  const r = run('chk.js', [dir]);
  const head = (r.out.match(/^■.*$/m) || [''])[0];
  if (r.code === 0) {
    // ■行は「■ 日本史  単元15 …」の形。分野名は左に出しているので本数だけ見せる。
    console.log(pad('✓ ' + label(dir), 16) + '(minlen=' + minlenFor(dir) + ')  ' + head.replace(/^■\s*\S+\s*/, ''));
    if (verbose) console.log(r.out.replace(/^/gm, '    '));
  } else {
    ngChk.push(label(dir));
    console.log('✗ ' + label(dir));
    console.log(r.out.replace(/^/gm, '    '));
  }
}

// ---- 単元の説明に添えた図・表・写真 ----
console.log('\n=== figs（説明に添えた図・表・写真） ===');
const rf = run('figs.js', []);
process.stdout.write(rf.out);

// ---- 読み物（古典文学・近現代文学） ----
console.log('\n=== reader（読み物アプリのデータ） ===');
const rr = run('reader.js', []);
process.stdout.write(rr.out);

// ---- 版の番号（?v= と CACHE）----
console.log('\n=== ver（?v= と CACHE の番号） ===');
const rv = run('ver.js', []);
process.stdout.write(rv.out);

// ---- ドキュメントの数字と日付 ----
console.log('\n=== docs（ドキュメントの数字と日付） ===');
const rd = run('docs.js', []);
process.stdout.write(rd.out);

// ---- 偏り ----
console.log('\n=== bias（cmb・ord の正解位置） ===');
const rb = run('bias.js', []);
process.stdout.write(rb.out);

// ---- 解説と正解の突き合わせ ----
console.log('\n=== xref（組合せの解説と正解） ===');
const rx = run('xref.js', []);
process.stdout.write(rx.out);

console.log('\n=== xord（配列の解説と正解） ===');
const ro = run('xord.js', []);
process.stdout.write(ro.out);

console.log('\n=== xsel（正誤判定・資料の解説の丸数字と正解） ===');
const rs = run('xsel.js', []);
process.stdout.write(rs.out);

// ---- 要約 ----
const nx = Number((rx.out.match(/矛盾 (\d+)問/) || [0, 0])[1]);
const no = Number((ro.out.match(/要確認 (\d+)問/) || [0, 0])[1]);
const ns = Number((rs.out.match(/矛盾 (\d+)問/) || [0, 0])[1]);
const okChk = APPS.length - ngChk.length;

console.log('\n=== まとめ ===');
console.log(APPS.length + '分野 ' + (ngChk.length ? okChk + '分野OK・' + ngChk.length + '分野NG（' + ngChk.join(' ') + '）' : '検証OK') +
  ' ／ 矛盾' + (nx + no + ns) + (rr.code ? ' ／ 読み物NG' : ' ／ 読み物OK') +
  (rf.code ? ' ／ 図版NG' : ' ／ 図版OK') +
  (rv.code ? ' ／ 版NG' : ' ／ 版OK') +
  (rd.code ? ' ／ ドキュメントNG' : ' ／ ドキュメントOK') +
  (rb.code ? ' ／ 偏り警告あり' : ''));

const bad = ngChk.length || nx || no || ns || rb.code || rr.code || rf.code || rv.code || rd.code;
if (bad) { console.log('✗ 直すところがあります'); process.exit(1); }
console.log('✓ すべて問題なし');
