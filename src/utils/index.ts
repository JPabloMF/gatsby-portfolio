interface IGradientColor {
  isGreen: boolean;
  theme: {
    colors: {
      cold: { blue: string; lightBlue: string; green: string };
      warm: { purple: string; pink: string; orange: string };
    };
  };
}

export const getGradientColor = ({ isGreen, theme }: IGradientColor) => {
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
