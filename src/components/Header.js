/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import resumeData from "../resumeData";
export default function Header() {
  return <React.Fragment>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#work-experience">
                Work Experience
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Education & Skills
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Projects
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
              {resumeData.roleDescription}
            </h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks && resumeData.socialLinks.map(
                  (item) => {
                    return (
                      <li key={item.name}>
                        <a href={item.url} target="_blank">
                          <i className={item.className} />
                        </a>
                      </li>
                    );
                  }
                )}
            </ul>
            <a href="/Harshit_Sanas_Software_Developer_Resume.pdf" download>
              <button>
                <i class="fa fa-download" download /> &nbsp; Download Resume
              </button>
            </a>
            <a href="/Harshit_Sanas_Cover-Letter.pdf" download>
              <button style={{ marginLeft: "10px" }}>
                <i class="fa fa-download" download /> &nbsp; Download Cover Letter
              </button>
            </a>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    </React.Fragment>;
}
