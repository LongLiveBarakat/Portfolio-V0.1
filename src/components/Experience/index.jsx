import upwork from "../../assets/logos/logo-upwork.svg";
import google from "../../assets/images/google.png";
import egyptfwd from "../../assets/images/egyptfwd.png";
import iti from "../../assets/images/iti.png";
import "../Experience/Experience.scss";

const index = () => {
  return (
    <div className="experience">
      <span>Experience</span>
      <h1 className="main-title">
        Here is a quick summary of my most recent experiences:
      </h1>
      <div className="container">
        <div className="single-experience">
          <img src={upwork} className="upwork" />
          <div className="content">
            <h1 className="title">Independent Freelancer</h1>
            <ul>
              <li>Worked for various clients</li>
              <li>
                Worked with a variety of technologies, including React, Redux,
                Javascript, Bootstrap, and others.
              </li>
            </ul>
          </div>
          <div className="history">
            <p>Mar 2024 - Present</p>
          </div>
        </div>
        <div className="single-experience">
          <img src={google} className="google" />
          <div className="content">
            <h1 className="title">Google Developer Student Clubs Committee</h1>
            <ul>
              <li>Share Knowledge and Experience with Members</li>
              <li>
                Learned new tobics such as Front End Technologies, including
                SEO, and Accessibility and Made the tasks and attended the
                sessions
              </li>
            </ul>
          </div>
          <div className="history">
            <p>Sep 2022 - Apr 2023</p>
          </div>
        </div>
        <div className="single-experience">
          <img src={iti} className="iti" />
          <div className="content">
            <h1 className="title">Egypt FWD co-udacity Web Development</h1>
            <ul>
              <li>
                Has Attended Front End Development Using React ( 150 hrs. )
              </li>
              <li>
                Course Title : JavaScript, EcmaScript, HTML5, Bootstrap,
                Reatc.js, Communication Skills, Final Project
              </li>
            </ul>
          </div>
          <div className="history">
            <p>Jul 2023 - Sep 2023</p>
          </div>
        </div>
        <div className="single-experience">
          <img src={egyptfwd} className="egyptfwd" />
          <div className="content">
            <h1 className="title">Egypt FWD co-udacity Web Development</h1>
            <ul>
              <li>
                Has successfully completed the web developement challenger track
              </li>
            </ul>
          </div>
          <div className="history">
            <p>Sep 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
