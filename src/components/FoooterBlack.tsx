/*eslint-disable*/
import { Link } from "gatsby";
import React from "react";
import * as classes from "./styles.module.scss";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// import "./FooterBlack.scss";

// core components

function FooterBlack() {
  const handleClick = (slug) => {};
  return (
    <>
      <footer className="footer" data-background-color="black">
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "10vh",
            justifyContent: "center", // center vertically
            alignItems: "center",
            bottom: 0,
            width: "100%",
          }}
        >
          <Row md={12} style={{ width: "100%" }}>
            <Col
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              lg={{ size: 6, order: 1 }} // push to the left
              md={{ size: 6, order: 1 }}
            >
              <h6>Agility Matters</h6>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
              lg={{ size: 6, order: 2 }} // push to the right
              md={{ size: 6, order: 2 }}
            >
              <div className={`copyright ${classes.copyright}`} id="copyright">
                © {new Date().getFullYear()}{" "}
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterBlack;

// /*eslint-disable*/
// import { Link } from "gatsby";
// import React from "react";
// import * as classes from "./styles.module.scss";

// // reactstrap components
// import { Container, Row, Col } from "reactstrap";
// // import "./FooterBlack.scss";

// // core components

// function FooterBlack() {
//   const handleClick = (slug) => {};
//   return (
//     <>
//       <footer className="footer" data-background-color="black">
//         <Container
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             minHeight: "10vh",
//             width: "100%",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Row
//             md={12}
//             style={{ justifyContent: "space-between", alignItems: "center" }}
//           >
//             <Col
//               style={{
//                 display: "flex",
//                 justifyContent: "flex-start",
//                 alignItems: "center",
//               }}
//               lg={6}
//               md={6}
//             >
//               <h6>Agility Matters</h6>
//             </Col>
//             <Col
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "flex-end",
//               }}
//               lg={6}
//               md={6}
//             >
//               <div className={`copyright ${classes.copyright}`} id="copyright">
//                 © {new Date().getFullYear()}
//               </div>
//             </Col>
//           </Row>
//           {/* <Row md={12} style={{ justifyContent: "space-between" }}>
//             <Col
//               style={{ display: "flex", justifyContent: "flex-start" }}
//               lg={6}
//               md={6}
//             >
//               <h6>Agility Matters</h6>
//             </Col>
//             <Col
//               style={{ display: "flex", justifyContent: "flex-end" }}
//               lg={6}
//               md={6}
//             >
//               <div className={`copyright ${classes.copyright}`} id="copyright">
//                 © {new Date().getFullYear()}
//               </div>
//             </Col>
//           </Row> */}
//           {/* </ul> */}
//           {/* </nav> */}
//         </Container>
//       </footer>
//     </>
//   );
// }

// export default FooterBlack;
