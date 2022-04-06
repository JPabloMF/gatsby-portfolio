import styled from "styled-components";

import homeShape from "../../images/shapes/homeShape.png";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const getIconStyles = (icon: any) => styled(icon)`
  font-size: ${({ theme }) => theme.fontSize.icons};
  color: ${({ theme }) => theme.colors.lightBlue};
  &:hover {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${homeShape});
  background-repeat: no-repeat;
  background-position: right;
`;

export const StyledTextContainer = styled.div`
  height: 150px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const StyledIconsContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 400px;
  justify-content: space-between;
`;

export const StyledGithubIcon = getIconStyles(FaGithub);

export const StyledTwitter = getIconStyles(FaTwitter);

export const StyledLinkedin = getIconStyles(FaLinkedin);

export const StyledMail = getIconStyles(GoMail);
