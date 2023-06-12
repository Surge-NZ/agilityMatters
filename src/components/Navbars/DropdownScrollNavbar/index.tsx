import { Link } from "gatsby";
import React, { memo, useEffect, useState } from "react";
import {
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  } from "reactstrap";
import { isBrowser } from "../../../utils";
import * as classes from "./styles.module.scss";
import clsx from "clsx";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  /* type?: USER_TYPE */
}

const DropdownScrollNavbar = memo(({}: Props) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState(" navbar-transparent");
  // const [buyButtonColor, setBuyButtonColor] = useState("neutral");

  const handleCollapseNavbar = () => {
    if (window.innerWidth <= 991) {
      document.documentElement.classList.toggle("nav-open");
      setCollapseOpen(!collapseOpen);
    }
  };

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        isBrowser() &&
        (document.documentElement.scrollTop > 10 ||
          document.body.scrollTop > 10)
      ) {
        setNavbarColor("");
        // setBuyButtonColor("info");
      } else {
        setNavbarColor(" navbar-transparent");
        // setBuyButtonColor("neutral");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return () => {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, []);

  return (
    <>
      {collapseOpen && <div id="bodyClick" onClick={handleCollapseNavbar} />}
      <Navbar className={"fixed-top" + navbarColor} color="white" expand="lg">
        
          <div className="navbar-translate">
            <div className={clsx(classes.navbarContentLeft)}>
              <NavbarBrand to="/" tag={Link} id="navbar-brand" className="mr-0">
                <StaticImage
                  className={classes.templateLogo}
                  src="../../../../static/logo.svg"
                  alt="Template Logo"
                />
              </NavbarBrand>
              <NavbarBrand
                to="/"
                tag={Link}
                id="navbar-brand-logo"
                className="mr-0"
                style={{ paddingLeft: '1rem' }}  // Added padding here
              >
                <span className={classes.logoWord}>AGILITY MATTERS</span>
              </NavbarBrand>
              <span
                className={clsx(classes.navbarDivider, "mx-3", {
                  [classes.black]: !navbarColor,
                })}
                id="navbar-divider"
              >
                {/* | */}
              </span>
              <NavbarBrand
                id="navbar-brand-login"
                href={"https://app.necta.nz"}
              >
                <span className={classes.btnLogin}></span>
              </NavbarBrand>
            </div>
            <button
              onClick={handleCollapseNavbar}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          {/* <Collapse 
              isOpen={collapseOpen} 
              navbar 
              style={{
                display: "flex", 
                justifyContent: "center"
              }}
            >
            <Nav  id="ceva" navbar >
              <UncontrolledDropdown nav>
                <DropdownToggle
                  color="default"
                  id="navbarDropdownMenuLink5"
                  nav
                  tag={Link}
                  to="/about-us"
                  onClick={handleCollapseNavbar}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons business_bulb-63"
                  ></i>
                  <p>About</p>
                </DropdownToggle>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  color="default"
                  id="navbarDropdownMenuLink6"
                  nav
                  tag={Link}
                  to={"/blog/contractor"}
                  onClick={handleCollapseNavbar}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons text_align-left"
                  />
                  <p>Blog</p>
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
          </Collapse> */}
        
      </Navbar>
    </>
  );
});

export default DropdownScrollNavbar;
