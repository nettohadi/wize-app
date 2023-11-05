import styled from "styled-components";

export const TempButtonContainer = styled.div<{
  isFirstRender: boolean;
  transition: string;
}>`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 40px 8px 0px 8px;
  max-width: 358px;
  width: calc(100% - 16px);
  transform: translateY(
    ${({ isFirstRender }) => (isFirstRender ? "-100px" : "0px")}
  );
  transition: ${({ transition }) => transition};
`;

export const Wrapper = styled.div<{
  isFirstRender: boolean;
  transition: string;
}>`
  opacity: ${({ isFirstRender }) => (isFirstRender ? "0" : "1")};
  transition: ${({ transition }) => transition};
`;
