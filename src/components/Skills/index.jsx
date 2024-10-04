import "../Skills/Skills.scss";
import js from "../../assets/logos/icon-javascript.svg";
import react from "../../assets/logos/icon-react.svg";
import node from "../../assets/logos/icon-nodejs.svg";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import bootstrap from "../../assets/images/bootstrap.png";
import vue from "../../assets/images/vue.png";
import git from "../../assets/images/git.png";

const index = () => {
  return (
    <div className="skills">
      <span>Skills</span>
      <h1>The skills, tools and technologies I am really good at:</h1>
      <div className="container">
        <div className="js">
          <img src={js} alt="" />
          <p>Javascript</p>
        </div>
        <div className="html">
          <img src={html} alt="" />
          <p>HTML</p>
        </div>
        <div className="react">
          <img src={react} alt="" />
          <p>React</p>
        </div>
        <div className="css">
          <img src={css} alt="" />
          <p>CSS</p>
        </div>
        <div className="node">
          <img src={node} alt="" />
          <p>Node.js</p>
        </div>
        <div className="bootstrap">
          <img src={bootstrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="vue">
          <img src={vue} alt="" />
          <p>Vue</p>
        </div>
        <div className="git">
          <img src={git} alt="" />
          <p>Git</p>
        </div>
      </div>
    </div>
  );
};

export default index;
