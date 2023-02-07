import React from 'react';
import Button from 'react-bootstrap/Button';
// import icons for github, linked in, and uhhhh

function Footer() {
  return (
    <footer>
      <div>
        <h3 className="fun">Argent Made This</h3>
        <Button variant="outline-success">Click me y'all!</Button>

        <h4 className="hide-me">
          Fun fact: The first code was punch cards for Jacquard weaving looms.
          Coding and textiles go hand-in-hand!
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
