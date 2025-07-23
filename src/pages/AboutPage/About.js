import React from "react";
import "../../styles/About.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";

const About = () => {
  return (
    <div className="about-container">
      <h1>{textContent.aboutTitle}</h1>
      <p>{textContent.aboutDescription}</p>
      <div className="about-images">
        <img src={images.aboutImage1} alt="About 1" />
        <img src={images.aboutImage2} alt="About 2" />
      </div>
    </div>
  );
};

export default About;
