import "./App.css";
import "@splidejs/react-splide/css";
import * as S from "./styles";
import TempButton from "./components/TempButton";
import WeatherCarousel from "./components/WeatherCarousel";
import TempBars from "./components/TempBars";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { GroupedWeatherData } from "./types";
import { fetchAll } from "./utils/api";

import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  const [dayIndex, setDayIndex] = useState(0);
  const [weatherData, setWeatherData] = useState<GroupedWeatherData[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isInCelcius, setIsInCelcius] = useState(true);

  const fetchWeatherData = (cityName = "") => {
    setLoading(true);
    setWeatherData([]);
    setError("");
    fetchAll(cityName)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((e) => {
        setWeatherData([]);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    // add artificial delay to show leading screen
    const timeout = setTimeout(() => fetchWeatherData(), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <>
      <main>
        <S.TempButtonContainer>
          <TempButton
            title="Celcius"
            isChecked={isInCelcius}
            onClick={() => setIsInCelcius(true)}
          />
          <TempButton
            title="Fahrenheit"
            isChecked={!isInCelcius}
            onClick={() => setIsInCelcius(false)}
          />
        </S.TempButtonContainer>
        <WeatherCarousel
          data={weatherData}
          onChange={(index) => setDayIndex(index)}
          isInCelcius={isInCelcius}
        />
        <TempBars
          values={weatherData[dayIndex]?.hourlyTemp}
          isInCelcius={isInCelcius}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
