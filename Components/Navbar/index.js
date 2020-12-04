import styled from "styled-components";
import React from "react";
import Burger from "./Burger";
import Link from "next/link";
const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <div className="mac">
          <div />
          <div />
          <div />
        </div>
      </Link>
      <Burger />
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: transparent;
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-top: 3rem;

  z-index: 1;

  .mac {
    display: flex;
    flex-flow: row nowrap;
    flex-direction: row;
    justify-content: space-around;
    margin-right: 5px;
    cursor: pointer;
    position: fixed;

    div {
      background-color: black;
      display: block;
      margin-left: 8px;
      border-radius: 50%;
      padding: 10px 10px;

      &:first-child {
        background-color: var(--red-color);
        &::after:hover {
          content: "X";
          color: black;
          text-align: center;
        }
      }
      &:nth-child(2) {
        background-color: var(--yellow-color);
      }
      &:last-child {
        background-color: var(--green-color);
      }
    }
  }
`;

export default Navbar;
