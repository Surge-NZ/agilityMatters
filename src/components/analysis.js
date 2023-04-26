import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import { StaticImage } from "gatsby-plugin-image";

/* need two columns with some padding around the edges.
Left column with title: "Current State Analysis" and a paragraph: "A Current State Analysis is an important step in understanding where your organisation currently stands in terms of agility. This Analysis involves assessing current processes, systems, and organisational  structure to identify areas of inefficiency and potential roadblocks to becoming more agile By Gaining a clear understanding of the current state, you can create a comprehensive plan for agility transformation that address the specific needs of your organisation. Additionally, conducting a current state analysis allows you to benchmark progress and measure the impact of your transformation efforts over time. Overall, it is a key understanding where you are now, so you can move forward where you want to be.", both title and paragraph with black color text.
Under that, a "blockquote blockquote-info" rectangle with the paragraph: "For a free Current State analysis insight, please Utilise our Interactive BAR to give you a Measure of your Organisation " and #F96332 color, 
then a right aligned button with rounded edges, #F96332 color and the text "Free Analysis Tool"

Right column with a centered image
*/

function Analysis() {
  return (
    <Container>
      <Col>
        <Card>
          <CardBody>
            <CardTitle>
              <h2>Current State Analysis</h2>
            </CardTitle>

            <p>
              A Current State Analysis is an important step in understanding
              where your organisation currently stands in terms of agility. This
              Analysis involves assessing current processes, systems, and
              organisational structure to identify areas of inefficiency and
              potential roadblocks to becoming more agile By Gaining a clear
              understanding of the current state, you can create a comprehensive
              plan for agility transformation that address the specific needs of
              your organisation. Additionally, conducting a current state
              analysis allows you to benchmark progress and measure the impact
              of your transformation efforts over time. Overall, it is a key
              understanding where you are now, so you can move forward where you
              want to be.
            </p>
          </CardBody>
        </Card>
      </Col>
      <Col>
        {" "}
        <StaticImage
          src="../images/current-state-analysis-graph.png"
          alt="Current State Analysis Graph"
          layout="fullWidth"
          //   className={styles.backgroundImage}
        />
      </Col>
    </Container>
  );
}

export default Analysis;
