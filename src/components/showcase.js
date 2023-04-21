import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./showcase.module.css";

const Showcase = () => {
  return (
    <>
      <Container className={styles.showcase}>
        <Row>
          <h2>Fundamental Business Practices</h2>
          <h4 className={styles.showcaseSubHeader}>
            Are you wantng to optimise you business and move it forward in an
            agile world?
          </h4>
        </Row>
        <Row>
          <Col>
            🤨<h4>Book</h4>
            <p>
              Gain access to the demographics, psychographics, and location of
              unique people.
            </p>
          </Col>
          <Col>
            😶‍🌫️<h4>Agility Transformation</h4>
            <p>
              Unify data from Facebook, Instagram, Twitter, LinkedIn, and
              Youtube to gain rich insights.
            </p>
          </Col>
          <Col>
            😻<h4>Adaptive Strategy</h4>
            <p>
              Track actions taken on your website, understand the impact on your
              bottom line.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Showcase;
