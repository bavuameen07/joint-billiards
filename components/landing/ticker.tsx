const DEFAULT_ITEMS = [
  "8-Ball",
  "9-Ball",
  "Tournament Snooker",
  "Chalk Included",
  "Cues On The House",
  "Open 12PM — 2AM",
  "League Nights",
  "Coach On Request",
];

export function Ticker({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  function renderRow(keyPrefix: string) {
    return (
      <div className="flex shrink-0 items-center" key={keyPrefix}>
        {items.map((item, index) => (
          <span
            key={`${keyPrefix}-${item}-${index}`}
            className="flex items-center gap-5 px-5 text-[10px] font-bold tracking-[0.3em] whitespace-nowrap uppercase"
          >
            {item}
            <span aria-hidden="true" className="text-joint-orange">
              ✦
            </span>
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="joint-ticker joint-grain relative border-y-2 border-joint-black bg-joint-black py-3 text-joint-cream"
    >
      <div className="joint-ticker-track">
        {renderRow("first")}
        {renderRow("second")}
      </div>
    </div>
  );
}
