import { Display } from "./components/Display";
import { Keypad } from "./components/Keypad";
import { useCalculator } from "./hooks/useCalculator";
import "./App.css";

export default function App() {
  const {
    display,
    inputDigit,
    inputDecimal,
    handleOperator,
    handleEquals,
    handleClear,
    handleToggleSign,
    handlePercent,
  } = useCalculator();

  return (
    <div className="wrapper">
      <div className="calculator">
        <Display value={display} />
        <Keypad
          onDigit={inputDigit}
          onDecimal={inputDecimal}
          onOperator={handleOperator}
          onEquals={handleEquals}
          onClear={handleClear}
          onToggleSign={handleToggleSign}
          onPercent={handlePercent}
        />
      </div>
    </div>
  );
}
