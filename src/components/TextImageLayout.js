import React from "react";
import { Container, Row, Col } from "reactstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { TextImageLayoutPropTypes } from "../assets/propTypes";

const Wrapper = styled.div`
  /* Styles for the quote */
  .blockquote {
    border: 1px solid #f96332;
    border-radius: 4px;
    margin: 20px 0;
    padding: 20px;
    text-align: left;
  }

  /* Styles for the quote text */
  .quoteText {
    color: #f96332;
  }

  /* Styles for the button container */
  .buttonContainer {
    text-align: right;
    margin-top: 20px;
  }

  /* Styles for the button */
  .button {
    border-radius: 20px;
    background-color: #f96332;
    color: #fff;
  }

  /* Styles for the image */
  .image {
    text-align: center;
  }

  /* Styles for the title */
  .title {
    font-weight: bold;
  }
`;

const TextImageLayout = ({
  title,
  text,
  quote,
  buttonText,
  image,
  imageOnLeft,
}) => {
  // Define the column order based on the `imageOnLeft` prop
  const firstColWidth = imageOnLeft ? 6 : 12;
  const secondColWidth = imageOnLeft ? 6 : 12;

  // Get the optimized image data for the given image path
  const imageData = getImage(image);

  return (
    <Wrapper>
      <Container>
        <Row>
          {/* Define the width of the first column based on `imageOnLeft` prop */}
          <Col md={firstColWidth}>
            {/* Render the title with a bold font weight */}
            <h2 className="title">{title}</h2>
            {/* Render the text */}
            <p>{text}</p>
            {/* Render the quote */}
            <blockquote className="blockquote">
              <p className="quoteText">{quote}</p>
            </blockquote>
            {/* Render the button */}
            <div className="buttonContainer">
              <button className="button">{buttonText}</button>
            </div>
          </Col>
          {/* Define the width of the second column based on `imageOnLeft` prop */}
          <Col md={secondColWidth}>
            {/* Render the image */}
            <div className="image">
              <GatsbyImage
                image={imageData}
                alt="Current State Analysis Graph"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

TextImageLayout.propTypes = TextImageLayoutPropTypes;

export default TextImageLayout;
