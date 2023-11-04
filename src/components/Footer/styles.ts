import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  background-image: url("/images/overlay.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  max-width: 360px;
  min-width: 360px;
  height: 190px;
  background-color: transparent;
  padding-bottom: 12px;
  z-index: 1;
`;

export const Wave = styled.div`
  background-color: white;
  height: 80px;
  width: 100%;
  flex-grow: 1;
  bottom: 0;
  position: absolute;
`;
