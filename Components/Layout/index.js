import React from "react";
import Navbar from "../Navbar";
import { DarkMode } from "../DarkMode";
import Footer from "../Footer";
// import { GlobalStyle, LightTheme, DarkTheme } from "../DarkMode/GlobalStyle";
// import Toggle from "../DarkMode/Toggle";
import styled from "styled-components";

const Layout = ({ children }) => {
  // const [theme, toggleTheme] = DarkMode();
  // const themeMode = theme === "light" ? LightTheme : DarkTheme;
  return (
    <>
      {/* <ThemeProvider theme={themeMode}> */}
      {/* <GlobalStyle /> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      ></link>

      <Container>
        <Navbar />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        {children}
        <Footer />
      </Container>
      {/* </ThemeProvider> */}
    </>
  );
};

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
export default Layout;
