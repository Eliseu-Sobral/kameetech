"use client";

import { useEffect, useRef } from "react";

type ServiceCard = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  items: { text: string; wip?: boolean }[];
  metric: string;
  tech: string[];
};

const CARDS: ServiceCard[] = [
  {
    id: "branding",
    badge: "Criamos sua arte.",
    title: "Branding Autoral & Design de Alto Valor",
    subtitle:
      "Peças visuais e identidade estratégica para elevar o valor percebido da sua marca.",
    items: [
      { text: "Identidade Visual Autoral & Manual de Marca" },
      { text: "UI/UX Design Imersivo focado em Conversão" },
      { text: "Material Institucional & Apresentações B2B" },
    ],
    metric:
      "Posicionamento de mercado com aumento imediato da percepção de valor corporativo.",
    tech: ["Figma", "Adobe CC", "Blender 3D", "Design Systems"],
  },
  {
    id: "websites",
    badge: "Desenvolvemos seu site.",
    title: "Web Experiences de Altíssima Performance",
    subtitle:
      "Velocidade instantânea, pontuação 100/100 no Google e experiências digitais imersivas.",
    items: [
      { text: "Performance Core Web Vitals (Carregamento Sub-segundo)" },
      { text: "Frontend Sob Medida com Canvas, WebGL & Animations" },
      { text: "SEO Técnico Nativo para Topo dos Buscadores" },
    ],
    metric: "Pontuação 100/100 no Google Lighthouse e conversão fluida.",
    tech: ["Vanilla JS", "Three.js", "HTML5/CSS3", "WebGL", "Vite"],
  },
  {
    id: "automation",
    badge: "Automatizamos seus processos.",
    title: "Automação Operacional & Inteligência Artificial",
    subtitle:
      "Agentes inteligentes de IA e fluxos contínuos eliminando gargalos operacionais 24/7.",
    items: [
      { text: "Agentes de IA Personalizados para Atendimento e Triagem" },
      {
        text: "Sistema Proprio para Auxiliar no Marketing da Empresa",
        wip: true,
      },
      { text: "Workflows Automatizados & Redução de Erros Operacionais" },
    ],
    metric: "Operação 24/7 automatizada e escala sem aumento de headcount.",
    tech: ["Python", "OpenAI/LLMs", "n8n", "Supabase", "Docker"],
  },
  {
    id: "traffic",
    badge: "Impulsionamos seu negócio através do tráfego pago.",
    title: "Mídia Performance & Aquisição B2B",
    subtitle:
      "Campanhas orientadas a dados e crescimento previsível de receita.",
    items: [
      { text: "Gestão Estratégica em Google Ads, LinkedIn Ads & Meta Ads" },
      { text: "Atribuição de Dados & Analytics de Ponta a Ponta" },
      { text: "Otimização Contínua de Funil e Landing Pages" },
    ],
    metric: "Crescimento previsível de pipeline e ROAS positivo.",
    tech: ["Google Tag Manager", "GA4", "Looker Studio", "Pixel Tracking"],
  },
];

function CheckIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ServiceHorizontalScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    type Tilt = {
      curRX: number;
      curRY: number;
      curScale: number;
      tgtRX: number;
      tgtRY: number;
      tgtScale: number;
    };
    const tilts = new Map<HTMLDivElement, Tilt>();
    for (let i = 0; i < cards.length; i++) {
      tilts.set(cards[i], {
        curRX: 0, curRY: 0, curScale: 1,
        tgtRX: 0, tgtRY: 0, tgtScale: 1,
      });
    }

    const MAX_DEG = prefersReduced ? 0 : 12;
    const MAX_SCALE = prefersReduced ? 1 : 1.035;
    const MAX_GLOW = prefersReduced ? 0 : 0.45;

    let raf = 0;
    const tick = () => {
      for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        const t = tilts.get(c);
        if (!t) continue;
        t.curRX += (t.tgtRX - t.curRX) * 0.16;
        t.curRY += (t.tgtRY - t.curRY) * 0.16;
        t.curScale += (t.tgtScale - t.curScale) * 0.16;
        const rx = t.curRX.toFixed(3);
        const ry = t.curRY.toFixed(3);
        const s = t.curScale.toFixed(4);
        c.style.transform =
          `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${s})`;
        const gx = (0.5 + (t.curRY / (MAX_DEG || 1)) * -0.5) * 100;
        const gy = (0.5 + (t.curRX / (MAX_DEG || 1)) * -0.5) * 100;
        const gi = (
          0.08 +
          Math.min(
            MAX_GLOW,
            (Math.abs(t.curRY) + Math.abs(t.curRX)) / (MAX_DEG || 1) * 0.22
          )
        ).toFixed(3);
        c.style.setProperty("--ks-mx", `${gx.toFixed(2)}%`);
        c.style.setProperty("--ks-my", `${gy.toFixed(2)}%`);
        c.style.setProperty("--ks-glow-intensity", gi);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const disposers: (() => void)[] = [];
    for (let i = 0; i < cards.length; i++) {
      const c = cards[i];
      const t = tilts.get(c)!;
      const onEnter = () => {
        t.tgtScale = MAX_SCALE;
      };
      const onMove = (e: MouseEvent) => {
        const rect = c.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const nx = Math.min(Math.max(x, 0), 1);
        const ny = Math.min(Math.max(y, 0), 1);
        t.tgtRY = (nx - 0.5) * 2 * MAX_DEG;
        t.tgtRX = (0.5 - ny) * 2 * MAX_DEG;
      };
      const onLeave = () => {
        t.tgtRX = 0;
        t.tgtRY = 0;
        t.tgtScale = 1;
      };
      const onTouchMove = (e: TouchEvent) => {
        if (e.touches.length === 0) return;
        const touch = e.touches[0];
        const rect = c.getBoundingClientRect();
        const x = (touch.clientX - rect.left) / rect.width;
        const y = (touch.clientY - rect.top) / rect.height;
        const nx = Math.min(Math.max(x, 0), 1);
        const ny = Math.min(Math.max(y, 0), 1);
        t.tgtRY = (nx - 0.5) * 2 * MAX_DEG;
        t.tgtRX = (0.5 - ny) * 2 * MAX_DEG;
      };
      const onTouchEnd = () => {
        t.tgtRX = 0;
        t.tgtRY = 0;
        t.tgtScale = 1;
      };
      c.addEventListener("mouseenter", onEnter, { passive: true });
      c.addEventListener("mousemove", onMove, { passive: true });
      c.addEventListener("mouseleave", onLeave, { passive: true });
      c.addEventListener("touchmove", onTouchMove, { passive: true });
      c.addEventListener("touchend", onTouchEnd, { passive: true });
      c.addEventListener("touchcancel", onTouchEnd, { passive: true });
      disposers.push(() => {
        c.removeEventListener("mouseenter", onEnter);
        c.removeEventListener("mousemove", onMove);
        c.removeEventListener("mouseleave", onLeave);
        c.removeEventListener("touchmove", onTouchMove);
        c.removeEventListener("touchend", onTouchEnd);
        c.removeEventListener("touchcancel", onTouchEnd);
      });
    }

    return () => {
      cancelAnimationFrame(raf);
      for (let i = 0; i < disposers.length; i++) disposers[i]();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="ks-section"
    >
      <div className="ks-pin-static">
        <div ref={headRef} className="ks-head">
          <p className="ks-eyebrow">01 · Soluções & Serviços</p>
          <h2 className="ks-title">
            Tudo o que sua empresa precisa para{" "}
            <span className="accent">escalar digitalmente</span>, em só parceiro.
          </h2>
          <p className="ks-sub">
            Da arte ao tráfego pago, passando por sites de performance e
            automações com IA. Passe o mouse ou o dedo nos cards e veja-os
            reagir em 3D.
          </p>
        </div>

        <div className="ks-grid">
          {CARDS.map((card, idx) => (
            <div
              key={card.id}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="ks-card"
              data-card={card.id}
            >
              <span className="ks-badge">{card.badge}</span>

              <h3 className="ks-card-title">{card.title}</h3>
              <p className="ks-card-sub">{card.subtitle}</p>

              <ul className="ks-items">
                {card.items.map((it, i) => (
                  <li key={i}>
                    <CheckIcon size={16} />
                    <span>
                      {it.text}
                      {it.wip && (
                        <span className="ks-tag-dev">
                          <span className="dot" aria-hidden /> Em Desenvolvimento
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="ks-metric">{card.metric}</div>

              <div className="ks-tech">
                {card.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
