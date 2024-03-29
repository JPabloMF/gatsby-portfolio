import styled from "styled-components";

interface ICardContainer {
  active: number;
  offset: number;
  absOffset: number | null;
  pointerEvents: string;
}

export const StyledCarousel = styled.div`
  position: relative;
  width: 50rem;
  height: 25rem;
  perspective: 500px;
  transform-style: preserve-3d;
`;

export const StyledCardContainer = styled.div<ICardContainer>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotateY(calc(var(--offset) * 50deg))
    scaleY(calc(1 + var(--abs-offset) * -0.4))
    translateZ(calc(var(--abs-offset) * -30rem))
    translateX(calc(var(--offset) / var(--abs-offset) * -5rem));
  filter: blur(calc(var(--abs-offset) * 1rem));
  transition: all 0.3s ease-out;
  --active: ${({ active }: ICardContainer) => active};
  --offset: ${({ offset }: ICardContainer) => offset};
  --abs-offset: ${({ absOffset }: ICardContainer) => absOffset};
  pointer-events: ${({ pointerEvents }: ICardContainer) => pointerEvents};
`;

export const StyledNav = styled.button`
  color: white;
  font-size: 5rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  z-index: 2;
  cursor: pointer;
  user-select: none;
  background: unset;
  border: unset;
  &.left {
    transform: translateX(-100%) translatey(-50%);
  }

  &.right {
    right: 0;
    transform: translateX(100%) translatey(-50%);
  }
`;
