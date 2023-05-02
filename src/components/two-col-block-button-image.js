import React from "react";
import { Row, Col } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";
import ColTextBlockButton from "./mini-components/col-text-block-button";
import * as styles from "./two-col-block-button-image.module.css";

const TwoColBlockButtonImage = ({}) => {
  return (
    <Row md={12} className={styles.container}>
      <Col md={6} className={styles.columnLeft}>
        <ColTextBlockButton
          title="Current State Analysis"
          paragraph="A Current State Analysis is an important step in understanding where
your organisation currently stands in terms of agility. This
Analysis involves assessing current processes, systems, and
organisational structure to identify areas of inefficiency and
potential roadblocks to becoming more agile By Gaining a clear
understanding of the current state, you can create a comprehensive
plan for agility transformation that address the specific needs of
your organisation. Additionally, conducting a current state analysis
allows you to benchmark progress and measure the impact of your
transformation efforts over time. Overall, it is a key understanding
where you are now, so you can move forward where you want to be."
          quoteText="For a free Current State analysis insight, please Utilise our
Interactive BAR to give you a Measure of your Organisation"
          buttonText="Free Analysis Tool"
          buttonLink="https://surge.scoreapp.com"
        />
      </Col>
      <Col md={6} className={styles.columnRight}>
        <StaticImage
          className={styles.centered}
          src="../images/current-state-analysis-graph.png"
          alt="Current state analysis image chart"
          placeholder="blurred"
          formats={["auto", "webp", "avif"]}
          layout="fullWidth"
          // width="100%"
          // height="100%"
          quality={75}
        />
      </Col>
    </Row>
  );
};

export default TwoColBlockButtonImage;
