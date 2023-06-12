/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "gatsby";
import { isBrowser } from "../../utils";

function FixedTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);

  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            isBrowser() &&
              document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/" tag={Link} id="navbar-brand">
              AgilityMatters
            </NavbarBrand>
            <UncontrolledTooltip target="navbar-brand">
              Adapting an Organisation to Respond to Customer Needs Flexibility{" "}
            </UncontrolledTooltip>
            <button
              onClick={() => {
                isBrowser() &&
                  document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Nav className="ml-auto" id="ceva" navbar>
            <NavItem>
              <NavLink to="/downloads" tag={Link}>
                <i className="now-ui-icons design_cloud-download-93"></i>
                Downloads
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default FixedTransparentNavbar;
