import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const { sections = [], setCurrentSection, currentSection } = props;

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto">
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
