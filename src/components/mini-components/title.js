import React from "react";
import { Container, Row, Col } from "reactstrap";
import * as styles from "./title.module.scss";

const Title = ({ text }) => {
  return (
    <Container className={styles.titleContainer}>
      <Row className={styles.titleRow}>
        <Col className={styles.titleCol}>
          <h2 className={styles.title}>{text}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Title;
