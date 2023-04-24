import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Pricing() {
  const [pills, setPills] = React.useState("1");
  const [plan, setPlan] = React.useState("1");
  return (
    <>
      <div className="cd-section" id="pricing">
        <div
          className="pricing-1 section-image"
          id="pricing-1"
          style={{
            backgroundImage: "url(" + "../../img/bg32.jpg" + ")",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">How we can Help You</h2>
                <h4 className="description">
                  Want to Transform your Business into More Agile Practices but
                  unsure how?
                </h4>
                <div className="section-space"></div>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto" md="4">
                <Card className="card-pricing">
                  <CardBody>
                    <h5 className="category">SaaS</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      --<small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>1 GB of space</li>
                      <li>Limited Support</li>
                      <li>Support at $25/hour</li>
                      <li>Limited cloud access</li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col className="mr-auto" md="4">
                <Card
                  className="card-pricing card-raised"
                  data-background-color="blue"
                >
                  <CardBody>
                    <h5 className="category">Team Level</h5>
                    <CardTitle tag="h1">
                      <small>$</small>
                      --<small>/mo</small>
                    </CardTitle>
                    <ul>
                      <li>5 GB of space</li>
                      <li>UnLimited Support</li>
                      <li>Unlimited Downloads</li>
                      <li>Full cloud access</li>
                    </ul>
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Get Started
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Pricing;
