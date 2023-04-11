import React from "react";
import 'devicon';
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="skills-title">var skillset = technologies;</h1>
      <h2 className="skills-subtitle">var technologies =</h2>
      <div className="icons-container">
        <i className="devicon-mongodb-plain-wordmark icon"></i>
        <i className="devicon-express-original icon"></i>
        <i className="devicon-react-original icon"></i>
        <i className="devicon-nodejs-plain icon"></i>
        <i className="devicon-javascript-plain icon"></i>
        <i className="devicon-html5-plain icon"></i>
        <i className="devicon-css3-plain icon"></i>
      </div>
      <p className="skills-blurb">
        I am a full-stack developer with a passion for front-end development!
      </p>
    </div>
  );
};

export default Skills;
