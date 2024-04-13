import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { WeatherPage } from "../challenge/Project_07/pages/weather";

// MSWを使用してモックサーバーを設定
const server = setupServer(
  rest.get(
    "https://weather.tsukumijima.net/api/forecast/city/130010",
    (req, res, ctx) => {
      return res(
        ctx.json({
          forecasts: [
            {
              date: "2024-03-28",
              dateLabel: "今日",
              telop: "曇のち雨",
              detail: {
                weather: "くもり　夜　雨",
                wind: "南の風　２３区西部　では　南の風　やや強く",
                wave: "１メートル",
              },
              temperature: {
                min: { celsius: null, fahrenheit: null },
                max: { celsius: null, fahrenheit: null },
              },
              chanceOfRain: {
                T00_06: "--%",
                T06_12: "--%",
                T12_18: "--%",
                T18_24: "70%",
              },
              image: {
                title: "曇のち雨",
                url: "https://www.jma.go.jp/bosai/forecast/img/212.svg",
                width: 80,
                height: 60,
              },
            },
            // 必要に応じて他の天気情報を追加
          ],
        })
      );
    }
  )
);

// テストの前にモックサーバーを起動
beforeAll(() => server.listen());

// 各テストの後にハンドラーをリセット
afterEach(() => server.resetHandlers());

// すべてのテストが終了した後にモックサーバーを閉じる
afterAll(() => server.close());

describe("WeatherPage Component", () => {
  test("天気予報が正しく表示される", async () => {
    render(<WeatherPage />);

    // "今日" というテキストが表示されるのを待つ
    await waitFor(() => {
      expect(screen.getByText("今日")).toBeInTheDocument();
    });

    // 追加の検証（天気の状態、気温など）
    expect(screen.getByText("曇のち雨")).toBeInTheDocument();
  });
});
