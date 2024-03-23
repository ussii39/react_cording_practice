import React, { useState } from "react";
import { CounterComponent } from "./component/CounterPage";

export const CounterPage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter Page</h1>
      <CounterComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
};
