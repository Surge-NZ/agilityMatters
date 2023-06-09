import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import * as styles from "./analysis.module.css";

import { StaticImage } from "gatsby-plugin-image";

function Analysis() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            <b>Current State Analysis</b>
          </h2>
          <p>
            A Current State Analysis is an important step in understanding where
            your organisation currently stands in terms of agility. This
            Analysis involves assessing current processes, systems, and
            organisational structure to identify areas of inefficiency and
            potential roadblocks to becoming more agile By Gaining a clear
            understanding of the current state, you can create a comprehensive
            plan for agility transformation that address the specific needs of
            your organisation. Additionally, conducting a current state analysis
            allows you to benchmark progress and measure the impact of your
            transformation efforts over time. Overall, it is a key understanding
            where you are now, so you can move forward where you want to be.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              For a free Current State analysis insight, please Utilise our
              Interactive BAR to give you a Measure of your Organisation
            </p>
          </blockquote>
          <div className={styles.buttonContainer}>
            <Button color='F96332' className={styles.button}>
              Free Analysis Tool
            </Button>
          </div>
        </Col>
        <Col>
          <StaticImage
            className={styles.centered}
            src='../images/current-state-analysis-graph.png'
            alt='Current State Analysis Graph'
            layout='constrained'
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Analysis;
