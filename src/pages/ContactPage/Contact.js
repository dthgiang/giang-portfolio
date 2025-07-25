import React from "react";
import "../../styles/Contact.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Email from "../../lotties/email.json"; // Assuming you have an email animation in L

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
    <div className="contact-page-container">
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
      <div className="contact-middle-container">
        <div className="contact-text-container">
          <div className="contact-page-title">
            {textContent.contactPageTitle}
          </div>
          <div className="contact-page-subtitle">
            {textContent.contactSubTitle}
          </div>
          <div className="contact-menu-social">
            <div className="gmail-element">
              <img
                src={images.gmailCircle}
                className="middle-gmail-img-contact-page"
                alt="Gmail Icon"
              />
              <span className="gmail-text-contact-middle">
                {textContent.gmail}
              </span>
            </div>
            <div className="github-element">
              <img
                src={images.githubCircle}
                className="middle-github-img-contact-page"
                alt="GitHub Icon"
              />
              <span className="github-text-contact-middle">
                {textContent.github}
              </span>
            </div>
            <div className="linkedin-element">
              <img
                src={images.linkedinCircle}
                className="middle-linkedin-img-contact-page"
                alt="LinkedIn Icon"
              />
              <span className="linkedin-text-contact-middle">
                {textContent.linkedin}
              </span>
            </div>
            <div className="figma-element">
              <img
                src={images.figmaCircle}
                className="middle-figma-img-contact-page"
                alt="Figma Icon"
              />
              <span className="figma-text-contact-middle">
                {textContent.figma}
              </span>
            </div>
          </div>
        </div>
        <img
          src={images.real}
          alt="Giang Avatar"
          className="contact-giang-avatar-img"
        />
      </div>

      {/* Contact Block */}
      <div className="subscribe-block-contact-page">
        <div className="subscribe-content-wrapper-contact-page">
          <div className="subscribe-text-container-contact-page">
            <div className="subscribe-title-contact-page">
              {textContent.contactPageTitle2}
            </div>
            <div className="subscribe-content-contact-page">
              {textContent.contactPageSubTitle2}
            </div>
            <Lottie
              animationData={Email}
              className="email-footer-contact-page"
            />
          </div>
          <div className="enter-email-container-contact-page">
            <img
              src={images.earth}
              alt="earth"
              className="earth-contact-page"
            />
            <img
              src={images.subscribeArrow}
              alt="subscribeArrow"
              className="subscribe-arrow-contact-page"
            />
            <div className="email-input1-wrapper-contact-page">
              <input
                type="email"
                placeholder="Your name"
                className="email-input1-contact-page"
              />
            </div>
            <div className="email-input2-wrapper-contact-page">
              <textarea
                placeholder="Your message"
                className="email-input2-contact-page"
              />
            </div>
            <div className="email-input3-wrapper-contact-page">
              <input
                type="email"
                placeholder="Your email"
                className="email-input3-contact-page"
              />
              <button className="subscribe-button-contact-page">
                {textContent.sendEmail}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-container-contact-page">
        <div className="logo-name" onClick={handleLogoClick}>
          {textContent.logoName}
        </div>
        <nav className="nav-menu-contact-page-footer">
          <span
            className="nav-item-footer-contact-page"
            onClick={handleAboutClick}
          >
            {textContent.about}
          </span>
          <span
            className="nav-item-footer-contact-page"
            onClick={handleContactClick}
          >
            {textContent.contact}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Contact;
