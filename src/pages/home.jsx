import {Link} from "react-router-dom";

import Resume from "../components/resume"
import NavBar from "../components/navbar";
import Hero from "../components/hero";
import ScollBar from "../components/scroll";
import AboutMe from "../components/about";
import Services from "../components/services";
import Skills from "../components/skills"
import Project from "../components/project";
import Footer from "../components/footer";
import "../css/home.css";

function Home() {
  return (
    <>
      <ScollBar />
      <Resume />
      <NavBar />
      <Hero />
      <Services />
      <AboutMe />
      <Project />
      <Skills />
      <Footer />
    </>
  );
}

export default Home;
