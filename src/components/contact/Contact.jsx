/* eslint-disable react/jsx-no-target-blank */

import "./contact.scss";

export default function Contact() {


  return (
    <>
      <div className="contact" id="contact">
        <div className="right">
          <h2>Connect me.</h2>
          <div id="contact" className="contactme">
            <div className="contact">
              <div>
                <img
                  alt="github"
                  src="https://image.flaticon.com/icons/png/512/25/25231.png"
                />{" "}
                &nbsp;&nbsp;&nbsp;
                <a href="https://github.com/Harshsanas" target="_blank">
                  Github
                </a>
              </div>
              <div>
                <img
                  alt="linkedin"
                  src="https://image.flaticon.com/icons/png/512/61/61109.png"
                />
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.linkedin.com/in/harshitsanas/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <img
                  alt="twitter"
                  src="https://image.flaticon.com/icons/png/512/23/23931.png"
                />
                &nbsp;&nbsp;&nbsp;
                <a href="https://twitter.com/harrysanas140" target="_blank">
                  Twitter
                </a>
              </div>
              <div>
                <img
                  alt="facebook"
                  src="https://i.pinimg.com/originals/b7/63/69/b763699fd1fa3bfb374442593ae642e1.png"
                />
                &nbsp;&nbsp;&nbsp;
                <a
                  href="https://www.facebook.com/harshit.sanas.7"
                  target="_blank"
                >
                  Facebook
                </a>
              </div>
            </div>
            <p className="created">CREATED BY - HARSHIT SANAS</p>
          </div>
        </div>
      </div>
    </>
  );
}
