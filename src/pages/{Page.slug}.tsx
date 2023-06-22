import React, { memo } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

interface Props {
  data: {
    wpPage: {
      databaseId: number;
      title: string;
      slug: string;
      acf: {
        description: string;
        textcontent: string;
        media: {
          filename: string;
          databaseId: number;
          altText: string;
          localFile: {
            url: string;
            publicURL: string;
          };
        }[];
      };
    };
  };
}

const Page = memo((props: Props) => {
  const { wpPage } = props.data;

  console.log(wpPage);

  console.log(wpPage.acf.textcontent);
  return (
    <Layout {...wpPage}>
      {/* <SEO title={wpPage.title} /> */}
      <div>
        <Container>
          {/* <Heading as="h1">{wpPage.title}</Heading> */}
          <div
            dangerouslySetInnerHTML={{
              __html: wpPage.acf.textcontent,
            }}
          />
        </Container>
      </div>
    </Layout>
  );
});

export const query = graphql`
  query ($databaseId: Int) {
    wpPage(databaseId: { eq: $databaseId }) {
      databaseId
      title
      slug
      acf {
        description
        textcontent
        media {
          ... on WpMediaItem {
            filename
            databaseId
            altText
            localFile {
              url
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default Page;
