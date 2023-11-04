import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  gap: 20px;
  min-width: 171px;
  background-color: #0a457b80;
  padding: 12px 20px;
  box-shadow: 0px 4px 16px rgba(10, 69, 123, 0.32);
  border-radius: 14px;
  color: white;
  font-size: 16px;
  font-family: Nunito Sans;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.8px;
  word-wrap: break-word;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #1d5e9b80;
  }

  &:active {
    background-color: #0c375f80;
  }
`;
