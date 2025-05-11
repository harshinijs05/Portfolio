import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
  "Final Year IT Student",
  "Aspiring Software Developer",
  "Web Development Enthusiast",
  "MERN Stack Learner"
],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
