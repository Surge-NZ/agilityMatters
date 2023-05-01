import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./footer.module.css";

import { Button, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

function Footer() {
  return (
    <Col className={styles.footerWrapper}>
      <Row className="justify-content-center">
        <StaticImage
          src="../images/footer-background.png"
          alt="Footer Background Image"
          layout="fullWidth"
          className={styles.backgroundImage}
        />
        <Col className="ml-auto mr-auto text-center" md="12">
          <h2 className="title">How we can Help You</h2>
          <h4 className="description">
            Want to Transform your Business into More Agile Practices but unsure
            how?
          </h4>
          <div className="section-space"></div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="ml-auto" md="4">
          <Card className="card-pricing">
            <CardBody>
              <h5 className="category">Small/Medium Business</h5>
              <CardTitle tag="h1">
                <small>$</small>
                --<small>/mo</small>
              </CardTitle>
              <ul>
                <li>Interactive BAR</li>
                <li>3 Horizon Strategy</li>
                <li>Kaizen Transformation</li>
                <li>Tailored for YOUR Organisation</li>
              </ul>
              <Button
                className="btn-round"
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                data-background-color="orange"
              >
                Get Started
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="mr-auto" md="4">
          <Card
            className="card-pricing card-raised"
            data-background-color="orange"
          >
            <CardBody>
              <h5 className="category">Team Level</h5>
              <CardTitle tag="h1">
                <small>$</small>
                --<small>/mo</small>
              </CardTitle>
              <ul>
                <li>High Performance Program</li>
                <li>Stategy to Perform</li>
                <li>Test Creation and Result Monitor</li>
                <li>Recommendations</li>
              </ul>
              <Button
                className="btn-neutral btn-round"
                color="orange"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Get Started
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
}

export default Footer;
