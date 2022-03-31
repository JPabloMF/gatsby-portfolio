import * as React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyle";
import theme from "../theme";

import Home from "./home";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Blog from "./blog";
import Footer from "./footer";

const IndexPage = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
        <AboutMe />
        <Projects />
        <Blog />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
