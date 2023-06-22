// import React from "react";
// import { graphql } from "gatsby";

// const PageTemplate = ({ data }) => (
//   <>
//     <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title }} />
//     <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.slug }} />

//     <div dangerouslySetInnerHTML={{ __html: data.wpPage.acf.textcontent }} />
//     <div dangerouslySetInnerHTML={{ __html: data.wpPage.acf.description }} />
//   </>
// );

// export default PageTemplate;

// export const query = graphql`
//   query PageContent($id: String!) {
//     wpPage(id: { eq: $id }) {
//       title
//       slug
//       acf {
//         description
//         textcontent
//       }
//     }
//   }
// `;
