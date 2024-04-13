// WeatherContainer.js
import React, { useEffect, useState } from "react";
import { WeatherCard } from "./weatherCard";
import { getWeather } from "../api/getWeather";

export interface Forecast {
  chanceOfRain: {
    T00_06: string;
    T06_12: string;
    T12_18: string;
    T18_24: string;
  };
  date: string;
  dateLabel: string;
  detail: {
    weather: string;
    wind: string;
    wave: string;
  };
  image: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  telop: string;
  temperature: {
    max: {
      celsius: string;
      fahrenheit: string;
    };
    min: {
      celsius: string;
      fahrenheit: string;
    };
  };
}

export const WeatherContainer = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);

  useEffect(() => {
    callWeatherApi();
  }, []);

  const callWeatherApi = async () => {
    const data = await getWeather();
    if (data) {
      console.log(data.forecasts);
      setForecasts(data.forecasts);
    }
  };

  return (
    <div className="text-center border w-3/5 bg-white rounded-xl bg-opacity-90">
      <div className="text-center border w-full bg-white rounded-xl bg-opacity-90">
        <h3 className="text-white bg-red-500 py-4 rounded-t-xl font-bold">
          週間天気予報
        </h3>
        <div className="w-full justify-center flex gap-6 items-center py-8">
          {forecasts?.length > 0 &&
            forecasts.map((data, index) => (
              <WeatherCard key={index} forecast={data} />
            ))}
        </div>
      </div>
    </div>
  );
};
