import React from 'react'

import { StyledLink } from "./styles";

interface ILinkProps {
  children: React.ReactNode;
  isGreen: boolean;
  href: string;
  height?: string;
  width?: string;
}

function Link({ children, isGreen, href, height, width }: ILinkProps) {
  return (
    <StyledLink
      href={href}
      isGreen={isGreen}
      height={height}
      width={width}
      target="_blank"
    >
      {children}
    </StyledLink>
  );
}

export default Link;