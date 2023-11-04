import "./App.css";
import "@splidejs/react-splide/css";
import TempButton from "./components/TempButton";
import WeatherCarousel from "./components/InfoCarousel";
import TempBars from "./components/TempBars";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GroupedWeatherData } from "./types";
import { fetchAll } from "./utils/api";

import LoadingScreen from "./components/LoadingScreen";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  const [dayIndex, setDayIndex] = useState(0);
  const [weatherData, setWeatherData] = useState<GroupedWeatherData[]>([]);
  const [isLoading, setLoading] = useState(false);
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
    fetchWeatherData();
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
        <TempButtonContainer>
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
        </TempButtonContainer>
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

const TempButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding-top: 40px;
`;
