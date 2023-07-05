import React from "react";
import Seo from "../components/seo/seo";
import DropdownScrollNavbar from "../components/Navbars/DropdownScrollNavbar";
import Footer from "../components/footer/footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment
      style={{
        fontFamily: "'Montserrat Variable', sans-serif",
      }}
    >
      <DropdownScrollNavbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
export const Head = () => <Seo />;

export default Layout;
