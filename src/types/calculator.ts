export type Operator = "+" | "-" | "*" | "/";

export interface CalculatorState {
  display: string;
  firstOperand: number | null;
  operator: Operator | null;
  waitingForSecond: boolean;
}
