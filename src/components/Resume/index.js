import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row, Button, Form } from 'react-bootstrap';
import resumeDownload from '../../assets/files/Jennifer Argent Resume - Formatted.docx';

function Resume({ currentSection }) {
  const { name } = currentSection;

  if (name === 'Resume') {
    return (
      <Container>
        <Row>
          <Col lg={12}>
            {' '}
            <iframe
              className="doc col-12"
              width="700"
              height="550"
              src="https://docs.google.com/document/d/1fIokwGZsT4Ix-_V2bGEa4LMKE3O40JbP6J1ygiza5dI/edit?usp=sharing"
            ></iframe>
          </Col>{' '}
        </Row>

        <a
          href={resumeDownload}
          className="btn btn-outline-secondary"
          download="myResume"
        >
          Download a copy of my resume
        </a>
      </Container>
    );
  }
}

export default Resume;
