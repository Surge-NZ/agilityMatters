import React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Features from "../components/features";
import ColTextBlockButton from "../components/mini-components/col-text-block-button";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <ColTextBlockButton
        title="ASO Model"
        paragraph="The “Amber Seeking Orange” is a term used to describe organisations that are actively working to become more agile but are not yet fully there, The term is a reference to the “Amber” and “Orange” levels of the Cynefin framework, which is a system for categorising and solving problems. The Amber level represents “complicated” situations that can be understood through analysis and expertise, while the Orange level represents “Complex” situations that require experimentation and adaptation. An Organisation that is “Amber Seeking Orange” is one the recognises the need for change and is actively working to become more Agile, but has not yet fully embraced the principles of complexity and adaptation. Such organisations are in a state of transition and continuous improvement, but the journey is not yet complete."
        quoteText="For a ASO Framework Model, please take a look at our framework model (as seen in Agility Matters)"
        buttonText="Free ASO Framework Model Tool"
        buttonLink="https://necta.nz"
      />
      <Features />
    </Layout>
  );
};

export default IndexPage;
