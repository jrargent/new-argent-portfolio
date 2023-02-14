import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [sections] = useState([
    {
      name: 'About Me',
    },
    { name: 'Portfolio' },
    { name: 'Contact' },
    {
      name: 'Resume',
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
      <Contact currentSection={currentSection}></Contact>
      <Resume currentSection={currentSection}></Resume>
      <Footer></Footer>

      {/*
      
      <Footer /> 
      Placeholders*/}
    </div>
  );
}

export default App;
