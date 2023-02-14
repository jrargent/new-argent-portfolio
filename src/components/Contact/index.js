import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Contact({ currentSection }) {
  const { name } = currentSection;
  if (name === 'Contact') {
    return (
      <Container fluid>
        <Row className="justify-content-start align-items-start">
          <Col>
            <h2>Contact Me at:</h2>

            <a
              href="mailto:jrargent42@gmail.com?subject=Mail from Argent Portfolio"
              className="btn btn-outline-primary"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Send An Email
            </a>
            {/* <form
            action="mailto:jrargent42@gmail.com?subject=Mail from my portfolio"
            method="get"
            enctype="text/plain"
          >
            <div className="form-group">
              <label for="name">
                Name:
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group">
              <label for="email">
                Email:
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group col-4">
              <label>Questions/Comments:</label>
              <br />
              <textarea
                name="comments"
                placeholder=" Send an email my way!"
                rows="5"
                className="form-control"
              ></textarea>
            </div>
            <div>
              <input
                type="submit"
                name="submit"
                value="Send"
                className="btn btn-outline-secondary"
              />
              <input
                type="reset"
                name="reset"
                value="Clear Form"
                className="btn btn-outline-secondary"
              />
            </div>
          </form> */}
          </Col>
        </Row>
      </Container>

      // email form to be set up later. Use https://www.emailjs.com/docs/tutorial/overview/
      // <Container>
      //   <Row>
      //     <Col>
      //       <Form>
      //         <label for="name">Enter your name: </label>
      //         <input
      //           type="text"
      //           placeholder="I am a placeholder!"
      //           name="name"
      //           className="mx-2"
      //         />
      //         <textarea placeholder="Please write your message here."></textarea>
      //       </Form>
      //     </Col>
      //   </Row>
      // </Container>
    );
  }
}

export default Contact;
