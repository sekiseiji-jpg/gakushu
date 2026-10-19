from PIL import Image, ImageDraw, ImageFont
import os, math
ROOT='/Users/seki/Desktop/アプリ開発/seki/TOOL/学習アプリ/理科'
FG=(247,247,245)
def font(sz):
    for p in ["/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc","/System/Library/Fonts/Hiragino Sans GB.ttc","/Library/Fonts/Arial Unicode.ttf"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, sz)
            except Exception: pass
    return ImageFont.load_default()

def atom(d, cx, cy, r, t):
    # 原子：核と3本の電子軌道
    for ang in (0, 60, 120):
        bb=[cx-r, cy-int(r*0.38), cx+r, cy+int(r*0.38)]
        img=Image.new('RGBA',(r*4,r*4),(0,0,0,0)); dd=ImageDraw.Draw(img)
        dd.ellipse([r*2-r, r*2-int(r*0.38), r*2+r, r*2+int(r*0.38)], outline=FG+(255,), width=t)
        img=img.rotate(ang, resample=Image.BICUBIC, center=(r*2,r*2))
        d._image.paste(img, (cx-r*2, cy-r*2), img)
    d.ellipse([cx-int(r*0.18), cy-int(r*0.18), cx+int(r*0.18), cy+int(r*0.18)], fill=FG)

def flask(d, cx, cy, r, t):
    # 三角フラスコ
    nw=int(r*0.28); nh=int(r*0.55); bw=int(r*0.95); bh=int(r*0.75)
    top=cy-int(r*0.80)
    d.line([cx-nw, top, cx+nw, top], fill=FG, width=t)
    d.line([cx-nw, top, cx-nw, top+nh], fill=FG, width=t)
    d.line([cx+nw, top, cx+nw, top+nh], fill=FG, width=t)
    d.line([cx-nw, top+nh, cx-bw, top+nh+bh], fill=FG, width=t)
    d.line([cx+nw, top+nh, cx+bw, top+nh+bh], fill=FG, width=t)
    d.line([cx-bw, top+nh+bh, cx+bw, top+nh+bh], fill=FG, width=t)
    # 液面
    ly=top+nh+int(bh*0.45)
    lx=int(nw+(bw-nw)*0.45)
    d.line([cx-lx, ly, cx+lx, ly], fill=FG, width=max(1,int(t*0.8)))

def dna(d, cx, cy, r, t):
    # 二重らせん
    amp=int(r*0.55); top=cy-r; bot=cy+r
    a=[]; b=[]
    for i in range(0, 101):
        y=top+(bot-top)*i/100
        ph=(i/100)*2*math.pi*1.5
        a.append((cx+amp*math.sin(ph), y))
        b.append((cx-amp*math.sin(ph), y))
    d.line(a, fill=FG, width=t, joint='curve')
    d.line(b, fill=FG, width=t, joint='curve')
    for i in range(10, 100, 18):
        d.line([a[i], b[i]], fill=FG, width=max(1,int(t*0.7)))

def earth(d, cx, cy, r, t):
    # 地層と火山
    d.arc([cx-r, cy-r, cx+r, cy+r], 0, 180, fill=FG, width=t)         # 地表の弧
    d.arc([cx-int(r*0.62), cy-int(r*0.62), cx+int(r*0.62), cy+int(r*0.62)], 0, 180, fill=FG, width=max(1,int(t*0.75)))
    d.arc([cx-int(r*0.26), cy-int(r*0.26), cx+int(r*0.26), cy+int(r*0.26)], 0, 180, fill=FG, width=max(1,int(t*0.75)))
    d.line([cx-r, cy, cx+r, cy], fill=FG, width=t)
    # 火山
    vx=cx+int(r*0.45); vy=cy-int(r*0.52)
    d.line([vx-int(r*0.30), vy, vx-int(r*0.08), vy-int(r*0.34)], fill=FG, width=t)
    d.line([vx+int(r*0.30), vy, vx+int(r*0.08), vy-int(r*0.34)], fill=FG, width=t)
    d.line([vx-int(r*0.08), vy-int(r*0.34), vx+int(r*0.08), vy-int(r*0.34)], fill=FG, width=t)

SHAPES={'物理':atom, '化学':flask, '生物':dna, '地学':earth}
LABEL={'物理':'物理', '化学':'化学', '生物':'生物', '地学':'地学'}
BG={'物理':(42,75,141), '化学':(194,86,26), '生物':(47,125,58), '地学':(138,90,43)}

def make(name, size, path, maskable=False):
    img=Image.new("RGB",(size,size),BG[name]); d=ImageDraw.Draw(img); d._image=img
    pad=int(size*0.24) if maskable else int(size*0.15)
    inner=size-pad*2
    t=max(2,int(inner*0.062))
    SHAPES[name](d, size//2, int(size*0.40), int(inner*0.33), t)
    f=font(int(inner*0.24)); txt=LABEL[name]
    bb=d.textbbox((0,0),txt,font=f)
    d.text(((size-(bb[2]-bb[0]))//2-bb[0], int(size*0.70)), txt, font=f, fill=FG)
    img.save(path)

for name in SHAPES:
    out=os.path.join(ROOT,name)
    for sz, fn, mk in ((192,'icon-192.png',False),(512,'icon-512.png',False),(512,'icon-maskable-512.png',True),(180,'apple-touch-icon.png',False)):
        make(name, sz, os.path.join(out, fn), mk)
    print('icons:', name)
