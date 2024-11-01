import React from "react";
import "../../styles/Home.css";
import introBackground from "../../assets/images/intro_background.svg";
import circlePlay from "../../assets/images/circle-play.svg";
import textContent from "../../texts/textContent";

const Home = () => {
  return (
    <div>
      <img
        src={introBackground}
        alt="introBackGround"
        className="intro-background"
      />
      <div className="header">
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
  );
};

export default Home;
