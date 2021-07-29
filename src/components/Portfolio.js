/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import resumeData from '../resumeData';

export default function Portfolio() {

  return (
    <>
    <section id="portfolio">
       <div className="row">
         <div className="twelve columns collapsed">
           <h1>Check Out Some of My Projects.</h1>
           <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
           {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return <div className="columns portfolio-item" key={item.id}>
                  <div>
                    <img src={`${item.imgurl}`} />
                    <div>
                      <div>
                        <h5>{item.name}</h5>
                        <p>{item.desp}</p>
                        <p>Tech Stack : {item.tech}</p>
                        <a href={item.link} style={{ color: "black" }} target="_blank">
                          <button>GITHUB LINK</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>;
            })
          }
          </div>
        </div>
      </div>
  </section></>
  )
}
