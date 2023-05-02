import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Analysis from "../components/analysis";
import Footer from "../components/footer";
import Framework from "../components/framework";
import BlogsTransformation from "../components/blogs-transformation";
import TwoColBlockButtonImage from "../components/two-col-block-button-image";
// import Pricing from "../components/pricing.js";

// background-image:url(../../img/bg26.jpg)

const TransformationPage = () => {
  return (
    <Layout>
      <Header
        title="Agility Transformation"
        content="Empowering your business to navigate change with speed and flexibility"
      />
      <TwoColBlockButtonImage />
      {/* <Analysis /> */}
      <BlogsTransformation />
      <Framework />
      <Footer />
    </Layout>
  );
};

export default TransformationPage;
