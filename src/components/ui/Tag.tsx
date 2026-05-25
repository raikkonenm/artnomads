import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Tag({ label, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-medium tracking-widest uppercase px-3 py-1",
        variant === "default" && "bg-white text-[var(--color-muted)]",
        variant === "accent" && "bg-[var(--color-accent)] text-white",
        variant === "outline" && "border border-current text-[var(--color-muted)]",
        className
      )}
    >
      {label}
    </span>
  );
}
