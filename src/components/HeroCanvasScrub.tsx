"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  Palette,
  Layers,
  Bot,
  TrendingUp,
  Zap,
} from "lucide-react";

const HERO_SEGMENTS = [
  {
    id: "hero1",
    count: 60,
    label: "01. Escala",
    color: "#6366f1",
    badgeIcon: Zap,
    title: "Preparamos seu negócio pra ",
    highlight: "escalar no digital.",
    subtitle: "Arquitetura moderna, estética autoral e inteligência em dados para marcas que exigem supremacia.",
    isFirst: true,
  },
  {
    id: "hero2",
    count: 64,
    label: "02. Arte",
    color: "#ec4899",
    badgeIcon: Palette,
    title: "",
    highlight: "Criamos sua arte.",
    subtitle: "Branding autoral, design memorável e peças visuais que elevam o valor percebido da sua marca.",
  },
  {
    id: "hero3",
    count: 60,
    label: "03. Site",
    color: "#10b981",
    badgeIcon: Layers,
    title: "",
    highlight: "Desenvolvemos seu site.",
    subtitle: "Velocidade instantânea, pontuação 100/100 no Google e experiências digitais imersivas.",
  },
  {
    id: "hero4",
    count: 60,
    label: "04. Automação",
    color: "#00f2fe",
    badgeIcon: Bot,
    title: "",
    highlight: "Automatizamos seus processos.",
    subtitle: "Agentes inteligentes de IA e fluxos contínuos eliminando gargalos operacionais 24 horas por dia.",
  },
  {
    id: "hero5",
    count: 76,
    label: "05. Tráfego",
    color: "#facc15",
    badgeIcon: TrendingUp,
    title: "Impulsionamos seu negócio ",
    highlight: "através do tráfego pago.",
    subtitle: "Campanhas orientadas a dados e crescimento previsível de receita.",
    welcome: "Bem-vindo à KameeTech.",
  },
];

export default function HeroCanvasScrub() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // References to the 5 overlay cards
  const textRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [activeSegment, setActiveSegment] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch {}
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Load arrays for each of the 5 heroes
    const imagesByHero: HTMLImageElement[][] = [[], [], [], [], []];
    let totalLoaded = 0;
    const totalFrames = HERO_SEGMENTS.reduce((acc, seg) => acc + seg.count, 0);

    const drawFrame = (heroIdx: number, frameIdx: number) => {
      const arr = imagesByHero[heroIdx];
      if (!arr || !arr[frameIdx] || !arr[frameIdx].complete) return;
      const img = arr[frameIdx];

      const width = canvas.width;
      const height = canvas.height;

      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShiftX = (width - img.width * ratio) / 2;
      const centerShiftY = (height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );

      // Contrast & vignette
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.25,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "rgba(5, 5, 8, 0.12)");
      gradient.addColorStop(0.7, "rgba(5, 5, 8, 0.55)");
      gradient.addColorStop(1, "rgba(5, 5, 8, 0.95)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      drawFrame(0, 0);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Preload all frames for the 5 videos
    HERO_SEGMENTS.forEach((seg, sIdx) => {
      for (let i = 1; i <= seg.count; i++) {
        const img = new Image();
        const numStr = String(i).padStart(4, "0");
        img.src = `/frames/${seg.id}/frame_${numStr}.webp`;

        img.onload = () => {
          if (!isMounted) return;
          totalLoaded++;
          const progress = Math.round((totalLoaded / totalFrames) * 100);
          setLoadProgress(progress);

          if (totalLoaded === 1) {
            drawFrame(0, 0);
          }
          if (totalLoaded >= totalFrames) {
            setIsLoaded(true);
            drawFrame(0, 0);
          }
        };

        imagesByHero[sIdx].push(img);
      }
    });

    // Master ScrollTrigger timeline linking the 5 video cuts
    const ctxTimeline = gsap.context(() => {
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7200", // More scroll distance for 60 frames — each segment gets 1440px
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            const heroIdx = Math.min(4, Math.floor(p * 5));
            setActiveSegment(heroIdx);

            const segStart = heroIdx * 0.2;
            const localP = Math.min(1, Math.max(0, (p - segStart) / 0.2));
            const frameCount = HERO_SEGMENTS[heroIdx].count;
            const frameIdx = Math.min(frameCount - 1, Math.floor(localP * frameCount));

            drawFrame(heroIdx, frameIdx);
          },
        },
      });

      // ── TEXT TIMING GUIDE (FLUIDO + CROSSFADE) ──────────────────────────
      // Cada segmento 20% scroll. Crossfade de 0.04 (~288px) entre textos para
      // NUNCA ter "texto antigo já sumiu e novo não chegou". Duração 0.06
      // entra/sai com scrub 0.8 → sensação de continuidade natural do scroll.
      // ÚLTIMO SEGMENTO (tráfego amarelo) entra 2% MAIS CEDO (0.780 vs 0.800)
      // para garantir tempo suficiente visível antes de descer p/ #services.
      // ─────────────────────────────────────────────────────────────────────

      // Seg 0 — Hero 1 Escala (0.000 entra) → sai em 0.190 com duração 0.06 → termina 0.196
      masterTimeline
        .fromTo(
          textRefs[0].current,
          { opacity: 0, y: 28, scale: 1.045 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.06 },
          0.000
        )
        .to(
          textRefs[0].current,
          { opacity: 0, y: -20, scale: 0.965, ease: "power2.in", duration: 0.06 },
          0.130
        );

      // Seg 1 — Hero 2 Arte (entra 0.190 antes do anterior terminar → crossfade)
      masterTimeline
        .fromTo(
          textRefs[1].current,
          { opacity: 0, y: 32, scale: 1.045 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.03 },
          0.200
        )
        .to(
          textRefs[1].current,
          { opacity: 0, y: -20, scale: 0.965, ease: "power2.in", duration: 0.06 },
          0.280
        );

      // Seg 2 — Hero 3 Site 🟢 CAMALEÃO VERDE (entra 0.386)
      masterTimeline
        .fromTo(
          textRefs[2].current,
          { opacity: 0, y: 32, scale: 1.045 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.06 },
          0.320
        )
        .to(
          textRefs[2].current,
          { opacity: 0, y: -20, scale: 0.965, ease: "power2.in", duration: 0.06 },
          0.440
        );

      // Seg 3 — Hero 4 Automação 🔵 AZUL (entra 0.586)
      masterTimeline
        .fromTo(
          textRefs[3].current,
          { opacity: 0, y: 32, scale: 1.045 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.06 },
          0.490
        )
        .to(
          textRefs[3].current,
          { opacity: 0, y: -20, scale: 0.965, ease: "power2.in", duration: 0.06 },
          0.600
        );

      // Seg 4 — Hero 5 Tráfego 🟡 AMARELO · ENTRA MAIS CEDO (0.760) para aparecer tempo suficiente
      // AGORA TEM SAÍDA TAMBÉM (igual os outros) → fácil ajuste manual: mude 0.760 (entra) / 0.960 (sai)
      masterTimeline
        .fromTo(
          textRefs[4].current,
          { opacity: 0, y: 32, scale: 1.045 },
          { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.06 },
          0.660
        )
        .to(
          textRefs[4].current,
          { opacity: 0, y: -20, scale: 0.965, ease: "power2.in", duration: 0.06 },
          0.780
        );
    }, containerRef);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      ctxTimeline.revert();
    };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050508",
      }}
    >
      {/* Seamless scrub canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 1,
        }}
      />

      {/* Progress pill if loading */}
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 25,
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.5rem 1.25rem",
            borderRadius: "9999px",
            background: "rgba(10, 10, 18, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${loadProgress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #00f2fe, #6366f1)",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "0.75rem",
              color: "#9496a8",
              fontFamily: "var(--font-mono)",
            }}
          >
            Sincronizando {loadProgress}%
          </span>
        </div>
      )}

      {/* ============================================================ */}
      {/* 5 NARRATIVE CHAPTER OVERLAYS */}
      {/* ============================================================ */}
      {HERO_SEGMENTS.map((seg, idx) => {
        const Icon = seg.badgeIcon;
        return (
          <div
            key={seg.id}
            ref={textRefs[idx]}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "0 1.5rem",
              zIndex: 10,
              opacity: idx === 0 ? 1 : 0,
              pointerEvents: "none",
            }}
          >
            <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
              {/* Badge */}
              <div style={{ marginBottom: "1.25rem" }}>
                <span
                  className="badge-tag"
                  style={{
                    color: seg.color,
                    borderColor: `${seg.color}40`,
                    background: `${seg.color}15`,
                  }}
                >
                  <Icon size={14} />
                  <span>{seg.label}</span>
                </span>
              </div>

              {/* Title */}
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                  fontWeight: 800,
                  lineHeight: 1.06,
                  letterSpacing: "-0.04em",
                  marginBottom: "1.25rem",
                  color: "#ffffff",
                  textWrap: "balance",
                }}
              >
                {seg.title}
                <span
                  style={{
                    color: seg.color,
                    textShadow: `0 0 35px ${seg.color}45`,
                  }}
                >
                  {seg.highlight}
                </span>
              </h2>

              {/* Welcome banner if on segment 5 */}
              {seg.welcome && (
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#fef08a",
                    marginBottom: "1.25rem",
                    textShadow: "0 0 30px rgba(250, 204, 21, 0.4)",
                  }}
                >
                  {seg.welcome}
                </div>
              )}

              {/* Subtitle */}
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(1.05rem, 1.4vw, 1.4rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                  color: "#fafcff",
                  maxWidth: "720px",
                  margin: "0 auto 2rem",
                  lineHeight: 1.5,
                  textShadow: "0 2px 20px rgba(5, 5, 8, 0.85), 0 0 2px rgba(250,252,255,0.2)",
                  WebkitFontSmoothing: "antialiased",
                }}
              >
                {seg.subtitle}
              </p>

              {/* Bottom cue */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.8rem",
                  color: seg.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}
              >
                <span>Role para continuar</span>
                <ArrowDown size={14} color={seg.color} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
