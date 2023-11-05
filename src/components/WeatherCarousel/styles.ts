import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const Slide = styled.div<{
  isFirstRender: boolean;
  transition: string;
}>`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 360px;
  width: 240px;
  position: relative;
  margin-top: 20px;
  opacity: 0.7;

  > .box {
    background-color: #0a457b80;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.32);
    border-radius: 24px;
    height: 180px;
    width: 240px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;
    padding-top: 48px;
  }

  .temperature {
    color: #f6d476;
    font-size: 64px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
    opacity: ${({ isFirstRender }) => (isFirstRender ? "0" : "1")};
    transition: ${({ transition }) => transition};
  }

  .date {
    color: white;
    font-size: 24px;
    font-family: Poppins;
    font-weight: 700;
    word-wrap: break-word;
    opacity: ${({ isFirstRender }) => (isFirstRender ? "0" : "1")};
    transition: ${({ transition }) => transition};
  }

  > img {
    position: absolute;
    top: -20px;
    width: 240px;
    height: 185px;
    object-fit: cover;
    object-position: center;
    opacity: ${({ isFirstRender }) => (isFirstRender ? "0" : "1")};
    transition: ${({ transition }) => transition};
  }
`;

export const Arrow = styled.img`
  height: 37px;
  width: 32px;
`;

export const Wrapper = styled.div<{
  isFirstRender: boolean;
  transition: string;
}>``;
