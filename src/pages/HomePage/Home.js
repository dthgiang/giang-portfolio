import React from "react";
import "../../styles/Home.css";
import circlePlay from "../../assets/images/circle-play.svg";
import textContent from "../../texts/textContent";
import circleBase from "../../assets/images/base-yellow.svg";
import introArrow from "../../assets/images/arrow-intro.svg";
import whiteSign from "../../assets/images/white-sign.svg";
import lineCircle from "../../assets/images/line-circle.svg";

const Home = () => {
  return (
    <div>
      {/* Intro Block */}
      <div className="intro-block">
        <div className="header">
          <img src={lineCircle} alt="lineCircle" className="line-circle-left" />
          <img src={introArrow} alt="introArrow" className="intro-arrow" />
          <img src={whiteSign} alt="whiteSign" className="white-sign" />
          <img src={circleBase} alt="circleBase" className="circle-base" />
          <img
            src={lineCircle}
            alt="lineCircle"
            className="line-circle-right"
          />
          <div className="logo-name">{textContent.logoName}</div>
          <nav className="nav-menu">
            <span className="nav-item">{textContent.home}</span>
            <span className="nav-item">{textContent.about}</span>
            <span className="nav-item">{textContent.services}</span>
            <span className="nav-item">{textContent.projects}</span>
            <span className="nav-item">{textContent.contact}</span>
          </nav>
          <div className="downloadCVButton">{textContent.downloadCV}</div>
        </div>
        <div className="introText">{textContent.introText}</div>
        <div className="introSubText">{textContent.introSubText}</div>
        <div className="buttonGroupIntro">
          <div className="getStartedButton">{textContent.getStarted}</div>
          <div className="watchDemoGroup">
            <img src={circlePlay} alt="circlePlay" className="circle-play" />
          </div>
          <div className="watchDemoGroupText">{textContent.watchDemo}</div>
        </div>
      </div>

      {/* Service Block */}
      <div>
        <div className="service-text">
          {textContent.servicesText}
          <div className="service-title">{textContent.servicesTitle}</div>
          <div className="service-subtext">{textContent.servicesSubText}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
