import React from "react";

import {
  StyledCard,
  StyledCardInfo,
  StyledCardInfoDescriptionContainer,
  StyledLink,
  StyledCardInfoIconsContainer,
} from "./styles";
import { Text } from "../../texts";
import { MAP_ICONS } from "../../../constants";
import { IoEnterOutline } from "react-icons/io5";

interface ICardProps {
  index: number;
  project: {
    title: string;
    description: string;
    backgroundImage: string;
    technologies: string[];
    button: {
      title: string;
      link: string;
    };
  };
}

const defaultProps: ICardProps = {
  index: 0,
  project: {
    title: "Default title",
    description: "Default description",
    backgroundImage: "",
    technologies: ["Default technology"],
    button: {
      title: "Default button",
      link: "",
    },
  },
};

function Card({ index, project }: ICardProps) {
  return (
    <StyledCard index={index} backgroundImage={project.backgroundImage}>
      <StyledCardInfo>
        <StyledCardInfoDescriptionContainer>
          <Text text={project.title} isBold size="30px" />
          <Text text={project.description} size="18px" />
          <StyledCardInfoIconsContainer>
            {project.technologies.map((technology) => MAP_ICONS[technology])}
          </StyledCardInfoIconsContainer>
        </StyledCardInfoDescriptionContainer>
        <StyledLink href={project.button.link} index={index} target="_blank">
          <Text text={project.button.title} size="18px" />
          <IoEnterOutline />
        </StyledLink>
      </StyledCardInfo>
    </StyledCard>
  );
}

Card.defaultProps = defaultProps;

export default Card;
