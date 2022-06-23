import * as React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyle";
import GlobalFonts from "../fonts/fonts";
import theme from "../theme";

import Menu from "../components/menu";
import Home from "./home";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Blog from "./blog";
import Footer from "./footer";

import { handleMenuScroll } from "../utils";

const IndexPage = () => {
  const [focusedSection, setFocusedSection] = React.useState<number>(0);

  const homeRef = React.useRef<HTMLElement>(null);
  const aboutMeRef = React.useRef<HTMLElement>(null);
  const projectsRef = React.useRef<HTMLElement>(null);
  const blogRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const homeRefCurrent = homeRef.current;
    const aboutmeRefCurrent = aboutMeRef.current;
    const projectRefCurrent = projectsRef.current;
    const blogRefCurrent = blogRef.current;

    window.addEventListener("scroll", () =>
      handleMenuScroll({
        homeRefCurrent,
        aboutmeRefCurrent,
        projectRefCurrent,
        blogRefCurrent,
        setFocusedSection,
      })
    );

    return () => {
      window.removeEventListener("scroll", () =>
        handleMenuScroll({
          homeRefCurrent,
          aboutmeRefCurrent,
          projectRefCurrent,
          blogRefCurrent,
          setFocusedSection,
        })
      );
    };
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <Menu focusedSection={focusedSection} />
        <Home innerRef={homeRef} />
        <AboutMe innerRef={aboutMeRef} />
        <Projects innerRef={projectsRef} />
        <Blog innerRef={blogRef} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default IndexPage;
