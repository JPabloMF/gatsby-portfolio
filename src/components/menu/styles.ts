import styled from "styled-components";

interface IMenuProps {
  transparent?: boolean;
}

export const StyledMenu = styled.nav<IMenuProps>`
  position: fixed;
  z-index: 10;
  width: auto;
  height: 100%;
  top: 0;
  right: 0;
  & > ul {
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    & > li {
      margin: 0 20px;
      & > a {
        text-decoration: none;
      }
    }
  }
`;

interface ILinkProps {
  isSelected: boolean;
}

export const StyledLink = styled.a<ILinkProps>`
  &:hover > div > div:after {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;