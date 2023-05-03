import React from "react"
import { Container, Row, Col } from "reactstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";
import DynamicImage from "../components/not-working-yet/dynamic-image-graphql"

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
              <Col className="ml-auto" md="6">

      <h1>ABOUT</h1>
              </Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}

export default About

