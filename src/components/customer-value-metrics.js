import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import * as styles from "./analysis.module.css";

import { StaticImage } from "gatsby-plugin-image";

function CustomerValueMetrics() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            <b>Customer Value Metrics</b>
          </h2>
          <p>
            Customer value metrics are a set of measurements used to assess the
            value that a company delivers to its customers. These metrics focus
            on the customers' perception of value, as opposed to the company's
            internal performance. Some common examples of customer value metrics
            include customer satisfaction, customer retention, and customer
            lifetime value. These metrics allow organizations to understand how
            well they are meeting their customers' needs and expectations and to
            identify areas for improvement. By regularly tracking and analyzing
            customer value metrics, organizations can make data-driven decisions
            to improve their products and services, increase customer loyalty
            and ultimately drive business growth.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              For a insight into your organisatiopns customer value metrics ,
              please Utilise our Interactive BAR to give you a Measure of your
              Organisation
            </p>
          </blockquote>
          <div className={styles.buttonContainer}>
            <Button color="F96332" className={styles.button}>
              Free Analysis Tool
            </Button>
          </div>
        </Col>
        <Col className={styles.centered}>
          <StaticImage
           
            src="../images/customer-value-metrics.png"
            alt="Customer Value Metrics Graph"
        
          />
        </Col>
      </Row>
    </Container>
  );
}

export default CustomerValueMetrics;
