import React, { useState } from "react";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
// import { StaticImage } from "gatsby-plugin-image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar color="light" light expand="md" fixed="top">
      <Container>
        {/* replace with logo: */}
        {/* <Link to="/" className="navbar-brand">
          <StaticImage
            src="../../../../static/logo.svg"
            alt="Agility Matters Logo"
            className="am-logo"
          />
          <span className="logo-word">AgilityMatters</span>
        </Link> */}

        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{ backgroundColor: "black" }}>
            <NavItem>
              <NavLink to="/" tag={Link} onClick={toggleNavbar}>
                <b>Agility Matters</b>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/downloads" tag={Link} onClick={toggleNavbar}>
                Downloads
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/strategy" tag={Link} onClick={toggleNavbar}>
                Strategy
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink to="/transformation" tag={Link} onClick={toggleNavbar}>
                Transformation
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/teams" tag={Link} onClick={toggleNavbar}>
                Teams
              </NavLink>
            </NavItem> */}
            {/* <NavItem>
              <NavLink
                href="https://agilitymatters.nz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                AgilityMatters
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
