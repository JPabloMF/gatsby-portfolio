import React, { useState } from "react";

import { MENU_ITEMS } from "../../constants";
import { StyledMenu, StyledLink } from "./styles";
import Circle from "./circle";

function Menu() {
  const [selectedItem, setSelectedItem] = useState(0);

  const isItemSelected = (index: number): boolean =>
    index === selectedItem ? true : false;

  return (
    <StyledMenu>
      <ul>
        {MENU_ITEMS.map((item, index) => (
          <li key={index} onClick={() => setSelectedItem(index)}>
            <StyledLink href={item.link} isSelected={isItemSelected(index)}>
              <Circle isSelected={isItemSelected(index)} />
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
}

export default Menu;
