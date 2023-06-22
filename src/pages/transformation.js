import React from "react";
import Header from "../components/header";
import Framework from "../components/framework";
import BlogsTransformation from "../components/blogs-transformation";
import TwoColBlockButtonImage from "../components/mini-components/two-col-block-button-image";

const TransformationPage = () => {
  return (
    <>
      <Header
        title="Agility Transformation"
        content="Empowering your business to navigate change with speed and flexibility"
      />
      <TwoColBlockButtonImage />
      {/* add props to above component */}
      <BlogsTransformation />
      <Framework />
    </>
  );
};

export default TransformationPage;
