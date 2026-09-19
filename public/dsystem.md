# Design System — Kamee

Este documento especifica a paleta de cores, tipografia, componentes e tokens de estilização do **Design System da Kamee**, extraídos e estruturados para implementação em front-end (HTML, CSS, Tailwind CSS, React, etc.).

---

## 🎨 Paleta de Cores

### 1. Cores de Base (Estrutura e Neutros)
| Token | Cor / Nome | Hexadecimal | Uso Recomendado |
| :--- | :--- | :--- | :--- |
| `color-bg-primary` | Off-White | `#FEFEFF` | Fundo principal da página, cards claros e superfícies |
| `color-border-subtle` | Cinza Neutro | `#D2D1CD` | Bordas, divisores, estados desabilitados |
| `color-text-main` | Azul Marinho | `#08103D` | Textos principais, títulos, cabeçalhos e botões primários |

### 2. Cores de Acento (Personalidade & Ação)
| Token | Nome / Variante | Hexadecimal | Personalidade / Aplicação |
| :--- | :--- | :--- | :--- |
| `color-accent-coral` | **Opção 1:** Coral Energético | `#FF5A36` | **Versátil & Quente:** Excelente para botões de conversão (CTAs), ícones ativos e badges de destaque. |
| `color-accent-lime` | **Opção 2:** Verde-Limão Vibrante | `#C7F04A` | **Moderno & Disruptivo:** Alto contraste com o azul-marinho. Ideal para posicionamento jovem/tech/digital. |
| `color-accent-magenta` | **Opção 3:** Magenta Criativo | `#E8368F` | **Ousado & Criativo:** Indicado para agências digitais, estúdios de branding e detalhes visuais marcantes. |

---

## 📐 Regra de Aplicação de Cores (60-30-10)

- **60% Dominante (`#FEFEFF`):** Fundo limpo, espaçoso e sem distrações.
- **30% Estrutural (`#08103D` + `#D2D1CD`):** Leitura confortável, tipografia de alto contraste, bordas sutis e cartões.
- **10% Destaque (Acento escolhido, e.g. `#FF5A36`):** Exclusivo para ações principais (botões "Solicitar Orçamento", "Começar Agora", links em hover e indicadores).

---

## 🔤 Tipografia & Hierarquia

- **Família Tipográfica Recomendada:** `Plus Jakarta Sans`, `Inter` ou `DM Sans`.
- **Cabeçalhos (`#08103D`):**
  - **H1 (Hero Title):** `3rem` (48px) | Bold (700) | Line-height: `1.1`
  - **H2 (Seções):** `2.25rem` (36px) | Bold (700) | Line-height: `1.2`
  - **H3 (Subseções/Cards):** `1.5rem` (24px) | SemiBold (600) | Line-height: `1.3`
- **Texto Corrido:**
  - **Body Regular:** `1rem` (16px) | Regular (400) | `#08103D` (com opacidade 90% para suavidade)
  - **Small / Muted:** `0.875rem` (14px) | Medium (500) | Tom derivado de `#D2D1CD` escurecido

---

## 🧩 Componentes

### Botões (Buttons)
- **Primary CTA (Conversão):**
  - Fundo: `--accent-coral` (`#FF5A36`) ou `--text-main` (`#08103D`)
  - Texto: `#FEFEFF`
  - Padding: `12px 24px`
  - Border Radius: `8px` ou `12px`
  - Hover: Opacidade `90%` + Elevação leve (`transform: translateY(-2px)`)

- **Secondary Button:**
  - Fundo: Transparente
  - Borda: `1.5px solid #D2D1CD`
  - Texto: `#08103D`
  - Hover: Fundo `#FEFEFF` com borda em `#08103D`

### Containers & Cards
- **Background:** `#FEFEFF`
- **Border:** `1px solid #D2D1CD`
- **Border Radius:** `16px`
- **Box Shadow:** `0 4px 20px -2px rgba(8, 16, 61, 0.06)`

---

## 💻 Code Tokens (CSS Variables & Tailwind)

### CSS Standard
```css
:root {
  /* Base Colors */
  --kamee-bg-primary: #FEFEFF;
  --kamee-border-subtle: #D2D1CD;
  --kamee-text-main: #08103D;

  /* Accent Options */
  --kamee-accent-coral: #FF5A36;
  --kamee-accent-lime: #C7F04A;
  --kamee-accent-magenta: #E8368F;
}
```

### Tailwind Config (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        kamee: {
          bg: '#FEFEFF',
          border: '#D2D1CD',
          main: '#08103D',
          coral: '#FF5A36',
          lime: '#C7F04A',
          magenta: '#E8368F',
        }
      }
    }
  }
}
```
