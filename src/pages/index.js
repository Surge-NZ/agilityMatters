import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Showcase from "../components/showcase";
import Summary from "../components/summary";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <Hero />
        <Showcase />
        <Summary />
      </Layout>
    </React.Fragment>
  );
};

export default IndexPage;
