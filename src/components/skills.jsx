import "../css/skill.css";
import html from "../images/skils/HTML5.svg";
import css from "../images/skils/CSS3.svg";
import unity3d from "../images/skils/unity3d.png";
import js from "../images/skils/js.png";
import react from "../images/React.svg";
import tailwind from "../images/Tailwind.svg";
import node from "../images/Node.svg";
import express from "../images/Express.svg";
import mango from "../images/MongoDB.svg";
import supabase from "../images/supabase.svg";
import git from "../images/Git.svg";
import vscode from "../images/vscode.svg";
import figma from "../images/Figma.svg";
import postman from "../images/Postman.svg";






function Skills() {
  return (
    <div className="Skillwrapper" id="skills">
      <div className="skillhelper">
        <div className="box1">
          <h1>
            <span>My</span> Skills
          </h1>
          <p>
            Here are the technologies and tools i work with, <br />
            I'm always learning and expanding my skill set.
          </p>

          <button>View All Skills</button>
        </div>

        <div className="box2">
          <h2>Frontend</h2>
          <div className="skillset">
            <img src={html} alt="" />
            <p>HTML </p>
          </div>
          <div className="skillset">
            <img src={css} alt="" />
            <p>CSS </p>
          </div>
          <div className="skillset">
            <img src={js} alt="" />

            <p>JavaScript </p>
          </div>
          <div className="skillset">
            <img src={react} alt="" />

            <p>React </p>
          </div>
          <div className="skillset">
            <img src={tailwind} alt="" />

            <p>Tailwind css </p>
          </div>
        </div>

        <div className="box2">
          <h2>Backend</h2>
          <div className="skillset">
            <img src={node} alt="" />
            <p>Node.js</p>
          </div>
          <div className="skillset">
            <img src={express} alt="" />
            <p>Express.js </p>
          </div>
          <div className="skillset">
            <img src={mango} alt="" />

            <p>MangoDB </p>
          </div>
          <div className="skillset">
            <img src={supabase} alt="" />

            <p>Supabase </p>
          </div>
        </div>

        <div className="box2">
          <h2>Tools & Others</h2>
          <div className="skillset">
            <img src={git} alt="" />
            <p>Git & GitHub</p>
          </div>
          <div className="skillset">
            <img src={vscode} alt="" />
            <p>VS Code</p>
          </div>
          <div className="skillset">
            <img src={figma} alt="" />

            <p>Figma </p>
          </div>
          <div className="skillset">
            <img src={postman} alt="" />

            <p>Postman </p>
          </div>
          <div className="skillset">
            <img src={unity3d} className="unityicon" alt="" />

            <p>Unity3d </p>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Skills;
