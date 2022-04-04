import styled from "styled-components";

interface TitleProps {
  isGreen: boolean;
  text?: string;
  size?: string;
  theme: {
    fontSize: {
      title: string;
    };
    colors: {
      cold: {
        blue: string;
        lightBlue: string;
        green: string;
      };
      warm: {
        purple: string;
        pink: string;
        orange: string;
      };
    };
  };
}

const getGradientColor = (isGreen: boolean, theme: any) => {
  const {
    colors: {
      cold: { blue, lightBlue, green },
      warm: { purple, pink, orange },
    },
  } = theme;
  if (isGreen)
    return `-webkit-linear-gradient(0deg, ${blue}, ${lightBlue}, ${green});`;
  return `-webkit-linear-gradient(0deg, ${purple}, ${pink}, ${orange});`;
};

const StyledTitle = styled.h1`
  font-size: ${({ size, theme: { fontSize } }: TitleProps) =>
    size || fontSize.title};
  ${({ isGreen, theme }: TitleProps) =>
    `background-image: ${getGradientColor(isGreen, theme)}`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  font-family: "Arial-Black";
  position: relative;
  
  &::after {
    content: "${({ text }: TitleProps) => String(text)}";
    ${({ isGreen, theme }: TitleProps) =>
      `background-image: ${getGradientColor(isGreen, theme)}`};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    left: -5px;
    top: 0;
    z-index: -1;
    position: absolute;
    opacity: 0.5;
    filter: blur(10px);
    transform: scaleY(1.15) scaleX(1.02);
  }
`;

export default StyledTitle;
