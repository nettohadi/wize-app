import styled from "styled-components";

export const BrandContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  /* background-color: white; */
  background-image: url("/images/overlay.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 230px;
  background-color: #4695ea;
  border: 0px solid transparent;
  padding-bottom: 12px;
  z-index: 1;
`;

export const Wave = styled.div`
  background-color: white;
  position: absolute;
  height: 94px;
  width: 100%;
  bottom: 0px;
  z-index: -1;
`;
