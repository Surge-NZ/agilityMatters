import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogsValue from "../components/blogs-value";
import CustomerValueMetrics from "../components/customer-value-metrics";

const ValuePage = () => {
  return (
    <Layout>
      <Header
        title="Customer Value"
        content="Creating exceptional value for our customers, driving success for our business"
      />
      <CustomerValueMetrics />
      <BlogsValue />
      <Footer />
    </Layout>
  );
};

export default ValuePage;
