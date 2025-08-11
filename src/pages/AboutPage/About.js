import "../../styles/About.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ButtonUp from "../../lotties/button-up.json";

const About = () => {
  const navigate = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(false);
  const [skillVisible, setSkillVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const email = "dtgiang.cv@gmail.com";

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
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setShowPopup(true);
          setTimeout(() => setShowPopup(false), 1500); // 1.5s tự tắt popup
        })
        .catch(() => {
          alert("Copy thất bại, bạn copy thủ công nhé!");
        });
    } else {
      alert("Trình duyệt không hỗ trợ chức năng copy tự động!");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  useEffect(() => {
    if (!headerVisible) return;

    setTimeout(() => {
      const skillSection = document.querySelector(".skill-chart-container");
      console.log("👀 skillSection after headerVisible:", skillSection);

      if (!skillSection) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setSkillVisible(true);
            console.log("✅ skillVisible triggered");
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(skillSection);
    }, 100); // delay tí để chắc chắn render xong
  }, [headerVisible]);

  useEffect(() => {
    if (!skillVisible) return;

    const bars = document.querySelectorAll(".bar");

    bars.forEach((bar, index) => {
      const delay = index * 200; // delay theo thứ tự

      setTimeout(() => {
        bar.classList.add("grow-up");

        // Sau khi animation xong (800ms), thì hiển thị text
        setTimeout(() => {
          bar.classList.add("show-text");
        }, 400);
      }, delay);
    });
  }, [skillVisible]);

  useEffect(() => {
    if (!headerVisible) return; // đảm bảo header xong rồi mới trigger

    const section = document.querySelector(".my-story-container");

    if (!section) {
      console.warn("⚠️ .my-story-container not found");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [headerVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
      setAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bars = [
    {
      label: "Design Thinking",
      value: 95,
      className: "design-thinking-bar",
      delay: "0s",
    },
    {
      label: "Coding",
      value: 90,
      className: "coding-bar",
      delay: "0.2s",
    },
    {
      label: "Figma",
      value: 95,
      className: "figma-bar",
      delay: "0.4s",
    },
    {
      label: "Cooking",
      value: 75,
      className: "cooking-bar",
      delay: "0.6s",
    },
    {
      label: "Badminton",
      value: 40,
      className: "badminton-bar",
      delay: "0.8s",
    },
  ];

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
            {showPopup && (
              <div
                style={{
                  position: "fixed",
                  top: "30px", // thay 30px thành 5vh
                  right: "30px", // thay 30px thành 5vw
                  background: "#333",
                  color: "#fff",
                  padding: "1vh 1.5vw", // padding cũng đổi tí cho vừa vặn
                  borderRadius: "0.5vw",
                  boxShadow: "0 0.2vw 0.6vw rgba(0,0,0,0.3)",
                  opacity: 0.9,
                  zIndex: 1000,
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                Đã copy email vào clipboard!
              </div>
            )}
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
            <div className="skill-chart-container">
              <div className="area-container">
                <div className="floating-image image-1">
                  <img src={images.bluePlant} alt="Floating 1" />
                </div>

                <div className="floating-image image-2">
                  <img src={images.star} alt="Floating 2" />
                </div>

                <div className="skill-levels">
                  <span>{textContent.SilentAgent}</span>
                  <span>{textContent.Starcrafter}</span>
                  <span>{textContent.PixelDreamer}</span>
                  <span>{textContent.Sketchling}</span>
                </div>

                <div className="chart-area">
                  <div className="left-vertical-line"></div>
                  <div className="chart-lines">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <div key={i} className="line"></div>
                      ))}
                  </div>

                  <div className="bars">
                    {bars.map((bar, i) => (
                      <div
                        key={i}
                        className={`bar ${bar.className} ${
                          skillVisible ? "grow-up" : ""
                        }`}
                        style={{
                          animationDelay: skillVisible ? bar.delay : "0s",
                        }}
                      >
                        <div className="percentage-wrapper">
                          <span className="percentage-number">{bar.value}</span>
                          <span className="percentage-symbol">%</span>
                        </div>
                        <span className="title-bar-text">{bar.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="chart-title">{textContent.MySkills}</div>
                </div>
              </div>
            </div>

            {/* MY STORY SECTION */}
            <div className="my-story-container">
              <div className="my-story-left-container">
                <h2>{textContent.MyStory}</h2>
                <p>{textContent.MyStoryText}</p>
              </div>
              <div
                className={`my-story-right-container ${
                  headerVisible && storyVisible ? "slide-in-right" : ""
                }`}
              >
                <img
                  src={images.myStory}
                  alt="My Story"
                  className="my-story-image"
                />
              </div>
            </div>

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
              <Lottie
                animationData={ButtonUp}
                className="button-up hoverable"
                style={{
                  position: "fixed",
                  bottom: atBottom ? "5%" : "-90%", // hiện hoặc ẩn
                  right: "5%",
                  transition: "bottom 0.6s ease-in-out", // mượt
                  zIndex: 1000,
                }}
                onClick={scrollToTop}
              />
            </div>
          </>
        )}
      </>
    </div>
  );
};

export default About;
