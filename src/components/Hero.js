import React from "react";
import { Container, Row, Col } from "reactstrap";
import { GatsbyImage as StaticImage } from "gatsby-plugin-image";
import * as styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <Row>
          <Col md={6} className={styles.heroLeftColumn}>
            {/* <figure> */}
            <h1>🚧</h1>
            <StaticImage
              src="../images/agility-matters-book-cover.jpg"
              alt="Agility Matters Book Cover"
              placeholder="blurred"
              layout="fluid"
            />
            {/* </figure> */}
          </Col>
          <Col md={6} className={styles.heroRightColumn}>
            <h1>AGILITY MATTERS</h1>
            <p>
              In the software business, it is crucial to be agile in order to
              stay competitive and deliver new features and updates to customers
              in a timely manner.
            </p>
            <button className={styles.heroButton} aria-label="Order Now">
              ORDER NOW
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
