import React from "react";
import Header from "../components/header";
import BlogsValue from "../components/blogs-value";
import CustomerValueMetrics from "../components/customer-value-metrics";

const ValuePage = () => {
  return (
    <>
      <Header
        title="Customer Value"
        content="Creating exceptional value for our customers, driving success for our business"
      />
      <CustomerValueMetrics />
      <BlogsValue />
    </>
  );
};

export default ValuePage;
