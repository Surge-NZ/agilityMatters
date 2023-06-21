## Purged unnecesary dependencies:

"sharp": "^0.32.1",
"styled-components": "^5.3.10",
"intersection-observer": "^0.12.2",
"gatsby-plugin-react-helmet": "^6.9.0",
"react-helmet": "^6.1.0",

## CSS Issues

We are importing css files in a variety of ways, which could be problematic due to unnecesary compexity.
Also, we are using gatsby-plugin-sass AND sass. It would be best to pick one of the two.
