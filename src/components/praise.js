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
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Name is a name</small>
                    </p>
                  </blockquote>

                  <blockquote>
                    <p className="blockquote blockquote" 
                    >
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Name is a name</small>
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