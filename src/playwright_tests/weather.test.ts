import { test, expect } from "@playwright/test";
import { WeatherPage } from "../challenge/Project_07/pages/weather";

test.describe("WeatherPage Component", () => {
  test.beforeEach(async ({ page }) => {
    await page.route(
      "https://weather.tsukumijima.net/api/forecast/city/130010",
      async (route) => {
        const json = {
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
                min: {
                  celsius: null,
                  fahrenheit: null,
                },
                max: {
                  celsius: null,
                  fahrenheit: null,
                },
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
        };
        await route.fulfill({ json });
      }
    );

    await page.goto("http://localhost:3000/project_06/weather");
  });

  test("天気予報が正しく表示される", async ({ page }) => {
    await expect(page.locator("text=今日")).toBeVisible();
    await expect(page.locator("text=曇のち雨")).toBeVisible();
  });
});
