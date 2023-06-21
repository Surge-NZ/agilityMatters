import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import * as styles from "./analysis.module.css";

import { StaticImage } from "gatsby-plugin-image";

function Framework() {
  return (
    <Container>
      <Row md='12'>
        <h2 className={styles.centeredTitle}>Optimal Framework</h2>

        <Col md='6'>
          <h3>
            <b>ASO Model</b>
          </h3>
          <p>
            The “Amber Seeking Orange” is a term used to describe organisations
            that are actively working to become more agile but are not yet fully
            there, The term is a reference to the “Amber” and “Orange” levels of
            the Cynefin framework, which is a system for categorising and
            solving problems. The Amber level represents “complicated”
            situations that can be understood through analysis and expertise,
            while the Orange level represents “Complex” situations that require
            experimentation and adaptation. An Organisation that is “Amber
            Seeking Orange” is one the recognises the need for change and is
            actively working to become more Agile, but has not yet fully
            embraced the principles of complexity and adaptation. Such
            organisations are in a state of transition and continuous
            improvement, but the journey is not yet complete.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              For a ASO Framework Model, please take a look at our framework
              model (as seen in Agility Matters)
            </p>
          </blockquote>
          <div className={styles.buttonContainer}>
            <Button color='F96332' className={styles.button}>
              Free ASO Framework Model Tool
            </Button>
          </div>
        </Col>
        <Col md='6'>
          <h3>
            <b>OSG Model</b>
          </h3>
          <p>
            The “Orange Seeking Green” is a term used to describe organisations
            that have successfully embraced the principles of Agility and are
            now striving to become adaptive. The term is a reference to the
            “Orange” and “Green” levels of the Cynefin Framework. The Orange
            level represents “complex” situations that require experimentation
            and adaptation, while the Green level represents “chaotic”
            situations that require a sense and response approach. An
            Organisation that is “Orange Seeking Green” is one that has
            successully implemented Agile practices and is now focused on
            becoming truly adaptive by embracing a culture of experimentation
            and continuous learning. This type of organisation is able to
            respond quickly and effectively to rapidly changing business
            environments and customer needs. They are continuous learning,
            continuous improvement, and experimentation are the core components
            of the day to day operations and decision making.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              For a OSG Framework Model, please take a look at our framework
              model (as seen in Agility Matters){" "}
            </p>
          </blockquote>
          <div className={styles.buttonContainer}>
            <Button color='F96332' className={styles.button}>
              Free OSG Framework Model Tool
            </Button>
          </div>
        </Col>
        <Row className={styles.centered}>
          <StaticImage
            className={styles.centered}
            src='../images/ASOframework.png'
            alt='Agility Canvas'
            layout='constrained'
            //   className={styles.backgroundImage}
          />
          <h4 className={styles.centered}>
            ASO Framework Model (as seen in Agility Matters)
          </h4>
        </Row>
      </Row>
    </Container>
  );
}

export default Framework;
