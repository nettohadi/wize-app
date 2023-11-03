import {
  GroupedWeatherData,
  IDailyWeather,
  IHourlyWeather,
  IWeatherData,
  TimeTemp,
} from "../types";
import { dayNames } from "./index";
import fromUnixTime from "date-fns/fromUnixTime";
import { getUnixTime } from "date-fns";
import axios from "axios";

const appId = "a8e939c39574645ab3979952d50db4e5";
const units = "metric";

export async function fetchDaily(
  lat: number = -8.650979,
  long: number = 116.324944
) {
  const dailyEndpoint = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${appId}&units=${units}`;
  try {
    const response = await axios.get(dailyEndpoint);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function fetchHourly(cityName: string = "jakarta") {
  const hourlyEndpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${appId}&units=${units}`;

  try {
    const response = await axios.get(hourlyEndpoint);
    return response.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function fetchAll(cityName: string) {
  cityName = cityName || "yogyakarta";

  const hourlyData = await fetchHourly(cityName);
  if (hourlyData.cod !== "200") throw new Error(hourlyData.cod);

  const groupedByDay = transformWeatherData(hourlyData.list);

  console.log({ groupedByDay });
  return groupedByDay;
}

function transformWeatherData(weatherData: any): GroupedWeatherData[] {
  const groupedData: Record<
    string,
    {
      hourly: TimeTemp[];
      weatherConditions: Record<string, number>;
      icons: Record<string, number>;
    }
  > = {};

  // Process each weather entry
  weatherData.forEach((entry: any) => {
    const [year, month, day] = entry.dt_txt.split(" ")[0].split("-");
    const formattedDate = `${day}.${month}.${year}`; // format the date as "dd.mm.yyyy"
    const time = entry.dt_txt.split(" ")[1].slice(0, 5); // format the time

    if (!groupedData[formattedDate]) {
      groupedData[formattedDate] = {
        hourly: [],
        weatherConditions: {},
        icons: {},
      };
    }

    // Add temperature and time to the list for the date
    groupedData[formattedDate].hourly.push({ time, temp: entry.main.temp });

    // Count weather occurrences and icons for the date
    const weatherMain = entry.weather[0].main;

    groupedData[formattedDate].weatherConditions[weatherMain] =
      (groupedData[formattedDate].weatherConditions[weatherMain] || 0) + 1;

    const icon = entry.weather[0].icon;

    groupedData[formattedDate].icons[icon] =
      (groupedData[formattedDate].icons[icon] || 0) + 1;
  });

  // Transform the grouped records into the desired format
  return Object.keys(groupedData).map((date) => {
    const { hourly, weatherConditions, icons } = groupedData[date];
    const totalTemp = hourly.reduce((acc, cur) => acc + cur.temp, 0);
    const averageTemp = parseFloat((totalTemp / hourly.length).toFixed(2));

    // Determine the most frequent weather condition and icon
    const averageWeather = Object.keys(weatherConditions).reduce((a, b) =>
      weatherConditions[b] > weatherConditions[a] ? b : a
    );
    const icon = Object.keys(icons).reduce((a, b) =>
      icons[b] > icons[a] ? b : a
    );

    return {
      date,
      averageWeather,
      averageTemp,
      icon,
      hourlyTemp: hourly,
    };
  });
}
