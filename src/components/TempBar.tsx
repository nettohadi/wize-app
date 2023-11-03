import styled from "styled-components";
import { TimeTemp } from "../types";

export type TempBarValue = {
  time: string;
  temperature: number;
};

const MAX_TEMPERATURE_IN_CELCIUS = 40;

const TempBars = ({ values }: { values: Array<TimeTemp> }) => {
  return (
    <TempBarGroup>
      {values?.map((value, index) => (
        <TempBar
          time={value.time}
          temperature={Math.round(value.temp)}
          key={index}
        />
      ))}
    </TempBarGroup>
  );
};

export default TempBars;

const TempBar = ({ time, temperature }: TempBarValue) => {
  return (
    <Container>
      <Wrapper>
        <Bar value={temperature}>
          <Value>{temperature}°</Value>
        </Bar>
      </Wrapper>
      {time.slice(0, 2)}
    </Container>
  );
};

const TempBarGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 12px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 120px;
  width: 37.75px;
  border-radius: 10px;
  background-color: #0a457b80;
`;

const Bar = styled.div<{ value: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: ${({ value }) => `${(value / MAX_TEMPERATURE_IN_CELCIUS) * 100}%`};
  background-color: #f6d476;
  border-radius: 0px 0px 10px 10px;
  font-size: 12px;
  overflow: hidden;
`;

const Value = styled.div`
  color: #0a457b;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 700;
  word-wrap: break-word;
`;
