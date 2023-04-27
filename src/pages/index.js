import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Features from "../components/features";
// import Title from "../components/mini-components/title";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      {/* <Title text="" /> */}
    </Layout>
  );
};

export default IndexPage;
