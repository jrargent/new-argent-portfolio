import React, { useState } from 'react';
import { CodeBlock, monokai } from 'react-code-blocks';
import $ from 'jquery';
import OddOrEven from '../OddOrEven';
import { code1, code2 } from '../OddOrEven/code';
import Container from 'react-bootstrap/Container';
import runbuddy from '../../assets/images/run-buddy-screenshot.png';
import Inspired from '../../assets/images/Inspired-Recipe.png';
import Jobtracker from '../../assets/images/job_tracker.jpg';
import TechBlog from '../../assets/images/Tech-Blog.png';
import Monied from '../../assets/images/Monied2-screenshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Button, Nodal, Modal } from 'react-bootstrap';

function Portfolio({ currentSection }) {
  const { name } = currentSection;

  const [thirdShow, setThirdShow] = useState(false); // add new useState line for each new modal
  const [fourthShow, setFourthShow] = useState(false);

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
                <div className="card shadow-sm h-100">
                  <img
                    src={runbuddy}
                    alt="screenshot of the runbuddy website"
                    className="card-img-top img-responsive"
                  />

                  <div class="card-body">
                    <p class="card-text align-bottom">
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
                <div className="card shadow-sm h-100 jobtracker">
                  <img
                    src={Inspired}
                    alt="screenshot of the Inspired Chef website"
                    className="card-img-top img-responsive"
                  />

                  <div class="card-body">
                    <p class="card-text">
                      The Inspired Chef was the first group project completed in
                      my coding bootcamp. It used JavaScript and the Bulma CSS
                      framework.
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
                <div className="card shadow-sm h-100 jobtracker">
                  <img
                    src={Jobtracker}
                    alt="screenshot of the jobtracker website"
                    className="card-img-top img-responsive"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      Jobtracker was the second group project completed in my
                      coding bootcamp. It used Node,Express,Handlebars, and uses
                      MVC principles.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://thebestjobtracker.herokuapp.com/login"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Website
                        </a>
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://github.com/william-chalk/Job-Tracker"
                          target="blank"
                        >
                          GitHub <FontAwesomeIcon icon={faGithub} />
                        </a>
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
                      text={code1}
                      theme={monokai}
                      showLineNumbers
                      wrapLines
                      language={'javascript'}
                    />
                  </div>

                  <div className="card-body">
                    <p className="card-text">
                      This is a small JavaScript applet to determine if a number
                      is odd or even. Please click the button below to test the
                      applet.
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
                              Odd or Even Number?
                              <OddOrEven></OddOrEven>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <Container>
                              <Row className="justify-content-center">
                                <Col xs={12} md={8} lg={11}>
                                  <CodeBlock
                                    text={code2}
                                    theme={monokai}
                                    wrapLines
                                    customStyle={{
                                      height: '200px',
                                      width: '100%',
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
              {/* Fifth project */}
              <Col>
                <div className="card shadow-sm h-100">
                  <img
                    src={TechBlog}
                    alt="screenshot of the Tech-Blog website"
                    className="card-img-top img-responsive"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      Tech-Blog was a homework for the MVC module of coding
                      bootcamp. It used Node,Express,Handlebars, Bootstrap, and
                      uses MVC principles.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://tranquil-dawn-57244.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Website
                        </a>
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://github.com/jrargent/Tech-Blog"
                          target="blank"
                        >
                          GitHub <FontAwesomeIcon icon={faGithub} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              {/*Sixth Project */}
              <Col>
                <div className="card shadow-sm h-100">
                  <img
                    src={Monied}
                    alt="screenshot of the Monied website"
                    className="card-img-top img-responsive"
                  />

                  <div className="card-body">
                    <p className="card-text">
                      Monied is a fundraising platform for nonprofit
                      organizations. It is a full stack project using Node.js,
                      Express.js, React, GraphQL, and Bootstrap. It was the
                      final group project of Bootcamp and is one that I have
                      continued to work on with my group after.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href=""
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Website
                        </a>
                        <a
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                          href="https://github.com/sfhill24/Monied-2"
                          target="blank"
                        >
                          GitHub <FontAwesomeIcon icon={faGithub} />
                        </a>
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
