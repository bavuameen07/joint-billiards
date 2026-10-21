import Image from "next/image";

const WORDMARKS = {
  cream: "/brand/joint-wordmark-cream.png",
  orange: "/brand/joint-wordmark.png",
  black: "/brand/joint-wordmark-black.png",
} as const;

export type WordmarkVariant = keyof typeof WORDMARKS;

export function BrandLogo({
  variant = "cream",
  className = "",
  sizes = "400px",
  priority = false,
}: {
  variant?: WordmarkVariant;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={WORDMARKS[variant]}
      alt="JOINT"
      width={853}
      height={257}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
