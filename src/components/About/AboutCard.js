import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="blue">Dhiraj Chauhan </span>
            A <span className="blue">Second Year Student</span> from Thakur College Of Engineering, Mumbai
            <br/>
            I am passionate about programming and wanna explore more fields in this domain.
            I love the idea of giving back to the community. In my free time I like working on open source projects.
            Apart from coding, I like to listen to LO-FI Music
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
