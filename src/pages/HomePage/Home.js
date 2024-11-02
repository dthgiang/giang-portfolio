import React from "react";
import "../../styles/Home.css";
import circlePlay from "../../assets/images/circle-play.svg";
import textContent from "../../texts/textContent";
import circleBase from "../../assets/images/base-yellow.svg";
import introArrow from "../../assets/images/arrow-intro.svg";
import whiteSign from "../../assets/images/white-sign.svg";
import lineCircle from "../../assets/images/line-circle.svg";
import circleService from "../../assets/images/circle-services.svg";
import purpleCircle from "../../assets/images/purple-circle-service.svg";
import iconBox1 from "../../assets/images/box-1.svg";
import iconBox2 from "../../assets/images/box-2.svg";
import iconBox3 from "../../assets/images/box-3.svg";
import star from "../../assets/images/star.svg";
import blackSign from "../../assets/images/black-sign.svg";
import yellowCircleArrow from "../../assets/images/arrow-icon-yellow.svg";
import purpleCircleArrow from "../../assets/images/arrow-icon-purple.svg";
import aboutMeLeft from "../../assets/images/about-me-left.svg";

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
      <div className="service-block">
        <div className="service-text-block">
          <div className="service-text">{textContent.servicesText}</div>
          <div className="service-title">{textContent.servicesTitle}</div>
          <div className="service-subtext">{textContent.servicesSubText}</div>
          <img
            src={circleService}
            alt="circleService"
            className="circle-service"
          />
          <img
            src={purpleCircle}
            alt="purpleCircle"
            className="purple-circle-service"
          />
        </div>
        <div className="service-box-group">
          <div className="box box-1">
            <img src={iconBox1} alt="iconBox1" className="icon-box-1" />
            <div className="box-title">{textContent.boxTitle1}</div>
            <div className="box-content">{textContent.boxContent1}</div>
          </div>
          <div className="box box-2">
            <img src={iconBox2} alt="iconBox2" className="icon-box-2" />
            <div className="box-title-2">{textContent.boxTitle2}</div>
            <div className="box-content-2">{textContent.boxContent2}</div>
          </div>
          <div className="box box-3">
            <img src={iconBox3} alt="iconBox3" className="icon-box-3" />
            <div className="box-title">{textContent.boxTitle3}</div>
            <div className="box-content">{textContent.boxContent3}</div>
          </div>
        </div>
        <img src={star} alt="star" className="star" />
      </div>

      {/* About Me Block */}
      <div className="about-me-block">
        <img src={blackSign} alt="blackSign" className="black-sign" />
        <div className="left-block">
          <img src={aboutMeLeft} alt="aboutMeLeft" className="about-me-left" />
        </div>
        <div className="right-block">
          <div className="about-me-title">{textContent.aboutMeText}</div>
          <div className="about-me-subtitle">{textContent.aboutMeTitle}</div>
          <div className="about-me-content">{textContent.aboutMeSubText}</div>
          <div className="about-box-yellow">
            <img
              src={yellowCircleArrow}
              alt="yellowCircleArrow"
              className="circle-arrow"
            />
            <div className="text-block">
              <div className="box-title">{textContent.boxTitleYellow}</div>
              <div className="box-content-yellow">
                {textContent.boxContentYellow}
              </div>
            </div>
          </div>
          <div className="about-box-purple">
            <img
              src={purpleCircleArrow}
              alt="purpleCircleArrow"
              className="circle-arrow"
            />
            <div className="text-block">
              <div className="box-title">{textContent.boxTitlePurple}</div>
              <div className="box-content-purple">
                {textContent.boxContentPurple}
              </div>
            </div>
          </div>
          <div className="downloadCVArrow">
            <span>Download CV</span>
            <i className="arrow-icon">→</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
