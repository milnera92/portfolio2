import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Andrew Milner </span>
            from <span className="blue"> Montreal, QC.</span>
            <br />I am a Full Stack Web Developer pursuing new experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting 🖌️
            </li>
            <li className="about-activity">
              <ImPointRight /> Collecting Vinyl Records 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling 🥾
            </li>
          </ul>

  
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
