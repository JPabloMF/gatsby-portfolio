import { getGradientColor } from "../../../utils";
import styled from "styled-components";

interface IStyledCardProps {
  index: number;
  backgroundImage: string;
  theme: any
}

export const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  background-image: ${({ theme, index }: IStyledCardProps) =>
      `${getGradientColor({
        isGreen: index % 2 === 0 ? true : false,
        theme,
        hasOpacity: true,
      })}`},
    url(${({ backgroundImage }: IStyledCardProps) => backgroundImage});
  border-radius: 1rem;
  color: #9ca3af;
  text-align: justify;
  transition: all 0.3s ease-out;
`;
