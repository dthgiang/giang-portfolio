import React from "react";
import "../../styles/About.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(false);
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
    if (!headerVisible) return;
    const wrapper = document.querySelector(".graph-pie-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wrapper.classList.add("animate");
            console.log("Graph animated ✅");
            observer.unobserve(wrapper);
          }
        });
      },
      { threshold: 0.75 }
    );

    if (wrapper) observer.observe(wrapper);
  }, [headerVisible]);

  useEffect(() => {
    if (!headerVisible) return;
    const target = document.querySelector(".random-fact-container");
    const hitman = document.getElementById("hitmanImage");

    if (!target || !hitman) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hitman.classList.add("slide-in");
          console.log("✅ Hitman triggered at 50% visibility");
          observer.unobserve(target); // chỉ trigger 1 lần
        }
      },
      {
        threshold: 0.5, // Kích hoạt khi 50% container hiển thị trong viewport
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [headerVisible]);

  useEffect(() => {
    const header = document.querySelector(".header-about");
    if (header) {
      // Delay nhỏ nếu bạn muốn
      setTimeout(() => {
        header.classList.add("slide-down");
      }, 800); // 300ms delay sau khi trang load
    }
  }, []);

  useEffect(() => {
    if (!headerVisible) return;
    const textBlock = document.querySelector(".about-text-container");
    const avatar = document.querySelector(".about-giang-avatar-img");
    const miniImages = document.querySelectorAll(".mini-image");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textBlock.classList.add("slide-in-left");
          avatar.classList.add("slide-in-right");

          // Mini images xuất hiện lần lượt
          miniImages.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add("visible");
            }, index * 400); // 200ms delay giữa các ảnh
          });

          observer.disconnect(); // chỉ chạy 1 lần
        }
      },
      { threshold: 0.5 } // hiện khi 50% phần block vào viewport
    );

    const container = document.querySelector(".about-page-first-container");
    if (container) observer.observe(container);
  }, [headerVisible]);

  useEffect(() => {
    // Delay 800ms cho hiệu ứng header kết thúc
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about-page-container">
      <>
        {/* Header Section */}
        <div className="header-about animate-header">
          <div className="logo-about-page" onClick={handleLogoClick}>
            {textContent.logoName}
          </div>
          <nav className="nav-menu-about-page">
            <span className="nav-item-about-page" onClick={handleAboutClick}>
              {textContent.about}
            </span>
            <span className="nav-item-about-page" onClick={handleContactClick}>
              {textContent.contact}
            </span>
          </nav>
          <div className="social-icons-about-page">
            <div
              className="gmail-wrapper-about-page"
              onClick={handleEmailClick}
            >
              <div className="gmail-img-container-about-page">
                <img
                  src={images.gmailDefault}
                  className="gmail-img-about-page default"
                  alt="Gmail"
                />
                <img
                  src={images.gmailCircle}
                  className="gmail-img-about-page hover"
                  alt="Gmail Hover"
                />
              </div>
              <span className="email-text-about-page">{textContent.email}</span>
            </div>
            <a
              href="https://github.com/dthgiang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-wrapper-about-page">
                <img
                  src={images.githubFill}
                  className="icon-img-about-page default"
                  alt="GitHub"
                />
                <img
                  src={images.githubColor}
                  className="icon-img-about-page hover"
                  alt="GitHub Hover"
                />
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-wrapper-about-page">
                <img
                  src={images.linkedinFill}
                  className="icon-img-about-page default"
                  alt="LinkedIn"
                />
                <img
                  src={images.linkedinColor}
                  className="icon-img-about-page hover"
                  alt="LinkedIn Hover"
                />
              </div>
            </a>

            <a
              href="https://www.figma.com/@zangah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon-wrapper-about-page">
                <img
                  src={images.figmaFill}
                  className="icon-img-about-page default"
                  alt="Figma"
                />
                <img
                  src={images.figmaColor}
                  className="icon-img-about-page hover"
                  alt="Figma Hover"
                />
              </div>
            </a>
          </div>
        </div>

        {headerVisible && (
          <>
            {/* Middle Section */}
            <div className="about-page-first-container fade-in">
              <div className="about-middle-container">
                <div className="about-text-container">
                  <div className="about-page-title">
                    {textContent.aboutPageTitle}
                  </div>
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
                  className="about-giang-avatar-img"
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
            <div className="about-graph-container fade-in">
              <div className="designer-part-container">
                <div className="title-graph">
                  {textContent.partDesignerTitle}
                </div>
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
            <div className="random-fact-container fade-in">
              <img
                src={images.randomFact}
                alt="Hitman"
                id="hitmanImage"
                className="hitman"
              />
              <div className="random-fact-right-block" id="randomFactContainer">
                <div className="random-fact-title">
                  {textContent.randomFactTitle}
                </div>
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

            {/* MY SKILL SECTION */}

            {/* MY STORY SECTION */}

            {/* Footer */}
            <div className="footer-container-contact-page fade-in">
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
          </>
        )}
      </>
    </div>
  );
};

export default About;
