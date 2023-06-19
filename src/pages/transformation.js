import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Framework from "../components/framework";
import BlogsTransformation from "../components/blogs-transformation";
import TwoColBlockButtonImage from "../components/mini-components/two-col-block-button-image";

const TransformationPage = () => {
  return (
    <Layout>
      <Header
        title='Agility Transformation'
        content='Empowering your business to navigate change with speed and flexibility'
      />
      <TwoColBlockButtonImage />
      {/* add props to above component */}
      <BlogsTransformation />
      <Framework />
      <Footer />
    </Layout>
  );
};

export default TransformationPage;
