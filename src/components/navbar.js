import React from "react";
import { Link } from "gatsby";
import { Row, Col } from "reactstrap";
import * as styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Row>
        <Col className={styles.navbarLeft} xs={6}>
          <Link to="/">
            AGILITY MATTERS
            {/* <span role="img" aria-label="rocket">
                🚀
              </span> */}
          </Link>
        </Col>
        <Col xs={6} className={styles.navbarRight}>
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
    </nav>
  );
};

export default Navbar;
