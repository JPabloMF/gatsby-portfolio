import styled from "styled-components";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiTypescript, SiGodotengine, SiAseprite } from "react-icons/si";

interface IIconProps {
  size?: string;
  theme: {
    fontSize: {
      icons: string;
    };
    colors: {
      tech: {
        html: string;
        css: string;
        js: string;
        git: string;
        react: string;
        redux: string;
        typescript: string;
        godot: string;
        aseprite: string;
      };
    };
  };
}

const StyledHTMLIcon = styled(FaHtml5)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.html};
`;

const StyledCSSIcon = styled(FaCss3Alt)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.css};
`;

const StyledJSIcon = styled(FaJs)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.js};
`;

const StyledReactIcon = styled(FaReact)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.react};
`;

const StyledGitIcon = styled(FaGitAlt)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.git};
`;

const StyledReduxIcon = styled(SiRedux)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.redux};
`;

const StyledTypescriptIcon = styled(SiTypescript)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.typescript};
`;

const StyledGodotIcon = styled(SiGodotengine)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.godot};
`;

const StyledAsepriteIcon = styled(SiAseprite)`
  font-size: ${({ theme, size }: IIconProps) => size || theme.fontSize.icons};
  color: ${({ theme }: IIconProps) => theme.colors.tech.aseprite};
`;

export {
  StyledHTMLIcon as IHTML,
  StyledCSSIcon as ICSS,
  StyledJSIcon as IJS,
  StyledReactIcon as IReact,
  StyledGitIcon as IGit,
  StyledReduxIcon as IRedux,
  StyledTypescriptIcon as ITypescript,
  StyledGodotIcon as IGodot,
  StyledAsepriteIcon as IAseprite,
};
