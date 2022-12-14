import React, { useState } from "react";
import About from "./components/About";
import Header from "./components/Header";

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
      <Header></Header>

      <About currentSection={currentSection}></About>

      {/*
      <Project />
      <Footer /> 
      Placeholders*/}
    </div>
  );
}

export default App;
