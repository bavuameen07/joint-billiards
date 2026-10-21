import Image from "next/image";
import { POSTERS } from "@/lib/site";

export function Filmstrip() {
  const frames = [...POSTERS, ...POSTERS, ...POSTERS, ...POSTERS];

  return (
    <div
      aria-hidden="true"
      className="joint-filmstrip joint-grain relative overflow-hidden border-y-2 border-joint-black bg-joint-black py-3 sm:py-4"
    >
      <div className="joint-filmstrip-track touch-action-pan-y" style={{ willChange: "transform" }}>
        {frames.map((poster, index) => (
          <div key={`${poster.src}-${index}`} className="joint-filmstrip-frame flex-shrink-0">
            <span className="joint-filmstrip-holes" />
            <Image
              src={poster.src}
              alt=""
              width={80}
              height={100}
              className="h-[100px] w-[80px] shrink-0 object-cover"
              loading="lazy"
            />
            <span className="joint-filmstrip-holes" />
          </div>
        ))}
      </div>
    </div>
  );
}
