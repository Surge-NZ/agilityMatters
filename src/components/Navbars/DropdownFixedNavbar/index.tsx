import React, { Fragment, memo, useState } from "react"
import {
  Collapse,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
} from "reactstrap"
import * as classes from "./styles.module.scss"
import { Link } from "gatsby"

import EmployerButton from "../../Common/EmployerButton"
import ContractorButton from "../../Common/ContractorButton"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  type?: USER_TYPE
}

const DropdownFixedNavbar = memo(({ type }: Props) => {
  const [collapseOpen, setCollapseOpen] = useState(false)

  const handleCollapseNavbar = () => {
    if (window.innerWidth <= 991) {
      document.documentElement.classList.toggle("nav-open")
      setCollapseOpen(!collapseOpen)
    }
  }

  return (
    <Fragment>
      {collapseOpen ? (
        <div id="bodyClick" onClick={handleCollapseNavbar} />
      ) : null}
      <Navbar className={clsx("navbar-absolute", classes.bgBlack)} expand="lg">
        <Container>
          <div className="navbar-translate">
            <div className={clsx(classes.navbarContentLeft)}>
              <NavbarBrand href={
                    "/talent"
                    
                  } tag={Link} id="navbar-brand" className="mr-0">
                <StaticImage
                  className={classes.templateLogo}
                  src="../../../../static/logo.svg"
                  alt="Template Logo"
                />
              </NavbarBrand>
              <NavbarBrand
                href={
                  "/talent"
                  
                }
                tag={Link}
                id="navbar-brand-logo"
                className="mr-0"
              >
                <span className={classes.logoWord}>Template</span>
              </NavbarBrand>
              <span className={clsx(classes.navbarDivider, "mx-3")}>|</span>
              <NavbarBrand
                id="navbar-brand-login"
                href={
                  "https://app.necta.nz"
                  
                }
              >
                <span className={classes.btnLogin}>Login</span>
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
          <Collapse
            isOpen={collapseOpen}
            navbar
            className={clsx(
              { }
            )}
          >
            <Nav className="ml-auto" id="ceva" navbar>
              { (
                <Fragment>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      color="default"
                      id="navbarDropdownMenuLink1"
                      nav
                      tag={Link}
                      to="/paye"
                      onClick={handleCollapseNavbar}
                    >
                      <i
                        aria-hidden={true}
                        className="now-ui-icons business_money-coins"
                      ></i>
                      <p>Paye</p>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      color="default"
                      id="navbarDropdownMenuLink2"
                      nav
                      tag={Link}
                      to="/book"
                      onClick={handleCollapseNavbar}
                    >
                      <i
                        aria-hidden={true}
                        className="now-ui-icons education_paper"
                      ></i>
                      <p>Book</p>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle
                      color="default"
                      id="navbarDropdownMenuLink3"
                      nav
                      tag={Link}
                      to="/my-page"
                      onClick={handleCollapseNavbar}
                    >
                      <i
                        aria-hidden={true}
                        className="now-ui-icons tech_mobile"
                      ></i>
                      <p>My page</p>
                    </DropdownToggle>
                  </UncontrolledDropdown>
                </Fragment>
              )}

              { (
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    color="default"
                    id="navbarDropdownMenuLink4"
                    nav
                    tag={Link}
                    to="/assist"
                    onClick={handleCollapseNavbar}
                  >
                    <i
                      aria-hidden={true}
                      className="now-ui-icons ui-1_send"
                    ></i>
                    <p>Assist</p>
                  </DropdownToggle>
                </UncontrolledDropdown>
                
              )}

{(
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    color="default"
                    id="navbarDropdownMenuLink4"
                    nav
                    tag={Link}
                    to="/headhunter"
                    onClick={handleCollapseNavbar}
                  >
                    <i
                      aria-hidden={true}
                      className="now-ui-icons business_globe"
                    ></i>
                    <p>HeadHunter</p>
                  </DropdownToggle>
                </UncontrolledDropdown>
                
              )}

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
                  to={
                     "/blog/contractor"
                    
                  }
                  onClick={handleCollapseNavbar}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons text_align-left"
                  />
                  <p>Blog</p>
                </DropdownToggle>
              </UncontrolledDropdown>

              <NavItem onClick={handleCollapseNavbar}>
                <EmployerButton />
                
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
})

export default DropdownFixedNavbar
