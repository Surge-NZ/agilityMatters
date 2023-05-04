import React from "react";


// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import * as styles from "./hero.module.css";

// core components
// import VideoComponent from "./video-component";
import Agil from "../assets/video/agil.mp4";



function Praise() {
  return (
   

<div className={styles.videoAndTestimonials}>
<Container>
<Row>
<Col md={6}>
  {/* <VideoComponent /> */}
  <div className="video">
    <video controls width="400" height="200">
      <source src={Agil} type="video/mp4" loading="lazy" />
    </video>
  </div>
  <h3>Agility Matters YouTube</h3>
  <Button
    className={styles.heroButton}
    aria-label="Coming Soon"
  >
    Watch More
  </Button>
</Col>

<Col md={6}>
  <h2>Praise for Agility Matters</h2>
  <p>
    “this is a book that has a beginning and an end. my
    favourite type of book. the middle was also present and it
    was okay ”
  </p>
  <p>• Charles Fake</p>
  <p>
    “this book was okay but there were no dinosaurs in it and
    that was kinda disappointing, i wish there was more wheres
    wally so i could locate him”
  </p>
  <p>• Charles Fake</p>
</Col>
</Row>
</Container>
</div>
);
}

export default Praise;