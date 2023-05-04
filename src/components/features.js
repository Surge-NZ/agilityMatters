import React from "react";
import { StaticImage } from "gatsby-plugin-image";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import * as styles from "./hero.module.css";

// core components
// import VideoComponent from "./video-component";



function Features() {
  return (
    <>
      <div className="cd-section" id="features"
        >
        <div className="features-1"
        style={{
          padding: "50px 0px 0px 0px",
        }}>
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title">Fundamental Business Practices</h2>
                <h4 className="description">
                  Are you wanting to optimise your business and move it forward
                  in an agile world?
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
                  <h2 className="title">
                    AGILITY MATTERS {<br />} by Michael Law
                  </h2>
                  {/*                 
                  <p>
                    Blurb of the book / Overview on how it helps and what it
                    covers.Buy it so you can be the best Etc etc Etc
                  </p> */}
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      {/* <i className="now-ui-icons location_world"></i> */}
                    </div>
                    <div className="description">
                      <h4 className="info-title">For Contractors</h4>
                      <p>
                        This is what the book is about and what it will teach
                        you. This is what the book is about and what it will
                        teach you. This is what the book is about and what it
                        will teach you. This is what the book is about and what
                        it will teach you. This is what the book is about and
                        what it will teach you. This is what the book is about
                        and what it will teach you.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      {/* <i className="now-ui-icons sport_user-run"></i> */}
                    </div>
                    <div className="description">
                      <h4 className="info-title">For Employers</h4>
                      <p>
                        This is what the book is about and what it will teach
                        you. This is what the book is about and what it will
                        teach you. This is what the book is about and what it
                        will teach you. This is what the book is about and what
                        it will teach you. This is what the book is about and
                        what it will teach you. This is what the book is about
                        and what it will teach you. This is what the book is
                        about and what it will teach you.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-primary">
                      {/* <i className="now-ui-icons ui-2_time-alarm"></i> */}
                    </div>
                    <div className="description">
                      <h4 className="info-title">For Everyone Else</h4>
                      <p>
                        This is what the book is about and what it will teach
                        you. This is what the book is about and what it will
                        teach you. This is what the book is about and what it
                        will teach you. This is what the book is about and what
                        it will teach you. This is what the book is about and
                        what it will teach you. This is what the book is about
                        and what it will teach you. This is what the book is
                        about and what it will teach you.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md="6" className="tablet-container d-flex align-items-center" >
                  
                    <StaticImage
                      // className={styles.heroImage}
                      src="../images/1682629796.png"
                      alt="Agility Matters Book Cover"
                      loading="eager"
                      objectFit="contain"
                      // width={1500}
                      quality={100}
                      placeholder="blurred"
                      formats={["auto", "webp", "avif"]}
                     
                    />
                </Col>
                  
                  
                <Row>
                  <Col>
                  <Button
                    className={styles.heroButton}
                    aria-label="Coming Soon"
                    href="https://www.amazon.com/"
                  >
                    COMING SOON
                  </Button>
                  </Col>
                </Row>
              </Row>
         
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
