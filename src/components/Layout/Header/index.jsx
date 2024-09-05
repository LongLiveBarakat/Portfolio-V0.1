import light from "../../../assets/icons/light.svg";
import dark from "../../../assets/icons/dark.svg";
import close from "../../../assets/icons/close.svg";
import "../Header/Header.scss";
import mobileNav from "../../../assets/icons/mobileNav.svg";
import { useState } from "react";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <nav className="header">
        <h1 className="logo"> &lt;Barakat /&gt; </h1>
        <div className="buttons">
          <div className="links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
          <span className="separator"></span>
          <div className="light-cv">
            <img src={dark} alt="" />
            <a href="/cv.pdf" download>
              <button>Download CV</button>
            </a>
          </div>
        </div>
        <div className="mobile">
          <img src={mobileNav} alt="" onClick={toggleMobileNav} />
        </div>

        {isMobileNavOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-header">
              <h1 className="logo"> &lt;Barakat /&gt; </h1>
              <img src={close} alt="" onClick={toggleMobileNav} />
            </div>
            <div className="mobile-nav-links">
              <p>About</p>
              <p>Work</p>
              <p>Testimonials</p>
              <p>Contact</p>
            </div>
            <div className="mobile-nav-theme">
              <p>Switch Theme</p>
              <img src={dark} alt="" />
            </div>
            <div className="mobile-nav-button">
              <button>Download CV</button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
