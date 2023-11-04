import sunny from "../assets/images/sunny.png";
import windy from "../assets/images/windy.png";
import thunderStorm from "../assets/images/thunderstorm.png";
import clouds from "../assets/images/clouds.png";
import rainy from "../assets/images/rainy.png";

/**
 Images is taken from https://www.flaticon.com/
 Images created by fjstudio
 <div>Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
 */

export const weatherImages: any = {
  "01d": sunny,
  "02d": sunny,
  "03d": sunny,
  "03n": sunny,
  "04d": sunny,
  "04n": sunny,
  "50d": windy,
  "11d": thunderStorm,
  "09d": rainy,
  "10d": rainy,
  "10n": rainy,
};

export function getWeatherImage(iconCodeFromApi: string = ""): string {
  return weatherImages[iconCodeFromApi] ?? weatherImages["01d"];
}

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/*
 * http://history.openweathermap.org/data/2.5/history/city?
 * lat=-8.650979&lon=116.324944&type=hour&start=1627147310&end=1627147310&appid=6d875ebff1f24739c03d55ca8d6dc535&units=metric
 *
 *
 * https://api.openweathermap.org/data/2.5/onecall?lat=-8.650979&lon=116.324944&appid=6d875ebff1f24739c03d55ca8d6dc535&units=metric
 *
 * https://api.openweathermap.org/data/2.5/forecast?q=mataram&appid=6d875ebff1f24739c03d55ca8d6dc535&units=metric
 * */

export const formatTemperature = (
  temperature: number,
  isInCelcius: boolean = true
) => {
  return isInCelcius
    ? `${Math.round(temperature)}°C`
    : `${celsiusToFahrenheit(temperature)}°F`;
};

export const celsiusToFahrenheit = (temperatureInCelcius: number) => {
  return Math.round((temperatureInCelcius * 9) / 5) + 32;
};
