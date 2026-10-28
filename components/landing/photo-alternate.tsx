import Image from "next/image";

interface PhotoAlternateProps {
  src: string;
  alt: string;
  title: string;
  body: string;
  label: string;
  imagePosition: "left" | "right";
  background?: "cream" | "orange" | "black";
  className?: string;
}

export function PhotoAlternate({
  src,
  alt,
  title,
  body,
  label,
  imagePosition,
  background = "cream",
  className = "",
}: PhotoAlternateProps) {
  const isLeft = imagePosition === "left";

  const bgClasses = {
    cream: "bg-joint-offwhite",
    orange: "bg-joint-orange/5",
    black: "bg-joint-offwhite-muted",
  };

  return (
    <section
      aria-labelledby={`alt-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className={`joint-photo-alternate relative overflow-hidden ${bgClasses[background]} ${className}`}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {background === "cream" && (
          <div className="absolute top-[-20%] right-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.08),transparent_60%)] blur-3xl" />
        )}
        {background === "orange" && (
          <div className="absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,183,3,0.1),transparent_60%)] blur-3xl" />
        )}
        {background === "black" && (
          <div className="absolute top-[-30%] left-1/2 h-[60vh] w-[100vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,69,26,0.08),transparent_65%)] blur-3xl" />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className={`joint-reveal-group lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center ${isLeft ? "lg:grid-flow-dense" : ""}`}>
          <div className={`lg:order-${isLeft ? 1 : 2} relative aspect-[4/5] lg:aspect-[3/4]`}>
            <div className="joint-alternate-photo relative h-full w-full overflow-hidden joint-oval-lg joint-glass-card">
              <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAACwBACdASoUABkAPtVUoU2oJKMiN+gBABqJbACdMuzIABa7Os0YWfmkWr5m8/4AAPjNRQcKawBD5TYv/mKoy9258kv/sHf+lY/1LP8hHk4yoZEQe4w/RumfxIzqpmCVbySQONNg97BUIbfqkWVofQR+zMDO/MJiSwB73lrwCt8RxMAA"
                className="object-cover joint-alternate-img"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-joint-ink/20 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex flex-col gap-2">
                <span className="joint-label-minimal inline-flex items-center gap-2 px-3 py-1.5 self-start">
                  <span className="w-2 h-2 rounded-full bg-joint-orange" />
                  Joint House Series
                </span>
                <span className="joint-label-minimal">
                  {label}
                </span>
              </div>
            </div>
          </div>

          <div className={`lg:order-${isLeft ? 2 : 1} lg:self-center text-center lg:text-${isLeft ? "left" : "right"}`}>
            <span className={`joint-label-minimal inline-flex items-center gap-2 px-3 py-1 rounded-full self-center lg:self-${isLeft ? "start" : "end"} mb-4`}>
              <span className="w-1.5 h-1.5 rounded-full bg-joint-orange" />
              Gallery
            </span>
            <h2 className="joint-heading-minimal text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.1] mb-4">
              {title}
            </h2>
            <p className="joint-text-minimal text-[11px] leading-relaxed max-w-xl mx-auto lg:mx-0">
              {body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}