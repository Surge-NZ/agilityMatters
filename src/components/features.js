import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function Features() {
  return (
    <>
      <div className="cd-section" id="features">
        <div className="features-1">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title">Fundamental Business Practices</h2>
                <h4 className="description">
                  Are you wantng to optimise you business and move it forward in
                  an agile world?
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <h4 className="info-title">Book</h4>
                  <p className="description">
                    Gain access to the demographics, psychographics, and
                    location of unique people.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                  </div>
                  <h4 className="info-title">Agility Transformation</h4>
                  <p className="description">
                    Unify data from Facebook, Instagram, Twitter, LinkedIn, and
                    Youtube to gain rich insights.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title">Adaptive Strategy</h4>
                  <p className="description">
                    Track actions taken on your website, understand the impact
                    on your bottom line.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          {/* 
          // other section 
          */}
          <div className="features-5">
            <Container>
              <Row>
                <Col md="6">
                  <h2 className="title">{`AGILITY MATTERS \n

                  by Michael Law`}</h2>
                  <p>
                    Blurb of the book/ Overview on how it helps and what it
                    covers.Buy it so you can be the best Etc etc Etc
                  </p>
                  <div className="info info-horizontal">
                    <div className="icon icon-info icon-circle">
                      <i className="now-ui-icons location_world"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Point One</h4>
                      <p>
                        The moment you use Now UI Kit, you know you've never
                        felt anything like it. With a single use lets you do
                        more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info icon-circle">
                      <i className="now-ui-icons sport_user-run"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Point Two</h4>
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing a feature.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info icon-circle">
                      <i className="now-ui-icons ui-2_time-alarm"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Point Three</h4>
                      <p>
                        Divide details about your product or agency work into
                        parts. Write a few lines about each one. A paragraph
                        describing a feature.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6">
                  <div className="tablet-container">
                    <StaticImage
                      //   className={styles.heroImage}
                      src="../images/agility-matters-cover-highres.png"
                      alt="Agility Matters Book Cover"
                      loading="eager"
                      width={1500}
                      quality={95}
                      formats={["auto", "webp", "avif"]}
                      //   style={{ marginBottom: `var(--space-3)` }}
                    />
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
