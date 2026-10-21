import Image from "next/image";
import { POSTERS } from "@/lib/site";

export function PremiumPhotoHighlight({
  variant = "hero",
  className = "",
}: { variant?: "hero" | "section" | "inline"; className?: string }) {
  const [poster] = POSTERS;

  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={`joint-premium-photo-hero ${className}`}
      >
        <div className="relative aspect-[4/5] w-full max-w-[520px] mx-auto overflow-hidden border-2 border-joint-cream/20 bg-joint-ink shadow-[0_0_0_1px_rgba(255,69,26,0.3),0_24px_48px_-12px_rgba(0,0,0,0.8)]">
          <Image
            src={poster.src}
            alt={poster.alt}
            fill
            priority
            sizes="(max-width: 768px) 92vw, 520px"
            placeholder="blur"
            blurDataURL={poster.blurDataURL}
            className="object-cover joint-premium-photo-img"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-joint-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <span className="text-[10px] font-bold tracking-[0.25em] text-joint-cream/90 uppercase">
              {poster.label}
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-joint-amber uppercase">
              Joint House Series
            </span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-3">
          {POSTERS.map((p, idx) => (
            <button
              key={p.src}
              type="button"
              className={`joint-premium-dot ${idx === 0 ? "active" : ""}`}
              aria-label={`View ${p.label}`}
              aria-current={idx === 0 ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`joint-premium-photo-grid ${className}`}>
        {POSTERS.map((p) => (
          <article
            key={p.src}
            className="joint-premium-grid-item group relative aspect-[4/5] overflow-hidden border-2 border-joint-cream/15 bg-joint-ink shadow-[0_0_0_1px_rgba(255,69,26,0.2),0_16px_32px_-8px_rgba(0,0,0,0.7)] transition-all duration-500 hover:shadow-[0_0_0_1px_rgba(255,69,26,0.5),0_24px_48px_-12px_rgba(0,0,0,0.9)] hover:scale-[1.02]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL={p.blurDataURL}
              className="object-cover joint-premium-photo-img group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-joint-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold tracking-[0.25em] text-joint-cream uppercase">
                {p.label}
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-joint-amber/80 uppercase">
                {p.title}
              </span>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div className={`joint-premium-photo-inline ${className}`}>
      <Image
        src={poster.src}
        alt={poster.alt}
        width={160}
        height={200}
        placeholder="blur"
        blurDataURL={poster.blurDataURL}
        className="object-cover rounded border border-joint-cream/20 shadow-[4px_4px_0px_0px_rgba(255,69,26,0.4)]"
      />
    </div>
  );
}