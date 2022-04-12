import React from "react";

import { Text } from "../../../components/texts";
import Link from "../../../components/link";
import { MAP_ICONS } from "../../../constants";
import {
  StyledCardContainer,
  StyledCardInfo,
  StyledCardIconContainer,
} from "./styles";

interface ICardProps {
  title: string;
  description: string;
  date: string;
  tech: string;
  link: string;
  index: number;
}

function Card({ title, description, date, tech, link, index }: ICardProps) {
  const isGreenText = index % 2 === 0 ? true : false;
  const isOrangeText = !isGreenText;

  return (
    <StyledCardContainer>
      <StyledCardInfo>
        <Text text={title} isBold size="30px" />
        <Text
          text={date}
          size="18px"
          isGreen={isGreenText}
          isOrange={isOrangeText}
        />
        <Text text={description} size="18px" isGray />
        <Link
          href={link}
          isGreen={index % 2 === 0 ? true : false}
          width="183px"
          height="50px"
        >
          <Text text="Continue reading..." size="18px" />
        </Link>
      </StyledCardInfo>
      <StyledCardIconContainer>{MAP_ICONS[tech]}</StyledCardIconContainer>
    </StyledCardContainer>
  );
}

export default Card;
