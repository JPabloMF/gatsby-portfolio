import React from "react";
import {
  StyledContainer,
  StyledTextContainer,
  StyledIconsContainer,
  StyledGithubIcon,
  StyledTwitter,
  StyledLinkedin,
  StyledMail,
} from "./styles";
import { Title, SubTitle, Text } from "../../components/texts";

function Home() {
  return (
    <StyledContainer>
      <Title text="Juan Pablo" />
      <SubTitle isGreen text="Front End Developer" />
      <StyledTextContainer>
        <Text
          text="I'm Juan Pablo a Front End Dev from Colombia."
          size="37px"
        />
        <Text
          text="I love learning new things every day and sharing my knowledge."
          size="37px"
        />
      </StyledTextContainer>
      <StyledIconsContainer>
        <a href="https://twitter.com/JPabloMF" target="_blank">
          <StyledTwitter />
        </a>
        <a href="https://github.com/JPabloMF" target="_blank">
          <StyledGithubIcon />
        </a>
        <a
          href="https://co.linkedin.com/in/juan-pablo-mu%C3%B1oz-alvarez-a9719914b"
          target="_blank"
        >
          <StyledLinkedin />
        </a>
        <a href="mailto:juanpablo34561@hotmail.com" target="_blank">
          <StyledMail />
        </a>
      </StyledIconsContainer>
    </StyledContainer>
  );
}

export default Home;
