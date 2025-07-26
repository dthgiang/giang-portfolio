import React from "react";
import "../../styles/About.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";

const About = () => {
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
  const handleEmailClick = () => {
    window.location.href = `mailto:${textContent.email}`;
  };

  function polarToCartesian(cx, cy, r, angleInDegrees) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    };
  }

  function describeArc(cx, cy, r, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, r, endAngle);
    const end = polarToCartesian(cx, cy, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      cx,
      cy,
      "L",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "Z",
    ].join(" ");
  }

  const dPurple = describeArc(100, 100, 99, 0, 216); // Miếng tím 60%
  const dOrange = describeArc(100, 100, 89, 216, 360); // Miếng cam 40%

  return (
    <div className="about-page-container">
      {/* Header Section */}
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
          <div
            className="gmail-wrapper-contact-page"
            onClick={handleEmailClick}
          >
            <div className="gmail-img-container-contact-page">
              <img
                src={images.gmailDefault}
                className="gmail-img-contact-page default"
                alt="Gmail"
              />
              <img
                src={images.gmailCircle}
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

      {/* Middle Section */}
      <div className="about-page-first-container">
        <div className="about-middle-container">
          <div className="about-text-container">
            <div className="about-page-title">{textContent.aboutPageTitle}</div>
            <div className="about-page-subtitle">
              {textContent.aboutPageSubTitle}
            </div>
            <div className="about-page-subtitle2">
              {textContent.aboutSubText}
            </div>
          </div>

          <img
            src={images.real}
            alt="Giang Avatar"
            className="contact-giang-avatar-img"
          />
        </div>
        <div className="about-page-stroke"></div>
        <div className="about-page-stroke-1">
          <img src={images.aboutIMG1} className="mini-image" alt="img1" />
          <img src={images.aboutIMG2} className="mini-image" alt="img2" />
          <img src={images.aboutIMG3} className="mini-image" alt="img3" />
          <img src={images.aboutIMG4} className="mini-image" alt="img4" />
          <img src={images.aboutIMG5} className="mini-image" alt="img5" />
          <img src={images.aboutIMG6} className="mini-image" alt="img6" />
        </div>
        <img
          src={images.aboutDecorFirstBlock}
          className="about-decor-first-block"
          alt="Decorative Element"
        />
      </div>

      {/* GRAPH SECTION */}
      <div className="about-graph-container">
        <div className="designer-part-container">
          <div className="title-graph">{textContent.partDesignerTitle}</div>
          <div className="subtitle-graph">
            <p>{textContent.UIDesign}</p>
            <p>{textContent.UXDesign}</p>
            <p>{textContent.DesignThinking}</p>
            <p>{textContent.InteractionDesign}</p>
            <p>{textContent.MakingItWow}</p>
          </div>
        </div>

        <div className="graph-pie-wrapper">
          <svg className="pie-chart" viewBox="-20 -20 240 240">
            <path className="pie-slice purple" d={dPurple} />
            <path className="pie-slice orange" d={dOrange} />
          </svg>
        </div>

        <div className="coder-part-container">
          <div className="title-graph">{textContent.partCoderTitle}</div>
          <div className="subtitle-graph">
            <p>{textContent.frontendDevelopment}</p>
            <p>{textContent.HTMLCSS}</p>
            <p>{textContent.JavaScript}</p>
            <p>{textContent.Typescript}</p>
            <p>{textContent.SwearingAtMyComputer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
