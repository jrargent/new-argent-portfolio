import React from 'react';
import headshot from '../../assets/images/Headshot.png';
import Container from 'react-bootstrap/Container';

function About({ currentSection }) {
  const { name } = currentSection;

  if (name === 'About Me') {
    return (
      <section>
        <Container fluid>
          <h1 className="justify-content-center display-6 text-center">
            About Me
          </h1>
        </Container>

        <Container fluid>
          <div className=" row justify-content-center">
            <div className="col col-10 row-content">
              <img
                src={headshot}
                alt="headshot of Argent in medieval garb, spinning yarn from a distaff"
                className="img-fluid rounded mx-auto d-block"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-10 mt-4">
              <p>
                I come to the coding world from a bit of a different background.
                I am an ancient and medieval textiles enthusiast and a member of
                the Society for Creative Anachronism, where I interpret and
                bring to life the history of spinning, weaving, and natural
                dyeing. The detail-oriented nature of textiles translates well
                to the modern craft of coding.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellendus, aliquid officia laborum, sapiente impedit
                consectetur veritatis dolore aspernatur sed expedita quod
                reiciendis praesentium quos adipisci corrupti odit possimus?
                Eius, deleniti?
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default About;
