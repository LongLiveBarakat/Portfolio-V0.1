import "../Work/Work.scss";
import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/work-2.png";
import project3 from "../../assets/images/work-3.png";
import share from "../../assets/icons/share.svg";

const index = () => {
  return (
    <div className="work" id="work">
      <span>Work</span>
      <h1 className="main-title">
        Some of the noteworthy projects I have built:
      </h1>
      <div className="container">
        <div className="single-work">
          <div className="left-side">
            <a
              href="https://longlivebarakat.github.io/Frontend-Mentor-News-homepage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project1} alt="" />
            </a>
          </div>
          <div className="right-side">
            <h1 className="title">News Homepage</h1>
            <p className="description">
              Responsive news website homepage that features a clean and modern
              design, with sections for top stories, recent articles, and a
              prominent featured news section, all styled to provide a polished
              and user-friendly reading experience.
            </p>
            <div className="stacks">
              <span>Html</span>
              <span>Css</span>
              <span>Javascript</span>
            </div>
            <a
              href="https://longlivebarakat.github.io/Frontend-Mentor-News-homepage/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={share} alt="" className="share" />
            </a>
          </div>
        </div>
        <div className="single-work single-work-reflect-first">
          <div className="left-side">
            <img src={project3} alt="" />
          </div>
          <div className="right-side">
            <h1 className="title">ThreadTrove E-commerce</h1>
            <p className="description">
              "ThreadTrove" is a Vue.js-powered e-commerce platform specializing
              in selling a curated selection of clothing, designed to offer a
              seamless and stylish shopping experience. <br /> The project has
              not been released yet.
            </p>
            <div className="stacks">
              <span>Vue.js</span>
              <span>Html</span>
              <span>Scss</span>
              <span>Javascript</span>
              <span>Vue Router</span>
            </div>
            <img src={share} alt="" className="share" />
          </div>
        </div>
        <div className="single-work single-work-reflect-second">
          <div className="left-side">
            <a
              href="https://longlivebarakat.github.io/Bootstrap-Website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project2} alt="" />
            </a>
          </div>
          <div className="right-side">
            <h1 className="title">Front End Bootcamb</h1>
            <p className="description">
              "Front End Bootcamb" is an educational website designed to teach
              front-end fundamentals and React, offering a comprehensive
              learning experience for anyone looking to build their skills in
              web development.
            </p>
            <div className="stacks">
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>Javascript</span>
            </div>
            <a
              href="https://longlivebarakat.github.io/Bootstrap-Website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={share} alt="" className="share" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
