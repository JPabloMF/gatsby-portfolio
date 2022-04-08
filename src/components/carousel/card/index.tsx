import React from "react";

import { StyledCard } from "./styles";

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
    }
  }
}

function Card({ index, project }: ICardProps) {
  return (
    <StyledCard index={index} backgroundImage={project.backgroundImage}>
      Card
    </StyledCard>
  );
}

Card.defaultProps = defaultProps;

export default Card;
