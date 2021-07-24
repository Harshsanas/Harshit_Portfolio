import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            Harshit S.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:+91 8879200470">+91 8879200470</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span><a href="mailto:harrysanas140@outlook.com">harrysanas140@outlook.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
