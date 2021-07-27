import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{resumeData.name}</span>,
                  <span>{resumeData.address}</span>
                  <br />
                  <span>
                    <a href="mailto: harrysanas140@outlook.com">
                      {resumeData.gmail}
                    </a><br />
                    <a href="tel:+91 8879200470">{resumeData.mobNo}</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>;
  }
}