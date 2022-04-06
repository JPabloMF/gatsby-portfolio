import styled from "styled-components";

import aboutMeShape from "../../images/shapes/aboutMeShape.png";
import { getGradientColor } from "../../utils";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${aboutMeShape});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

export const StyledStackTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 500px;
  height: 125px;
`;

export const StyledStackIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 550px;
`;

export const StyledStackMainContainer = styled.div`
  width: 100%;
  justify-content: space-evenly;
  margin-top: 60px;
  display: flex;
`;

export const StyledCompaniesMainContainer = styled.div`
  width: 80%;
  padding: 30px 0;
  margin: 60px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f5f5f521;
  border-radius: 10px;
`;

export const StyledCompaniesLogosMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 45%;
  height: 400px;
  ${({ theme }) =>
    `background-image: ${getGradientColor({ isGreen: false, theme })}`};
  border-radius: 10px;
`;

export const StyledCompaniesLogoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const StyledCompaniesTextContainer = styled.div`
  width: 37%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const StyledCompanieLogo = styled.img`
  transform: scale(0.8);
`;
