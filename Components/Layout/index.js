import React, { useState } from "react";
import Navbar from "../Navbar";
// import { DarkMode } from "../DarkMode";
import Head from "next/head";
import Footer from "../Footer";
import styled from "styled-components";
// import { GlobalStyle, LightTheme, DarkTheme } from "../DarkMode/GlobalStyle";
// import Toggle from "../DarkMode/Toggle";
// import styled, { ThemeProvider } from "styled-components";
const Layout = ({ children, title = "Home", text = "Hello" }) => {
  //   const [theme, toggleTheme] = DarkMode();
  //   const themeMode = theme === "light" ? LightTheme : DarkTheme;

  return (
    <>
      <Head>
        <title>{`${title} | Ifeanyi Lucky | Codack`}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
          crossorigin="anonymous"
        ></link>
      </Head>
      {/* <ThemeProvider theme={themeMode}>
        <GlobalStyle /> */}
      <Frame>
        <div className="top__frame" />
        <div className="bottom__frame" />
        <div className="right__frame" />
        <div className="left__frame" />
      </Frame>
      <Container>
        <Navbar />

        <HelloParent>
          <div className="hello">{text}</div>
        </HelloParent>
        <div className="col-10 mx-auto">
          {/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
          {children}
          <Footer />
        </div>
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

const HelloParent = styled.div`
  position: relative;
  vertical-align: middle;

  .hello {
    position: absolute;
    top: 12rem;
    left: -18rem;
    font-weight: 900;
    font-size: 10rem;
    color: rgba(128, 128, 128, 0.132);
    transform: rotate(90deg);
    @media (max-width: 768px) {
      left: -13rem;
    }
  }
`;

const Frame = styled.div`
  .top__frame {
    position: fixed;
    top: 0;
    left: 0;
    height: 15px;
    width: 100%;
    z-index: 1000;
  }

  .bottom__frame {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 15px;
    width: 100%;
    z-index: 1000;
  }

  .right__frame {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 15px;
    z-index: 1000;
  }
  .left__frame {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 15px;
    z-index: 1000;
  }

  .left__frame,
  .top__frame,
  .bottom__frame,
  .right__frame {
    background-color: #222222;
  }
`;
export default Layout;
