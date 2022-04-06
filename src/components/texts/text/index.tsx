import React from 'react'

import StyledText from "./styles";

interface ITextProps {
  text: string;
  isGray: boolean;
  size?: string;
  isBold?: boolean;
}

const defaultProps: ITextProps = {
  text: "Default text",
  isGray: false,
  isBold: false,
};


function Text({ text, isGray, size, isBold }: ITextProps) {
  return (
    <StyledText isGray={isGray} text={text} size={size} isBold={isBold}>
      {text}
    </StyledText>
  );
}

Text.defaultProps = defaultProps;

export default Text