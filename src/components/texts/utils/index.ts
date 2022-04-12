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
  isGreen: boolean;
  isOrange: boolean;
  text?: string;
  size?: string;
  isBold?: boolean;
  theme: {
    fontSize: {
      text: string;
    };
    fontWeight: {
      bold: string;
      initial: string;
    };
    colors: {
      cold:{
        green: string;
      };
      warm: {
        orange: string;
      };
      gray: string;
      white: string;
    };
  };
}
