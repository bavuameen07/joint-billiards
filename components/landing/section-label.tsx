export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${className}`}>
      <span className="joint-label-minimal">
        {children}
      </span>
      <span className="h-px flex-1 bg-joint-ink/10" />
    </div>
  );
}