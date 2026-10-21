import Image from "next/image";
import { POSTERS } from "@/lib/site";

export function Filmstrip() {
  const frames = [...POSTERS, ...POSTERS, ...POSTERS, ...POSTERS];

  return (
    <div
      aria-hidden="true"
      className="joint-filmstrip joint-grain relative overflow-hidden border-y-2 border-joint-black bg-joint-black py-4"
    >
      <div className="joint-filmstrip-track">
        {frames.map((poster, index) => (
          <div key={`${poster.src}-${index}`} className="joint-filmstrip-frame">
            <span className="joint-filmstrip-holes" />
            <Image
              src={poster.src}
              alt=""
              width={88}
              height={110}
              className="h-[110px] w-[88px] shrink-0 object-cover"
            />
            <span className="joint-filmstrip-holes" />
          </div>
        ))}
      </div>
    </div>
  );
}
