import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
// import Hero2 from "../components/hero2";
import Features from "../components/features";
import About from "../components/about"
import Praise from "../components/praise"
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      
      {/* <Hero2
        headerText="AGILITY MATTERS"
        paragraphText="HERO2 software business, it is crucial to be agile in order to stay
            competitive and deliver new features and updates to customers in a
            timely manner."
        buttonText="COMING SOON"
      /> */}
      <Hero />
      <Features />
      <Praise />
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <SEO title="" description="" />
)
