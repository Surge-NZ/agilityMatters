import React from "react";
import { Container, Row, Col, Card, CardTitle } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./blogs.module.css";

function BlogsValue() {
  return (
    <div className="blogs-3">
      <Container>
        <Row>
          <Col className="ml-auto mr-auto" md="10">
            <h2 className="title">Customer Value Fundamentals</h2>
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
                      Strategic Agility
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Strategic agility refers to the ability of an organization
                    to quickly and effectively adapt its strategy in response to
                    changing market conditions, customer needs, and
                    technological advancements. It is the ability to sense,
                    shape and seize opportunities and to pivot when necessary.
                    It requires an organization to be flexible, adaptive, and
                    able to respond quickly to changing circumstances. It also
                    requires a culture that encourages experimentation,
                    continuous learning, and a willingness to take calculated
                    risks. Strategic agility enables organizations to stay ahead
                    of the curve, anticipate and capitalize on new
                    opportunities, and to quickly adapt to changing
                    circumstances, which ultimately leads to better results and
                    increased competitiveness.
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
                      Cognitive Diversity
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Cognitive diversity refers to the diversity of thinking and
                    problem-solving styles within an organization. It is the
                    idea that different individuals have different ways of
                    processing information, making decisions, and solving
                    problems, and that this diversity can lead to better
                    decision-making and problem-solving. This diversity can be
                    based on factors such as background, education, experience,
                    and culture, and can include differences in perspective,
                    skills, and expertise. By fostering cognitive diversity in
                    an organization, it can lead to better problem-solving,
                    innovation, and decision-making, as different perspectives
                    and problem-solving styles are brought to the table. It also
                    allows organizations to better understand and serve diverse
                    customers and markets, which can lead to increased
                    competitiveness and growth.
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
                      Customer Experience
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Customer experience (CX) is the overall perception that a
                    customer has of a company, based on all of their
                    interactions with it. It encompasses the full range of
                    touchpoints, from pre-purchase research to post-purchase
                    support. Customer value, on the other hand, is the perceived
                    value that a customer receives from a product or service,
                    compared to its cost. Both customer experience and customer
                    value are closely related as they both play a crucial role
                    in determining customer satisfaction and loyalty. A positive
                    customer experience can lead to an increase in customer
                    value and loyalty, as customers are more likely to return
                    and recommend a company to others if they have had a good
                    experience. Therefore, organizations should strive to
                    improve both customer experience and customer value to drive
                    customer loyalty and business growth.
                  </p>
                </Col>
              </Row>
            </Card>
            <Card className="card-plain card-blog">
              <Row>
                <Col md="4">
                  <div className="card-image">
                    <StaticImage
                      src="../images/empowerment.png"
                      alt="Employer Empowerment"
                      layout="fullWidth"
                      //   className={styles.backgroundImage}
                    />
                  </div>
                </Col>
                <Col md="8">
                  <CardTitle tag="h3">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Employer Empowerment
                    </a>
                  </CardTitle>
                  <p className="card-description">
                    Employee empowerment is the practice of giving employees the
                    autonomy, authority, and resources they need to make
                    decisions and take ownership of their work. It is the
                    process of giving employees the ability to make decisions
                    and take actions that will improve their work and the work
                    of their teams. Employee empowerment is closely related to
                    customer value as empowered employees are more likely to be
                    engaged and motivated to deliver high-quality service to
                    customers, which in turn leads to increased customer
                    satisfaction and loyalty. Empowered employees are more
                    likely to take initiative, be creative and come up with new
                    ideas to improve the customer experience. They have the
                    autonomy to make decisions that benefit the customer and the
                    company. Empowering employees to make decisions and take
                    ownership of their work can lead to increased customer value
                    and ultimately drive business growth.
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

export default BlogsValue;
