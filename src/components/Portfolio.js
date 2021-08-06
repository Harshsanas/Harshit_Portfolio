/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

export default function Portfolio() {

  return <>
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1627040115871/GhX5Vwfmg.png?auto=compress,format&format=webp" alt="final-capstone" />

                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>React Weather App</h3>
                      <p>
                        An original web application that provides information
                        related to the current weather and climate of a area.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a href="https://harshit-weatherapp.netlify.app/" className="button project-button" target="_blank" rel="noopener noreferrer">
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/Harshsanas/React_WEATHERAPP.git" className="button project-button brands" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github icon" />
                            View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain colored technology" />
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <img src="https://images.ctfassets.net/k0lk9kiuza3o/6GX3BEB2StTLRWYuFW9UBj/23d815c203c7f9dbd25a024ce1842ee8/Homepage.png" alt="pic-some" />

                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Calendly Clone</h3>
                      <p>
                        Calendly is an app for scheduling appointments,
                        meetings, and events.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a href="https://drive.google.com/file/d/10shx-fhO4Ts8WMQd9_i0TVrSzMx18txG/view?usp=sharing" className="button project-button" target="_blank" rel="noopener noreferrer">
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/Harshsanas/Alaknanda.git" className="button project-button brands" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github icon" />
                            View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain colored technology" />
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1627039818844/Yv6sU_JRu.png?auto=compress,format&format=webp" alt="react-capstone" />
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Premier League Clone</h3>
                      <p>
                        The Premier League often referred to eponymously us
                        the top level of the English football league system
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a href="https://cloning-premierleague.netlify.app/" className="button project-button" target="_blank" rel="noopener noreferrer">
                            View Demo
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/Mangeshbk/Premier-League-clone.git" className="button project-button brands" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github icon" />
                            View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark technology" />
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1627054661887/qWAy-RMVu.png?auto=compress,format&format=webp" alt="js-capstone" />
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Rentomojo Clone</h3>
                      <p>
                        A Rental platform of the finest quality daily need
                        product items at valuable prices on EMI rents.
                      </p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                          <a href="https://drive.google.com/file/d/1qCTnKc8xBYae7AFxtP0ZYeVNfM0cInuK/view?usp=sharing" className="button project-button" target="_blank" rel="noopener noreferrer">
                            View Demo
                          </a>
                        </li>

                        <li>
                          <a href="https://github.com/Harshsanas/Rentomojo.git" className="button project-button brands" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github icon" />
                            View Source
                          </a>
                        </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-javascript-plain technology" />
                        <i className="devicon-react-plain-wordmark technology" />
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
}
