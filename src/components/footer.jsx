import "../css/footer.css";
import linkedin from "../images/linkedin.svg";
import x from "../images/x.svg";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
import discord from "../images/linkedin.svg";

function Footer() {
  return (
    <div className="Fwrapper">
      <div className="fwhelper">
        <div className="fsec3">
          <h1>
            M3X<span>Dev</span>
          </h1>
          <h3>
            FULL STACK DEVELOPER
          </h3>
    
        </div>

        <div className="fsec2">
          <a href="#home"> Home</a>
          <a href="#about"> About</a>
          <a href="#skills"> Skills</a>
          <a href="#project"> Projects</a>
          <a href="#contact"> Contact</a>
        </div>

        <div className="fsec1">
          <div className="socials">
            <a href="">
              <img src={github} alt="github" />
            </a>
            <a href="">
              <img src={x} alt="x" />
            </a>
            <a href="">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="">
              <img src={mail} alt="mail" />
            </a>
            <a href="">
              <img src={linkedin} alt="Discord" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
