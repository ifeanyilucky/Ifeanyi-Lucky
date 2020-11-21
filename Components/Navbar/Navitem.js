import styled from "styled-components";

const NavItem = ({ isOpen }) => {
  return (
    <Ul isOpen={isOpen}>
      <li>Home</li>
      <li>About me</li>
      <li>Portfolio</li>
      <li>Contact me</li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  transition: all 0.3s linear;
  li {
    margin-left: 0.96rem;
  }

  @media (max-width: 768px) {
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(100%)" : "translateX(0)"};
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    text-align: center;
    justify-content: space-around;
    align-content: center;
    background-color: black;
    width: 100%;
    height: 100vh;
    z-index: 10;

    li {
      color: white;
    }
  }
`;

export default NavItem;
