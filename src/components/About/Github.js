import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#0800cc",
    grade3: "#0a00ff",
    grade2: "#3b33ff",
    grade1: "#000000",
    grade0: "#6c66ff",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="blue">OpenSource</strong> Activity
      </h1>
      <GitHubCalendar
        username="cdhiraj40"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;


