import { getGradientColor } from "../../../utils";
import styled from "styled-components";

interface IStyledCardProps {
  index: number;
  backgroundImage?: string;
  theme: any;
}

export const StyledCard = styled.div`
  position: relative;
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
  background-size: cover;
  border-radius: 1rem;
  color: #9ca3af;
  text-align: justify;
  transition: all 0.3s ease-out;
  display: flex;
  justify-content: center;
`;

export const StyledCardInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 80%;
  height: 220px;
  position: absolute;
  bottom: -110px;
  border-radius: 1rem;
  box-shadow: 0px 10px 11px 5px rgba(0, 0, 0, 0.44);
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

export const StyledCardInfoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 200px;
  width: 60%;

  & > p:nth-child(2) {
    line-height: 1.5;
  }
`;

export const StyledLink = styled.a<IStyledCardProps>`
  text-decoration: none;
  background-image: ${({ theme, index }: IStyledCardProps) =>
    `${getGradientColor({
      isGreen: index % 2 === 0 ? true : false,
      theme,
      hasOpacity: false,
    })}`};
    border-radius: 10px;
    height: 40px;
    width: 160px;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: 25px;
`;

export const StyledCardInfoIconsContainer = styled.div`
  & > svg {
    margin-right: 20px;
  }
`;