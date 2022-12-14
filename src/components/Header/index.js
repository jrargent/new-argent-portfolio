import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { sections = [], setCurrentSection, currentSection } = props;

  return (
    <header>
      <div className="Header-Box">
        <h1>
          <a href="/">Argent Portfolio</a>
        </h1>
      </div>

      <Nav
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Nav>
    </header>
  );
}

export default Header;
