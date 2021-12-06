import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import mentisRem from "../../Assets/mentis_rem.jpg";
import emotion from "../../Assets/1.jpeg";
import nutriFit from "../../Assets/NutriFitLogo.jpg";
import flappyBird from "../../Assets/flappyBird.png";
import ItsNotSoWeird from "../../Assets/ItsNotSoWeird.png";
import bitsOfCode from "../../Assets/about.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mentisRem}
              isBlog={false}
              title="MENTIS-REM"
              description="An app made during the hackathon Hackfit
              under 48 Hrs conducted by MLH.                                  
               The app solely built to help the mental health
              of the users. 
               The app can be used to track how your mental
              health has been throughout the day and how
              much it has varied since the past few days.
              The app was made using KOTLIN, Room Database and coroutines."
              link="https://github.com/cdhiraj40/MENTIS-REM-HACKFIT-2021"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nutriFit}
              isBlog={false}
              title="NutriFit"
              description="An app which tracks your nutrition info and
              helps you manage your food intake. The
              app will provide a platform for enabling a
              healthy lifestyle. It will also suggest foods as
              per requirements. It was made using Android(Java), the database used was firebase and MySql"
              link="https://github.com/anamansari062/NutritionApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ItsNotSoWeird}
              isBlog={false}
              title="ItsNotSoWeird"
              description="A website made during the hackathon
              HACKNITR3.0 under 32 Hrs
              • Website made to talk about sexual awareness
              and Sexual hygiene openly.
              • The site contains information about the best
              way to maintain proper hygiene.
              • It also has a HygieneChatBot which can answer all your questions about sexual awareness and Sexual hygiene. The Website was built using JavaScript, CSS, HTML5, DialogFlow"
              link="https://jwala.me/itsnotsoweird/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pogger Bot"
              description="A user friendly bot which provides inside jokes to the server with variety of features like Sending pictures using characters, images to ASCII converter, Music playing and 24/7 online
              It was built using Python."
              link="https://github.com/cdhiraj40/PoggerBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Mad-Libs Bot"
              description="Another user friendly bot but with different usage.This bot will make you laugh with your own funny words. It has features like providing funny phrases with user’s inputs, timeout feature and yes being 24/7 online.
              It was built using Python."
              link="https://github.com/cdhiraj40/MAD-LIBS-BOT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappyBird}
              isBlog={false}
              title="Flappy Bird"
              description="Flappy Bird is an arcade game in which the player controls the bird Faby, who is always moving to the right. Faby must be navigated via pairs of pipes with equal-sized holes inserted at various heights by the user.
              Has different Background that gives it a more realistic view.
              Shows the score after the game ends.
              Redirects to the start after pressing the Enter Key.
              The Tech stack used was Python with PyGame Library"
              link="https://github.com/cdhiraj40/Flappy_bird"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
