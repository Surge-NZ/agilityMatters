import React from "react";
import { Container, Row, Col } from "reactstrap";
import DynamicImage from "../components/mini-components/dynamic-image-graphql";

const About = () => {
  return (
    <Container style={{ marginBottom: "10vh" }}>
      <Row style={{ textAlign: "center" }}>
        <Col className='ml-auto' md='12'>
          <h2 className='content-center title'>Meet the Author</h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <DynamicImage imageName='headshot' imageAlt='hi' />
        </Col>
        <Col className='ml-auto mr-auto' md='8'>
          <p>
            Michael Law, a renowned expert in the field of business
            transformation, with over 15 years of experience, Michael has carved
            a niche for himself as a seasoned transformation leader, guiding
            organisations to unlock their full potential, with a focus on
            customer value.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
