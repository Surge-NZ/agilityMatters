import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import * as styles from "./analysis.module.css";

import { StaticImage } from "gatsby-plugin-image";

function Teams() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            <b>High Performance Teams</b>
          </h2>
          <p>
            High performance teams are teams that consistently deliver results
            that are significantly better than average. These teams are
            characterized by high levels of trust, communication, collaboration,
            and accountability. They have a strong sense of purpose and a clear
            understanding of their goals and objectives. High performance teams
            are composed of individuals who possess a diverse set of skills,
            experiences and perspectives. They are empowered, engaged and
            motivated to take ownership of their work, and are held accountable
            for delivering results. They are able to continuously improve and
            adapt to changing circumstances, leveraging their collective
            strengths to achieve exceptional results. High performance teams are
            essential for organizations looking to achieve their goals and stay
            competitive in today's fast-paced business environment.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              Use our Interactive BAR to analyse your teams performance
            </p>
          </blockquote>
          <div className={styles.buttonContainer}>
            <Button color="F96332" className={styles.button}>
              Free Analysis Tool
            </Button>
          </div>
        </Col>
        <Col>
          <StaticImage
            className={styles.centered}
            src="../images/teams.png"
            alt="Image of a team of people"
            layout="fullWidth"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <StaticImage
            className={styles.centered}
            src="../images/agility-canvas.png"
            alt="Agility Canvas"
            layout="fullWidth"
            //   className={styles.backgroundImage}
          />
        </Col>
        <Col>
          <h2>
            <b>Agility Delivery Canvas (ACDC)</b>
          </h2>
          <p>
            Agility Delivery Canvas is a visual framework that helps
            organizations to plan, execute, and deliver projects in an agile
            way. The canvas is divided into four main sections: the project's
            vision, the project's scope, the project's deliverables, and the
            project's milestones. The canvas helps to align the project team
            with the project's objectives, and provides a clear understanding of
            the project's scope, deliverables, and milestones. It also helps to
            identify dependencies, risks, and constraints, and provides a clear
            view of the project's progress. It is a collaborative tool that
            facilitates communication, planning, and alignment among team
            members, stakeholders and sponsors, and is a valuable tool for
            organizations looking to improve their agile delivery capabilities.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              Use our Interactive BAR to analyse your teams performance
            </p>
          </blockquote>
          <div className={styles.buttonContainer}>
            <Button color="F96332" className={styles.button}>
              Free Analysis Tool
            </Button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>
            <b>Prioritise Outcomes</b>
          </h2>
          <p>
            Prioritizing outcomes within an agile framework refers to the
            process of identifying and prioritizing the most important outcomes
            or results that an organization or project team aims to achieve. It
            is a key part of the agile methodology which emphasizes on
            delivering value to the customer as quickly as possible.
            Prioritizing outcomes helps to align the team's efforts with the
            organization's goals and objectives, and ensures that the team is
            focused on delivering the most important outcomes first. It is done
            through a collaborative process involving the team, stakeholders,
            and customers, to ensure that everyone's needs and expectations are
            taken into account. In agile framework, prioritizing outcomes is
            done by creating a prioritized backlog of user stories, features or
            epics that need to be implemented. This ensures that the most
            important and valuable outcomes are delivered first, and that the
            team is able to quickly adapt to changing requirements and deliver
            value to the customer in an efficient and effective way.
          </p>
          <blockquote className={styles.blockquote}>
            <p className={styles.quoteText}>
              Use our Interactive BAR to analyse your teams performance
            </p>
          </blockquote>
          {/* <div className={styles.buttonContainer}></div> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Teams;
