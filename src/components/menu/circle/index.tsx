import React from 'react'

import { StyledCircleContainer, StyledCircle } from "./styles";

interface ICircleProps {
  isSelected: boolean;
}

const defaultProps: ICircleProps = {
  isSelected: false,
};

function Circle({ isSelected }: ICircleProps) {
  return (
    <StyledCircleContainer>
      <StyledCircle isSelected={isSelected} />
    </StyledCircleContainer>
  );
}

Circle.defaultProps = defaultProps;

export default Circle