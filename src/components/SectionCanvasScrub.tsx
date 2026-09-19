"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideIcon } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectionCanvasScrubProps {
  heroFolder: string;
  frameCount: number;
  badgeIcon: LucideIcon;
  badgeLabel: string;
  badgeColor: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  gradientTextClass?: string;
  accentColor: string;
  scrollDistance?: number;
}

export default function SectionCanvasScrub({
  heroFolder,
  frameCount,
  badgeIcon: BadgeIcon,
  badgeLabel,
  badgeColor,
  titlePrefix,
  titleHighlight,
  subtitle,
  gradientTextClass,
  accentColor,
  scrollDistance = 1400,
}: SectionCanvasScrubProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let loadedCount = 0;
    const state = { frame: 0 };

    const renderFrame = (index: number) => {
      const img = images[index];
      if (!img || !img.complete) return;

      const width = canvas.width;
      const height = canvas.height;

      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio);

      const centerShiftX = (width - img.width * ratio) / 2;
      const centerShiftY = (height - img.height * ratio) / 2;

      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShiftX,
        centerShiftY,
        img.width * ratio,
        img.height * ratio
      );

      // Contrast overlay vignette
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        Math.min(width, height) * 0.25,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      gradient.addColorStop(0, "rgba(5, 5, 8, 0.25)");
      gradient.addColorStop(0.7, "rgba(5, 5, 8, 0.65)");
      gradient.addColorStop(1, "rgba(5, 5, 8, 0.95)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const handleResize = () => {
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      renderFrame(Math.round(state.frame));
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Preload frames for this specific hero folder
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const numStr = String(i).padStart(4, "0");
      img.src = `/frames/${heroFolder}/frame_${numStr}.webp`;

      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === 1) {
          renderFrame(0);
        }
        if (loadedCount >= frameCount) {
          setIsLoaded(true);
          renderFrame(0);
        }
      };

      images.push(img);
    }

    // GSAP ScrollTrigger for this section
    const ctxTimeline = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      // Scrub frames
      timeline.to(
        state,
        {
          frame: frameCount - 1,
          ease: "none",
          onUpdate: () => {
            renderFrame(Math.round(state.frame));
          },
        },
        0
      );

      // Subtle scale and focus effect on content
      if (contentRef.current) {
        timeline.fromTo(
          contentRef.current,
          { opacity: 0.85, scale: 0.98 },
          { opacity: 1, scale: 1, ease: "power1.out" },
          0
        );
      }
    }, containerRef);

    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
      ctxTimeline.revert();
    };
  }, [heroFolder, frameCount, scrollDistance]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050508",
      }}
    >
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
          zIndex: 1,
        }}
      />

      {/* Floating Section Content */}
      <div
        ref={contentRef}
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
          pointerEvents: "none",
        }}
      >
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ marginBottom: "1.25rem" }}>
            <span
              className="badge-tag"
              style={{
                color: badgeColor,
                borderColor: `${badgeColor}40`,
                background: `${badgeColor}15`,
              }}
            >
              <BadgeIcon size={14} />
              <span>{badgeLabel}</span>
            </span>
          </div>

          {/* Impact Heading */}
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              marginBottom: "1.5rem",
              color: "#ffffff",
              textWrap: "balance",
            }}
          >
            {titlePrefix}
            <span
              style={{
                color: accentColor,
                textShadow: `0 0 30px ${accentColor}40`,
              }}
            >
              {titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
              color: "#cbd5e1",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
