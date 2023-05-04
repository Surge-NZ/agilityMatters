import React from "react";
import Link from "gatsby"

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import * as styles from "./hero.module.css";

// core components
// import VideoComponent from "./video-component";
import Agil from "../assets/video/agil.mp4";



function Praise() {
  return (
   
<div className="section">
<div className="about-description text-center">
<div className={styles.videoAndTestimonials}>
<Container>
<Row>
<h2 className="title" 
  style={{ 
    textAlign: "center"
  }}>Praise for Agility Matters</h2>
<Col md={6} className="d-flex align-items-center" > 


    <video controls className={styles.video}>
      <source src={Agil} type="video/mp4" loading="lazy" />
    </video>

  
    
 
</Col>

<Col md={6}>

  <div className="typography-line">
                  
                  <blockquote>
                    <p className="blockquote blockquote" 
                    >
                      "This is an easy to read book. It has lots of practical techniques you can use with explanations of how it was used in the story to achieve an outcome.  This book gets you excited about the opportunities for improvement within your own company. If NZFS can do it. Surely we can too.   It also includes the academic details to back up the practices and appeal to those that need more detail."{" "}
                      <br></br>
                      <br></br>
                      <small>- Nicole Arthur</small>
                    </p>
                  </blockquote>

                  <blockquote>
                    <p className="blockquote blockquote" 
                    >
                      "This book is a valuable resource for anyone interested in implementing customer-focussed agility practices and other organisational theories in the workplace. Written from the perspective of Julie, the new Technology Manager at the fictional NZFS, it provides practical descriptions and scenarios which will undoubtably be familiar to anyone who has worked in a large company. Highly recommended for anyone looking to improve their customer engagement and streamline their work processes."{" "}
                      <br></br>
                      <br></br>
                      <small>- Rachel Astruc</small>
                    </p>
                  </blockquote>
               
  </div>


</Col>
</Row>
<Row className="tablet-container d-flex align-items-center">
      <Col>
  <Button
    className={styles.heroButton}
    aria-label="Coming Soon"
    href="https://www.youtube.com/playlist?list=PL7Tt7ju84Q_zWRG05UzGLzr_wQAcI9T-0"
  >
    WATCH MORE
  </Button>
  </Col>
  </Row>
</Container>
</div>
</div>
</div>
);
}

export default Praise;