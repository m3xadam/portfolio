import "../css/hero.css";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import x from "../images/x.svg";
import mail from "../images/mail.svg";
import profile from "../images/passport.png";

import {useNavigate} from "react-router-dom";

function Hero() {
  const navigate = useNavigate();


  return (
    <div className="wrapper" id="home">
      <div className="herosection">
        <div className="infowrapper">
          <div className="sec1">
            <p className="intro">
              <span className="miniball"></span> Hello I'M
            </p>
            <h1>
              ADAM ABDULLAHI <span className="miniball2"></span>
            </h1>
            <h4>
              Web Developer <span>/</span> Game Developer
            </h4>
            <p className="textinfo">
              I build digital experiences, from games to web applications.{" "}
              <br />I love turning ambitious ideas into real projects through{" "}
              <br /> code, creativity, and continuous learning.
            </p>
            <div className="infobuttons">
              <button onClick={()=> navigate("/project")} className="vmp">View My Projects</button>
              <button className="cm">Contact Me</button>
            </div>
            <div className="footer">
              <a href="">
                <img src={github} alt="Github" />
              </a>
              <a href="">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="">
                <img src={x} alt="X" />
              </a>
              <a href="">
                <img src={mail} alt="Mail" />
              </a>
            </div>
          </div>
          <div className="sec2">
            <img className="passport" src={profile} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
