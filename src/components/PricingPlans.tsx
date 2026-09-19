"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, Rocket, Crown, Zap } from "lucide-react";

interface PricingPlansProps {
  id?: string;
}

export default function PricingPlans({ id = "pricing" }: PricingPlansProps) {
  const plans = [
    {
      name: "Starter",
      tier: "Entrada Estratégica",
      priceRange: "R$ 10.000 · 20.000",
      priceLabel: "Investimento inicial",
      icon: Zap,
      iconColor: "#636B97",
      iconBg: "rgba(99, 107, 151, 0.08)",
      popular: false,
      highlight: false,
      features: [
        "1 serviço à escolha (Branding OU Site)",
        "2 rodadas de revisão estratégica",
        "Entrega em 4 a 6 semanas",
        "Suporte prioritário 30 dias pós-entrega",
        "1 reunião kick-off + 1 de onboarding",
      ],
      ctaText: "Começar com Starter",
      ctaStyle: "outline",
      budgetValue: "R$ 10k - 20k",
    },
    {
      name: "Solid",
      tier: "Mais Escolhido · MEI/PME",
      priceRange: "R$ 20.000 · 40.000",
      priceLabel: "Investimento ideal",
      icon: Crown,
      iconColor: "#FF5A36",
      iconBg: "rgba(255, 90, 54, 0.1)",
      popular: true,
      highlight: true,
      features: [
        "2 serviços combinados (ex: Branding + Site OU Site + Tráfego)",
        "4 rodadas de revisão estratégica",
        "Entrega em 6 a 8 semanas",
        "Suporte 90 dias pós-entrega + 1h consultoria/semana",
        "Kit lançamento com artes e copy para 30 dias",
        "Configuração de analytics e eventos de conversão",
      ],
      ctaText: "Plano Ideal — Começar Agora",
      ctaStyle: "solid",
      budgetValue: "R$ 20k - 40k",
    },
    {
      name: "Rocket",
      tier: "Enterprise · Escala Completa",
      priceRange: "R$ 40.000+",
      priceLabel: "Investimento enterprise",
      icon: Rocket,
      iconColor: "#FFFFFF",
      iconBg: "#08103D",
      popular: false,
      highlight: false,
      dark: true,
      features: [
        "Ecossistema COMPLETO 4 serviços (Branding · Site · Automação · Tráfego)",
        "Revisões estratégicas ilimitadas",
        "Entrega em 10 a 14 semanas + fase de otimização",
        "Suporte 180 dias + Gerente de Conta dedicado",
        "Reunião de estratégia semanal com diretores",
        "Implementação de IA + automações de funil completas",
        "ROAS garantido via SLA contratual*",
      ],
      ctaText: "Escalar com Rocket Enterprise",
      ctaStyle: "dark",
      budgetValue: "R$ 40k+",
    },
  ];

  const handleCTAClick = (budgetValue: string) => {
    try {
      localStorage.setItem("kamee_selected_budget", budgetValue);
    } catch {
      /* noop */
    }
  };

  return (
    <section
      id={id}
      style={{
        position: "relative",
        width: "100%",
        paddingTop: "clamp(4rem, 7vw, 7rem)",
        paddingBottom: "clamp(4rem, 7vw, 7rem)",
        borderTop: "1px solid rgba(210, 209, 205, 0.6)",
        background:
          "linear-gradient(180deg, rgba(254,254,255,1) 0%, rgba(247,247,251,1) 100%)",
      }}
    >
      <div className="section-wrapper">
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "70vw",
            height: "50vh",
            background:
              "radial-gradient(ellipse at center, rgba(255, 90, 54, 0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
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
              <span>Investimento & Pacotes</span>
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              maxWidth: "820px",
              margin: "0 auto 1.25rem",
              color: "#08103D",
            }}
          >
            Planos pensados para cada{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #FF5A36 0%, #C7F04A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              estágio de escala
            </span>
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.15rem)",
              color: "#3A406B",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Do primeiro impacto digital até o ecossistema enterprise completo.
            Nenhum contrato fidelidade de 12 meses — entregas semanais visíveis.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
            maxWidth: "1180px",
            margin: "0 auto",
            alignItems: "stretch",
            position: "relative",
            zIndex: 1,
          }}
        >
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  padding: "clamp(1.75rem, 2.5vw, 2.5rem)",
                  display: "flex",
                  flexDirection: "column",
                  background: plan.dark
                    ? "linear-gradient(160deg, #08103D 0%, #0F1A5C 100%)"
                    : plan.highlight
                    ? "linear-gradient(160deg, rgba(255,255,255,0.98) 0%, rgba(255,250,248,0.98) 100%)"
                    : "rgba(255, 255, 255, 0.92)",
                  border: plan.highlight
                    ? "1px solid rgba(255, 90, 54, 0.35)"
                    : plan.dark
                    ? "1px solid rgba(255, 255, 255, 0.08)"
                    : "1px solid rgba(210, 209, 205, 0.6)",
                  boxShadow: plan.highlight
                    ? "0 20px 50px -12px rgba(255, 90, 54, 0.18), 0 4px 20px -2px rgba(8, 16, 61, 0.06)"
                    : plan.dark
                    ? "0 20px 50px -12px rgba(8, 16, 61, 0.35)"
                    : "0 4px 20px -2px rgba(8, 16, 61, 0.06)",
                  transform: plan.highlight ? "translateY(-8px)" : "none",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  flex: 1,
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlight) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = plan.dark
                      ? "0 28px 60px -14px rgba(8, 16, 61, 0.45)"
                      : "0 16px 40px -10px rgba(8, 16, 61, 0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlight) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = plan.dark
                      ? "0 20px 50px -12px rgba(8, 16, 61, 0.35)"
                      : "0 4px 20px -2px rgba(8, 16, 61, 0.06)";
                  }
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      right: "1.75rem",
                      padding: "0.45rem 1rem",
                      borderRadius: "9999px",
                      background: "#FF5A36",
                      color: "#FFFFFF",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      boxShadow: "0 6px 18px -4px rgba(255, 90, 54, 0.55)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <Sparkles size={12} />
                    Mais Popular
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: plan.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Icon size={24} color={plan.iconColor} strokeWidth={2} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: plan.dark
                        ? "#8891C2"
                        : plan.highlight
                        ? "#FF5A36"
                        : "#636B97",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {plan.tier}
                  </div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.85rem",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: plan.dark ? "#FFFFFF" : "#08103D",
                      margin: 0,
                    }}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div style={{ marginBottom: "2rem" }}>
                  <div
                    style={{
                      fontSize: "clamp(1.5rem, 2vw, 1.85rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: plan.dark ? "#FFFFFF" : "#08103D",
                      marginBottom: "0.25rem",
                      lineHeight: 1.1,
                    }}
                  >
                    {plan.priceRange}
                  </div>
                  <div
                    style={{
                      fontSize: "0.825rem",
                      color: plan.dark ? "#8891C2" : "#636B97",
                      fontWeight: 500,
                    }}
                  >
                    {plan.priceLabel} · Projeto customizado
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    width: "100%",
                    background: plan.dark
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(210, 209, 205, 0.7)",
                    marginBottom: "1.5rem",
                  }}
                />

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem",
                    marginBottom: "2.25rem",
                    flex: 1,
                  }}
                >
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.7rem",
                        fontSize: "0.925rem",
                        lineHeight: 1.5,
                        color: plan.dark ? "#D4D9F5" : "#3A406B",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: plan.dark
                            ? "rgba(199, 240, 74, 0.15)"
                            : "rgba(16, 185, 129, 0.1)",
                          border: plan.dark
                            ? "1px solid rgba(199, 240, 74, 0.35)"
                            : "1px solid rgba(16, 185, 129, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <Check
                          size={12}
                          strokeWidth={3}
                          color={plan.dark ? "#C7F04A" : "#10B981"}
                        />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() => handleCTAClick(plan.budgetValue)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    width: "100%",
                    padding: "0.95rem 1.5rem",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.015em",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                    ...(plan.ctaStyle === "solid"
                      ? {
                          background: "#FF5A36",
                          color: "#FFFFFF",
                          border: "none",
                          boxShadow: "0 8px 24px -6px rgba(255, 90, 54, 0.5)",
                        }
                      : plan.ctaStyle === "dark"
                      ? {
                          background:
                            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)",
                          color: "#FFFFFF",
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                        }
                      : {
                          background: "transparent",
                          color: "#08103D",
                          border: "1.5px solid rgba(8, 16, 61, 0.15)",
                        })
                  }}
                  onMouseEnter={(e) => {
                    if (plan.ctaStyle === "solid") {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px -8px rgba(255, 90, 54, 0.65)";
                    } else if (plan.ctaStyle === "dark") {
                      e.currentTarget.style.background =
                        "rgba(255, 255, 255, 0.16)";
                    } else {
                      e.currentTarget.style.borderColor = "#08103D";
                      e.currentTarget.style.background =
                        "rgba(8, 16, 61, 0.04)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.ctaStyle === "solid") {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px -6px rgba(255, 90, 54, 0.5)";
                    } else if (plan.ctaStyle === "dark") {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)";
                    } else {
                      e.currentTarget.style.borderColor =
                        "rgba(8, 16, 61, 0.15)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
