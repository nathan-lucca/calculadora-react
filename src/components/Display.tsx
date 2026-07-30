interface DisplayProps {
  value: string;
}

export function Display({ value }: DisplayProps) {
  const fontSize =
    value.length > 9 ? "1.8rem" : value.length > 6 ? "2.4rem" : "3rem";

  return (
    <div className="display">
      <span style={{ fontSize }}>{value}</span>
    </div>
  );
}
