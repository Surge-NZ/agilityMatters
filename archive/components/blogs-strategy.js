import React from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";

import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./blogs.module.css";

function BlogsStrategy() {
  return (
    <div className='blogs-3'>
      <Container>
        <Row>
          <Col className='ml-auto mr-auto' md='12'>
            <h2 className={styles.centered}>
              <b>Adaptive Strategy Models</b>
            </h2>
            <Card className='card-plain card-blog'>
              <Row>
                <Col md='4'>
                  <div className='card-image'>
                    <StaticImage
                      src='../images/kaizen.png'
                      alt='Current State Analysis Graph'
                      layout='constrained'
                      //   className={styles.backgroundImage}
                    />
                  </div>
                </Col>
                <Col md='8'>
                  <CardTitle tag='h3'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      90 Day Strategy
                    </a>
                  </CardTitle>
                  <p className='card-description'>
                    A 90-day strategy is a short-term, actionable plan that
                    focuses on achieving specific goals within a 90-day period.
                    It is usually used as a tool to align the organization's
                    efforts, resources, and priorities to achieve measurable
                    results in a shorter timeframe. The focus of a 90-day
                    strategy is on execution and delivery, rather than long-term
                    planning and vision. It is also commonly used as a way to
                    implement agile or lean methodologies in the organization,
                    by breaking down large, complex goals into smaller, more
                    manageable chunks, and allowing for continuous improvement
                    and adaptation. It helps organizations to focus on the most
                    important priorities and make progress in a short time
                    frame, and also allows them to adapt quickly to changing
                    circumstances.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className='card-plain card-blog'>
              <Row>
                <Col md='4'>
                  <div className='card-image'>
                    <StaticImage
                      src='../images/4layers.png'
                      alt='4 layers blog post'
                      layout='constrained'
                      //   className={styles.backgroundImage}
                    />
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}></a> */}
                  </div>
                </Col>
                <Col md='8'>
                  <CardTitle tag='h3'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      Dynamic Roadmap
                    </a>
                  </CardTitle>
                  <p className='card-description'>
                    A dynamic roadmap is a flexible, iterative plan that helps
                    organizations navigate changing business environments and
                    customer needs. It is designed to be adaptable, allowing
                    organizations to adjust their course as circumstances
                    change. This approach allows for continuous improvement and
                    flexibility, rather than a rigid, set-in-stone plan. A
                    dynamic roadmap is a living document that is reviewed and
                    updated regularly, reflecting the current state of the
                    organization and its goals. It helps organizations to focus
                    on the most important priorities, make progress in a short
                    time frame, and adjust their strategy as circumstances
                    change. It is especially useful for organizations that
                    operate in rapidly changing environments, such as technology
                    and startups, as it allows them to be more agile and
                    responsive to market changes.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className='card-plain card-blog'>
              <Row>
                <Col md='4'>
                  <div className='card-image'>
                    <StaticImage
                      src='../images/4layers.png'
                      alt='4 layers blog post'
                      layout='constrained'
                      //   className={styles.backgroundImage}
                    />
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}></a> */}
                  </div>
                </Col>
                <Col md='8'>
                  <CardTitle tag='h3'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      3 0's Model
                    </a>
                  </CardTitle>
                  <p className='card-description'>
                    The 3 O's Model is a framework that helps organizations to
                    identify and prioritize opportunities for growth and
                    innovation. The 3 O's stand for Optimize, Orbit, and
                    Outsmart. The Optimize O refers to opportunities for
                    improving the existing business, the Orbit O refers to
                    opportunities for expanding into new markets or segments,
                    and the Outsmart O refers to opportunities for disruptive
                    innovation. The 3 O's Model helps organizations to balance
                    their efforts between improving the existing business,
                    exploring new opportunities, and investing in breakthrough
                    innovations. This framework allows organizations to make
                    strategic decisions on where to focus their resources and
                    efforts, and helps them to identify and prioritize the
                    opportunities that will have the greatest impact on their
                    business.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className='card-plain card-blog'>
              <Row>
                <Col md='4'>
                  <div className='card-image'>
                    <StaticImage
                      src='../images/3horizon.png'
                      alt='Current State Analysis Graph'
                      layout='constrained'
                      //   className={styles.backgroundImage}
                    />
                    {/* <a href="#pablo" onClick={(e) => e.preventDefault()}></a> */}
                  </div>
                </Col>
                <Col md='8'>
                  <CardTitle tag='h3'>
                    <a href='#pablo' onClick={(e) => e.preventDefault()}>
                      7 C's of Strategy
                    </a>
                  </CardTitle>
                  <p className='card-description'>
                    The 7 C's of Strategy is a framework that helps
                    organizations to develop and implement effective strategies.
                    The 7 C's stand for: Context, Customers, Capabilities,
                    Competitors, Collaborators, Co-creators, and Climate. The 7
                    C's framework helps organizations to understand the external
                    and internal factors that impact their business and to align
                    their strategy with these factors. The framework includes
                    considering the current and future business environment,
                    understanding the needs and preferences of the customers,
                    assessing the organization's capabilities and resources,
                    analyzing the competitors, identifying potential
                    collaborators and co-creators, and monitoring the broader
                    societal and technological trends. The 7 C's of strategy
                    framework allows organizations to make strategic decisions
                    that are well-informed, relevant, and aligned with the
                    current and future business environment, which ultimately
                    leads to better results.
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

export default BlogsStrategy;
