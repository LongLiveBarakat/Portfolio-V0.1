import "../GetInTouch/GetInTouch.scss";
import gmail from "../../assets/icons/gmail.svg";
import copy from "../../assets/icons/copy.svg";
import phone from "../../assets/icons/phone.svg";
import github from "../../assets/icons/github.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Index = () => {
  // Function to copy text to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(`${text} copied to clipboard!`); // Optional: Alert the user
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="get-touch" id="contact">
      <span>Get in touch</span>
      <h1 className="main-title">
        What’s next? Feel free to reach out to me if you are looking <br /> for
        a developer, have a query, or simply want to connect.
      </h1>
      <div className="gmail">
        <img src={gmail} alt="Gmail" />
        <h1>ma121223233434@gmail.com</h1>
        <img
          src={copy}
          alt="Copy"
          onClick={() => copyToClipboard("ma121223233434@gmail.com")}
        />
      </div>
      <div className="phone-number">
        <img src={phone} alt="Phone" />
        <h1>+20 1503022325</h1>
        <img
          src={copy}
          alt="Copy"
          onClick={() => copyToClipboard("+20 1503022325")}
        />
      </div>
      <div className="links">
        <p>You may also find me on these platforms!</p>
        <div className="links-icons">
          <a href="https://github.com/LongLiveBarakat" target="blank">
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://x.com/MoBaraWho" target="blank">
            <img src={twitter} alt="Twitter" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-barakat-636771228/"
            target="blank"
          >
            <img src={linkedin} alt="linked in" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
