import "../css/navbar.css";

import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (


    <nav className="Navbar">
      <a onClick={() => navigate("/")} href="" className="logo">
        M3X<span>Dev</span>
      </a>

      <ul className="mobilebutton">
        <li>
          <a href="#home">About</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="navbarButton">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <button className="cvButton">Resume</button>
    </nav>
  );
}

export default NavBar;
