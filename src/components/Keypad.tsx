import { Button } from "./Button";
import type { Operator } from "../types/calculator";

interface KeypadProps {
  onDigit: (d: string) => void;
  onDecimal: () => void;
  onOperator: (op: Operator) => void;
  onEquals: () => void;
  onClear: () => void;
  onToggleSign: () => void;
  onPercent: () => void;
}

export function Keypad({
  onDigit,
  onDecimal,
  onOperator,
  onEquals,
  onClear,
  onToggleSign,
  onPercent,
}: KeypadProps) {
  return (
    <div className="keypad">
      {/* Linha 1 */}
      <Button label="AC" onClick={onClear} variant="function" />
      <Button label="+/-" onClick={onToggleSign} variant="function" />
      <Button label="%" onClick={onPercent} variant="function" />
      <Button label="÷" onClick={() => onOperator("/")} variant="operator" />

      {/* Linha 2 */}
      <Button label="7" onClick={() => onDigit("7")} />
      <Button label="8" onClick={() => onDigit("8")} />
      <Button label="9" onClick={() => onDigit("9")} />
      <Button label="×" onClick={() => onOperator("*")} variant="operator" />

      {/* Linha 3 */}
      <Button label="4" onClick={() => onDigit("4")} />
      <Button label="5" onClick={() => onDigit("5")} />
      <Button label="6" onClick={() => onDigit("6")} />
      <Button label="-" onClick={() => onOperator("-")} variant="operator" />

      {/* Linha 4 */}
      <Button label="1" onClick={() => onDigit("1")} />
      <Button label="2" onClick={() => onDigit("2")} />
      <Button label="3" onClick={() => onDigit("3")} />
      <Button label="+" onClick={() => onOperator("+")} variant="operator" />

      {/* Linha 5 */}
      <Button label="0" onClick={() => onDigit("0")} wide />
      <Button label="." onClick={onDecimal} />
      <Button label="=" onClick={onEquals} variant="equals" />
    </div>
  );
}
