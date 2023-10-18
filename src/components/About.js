import React from "react";
import Links from "./Links";

function About(props) {
  let bioParagraph = null;

  if (props.bio && props.bio !== "") {
    bioParagraph = <p>{props.bio}</p>;
  } else {
    bioParagraph = null;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioParagraph}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links />
    </div>
  );
}

export default About;
