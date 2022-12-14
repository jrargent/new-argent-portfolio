import React from "react";

function Nav(props) {
  const { sections, setCurrentSection, currentSection } = props;

  return (
    <nav className="primary-border">
      <ul className="header-nav-ul">
        {sections.map((section) => (
          <li
            className={`header-nav-ul-li-a ${
              currentSection.name === section.name && "navActive"
            }`}
            key={section.name}
          >
            <span
              onClick={() => {
                console.log("click");
                setCurrentSection(section);
              }}
            >
              {section.name}
            </span>
          </li>
        ))}
      </ul>
    </nav>
    // <nav className="primary-border">
    //   <ul>
    //     <li className="">
    //       <a href="#about"
    //       onClick={() => setCurrentSection("")}>About Me</a>
    //     </li>
    //     <li>
    //       <a href="#my-work">Work</a>
    //     </li>
    //     <li>
    //       <a href="#contact-me">Contact Me</a>
    //     </li>
    //     <li>
    //       <a href="#my-resume">Resume</a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Nav;
