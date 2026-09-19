"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BarChart3,
  ShieldCheck,
  Flame,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePaidTraffic() {
  const sectionRef = useRef<HTMLElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const trendLineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        chartRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      if (trendLineRef.current) {
        const length = trendLineRef.current.getTotalLength();
        gsap.set(trendLineRef.current, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(trendLineRef.current, {
          strokeDashoffset: 0,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: trendLineRef.current,
            start: "top 75%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="traffic"
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
              04 · Tráfego Pago & Escala
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
            Cada R$ investido volta{" "}
            <span style={{ color: "#FF5A36" }}>R$14,8+</span> em ROAS medido e
            comprovado.
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
              color: "#3A406B",
              lineHeight: 1.6,
              maxWidth: "620px",
            }}
          >
            Gestão de campanhas no Meta Ads, Google Ads e LinkedIn Ads com
            otimização diária e foco exclusivo em retorno financeiro
            mensurável.
          </p>
        </div>
        <div
          ref={chartRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2rem",
          }}
        >
          {/* Main Chart Card (Span 8) */}
          <div
            className="glass-card"
            style={{
              gridColumn: "span 12",
              padding: "2.5rem",
              background:
                "linear-gradient(135deg, rgba(255, 250, 248, 0.8) 0%, rgba(254, 254, 255, 0.98) 100%)",
              borderColor: "rgba(255, 90, 54, 0.2)",
            }}
            className-responsive="card-col-8"
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#636B97",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  Distribuição Inteligente de Capital — Curva de Escala
                </span>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 800,
                    color: "#08103D",
                    letterSpacing: "-0.02em",
                    marginTop: "0.2rem",
                    lineHeight: 1.2,
                    maxWidth: "640px",
                  }}
                >
                  Cada R$ investido volta{" "}
                  <span style={{ color: "#FF5A36" }}>R$ 14,8+</span> em ROAS medido.
                  Sem achismo, sem agência "artesanal".
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["Meta Ads", "Google PMax", "TikTok", "LinkedIn"].map((channel) => (
                  <span
                    key={channel}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      background: "rgba(8, 16, 61, 0.04)",
                      border: "1px solid rgba(210, 209, 205, 0.6)",
                      color: "#08103D",
                      fontWeight: 500,
                    }}
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>

            {/* Vector Growth Curve */}
            <div
              style={{
                position: "relative",
                height: "220px",
                width: "100%",
                marginBottom: "2rem",
              }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 600 200"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <linearGradient id="chartGradientYellow" x1="0%" y1="0%" x2="0%" y2="1">
                    <stop offset="0%" stopColor="#FF5A36" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#FF5A36" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGradYellow" x1="0%" y1="0%" x2="1" y2="0">
                    <stop offset="0%" stopColor="#08103D" />
                    <stop offset="50%" stopColor="#FF5A36" />
                    <stop offset="100%" stopColor="#C7F04A" />
                  </linearGradient>
                </defs>

                {[40, 90, 140, 180].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="600"
                    y2={y}
                    stroke="rgba(8, 16, 61, 0.06)"
                    strokeDasharray="4 4"
                  />
                ))}

                <path
                  d="M 0,170 Q 150,160 250,110 T 450,50 T 600,20 L 600,200 L 0,200 Z"
                  fill="url(#chartGradientYellow)"
                />

                <path
                  ref={trendLineRef}
                  d="M 0,170 Q 150,160 250,110 T 450,50 T 600,20"
                  fill="none"
                  stroke="url(#lineGradYellow)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                <circle cx="600" cy="20" r="6" fill="#FF5A36" />
                <circle
                  cx="600"
                  cy="20"
                  r="12"
                  fill="none"
                  stroke="#FF5A36"
                  strokeOpacity="0.35"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Bottom KPI Bar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(210, 209, 205, 0.5)",
              }}
            >
              <div>
                <span style={{ fontSize: "0.72rem", color: "#636B97" }}>CAC REDUZIDO</span>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#10b981" }}>-42,4%</p>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "#636B97" }}>TAXA DE CONVERSÃO</span>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#FF5A36" }}>4,85%</p>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "#636B97" }}>RECEITA ATRIBUÍDA</span>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#08103D" }}>R$ 48,6M+</p>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "#636B97" }}>EXPANSÃO LTV</span>
                <p style={{ fontSize: "1.2rem", fontWeight: 700, color: "#3A406B" }}>+230%</p>
              </div>
            </div>
          </div>

          {/* Core Framework Pillars (Span 4) */}
          <div
            style={{
              gridColumn: "span 12",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
            className-responsive="card-col-4"
          >
            {[
              {
                title: "Engenharia de Criativos de Alto Desempenho",
                desc: "Produção contínua de criativos cinematográficos desenhados com base em padrões de retenção, hook de 3s e psicologia de consumo.",
                icon: Flame,
              },
              {
                title: "Atribuição Server-Side & CAPI",
                desc: "Rastreamento avançado de conversões contornando bloqueios do iOS, alimentando algoritmos com dados puros e attribution real.",
                icon: ShieldCheck,
              },
              {
                title: "Testes A/B Multivariados Diários",
                desc: "Otimização contínua de landing, copies, CTAs e ofertas para elevar ROAS, ticket médio e margem líquida operacional.",
                icon: BarChart3,
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card"
                style={{
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: "rgba(255, 90, 54, 0.1)",
                      border: "1px solid rgba(255, 90, 54, 0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <pillar.icon size={18} color="#FF5A36" />
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#08103D",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#3A406B",
                      lineHeight: 1.5,
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .card-col-8 {
            grid-column: span 8 !important;
          }
          .card-col-4 {
            grid-column: span 4 !important;
          }
        }
      `}</style>
    </section>
  );
}
