export interface ITitleProps {
  isGreen: boolean;
  text?: string;
  size?: string;
  theme: {
    fontSize: {
      title: string;
      subtitle: string;
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

export interface ITextProps {
  isGray: boolean;
  text?: string;
  size?: string;
  theme: {
    fontSize: {
      text: string;
    };
    colors: {
      gray: string;
      white: string;
    };
  };
}

interface IGradientColor {
    isGreen: boolean;
    theme: {
        colors: {
            cold: { blue: string; lightBlue: string; green: string; };
            warm: { purple: string; pink: string; orange: string; };
        }
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