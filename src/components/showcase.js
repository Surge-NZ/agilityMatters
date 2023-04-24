import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

// import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./showcase.module.css";

const Showcase = () => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col>
          <h2>Fundamental Business Practices</h2>
          {/* <p className={styles.showcaseSubHeader}> */}
          <p>
            Are you wantng to optimise you business and move it forward in an
            agile world?
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck>
            <Card className={styles.card}>
              <CardBody>
                <CardTitle>Book</CardTitle>
                <CardText>
                  Gain access to the demographics, psychographics, and location
                  of unique people.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </Col>
        <Col>
          😶‍🌫️<h4>Agility Transformation</h4>
          <p>
            Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube
            to gain rich insights.
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
  );
};

export default Showcase;
