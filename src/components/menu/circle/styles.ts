import styled, { keyframes, css } from "styled-components";

interface ICircleProps {
  isSelected: boolean;
}

export const StyledCircleContainer = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
`;

const pulseRing = keyframes`
  0% {
    transform: scale(.11);
  }
  80%, 100% {
    opacity: 0;
  }
`;
const pulseDot = keyframes`
  0% {
    transform: scale(.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.8);
  }
`;

export const StyledCircle = styled.div<ICircleProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 20px;
  height: 20px;
  &:before {
    content: "";
    position: relative;
    display: block;
    width: 200%;
    height: 200%;
    box-sizing: border-box;
    margin-left: -50%;
    margin-top: -50%;
    border-radius: 45px;
    background-color: ${({ theme }) => theme.colors.white};
    animation: ${({ isSelected }) =>
      isSelected
        ? css`
            ${pulseRing} 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite
          `
        : ""};
    ${({ isSelected }) => !isSelected && "display: none;"}
  }
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme, isSelected }) =>
      !isSelected ? theme.colors.gray : theme.colors.white};
    border-radius: 15px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    animation: ${({ isSelected }) =>
      isSelected
        ? css`
            ${pulseDot} 1.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite;
          `
        : ""};
    ${({ isSelected }) => !isSelected && "transform: scale(.8);"}
  }
`;
