import * as S from "./styles";
import { TimeTemp } from "../../types";
import { celsiusToFahrenheit } from "../../utils";

export type TempBarValue = {
  time: string;
  temperature: number;
};

let maxTemperature = 40;

const TempBars = ({
  values,
  isInCelcius,
}: {
  values: Array<TimeTemp>;
  isInCelcius: boolean;
}) => {
  if (isInCelcius) {
    maxTemperature = 40;
  } else {
    maxTemperature = 115;
  }
  return (
    <S.TempBarGroup>
      {values?.map((value, index) => (
        <TempBar
          time={value.time}
          temperature={
            isInCelcius
              ? Math.round(value.temp)
              : celsiusToFahrenheit(value.temp)
          }
          key={index}
        />
      ))}
    </S.TempBarGroup>
  );
};

export default TempBars;

const TempBar = ({ time, temperature }: TempBarValue) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Bar value={temperature} maxTemperature={maxTemperature}>
          <S.Value>{temperature}°</S.Value>
        </S.Bar>
      </S.Wrapper>
      {time.slice(0, 2)}
    </S.Container>
  );
};
