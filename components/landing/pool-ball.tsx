export function PoolBall({
  number,
  dark = false,
  className = "",
}: {
  number: number;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`joint-ball ${dark ? "joint-ball-dark" : ""} ${className}`}
    >
      <span>{number}</span>
    </span>
  );
}
