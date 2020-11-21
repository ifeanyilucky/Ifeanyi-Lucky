//=====================NAVIGATION BAR========BURGER===============================

import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const BurgerClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <BurgerStyled isOpen={isOpen} onClick={BurgerClick}>
        <div />
        <div />
        <div />
      </BurgerStyled>
      <NavItem isOpen={isOpen} />
    </>
  );
};

const BurgerStyled = styled.div`
  margin-top: 1.5rem;
  height: 2rem;
  width: 2rem;
  position: fixed;
  top: 15px;
  right: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 20;
  @media (min-width: 678px) {
    display: none;
  }
  div {
    background-color: ${({ isOpen }) => (isOpen ? "#333" : "#ccc")};
    width: 2rem;
    height: 0.14rem;
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(0)" : "rotate(45deg)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(0)" : "translateX(100%)"};
      opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(0)" : "rotate(-45deg)")};
    }
  }
`;

export default Burger;
