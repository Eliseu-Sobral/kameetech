"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import {
  Eye,
  Crown,
  Sparkles,
  Layers,
  Award,
  Gem,
} from "lucide-react";

export default function ServiceBranding() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="branding"
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
              01 · Arte e Identidade Visual
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
            Marca que parece{" "}
            <span style={{ color: "#FF5A36" }}>mais cara</span> que a
            concorrência, antes do cliente abrir o site.
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
              color: "#3A406B",
              lineHeight: 1.6,
              maxWidth: "620px",
            }}
          >
            Identidade visual premium, artes de campanha e sistema de design
            que elevam o valor percebido da sua empresa na primeira impressão.
          </p>
        </div>
        <div
          ref={containerRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.75rem",
          }}
        >
          {/* Featured Moodboard / Typography Card (Span 7) */}
          <div
            className="glass-card"
            style={{
              gridColumn: "span 12",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              background:
                "linear-gradient(135deg, rgba(255, 250, 248, 0.85) 0%, rgba(254, 254, 255, 0.98) 100%)",
              borderColor: "rgba(255, 90, 54, 0.2)",
            }}
            className-responsive="card-col-7"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "2.5rem",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Gem size={20} color="#FF5A36" />
                  <span style={{ fontWeight: 600, color: "#08103D", fontSize: "0.95rem" }}>
                    Anatomia de Valor Percebido
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    color: "#FF5A36",
                    letterSpacing: "0.08em",
                  }}
                >
                  PREMIUM BENCHMARK
                </span>
              </div>

              <div
                style={{
                  border: "1px solid rgba(210, 209, 205, 0.7)",
                  borderRadius: "16px",
                  padding: "2rem",
                  background: "rgba(255, 255, 255, 0.75)",
                  marginBottom: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "180px",
                    height: "180px",
                    background: "radial-gradient(circle, rgba(255, 90, 54, 0.12) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                />
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#636B97",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                  }}
                >
                  Direção Tipográfica Autoral
                </div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 800,
                    color: "#08103D",
                    letterSpacing: "-0.04em",
                    lineHeight: 1.15,
                  }}
                >
                  Sua marca parece barata? Então o cliente NEGOCIA antes mesmo de te conhecer.<br />
                  Marcas com estética premium{" "}
                  <strong style={{ color: "#FF5A36" }}>cobram 3.8 a 5x mais</strong> e fecham mais rápido.
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1.5rem",
                    marginTop: "1.5rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid rgba(210, 209, 205, 0.5)",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.7rem", color: "#636B97" }}>HARMONIA</span>
                    <p style={{ fontSize: "0.95rem", color: "#08103D", fontWeight: 600 }}>Proporção Áurea 1:1.618</p>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.7rem", color: "#636B97" }}>CONTRASTE</span>
                    <p style={{ fontSize: "0.95rem", color: "#08103D", fontWeight: 600 }}>Off-White & Navy Lumens</p>
                  </div>
                  <div>
                    <span style={{ fontSize: "0.7rem", color: "#636B97" }}>RETENÇÃO</span>
                    <p style={{ fontSize: "0.95rem", color: "#08103D", fontWeight: 600 }}>+420% Recordação de Marca</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(210, 209, 205, 0.5)",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "0.9rem", color: "#3A406B", maxWidth: "520px" }}>
                Marca que parece <strong>mais cara que a concorrência</strong> antes do cliente abrir o site.
              </span>
              <Award size={20} color="#FF5A36" />
            </div>
          </div>

          {/* Core Deliverables Grid (Span 5) */}
          <div
            style={{
              gridColumn: "span 12",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
            className-responsive="card-col-5"
          >
            {[
              {
                num: "01",
                title: "Identidade Visual & Naming",
                desc: "Criação de logotipos autorais, sistemas modulares, paleta cromática de alta densidade emocional e manual de marca definitivo.",
                icon: Crown,
              },
              {
                num: "02",
                title: "Design Systems para Produtos",
                desc: "Bibliotecas completas de UI no Figma com componentes, tokens, estados interativos e sincronia direta com o time de engenharia.",
                icon: Layers,
              },
              {
                num: "03",
                title: "Artes & Direção de Campanhas",
                desc: "Key visuals cinematográficos, material publicitário, landing visual assets e peças desenhadas para performance real.",
                icon: Sparkles,
              },
              {
                num: "04",
                title: "Branding Multi-Touchpoint",
                desc: "Padronização visual em cada ponto de contato: embalagens, apresentações de pitch, papelaria e presença digital imersiva.",
                icon: Eye,
              },
            ].map((item) => (
              <div
                key={item.num}
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
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                      flexWrap: "wrap",
                      gap: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        color: "#FF5A36",
                        fontWeight: 700,
                      }}
                    >
                      {item.num}
                    </span>
                    <item.icon size={18} color="#FF5A36" />
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#08103D",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#3A406B",
                      lineHeight: 1.55,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .card-col-7 {
            grid-column: span 7 !important;
          }
          .card-col-5 {
            grid-column: span 5 !important;
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
