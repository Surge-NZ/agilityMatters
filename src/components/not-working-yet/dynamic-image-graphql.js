import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const DynamicImage = ({
  imageName,
  imageAlt,
  imageWidth,
  imageQuality,
  imageFormats,
}) => {
/*   const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(
              width: 500
              quality: 75
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const imageNode = data.images.nodes.find((node) => node.name === imageName);
  const image = getImage(imageNode); */

  return (
    <div>
{/*       <GatsbyImage
        image={image}
        alt={imageAlt}
        width={imageWidth}
        quality={imageQuality}
        formats={imageFormats}
      /> */}
    </div>
  );
};

export default DynamicImage;
