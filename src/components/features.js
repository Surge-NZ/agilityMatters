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
                <h2 className="title">About This Book</h2>
                <h4 className="description">
                Join Julie, a new GM, as she takes on the challenge of transforming NZFS, a company plagued by the all-too-familiar issues that afflict large organisations. 

Drawing upon a wealth of real-life case studies, this captivating story follows Julie as she measures the company’s current state, identifies pain points, and enhances customer value. With each iteration, she brings her department closer to success, proving that change is indeed possible.

Blending fiction with the author’s firsthand encounters, this compelling tale offers not only a gripping narrative but also the academic foundation that explains why these pain points arise and how they can be resolved. This unique combination of storytelling and practical insight will keep you hooked from the first page to the last.

Will Julie’s pursuit of change usher in a new era for NZFS?
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons ui-2_chat-round"></i>
                  </div>
                  <h4 className="info-title">Current State Analysis</h4>
                  <p className="description">
                    Leveraging the business agility radar to understand your organisations strengths and limitations.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons business_chart-pie-36"></i>
                  </div>
                  <h4 className="info-title">Adaptive Strategy</h4>
                  <p className="description">
                    Move from strategic planning to strategic intent with the ability to dynamically change direction.
                  </p>
                </div>
              </Col>
              <Col md="4">
                <div className="info info-hover">
                  <div className="icon icon-primary">
                    <i className="now-ui-icons design-2_ruler-pencil"></i>
                  </div>
                  <h4 className="info-title">Customer Value</h4>
                  <p className="description">
                    Focus your organisation on value consumed by the customer by reducing waste and focusing on the right metrics.
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
                <Col lg="6">
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
                <Col lg="6" className="tablet-container d-flex align-items-center" >
                  
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
