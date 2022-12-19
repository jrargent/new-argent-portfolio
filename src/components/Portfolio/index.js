import React from "react";
import runbuddy from "../../assets/images/run-buddy-screenshot.png";
import Inspired from "../../assets/images/Inspired-Recipe.png";
import Jobtracker from "../../assets/images/job_tracker.jpg";

function Portfolio({ currentSection }) {
  const { name } = currentSection;

  if (name === "Portfolio") {
    return (
      <section id="my-work" className="work-info">
        <div className="row">
          <div className="row-header">
            <h2>Work</h2>
          </div>

          <div className="row-content">
            <div className="run-buddy">
              <div className="workbox">
                <h3>Run Buddy</h3>
                <h4>HTML/CSS</h4>
              </div>
              {/* <!--Having the image inside the a tag lets the image be the link--> */}
              <a href="https://jrargent.github.io/run-buddy/" target="_blank">
                <img
                  src={runbuddy}
                  alt="screenshot of runbuddy website"
                  className="link"
                />
              </a>
            </div>

            {/* <!--Add image to box for under construction--> */}
            <div className="construction-row">
              <div className="under-construction">
                <div className="workbox">
                  <h3>The Inspired Recipe (Group Project)</h3>
                  <h4>JavaScript/jQuery/Bulma CSS</h4>
                </div>
                {/* <!--Having the image inside the a tag lets the image be the link--> */}
                <a
                  href="https://bslockhart.github.io/The-Inspired-Recipe/"
                  target="blank"
                >
                  <img src={Inspired} alt="" className="link" />
                </a>
              </div>

              {/* <!--Add image to box for under construction--> */}
              <div className="under-construction">
                <div className="workbox">
                  <h3>Job Tracker (Group Project)</h3>
                  <h4>Node/Express/Handlebars/MVC</h4>
                </div>
                {/* <!--Having the image inside the a tag lets the image be the link--> */}
                <a
                  href="https://thebestjobtracker.herokuapp.com/login"
                  target="blank"
                >
                  <img src={Jobtracker} alt="" className="link" />
                </a>
              </div>

              {/* <!--Add image to box for under construction--> */}
              <div className="under-construction">
                <div className="workbox">
                  <h3>Under Construction</h3>
                  <h4>MERN Stack</h4>
                </div>
                {/* <!--Having the image inside the a tag lets the image be the link--> */}
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
                  <h3>Under Construction</h3>
                  <h4>MERN Stack</h4>
                </div>
                {/* <!--Having the image inside the a tag lets the image be the link--> */}
                <a href="#" target="blank">
                  <img
                    src="./assets/images/Potential-Background.jpg"
                    alt=""
                    className="link"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
