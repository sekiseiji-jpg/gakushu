// 版の番号が揃っているかを見る。
//   ・各アプリ … index.html の ?v=N と sw.js の CACHE = '<slug>-vN' の N が同じか
//   ・ポータル … 上に加えて、教科ページ5枚の ?v= がポータルと同じ番号か
// ファイルを変えたら ?v= と CACHE を一緒に上げる、索引を作り直したら6枚そろえる、
// というのは手順書にも README にも書いてあるが、それでも4枚取り残したことがある（知見 16.2）。
// 数えられる不整合なので機械で見る。
// 使い方: node tools/check/ver.js
const fs = require('fs');
const path = require('path');
const { ROOT, APPS, MINLEN, pad } = require('./lib.js');

const READERS = ['国語/古典文学', '国語/近現代文学'];
const SUBJECTS = Object.keys(MINLEN);        // 社会・理科・数学・国語・英語

// そのファイルに出てくる ?v=N の番号を重複なしで返す
function vers(file) {
  const s = fs.readFileSync(file, 'utf8');
  return [...new Set((s.match(/\?v=(\d+)/g) || []).map((m) => m.slice(3)))];
}

// sw.js の CACHE = 'nihonshi-v9' から末尾の番号を取り出す
function cacheVer(file) {
  const m = /const CACHE = '([^']*?)-v(\d+)'/.exec(fs.readFileSync(file, 'utf8'));
  return m ? { name: m[1] + '-v' + m[2], v: m[2] } : null;
}

let ng = 0;
function report(name, msgs, note) {
  if (msgs.length) {
    ng++;
    console.log('✗ ' + name);
    for (const m of msgs) console.log('    ' + m);
  } else {
    console.log(pad('✓ ' + name, 24) + note);
  }
}

// ---- 1つのアプリ（index.html と sw.js の番号が同じか）----
function checkApp(rel) {
  const dir = path.join(ROOT, rel);
  const msgs = [];
  const vh = vers(path.join(dir, 'index.html'));
  const c = cacheVer(path.join(dir, 'sw.js'));
  if (vh.length === 0) msgs.push('index.html に ?v= がない');
  else if (vh.length > 1) msgs.push('index.html の ?v= が揃っていない: ' + vh.join(' / '));
  if (!c) msgs.push("sw.js の CACHE = '<名前>-v<番号>' が読めない");
  if (vh.length === 1 && c && vh[0] !== c.v) {
    msgs.push('index.html の ?v=' + vh[0] + ' と sw.js の ' + c.name + ' が食い違っている');
  }
  report(rel, msgs, c ? '?v=' + (vh[0] || '?') + '  CACHE=' + c.name : '');
  return vh.length === 1 ? vh[0] : null;
}

console.log('--- ポータルと教科ページ ---');
// ---- ポータル（教科ページ5枚もそろっているか）----
{
  const msgs = [];
  const vh = vers(path.join(ROOT, 'index.html'));
  const c = cacheVer(path.join(ROOT, 'sw.js'));
  if (vh.length !== 1) msgs.push('ポータルの index.html の ?v= が揃っていない: ' + vh.join(' / '));
  if (!c) msgs.push("ポータルの sw.js の CACHE が読めない");
  if (vh.length === 1 && c && vh[0] !== c.v) {
    msgs.push('ポータルの ?v=' + vh[0] + ' と sw.js の ' + c.name + ' が食い違っている');
  }
  // 教科ページ5枚。1枚でも取り残すと、そのページだけ古い索引を読み続ける。
  const subs = [];
  for (const s of SUBJECTS) {
    const f = path.join(ROOT, s, 'index.html');
    if (!fs.existsSync(f)) { msgs.push(s + '/index.html がない'); continue; }
    const v = vers(f);
    if (v.length !== 1) { msgs.push(s + '/index.html の ?v= が揃っていない: ' + v.join(' / ')); continue; }
    subs.push(s + '=' + v[0]);
    if (vh.length === 1 && v[0] !== vh[0]) {
      msgs.push(s + '/index.html が ?v=' + v[0] + '（ポータルは ?v=' + vh[0] + '）');
    }
  }
  report('ポータル＋教科ページ' + SUBJECTS.length + '枚', msgs,
    '?v=' + (vh[0] || '?') + '  CACHE=' + (c ? c.name : '?') + '  教科ページ ' + subs.length + '枚そろい');
}

console.log('\n--- クイズ19分野 ---');
for (const app of APPS) checkApp(app);

console.log('\n--- 読み物2分野 ---');
for (const app of READERS) checkApp(app);

console.log('\n版: ' + (ng ? ng + '件の問題' : '問題なし'));
if (ng) process.exit(1);
