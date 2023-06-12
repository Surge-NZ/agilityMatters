import React, { memo, useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/";
import Seo from "../components/Seo";
import Category from "../components/Category";

const IndexPage = memo((props) => {
  const { data } = props;

  return (
    <Layout title="Necta Blogs">
      <Seo title="Necta Blogs" />
      <Category categoryList={data?.allWpCategory?.edges} activeSlug="all" />
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {data.allWpPost.edges.map((post, index) => (
          <li
            style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}
            key={index}
          >
            <Link
              to={`/${post.node.slug}`}
              style={{
                display: "flex",
                color: "black",
                textDecoration: "none",
              }}
            >
              <GatsbyImage
                className="art-directed"
                alt="{post.featuredImage}"
                image={getImage(post.node.featuredImage.node.gatsbyImage)}
              />
              <div style={{ width: "75%", padding: "0 20px 20px" }}>
                <h3
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                  style={{ marginBottom: 0 }}
                />
                <p style={{ margin: 0, color: "grey" }}>{post.node.date}</p>
                <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
});

export default IndexPage;

export const query = graphql`
  query {
    allWpCategory {
      edges {
        node {
          id
          name
          uri
          slug
        }
      }
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "all" } } } } }
      sort: { date: DESC }
    ) {
      edges {
        node {
          categories {
            nodes {
              name
              uri
              slug
              id
            }
          }
          title
          excerpt
          slug
          author {
            node {
              name
            }
          }
          date(formatString: "DD, MMMM, YYYY")
          featuredImage {
            node {
              gatsbyImage(width: 300, quality: 100, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Blog" />;
