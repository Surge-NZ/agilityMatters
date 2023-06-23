// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

// const DynamicImage = ({
//   imageName,
//   imageAlt,
//   // imageWidth,
//   //imageQuality,
//   // imageFormats,
// }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
//         nodes {
//           name
//           childImageSharp {
//             gatsbyImageData(formats: [AUTO, WEBP, AVIF], layout: CONSTRAINED)
//           }
//         }
//       }
//     }
//   `);

//   const imageNode = (imageName) => {
//     return data.images.nodes.find((node) => node.name === imageName);
//   };

//   const imageData = imageNode(imageName);

//   const image = getImage(imageData);

//   return (
//     <div>
//       <GatsbyImage image={image} alt={imageAlt} />
//     </div>
//   );
// };

// export default DynamicImage;
