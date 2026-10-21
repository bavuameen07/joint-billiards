"use client";

import { useRef } from "react";

export function TiltCard({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch") return;
    const element = cardRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty("--rx", `${(-py * 9).toFixed(2)}deg`);
    element.style.setProperty("--ry", `${(px * 11).toFixed(2)}deg`);
    element.style.setProperty(
      "--glare-x",
      `${((px + 0.5) * 100).toFixed(1)}%`,
    );
    element.style.setProperty(
      "--glare-y",
      `${((py + 0.5) * 100).toFixed(1)}%`,
    );
  }

  function handlePointerLeave() {
    const element = cardRef.current;
    if (!element) return;
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
  }

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`joint-tilt ${className}`}
    >
      {children}
    </div>
  );
}
