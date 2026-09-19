"use client";

import React, { useRef, useState } from "react";
import confetti from "canvas-confetti";
import {
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function MagneticCTA() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Design");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * 0.35;
    const distanceY = (e.clientY - centerY) * 0.35;

    setBtnOffset({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#FF5A36", "#08103D", "#C7F04A", "#10B981"],
      });
    } catch {
      /* safe fallback */
    }
  };

  const openWhatsApp = () => {
    const msg = message.trim() || "Não informado.";
    const text = encodeURIComponent(
      `Olá KameeTech! Tenho interesse no diagnóstico estratégico.\n\n` +
        `📋 Nome: ${name || "Não informado"}\n` +
        `📱 Telefone: ${phone || "Não informado"}\n` +
        `🎯 Serviço: ${service}\n` +
        `💬 Mensagem: ${msg}`
    );
    window.open(`https://wa.me/5511958629209?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        borderTop: "1px solid rgba(210, 209, 205, 0.6)",
        background:
          "linear-gradient(180deg, rgba(247,247,251,1) 0%, rgba(254,254,255,1) 100%)",
        paddingTop: "clamp(4rem, 7vw, 7rem)",
        paddingBottom: "clamp(5rem, 8vw, 8rem)",
      }}
    >
      <div className="section-wrapper">
        <div
          style={{
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60vw",
            height: "40vh",
            background:
              "radial-gradient(ellipse at center, rgba(255, 90, 54, 0.08) 0%, transparent 70%)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              className="badge-tag"
              style={{
                borderColor: "rgba(255, 90, 54, 0.3)",
                background: "rgba(255, 90, 54, 0.08)",
                color: "#FF5A36",
              }}
            >
              <Sparkles size={14} />
              <span>Diagnóstico Estratégico · Sem Compromisso</span>
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              maxWidth: "880px",
              margin: "0 auto 1.5rem",
              color: "#08103D",
            }}
          >
            Pronto para colocar sua empresa no próximo nível e{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF5A36 0%, #C7F04A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              aumentar seus lucros?
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
              color: "#3A406B",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Analisaremos sua presença atual, arquitetura de conversão e desenharemos
            o plano de ação para sua liderança de mercado.
          </p>
        </div>

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          <div
            className="glass-card"
            style={{
              padding: "clamp(2rem, 4vw, 3.5rem)",
              background: "rgba(255, 255, 255, 0.92)",
              border: "1px solid rgba(210, 209, 205, 0.6)",
              boxShadow: "0 25px 60px -15px rgba(8, 16, 61, 0.12)",
              borderRadius: "24px",
              backdropFilter: "blur(20px)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "3rem 1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <CheckCircle2 size={32} color="#10B981" />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#08103D",
                    marginBottom: "0.75rem",
                  }}
                >
                  Solicitação Recebida com Sucesso!
                </h3>
                <p
                  style={{
                    color: "#3A406B",
                    maxWidth: "480px",
                    marginBottom: "2rem",
                    lineHeight: 1.6,
                  }}
                >
                  Nossa equipe de diretores analisará seu negócio e entrará em contato em até 4 horas úteis.
                </p>
                <button
                  onClick={openWhatsApp}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.85rem 1.75rem",
                    borderRadius: "9999px",
                    background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                    color: "#fff",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <MessageSquare size={18} />
                  <span>Falar Agora no WhatsApp Oficial</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.75rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                        color: "#3A406B",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Seu Nome ou Empresa
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Alexandre Fonseca (Kamee Corp)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1.1rem",
                        borderRadius: "12px",
                        background: "rgba(248, 248, 252, 0.9)",
                        border: "1px solid rgba(210, 209, 205, 0.7)",
                        color: "#08103D",
                        fontSize: "0.95rem",
                        outline: "none",
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#FF5A36";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(255, 90, 54, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(210, 209, 205, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                        color: "#3A406B",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Telefone com DDD
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 98765-4321"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1.1rem",
                        borderRadius: "12px",
                        background: "rgba(248, 248, 252, 0.9)",
                        border: "1px solid rgba(210, 209, 205, 0.7)",
                        color: "#08103D",
                        fontSize: "0.95rem",
                        outline: "none",
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#FF5A36";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(255, 90, 54, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(210, 209, 205, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                        color: "#3A406B",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tipo de Serviço
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1.1rem",
                        borderRadius: "12px",
                        background: "rgba(248, 248, 252, 0.9)",
                        border: "1px solid rgba(210, 209, 205, 0.7)",
                        color: "#08103D",
                        fontSize: "0.95rem",
                        outline: "none",
                        cursor: "pointer",
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#FF5A36";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(255, 90, 54, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(210, 209, 205, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <option value="Design">Design & Branding Autoral</option>
                      <option value="Sites">Sites de Alta Performance</option>
                      <option value="Automação">Automação & Agentes de IA</option>
                      <option value="Tráfego Pago">Tráfego Pago & Aquisição</option>
                    </select>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.825rem",
                        fontWeight: 600,
                        color: "#3A406B",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Mensagem
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Conte rapidamente o que você precisa…"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{
                        width: "100%",
                        minHeight: "110px",
                        resize: "vertical",
                        padding: "0.85rem 1.1rem",
                        borderRadius: "12px",
                        background: "rgba(248, 248, 252, 0.9)",
                        border: "1px solid rgba(210, 209, 205, 0.7)",
                        color: "#08103D",
                        fontSize: "0.95rem",
                        fontFamily: "inherit",
                        lineHeight: 1.5,
                        outline: "none",
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#FF5A36";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(255, 90, 54, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor =
                          "rgba(210, 209, 205, 0.7)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.25rem",
                  }}
                >
                  <button
                    ref={buttonRef}
                    type="submit"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
                      transition:
                        btnOffset.x === 0 && btnOffset.y === 0
                          ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                          : "none",
                      width: "100%",
                      maxWidth: "480px",
                      padding: "1.1rem 2rem",
                      borderRadius: "9999px",
                      background:
                        "linear-gradient(135deg, #FF5A36 0%, #C7F04A 100%)",
                      color: "#FFFFFF",
                      fontSize: "1.05rem",
                      fontWeight: 800,
                      letterSpacing: "-0.02em",
                      border: "none",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.6rem",
                      boxShadow: "0 10px 30px -8px rgba(255, 90, 54, 0.55)",
                      willChange: "transform",
                      textShadow: "0 1px 2px rgba(8, 16, 61, 0.2)",
                    }}
                  >
                    <span>Solicitar Diagnóstico Estratégico</span>
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </button>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#636B97",
                      fontSize: "0.85rem",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <span>ou</span>
                    <button
                      type="button"
                      onClick={openWhatsApp}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#FF5A36",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        textDecoration: "underline",
                        textUnderlineOffset: "4px",
                      }}
                    >
                      <MessageSquare size={14} />
                      <span>Falar direto pelo WhatsApp</span>
                    </button>
                  </div>
                </div>
              </form>
            )}

            <div
              style={{
                marginTop: "2.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(210, 209, 205, 0.5)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                fontSize: "0.75rem",
                color: "#636B97",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <Lock size={13} color="#636B97" />
                <span>Dados 100% protegidos com sigilo industrial estrito</span>
              </div>
              <div>Tempo médio de resposta: &lt; 4 horas úteis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
