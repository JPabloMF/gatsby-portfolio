import React from "react";

import StyledSubTitle from "./styles";

interface ISubTitleProps {
  text?: string;
  isGreen: boolean;
  size?: string;
}

const defaultProps: ISubTitleProps = {
  text: "Default subtitle",
  isGreen: false,
};

function SubTitle({ text, isGreen, size }: ISubTitleProps) {
  return (
    <StyledSubTitle isGreen={isGreen} text={text} size={size}>
      {text}
    </StyledSubTitle>
  );
}

SubTitle.defaultProps = defaultProps;

export default SubTitle;
