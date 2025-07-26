import React from "react";
import "../../styles/About.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

  useEffect(() => {
    const wrapper = document.querySelector(".graph-pie-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wrapper.classList.add("animate");
            observer.unobserve(wrapper);
          }
        });
      },
      { threshold: 0.75 } // Khi khoảng 40% chart vào viewport
    );

    if (wrapper) observer.observe(wrapper);
  }, []);

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
            {/* Group xoay ngược lại để giữ chữ đứng thẳng */}
            <g transform="rotate(-145, 100, 100)">
              {/* Label tím (60%) */}
              <text
                x={polarToCartesian(100, 100, 55, 108).x}
                y={polarToCartesian(100, 100, 55, 108).y - 28}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="label-text-graph"
              >
                {textContent.Coder}
              </text>

              {/* Label cam (40%) — dịch y xuống 8px để cân tâm miếng cam nhỏ hơn */}
              <text
                x={polarToCartesian(100, 100, 45, 288).x - 5}
                y={polarToCartesian(100, 100, 45, 288).y + 15}
                textAnchor="middle"
                alignmentBaseline="middle"
                className="label-text-graph"
              >
                {textContent.Designer}
              </text>
            </g>
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

      {/* RANDOM FACT SECTION */}
      <div className="random-fact-container">
        <div className="random-fact-left-block">
          <img src={images.randomFact} alt="Random Fact" className="hitman" />
        </div>
        <div className="random-fact-right-block">
          <div className="random-fact-title">{textContent.randomFactTitle}</div>
          <p>{textContent.randomFact1}</p>
          <p>{textContent.randomFact2}</p>
          <p>{textContent.randomFact3}</p>
          <p>{textContent.randomFact4}</p>
          <p>{textContent.randomFact5}</p>
          <p>{textContent.randomFact6}</p>
          <p>{textContent.randomFact7}</p>
          <p>{textContent.randomFact8}</p>
        </div>
        <div className="random-fact-decor">
          <div className="decor-black-sign">
            <img
              src={images.blackSign}
              alt="Black Sign"
              className="black-sign-about-page"
            />
          </div>
          <div className="decor-project-star">
            <img
              src={images.projectStar}
              alt="Project Star"
              className="project-star-about-page"
            />
          </div>
        </div>
      </div>
      <div>Giang</div>
    </div>
  );
};

export default About;
