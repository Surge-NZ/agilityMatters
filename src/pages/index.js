import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Features from "../components/features";
// import TextImageLayout from "../components/TextImageLayout";
// import ImageComponent from "../components/mini-components/ImageComponent";
// import Title from "../components/mini-components/title";
import ColTextBlockButton from "../components/mini-components/col-text-block-button";
import { Col, Row } from "reactstrap";
import TitleSubtitle from "../components/mini-components/title-subtitle";
import FrameworkNew from "../components/framework-new";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FrameworkNew />
      {/* <TextImageLayout
        title="Default Title"
        text="Default Text"
        quote="Default Quote"
        buttonText="Default Button Text"
        image="https://picsum.photos/400/300
        "
        imageOnLeft={false}
      />
      <ImageComponent /> */}
    </Layout>
  );
};

export default IndexPage;
