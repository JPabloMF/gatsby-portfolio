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

interface IHandleMenuScrollProps {
  homeRefCurrent: HTMLElement | null;
  aboutmeRefCurrent: HTMLElement | null;
  projectRefCurrent: HTMLElement | null;
  blogRefCurrent: HTMLElement | null;
  setFocusedSection: (value: number) => void;
}

export const handleMenuScroll = ({
  homeRefCurrent,
  aboutmeRefCurrent,
  projectRefCurrent,
  blogRefCurrent,
  setFocusedSection,
}: IHandleMenuScrollProps) => {
  const { scrollY } = window;

  if (
    homeRefCurrent &&
    scrollY < homeRefCurrent.offsetTop + (homeRefCurrent.offsetHeight - 150)
  ) {
    setFocusedSection(0);
  } else if (
    homeRefCurrent &&
    aboutmeRefCurrent &&
    scrollY > homeRefCurrent.offsetHeight - 150 &&
    scrollY <
      homeRefCurrent.offsetHeight + (aboutmeRefCurrent?.offsetHeight - 200)
  ) {
    setFocusedSection(1);
  } else if (
    homeRefCurrent &&
    aboutmeRefCurrent &&
    projectRefCurrent &&
    scrollY >
      homeRefCurrent?.offsetHeight + (aboutmeRefCurrent?.offsetHeight - 200) &&
    scrollY <
      homeRefCurrent?.offsetHeight -
        150 +
        (aboutmeRefCurrent?.offsetHeight - 200) +
        projectRefCurrent?.offsetHeight
  ) {
    setFocusedSection(2);
  } else if (
    homeRefCurrent &&
    aboutmeRefCurrent &&
    projectRefCurrent &&
    blogRefCurrent &&
    scrollY >
      homeRefCurrent?.offsetHeight +
        aboutmeRefCurrent?.offsetHeight +
        blogRefCurrent?.offsetHeight &&
    scrollY <
      homeRefCurrent?.offsetHeight +
        aboutmeRefCurrent?.offsetHeight +
        projectRefCurrent?.offsetHeight +
        blogRefCurrent?.offsetHeight
  ) {
    setFocusedSection(3);
  }
};