import React from "react";
import ColTextBlockButton from "../components/mini-components/col-text-block-button";
import { Container, Col, Row } from "reactstrap";
import TitleSubtitle from "../components/mini-components/title-subtitle";
import * as styles from "./framework-new.module.css";

const FrameworkNew = () => {
  return (
    <Container className={styles.container}>
      <Row md={12}>
        <TitleSubtitle
          title="Optimal Framework"
          subtitle="The Optimal Framework for your organisation will vary depending on culture and agility results."
        />
        <Col md={6}>
          <ColTextBlockButton
            title="ASO Model"
            paragraph="The “Amber Seeking Orange” is a term used to describe organisations that are actively working to become more agile but are not yet fully there, The term is a reference to the “Amber” and “Orange” levels of the Cynefin framework, which is a system for categorising and solving problems. The Amber level represents “complicated” situations that can be understood through analysis and expertise, while the Orange level represents “Complex” situations that require experimentation and adaptation. An Organisation that is “Amber Seeking Orange” is one the recognises the need for change and is actively working to become more Agile, but has not yet fully embraced the principles of complexity and adaptation. Such organisations are in a state of transition and continuous improvement, but the journey is not yet complete."
            quoteText="For a ASO Framework Model, please take a look at our framework model (as seen in Agility Matters)"
            buttonText="Free ASO Framework Model Tool"
            buttonLink="https://necta.nz"
          />
        </Col>
        <Col md={6}>
          <ColTextBlockButton
            title="OSG Model"
            paragraph="The “Orange Seeking Green” is a term used to describe organisations that have successfully embraced the principles of Agility and are now striving to become adaptive. The term is a reference to the “Orange” and “Green” levels of the Cynefin Framework. The Orange level represents “complex” situations that require experimentation and adaptation, while the Green level represents “chaotic” situations that require a sense and response approach. An Organisation that is “Orange Seeking Green” is one that has successully implemented Agile practices and is now focused on becoming truly adaptive by embracing a culture of experimentation and continuous learning. This type of organisation is able to respond quickly and effectively  to rapidly changing business environments and customer needs. They are continuous learning, continuous improvement, and experimentation are the core components of the day to day operations and decision making."
            quoteText="For a OSG Framework Model, please take a look at our framework model (as seen in Agility Matters)"
            buttonText="Free OSG Framework Model Tool"
            buttonLink="https://surgeconsulting.co.nz/"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default FrameworkNew;
