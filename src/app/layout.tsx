import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kameetech.com.br"),
  title: "KameeTech | Engenharia Digital de Alta Performance",
  description:
    "Marca, Sites, Automações e Tráfego Pago — uma equipe de engenharia digital que trata o seu negócio como se fosse nosso. Do briefing ao primeiro lead pago, sem intermediários.",
  keywords: [
    "KameeTech",
    "Agência Digital",
    "Identidade Visual",
    "Branding",
    "Sites de Alta Performance",
    "Next.js",
    "Automação Inteligente",
    "Tráfego Pago",
    "ROAS",
    "Design UI UX",
  ],
  authors: [{ name: "KameeTech Team" }],
  openGraph: {
    title: "KameeTech | Marca · Sites · Automação · Tráfego",
    description:
      "Pare de contratar 4 fornecedores. A Kamee cuida da sua marca, site, operações e aquisição — 4 especialistas, 1 equipe.",
    type: "website",
    locale: "pt_BR",
    images: ["/logoatt.png"],
  },
  icons: {
    icon: [
      { url: "/logoatt.png", sizes: "any", type: "image/png" },
    ],
    shortcut: ["/logoatt.png"],
    apple: [{ url: "/logoatt.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KameeTech | Engenharia Digital de Alta Performance",
    description:
      "Uma equipe que trata o seu negócio como sócio. Marca premium, site que carrega em 0.4s, automação sem erro humano e tráfego pago com ROAS 14x+.",
    images: ["/logoatt.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08103D",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}
    >
      <body className="antialiased selection:bg-[#FF5A36] selection:text-white">
        {children}
      </body>
    </html>
  );
}
