import "../GetInTouch/GetInTouch.scss";
import gmail from "../../assets/icons/gmail.svg";
import copy from "../../assets/icons/copy.svg";
import phone from "../../assets/icons/phone.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";
import figma from "../../assets/icons/figma.svg";

const index = () => {
  return (
    <div className="get-touch" id="contact">
      <span>Get in touch</span>
      <h1 className="main-title">
        What’s next? Feel free to reach out to me if you are looking <br /> for
        a developer, have a query, or simply want to connect.
      </h1>
      <div className="gmail">
        <img src={gmail} alt="" />
        <h1>ma121223233434@gmail.com</h1>
        <img src={copy} alt="" />
      </div>
      <div className="phone-number">
        <img src={phone} alt="" />
        <h1>+20 1503022325</h1>
        <img src={copy} alt="" />
      </div>
      <div className="links">
        <p>You may also find me on these platforms!</p>
        <div className="links-icons">
          <img src={github} alt="" />
          <img src={twitter} alt="" />
          <img src={figma} alt="" />
        </div>
      </div>
    </div>
  );
};

export default index;
