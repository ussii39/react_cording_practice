// CounterPage.test.tsx
import { render, fireEvent, screen } from "@testing-library/react";
import { CounterPage } from "../challenge/Project_03/counter";

describe("CounterPage Component", () => {
  it("renders with initial count of 0", () => {
    render(<CounterPage />);
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("should increment count on button click", () => {
    render(<CounterPage />);

    fireEvent.click(screen.getByText("Increment"));
    // カウントアップ後、カウントが1になっていることを確認
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
