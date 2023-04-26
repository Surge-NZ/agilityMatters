import React from "react";
import { Row, Col } from "reactstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Row>
        <Col md={6} className={styles.heroLeftColumn}>
          <StaticImage
            className={styles.heroImage}
            src="../images/agility-matters-book-cover.png"
            alt="Agility Matters Book Cover"
            loading="eager"
            width={264}
            // quality={95}
            formats={["auto", "webp", "avif"]}
            // style={{ marginBottom: `var(--space-3)` }}
          />
        </Col>
        <Col md={6} className={styles.heroRightColumn}>
          <h1>AGILITY MATTERS</h1>
          <p>
            In the software business, it is crucial to be agile in order to stay
            competitive and deliver new features and updates to customers in a
            timely manner.
          </p>
          <button className={styles.heroButton} aria-label="Order Now">
            ORDER NOW
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;

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
