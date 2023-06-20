import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import BlogsStrategy from "../components/blogs-strategy";

const StrategyPage = () => {
  return (
    <Layout>
      <Header
        title='Adaptive Strategy'
        content='Navigating uncertainty and change with Adaptive Strategy'
      />
      <BlogsStrategy />
    </Layout>
  );
};

export default StrategyPage;
