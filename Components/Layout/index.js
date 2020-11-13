import React from "react";
import Navbar from "../Navbar/Navbar";
import Navitem from "../Navbar/Navitem";

const Layout = ({ children }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
        crossorigin="anonymous"
      ></link>
      <Navbar>
        <Navitem color="#ea4335" icon="O" />
        <Navitem icon="O" />
        <Navitem icon="O" />
      </Navbar>
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
