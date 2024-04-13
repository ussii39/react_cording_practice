import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./src/playwright_tests",

  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: "http://localhost:3000",
  },
};

export default config;
