import React from "react";
import images from "../../constants/images";
import "../../styles/Contact.css";
import textContent from "../../constants/textContent";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <div className="logo-header" onClick={handleHomeClick}>
        {textContent.logoName}
      </div>
      <nav className="nav-menu">
        <span className="nav-item" onClick={handleAboutClick}>
          {textContent.about}
        </span>
        <span className="nav-item" onClick={handleContactClick}>
          {textContent.contact}
        </span>
      </nav>
      <div className="social-icons">
        <div className="gmail-wrapper">
          <img src={images.gmailIcon} class="gmail-img" alt="Gmail" />
          <img
            src={images.gmailHeader}
            class="gmail-img-hover"
            alt="Gmail Hover"
          />
          <span className="email-text">{textContent.gmail}</span>
        </div>
        <a
          href="https://github.com/dthgiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images.githubWhite} alt="GitHub" className="github-img" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={images.linkedinIcon}
            alt="LinkedIn"
            className="linkedin-img"
          />
        </a>
        <a
          href="https://www.figma.com/@zangah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={images.figmaFill} alt="Figma" className="figma-img" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
