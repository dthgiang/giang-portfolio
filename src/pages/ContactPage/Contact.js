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
      <div>Icons</div>
    </div>
  );
};

export default Contact;
