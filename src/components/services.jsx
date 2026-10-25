import "../css/services.css";
import internet from "../images/globe.svg";
import code from "../images/code.svg";
import game from "../images/gamepad.svg";
import landing from "../images/rocket.svg";
import gear from "../images/gear.svg";


function Services() {
  return (
    <div className="Serwrapper">
      <div className="swhelper">
        <div className="textservices">
          <p className="swp">
           What I Do
          </p>
          <h1 className="asec1h2">
            My <span className="Spanred">Services</span>
          </h1>
          <p className="asecinfo">
            I offer modern web solutions tailored to your needs. <br />
            from simple landing pages to complex web applications, <br />I bring
            your ideas to lie with clean code and great design.
          </p>

          <button> Get a Quote</button>
        </div>

        <div className="serviceswrapper">
          <div className="servicesSec">
            <img src={internet} alt="internet" />
            <h4>Web Design</h4>
            <p className="asecinfo">
              Beautiful, responsive and <br />
              user-friendly design that <br />
              make your brand stand out.
            </p>
          </div>
          <div className="servicesSec">
            <img src={code} alt="webapp" />
            <h4>Web Development</h4>
            <p className="asecinfo">
              Fast, secure and scalable <br />
              websites and web applications <br />
              using modern technologies.
            </p>
          </div>
          <div className="servicesSec">
            <img src={landing} alt="game" />
            <h4>Landing Pages</h4>
            <p className="asecinfo">
              high-converting landing <br />
              pages that turn visitors <br />
              into customers.
            </p>
          </div>

          <div className="servicesSec">
            <img src={gear} alt="game" />
            <h4>Website Maintenance </h4>
            <p className="asecinfo">
              Keep your dite updated, <br />
              secure and running <br />
              smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
