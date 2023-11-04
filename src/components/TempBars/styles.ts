import styled from "styled-components";

export const TempBarGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 95%;
  justify-content: center;
  max-width: 355px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: rgba(10, 69, 123, 0.5);
  font-weight: 700;
  font-size: 16px;
  font-family: Poppins;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 120px;
  width: 100%;
  max-width: 37px;
  border-radius: 10px;
  background-color: #0a457b80;
`;

export const Bar = styled.div<{ value: number; maxTemperature: number }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: ${({ value, maxTemperature }) =>
    `${(value / maxTemperature) * 100}%`};
  background-color: #f6d476;
  border-radius: 0px 0px 10px 10px;
  font-size: 12px;
  overflow: hidden;
`;

export const Value = styled.div`
  color: #0a457b;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 700;
  word-wrap: break-word;
`;
