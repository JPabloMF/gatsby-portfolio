import React from "react";

import StyledTitle from "./styles";

interface ITitleProps {
  text?: string;
  isGreen: boolean;
  size?: string;
}

const defaultProps: ITitleProps = {
  text: "Default title",
  isGreen: false,
};

function Title({ text, isGreen, size }: ITitleProps) {
  return (
    <StyledTitle isGreen={isGreen} text={text} size={size}>
      {text}
    </StyledTitle>
  );
}

Title.defaultProps = defaultProps;

export default Title;
