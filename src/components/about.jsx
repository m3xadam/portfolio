import "../css/aboutme.css";
import passport from "../images/passport.png"
import location from "../images/location.svg";
import redmail from "../images/redmail.svg";
import experience from "../images/exp.svg";
import availability from "../images/clock.svg";



function AboutMe() {

  function goto(){
    window.open("https://www.fiverr.com/s/emmkKzm", "_blank");
  }

  return (
    <div className="awrapper" id="about">
      <div className="asec2">
        <img src={passport} alt="profile" />
      </div>

      <div className="asec1">
        <p className="asec1p">
          {/* <span className="amspan"></span> //*/}ABOUT ME 
        </p>
        <h2 className="asec1h2">
          Who <span>I Am</span>
        </h2>
        <p className="asec1info">
          I'm Adam, a passionate web  developer with strong intereset <br />
          in crating clean, modern and functional websites, I'm always <br />
          learning, improving and building projects that solve real problems.
         <br />
         <br />
         I may be new to the industry, but I'm not new to hard work, <br />
         creativity and determination. I'm here toturn your ideas into <br />
         something amazing.
        </p>

        {/* <div className="skillfooter"> 
            <div className="skills">
                <h2>2<span>+</span></h2>
                <p>PROJECTS BUILT</p>
            </div>
            <div className="skills">
                <h2>2<span>+</span></h2>
                <p>YEARS LEARNING</p>
            </div>
            <div className="skills">
                <h2>100<span>%</span></h2>
                <p>MOTIVATION</p>
            </div>
        </div>*/}
        <button className="sec1btn" onClick={goto}>Hire Me</button>
      </div>

      <div className="abinfo">

        <div className="absec">
          <div className="iconabsec">
            <img src={location} alt="" />
          </div>

          <div className="absectext">
            <h2>Location</h2>
            <p>Nigeria</p>
          </div>
        </div>

        <div className="absec">
          <div className="iconabsec">
            <img src={redmail} alt="" />
          </div>

          <div className="absectext">
            <h2>Email</h2>
            <p>businessinqdraxarmy@gmail.com</p>
          </div>
        </div>

        <div className="absec">
          <div className="iconabsec">
            <img src={experience} alt="" />
          </div>

          <div className="absectext">
            <h2>Experience</h2>
            <p>2+ years building and learning</p>
          </div>
        </div>

        <div className="absec">
          <div className="iconabsec">
            <img src={availability} alt="" />
          </div>

          <div className="absectext">
            <h2>Availability</h2>
            <p>Open for freelance projects</p>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default AboutMe;
