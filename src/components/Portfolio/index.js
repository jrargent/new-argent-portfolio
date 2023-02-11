import React, { useState } from 'react';
import { CodeBlock, monokai } from 'react-code-blocks';
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

  const [thirdShow, setThirdShow] = useState(false); // add new useState line for each new modal
  const [fourthShow, setFourthShow] = useState(false);

  const code = function add(a, b) {
    var sum = a + b;
    console.log(sum);
  };

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
              {/* First project */}
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
                          onClick={() => setThirdShow(true)}
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
                          show={thirdShow}
                          onHide={() => setThirdShow(false)}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title className="contained-modal-title-vcenter">
                              Modal Heading
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="show-grid">
                            <Container>
                              <Row>
                                <Col xs={12} md={8}>
                                  .col-xs-12 .col-md-8
                                </Col>
                                <Col xs={6} md={4}>
                                  .col-xs-6 .col-md-4
                                </Col>
                              </Row>

                              <Row>
                                <Col xs={6} md={4}>
                                  .col-xs-6 .col-md-4
                                </Col>
                                <Col xs={6} md={4}>
                                  .col-xs-6 .col-md-4
                                </Col>
                                <Col xs={6} md={4}>
                                  .col-xs-6 .col-md-4
                                </Col>
                              </Row>
                            </Container>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={() => setThirdShow(false)}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/*Fourth project*/}
              <Col>
                <div className="card shadow-sm">
                  <div className="card-title">
                    <CodeBlock
                      text={code}
                      theme={monokai}
                      showLineNumbers
                      wrapLines
                      language={'javascript'}
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      Example for using CodeBlock react module. To be updated to
                      actual code.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Button
                          variant="light"
                          className=" btn btn-sm btn-outline-secondary"
                          onClick={() => setFourthShow(true)}
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
                          show={fourthShow}
                          onHide={() => setFourthShow(false)}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title className="contained-modal-title-vcenter">
                              JavaScript Code Snippet
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Container>
                              <Row>
                                <Col xs={12} md={8}>
                                  <CodeBlock
                                    text={code}
                                    theme={monokai}
                                    wrapLines
                                    customStyle={{
                                      height: '200px',
                                      overflowY: 'scroll',
                                    }}
                                    language={'javascript'}
                                  />
                                </Col>
                              </Row>
                            </Container>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={() => setFourthShow(false)}
                            >
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
