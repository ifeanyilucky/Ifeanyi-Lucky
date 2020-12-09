import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Moon } from "../Icons";
const NavItem = ({ isOpen }) => {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    if (theme == "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
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
      color: var(--para-text);
      transition: border-bottom 0.3s ease-in-out;
      padding-bottom: 8px;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
        color: #fff;
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

export default NavItem;
