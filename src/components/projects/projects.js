import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Senior Software Engineer</h3>
              <div className="mb-3">
                <div className="subheading">Blue Sombrero (Atlanta, GA)</div>
              </div>
              <p>asdf </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2017 - May 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">MDL Automation (Roswell, GA)</div>
              <p>asdf</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2014 - October 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-5">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Sr. Draftsman / Associate</h3>
              <div className="subheading mb-3">Robert L. Wright & Associates, Inc. (Houston, TX)</div>
              <p>asdf</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Noember 2008 - December 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">CAD Department Manager</h3>
              <div className="subheading mb-3">KLG Corporation (Centennial, CO)</div>
              <p>asdf</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2007 - September 2008</span>
            </div>
          </div>

        </div>

      </section>
    );
  }
}

export default Experience;