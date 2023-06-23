import React, { useEffect } from "react";
import { graphql } from "gatsby";
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
        };
      };
    };
  };
}

const Page = (props: Props) => {
  const { wpPage } = props.data;

  useEffect(() => {
    console.log("Page component mounted");
    return () => {
      console.log("Page component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Page component updated");
  }, [wpPage]);

  console.log(wpPage);

  console.log(wpPage.acf.textcontent);

  useEffect(() => {
    // Add a delay to see console logs
    setTimeout(() => {
      debugger; // Pause execution here
    }, 2000); // Adjust the delay time (in milliseconds) as needed
  }, []);

  debugger;

  return (
    <div {...wpPage}>
      {/* <SEO title={wpPage.title} /> */}
      <div>
        <Container>
          {/* <div as="h1">{wpPage.title}</div> */}
          <div
            dangerouslySetInnerHTML={{
              __html: wpPage.acf.textcontent,
            }}
          />
          <h1>{wpPage.title}</h1>
        </Container>
      </div>
    </div>
  );
};

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
