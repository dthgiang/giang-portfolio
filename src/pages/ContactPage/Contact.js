import React from "react";
import "../../styles/Contact.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";

const Contact = () => {
  return (
    <div className="header-contact">
      <div className="logo-contact-page">{textContent.logoName}</div>
      <div>Menu</div>
      <div>Icons</div>
    </div>
  );
};

export default Contact;
