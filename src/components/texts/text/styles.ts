import styled from "styled-components";

import { ITextProps } from "../utils";

const StyledText = styled.p`
  margin: 0;
  font-size: ${({ size, theme: { fontSize } }: ITextProps) =>
    size || fontSize.text};
  color: ${({ theme: { colors } }: ITextProps) => colors.white};
`;

export default StyledText;
