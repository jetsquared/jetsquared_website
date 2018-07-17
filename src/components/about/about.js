import React, { Component } from "react";
import SocialList from "./socialList";
import { default as socialItems } from "./socialItems";

class About extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex d-column mobile-fix"
        id="about"
      >
        <div className="my-auto">
          <div className="d-sm-none d-xs-block jumbo-text mb-3">
            <h1>
              <span className="text-primary mb-0 pb-0 pt-0 ">James</span>
            </h1>
            <h1>&nbsp;E.</h1>
            <h1>&nbsp;&nbsp;Taylor II</h1>
          </div>
          <span className="d-none d-sm-block">
            <h1 className="mb-0 jumbo-text">
              <span className="text-primary mb-0 pb-0">James&nbsp;</span>
              E. Taylor II
            </h1>
          </span>
          <div className="subheading mb-3">
            <span className="d-none d-sm-block">
              <strong>contact me:</strong>&nbsp;<br className="d-sm-none d-xs-block" />james
              at jetsquared dot com
            </span>
            <span className="d-sm-none d-block">
              <strong>contact me:</strong>&nbsp;<br className="d-sm-none d-xs-block" />
              <span className="h5">james at jetsquared dot com</span>
            </span>
          </div>
          <p className="mb-5">
            Experienced results-driven software engineer with a management
            background seeking to bring an engineering, problem-solving mindset
            in a full stack position to deliver enterprise level software
            solutions to your clients and business needs.
          </p>
          <div className="mb-5">
            <SocialList items={socialItems} />
            &emsp;<small>
              <strong>
                Click the&nbsp;{" "}
                <a href="/James_Taylor_jetsquared_resume.pdf" download>
                  <i className="far fa-file-pdf" />
                </a>{" "}
                &nbsp;to download a PDF of my résumé.
              </strong>
            </small>
          </div>

          <div className="subheading mb-2">This Site</div>
          <div className="mb-2">
            Built with:
            <br />
            &emsp;<a
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org"
            >
              <i className="fab fa-react fa-lg" />&nbsp;reactjs
            </a>&nbsp; (go learn more about it!)
            <br />
            &emsp;<a
              target="_blank"
              rel="noopener noreferrer"
              href="https://getbootstrap.com/"
            >
              <i className="devicons devicons-bootstrap fa-lg" />
              &nbsp;Bootstrap 4
            </a>
          </div>
          <div className="mb-2">
            View the source&nbsp;<code>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/jetsquared/jetsquared_website"
              >
                code
              </a>
            </code>&nbsp;for this site on my github page:&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jetsquared/jetsquared_website"
            >
              <i className="fab fa-github fa-lg" />&nbsp;jetsquared
            </a>.
          </div>
          <ul className="fa-ul mb-0 icon-list mb-4">
            <li>
              <span className="fa fa-li">
                <i className="fas fa-mobile fa-lg" />
              </span>
              Mobile-First, Responsive Design&nbsp;
            </li>
            <li>
              <span className="fa fa-li">
                <i className="fas fa-desktop" />
              </span>
              Cross Browser Testing &amp; Debugging
            </li>
          </ul>
          <div className="subheading mb-2">Credits:</div>
          <p>
            The template used for this site comes from&nbsp;
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="alert-link"
              href="https://startbootstrap.com/"
            >
              Start Bootstrap | BlackrockDigital
            </a>. Check out his designs!
          </p>
        </div>
      </section>
    );
  }
}

export default About;
