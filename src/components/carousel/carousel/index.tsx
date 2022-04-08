import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

import { StyledCarousel, StyledNav, StyledCardContainer } from "./styles";

interface ICarouselProps {
  children: React.ReactNode;
}

function Carousel({ children }: ICarouselProps) {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <StyledCarousel>
      {active > 0 && (
        <StyledNav className="left" onClick={() => setActive((i) => i - 1)}>
          <TiChevronLeftOutline />
        </StyledNav>
      )}
      {React.Children.map(children, (child: React.ReactNode, index: number) => (
        <StyledCardContainer
          active={index === active ? 1 : 0}
          offset={(active - index) / 3}
          absOffset={index !== active ? Math.abs(active - index) / 3 : null}
          pointerEvents={active === index ? "auto" : "none"}
          className="card-container"
        >
          {child}
        </StyledCardContainer>
      ))}
      {active < count - 1 && (
        <StyledNav className="right" onClick={() => setActive((i) => i + 1)}>
          <TiChevronRightOutline />
        </StyledNav>
      )}
    </StyledCarousel>
  );
}

export default Carousel