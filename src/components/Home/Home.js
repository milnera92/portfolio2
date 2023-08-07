import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Andrew Milner</strong>
              </h1>

              <Row style={{ padding: 50 }}>
                <Col md={8} style={{ textAlign: "left" }}>
                  <Type />
                  <h1 className="heading-name">
                    <strong> Developer</strong>
                  </h1>
                </Col>
                <Col md={4} className="myAvtar">
                  <Tilt>
                    <h1>A</h1>
                  </Tilt>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
