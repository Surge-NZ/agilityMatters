import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
// import Pricing from "../components/pricing";
import BlogsStrategy from "../components/blogs-strategy";
import Footer from "../components/footer";

// background-image:url(../../img/bg26.jpg)

const StrategyPage = () => {
  return (
    <Layout>
      <Header
        title="Adaptive Strategy"
        content="Navigating uncertainty and change with Adaptive Strategy"
        // backgroundImage={"url(/images/)"}
      />
      <BlogsStrategy />
      <Footer />
    </Layout>
  );
};

export default StrategyPage;
