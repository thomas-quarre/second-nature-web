const SRC = {
  horizontal: "/brand/wordmark-spiral.svg",
  mark: "/brand/mark-spiral.svg",
} as const;

const ASPECT = {
  horizontal: "7.75 / 1",
  mark: "1 / 1",
} as const;

export function Logo({
  className = "",
  invert = false,
  variant = "horizontal",
}: {
  className?: string;
  invert?: boolean;
  variant?: keyof typeof SRC;
}) {
  return (
    <span
      role="img"
      aria-label={variant === "mark" ? "Second Nature mark" : "Second Nature"}
      className={`inline-block shrink-0 bg-current ${
        invert ? "text-white" : "text-ink"
      } ${className}`}
      style={{
        aspectRatio: ASPECT[variant],
        WebkitMaskImage: `url(${SRC[variant]})`,
        maskImage: `url(${SRC[variant]})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
