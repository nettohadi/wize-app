import styled from "styled-components";

type TempButtonProps = {
  title: string;
  isChecked: boolean;
  onClick?: () => void;
};

const TempButton = ({ title, isChecked = false, onClick }: TempButtonProps) => {
  return (
    <Button onClick={onClick}>
      <RadioButton isChecked={isChecked} />
      {title}
    </Button>
  );
};

export default TempButton;

const Button = styled.button`
  display: flex;
  gap: 20px;
  min-width: 150px;
  background-color: #0a457b80;
  padding: 12px 20px;
  border-radius: 17px;
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

const RadioButton = ({ isChecked = false }: { isChecked: boolean }) => {
  return isChecked ? (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="RadioButtonCheckedRounded">
        <g id="Vector">
          <path
            d="M11 15.5833C13.5313 15.5833 15.5834 13.5313 15.5834 11C15.5834 8.4687 13.5313 6.41668 11 6.41668C8.46874 6.41668 6.41671 8.4687 6.41671 11C6.41671 13.5313 8.46874 15.5833 11 15.5833Z"
            fill="white"
          />
          <path
            d="M11 1.83334C5.94004 1.83334 1.83337 5.94001 1.83337 11C1.83337 16.06 5.94004 20.1667 11 20.1667C16.06 20.1667 20.1667 16.06 20.1667 11C20.1667 5.94001 16.06 1.83334 11 1.83334ZM11 18.3333C6.94837 18.3333 3.66671 15.0517 3.66671 11C3.66671 6.94834 6.94837 3.66668 11 3.66668C15.0517 3.66668 18.3334 6.94834 18.3334 11C18.3334 15.0517 15.0517 18.3333 11 18.3333Z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  ) : (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="RadioButtonUncheckedRounded">
        <path
          id="Vector"
          d="M11 1.83334C5.94004 1.83334 1.83337 5.94001 1.83337 11C1.83337 16.06 5.94004 20.1667 11 20.1667C16.06 20.1667 20.1667 16.06 20.1667 11C20.1667 5.94001 16.06 1.83334 11 1.83334ZM11 18.3333C6.94837 18.3333 3.66671 15.0517 3.66671 11C3.66671 6.94834 6.94837 3.66668 11 3.66668C15.0517 3.66668 18.3334 6.94834 18.3334 11C18.3334 15.0517 15.0517 18.3333 11 18.3333Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
