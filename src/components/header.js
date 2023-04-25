import React from "react";
import { Card, CardHeader, CardTitle, CardText, Row, Col } from "reactstrap";
import * as styles from "./header.module.css";
import backgroundImage from "../images/background-header-agility-matters.png";

const Header = ({ title, content }) => {
  return (
    <Card className={styles.card}>
      <CardHeader
        className={styles.header}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Row className="h-100">
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <CardTitle className={styles.title}>{title}</CardTitle>
            <CardText className={styles.content}>{content}</CardText>
          </Col>
        </Row>
      </CardHeader>
    </Card>
  );
};

export default Header;
