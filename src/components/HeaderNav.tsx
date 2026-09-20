"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          width: "calc(100% - 2rem)",
          maxWidth: "1080px",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="glass-pill"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.6rem 1.25rem",
            backgroundColor: scrolled
              ? "rgba(254, 254, 255, 0.98)"
              : "rgba(254, 254, 255, 0.82)",
            backdropFilter: "blur(24px) saturate(180%)",
            borderColor: scrolled
              ? "rgba(210, 209, 205, 0.6)"
              : "rgba(210, 209, 205, 0.4)",
            boxShadow: "0 4px 20px -2px rgba(8, 16, 61, 0.06)",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.65rem",
              textDecoration: "none",
              color: "#08103D",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "8px",
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
                width={28}
                height={28}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                priority
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                className="font-display"
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#08103D",
                }}
              >
                Kamee<span style={{ color: "#FF5A36" }}>Tech</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.75rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: "#636B97",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#08103D")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#636B97")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Status Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
            <div
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.75rem",
                borderRadius: "9999px",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                fontSize: "0.75rem",
                color: "#10b981",
                fontWeight: 500,
              }}
              className="status-pill"
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
              <span>Vagas Q4</span>
            </div>

            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.45rem 1.1rem",
                borderRadius: "9999px",
                backgroundColor: "#FF5A36",
                color: "#ffffff",
                fontSize: "0.825rem",
                fontWeight: 600,
                border: "1px solid rgba(255, 90, 54, 0.2)",
                boxShadow: "0 6px 18px -4px rgba(255, 90, 54, 0.4)",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                cursor: "pointer",
              }}
              className="header-cta-desktop"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 10px 28px -6px rgba(255, 90, 54, 0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 18px -4px rgba(255, 90, 54, 0.4)";
              }}
            >
              <span>Iniciar Projeto</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile menu trigger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="kameetech-mobile-menu"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,90,54,0.08)",
                border: "1px solid rgba(255,90,54,0.25)",
                color: "#08103D",
                cursor: "pointer",
                padding: "0.45rem 0.55rem",
                borderRadius: "9999px",
                width: "36px",
                height: "36px",
                minWidth: "36px",
                minHeight: "36px",
                margin: "0",
              }}
              className="mobile-burger"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X size={18} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2.2} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="kameetech-mobile-menu"
            role="menu"
            aria-label="Navegação mobile"
            className="glass-card mobile-menu-dropdown"
            style={{
              position: "absolute",
              top: "calc(100% + 0.5rem)",
              left: "0",
              right: "0",
              zIndex: 55,
              padding: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
              borderRadius: "18px",
              backgroundColor: "rgba(255, 255, 255, 0.98)",
              backdropFilter: "blur(24px) saturate(180%)",
              border: "1px solid rgba(210, 209, 205, 0.6)",
              boxShadow: "0 20px 60px -16px rgba(8, 16, 61, 0.28)",
            }}
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                role="menuitem"
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "#08103D",
                  fontSize: "1rem",
                  fontWeight: 500,
                  padding: "0.8rem 0.5rem",
                  borderBottom: "1px solid rgba(210, 209, 205, 0.45)",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              role="menuitem"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.45rem",
                padding: "0.85rem 1.2rem",
                marginTop: "0.5rem",
                borderRadius: "9999px",
                backgroundColor: "#FF5A36",
                color: "#ffffff",
                fontSize: "0.9rem",
                fontWeight: 600,
                border: "1px solid rgba(255, 90, 54, 0.2)",
                boxShadow: "0 8px 24px -6px rgba(255, 90, 54, 0.55)",
                textDecoration: "none",
              }}
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        )}
      </header>

      <style jsx global>{`
        @media (max-width: 719px) {
          .desktop-nav {
            display: none !important;
          }
          .status-pill {
            display: none !important;
          }
          .header-cta-desktop {
            display: none !important;
          }
          .mobile-burger {
            display: inline-flex !important;
          }
        }
        @media (min-width: 720px) {
          .desktop-nav {
            display: flex !important;
          }
          .status-pill {
            display: inline-flex !important;
          }
          .header-cta-desktop {
            display: inline-flex !important;
          }
          .mobile-burger {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .glass-pill {
            padding-left: 0.9rem !important;
            padding-right: 0.9rem !important;
          }
        }
      `}</style>
    </>
  );
}
