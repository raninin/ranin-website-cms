"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface SubtlePatternBgProps {
  className?: string;
  /** The background image to use */
  src?: string;
  /** Opacity of the image layer (0 to 1, default 0.04) */
  opacity?: number;
  /** How the image should fit — "cover" fills the area, "contain" fits inside */
  fit?: "cover" | "contain";
  /** Use "light" for bg-ranin-light sections, "dark" for bg-ranin-navy sections */
  theme?: "light" | "dark";
}

/**
 * Reusable subtle image-based background overlay.
 * Place inside a section with `position: relative` and `overflow-hidden`.
 * Uses a real image at very low opacity with gradient fade for a refined industrial feel.
 */
export function SubtlePatternBg({
  className,
  src = "/images/30.png",
  opacity = 0.04,
  fit = "cover",
  theme = "light",
}: SubtlePatternBgProps) {
  const fadeColor = theme === "dark" ? "var(--ranin-navy)" : "var(--ranin-light)";

  return (
    <>
      {/* Image layer */}
      <div
        className={cn("pointer-events-none absolute inset-0 z-0", className)}
        aria-hidden
      >
        <Image
          src={src}
          alt=""
          fill
          className={cn(
            "object-center grayscale",
            fit === "cover" ? "object-cover" : "object-contain"
          )}
          style={{ opacity }}
          sizes="100vw"
          priority={false}
        />
      </div>
      {/* Edge fade — soft gradient vignette so the image doesn't feel like a hard rectangle */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to bottom, ${fadeColor} 0%, transparent 15%, transparent 85%, ${fadeColor} 100%),
            linear-gradient(to right, ${fadeColor} 0%, transparent 10%, transparent 90%, ${fadeColor} 100%)
          `,
        }}
        aria-hidden
      />
    </>
  );
}
