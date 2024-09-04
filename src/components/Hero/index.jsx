import figma from "../../assets/icons/figma.svg";
import github from "../../assets/icons/github.svg";
import greenDot from "../../assets/icons/greenDot.svg";
import location from "../../assets/icons/location.svg";
import twitter from "../../assets/icons/twitter.svg";
import profile1 from "../../assets/images/profile-1.jpeg";
import "../Hero/Hero.scss";

const index = () => {
  return (
    <div className="hero">
      <div className="left-side">
        <h1>Hi, I'm Mohamed 👋</h1>
        <p>
          I'm a front end developer (React.js & Vue.js) with a focus on creating
          exceptional digital experiences that are fast, accessible, visually
          appealing, and responsive. Even though I have been creating web
          applications for over 2 years, I still love it as if it was something
          new.
        </p>
        <div className="info">
          <div className="location">
            <img src={location} />
            <p>Alexandria, Egypt</p>
          </div>
          <div className="available">
            <img src={greenDot} />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="links">
          <img src={github} />
          <img src={twitter} />
          <img src={figma} />
        </div>
      </div>
      <div className="right-side">
        <span></span>
        <img src={profile1} />
      </div>
    </div>
  );
};

export default index;
