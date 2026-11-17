import sys, subprocess, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

OUT_DIR = sys.argv[1]
W, H, FPS = 1080, 1920, 30
BG=(11,11,11); WHITE=(245,242,235); GOLD=(201,162,74); GRAY=(70,70,70); DIM=(150,146,138)

S = [
 ("Fachada y entrada", "0:00","0:12", "Tu agencia en Chilpancingo, Guerrero",
  "Plano general desde la banqueta de enfrente. Celular vertical a la altura del pecho. Paneo lento de izquierda a derecha y luego camina despacio hacia la puerta.",
  "¡Hola! Bienvenidos a Chevrolet Chilpancingo. Hoy te invitamos a conocer nuestras instalaciones y todo lo que podemos hacer por ti y por tu auto.",
  "Bienvenidos · Chevrolet Chilpancingo", "pan", "Plano general · Paneo y avance"),
 ("Recepción", "0:12","0:21", "Te recibimos y te orientamos",
  "Desde la puerta, plano medio de la persona de recepción saludando a cámara. Avanza dos pasos hacia el mostrador.",
  "Al entrar te recibe nuestro equipo de recepción, que te orienta y te lleva con la persona indicada.",
  "Recepción · Te recibimos y te orientamos", "push", "Plano medio · Avance corto"),
 ("Piso de exhibición", "0:21","0:35", "Conoce los modelos nuevos",
  "Plano general desde una esquina del piso. Camina despacio entre los autos. Cierra con un detalle cercano (faro, volante o rin).",
  "Este es nuestro piso de exhibición. Aquí puedes ver de cerca los modelos nuevos, subirte, revisar sus detalles y comparar versiones con calma.",
  "Autos nuevos", "walk", "Plano general · Caminata + detalle"),
 ("Asesores de ventas", "0:35","0:45", "Te ayudamos a elegir",
  "Plano medio de un asesor junto a un auto o en su escritorio, hablando a cámara. Cámara fija a la altura de los ojos, a 1.5 m.",
  "Nuestros asesores de ventas te explican cada modelo, resuelven tus dudas y te ayudan a elegir el auto ideal para ti.",
  "Asesores de ventas · Te ayudamos a elegir tu auto ideal", "static", "Plano medio · Cámara fija"),
 ("Financiamiento y crédito", "0:45","0:56", "Planes de crédito a tu medida",
  "Plano medio del escritorio de crédito y detalle de manos con un folleto o calculadora. No muestres documentos ni datos de clientes.",
  "En el área de financiamiento te presentamos planes de crédito, calculamos tus pagos y te acompañamos en todo el trámite.",
  "Financiamiento", "push", "Plano medio · Acercamiento lento"),
 ("Entrega de unidades", "0:56","1:06", "El momento de estrenar",
  "Plano general del auto listo para entrega. Acércate despacio hasta un detalle de la llave o del moño.",
  "Aquí entregamos tu auto nuevo. Te explicamos cómo funciona y te lo llevas listo para el camino.",
  "Entrega de unidades · Tu auto nuevo, listo para el camino", "push", "Plano general → detalle"),
 ("Seminuevos", "1:06","1:16", "Autos revisados y toma a cuenta",
  "Párate en un extremo de la fila de seminuevos y haz un paneo lento a lo largo de los autos.",
  "En seminuevos encuentras autos revisados y con buen precio. También puedes dejar tu auto actual a cuenta.",
  "Seminuevos · Autos revisados y toma de tu auto a cuenta", "pan", "Plano general · Paneo lento"),
 ("Recepción de servicio", "1:16","1:27", "Revisamos tu auto contigo",
  "Plano general del andén de servicio desde un costado. Asesor revisando un auto con tableta u hoja de servicio. Cámara fija.",
  "En la recepción de servicio, un asesor revisa tu auto contigo, registra lo que necesita y te da un presupuesto claro.",
  "Recepción de servicio", "static", "Plano general · Cámara fija"),
 ("Taller de servicio", "1:27","1:41", "Mantenimiento y reparación",
  "Plano general desde una zona segura (detrás de la línea marcada). Luego detalle de un técnico trabajando y de un auto en elevador.",
  "En el taller, nuestros técnicos hacen mantenimientos y reparaciones con herramientas especializadas y refacciones originales.",
  "Taller de servicio", "pan", "Plano general → detalle"),
 ("Refacciones", "1:41","1:50", "Piezas y accesorios originales",
  "Plano medio del mostrador de refacciones y paneo lento por los anaqueles.",
  "En refacciones encuentras piezas y accesorios originales para tu vehículo.",
  "Refacciones · Piezas y accesorios originales", "pan", "Plano medio · Paneo"),
 ("Hojalatería y pintura", "1:50","2:00", "Tu auto como nuevo",
  "Plano general del área y detalle de un técnico puliendo o de la cabina de pintura (desde fuera, sin entrar).",
  "En hojalatería y pintura reparamos golpes y rayones para que tu auto vuelva a verse como nuevo.",
  "Hojalatería y pintura", "push", "Plano general → detalle"),
 ("Lavado", "2:00","2:07", "Listo e impecable",
  "Detalle cercano de agua o espuma sobre la carrocería. Cámara fija.",
  "Y antes de entregártelo, lo lavamos para que salga impecable.",
  "Lavado · Te lo entregamos impecable", "static", "Detalle · Cámara fija"),
 ("Sala de espera", "2:07","2:17", "Espera con comodidad",
  "Paneo lento de la sala: sillones, café, pantalla. Graba con la sala ordenada y sin clientes a cuadro (o con su permiso).",
  "Mientras esperas, ponte cómodo en nuestra sala, con café, internet y un espacio tranquilo.",
  "Sala de espera · Café, internet y comodidad mientras esperas", "pan", "Plano general · Paneo lento"),
 ("Cierre", "2:17","2:30", "Te esperamos en la agencia",
  "Frente a la fachada: presentador o equipo saludando a cámara. Plano general, cámara fija; al final da dos pasos hacia atrás.",
  "Gracias por acompañarnos. Te esperamos en Chevrolet Chilpancingo. ¡Ven a visitarnos, aquí te atendemos como mereces!",
  "¡Te esperamos! · [Dirección · Teléfono · Horario]", "pull", "Plano general · Alejamiento"),
]
NARR={1,3,5,8,9,11,14}
def sec(t): m,s=t.split(":"); return int(m)*60+int(s)

# ---------- Guion (markdown) ----------
md=["# Guion: Recorrido por Chevrolet Chilpancingo","",
"Duración: 2:30 · Formato vertical 9:16 · Grabación con celular (1 o 2 personas)","",
"> Mitad del video lleva voz (escenas 1, 3, 5, 8, 9, 11 y 14) y la otra mitad va solo con música de fondo y texto en pantalla (escenas 2, 4, 6, 7, 10, 12 y 13). Graba en vertical, 1080p a 30 fps, con el lente limpio y luz natural cuando se pueda. Movimientos lentos y con las dos manos; si hay presentador, una persona graba y otra habla.",""]
for i,(a,t0,t1,fr,toma,voz,txt,mv,lab) in enumerate(S,1):
    md+=[f"## Escena {i} · {t0}–{t1} · {a}","",
         f"- **Toma:** {toma}",
         (f"- **Voz / presentador:** “{voz}”" if i in NARR else "- **Voz / presentador:** Sin narración, solo música de fondo."),
         f"- **Texto en pantalla:** {txt}",""]
open(f"{OUT_DIR}/guion_recorrido_chevrolet_chilpancingo.md","w").write("\n".join(md))

# ---------- Video ----------
FS="/usr/share/fonts/truetype/dejavu/"
fTitle=ImageFont.truetype(FS+"DejaVuSerif-Bold.ttf",78)
fPhrase=ImageFont.truetype(FS+"DejaVuSans.ttf",44)
fSub=ImageFont.truetype(FS+"DejaVuSans.ttf",42)
fSmall=ImageFont.truetype(FS+"DejaVuSans-Bold.ttf",30)
fTiny=ImageFont.truetype(FS+"DejaVuSans.ttf",30)

def wrap(d,text,font,maxw):
    lines=[];cur=""
    for w in text.split():
        t=(cur+" "+w).strip()
        if d.textlength(t,font=font)<=maxw: cur=t
        else: lines.append(cur); cur=w
    if cur: lines.append(cur)
    return lines

# background with soft vignette
bg=Image.new("RGB",(W,H),BG)
glow=Image.new("L",(W,H),0); ImageDraw.Draw(glow).ellipse((-200,300,W+200,1400),fill=40)
glow=glow.filter(ImageFilter.GaussianBlur(220))
bg=Image.composite(Image.new("RGB",(W,H),(40,34,20)),bg,glow)

BX0,BY0,BX1,BY1=90,250,990,1010; BW,BH=BX1-BX0,BY1-BY0
import os
def scene_layer(i):
    LW,LH=int(BW*1.6),int(BH*1.6)
    for ext in ("jpg","jpeg","png","webp"):
        fp=f"{OUT_DIR}/fotos/{i:02d}.{ext}"
        if os.path.exists(fp):
            ph=Image.open(fp).convert("RGB"); sc=max(LW/ph.width,LH/ph.height)
            ph=ph.resize((int(ph.width*sc)+1,int(ph.height*sc)+1))
            l=(ph.width-LW)//2; t=(ph.height-LH)//2
            return ph.crop((l,t,l+LW,t+LH))
    im=Image.new("RGB",(LW,LH),(18,18,18)); d=ImageDraw.Draw(im)
    hy=int(LH*0.58)
    d.line((0,hy,LW,hy),fill=GRAY,width=3)
    for k in range(-8,9):  # floor perspective
        d.line((LW/2+k*40,hy,LW/2+k*260,LH),fill=(40,40,40),width=2)
    import random; r=random.Random(i*7+3); x=40
    while x<LW-80:
        w=r.randint(140,300); h=r.randint(120,360)
        d.rectangle((x,hy-h,x+w,hy),outline=(90,90,90),width=3)
        if r.random()<.45:  # car silhouette
            cy=hy; cw=w*0.9; cx=x+w*0.05
            d.rounded_rectangle((cx,cy-70,cx+cw,cy-20),12,outline=GOLD,width=4)
            d.rounded_rectangle((cx+cw*.22,cy-115,cx+cw*.72,cy-70),14,outline=GOLD,width=4)
            for wx in (cx+cw*.22,cx+cw*.78): d.ellipse((wx-24,cy-44,wx+24,cy+4),outline=GOLD,width=4)
        x+=w+r.randint(30,90)
    return im

def frame_box(layer,mv,p):
    LW,LH=layer.size; e=0.5-0.5*math.cos(math.pi*p)
    if mv=="pan": z=1.0; cx=LW*(0.32+0.36*e); cy=LH/2
    elif mv=="push": z=1+0.3*e; cx,cy=LW/2,LH/2
    elif mv=="walk": z=1+0.45*e; cx=LW/2; cy=LH/2+8*math.sin(p*40)
    elif mv=="pull": z=1.3-0.3*e; cx,cy=LW/2,LH/2
    else: z=1.0; cx,cy=LW/2,LH/2
    cw,ch=BW/z,BH/z
    return layer.crop((int(cx-cw/2),int(cy-ch/2),int(cx+cw/2),int(cy+ch/2))).resize((BW,BH))

ARROW={"pan":"→  paneo","push":"⟶  acercamiento","walk":"⟶  caminata","pull":"⟵  alejamiento","static":"■  cámara fija"}
TOTAL=150
ff=subprocess.Popen(["ffmpeg","-y","-loglevel","error","-f","rawvideo","-pix_fmt","rgb24","-s",f"{W}x{H}","-r",str(FPS),"-i","-",
  "-c:v","libx264","-preset","medium","-crf","22","-pix_fmt","yuv420p","-movflags","+faststart",f"{OUT_DIR}/video_referencia_chevrolet_chilpancingo.mp4"],stdin=subprocess.PIPE)
tmpd=ImageDraw.Draw(Image.new("RGB",(10,10)))
for i,(a,t0,t1,fr,toma,voz,txt,mv,lab) in enumerate(S,1):
    s0,s1=sec(t0),sec(t1); dur=s1-s0; layer=scene_layer(i)
    # subtitle chunks (max 2 lines)
    narr=i in NARR
    lines=wrap(tmpd,voz if narr else txt.replace(" · ",": ",1),fSub,860); chunks=[lines[k:k+2] for k in range(0,len(lines),2)]
    lens=[sum(len(l) for l in c) for c in chunks]; tot=sum(lens); span=dur-0.6; acc=0; cues=[]
    for c,l in zip(chunks,lens): cues.append((0.3+span*acc/tot,0.3+span*(acc+l)/tot,c)); acc+=l
    tlines=wrap(tmpd,a,fTitle,900)
    for f in range(dur*FPS):
        t=f/FPS; p=t/dur; g=(s0+t)/TOTAL
        im=bg.copy(); d=ImageDraw.Draw(im)
        # top bar
        d.rectangle((0,0,W,8),fill=(35,35,35)); d.rectangle((0,0,int(W*g),8),fill=GOLD)
        d.text((90,70),f"ESCENA {i:02d} / {len(S)}",font=fSmall,fill=GOLD)
        d.text((90,125),f"{t0} – {t1}  ·  CHEVROLET CHILPANCINGO",font=fTiny,fill=DIM)
        # viewfinder
        im.paste(frame_box(layer,mv,p),(BX0,BY0))
        for k in (1,2):
            d.line((BX0+BW*k/3,BY0,BX0+BW*k/3,BY1),fill=(55,55,55),width=1)
            d.line((BX0,BY0+BH*k/3,BX1,BY0+BH*k/3),fill=(55,55,55),width=1)
        L=60
        for (x,y,sx,sy) in ((BX0,BY0,1,1),(BX1,BY0,-1,1),(BX0,BY1,1,-1),(BX1,BY1,-1,-1)):
            d.line((x,y,x+sx*L,y),fill=WHITE,width=6); d.line((x,y,x,y+sy*L),fill=WHITE,width=6)
        if int(t*2)%2==0: d.ellipse((BX0+30,BY0+30,BX0+52,BY0+52),fill=GOLD)
        d.text((BX0+64,BY0+24),"REC",font=fSmall,fill=WHITE)
        rt=f"{int((s0+t)//60)}:{int((s0+t)%60):02d}"; d.text((BX1-30-d.textlength(rt,font=fSmall),BY0+24),rt,font=fSmall,fill=WHITE)
        bd="●  CON VOZ EN OFF" if narr else "♪  SIN VOZ · SOLO MÚSICA"
        d.text((990-d.textlength(bd,font=fSmall),70),bd,font=fSmall,fill=WHITE if narr else GOLD)
        d.text((BX0,BY1+22),f"TOMA: {lab}   {ARROW[mv]}",font=fTiny,fill=DIM)
        # title + phrase (animated in)
        a1=min(1,max(0,(t-0.2)/0.6)); off=int((1-a1)*40)
        ty=1130
        col=tuple(int(BG[k]+(WHITE[k]-BG[k])*a1) for k in range(3))
        for ln in tlines: d.text((90,ty+off),ln,font=fTitle,fill=col); ty+=92
        d.rectangle((90,ty+14,90+int(220*min(1,max(0,(t-0.5)/0.6))),ty+20),fill=GOLD)
        a2=min(1,max(0,(t-0.8)/0.6)); col2=tuple(int(BG[k]+(GOLD[k]-BG[k])*a2) for k in range(3))
        for ln in wrap(d,fr,fPhrase,900): d.text((90,ty+50),ln,font=fPhrase,fill=col2); ty+=56
        # subtitles
        if not narr: cues=[(0.9,dur-0.2,lines[:3])]
        for c0,c1,c in cues:
            if c0<=t<c1:
                hgt=len(c)*56+40; y0=1700-hgt//2
                d.rounded_rectangle((60,y0,W-60,y0+hgt),18,fill=(0,0,0) if narr else (28,23,12),outline=(50,44,30) if narr else GOLD,width=2)
                yy=y0+20
                for ln in c:
                    d.text(((W-d.textlength(ln,font=fSub))/2,yy),ln,font=fSub,fill=WHITE if narr else GOLD); yy+=56
        # scene fades
        fade=min(1,t/0.35,(dur-t)/0.3)
        if fade<1: im=Image.blend(Image.new("RGB",(W,H),BG),im,max(0,fade))
        ff.stdin.write(im.tobytes())
ff.stdin.close(); ff.wait(); print("ok")
