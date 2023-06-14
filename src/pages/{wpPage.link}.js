import React from "react";
import { graphql } from "gatsby";

const PageTemplate = ({ data }) => (
  <>
    {data.wpPage.featuredImage ? (
      <div
        img={
          data.wpPage.featuredImage.node.localFile.childImageSharp
            .gatsbyImageData
        }
      />
    ) : null}
    <div parent={data.wpPage.wpParent && data.wpPage.wpParent.node} />
    parentChildren=
    {data.wpPage.wpParent && data.wpPage.wpParent.node.wpChildren.nodes}
    currentPage={data.wpPage}
    parent={data.wpPage.wpParent && data.wpPage.wpParent.node.title}
    {data.wpPage.wpChildren}
    <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
    <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />
  </>
);

export default PageTemplate;

export const pageQuery = graphql`
  query ($id: String!) {
    wpPage(id: { eq: $id }) {
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 1920
                layout: FIXED
                placeholder: TRACED_SVG
              )
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            link
            title
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            link
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`;
