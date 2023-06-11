import React from "react";
import Navbar from "./navbar";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Nav />
      {children}
    </React.Fragment>
  );
};

export default Layout;
