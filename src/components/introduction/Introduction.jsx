import "./introduction.scss"
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Introduction() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Full Stack Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi Visitors...</h2>

          <h1>I'm Harshit Sanas</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
          <button
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1BskH3hOf2qjVm-dONi-vmbeJNE47wRKR/view?usp=sharing",
                "_blank"
              )
            }
          >
            Download My CV
          </button>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}