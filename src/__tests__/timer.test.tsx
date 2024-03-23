import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Timer } from "../challenge/Project_04/pages/timer";
import { act } from "react-dom/test-utils";
describe("Timer", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  // ...

  test("increments timer count by 1 after one second when begin button is clicked", async () => {
    render(<Timer />);

    fireEvent.click(screen.getByTestId("timer-begin-button"));

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId("timer-count").textContent).toBe("1");
  });
  test("resets timer count and stops the timer when reset button is clicked", async () => {
    render(<Timer />);

    // 初期状態の確認
    expect(screen.getByTestId("timer-count").textContent).toBe("0");

    // タイマーを開始
    fireEvent.click(screen.getByTestId("timer-begin-button"));

    // 1秒経過後の確認
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId("timer-count").textContent).toBe("1");

    // リセットボタンをクリック
    fireEvent.click(screen.getByTestId("timer-reset-button"));

    // リセット後の確認
    expect(screen.getByTestId("timer-count").textContent).toBe("0");

    // さらに1秒経過しても、タイマーが停止していることを確認
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId("timer-count").textContent).toBe("0");
  });
});
