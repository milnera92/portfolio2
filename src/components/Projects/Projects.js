import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import encore from "../../Assets/Projects/encore.png";
import token from "../../Assets/Projects/token.png";

import merchant from "../../Assets/Projects/merchant.png";
import shuffle from "../../Assets/Projects/shuffle.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={encore}
              isBlog={false}
              title="Encore"
              description="(Please allow up to 30 seconds for the site to fully load )
              MERN app for displaying concert setlists and live videos
              "
              ghLink="https://github.com/milnera92/encore-fe"
              demoLink="https://encore-project.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shuffle}
              isBlog={false}
              title="Podcast Shuffle"
              description="Takes a podcast feed and displays a random episode. Node and React"
              ghLink="https://github.com/milnera92/shuffle-be"
              demoLink="https://chaposhuffle.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={merchant}
              isBlog={false}
              title="Merchant Portal"
              description="Transaction viewer for Merchants. Built in JS, PHP and MySQL. Hosted on AWS and Heroku/Render"
              ghLink="https://github.com/milnera92/merchant-viewer-fe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={token}
              isBlog={false}
              title="JSON Web Token and SQL"
              description="
              Node.js server for generating JSON web tokens, providing different user permissions when accessing a PostgresSQL Database."
              ghLink="https://github.com/milnera92/token-and-crud"
            />
          </Col>



          {/* <h1 className="project-heading">
          Some <strong className="blue">Graphic Design </strong>
        </h1>
        <p style={{ color: "white" }}>
          *Please note this work is close to 10 years old. Images are low quality due to being pulled from a backup.
        </p> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
