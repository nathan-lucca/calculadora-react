interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "default" | "operator" | "equals" | "function";
  wide?: boolean;
}

export function Button({
  label,
  onClick,
  variant = "default",
  wide = false,
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant}${wide ? " btn--wide" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
