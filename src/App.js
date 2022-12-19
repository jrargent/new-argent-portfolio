import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

function App() {
  const [sections] = useState([
    {
      name: "About Me",
    },
    { name: "Portfolio" },
    { name: "Contact" },
    {
      name: "Resume",
    },
  ]);
  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div className="App">
      <Header
        sections={sections}
        setCurrentSection={setCurrentSection}
        currentSection={currentSection}
      ></Header>

      <About currentSection={currentSection}></About>
      <Portfolio currentSection={currentSection}></Portfolio>

      {/*
      
      <Footer /> 
      Placeholders*/}
    </div>
  );
}

export default App;
