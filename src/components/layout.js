import React from "react";
import Seo from "../components/seo/seo";
import DropdownScrollNavbar from "../components/Navbars/DropdownScrollNavbar";
import FooterBlack from "./footer/foooter-black";

const Layout = ({ children }) => {
  return (
    <>
      <DropdownScrollNavbar />
      {children}
      <FooterBlack />
    </>
  );
};
export const Head = () => <Seo />;

export default Layout;
