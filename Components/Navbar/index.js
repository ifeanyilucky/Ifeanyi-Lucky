import styled from "styled-components";
import Burger from "./Burger";
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">Ifeanyi</div>
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
  padding-top: 0.8rem;
`;
export default Navbar;
