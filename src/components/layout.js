import React from "react";
import Seo from "../components/seo/seo";
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
      {children}
      <FooterBlack />
    </>
  );
};
export const Head = () => <Seo />;

export default Layout;
