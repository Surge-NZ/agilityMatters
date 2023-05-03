import React from "react";
import { Button, Row, Col } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Row>
        <Col md={6} className={styles.heroLeftColumn}>
          <StaticImage
            className={styles.heroImage}
            src="../images/1682629618.png"
            alt="Agility Matters Book Cover"
            loading="eager"
            quality={100}
            placeholder="blurred"
            formats={["auto", "webp", "avif"]}

            // style={{ marginBottom: `var(--space-3)` }}
          />
        </Col>

        <Col md={6} className={styles.heroRightColumn}>
          <h1>AGILITY MATTERS</h1>

          <p>
            A Novel about adapting an organisation to respond to customer needs,
            flexibly.
          </p>

          <Button className={styles.heroButton} aria-label="Coming Soon">
            COMING SOON
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;

// REFACTORING:
// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import { StaticImage } from "gatsby-plugin-image";
// import { Text, Button } from "reactstrap";

// const Hero2 = ({ headerText, paragraphText, buttonText }) => {
//   return (
//     <Container>
//       <Row gutters={0}>
//         <Col xs={12} md={6}>
//           <StaticImage
//             src="../images/agility-matters-cover-highres.png"
//             alt="Agility Matters Book Cover"
//             loading="eager"
//             quality={100}
//             placeholder="blurred"
//             formats={["auto", "webp", "avif"]}
//             style={{ marginBottom: `var(--space-3)` }}
//           />
//         </Col>
//         <Col xs={12} md={6}>
//           <Container fluid>
//             <div>
//               <h1>{headerText}</h1>
//               <div>
//                 <p>{paragraphText}</p>
//                 <Button>{buttonText}</Button>
//               </div>
//             </div>
//           </Container>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Hero2;

// import React from "react";
// import { Container, Row, Col } from "reactstrap";
// import { StaticImage } from "gatsby-plugin-image";

// import * as styles from "./hero.module.css";

// const Hero = ({ heroImage, heroBackgroundColor, heroTitle, heroParagraph,  }) => {
//   return (
//     <div className={styles.hero}>
//       <Container>
//         <Row>
//           <Col md={6} className={styles.heroLeftColumn}>
//             <StaticImage
//               className={styles.heroImage}
//               src={src}
//               alt={alt}
//               loading="eager"
//               width={264}
//               formats={["auto", "webp", "avif"]}
//             />
//           </Col>
//           <Col md={6} className={styles.heroRightColumn}>
//             <h1>{title}</h1>
//             <p>{description}</p>
//             <button className={styles.heroButton} aria-label="Order Now">
//               {buttonText}
//             </button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default Hero;
