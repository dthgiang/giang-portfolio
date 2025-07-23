import React from "react";
import "../../styles/Contact.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">{textContent.contactTitle}</h1>
      <p className="contact-content">{textContent.contactContent}</p>
      <div className="contact-form">
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-footer">
        <img src={images.real} alt="Contact Illustration" />
      </div>
    </div>
  );
};

export default Contact;
