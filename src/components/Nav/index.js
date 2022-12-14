import React from "react";

function Nav(props) {
  return (
    <nav className="primary-border">
      <ul>
        <li className="">
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#my-work">Work</a>
        </li>
        <li>
          <a href="#contact-me">Contact Me</a>
        </li>
        <li>
          <a href="#my-resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
