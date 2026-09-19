<!-- impeccable:product-schema 1 -->

# KameeTech — Produto

## Platform

**Single-Page Landing Page de Aquisição B2B (Impeccable Persuade Mode)**
Landing page de agência digital de alta performance, rota única `/` (Next.js 16 App Router) com 5 âncoras navegáveis: `#hero` → `#services` → `#contact`. Destino final de todos os CTAs: formulário de diagnóstico estratégico com deep link para WhatsApp Business.
- **Fonte:** `src/app/page.tsx` (RSC 3 linhas), `src/app/layout.tsx` metadata, `src/components/HomeClient.tsx` Client Wrapper.

---

## Stack

*Confirmado via `package.json` + `dsystem.md` + Entrevista (Sept 2026):*

| Camada | Tecnologia | Versão | Observação |
|---|---|---|---|
| Framework Frontend | Next.js | 16.3.4 | App Router, Strict Mode ON |
| Render | React | 19.2.8 | Suspense para hidratação segura |
| Linguagem | TypeScript | 5.x strict | `@/*` → `./src/*` |
| Animações Hero | GSAP + ScrollTrigger | ^3.15 | Canvas scrub 320 frames WebP |
| Animações Serviços | Vanilla JS rAF | Nativo | `translate3d`, sticky pin, 60fps |
| UI Ícones | Lucide React | ^1.45 | Ícones lineares 2px |
| Interações CTA | canvas-confetti | ^1.9 | Confetti gatilho submit |
| Design System | Tokens ks-* CSS custom | — | Glassmorphism + 60-30-10 |
| Tipografia (atual) | Geist Sans + Outfit | next/font | `display: swap` |
| Tipografia (recomendada dsystem) | Plus Jakarta Sans / Inter / DM Sans | — | Não aplicado na incumbent |
| Backend | Nenhum | — | Formulário usa `useState` sem fetch |
| CMS / Banco | Nenhum | — | Conteúdo hardcoded em constantes |
| CI/CD | Não configurado | — | `README.md` = template create-next-app padrão |
| Build deploy | Sugerido Vercel | — | Documentado no README padrão |

---

## Users

*Confirmado via `metadata` + `PricingPlans` tier labels + copy Hero/MagneticCTA + Footer:*

**Público Alvo Primário (ICP — Ideal Customer Profile):**
- **Porte:** Microempresas (MEI), PMEs, E-commerce Brasil, 10 a 200 colaboradores
- **Cargos decisores:** CEO, CMO, Diretores de Operações, Gestores de Marketing Digital
- **Dor Jobs-To-Be-Done (metadata.lock):** "Pare de contratar 4 fornecedores. A Kamee cuida da sua marca, site, operações e aquisição — 4 especialistas, 1 equipe."
- **Budget mínimo de entrada:** R$ 10.000 (Starter)
- **Tier mais escolhido (PricingPlans):** Solid R$ 20k–40k → label "Mais Escolhido · MEI/PME"
- **Segmento implícito:** Marcas de consumo, e-commerce, serviços B2B premium (Branding Autoral + Luxo é menção no Footer)

**Capacidade Operacional Atual (Footer L84-L121):**
- Disponibilidade declarada: 2 vagas estratégicas para Q4 (badge verde pill)
- Portfólio implícito: "Crafted with Precision & Awwwards Excellence" (aspiração prêmio internacional)

---

## Product Purpose

*Verbatim Fonte Única `metadata.description` + `footer.definition` (sem alteração de copy):*

> "Marca, Sites, Automações e Tráfego Pago — uma equipe de engenharia digital que trata o seu negócio como se fosse nosso. Do briefing ao primeiro lead pago, sem intermediários."

> "Agência digital de alta performance. Desenvolvemos sites de velocidade instantânea, identidades visuais de luxo, automações inteligentes e tração escalável de faturamento."

**Macro Jornada do Usuário (Landing Page única):**
1. `#hero` → 5 segmentos de escada de valor (Escala → Arte → Site → Automação → Tráfego)
2. `#services` → 4 cards sticky horizontal scroll com entregáveis + métricas + tech stack
3. `#contact` → Formulário Diagnóstico Estratégico Gratuito → WhatsApp deep link (5511958629209)

---

## Positioning

*Extraído de `metadata.title`, `openGraph`, `twitter`, `hero.titles` + Entrevista:*

| Frente | Posicionamento Declarado |
|---|---|
| Tagline oficial | "Engenharia Digital de Alta Performance" |
| Diferencial vs mercado | Consolidado 4 fornecedores em 1 equipe sócia (não 4 agências separadas) |
| Tom de voz | Autoridade técnica + parceria de sócio, não fornecedor |
| Nicho implícito | Projetos de ticket médio-alto, não volume low-cost |
| Canal de aquisição | Landing page + WhatsApp direto, sem funil multi-etapa |
| Concorrentes implícitos (não nomeados) | Agências full-stack SP, estúdios de branding premium |

---

## Operating Context

*Confirmado via Entrevista Sept 2026 + arquivos operacionais:*

- **Sede operacional:** Mauá — São Paulo (região ABC, DDD 11)
- **CNPJ / Razão Social:** Ainda não formalizados
- **Contato comercial oficial:** WhatsApp +55 (11) 95862-9209 (sócio) → deep link wa.me no MagneticCTA
- **Idioma da operação:** Português Brasileiro (`html.lang="pt-BR"` no layout)
- **Color scheme do navegador:** Light Mode por padrão (`themeColor #08103D`, `colorScheme light`)
- **Forma de trabalho:** Entregas semanais visíveis, NENHUM contrato de fidelidade 12 meses (copy PricingPlans desativado)
- **Contrato SLA:** Apenas plano Rocket (enterprise) menciona ROAS garantido via SLA contratual (sem condições explícitas publicadas)
- **Nenhum suporte a múltiplas moedas / i18n implementado:** Apenas BRL

---

## Capabilities and Constraints

### 4 Capacidades Core Renderizadas (ServiceHorizontalScroll `CARDS[]` L15-L79)

| ID Card | Badge | Métrica Declarada (SEM claims numéricos excedentes) | Tecnologias |
|---|---|---|---|
| `branding` | Criamos sua arte. | Posicionamento de mercado com aumento imediato da percepção de valor corporativo. | Figma · Adobe CC · Blender 3D · Design Systems |
| `websites` | Desenvolvemos seu site. | Pontuação 100/100 no Google Lighthouse e conversão fluida. | Vanilla JS · Three.js · HTML5/CSS3 · WebGL · Vite |
| `automation` | Automatizamos seus processos. | Operação 24/7 automatizada e escala sem aumento de headcount. | Python · OpenAI/LLMs · n8n · Supabase · Docker |
| `traffic` | Impulsionamos seu negócio através do tráfego pago. | Crescimento previsível de pipeline e ROAS positivo. | GTM · GA4 · Looker Studio · Pixel Tracking |

**Automation WIP (card, badge amarelo):**
- "Sistema Próprio para Auxiliar no Marketing da Empresa" → tag `Em Desenvolvimento`. Não disponível comercialmente ainda.

### 5 Opções Comerciais do MagneticCTA Formulário (`L17-L21 + L357-L401`)
1. Artes & Design · Branding Autoral
2. Sites · Máquina de Conversão 0,4s
3. Automações · Colaborador Digital 24/7
4. Tráfego Pago · ROAS R$14+ medido *(nota: claim numérico ROAS R$14+ no option text; PRODUCT.md mantém apenas "ROAS positivo" por diretiva de entrevista. Revisar option text em futura iteração).*
5. Ecossistema Completo 360° · Starter / Solid / Rocket

### 3 Faixas Orçamentárias Oficiais (Default MagneticCTA = Solid Mais Popular)
| Faixa | Nome Comercial | Budget BRL |
|---|---|---|
| Entrada | Starter | R$ 10.000 a R$ 20.000 |
| **Padrão (selected)** | Solid · Mais Popular | R$ 20.000 a R$ 40.000 |
| Enterprise | Rocket · Enterprise | Acima de R$ 40.000 |

### Artefato Desativado (não importado em lugar nenhum do render atual)
> **`src/components/PricingPlans.tsx`** · Componente funcional COMPLETO com 3 planos (Starter/Solid/Rocket), 5 a 7 features por plano, integração `localStorage` "kamee_selected_budget" para pré-preencher o MagneticCTA ao clicar no CTA do plano. Status atual: desativado do DOM (`grep 0 imports`). Candidato a re-integração em futura release.

### Constraints Técnicas (conforme arquitetura atual)
- **Sem backend:** Todo state do formulário → `useState` client-side + wa.me query string. Nenhum dado persistido server-side.
- **No CMS / banco:** Alteração de copy requer alteração de código e deploy.
- **Nenhum A/B testing implementado:** Landing única, sem variantes.
- **Apenas 1 landing page:** Sem blog, sem páginas de serviço dedicadas, sem páginas de caso de sucesso / portfolio.

---

## Brand Commitments

*Confirmado via `public/dsystem.md` + CSS tokens globais `globals.css` + assets:*

### Paleta Oficial 60-30-10 (dsystem.md Válido)
| Proporção | Função | Hex | Uso |
|---|---|---|---|
| 60% | Cor base / Off-white | `#FEFEFF` | Backgrounds, áreas neutras |
| 30% | Primária Corporativa | `#08103D` | Textos, headers, plano Rocket dark |
| 30% | Cinza neutro | `#D2D1CD` | Bordas sutis, divisores |
| **10% (CTA principal)** | Coral Acento | `#FF5A36` | Todos os botões primários, badges, acentos |
| Opcional | Lime | `#C7F04A` | Acento plano Rocket dark (checks) |
| Opcional | Magenta | `#E8368F` | Não utilizado na incumbent atual |

### Tipografia Atual (Incumbent vs dsystem recomendação)
- **Em uso (layout.tsx):** Geist Sans (corpo) + Outfit (font-display para títulos H1/H2/H3) → `next/font` local com `display swap`
- **Recomendado por dsystem (não aplicado):** Plus Jakarta Sans OU Inter OU DM Sans → GAP para futura auditoria visual no `/impeccable document`.

### Identidade Visual (Logo Oficial)
- Arquivo único: `/public/logoatt.png`
- Nenhuma variante clara/escura publicada. Apenas 1 arquivo.

### Brand Voice (Extraído de todo copy lock)
- **Precisão + Perfeccionismo:** "Crafted with Precision"
- **Parceria não fornecedor:** "trata seu negócio como se fosse nosso"
- **Resultado mensurável:** "do briefing ao primeiro lead pago"
- **Premium + Luxo implícito:** "identidades visuais de luxo", "Branding Autoral"

---

## Evidence on Hand

*Tudo neste PRODUCT.md deriva de um destes 9 artefatos verificáveis no commit atual:*

1. `src/app/layout.tsx` — Metadata lock (title/description/keywords/OG/Twitter)
2. `public/dsystem.md` — Design System tokens 60-30-10 + tipografia
3. `src/components/HeroCanvasScrub.tsx` — Const `HERO_SEGMENTS[]` 5 frentes de serviço
4. `src/components/ServiceHorizontalScroll.tsx` — Const `CARDS[]` 4 serviços, métricas, tech
5. `src/components/MagneticCTA.tsx` — Formulário 5 opções serviço + 3 faixas orçamento + WhatsApp
6. `src/components/Footer.tsx` — Definição agência, menus, badge 2 vagas Q4, copy Awwwards
7. `src/components/HeaderNav.tsx` — Links âncora Início/Serviços/Contato + CTA coral
8. `src/components/PricingPlans.tsx` — 3 planos features completas (status: desativado do render)
9. **Entrevista Sept 2026** — Sede Mauá-SP, WhatsApp sócio, CNPJ pendente, Pricing como desativado, remover ROAS 14x de PRODUCT.md e manter métricas apenas dos cards.

---

## Product Principles

*Princípios operacionais inferidos de toda a arquitetura e copy, confirmados implicitamente pela escolha de stack e micro-interações:*

1. **Menos é mais · 1 landing = 1 objetivo:** Todo CTA, toda âncora, todo scroll termina no `#contact` → Diagnóstico → WhatsApp. Nenhum objetivo secundário (blog, portfolio, cases) é publicado.
2. **Performance como diferencial comercial, não detalhe técnico:** Velocidade 0,4s, Lighthouse 100/100, animações 60fps rAF `translate3d`, não usar GSAP para scroll horizontal sticky (vanilla é mais performático que ScrollTrigger para este caso).
3. **Consolidação como proposta central:** Não ser 1 de 4 fornecedores; ser o ecossistema completo 360° de 4 especialistas em 1 equipe.
4. **Transparência financeira imediata:** 3 faixas orçamento públicas logo no primeiro contato do form; não ocultar preço, não exigir reunião para apresentar budget.
5. **Acessibilidade como padrão, não feature:** `prefers-reduced-motion` remove rotação 3D dos cards.
6. **Nenhum lock-in de longo prazo:** Copy PricingPlans desativado declara "nenhum contrato fidelidade de 12 meses".

---

## Accessibility & Inclusion

*Atualmente implementado (conferência de código):*

| Critério | Status Implementado | Onde |
|---|---|---|
| `prefers-reduced-motion: reduce` | ✅ | `ServiceHorizontalScroll.tsx L115-L117 + L181-L184` → remove `rotateY`, scale constante 1, linear interpolation |
| Lang HTML pt-BR | ✅ | `layout.tsx html lang="pt-BR"` |
| Font display swap (Flash of invisible text) | ✅ | `next/font` config Geist + Outfit |
| Color scheme light | ✅ | `metadata.colorScheme light` themeColor `#08103D` |
| `aria-hidden` ícones decorativos | ✅ | `CheckIcon L92` ServiceHorizontalScroll + progress `L343` |
| Keyboard navegável (links e âncoras reais) | ✅ (parcial) | HeaderNav `<a href>` / PricingPlans CTA `<a href="#contact">` / MagneticCTA `<button>` |
| Contraste AA / AAA | ⚠️ Não auditado nesta fase | Pendente `/impeccable document` + axe-core |
| Leitor de tela labels (aria-labels, roles) | ⚠️ Pendente | MagneticCTA inputs não auditados |
| Skip link p/ conteúdo principal | ❌ Não implementado | - |
| Suporte a alto contraste / foco visível padrão | ⚠️ Pendente auditoria visual | - |
| i18n (espanhol / inglês) | ❌ Não implementado | Apenas PT-BR |

*Fim do schema 1 PRODUCT.md — Impeccable Init Step 5 completo.*
