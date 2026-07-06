type PlaceholderTone = "primary" | "accent" | "neutral";

type PlaceholderBlockProps = {
  label: string;
  tone?: PlaceholderTone;
  className?: string;
};

const toneStyles: Record<PlaceholderTone, string> = {
  primary: "bg-primary/25 text-primary-dark",
  accent: "bg-accent/25 text-accent-dark",
  neutral: "border border-primary/20 bg-surface text-ink/50",
};

export function PlaceholderBlock({ label, tone = "primary", className = "" }: PlaceholderBlockProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-3xl text-center font-sans text-sm tracking-wide ${toneStyles[tone]} ${className}`}
    >
      {label}
    </div>
  );
}
