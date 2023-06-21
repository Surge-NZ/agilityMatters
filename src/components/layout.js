import React from "react";
// import FixedTransparentNavbar from "../components/Navbars/FixedTransparentNavbar";
import DropdownScrollNavbar from "../components/Navbars/DropdownScrollNavbar";

// import Navbar from "./navbar";
// import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <React.Fragment
      style={{
        fontFamily: "'Montserrat Variable', sans-serif",
      }}
    >
      {/* <Navbar /> */}
      {/* <FixedTransparentNavbar /> */}
      <DropdownScrollNavbar />

      {/* <Nav /> */}
      {children}
    </React.Fragment>
  );
};

export default Layout;
