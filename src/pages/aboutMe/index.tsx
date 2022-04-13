import React from "react";
import {
  StyledContainer,
  StyledStackTextContainer,
  StyledStackIconsContainer,
  StyledStackMainContainer,
  StyledCompaniesMainContainer,
  StyledCompaniesTextContainer,
  StyledCompaniesLogosMainContainer,
  StyledCompaniesLogoContainer,
  StyledCompanieLogo,
} from "./styles";
import { SubTitle, Text } from "../../components/texts";
import {
  IHTML,
  ICSS,
  IJS,
  IReact,
  IRedux,
  IGit,
  ITypescript,
} from "../../components/icons";
import cnn from "../../images/brands/cnn.png";
import tbs from "../../images/brands/tbs.png";
import tnt from "../../images/brands/tnt.png";
import globant from "../../images/brands/globant.png";
import trutv from "../../images/brands/trutv.png";
import hme from "../../images/brands/hme.png";

function AboutMe() {
  return (
    <StyledContainer id="aboutme">
      <SubTitle isGreen text="About me" />
      <Text
        size="30px"
        text="I'm a front end developer with 4 years of experience working with technologies based mostly on Javascript."
      />
      <StyledStackMainContainer>
        <StyledStackTextContainer>
          <Text isBold size="40px" text="Tools and Tech stack" />
          <Text
            size="28px"
            text="I focus on some of the mostly used tools and technologies for web development."
          />
        </StyledStackTextContainer>
        <StyledStackIconsContainer>
          <IHTML />
          <ICSS />
          <IJS />
          <IReact />
          <IRedux />
          <IGit />
          <ITypescript />
        </StyledStackIconsContainer>
      </StyledStackMainContainer>
      <StyledCompaniesMainContainer>
        <StyledCompaniesTextContainer>
          <Text isBold size="40px" text="Companies I've worked with" />
          <Text
            size="28px"
            text="I've worked with some big tech companies and some others not so big."
          />
          <Text
            size="28px"
            text="In these companies, I developed mostly web and mobile applications."
          />
        </StyledCompaniesTextContainer>
        <StyledCompaniesLogosMainContainer>
          <StyledCompaniesLogoContainer>
            <StyledCompanieLogo src={cnn} alt="cnn logo" />
            <StyledCompanieLogo src={tbs} alt="tbs logo" />
            <StyledCompanieLogo src={tnt} alt="tnt logo" />
          </StyledCompaniesLogoContainer>
          <StyledCompaniesLogoContainer>
            <StyledCompanieLogo src={globant} alt="globant logo" />
          </StyledCompaniesLogoContainer>
          <StyledCompaniesLogoContainer>
            <StyledCompanieLogo src={trutv} alt="trutv logo" />
            <StyledCompanieLogo src={hme} alt="hme logo" />
          </StyledCompaniesLogoContainer>
        </StyledCompaniesLogosMainContainer>
      </StyledCompaniesMainContainer>
    </StyledContainer>
  );
}

export default AboutMe;
