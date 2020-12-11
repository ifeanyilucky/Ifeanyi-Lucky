import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Moon } from "../Icons";
const Navdata = ({ isOpen }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );
    setTheme(localStorage.getItem("theme"));
  }, []);
  const switchTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      saveTheme("dark");
    } else {
      setTheme("light");
      saveTheme("light");
    }
  };
  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <Ul isOpen={!isOpen}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>

      <ThemeSwitcher onClick={switchTheme}>
        <Moon />
      </ThemeSwitcher>
    </Ul>
  );
};
const ThemeSwitcher = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  outline: none !important;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-left: 20px;
  margin-top: 12px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  li {
    a {
      text-decoration: none;
      margin-left: 1.4rem;
      font-size: 15px;
      font-weight: 600;
      color: var(--para-text);
      transition: border-bottom 0.3s ease-in-out;
      padding-bottom: 8px;
      transition: 0.34s all;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
        color: var(--text-color);
      }
    }
  }

  @media (max-width: 768px) {
    transition: all 0.3s linear;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(100%)" : "translateX(0)"};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 15px;
    text-align: left;
    margin: auto;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    overflow: hidden;
    background-color: var(--bg-color);
    width: 100%;
    height: 100vh;
    z-index: 10;

    li {
      display: block;
      a {
        text-decoration: none;
        font-size: 50px;
        text-transform: capitalize;
        color: var(--para-text);
      }
    }
  }
`;

export default Navdata;
