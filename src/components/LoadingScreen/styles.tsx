import styled from "styled-components";

export const Container = styled.div`
  background-color: #4695ea;
`;

export const Wave = styled.div`
  background-image: url("/images/overlay.png");
  background-repeat: no-repeat;
  background-size: fill;
  background-position: center;
  width: 100%;
  height: 200px;
  background-color: transparent;
  position: absolute;
  top: -120px;
`;

export const BlueBox = styled.div`
  background-color: #4695ea;
  width: 100%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WhiteBox = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 160px;
  gap: 10px;
`;

export const BrandStatement = styled.div`
  color: #0a457b;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  word-wrap: break-word;
`;

export const LoadingMessage = styled.div`
  color: rgba(10, 69, 123, 0.5);
  font-size: 16px;
  font-family: Poppins;
  font-weight: 300;
  word-wrap: break-word;
  margin-bottom: 20px;
`;

export const LoadingContainer = styled.div`
  width: 200px;
  height: 180px;
  overflow: hidden;
`;
