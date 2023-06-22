exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            slug
            databaseId
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const template = require.resolve("./src/templates/page.tsx");

  result.data.allWpPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: template,
      context: {
        databaseId: node.databaseId,
      },
    });
  });
};
