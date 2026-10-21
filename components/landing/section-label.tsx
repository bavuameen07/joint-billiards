export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${className}`}>
      <span className="text-[10px] font-bold tracking-[0.25em] uppercase">
        {children}
      </span>
      <span className="h-0.5 flex-1 bg-joint-black" />
    </div>
  );
}
