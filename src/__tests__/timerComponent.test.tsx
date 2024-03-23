import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { TimerComponent } from "../challenge/Project_04/component/timer";
import { act } from "react-dom/test-utils";
import { Timer } from "@/challenge/Project_04/pages/timer";
import { userEvent } from "@storybook/testing-library";

describe("TimerComponent", () => {
  const defaultProps = {
    count: 0,
    clickCount: jest.fn(),
    resetCount: jest.fn(),
    pauseCount: jest.fn(),
    minusCount: jest.fn(),
    plusCount: jest.fn(),
    countUp: 0,
    countUpfunc: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });
  //   afterEach(() => {
  //     jest.runOnlyPendingTimers();
  //     jest.useRealTimers();
  //   });

  test("renders timer title and description correctly", () => {
    render(<TimerComponent {...defaultProps} />);
    expect(screen.getByTestId("timer-title")).toHaveTextContent(
      "Circular Interface"
    );
    expect(screen.getByTestId("timer-description")).toHaveTextContent(
      "Experience the interactive circle interface"
    );
  });

  test("renders count up", () => {
    render(<TimerComponent {...defaultProps} />);
    expect(screen.getByTestId("countUp")).toHaveTextContent("0");
  });

  test("renders timer count correctly", () => {
    render(<TimerComponent {...defaultProps} count={10} />);
    expect(screen.getByTestId("timer-count")).toHaveTextContent("10");
  });

  test("calls clickCount when begin button is clicked", () => {
    render(<TimerComponent {...defaultProps} count={0} />);
    fireEvent.click(screen.getByTestId("timer-begin-button"));
    expect(defaultProps.clickCount).toHaveBeenCalledTimes(1);
  });
  test("increments timer count by 1 after one second when begin button is clicked", async () => {
    render(
      <TimerComponent
        {...defaultProps}
        count={0}
        clickCount={defaultProps.clickCount}
      />
    );

    // 「Begin」ボタンをクリックすることで、clickCount関数をトリガー
    fireEvent.click(screen.getByTestId("timer-begin-button"));

    // clickCount関数が呼び出されたことを確認
    expect(defaultProps.clickCount).toHaveBeenCalledTimes(1);

    // 非同期処理を進行させる（1秒進める）
    jest.advanceTimersByTime(1000);

    // カウンターが1に増加したかどうかを確認するために、act内で非同期処理を待つ
    await act(async () => {
      // さらに時間を進める必要がある場合は、ここでadvanceTimersByTimeを使用
      jest.advanceTimersByTime(0); // ここでは追加の時間進行は必要ないが、非同期更新を待つために置く
    });

    // カウンターの値が"1"になったことを確認
    expect(screen.getByTestId("timer-count").textContent).toBe("1");
  });
  test("calls resetCount when reset button is clicked", () => {
    render(<TimerComponent {...defaultProps} />);
    fireEvent.click(screen.getByTestId("timer-reset-button"));
    expect(defaultProps.resetCount).toHaveBeenCalledTimes(1);
  });

  test("calls pauseCount when pause button is clicked", () => {
    render(<TimerComponent {...defaultProps} />);
    fireEvent.click(screen.getByTestId("timer-pause-button"));
    expect(defaultProps.pauseCount).toHaveBeenCalledTimes(1);
  });

  test("calls minusCount when minus button is clicked", () => {
    render(<TimerComponent {...defaultProps} />);
    fireEvent.click(screen.getByTestId("timer-minus-button"));
    expect(defaultProps.minusCount).toHaveBeenCalledTimes(1);
  });

  test("calls plusCount when plus button is clicked", () => {
    render(<TimerComponent {...defaultProps} />);
    fireEvent.click(screen.getByTestId("timer-plus-button"));
    expect(defaultProps.plusCount).toHaveBeenCalledTimes(1);
  });
});
