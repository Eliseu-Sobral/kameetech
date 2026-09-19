"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot,
  Workflow,
  Database,
  Sparkles,
  GitBranch,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServiceAutomation() {
  const sectionRef = useRef<HTMLElement>(null);
  const graphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        graphRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: graphRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pipelineNodes = [
    {
      step: "01",
      title: "Gatilho & Ingestão",
      desc: "Captura de leads, webhooks de ERP e eventos de checkout instantâneos, sem planilhas nem digitação manual.",
      icon: Database,
      badge: "Ingestão < 100ms",
    },
    {
      step: "02",
      title: "Agente IA Triador",
      desc: "Análise contextual com LLMs para qualificação, scoring, enriquecimento e roteamento inteligente do lead.",
      icon: Bot,
      badge: "Autonomia 100%",
    },
    {
      step: "03",
      title: "Orquestração & CRM",
      desc: "Disparo no WhatsApp, agendamento de reuniões, criação de negócios e sincronia em múltiplos sistemas.",
      icon: Workflow,
      badge: "Zero Erro Humano",
    },
  ];

  return (
    <section
      id="automation"
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
              03 · Automações & Inteligência Artificial
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
            Colaborador digital{" "}
            <span style={{ color: "#FF5A36" }}>24/7 que não erra</span>,
            trabalhando enquanto você dorme.
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)",
              color: "#3A406B",
              lineHeight: 1.6,
              maxWidth: "620px",
            }}
          >
            Automações de funil, integrações de sistemas e agentes de IA que
            eliminam tarefas repetitivas e reduzem erro humano a zero.
          </p>
        </div>
        <div
          ref={graphRef}
          className="glass-card"
          style={{
            padding: "3rem 2.5rem",
            background:
              "linear-gradient(135deg, rgba(255, 250, 248, 0.85) 0%, rgba(254, 254, 255, 0.98) 100%)",
            borderColor: "rgba(255, 90, 54, 0.18)",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "3rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <GitBranch size={20} color="#FF5A36" />
              <span style={{ fontWeight: 600, color: "#08103D", fontSize: "0.95rem" }}>
                Pipeline de Orquestração Autônoma em Tempo Real
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.75rem",
                fontFamily: "var(--font-mono)",
                color: "#FF5A36",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#FF5A36",
                  boxShadow: "0 0 10px #FF5A36",
                }}
              />
              <span>COLABORADOR ATIVO 24/7</span>
            </div>
          </div>

          <div
            style={{
              marginBottom: "2.5rem",
            }}
          >
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#08103D",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "0.75rem",
                maxWidth: "780px",
              }}
            >
              Um colaborador digital 24/7 — <span style={{ color: "#FF5A36" }}>sem erro, sem aumento, sem folga.</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "#3A406B", maxWidth: "680px", lineHeight: 1.6 }}>
              Todo o trabalho operacional repetitivo (ingestão, triagem, follow-up, CRM) rodando sozinho,
              enquanto sua equipe focada no que realmente move receita.
            </p>
          </div>

          {/* Connected Pipeline Nodes */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              position: "relative",
            }}
          >
            {pipelineNodes.map((node) => (
              <div
                key={node.step}
                style={{
                  padding: "2rem",
                  borderRadius: "18px",
                  background: "rgba(255, 255, 255, 0.85)",
                  border: "1px solid rgba(210, 209, 205, 0.6)",
                  position: "relative",
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
                      marginBottom: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        background: "rgba(255, 90, 54, 0.1)",
                        border: "1px solid rgba(255, 90, 54, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <node.icon size={20} color="#FF5A36" />
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "#636B97",
                        fontWeight: 600,
                      }}
                    >
                      ETAPA {node.step}
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#08103D",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {node.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "#3A406B",
                      lineHeight: 1.5,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {node.desc}
                  </p>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.75rem",
                    color: "#FF5A36",
                    fontWeight: 600,
                    padding: "0.3rem 0.65rem",
                    borderRadius: "6px",
                    background: "rgba(255, 90, 54, 0.08)",
                    border: "1px solid rgba(255, 90, 54, 0.2)",
                    alignSelf: "flex-start",
                  }}
                >
                  <Sparkles size={12} />
                  <span>{node.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Time Saving Metrics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              value: "1.850h+",
              label: "Horas Humanas Poupadas/mês",
              desc: "Eliminação de tarefas braçais repetitivas em planilhas e digitação manual.",
            },
            {
              value: "< 3 seg",
              label: "Tempo Médio de Resposta",
              desc: "Leads respondidos e qualificados no exato instante do pico de interesse.",
            },
            {
              value: "99.98%",
              label: "Precisão de Dados no CRM",
              desc: "Sem esquecimentos de follow-up, erros de digitação ou oportunidades perdidas.",
            },
            {
              value: "24 / 7 / 365",
              label: "Disponibilidade Operacional",
              desc: "Sua empresa vendendo e operando mesmo fora do horário comercial.",
            },
          ].map((metric) => (
            <div
              key={metric.label}
              className="glass-card"
              style={{
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  color: "#FF5A36",
                  letterSpacing: "-0.03em",
                  marginBottom: "0.25rem",
                  lineHeight: 1,
                }}
              >
                {metric.value}
              </span>
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#08103D",
                  marginBottom: "0.5rem",
                }}
              >
                {metric.label}
              </span>
              <p
                style={{
                  fontSize: "0.825rem",
                  color: "#3A406B",
                  lineHeight: 1.5,
                }}
              >
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
