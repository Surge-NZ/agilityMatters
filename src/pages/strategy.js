import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import BlogsStrategy from "../components/blogs-strategy";
import Footer from "../components/footer";

const StrategyPage = () => {
  return (
    <Layout>
      <Header
        title="Adaptive Strategy"
        content="Navigating uncertainty and change with Adaptive Strategy"
      />
      <BlogsStrategy />
      <Footer />
    </Layout>
  );
};

export default StrategyPage;
