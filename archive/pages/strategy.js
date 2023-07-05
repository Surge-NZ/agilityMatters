import React from "react";
import Header from "../components/header";
import BlogsStrategy from "../components/blogs-strategy";

const StrategyPage = () => {
  return (
    <>
      <Header
        title="Adaptive Strategy"
        content="Navigating uncertainty and change with Adaptive Strategy"
      />
      <BlogsStrategy />
    </>
  );
};

export default StrategyPage;
