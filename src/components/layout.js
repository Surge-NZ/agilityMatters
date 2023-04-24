import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      {children}
    </React.Fragment>
  );
};

export default Layout;
