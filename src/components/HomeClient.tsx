"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

const HeaderNav = dynamic(() => import("@/components/HeaderNav"), {
  ssr: false,
});

const HeroCanvasScrub = dynamic(() => import("@/components/HeroCanvasScrub"), {
  ssr: false,
});

const ServiceHorizontalScroll = dynamic(
  () => import("@/components/ServiceHorizontalScroll"),
  { ssr: false }
);

const MagneticCTA = dynamic(() => import("@/components/MagneticCTA"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

function NavFallback() {
  return (
    <header
      aria-hidden
      suppressHydrationWarning
      style={{
        position: "fixed",
        top: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 50,
        width: "calc(100% - 2rem)",
        maxWidth: "1080px",
        pointerEvents: "none",
        opacity: 0,
      }}
    />
  );
}

function HeroFallback() {
  return (
    <section
      id="hero"
      aria-hidden
      suppressHydrationWarning
      style={{
        width: "100%",
        height: "100vh",
        minHeight: 720,
        background: "linear-gradient(180deg, #08103D 0%, #0E1446 100%)",
        position: "relative",
      }}
    />
  );
}

function ServicesFallback() {
  return (
    <section
      id="services"
      aria-hidden
      suppressHydrationWarning
      style={{
        width: "100%",
        minHeight: "calc(100vh + 600px)",
        background:
          "linear-gradient(180deg, #0A1146 0%, #08103D 50%, #050820 100%)",
        position: "relative",
        paddingBlock: "6rem",
      }}
    />
  );
}

function CtaFallback() {
  return (
    <section
      id="contact"
      aria-hidden
      suppressHydrationWarning
      style={{ width: "100%", minHeight: "100vh", background: "#FEFEFF" }}
    />
  );
}

function FooterFallback() {
  return (
    <footer
      aria-hidden
      suppressHydrationWarning
      style={{ width: "100%", minHeight: 280, background: "#050718" }}
    />
  );
}

export default function HomeClient() {
  return (
    <main
      suppressHydrationWarning
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#FEFEFF",
        color: "#08103D",
        overflowX: "clip",
      }}
    >
      <div className="ambient-glow" />

      <Suspense fallback={<NavFallback />}>
        <HeaderNav />
      </Suspense>

      <Suspense fallback={<HeroFallback />}>
        <HeroCanvasScrub />
      </Suspense>

      <Suspense fallback={<ServicesFallback />}>
        <ServiceHorizontalScroll />
      </Suspense>

      <Suspense fallback={<CtaFallback />}>
        <MagneticCTA />
      </Suspense>

      <Suspense fallback={<FooterFallback />}>
        <Footer />
      </Suspense>
    </main>
  );
}
