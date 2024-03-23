import { CalcPage } from "../challenge/Project_05/pages/calc";
import { render, fireEvent, screen } from "@testing-library/react";

describe("calu", () => {
  it("render", () => {
    render(<CalcPage />);
    expect(screen.getByTestId("total")).toHaveValue("0");
  });
  it("clickBtn", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("1"));
    expect(screen.getByTestId("total")).toHaveValue("1");
  });

  it("clickBtPlusBtn", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("total")).toHaveValue("2");
  });
  it("consecutiveOperators", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("-"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("total")).toHaveValue("-1");
  });
  // 計算機能（乗算）のテスト
  it("multiplyNumbers", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("*"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("total")).toHaveValue("6");
  });

  // 計算機能（除算）のテスト
  it("divideNumbers", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("total")).toHaveValue("4");
  });

  // クリアボタンの機能テスト
  it("clearCalculation", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("="));
    expect(screen.getByTestId("total")).toHaveValue("2"); // 計算結果の確認

    // クリアボタンをクリック（クリアボタンのテキストが「Clear」と仮定）
    fireEvent.click(screen.getByText("Clear"));
    expect(screen.getByTestId("total")).toHaveValue("0"); // クリア後の状態確認
  });
  it("prevents division by zero and shows an error message", () => {
    render(<CalcPage />);
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("/"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("="));

    // エラーメッセージが画面に表示されているか確認
    expect(screen.getByTestId("error-message").textContent).toBe(
      "0で割ることはできません"
    );
  });
});
