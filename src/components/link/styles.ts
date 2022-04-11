import styled from "styled-components";

import { getGradientColor } from "../../utils/index";

interface IStyledCardProps {
  isGreen: boolean;
  height?: string;
  width?: string;
  backgroundImage?: string;
  theme: any;
}

export const StyledLink = styled.a<IStyledCardProps>`
  text-decoration: none;
  background-image: ${({ theme, isGreen }: IStyledCardProps) =>
    `${getGradientColor({
      isGreen,
      theme,
      hasOpacity: false,
    })}`};
  border-radius: 10px;
  height: ${({ height }) => height || "40px"};
  width: ${({ width }) => width || "160px"};
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
`;