import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import runbuddy from '../../assets/images/run-buddy-screenshot.png';
import Inspired from '../../assets/images/Inspired-Recipe.png';
import Jobtracker from '../../assets/images/job_tracker.jpg';
import Monied from '../../assets/images/Monied-screenshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Button, Nodal, Modal } from 'react-bootstrap';

function Portfolio({ currentSection }) {
  const { name } = currentSection;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (name === 'Portfolio') {
    return (
      <section id="my-work" className="work-info">
        <Container fluid>
          <h1 className="justify-content-center display-6 text-center">
            Projects
          </h1>
        </Container>
        <div className="album py-5">
          <Container fluid>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {/* first project */}
              <Col>
                <div className="card shadow-sm">
                  <img
                    src={runbuddy}
                    alt="screenshot of the runbuddy website"
                    className="card-img-top"
                  />

                  <div class="card-body">
                    <p class="card-text">
                      Run Buddy is a website created using HTML5 and CSS. This
                      was my first project in my coding bootcamp.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://jrargent.github.io/run-buddy/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Website
                        </a>
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://github.com/jrargent/run-buddy"
                          target="blank"
                        >
                          GitHub <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* Second project */}
              <Col>
                <div className="card shadow-sm">
                  <img
                    src={Inspired}
                    alt="screenshot of the Inspired Chef website"
                    className="card-img-top"
                  />

                  <div class="card-body">
                    <p class="card-text">
                      The Inspired Chef was the first group project completed in
                      my coding bootcamp. It used JavaScript and Bulma CSS.
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://jrargent.github.io/The-Inspired-Recipe/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Website
                        </a>
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://github.com/jrargent/The-Inspired-Recipe"
                          target="blank"
                        >
                          GitHub <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/* Third project */}
              <Col>
                <div className="card shadow-sm">
                  <img
                    src={Jobtracker}
                    alt="screenshot of the jobtracker website"
                    className="card-img-top"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      Jobtracker was the second group project completed in my
                      coding bootcamp. It used Node,Express,Handlebars, and uses
                      MVC principles.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Button
                          variant="light"
                          className=" btn btn-sm btn-outline-secondary"
                          onClick={handleShow}
                        >
                          Take a closer look
                        </Button>
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://github.com/william-chalk/Job-Tracker"
                          target="blank"
                        >
                          GitHub <FontAwesomeIcon icon={faGithub} />
                        </a>

                        {/* Modal */}
                        <Modal
                          show={show}
                          onHide={handleClose}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                              Modal Heading
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Woohoo, you're reading this text in a modal!
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    );
  }
}

export default Portfolio;
