import React from 'react';
import resumeData from '../resumeData';
export default  function Resume() {
    return <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education && resumeData.education.map((item) => {
                return <div className="row item" key={item.id}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                    </div>
                  </div>;
              })}
          </div>
        </div>

        <div className="row education">
          <section class="skills section" id="skills">
            <div className="three columns header-col">
              <h1>
                <span>SKILLS</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div class="skills-center container">
                <div>
                  <h3>Programming Language :</h3>
                  <p>JavaScript</p>
                  <div class="skillImgs">
                    <img src="https://camo.githubusercontent.com/8a2142006d781dead07bd6ca50d1930016615d1dc3e79ca94895a4d2e1e6273f/68747470733a2f2f7777772e666c617469636f6e2e636f6d2f7376672f7374617469632f69636f6e732f7376672f3534312f3534313530392e737667" width="40px" height="40px" alt="" />
                  </div>
                  <h3>Front-End Technologies :</h3>
                  <p>HTML | CSS | Vanilla Javascript</p>
                  <div class="skillImgs">
                    <img src="https://camo.githubusercontent.com/115ae80d220b004e0c3bfd3829a87b439103c386a321c9d0b8d2faa47e781a2d/68747470733a2f2f7777772e666c617469636f6e2e636f6d2f7376672f7374617469632f69636f6e732f7376672f313231362f313231363733332e737667" width="40px" height="40px" alt="" />
                    <img src="https://camo.githubusercontent.com/13416174301f7a5805b813f156aeb90249cb5292b8cab2aedb7ea10a6319ed93/68747470733a2f2f7777772e666c617469636f6e2e636f6d2f7376672f7374617469632f69636f6e732f7376672f3733322f3733323139302e737667" width="40px" height="40px" alt="" />
                    <img src="https://camo.githubusercontent.com/8a2142006d781dead07bd6ca50d1930016615d1dc3e79ca94895a4d2e1e6273f/68747470733a2f2f7777772e666c617469636f6e2e636f6d2f7376672f7374617469632f69636f6e732f7376672f3534312f3534313530392e737667" width="40px" height="40px" alt="" />
                  </div>
                  <h3>Front-End Frameworks :</h3>
                  <p>React | Redux | Hooks | Material-UI</p>
                  <div class="skillImgs">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" width="40px" height="40px" alt="" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" width="40px" height="40px" alt="" />
                    <img src="https://camo.githubusercontent.com/1797e07d779beebc8b3a4cdf2251405a716645dff0f8f3809eb6b4c648774db7/68747470733a2f2f6d6174657269616c2d75692e636f6d2f7374617469632f6c6f676f2e706e67" width="40px" height="40px" alt="" />
                  </div>
                </div>
                <div>
                  <h3>Back-End Technology :</h3>
                  <p>Express.js | Node.js</p>
                  <div class="skillImgs">
                    <img src="https://camo.githubusercontent.com/fc359d8ab5d3ba4652c5237d727026e44a6dcef399aac2b7f815438272e9a2d7/68747470733a2f2f6e372e6e657874706e672e636f6d2f737469636b65722d706e672f3932352f3434372f737469636b65722d706e672d657870726573732d6a732d6e6f64652d6a732d6a6176617363726970742d6d6f6e676f64622d6e6f64652d6a732d746578742d74726164656d61726b2d6c6f676f2d7765622d6170706c69636174696f6e2e706e67" width="30px" height="30px" alt="" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" width="45px" height="45px" alt="" />
                  </div>
                  <h3>Database :</h3>
                  <p>MongoDB | MySQL</p>
                  <div class="skillImgs">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" width="60px" height="60px" alt="" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" width="60px" height="60px" alt="" />
                  </div>
                  <h3>Other Skills :</h3>
                  <p>Data-Structure & Algorithms</p>
                  <div class="skillImgs">
                    <img src="https://www.pngkit.com/png/full/234-2349639_data-structure-algorithms-weak-avl-tree.png" width="40px" height="40px" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>;
  }
