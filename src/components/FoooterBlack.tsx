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
      <Container>
        <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/"}>Purchase</Link>
              </li>

            </ul>
          </nav>
          <div className={`copyright ${classes.copyright}`} id="copyright">
            © {new Date().getFullYear()} Agility Matters 
          </div>
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
