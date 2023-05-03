import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

const Hero2 = ({ headerText, paragraphText, buttonText }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <StaticImage
            src="../images/agility-matters-cover-highres.png"
            alt="Agility Matters Book Cover"
            loading="eager"
            quality={100}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}
            style={{ marginBottom: `var(--space-3)` }}
          />
        </Col>
        <Col xs={12} md={6}>
          <section>
            <header>
              <h1>{headerText}</h1>
            </header>
            <div>
              <p>{paragraphText}</p>
              <Button>{buttonText}</Button>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

Hero2.propTypes = {
  headerText: PropTypes.string.isRequired,
  paragraphText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

Hero2.defaultProps = {
  headerText: "Default Header Text",
  paragraphText:
    "In the software business, it is crucial to be agile in order to stay competitive and deliver new features and updates to customers in a timely manner.",
  buttonText: "COMING SOON",
};

export default Hero2;

// import React from "react";
// import { Row, Col, Container } from "reactstrap";
// import { StaticImage } from "gatsby-plugin-image";

// // import * as styles from "./hero.module.css";

// const Hero2 = () => {
//   return (
//     <Container>
//       <Row>
//         <Col md={6}>
//           <StaticImage
//             src="../images/agility-matters-cover-highres.png"
//             alt="Agility Matters Book Cover"
//             loading="eager"
//             quality={100}
//             placeholder="blurred"
//             formats={["auto", "webp", "avif"]}
//             // style={{ marginBottom: `var(--space-3)` }}
//           />
//         </Col>
//         <Col md={6}>
//           <h1>HERO2</h1>
//           <p>
// HERO2 software business, it is crucial to be agile in order to stay
// competitive and deliver new features and updates to customers in a
// timely manner.
//           </p>
//           <button aria-label="Order Now">ORDER NOW</button>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Hero2;
