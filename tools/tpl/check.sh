#!/bin/bash
# 使い方: check.sh <アプリのフォルダ名>
D="/Users/seki/Desktop/アプリ開発/seki/TOOL/学習アプリ/$1"
cd "$D" || exit 1
case "$1" in 理科/*) MINLEN=4 ;; *) MINLEN=2 ;; esac
export MINLEN
node -e "
const fs=require('fs');
function load(f, names){
  if(!fs.existsSync(f)) return null;
  let s=fs.readFileSync(f,'utf8');
  if(!/module\.exports/.test(s)) s += '\n];\nmodule.exports={'+names+'};';
  const p='/tmp/_chk_'+f.replace(/\W/g,'_')+'.js';
  fs.writeFileSync(p,s); delete require.cache[p]; return require(p);
}
const u=load('data-units.js','UNITS,APP');
const q=load('data-quiz.js','QUIZ');
const t=load('data-themes.js','THEMES');
const errs=[];
if(!u){ console.log('data-units.js なし'); process.exit(0); }
const UNITS=u.UNITS;
const ids=new Set();
UNITS.forEach(x=>{
  if(ids.has(x.id)) errs.push('単元ID重複: '+x.id); ids.add(x.id);
  ['name','yomi','span','icon','color','catch'].forEach(k=>{ if(!x[k]) errs.push(x.id+' に '+k+' がない'); });
  ['summary','sections','keywords','people','events','topics'].forEach(k=>{ if(!Array.isArray(x[k])||!x[k].length) errs.push(x.id+' の '+k+' が空'); });
  (x.events||[]).forEach(e=>{ if(typeof e.n!=='number') errs.push(x.id+' の年表に数値のnがない: '+e.t); });
});
console.log('■ 単元 '+UNITS.length+'  年表'+UNITS.reduce((a,x)=>a+x.events.length,0)
 +'  用語'+UNITS.reduce((a,x)=>a+x.keywords.length,0)
 +'  人物'+UNITS.reduce((a,x)=>a+x.people.length,0)
 +'  詳細'+UNITS.reduce((a,x)=>a+x.sections.reduce((b,s)=>b+s.items.length,0),0)
 +'  トピック'+UNITS.reduce((a,x)=>a+x.topics.length,0));
if(t) console.log('■ テーマ '+t.THEMES.length+'（ステップ計'+t.THEMES.reduce((a,x)=>a+x.steps.length,0)+'）');
if(q){
  const QUIZ=q.QUIZ, byU={}, qi=new Set();
  QUIZ.forEach(x=>{
    if(qi.has(x.id)) errs.push('問題ID重複: '+x.id); qi.add(x.id);
    if(!(x.a>=0&&x.a<x.choices.length)) errs.push('正解インデックス不正: '+x.id);
    if(x.type==='ord'&&x.choices.length!==6) errs.push('ordが6択でない: '+x.id);
    if(x.type!=='ord'&&x.choices.length!==4) errs.push('4択でない: '+x.id);
    if(x.type==='src'&&!x.src) errs.push('史料本文がない: '+x.id);
    if(!x.exp) errs.push('解説がない: '+x.id);
    if(!(x.lv>=1&&x.lv<=3)) errs.push('lvが不正: '+x.id);
    if(!UNITS.some(y=>y.id===x.era)) errs.push('存在しない単元: '+x.id+' -> '+x.era);
    byU[x.era]=(byU[x.era]||0)+1;
  });
  console.log('■ クイズ '+QUIZ.length);
  console.log('  '+UNITS.map(y=>y.id+':'+(byU[y.id]||0)).join('  '));
  const ty={};QUIZ.forEach(x=>ty[x.type]=(ty[x.type]||0)+1);console.log('  形式 '+JSON.stringify(ty));
  const ca={};QUIZ.forEach(x=>ca[x.cat]=(ca[x.cat]||0)+1);console.log('  分野 '+JSON.stringify(ca));
  UNITS.forEach(y=>{ if((byU[y.id]||0)<12) errs.push('12問未満: '+y.id+'='+(byU[y.id]||0)); });
  // 本文に日本語以外が混じっていないか
  const ALLOW=new Set(['ABCD','GHQ','GNP','GDP','EU','ASEAN','OPEC','NATO','WTO','IMF','OECD','EC','EEC','NAFTA','USMCA','BRICS','ODA','NGO','NPO','PKO','TPP','APEC','AU','OAU','UNCTAD','UNESCO','WHO','ILO','IBRD','GATT','SDGs','ECSC','EFTA','GNSS','GPS','km','cm','mm','ha','GIS','ICT','LNG','OPEC','TAC','MSC','FSC','AU','CBD','LCC','UNCTAD','NIES','BRICS','ODA','COMECON','NIEO','PLO','IAEA','UNICEF','WFP','ICT','AI','GIS','GNI','NIES','MERCOSUR','RCEP','COP','PL','CSR','M','A','NPT','CTBT','SALT','START','INF','ABM','EPA','FTA','USA','UK','S','N','E','W','Af','Am','Aw','BW','BS','Cfa','Cfb','Cs','Cw','Cfc','Df','Ds','Dw','ET','EF','UNHCR','FAO','TVA','LGBT','SNS','NNW','PKO','NPT','CTBT','PL','ODA','IoT','DX','LGBTQ','NISA','iDeCo','GPIF','TPP','EPA','FTA','WTO','IMF','UNCTAD','SDGs','ESG','CSR','M','A']);
  // 理科で正当に出てくる単位・記号・関数名
  ['mol','kg','km','cm','mm','nm','pm','μm','mL','dL','kJ','kcal','kPa','hPa','MPa','GPa','rpm','Hz','kHz','MHz','GHz','kW','MW','GW','kWh','mA','kV','MV','kΩ','MΩ','μF','pF','nF','mH','eV','keV','MeV','GeV','Wb','Pa','Bq','Sv','Gy','ppm','ppb','sin','cos','tan','log','ln','exp','pH','pOH','Ka','Kb','Kw','Ksp','ATP','ADP','AMP','DNA','RNA','mRNA','tRNA','rRNA','PCR','iPS','ES','GFP','NAD','NADH','NADP','NADPH','FAD','FADH','CoA','ABO','Rh','HLA','AIDS','HIV','BOD','COD','CFC','UV','IR','MRI','CT','PET','LED','IC','LSI','CPU','SI','STP','NTP','cal','atm','mmHg','rad','sr','lx','lm','cd','dB','kn','Ma','Ga','ka','Myr','SiO','CaCO','NaCl','HCl','NaOH','CuSO','FeS','ZnS','CaO','MgO','CO','NO','SO','NH','CH','HNO','KOH','AgCl','BaSO','PbO','MnO','KMnO','AgNO','FeCl','AlCl','CaCl','NaHCO','KCl','HBr','HI','HF','HClO','CrO','CuO','SnO','TiO','ZrO','OH','COOH','CHO','NH2','CONH','CH2','CH3','CH4','C2H4','C2H2','C6H6','USGS','JAXA','NASA','IPCC','ENSO','ITCZ','GPS','GNSS','ICT','AI','P','S','V','T','L','M','R','E','F','G','H','I','K','N','O','C','A','B','D','Q','U','W','X','Y','Z','a','b','c','d','e','f','g','h','i','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','Ⅰ','Ⅱ','Ⅲ','mv','ma','ms','km/h','m/s','v0','x0','t0','y0','MKS','CGS','PV','nRT','cV','cP','Cv','Cp','RNAi','ips','SNP','GMO','LCA','SDGs','CO2','O2','H2','N2','H2O','H2SO4','Mg','Al','Fe','Cu','Zn','Ag','Au','Pb','Sn','Na','Ca','Ba','Sr','Li','Be','Si','Cl','Br','He','Ne','Ar','Kr','Xe','Rn','Ti','Cr','Mn','Ni','Co','Hg','Pt','Cd','As','Sb','Bi','Se','Te','Po','At','Ra','Th','Pa','Np','Pu','Am','Cm','Rb','Cs','Fr','Sc','Zr','Nb','Mo','Tc','Ru','Rh','Pd','In','Tl','Ge','Ga','Ce','La','Nd','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu','Hf','Ta','Re','Os','Ir','Bk','Cf','Es','Fm','Md','No','Lr','Ac','Pr','Pm','Xe'].forEach(w=>ALLOW.add(w));
  ['mgsin','mgcos','mgcosθ','sinθ','cosθ','tanθ','sin2θ','nRT','kgms','cosα','sinα','Hooke','Kepler','IBLsin','dsin','qvBsin','mrω','Fxcos'].forEach(w=>ALLOW.add(w));
  const bad=[];
  QUIZ.forEach(x=>{
    [['q',x.q],['src',x.src||''],['exp',x.exp]].concat(x.choices.map((c,i)=>['ch'+i,c])).forEach(([k,s])=>{
      const MIN=Number(process.env.MINLEN||2);
      for(const m of s.matchAll(new RegExp('[A-Za-z]{'+MIN+',}','g'))){
        const w=m[0];
        if(ALLOW.has(w)) continue;
        // 理科では化学式・数式の変数（ZnSO, NaCl, IBLsin …）を除くため、
        // 「全部小文字」か「先頭だけ大文字」の語（＝ふつうの英単語の形）だけを検出する
        if(MIN>2 && !/^[a-z]+$/.test(w) && !/^[A-Z][a-z]+$/.test(w)) continue;
        bad.push(x.id+'/'+k+': ['+w+']');
      }
      for(const m of s.matchAll(/[Ѐ-ӿ]+|[가-힯]+/g)) bad.push(x.id+'/'+k+': ['+m[0]+']');
    });
  });
  if(bad.length) errs.push('非日本語の混入:\n   '+bad.slice(0,20).join('\n   '));
}
console.log(errs.length ? '✗ ERRORS:\n'+errs.join('\n') : '✓ 検証OK');
"
