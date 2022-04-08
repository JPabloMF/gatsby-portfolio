export interface IGradientColor {
  isGreen: boolean;
  hasOpacity: boolean;
  theme: {
    colors: {
      cold: {
        blue: string;
        lightBlue: string;
        green: string;
        transparentBlue: string;
        transparentLightBlue: string;
        transparentGreen: string;
      };
      warm: {
        purple: string;
        pink: string;
        orange: string;
        transparentPurple: string;
        transparentPink: string;
        transparentOrange: string;
      };
    };
  };
}

export const getGradientColor = ({ isGreen, theme, hasOpacity }: IGradientColor) => {
  const {
    colors: {
      cold: {
        blue,
        lightBlue,
        green,
        transparentBlue,
        transparentLightBlue,
        transparentGreen,
      },
      warm: {
        purple,
        pink,
        orange,
        transparentPurple,
        transparentPink,
        transparentOrange,
      },
    },
  } = theme;
  if (hasOpacity) {
    if (isGreen)
      return `-webkit-linear-gradient(0deg, ${transparentBlue}, ${transparentLightBlue}, ${transparentGreen})`;
    return `-webkit-linear-gradient(0deg, ${transparentPurple}, ${transparentPink}, ${transparentOrange})`;
  }
  if (isGreen)
    return `-webkit-linear-gradient(0deg, ${blue}, ${lightBlue}, ${green});`;
  return `-webkit-linear-gradient(0deg, ${purple}, ${pink}, ${orange});`;
};
