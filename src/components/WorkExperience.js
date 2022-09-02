import React from 'react';
import resumeData from '../resumeData';
export default  function WorkExperience() {
    return <section id="work-experience">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.workexperience && resumeData.workexperience.map(
                (item) => {
                  return (
                    <div className="row item" key={item.id}>
                      <div className="twelve columns">
                        <h3>{item.CompanyName}</h3>
                        <p className="info">
                          {item.JobRole}
                          <span>&bull;</span>{" "}
                          <em className="date">
                            {item.MonthOfJoining} {item.LastDate}
                          </em>
                        </p>
                        <p className="info">{item.Desp}</p>
                      </div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </section>;
  }
