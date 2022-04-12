import React from "react";

import { Text } from "../../components/texts";
import { StyledFooter } from "./styles";

function Footer() {
  return (
    <StyledFooter>
      <Text text="Happy coding!" size="28px" isGray />
    </StyledFooter>
  );
}

export default Footer;
