import styled from "styled-components";

export const BrandContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  background-image: url("/images/overlay.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  background-color: transparent;
  padding-bottom: 12px;
  z-index: 1;
`;

export const Wave = styled.div`
  background-color: white;
  position: absolute;
  height: 85px;
  width: 100%;
  bottom: 0px;
  z-index: -1;
  display: none;
`;
