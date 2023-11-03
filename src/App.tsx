import "./App.css";
import "@splidejs/react-splide/css";
import TempButton from "./components/TempButton";
import InfoCarousel from "./components/InfoCarousel";
import TempBars, { TempBarValue } from "./components/TempBar";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { GroupedWeatherData } from "./types";
import { fetchAll } from "./utils/api";

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

  console.log({ weatherData });
  return (
    <>
      <main>
        <TempButtonContainer>
          <TempButton
            title="Celcius"
            isChecked={isInCelcius}
            onClick={() => setIsInCelcius(!isInCelcius)}
          />
          <TempButton
            title="Fahrenheit"
            isChecked={!isInCelcius}
            onClick={() => setIsInCelcius(!isInCelcius)}
          />
        </TempButtonContainer>
        <InfoCarousel
          data={weatherData}
          onClick={(index) => setDayIndex(index)}
        />
        <TempBars values={weatherData[dayIndex]?.hourlyTemp} />
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
`;
