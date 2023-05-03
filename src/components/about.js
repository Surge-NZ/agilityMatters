import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import DynamicImage from "../components/not-working-yet/dynamic-image-graphql"
import ParagraphText from "./paragraph-text";
import * as styles from "./hero.module.css";

const About = () => {



  return (
    <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="4">
              <DynamicImage 
                imageName="mike"
                imageAlt="hi"
              />
              
              </Col>
              <Col className="ml-auto" md="8">
              <h2>Michael Law - DGAF</h2>
                  <ParagraphText />
                  <Button
                    style={{ marginLeft: "2em" }}
                    className={styles.heroButton}
                    aria-label="Coming Soon"
                  >
                    COMING SOON
                  </Button>
         
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  );
};

export default About;
