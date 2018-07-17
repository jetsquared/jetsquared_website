import React, { Component } from "react";

class Experience extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="experience"
      >
        <div className="my-auto">
          <h2 className="mb-5">Experience</h2>
          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto w-75">
              <div className="mb-1 h3">Blue Sombrero (Atlanta, GA)</div>
              <div className="mb-2 h4 text-dark">Senior Software Engineer</div>
              <p>
                Part of a team responsible for converting one of our legacy
                apps. New implementations were composed of Angular components &
                services, RESTful APIs, CQRS, and table creation; at times
                requiring SQL profiling and tracing from the legacy app.
                <br />
                <strong className="text-secondary">Major contribution</strong>:
                introduced a data service pattern with async operators (using
                behavior subject) to our Angular project.
              </p>
              <p>
                <strong className="text-secondary">btw</strong> - This job was
                awesome! This team is building incredible enterprise scale apps
                - the right way - while satisfying business requirements. Code
                reviews, process improvement, short feedback loop with
                management, work-life balance.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2017 - May 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto w-75">
              <div className="mb-1 h3">MDL Automation (Roswell, GA)</div>
              <div className="mb-2 h4 text-dark">Software Developer</div>
              <p>
                At this SaaS company I was responsible for website management,
                new feature design and implementation. Wrote service layer code
                (NServiceBus) and provided support to our customer service team.
                <br />
                <strong className="text-secondary">Major contribution</strong>:
                Completed an end-to-end solution (Winforms + Windows service +
                Web) for monitoring over 200 nationally distributed computers,
                resulting in a 60% reduction in support staff workload.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2014 - October 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto w-75">
              <div className="mb-1 h3">
                Robert L. Wright & Associates, Inc. (Houston, TX)
              </div>
              <div className="mb-2 h4 text-dark">Sr. Draftsman / Associate</div>
              <p>Description coming soon.</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Noember 2008 - December 2014</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto w-75">
              <div className="mb-1 h3">KLG Corporation (Centennial, CO)</div>
              <div className="mb-2 h4 text-dark">CAD Department Manager</div>
              <p>Description coming soon.</p>
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
