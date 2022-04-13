import React from "react";

import { StyledContainer } from "./styles";
import { SubTitle } from "../../components/texts";
import { Carousel, Card } from "../../components/carousel";

import { CAROUSEL_PROJECTS } from "../../constants";

function Projects() {
  return (
    <StyledContainer id="projects">
      <SubTitle text="Projects" />
      <Carousel>
        {CAROUSEL_PROJECTS.map((project, index) => (
          <Card key={index} project={project} index={index} />
        ))}
      </Carousel>
    </StyledContainer>
  );
}

export default Projects;
