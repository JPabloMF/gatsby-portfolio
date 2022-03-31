import * as React from "react";
import GlobalStyle from "../theme/globalStyle";
import Home from "./home"
import AboutMe from "./aboutMe"
import Projects from "./projects"
import Blog from "./blog"
import Footer from "./footer"

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <Projects />
      <Blog />
      <Footer />
    </>
  );
};

export default IndexPage;

