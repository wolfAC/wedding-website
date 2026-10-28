import { cn } from "@/lib/utils";

interface DividerProps {
  icon?: React.ReactNode;
  className?: string;
  lineClassName?: string;
}

export function Divider({ icon, className, lineClassName }: DividerProps) {
  const line = (
    <span
      className={cn(
        "h-px w-15 bg-linear-to-r from-transparent via-gold to-transparent",
        lineClassName,
      )}
    />
  );

  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-4 text-gold", className)}
    >
      {line}
      {icon && (
        <>
          {icon}
          {line}
        </>
      )}
    </div>
  );
}
