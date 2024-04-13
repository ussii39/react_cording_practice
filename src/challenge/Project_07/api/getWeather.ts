import { Forecast } from "../component/weatherContainer";

export const getWeather = async (): Promise<any> => {
  const weatherData = await fetch(
    "https://weather.tsukumijima.net/api/forecast/city/130010"
  );
  //   console.log(await weatherData.json());
  return await weatherData.json();
};
