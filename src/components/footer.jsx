import "../css/footer.css";
import linkedin from "../images/linkedin.svg";
import x from "../images/x.svg";
import github from "../images/github.svg";
import mail from "../images/mail.svg";
import instagram from "../images/instagram.svg";

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
            <a href="https://github.com/m3xadam/m3xadam">
              <img src={github} alt="github" />
            </a>
            <a href="https://www.x.com/m3x_adam">
              <img src={x} alt="x" />
            </a>
            <a href="https://www.linkedin.com/in/m3x-adam">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="mailto:businessinqdraxarmy@gmail.com">
              <img src={mail} alt="mail" />
            </a>
            <a href="https://www.instagram.com/m3x_adam">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
