interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  id?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  const center = align === "center";
  return (
    <div className={center ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground ${center ? "mx-auto" : ""}`}>
          <span className="h-1 w-1 rounded-full bg-gold" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
