from PIL import Image, ImageDraw, ImageFont
import os, sys, math, json
# 出力先はスクリプトの位置から求める（フォルダごと動かしても壊れない）。
# 分野ごとの出力先と背景色は apps.json を正とする。
SP = os.path.dirname(os.path.abspath(__file__))
BASE = os.environ.get('GEN_BASE') or os.path.dirname(os.path.dirname(SP))
FG=(247,247,245)
def font(sz):
    for p in ["/System/Library/Fonts/ヒラギノ角ゴシック W6.ttc","/System/Library/Fonts/Hiragino Sans GB.ttc","/Library/Fonts/Arial Unicode.ttf",
              r"C:\Windows\Fonts\YuGothB.ttc", r"C:\Windows\Fonts\meiryob.ttc", r"C:\Windows\Fonts\msgothic.ttc"]:
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

def enso(d, cx, cy, r, t):
    # 円相（一筆書きの輪）と中心の点。思索をあらわす。
    d.arc([cx-r, cy-r, cx+r, cy+r], 128, 68, fill=FG, width=t)
    d.ellipse([cx-int(r*0.17), cy-int(r*0.17), cx+int(r*0.17), cy+int(r*0.17)], fill=FG)

def graph(d, cx, cy, r, t):
    # 直角三角形と直角記号（数学Ⅰ・A：三角比・図形と計量）
    lx, rx = cx-int(r*0.88), cx+int(r*0.88)
    by, ty = cy+int(r*0.72), cy-int(r*0.78)
    d.line([lx, by, rx, by], fill=FG, width=t)    # 底辺
    d.line([lx, by, lx, ty], fill=FG, width=t)    # 高さ
    d.line([lx, ty, rx, by], fill=FG, width=t)    # 斜辺
    m=int(r*0.26)                                  # 直角の印
    d.line([lx+m, by, lx+m, by-m], fill=FG, width=max(1,int(t*0.8)))
    d.line([lx, by-m, lx+m, by-m], fill=FG, width=max(1,int(t*0.8)))

def sigma(d, cx, cy, r, t):
    # 総和記号と数列の点（数学Ⅱ・B）
    w=int(r*0.72); h=int(r*0.86)
    d.line([cx-w, cy-h, cx+w, cy-h], fill=FG, width=t)
    d.line([cx+w, cy-h, cx-int(w*0.15), cy], fill=FG, width=t)
    d.line([cx-int(w*0.15), cy, cx+w, cy+h], fill=FG, width=t)
    d.line([cx+w, cy+h, cx-w, cy+h], fill=FG, width=t)
    d.line([cx-w, cy-h, cx-w, cy-h], fill=FG, width=t)

def integral(d, cx, cy, r, t):
    # 積分記号（数学Ⅲ・C）
    pts=[]
    for i in range(0, 101):
        u=i/100.0
        y=cy-r+2*r*u
        x=cx+int(r*0.42*math.sin((u-0.5)*math.pi*1.9))
        pts.append((x, y))
    d.line(pts, fill=FG, width=t, joint='curve')
    d.arc([cx+int(r*0.10), cy-r-int(r*0.30), cx+int(r*0.72), cy-r+int(r*0.32)], 160, 20, fill=FG, width=t)
    d.arc([cx-int(r*0.72), cy+r-int(r*0.32), cx-int(r*0.10), cy+r+int(r*0.30)], 340, 200, fill=FG, width=t)

def genkou(d, cx, cy, r, t):
    # 原稿用紙のマス（現代文）。3×3の枡に、中央だけ埋めた印を置く。
    s=int(r*1.60); x0, y0 = cx-s//2, cy-s//2; st=s//3
    for i in range(4):
        d.line([x0, y0+st*i, x0+s, y0+st*i], fill=FG, width=max(1,int(t*0.7)))
        d.line([x0+st*i, y0, x0+st*i, y0+s], fill=FG, width=max(1,int(t*0.7)))
    m=int(st*0.26)
    d.rectangle([x0+st+m, y0+st+m, x0+st*2-m, y0+st*2-m], fill=FG)

def makimono(d, cx, cy, r, t):
    # 和綴じ本（古文）。縦長の本に、右端の綴じ目と、縦書きの行。
    w=int(r*1.26); h=int(r*1.62)
    x0, y0 = cx-w//2, cy-h//2
    d.rectangle([x0, y0, x0+w, y0+h], outline=FG, width=t)
    bx=x0+int(w*0.78)                                  # 綴じ目の線
    d.line([bx, y0, bx, y0+h], fill=FG, width=max(1,int(t*0.7)))
    for i in (1, 2, 3):                                # 綴じ糸
        yy=y0+h*i//4
        d.line([bx, yy, x0+w, yy], fill=FG, width=max(1,int(t*0.7)))
    for i in (1, 2, 3):                                # 縦書きの行
        xx=x0+int(w*0.78)*i//4
        d.line([xx, y0+int(h*0.16), xx, y0+int(h*0.84)], fill=FG, width=max(1,int(t*0.55)))

def fude(d, cx, cy, r, t):
    # 縦書きの漢文と返り点（漢文）。右に3行、左下にレ点。
    x0=cx+int(r*1.02); y0, y1 = cy-int(r*0.92), cy+int(r*0.92)
    for i in range(3):
        xx=x0-int(r*0.46)*i
        d.line([xx, y0, xx, y1], fill=FG, width=max(2,int(t*0.95)))
    # レ点（ほぼ垂直に下ろし、右上へ短く跳ねる）
    lx, ly = cx-int(r*1.00), cy-int(r*0.74)
    d.line([lx, ly, lx+int(r*0.20), ly+int(r*0.96)], fill=FG, width=t)
    d.line([lx+int(r*0.20), ly+int(r*0.96), lx+int(r*0.50), ly+int(r*0.54)],
           fill=FG, width=t)

def bunkei(d, cx, cy, r, t):
    # 文の骨組み（英文法）。三つの枠を線で結び、主語・動詞・目的語の並びを表す。
    w=int(r*0.56); h=int(r*0.52); gap=int(r*0.30)
    total=w*3+gap*2
    x0=cx-total//2; y0=cy-h//2
    for i in range(3):
        x=x0+(w+gap)*i
        d.rectangle([x, y0, x+w, y0+h], outline=FG, width=t)
        if i < 2:
            d.line([x+w, cy, x+w+gap, cy], fill=FG, width=max(1,int(t*0.8)))
    d.line([x0, y0+h+int(r*0.34), x0+total, y0+h+int(r*0.34)],
           fill=FG, width=max(1,int(t*0.7)))

def dokkai(d, cx, cy, r, t):
    # 本文と虫眼鏡（英文読解）。横線の束に、円と柄を重ねる。
    w=int(r*1.44); x0=cx-w//2
    for i in range(4):
        yy=cy-int(r*0.78)+int(r*0.44)*i
        ww=w if i % 2 == 0 else int(w*0.72)
        d.line([x0, yy, x0+ww, yy], fill=FG, width=max(1,int(t*0.8)))
    gr=int(r*0.52); gx, gy = cx+int(r*0.46), cy+int(r*0.28)
    d.ellipse([gx-gr, gy-gr, gx+gr, gy+gr], outline=FG, width=t)
    d.line([gx+int(gr*0.72), gy+int(gr*0.72), gx+int(gr*1.5), gy+int(gr*1.5)],
           fill=FG, width=max(2,int(t*1.2)))

def jisho(d, cx, cy, r, t):
    # 開いた辞書（語彙と表現）。左右の頁と、中央の綴じ目。
    w=int(r*1.66); h=int(r*1.06)
    x0, y0 = cx-w//2, cy-h//2
    d.line([cx, y0-int(r*0.10), cx, y0+h], fill=FG, width=t)
    for sx in (-1, 1):
        d.line([cx, y0-int(r*0.10), cx+sx*w//2, y0+int(r*0.14)], fill=FG, width=t)
        d.line([cx+sx*w//2, y0+int(r*0.14), cx+sx*w//2, y0+h], fill=FG, width=t)
        d.line([cx, y0+h, cx+sx*w//2, y0+h], fill=FG, width=t)
        for i in (1, 2):
            yy=y0+int(r*0.40)+int(r*0.30)*i
            d.line([cx+sx*int(w*0.12), yy, cx+sx*int(w*0.40), yy],
                   fill=FG, width=max(1,int(t*0.6)))

SHAPES={'物理':atom, '化学':flask, '生物':dna, '地学':earth, '倫理':enso,
        '数学ⅠA':graph, '数学ⅡB':sigma, '数学ⅢC':integral,
        '現代文':genkou, '古文':makimono, '漢文':fude,
        '英文法':bunkei, '英文読解':dokkai, '語彙と表現':jisho}

def hex2rgb(h):
    h=h.lstrip('#'); return tuple(int(h[i:i+2],16) for i in (0,2,4))

def make(name, bg, size, path, maskable=False):
    img=Image.new("RGB",(size,size),bg); d=ImageDraw.Draw(img); d._image=img
    pad=int(size*0.24) if maskable else int(size*0.15)
    inner=size-pad*2
    t=max(2,int(inner*0.062))
    SHAPES[name](d, size//2, int(size*0.40), int(inner*0.33), t)
    f=font(int(inner*0.24)); txt=name
    bb=d.textbbox((0,0),txt,font=f)
    d.text(((size-(bb[2]-bb[0]))//2-bb[0], int(size*0.70)), txt, font=f, fill=FG)
    img.save(path)

if __name__ == '__main__':
    conf=json.load(open(os.path.join(SP,'apps.json'), encoding='utf-8'))
    want=set(sys.argv[1:])     # 例: python mkicons.py 倫理 （無指定なら全分野）
    unknown=want-{c['dir'] for c in conf}
    if unknown: sys.exit('apps.json にない分野: ' + '、'.join(sorted(unknown)))
    for c in conf:
        if want and c['dir'] not in want: continue
        if c['dir'] not in SHAPES: sys.exit('図形が未定義の分野: ' + c['dir'])
        out=os.path.join(BASE, c['subject'], c['dir'])
        for sz, fn, mk in ((192,'icon-192.png',False),(512,'icon-512.png',False),(512,'icon-maskable-512.png',True),(180,'apple-touch-icon.png',False)):
            make(c['dir'], hex2rgb(c['color']), sz, os.path.join(out, fn), mk)
        print('icons:', os.path.relpath(out, BASE))
