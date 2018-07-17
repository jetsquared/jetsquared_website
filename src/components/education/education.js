import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex flex-column"
        id="education"
      >
        <div className="my-auto">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Luther Rice College & Seminary</h3>
              <div className="subheading mb-0">
                Pursuing: Masters of Divinity with Languages
              </div>
              <h5 className="mb-0">Lithonia, GA</h5>
              <p>Current GPA: 3.60</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2016 - present</span>
              <br/>
              <small>This degree is composed of 30 classes. I'm currently able to take approx. 2 classes each spring and fall. Hopefully, I'll finish this degree in <i className="fas fa-less-than fa-sm" /> 8 years!</small>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row mb-4">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Southern Polytechnic State University</h3>
              <div className="subheading mb-0">Bachelor of Science</div>
              <h5 className="mb-0">Marietta, GA</h5>
              <div>
                Computer Science <br />
                Minors: Software Engineering &amp; Information Technology
              </div>
              <p>GPA: 3.29 <br/>
                <small>School is now known as Kennesaw State University</small>
              </p>
              <p />
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2012 - May 2015</span>
              <br/>
              <small>I am <strong>really</strong> proud of this degree. During this degree: my wife and I had our first child, I worked 30+ hrs/wk and I volunteered on campus at the Baptist Student Center. Career changes are not for the faint of heart!</small>
            </div>
          </div>
          <div className="resume-item d-flex flex-column flex-md-row">
            <div className="resume-content mr-auto">
              <h3 className="mb-0">Booker T. Washington</h3>
              <div className="subheading mb-0">
                High School for the Engineering Professions
              </div>
              <h5 className="mb-0">Houston, TX</h5>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 1993 - May 1998</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Education;
