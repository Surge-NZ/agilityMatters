import React from "react";
import DropdownScrollNavbar from "../components/Navbars/DropdownScrollNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <DropdownScrollNavbar />
      {children}
    </>
  );
};

export default Layout;
