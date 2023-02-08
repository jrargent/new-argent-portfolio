import React from 'react';
import Container from 'react-bootstrap/Container';
import runbuddy from '../../assets/images/run-buddy-screenshot.png';
import Inspired from '../../assets/images/Inspired-Recipe.png';
import Jobtracker from '../../assets/images/job_tracker.jpg';
import Monied from '../../assets/images/Monied-screenshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portfolio({ currentSection }) {
  const { name } = currentSection;

  if (name === 'Portfolio') {
    return (
      <section id="my-work" className="work-info">
        <Container fluid>
          <h1 className="justify-content-center display-6 text-center">
            Projects
          </h1>
        </Container>

        <div className="row">
          <div className="row-content">
            <div className="run-buddy">
              <div className="workbox">
                <a
                  href="https://jrargent.github.io/run-buddy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Run Buddy</h3>
                  <h4>HTML/CSS</h4>
                </a>
                <a href="https://github.com/jrargent/run-buddy" target="blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>

              <img
                src={runbuddy}
                alt="screenshot of the runbuddy website"
                className="link"
              />
            </div>

            {/* <!--Add image to box for under construction--> */}
            <div className="construction-row">
              <div className="under-construction">
                <div className="workbox">
                  <a
                    href="https://jrargent.github.io/The-Inspired-Recipe/"
                    target="blank"
                  >
                    <h3>The Inspired Recipe (Group Project)</h3>
                    <h4>JavaScript/jQuery/Bulma CSS</h4>{' '}
                  </a>
                  <a
                    href="https://github.com/jrargent/The-Inspired-Recipe"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>

                <img src={Inspired} alt="" className="link" />
              </div>

              {/* <!--Add image to box for under construction--> */}
              <div className="under-construction">
                <div className="workbox">
                  <a
                    href="https://thebestjobtracker.herokuapp.com/login"
                    target="blank"
                  >
                    <h3>Job Tracker (Group Project)</h3>
                    <h4>Node/Express/Handlebars/MVC</h4>
                  </a>
                  <a
                    href="https://github.com/william-chalk/Job-Tracker"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <img src={Jobtracker} alt="" className="link" />
              </div>

              {/* <!--Add image to box for under construction--> */}
              <div className="under-construction">
                <div className="workbox">
                  <h3>Under Construction</h3>
                  <h4>MERN Stack</h4>
                </div>

                <a href="#" target="blank">
                  <img
                    src="./assets/images/Drop_spindle_with_wool.jpg"
                    alt=""
                    className="link"
                  />
                </a>
              </div>

              {/* <!--Add image to box for under construction--> */}
              <div className="under-construction">
                <div className="workbox">
                  <a
                    href="https://aqueous-scrubland-12058.herokuapp.com/"
                    target="blank"
                  >
                    <h3>
                      Monied: A Charity Crowdsourcing Website(Group Project)
                    </h3>
                    <h4>MERN Stack</h4>
                  </a>
                  <a
                    href="https://github.com/kristacannady/Monied"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
                <img src={Monied} alt="" className="link" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

//export default Portfolio;
