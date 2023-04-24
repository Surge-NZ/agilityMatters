import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Features from "../components/features";
import Showcase from "../components/showcase";
import Summary from "../components/summary";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <Features />
        <Showcase />
        <Summary />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
