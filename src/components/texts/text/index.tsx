import React from 'react'

import StyledText from "./styles";

interface ITextProps {
  text: string;
  isGray: boolean;
  size?: string;
}

const defaultProps: ITextProps = {
  text: "Default text",
  isGray: false,
};


function Text({ text, isGray, size }: ITextProps) {
  return (
    <StyledText isGray={isGray} text={text} size={size}>
      {text}
    </StyledText>
  );
}

Text.defaultProps = defaultProps;

export default Text