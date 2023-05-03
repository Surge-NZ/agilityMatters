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
        <div className="features-4">
          <Container>
            <Row>
              
              <Col className="ml-auto" md="12">
              <h2>Agility Matters</h2>
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
            
            <Row className="features-5">
            <Col className="ml-auto mr-auto" md="4">
              <DynamicImage 
                imageName="mikefulljacket_nobg"
                imageAlt="hi"
              />
              
              </Col>
              <Col className="ml-auto mr-auto" md="6">
                <h2>Meet the Author</h2>
                <p>Michael Law, a renowned expert in the field of 
business transformation, with over 15 years of experience, Michael has carved a niche for himself as a seasoned transformation 
leader, guiding organisations to unlock their full 
potential, with a focus on customer value.
</p>
<p>Michael Law, a renowned expert in the field of 
business transformation, with over 15 years of experience, Michael has carved a niche for himself as a seasoned transformation 
leader, guiding organisations to unlock their full 
potential, with a focus on customer value.
</p>
<p>Michael Law, a renowned expert in the field of 
business transformation, with over 15 years of experience, Michael has carved a niche for himself as a seasoned transformation 
leader, guiding organisations to unlock their full 
potential, with a focus on customer value.
</p>
<h3>
“This book gets you excited about the opportunities for improvement within your own company. If NZFS can do it. Surely we can too.”
</h3>
              
              </Col>
              </Row>
          </Container>
        </div>
    </div>
  );
};

export default About;
