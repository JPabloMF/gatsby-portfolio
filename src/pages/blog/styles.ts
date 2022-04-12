import styled from "styled-components";

import blogShape from "../../images/shapes/blogShape.png";

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${blogShape});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  & > h2 {
    margin-bottom: 50px;
  };
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: calc(100% - 135px);
    background-color: ${({ theme }) => theme.colors.blue};
    z-index: -1;
  };
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const StyledLinkContainer = styled.div`
  margin-top: 50px;
  display: flex;
  transform: translateX(-15px);
  & > a{
    display: flex;
    justify-content: center;
  }
`;
