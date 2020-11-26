import React from "react";
import Navbar from "../Navbar";
import { DarkMode } from "../DarkMode";
import Footer from "../Footer";
// import { GlobalStyle, LightTheme, DarkTheme } from "../DarkMode/GlobalStyle";
// import Toggle from "../DarkMode/Toggle";
import styled, { ThemeProvider } from "styled-components";

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

      <div className="container">
        <Navbar />
        {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
        {children}
        <Footer />
      </div>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Layout;
