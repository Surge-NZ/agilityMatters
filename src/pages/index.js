import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Features from "../components/features";
import About from "../components/about";
import Praise from "../components/praise";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Praise />
      <About />
    </Layout>
  );
};

export default IndexPage;
