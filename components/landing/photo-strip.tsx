import Image from "next/image";

export function FullWidthPhotoStrip({
  src,
  alt,
  title,
  label,
  position = "center",
  className = "",
}: {
  src: string;
  alt: string;
  title: string;
  label: string;
  position?: "center" | "left" | "right";
  className?: string;
}) {
  const positionStyles = {
    center: "mx-auto",
    left: "ml-auto",
    right: "mr-auto",
  };

  return (
    <section
      aria-labelledby={`strip-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className={`joint-photo-strip relative overflow-hidden border-y border-joint-ink/10 bg-joint-offwhite ${className}`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-30%] left-1/2 h-[80vh] w-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.12),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className={`relative w-full aspect-[16/5] sm:aspect-[16/6] lg:aspect-[16/7] max-w-[1400px] ${positionStyles[position]} overflow-hidden joint-oval-lg joint-glass-elevated`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAACwBACdASoUABkAPtVUoU2oJKMiN+gBABqJbACdMuzIABa7Os0YWfmkWr5m8/4AAPjNRQcKawBD5TYv/mKoy9258kv/sHf+lY/1LP8hHk4yoZEQe4w/RumfxIzqpmCVbySQONNg97BUIbfqkWVofQR+zMDO/MJiSwB73lrwCt8RxMAA"
            className="object-cover joint-strip-img"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-joint-ink/25 via-transparent to-joint-ink/25" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,10,4,0.2)_100%)]" />

          <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-12">
            <div className="max-w-3xl text-center">
              <span className="joint-label-minimal inline-flex items-center gap-2 px-4 py-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-joint-orange animate-pulse" />
                Joint House Series
              </span>
              <h3 className="joint-heading-minimal text-[clamp(1.5rem,4vw,3rem)] leading-[1.1] mb-3">
                {title}
              </h3>
              <p className="joint-label-minimal">
                {label}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="joint-photo-strip-glow absolute bottom-[-15%] left-1/2 -translate-x-1/2 h-24 w-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,69,26,0.18),transparent_70%)] blur-xl pointer-events-none" />
    </section>
  );
}