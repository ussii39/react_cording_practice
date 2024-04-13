import { Forecast } from "./weatherContainer";

interface WeatherCardProps {
  forecast: Forecast;
}

export const WeatherCard = ({ forecast }: WeatherCardProps) => {
  const getWeatherIcon = (weather: string) => {
    switch (weather) {
      case "晴れ":
        return "☀️";
      case "曇り":
        return "☁️";
      case "雨":
        return "🌧️";
      default:
        return "❓";
    }
  };

  return (
    <div className="w-1/4 pa-2">
      <div className="border rounded bg-gray-100 p-4 h-40 flex flex-col justify-between">
        <div className="text-center" data-testid="dateLabel">
          {forecast.dateLabel}
        </div>
        <div className="text-center text-4xl mb-2">
          <span role="img" aria-label={forecast.telop}>
            {getWeatherIcon(forecast.telop)}
          </span>
        </div>
        <div className="text-center">{forecast.telop}</div>
        <div className="text-center">
          {forecast.temperature.max.celsius}°C /{" "}
          {forecast.temperature.min.celsius}°C
        </div>
      </div>
    </div>
  );
};
