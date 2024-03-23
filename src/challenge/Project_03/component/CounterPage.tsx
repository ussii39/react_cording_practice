// CounterComponent.tsx
import React from "react";

interface CounterComponentProps {
  count: number;
  onIncrement: () => void;
}

export const CounterComponent: React.FC<CounterComponentProps> = ({
  count,
  onIncrement,
}) => {
  return (
    <div>
      <span>{count}</span>
      <button data-testid="countupbutton" onClick={() => onIncrement()}>
        Increment
      </button>
    </div>
  );
};
