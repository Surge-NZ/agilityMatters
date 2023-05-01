import React from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./blogs.module.css";

function BlogsTransformation() {
  return (
    <div className="blogs-3">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="12">
            <h2 className={styles.centered}>
              <b>How to Achieve Agility Transformation</b>
            </h2>
            <br></br>
            <Card className="card-plain card-blog">
              <Row>
                <Col md="4">
                  <div className="card-image">
                    <StaticImage
                      src="../images/kaizen.png"
                      alt="Current State Analysis Graph"
                      layout="fullWidth"
                      //   className={styles.backgroundImage}
                    />
                  </div>
                </Col>
                <Col md="8">
                  <CardTitle tag="h3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Kaizen Transformation{" "}
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Kaizen is a Japanese Term that refers to the practice of
                    Continuous Improvement. The Kaizen Transformation is a
                    process of implementing this philosophy throughout an
                    organisation, with the goal of achieving small, incremental
                    improvements in all areas of the business. The focus is on
                    involving all employees in the process from the top down, in
                    order to create a culture of continuous improvement,
                    increase efficiency and productivity, and ultimately achieve
                    long-term success.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="card-plain card-blog">
              <Row>
                <Col md="4">
                  <div className="card-image">
                    <StaticImage
                      src="../images/4layers.png"
                      alt="4 layers blog post"
                      layout="fullWidth"
                      //   className={styles.backgroundImage}
                    />
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}></a> */}
                  </div>
                </Col>
                <Col md="8">
                  <CardTitle tag="h3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      4 Layers of an Organisation
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    The Four Layers of an Organization is a framework that
                    describes the different levels at which an organization can
                    be viewed and managed. These layers are: the Strategic
                    Layer, the Management Layer, the Operating Layer, and the
                    Front Line Layer. The Strategic Layer represents the overall
                    vision, mission, and objectives of the organization. The
                    Management Layer involves setting policies, procedures, and
                    standards to guide the work of the organization. The
                    Operating Layer is where the day-to-day work is done and
                    includes the processes, systems, and tools used to deliver
                    products and services. The Front Line Layer is where the
                    customer interface takes place and includes all the people
                    who interact with customers. The Four Layers of an
                    Organization framework allows for a holistic view of the
                    organization and helps to understand how changes and
                    improvements in one layer can impact the others.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="card-plain card-blog">
              <Row>
                <Col md="4">
                  <div className="card-image">
                    <StaticImage
                      src="../images/3horizon.png"
                      alt="Current State Analysis Graph"
                      layout="fullWidth"
                      //   className={styles.backgroundImage}
                    />
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}></a> */}
                  </div>
                </Col>
                <Col md="8">
                  <CardTitle tag="h3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      3 Horizon's Model
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    The Three Horizon Model is a framework that helps
                    organizations to manage their innovation portfolio. The
                    framework consists of three horizons: Horizon 1, which
                    represents the current core business and focus on improving
                    it, Horizon 2, which represents emerging opportunities and
                    growth initiatives, and Horizon 3, which represents
                    breakthrough innovation or "blue sky" thinking. The goal of
                    the Three Horizon Model is to balance the short-term needs
                    of the current business with the long-term potential of new
                    opportunities and innovations. The model helps organizations
                    to prioritize and allocate resources to the different
                    horizons, ensuring that they are able to capitalize on new
                    opportunities while maintaining the stability and growth of
                    their current business.
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogsTransformation;
