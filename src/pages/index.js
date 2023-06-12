import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
// import Hero2 from "../components/hero2";
import Features from "../components/features";
import About from "../components/about";
import Praise from "../components/praise";
import Seo from "../components/seo";
import FooterBlack from "../components/FoooterBlack";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Praise />
      <About />
      <FooterBlack />
    </Layout>
  );
};

// export const Head = () => <Seo title="Home" />;

export default IndexPage;
