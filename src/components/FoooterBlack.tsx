/*eslint-disable*/
import { Link } from "gatsby";
import React from "react";
import * as classes from "./styles.module.scss";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// import "./FooterBlack.scss";

// core components

function FooterBlack() {
  const handleClick = (slug) => {};
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <Row
                style={{ textAlign: "center", justifyContent = "center" }}
                md={12}
              >
                <Col lg={6} md={6}>
                  <li>
                    <h6>Agility Matters</h6>
                  </li>
                </Col>
                <Col lg={6} md={6}>
                  <li>
                    <div
                      className={`copyright ${classes.copyright}`}
                      id="copyright"
                    >
                      © {new Date().getFullYear()} Template
                    </div>
                  </li>
                </Col>
              </Row>
            </ul>
          </nav>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;
