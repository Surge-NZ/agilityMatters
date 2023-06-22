import React from "react";
import Layout from "./src/components/layout";
import "@fontsource-variable/montserrat"; //  bring in montserrat font from fontsource

import "bootstrap/dist/css/bootstrap.min.css"; //brings in bootstrap css from the location specified

import "./src/assets/scss/now-ui-kit.scss?v=1.4.0"; //brings in NOWUI css from the location specified
import "./src/assets/demo/demo.css?v=1.4.0"; //brings in demo css from the location specified
import "./src/assets/demo/react-demo.css?v=1.4.0"; //brings in react demo css from the location specified
import "./src/assets/demo/nucleo-icons-page-styles.css?v=1.4.0"; //brings in nucleo icons css from the location specified
import "./src/assets/css/nucleo-icons-page-styles.css?v=1.4.0"; //brings in nucleo icons css from the location specified
import "./src/assets/scss/index.scss"; //brings in our custom css from the location specified

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) { //not sure what this does
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
