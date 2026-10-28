import { cn } from "@/lib/utils";
import { Divider } from "./divider";
import { Reveal } from "./reveal";

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-16 text-center", className)}>
      <p className="mb-4 font-sans text-xs font-medium tracking-[0.3em] text-gold-ink uppercase md:text-sm">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-serif text-4xl font-medium text-balance text-ink md:text-5xl"
      >
        {title}
      </h2>
      <Divider icon={icon} className="mt-6" />
    </Reveal>
  );
}
