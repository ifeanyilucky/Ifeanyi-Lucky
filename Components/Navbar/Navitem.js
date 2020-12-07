import React from "react";
import Link from "next/link";
import styled from "styled-components";

const NavItem = ({ isOpen }) => {
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
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;

  li {
    a {
      text-decoration: none;
      margin-left: 0.96rem;
      font-size: 15px;
      color: rgba(0, 0, 0, 0.5);
      transition: border-bottom 0.3s ease-in-out;
      padding-bottom: 8px;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
        border-bottom: 1px solid rgba(0, 0, 0, 0.7);
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
        color: var(--paragraph);
      }
    }
  }
`;

export default NavItem;
