// CounterComponent.test.tsx
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { CounterComponent } from "../challenge/Project_03/component/CounterPage";

describe("CounterComponent", () => {
  it("renders with initial count", () => {
    const initialCount = 0;
    render(<CounterComponent count={initialCount} onIncrement={() => {}} />);

    expect(screen.getByText(initialCount.toString())).toBeInTheDocument();
  });

  it("calls onIncrement when increment button is clicked", () => {
    const handleIncrement = jest.fn();
    render(<CounterComponent count={0} onIncrement={handleIncrement} />);

    fireEvent.click(screen.getByText("Increment"));
    expect(handleIncrement).toHaveBeenCalledTimes(1);
  });
});
