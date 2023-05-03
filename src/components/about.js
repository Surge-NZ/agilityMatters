import React from "react"
import { Container, Row, Col } from "reactstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby";

const About = () => {

  const items = 
    {
      fileName: "mike",
      altText: "hi",
    }
  ;

    const data = useStaticQuery(graphql`
      query {
        allFile {
          nodes {
            name
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    `);

      const getImageByName = (name) => {
          return data.allFile.nodes.find((node) => node.name === name);
            };

      const imageData = getImageByName(items.fileName);
      const image = getImage(imageData);

  return (
    <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="4">
                <GatsbyImage
                  image={image}
                  alt={items.altText}
                  className="d-block img-raised"
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

