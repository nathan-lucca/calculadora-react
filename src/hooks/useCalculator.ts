import { useState } from "react";
import type { Operator, CalculatorState } from "../types/calculator";

const initialState: CalculatorState = {
  display: "0",
  firstOperand: null,
  operator: null,
  waitingForSecond: false,
};

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  function inputDigit(digit: string) {
    setState((prev) => {
      if (prev.waitingForSecond) {
        return { ...prev, display: digit, waitingForSecond: false };
      }

      const newDisplay = prev.display === "0" ? digit : prev.display + digit;

      return { ...prev, display: newDisplay };
    });
  }

  function inputDecimal() {
    setState((prev) => {
      if (prev.waitingForSecond) {
        return { ...prev, display: "0.", waitingForSecond: false };
      }

      if (prev.display.includes(".")) return prev;

      return { ...prev, display: prev.display + "." };
    });
  }

  function handleOperator(nextOperator: Operator) {
    setState((prev) => {
      const current = parseFloat(prev.display);

      if (prev.firstOperand !== null && !prev.waitingForSecond) {
        const result = calculate(prev.firstOperand, current, prev.operator!);

        return {
          display: String(result),
          firstOperand: result,
          operator: nextOperator,
          waitingForSecond: true,
        };
      }

      return {
        ...prev,
        firstOperand: current,
        operator: nextOperator,
        waitingForSecond: true,
      };
    });
  }

  function handleEquals() {
    setState((prev) => {
      if (prev.firstOperand === null || prev.operator === null) return prev;

      const current = parseFloat(prev.display);
      const result = calculate(prev.firstOperand, current, prev.operator);

      return {
        display: String(result),
        firstOperand: null,
        operator: null,
        waitingForSecond: false,
      };
    });
  }

  function handleClear() {
    setState(initialState);
  }

  function handleToggleSign() {
    setState((prev) => ({
      ...prev,
      display: String(parseFloat(prev.display) * -1),
    }));
  }

  function handlePercent() {
    setState((prev) => ({
      ...prev,
      display: String(parseFloat(prev.display) / 100),
    }));
  }

  return {
    display: state.display,
    operator: state.operator,
    inputDigit,
    inputDecimal,
    handleOperator,
    handleEquals,
    handleClear,
    handleToggleSign,
    handlePercent,
  };
}

function calculate(a: number, b: number, operator: Operator): number {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : 0;
  }
}
