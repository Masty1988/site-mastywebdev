"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export default function MwdParaphe({ size = 30 }: { size?: number }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const animRef = useRef<number | null>(null);
  const progressRef = useRef(0); // 0 = normal, 1 = sunset

  // Detect touch device
  useEffect(() => {
    const mq = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Adaptive stroke-width: thicker when small
  const strokeWidth = size <= 24 ? 18 : size <= 40 ? 14 : 10;

  // Colors
  const colorNormal = "#5a6a7a";
  const colorSunset = "#c4956a";

  // Interpolate hex colors
  const lerpColor = (a: string, b: string, t: number) => {
    const pa = [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)];
    const pb = [parseInt(b.slice(1, 3), 16), parseInt(b.slice(3, 5), 16), parseInt(b.slice(5, 7), 16)];
    const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
    const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
    const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t);
    return `rgb(${r},${g},${bl})`;
  };

  // easeInOutCubic
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  const animate = useCallback(
    (toActive: boolean) => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);

      const duration = 700;
      const startProgress = progressRef.current;
      const endProgress = toActive ? 1 : 0;
      const startTime = performance.now();

      const step = (now: number) => {
        const elapsed = now - startTime;
        const rawT = Math.min(elapsed / duration, 1);
        const easedT = ease(rawT);
        const current = startProgress + (endProgress - startProgress) * easedT;
        progressRef.current = current;

        const svg = svgRef.current;
        if (svg) {
          const rotation = -90 * current;
          svg.style.transform = `rotate(${rotation}deg)`;
          svg.style.color = lerpColor(colorNormal, colorSunset, current);
        }

        if (rawT < 1) {
          animRef.current = requestAnimationFrame(step);
        } else {
          animRef.current = null;
        }
      };

      animRef.current = requestAnimationFrame(step);
    },
    []
  );

  const handleEnter = useCallback(() => {
    if (!isMobile) {
      setActive(true);
      animate(true);
    }
  }, [isMobile, animate]);

  const handleLeave = useCallback(() => {
    if (!isMobile) {
      setActive(false);
      animate(false);
    }
  }, [isMobile, animate]);

  const handleTap = useCallback(() => {
    if (isMobile) {
      const next = !active;
      setActive(next);
      animate(next);
    }
  }, [isMobile, active, animate]);

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animRef.current !== null) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="870 400 580 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        color: colorNormal,
        transformOrigin: "center center",
        cursor: "pointer",
        willChange: "transform",
      }}
      role="img"
      aria-label="Logo MWD"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleTap}
    >
      <path
        d="M887.356 984C886.729 849.69 887.121 727.754 887.121 683.702C887.121 548.557 906.893 439 931.283 439C948.206 439 951.585 572.811 959 650.243"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M1023.99 724C1020.51 587.872 1014.93 438 991.111 438C969.321 438 964.633 530.802 958.992 649.87"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M1024.1 787.5C1024.1 920.5 1019.87 967 996.913 967C974.787 967 952.028 860.5 958.1 711"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M1076.5 421C1076.41 553.41 1079.63 692.108 1084.74 746.298C1078.25 871.412 1075.17 967 1053.19 967C1033.42 967 1027.84 903.725 1024.74 787.335"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="1085"
        y1="421"
        x2="1085"
        y2="984"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M1085,421 C1330,421 1330,984 1085,984"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
