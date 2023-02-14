import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faCopyright } from '@fortawesome/free-regular-svg-icons';
// import icons for github, linked in, and uhhhh

function Footer() {
  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => {
      setToggleValue(!toggleValue);
    };
    return [toggleValue, toggler];
  };

  const [toggle, setToggle] = useToggle();

  return (
    <footer>
      <div className="justify-content-center">
        <h4 className="fun">
          Argent Made This, <FontAwesomeIcon icon={faCopyright} /> 2023
        </h4>
        <div className="btn-group">
          <a
            type="button"
            class="btn btn-outline-secondary"
            href="https://github.com/jrargent/"
            target="blank"
          >
            Please checkout my GitHub <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            type="button"
            class="btn btn-outline-secondary"
            href="https://www.linkedin.com/in/jennifer-r-argent/"
            target="blank"
          >
            Or checkout my LinkedIn <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* <Button variant="outline-success" onClick={setToggle}>
          Click me y'all!
        </Button> */}
        </div>
        {/* {toggle && (
          <h4 className="hide-me">
            Fun fact: The first code was punch cards for Jacquard weaving looms.
            Coding and textiles go hand-in-hand!
          </h4>
        )} */}
      </div>
    </footer>
  );
}

export default Footer;
