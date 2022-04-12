import styled from "styled-components";

import { ITextProps } from "../utils";

const StyledText = styled.p`
  margin: 0;
  font-size: ${({ size, theme: { fontSize } }: ITextProps) =>
    size || fontSize.text};
  color: ${({ theme: { colors }, isGray, isGreen, isOrange }: ITextProps) =>
    isGray
      ? colors.gray
      : isGreen
      ? colors.cold.green
      : isOrange
      ? colors.warm.orange
      : colors.white};
  font-weight: ${({ theme: { fontWeight }, isBold }: ITextProps) =>
    isBold ? fontWeight.bold : fontWeight.initial};
`;

export default StyledText;
