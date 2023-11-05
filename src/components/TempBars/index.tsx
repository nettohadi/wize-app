import * as S from "./styles";
import { TimeTemp } from "../../types";
import { celsiusToFahrenheit } from "../../utils";
import useFirstRenderAnimation from "../../utils/useFirstRenderAnimation.hook";

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
  const { isFirstRender, transition } = useFirstRenderAnimation();

  if (isInCelcius) {
    maxTemperature = 40;
  } else {
    maxTemperature = 115;
  }

  return (
    <S.TempBarGroup>
      {values?.map((value, index) => (
        <TempBar
          transition={transition}
          time={value.time}
          temperature={
            isInCelcius
              ? Math.round(isFirstRender ? 0 : value.temp)
              : celsiusToFahrenheit(isFirstRender ? 0 : value.temp)
          }
          key={index}
        />
      ))}
    </S.TempBarGroup>
  );
};

export default TempBars;

const TempBar = ({
  time,
  temperature,
  transition,
}: TempBarValue & { transition: any }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Bar
          value={temperature}
          maxTemperature={maxTemperature}
          transition={transition}
        >
          <S.Value>{temperature}°</S.Value>
        </S.Bar>
      </S.Wrapper>
      {time.slice(0, 2)}
    </S.Container>
  );
};
