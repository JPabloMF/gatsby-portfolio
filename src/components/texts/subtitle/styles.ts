import styled from "styled-components";

import { ITitleProps } from "../utils";
import { getGradientColor } from "../../../utils";

const StyledSubTitle = styled.h2`
  margin: 0;
  font-size: ${({ size, theme: { fontSize } }: ITitleProps) =>
    size || fontSize.subtitle};
  ${({ isGreen, theme }: ITitleProps) =>
    `background-image: ${getGradientColor({ isGreen, theme })}`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: "Arial-Black";
  position: relative;

  &::after {
    content: "${({ text }: ITitleProps) => String(text)}";
    ${({ isGreen, theme }: ITitleProps) =>
      `background-image: ${getGradientColor({ isGreen, theme })}`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: -5px;
    top: 0;
    position: absolute;
    opacity: 0.6;
    filter: blur(10px);
    transform: scaleY(1.15) scaleX(1.02);
  }
`;

export default StyledSubTitle;
