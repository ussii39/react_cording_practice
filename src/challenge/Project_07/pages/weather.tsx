// WeatherPage.js
import React from "react";
import { WeatherContainer } from "../component/weatherContainer";

export const WeatherPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300">
      <WeatherContainer />
    </div>
  );
};
