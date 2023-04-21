import React from "react";
import { Container, Row, Col } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./summary.module.css";
import BookFeature from "./bookFeature";

const Summary = () => {
  return (
    <>
      <Container className={styles.summary}>
        <Row>
          <Col>
            {/* <h2>{`AGILITY MATTERS\nby Michael Law`}</h2> */}
            <h2>AGILITY MATTERS</h2>
            <h2>by Michael Law</h2>
            <h4>{`Blurb of the book/ Overview on how it helps and what it covers.Buy it so you can be the best\nEtc etc Etc`}</h4>
            <BookFeature />
          </Col>
          <Col>
            <StaticImage
              //   className={styles.heroImage}
              src="../images/agility-matters-book-cover.png"
              alt="Agility Matters Book Cover"
              loading="eager"
              width={364}
              quality={95}
              formats={["auto", "webp", "avif"]}
              //   style={{ marginBottom: `var(--space-3)` }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Summary;
