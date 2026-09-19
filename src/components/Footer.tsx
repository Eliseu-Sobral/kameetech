"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid rgba(210, 209, 205, 0.7)",
        backgroundColor: "#F7F7FB",
        padding: "5rem 2rem 3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "3.5rem",
        }}
      >
        {/* Top Split */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2.5rem",
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: "420px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/logoatt.png"
                  alt="KameeTech"
                  width={32}
                  height={32}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
              <span
                className="font-display"
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  color: "#08103D",
                }}
              >
                Kamee<span style={{ color: "#FF5A36" }}>Tech</span>
              </span>
            </div>

            <p
              style={{
                fontSize: "0.925rem",
                color: "#3A406B",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Agência digital de alta performance. Desenvolvemos sites de
              velocidade instantânea, identidades visuais de luxo, automações
              inteligentes e tração escalável de faturamento.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.4rem 0.85rem",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                fontSize: "0.75rem",
                color: "#10b981",
                fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#10b981",
                  boxShadow: "0 0 8px #10b981",
                }}
              />
              <span>Disponibilidade: 2 vagas estratégicas para Q4</span>
            </div>
          </div>

          {/* Quick Links Nav */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "2.5rem",
              flex: 1,
              maxWidth: "600px",
            }}
          >
            <div>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#08103D",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}
              >
                Soluções
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Nossas Soluções", href: "#services" },
                  { label: "Solicitar Orçamento", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "#636B97",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#08103D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#636B97")}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#08103D",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}
              >
                KameeTech
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Manifesto", href: "#hero" },
                  { label: "Serviços", href: "#services" },
                  { label: "Diagnóstico", href: "#contact" },
                  { label: "Contato WhatsApp", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      fontSize: "0.875rem",
                      color: "#636B97",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#08103D")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#636B97")}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(210, 209, 205, 0.6)",
            fontSize: "0.8rem",
            color: "#64748b",
          }}
        >
          <div>
            © 2026 KameeTech Digital Engineering. Todos os direitos reservados.
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontFamily: "var(--font-mono)" }}>
              Crafted with Precision & Awwwards Excellence
            </span>
            <a
              href="#hero"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                color: "#636B97",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#08103D")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#636B97")}
            >
              <span>Topo</span>
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
