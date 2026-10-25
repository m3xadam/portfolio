import {Link} from "react-router-dom";

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
