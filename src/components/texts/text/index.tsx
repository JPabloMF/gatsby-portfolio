import React from 'react'

import StyledText from "./styles";

interface ITextProps {
  text: string;
  isGray: boolean;
  size?: string;
  isBold?: boolean;
  isGreen: boolean;
  isOrange: boolean;
}

const defaultProps: ITextProps = {
  text: "Default text",
  isGray: false,
  isBold: false,
  isGreen: false,
  isOrange: false,
};


function Text({ text, isGray, size, isBold, isGreen, isOrange }: ITextProps) {
  return (
    <StyledText
      isGray={isGray}
      text={text}
      size={size}
      isBold={isBold}
      isGreen={isGreen}
      isOrange={isOrange}
    >
      {text}
    </StyledText>
  );
}

Text.defaultProps = defaultProps;

export default Text