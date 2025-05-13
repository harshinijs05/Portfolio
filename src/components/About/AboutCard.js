import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">JAYANTHI SAVITRI HARSHINI </span>
            from <span className="purple"> Vijayawada, India.</span>
            <br />
            I’m a final-year Information Technology student at PVPSIT, passionate about building scalable software and currently seeking a challenging opportunity to kickstart my career as a software developer.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Home Gardening
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learning never exhausts the mind.!"{" "}
          </p>
          <footer className="blockquote-footer">Leonardo da Vinci</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
