import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "An Android Developer 💻",
          "An Open Source Enthusiast ",
          "Loves To Build",
          "And Contribute To Projects 🛠",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
