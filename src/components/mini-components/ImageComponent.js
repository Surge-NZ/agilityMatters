import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageComponent = ({ image }) => {
  const imageData = getImage(image);

  return <GatsbyImage image={imageData} alt="Alt text" />;
};

export default ImageComponent;
