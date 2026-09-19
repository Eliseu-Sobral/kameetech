"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Gauge,
  Zap,
  Layers,
  CheckCircle2,
  MonitorCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceWebsites() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const gaugeCircleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (gaugeCircleRef.current) {
        gsap.fromTo(
          gaugeCircleRef.current,
          { strokeDashoffset: 283 },
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gaugeCircleRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="websites"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid rgba(210, 209, 205, 0.6)",
      }}
    >
      <div className="section-wrapper" style={{ paddingTop: "4rem" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#FF5A36",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              02 · Sites de Alta Performance
            </span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "#08103D",
              marginBottom: "1.25rem",
              maxWidth: "780px",
            }}
          >
            Máquina de conversão carregada em{" "}
            <span style={{ color: "#FF5A36" }}>0,4s</span>, antes da
            concorrência terminar de renderizar.
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
              color: "#3A406B",
              lineHeight: 1.6,
              maxWidth: "620px",
            }}
          >
            Sites de ultra velocidade, responsivos e otimizados para SEO e
            conversão, com Core Web Vitals 100/100 no Lighthouse.
          </p>
        </div>
        <div
          ref={cardRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Main Visualizer: Lighthouse 100/100 Dial & Core Web Vitals */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gridColumn: "span 1",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(16, 185, 129, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                    }}
                  >
                    <Gauge size={18} color="#10b981" />
                  </div>
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#08103D",
                    }}
                  >
                    Google Lighthouse Benchmark
                  </span>
                </div>
                <span
                  style={{
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    fontSize: "0.75rem",
                    color: "#10b981",
                    fontWeight: 600,
                  }}
                >
                  AUDIT GRADE A+
                </span>
              </div>

              {/* Dial Gauge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "1.5rem 0",
                  position: "relative",
                }}
              >
                <svg width="180" height="180" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="rgba(8, 16, 61, 0.08)"
                    strokeWidth="7"
                  />
                  <circle
                    ref={gaugeCircleRef}
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="url(#accentGradientWeb)"
                    strokeWidth="7"
                    strokeDasharray="283"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                  />
                  <defs>
                    <linearGradient id="accentGradientWeb" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#FF5A36" />
                    </linearGradient>
                  </defs>
                </svg>

                <div
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="font-display"
                    style={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      color: "#08103D",
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                    }}
                  >
                    100
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#10b981",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    PERFORMANCE
                  </span>
                </div>
              </div>

              {/* Core Web Vitals breakdown */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
                  gap: "0.75rem",
                  marginTop: "2rem",
                }}
              >
                {[
                  { metric: "LCP", val: "0.38s", status: "Excelente" },
                  { metric: "INP", val: "2ms", status: "Instantâneo" },
                  { metric: "CLS", val: "0.000", status: "Zero Shift" },
                ].map((item) => (
                  <div
                    key={item.metric}
                    style={{
                      padding: "0.75rem 0.5rem",
                      borderRadius: "12px",
                      background: "rgba(248, 248, 252, 0.8)",
                      border: "1px solid rgba(210, 209, 205, 0.6)",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "#636B97",
                        fontWeight: 600,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {item.metric}
                    </div>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#10b981",
                        margin: "0.2rem 0",
                      }}
                    >
                      {item.val}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#10b981",
                        fontWeight: 500,
                      }}
                    >
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(210, 209, 205, 0.5)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#3A406B",
                fontSize: "0.85rem",
                flexWrap: "wrap",
              }}
            >
              <CheckCircle2 size={16} color="#10b981" />
              <span>Máquina de conversão carregada em 0,4s — antes da concorrência terminar de renderizar.</span>
            </div>
          </div>

          {/* Pillars of Web Architecture */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: Zap,
                title: "Carregamento Instantâneo & Edge First",
                desc: "Páginas pré-renderizadas na borda global, garantindo tempo de resposta sub-segundo em qualquer continente e Core Web Vitals A+ padrão.",
                tags: ["Next.js App Router", "Edge Runtime", "HTTP/3"],
              },
              {
                icon: Layers,
                title: "Experiências Imersivas & Motion Fluido",
                desc: "Animações aceleradas por GPU, scroll storytelling a 60 FPS com GSAP e microinterações táteis que aumentam a permanência e o recall.",
                tags: ["GSAP ScrollTrigger", "Motion UI", "60 FPS"],
              },
              {
                icon: MonitorCheck,
                title: "Engenharia de Conversão (CRO)",
                desc: "Arquitetura desenhada cientificamente para guiar a atenção visual aos pontos críticos e capturar leads de alto valor com menor fricção.",
                tags: ["A/B Testing Ready", "Micro-Funnels", "Analytics"],
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1.25rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(16, 185, 129, 0.1)",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <pillar.icon size={20} color="#10b981" />
                </div>
                <div style={{ flex: 1, minWidth: "220px" }}>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#08103D",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#3A406B",
                      lineHeight: 1.55,
                      marginBottom: "0.85rem",
                    }}
                  >
                    {pillar.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.72rem",
                          fontFamily: "var(--font-mono)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "6px",
                          background: "rgba(8, 16, 61, 0.04)",
                          color: "#08103D",
                          border: "1px solid rgba(210, 209, 205, 0.6)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
