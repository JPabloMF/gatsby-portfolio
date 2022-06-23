import React, { useState, useEffect } from "react";

import { MENU_ITEMS } from "../../constants";
import { StyledMenu, StyledLink } from "./styles";
import Circle from "./circle";

function Menu({ focusedSection }: { focusedSection : number }) {
  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => {
    setSelectedItem(focusedSection);
    const currentLink = MENU_ITEMS[focusedSection].link;
    window.history.pushState("Juan Pablo", currentLink, `/${currentLink}`);
  }, [focusedSection]);

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
