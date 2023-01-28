import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import encore from "../../Assets/Projects/encore.png";

import nordtech from "../../Assets/Projects/nordtech.png";

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
              imgPath={nordtech}
              isBlog={false}
              title="NordTech"
              description="(Please allow up to 30 seconds for the site to fully load )
              Full stack e-commerce store using MERN stack and custom build APIs"
              ghLink="https://github.com/milnera92/ecomm-fe"
              demoLink="https://nordtech-project.onrender.com/"
            />
          </Col>





        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
