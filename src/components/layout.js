import React from "react";
import Seo from "../components/seo/seo";
import DropdownScrollNavbar from "../components/Navbars/DropdownScrollNavbar";
import FooterBlack from "../components/footer/footer-black";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        fontFamily: "'Montserrat Variable', sans-serif",
      }}
    >
      <DropdownScrollNavbar />
      {children}
      <FooterBlack />
    </div>
  );
};
export const Head = () => <Seo />;

export default Layout;
