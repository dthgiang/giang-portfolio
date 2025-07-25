import React from "react";
import "../../styles/Contact.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="header-contact">
      <div className="logo-contact-page" onClick={handleLogoClick}>
        {textContent.logoName}
      </div>
      <nav className="nav-menu-contact-page">
        <span className="nav-item-contact-page" onClick={handleAboutClick}>
          {textContent.about}
        </span>
        <span className="nav-item-contact-page" onClick={handleContactClick}>
          {textContent.contact}
        </span>
      </nav>
      <div className="social-icons-contact-page">
        <div className="gmail-wrapper-contact-page">
          <div className="gmail-img-container-contact-page">
            <img
              src={images.gmailDefault}
              className="gmail-img-contact-page default"
              alt="Gmail"
            />
            <img
              src={images.gmailHeader}
              className="gmail-img-contact-page hover"
              alt="Gmail Hover"
            />
          </div>
          <span className="email-text-contact-page">{textContent.email}</span>
        </div>
        <a
          href="https://github.com/dthgiang"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-wrapper-contact-page">
            <img
              src={images.githubFill}
              className="icon-img-contact-page default"
              alt="GitHub"
            />
            <img
              src={images.githubColor}
              className="icon-img-contact-page hover"
              alt="GitHub Hover"
            />
          </div>
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-wrapper-contact-page">
            <img
              src={images.linkedinFill}
              className="icon-img-contact-page default"
              alt="LinkedIn"
            />
            <img
              src={images.linkedinColor}
              className="icon-img-contact-page hover"
              alt="LinkedIn Hover"
            />
          </div>
        </a>

        <a
          href="https://www.figma.com/@zangah"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="icon-wrapper-contact-page">
            <img
              src={images.figmaFill}
              className="icon-img-contact-page default"
              alt="Figma"
            />
            <img
              src={images.figmaColor}
              className="icon-img-contact-page hover"
              alt="Figma Hover"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
