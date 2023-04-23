import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import * as styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Row>
          <Col xs={6}>
            <span role="img" aria-label="rocket">
              🚀
            </span>
          </Col>
          <Col xs={6} className={styles.navbarRight}>
            <Link activeClassName={styles.active} to="/home">
              home
            </Link>
            <Link activeClassName={styles.active} to="/transformation">
              transformation
            </Link>
            <Link activeClassName={styles.active} to="/strategy">
              strategy
            </Link>
            <Link activeClassName={styles.active} to="/value">
              value
            </Link>
            <Link activeClassName={styles.active} to="/teams">
              teams
            </Link>
          </Col>
        </Row>
      </Container>
    </nav>
  );
};

export default Navbar;
