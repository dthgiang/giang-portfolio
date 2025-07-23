import React, { useState, useEffect } from "react";
import "../../styles/Home.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import Lottie from "lottie-react";
import ButtonUp from "../../lotties/button-up.json";
import Up from "../../lotties/up.json";
import Cheer from "../../lotties/cheer.json";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleAboutClick = () => {
    navigate("/about");
  };
  const projects = [
    {
      id: 1,
      title: textContent.project1Title,
      subtitle: textContent.project1SubTitle,
      image: images.project1,
      time: "12/2024 - 01/2025",
      detail: textContent.projectDetail1,
      technologies: [
        "Figma",
        "TypeScript",
        "Javascript",
        "Bun",
        "Tailwind CSS",
        "React",
        "HTML",
      ],
      responsibilities: [
        "Developed responsive frontend for web and mobile platform",
        "Created app logo and ensured consistent visual identity.",
        "Converted designs into clean, scalable code.",
        "Designed full UI/UX for both web and mobile, from wireframes to final mockups.",
      ],
      projectVisuals1: images.famfundVisual1,
      projectVisuals2: images.famfundVisual2,
      githubUrl: undefined,
      figmaUrl: textContent.figmaUrl1,
    },
    {
      id: 2,
      title: textContent.project2Title,
      subtitle: textContent.project2SubTitle,
      image: images.project2,
      time: "2 weeks",
      detail: textContent.projectDetail2,
      technologies: [
        "Figma",
        "TypeScript",
        "Javascript",
        "Bun",
        "Tailwind CSS",
        "React",
        "HTML",
      ],
      responsibilities: [
        "Developed responsive frontend for web and mobile platform",
        "Created app logo and ensured consistent visual identity.",
        "Converted designs into clean, scalable code.",
        "Designed full UI/UX for both web and mobile, from wireframes to final mockups.",
      ],
      projectVisuals1: images.famfundVisual1,
      projectVisuals2: images.famfundVisual2,
      githubUrl: undefined,
      figmaUrl: undefined,
    },
    {
      id: 3,
      title: textContent.project3Title,
      subtitle: textContent.project3SubTitle,
      image: images.project3,
      time: "01/2024 - 08/2024",
      detail: textContent.projectDetail3,
      technologies: [
        "Figma",
        "TypeScript",
        "Javascript",
        "Bun",
        "Tailwind CSS",
        "React",
        "HTML",
      ],
      responsibilities: [
        "Developed responsive frontend for web and mobile platform",
        "Created app logo and ensured consistent visual identity.",
        "Converted designs into clean, scalable code.",
        "Designed full UI/UX for both web and mobile, from wireframes to final mockups.",
      ],
      projectVisuals1: images.famfundVisual1,
      projectVisuals2: images.famfundVisual2,
      githubUrl: textContent.githubUrl3,
      figmaUrl: textContent.figmaUrl3,
    },
    {
      id: 4,
      title: textContent.project4Title,
      subtitle: textContent.project4SubTitle,
      image: images.project4,
      time: "01/2024 - 02/2025",
      detail: textContent.projectDetail4,
      technologies: [
        "Figma",
        "TypeScript",
        "Javascript",
        "Bun",
        "Tailwind CSS",
        "React",
        "HTML",
      ],
      responsibilities: [
        "Developed responsive frontend for web and mobile platform",
        "Created app logo and ensured consistent visual identity.",
        "Converted designs into clean, scalable code.",
        "Designed full UI/UX for both web and mobile, from wireframes to final mockups.",
      ],
      projectVisuals1: images.famfundVisual1,
      projectVisuals2: images.famfundVisual2,
      githubUrl: undefined,
      figmaUrl: textContent.figmaUrl4,
    },
    {
      id: 5,
      title: textContent.project5Title,
      subtitle: textContent.project5SubTitle,
      image: images.project5,
      time: "03/2025 - 06/2025",
      detail: textContent.projectDetail5,
      technologies: ["Javascript", "Figma", "React", "HTML", "CSS"],
      responsibilities: [
        "Developed responsive frontend for web and mobile platform",
        "Created app logo and ensured consistent visual identity.",
        "Converted designs into clean, scalable code.",
        "Designed full UI/UX for both web and mobile, from wireframes to final mockups.",
      ],
      projectVisuals1: images.famfundVisual1,
      projectVisuals2: images.famfundVisual2,
      githubUrl: textContent.githubUrl5,
      figmaUrl: textContent.figmaUrl5,
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [showUpEffect, setShowUpEffect] = useState(false);
  const [showCheerEffect, setShowCheerEffect] = useState(false);
  const [isFigmaHovered, setIsFigmaHovered] = useState(false);
  const [isGithubHovered, setIsGithubHovered] = useState(false);

  const [activeProject, setActiveProject] = useState(projects[0]);
  const imagesArray = activeProject
    ? [activeProject.projectVisuals1, activeProject.projectVisuals2].filter(
        Boolean
      )
    : [];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Kiểm tra xem cuộn đã đến cuối trang chưa
    if (scrollTop + windowHeight >= documentHeight - 100) {
      // 100px là khoảng cách an toàn
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    setShowUpEffect(true); // Hiện hiệu ứng up
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên đầu trang

    // Ẩn hiệu ứng 'up' và hiện 'cheer' sau khi cuộn hoàn tất
    setTimeout(() => {
      setShowUpEffect(false);
      setShowCheerEffect(true);

      // Ẩn 'cheer' sau 2 giây (hoặc thời gian bạn muốn)
      setTimeout(() => {
        setShowCheerEffect(false);
      }, 1850);
    }, 850); // Thời gian để cuộn hoàn tất, có thể điều chỉnh theo ý muốn
  };

  const showNextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % imagesArray.length);
    console.log("projects:", projects);
    console.log("Visual 1:", projects.projectVisuals1);
    console.log("Visual 2:", projects.projectVisuals2);
  };

  const showPrevImage = () => {
    setCurrentSlide((prev) => (prev === 0 ? imagesArray.length - 1 : prev - 1));
    console.log("projects:", projects);
    console.log("Visual 1:", projects.projectVisuals1);
    console.log("Visual 2:", projects.projectVisuals2);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const container = document.querySelector(".intro-block");
    const imageWrapper = document.querySelector(".split-image-wrapper");
    const rightImage = document.querySelector(".image-right");

    const whiteSign = document.querySelector(".white-sign");
    const coderBg = document.querySelector(".coder-background");
    const coderBlock = document.querySelector(".coder-title-block");
    const designerBlock = document.querySelector(".designer-title-block");
    const imageContainer = document.querySelector(".split-image-container");

    if (!container || !imageWrapper || !rightImage) return;

    // 👉 Hover Split Image
    const handleMouseMove = (e) => {
      const wrapperRect = imageWrapper.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      const leftLimit = containerRect.width * 0.3;
      const rightLimit = containerRect.width * 0.7;

      const isInsideY =
        y >= wrapperRect.top - containerRect.top &&
        y <= wrapperRect.bottom - containerRect.top;

      if (!isInsideY) {
        rightImage.style.clipPath = `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`;
        resetAnimations();
        return;
      }

      let percent;
      if (x <= leftLimit) {
        percent = 100;
      } else if (x >= rightLimit) {
        percent = 0;
      } else {
        const relativeX = x - leftLimit;
        percent = 100 - (relativeX / (rightLimit - leftLimit)) * 100;
      }

      rightImage.style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;

      if (percent >= 90) {
        designerBlock.classList.add("fade-opacity");
        coderBlock.classList.remove("fade-opacity");

        whiteSign.classList.add("fade-out", "shift-left");
        whiteSign.classList.remove("shift-right");

        coderBg.classList.remove("fade-opacity");
        coderBg.classList.add("shift-right");
        coderBg.classList.remove("shift-left");

        imageContainer.classList.add("image-shift-right");
        imageContainer.classList.remove("image-shift-left");
      } else if (percent <= 10) {
        coderBlock.classList.add("fade-opacity");
        designerBlock.classList.remove("fade-opacity");

        coderBg.classList.add("fade-opacity", "shift-left");
        coderBg.classList.remove("shift-right");

        whiteSign.classList.remove("fade-out");
        whiteSign.classList.add("shift-left");
        whiteSign.classList.remove("shift-right");

        imageContainer.classList.add("image-shift-left");
        imageContainer.classList.remove("image-shift-right");
      } else {
        resetAnimations();
      }
    };

    const resetAnimations = () => {
      coderBlock.classList.remove("fade-opacity");
      designerBlock.classList.remove("fade-opacity");

      whiteSign.classList.remove("fade-out", "shift-left", "shift-right");
      coderBg.classList.remove("fade-opacity", "shift-left", "shift-right");
      imageContainer?.classList.remove("image-shift-left", "image-shift-right");
    };

    const handleMouseLeave = () => {
      rightImage.style.clipPath = `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`;
      resetAnimations();
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // 👉 Slide Image Logic
    const slidesContainer = document.querySelector(".slide-container");
    const slidesWrapper = document.querySelector(".slide-wrapper");
    const dots = document.querySelectorAll(".dot");
    const prev = document.querySelector(".arrow-button.arrow-left");
    const next = document.querySelector(".arrow-button.arrow-right");

    let currentIndex = 0;

    const showSlide = (index) => {
      const slideWidth = slidesContainer?.offsetWidth || 0;
      if (slidesWrapper) {
        slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;
      }
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
      });
    };

    const handlePrev = () => {
      const totalSlides = slidesWrapper?.children.length || 1;
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      showSlide(currentIndex);
    };

    const handleNext = () => {
      const totalSlides = slidesWrapper?.children.length || 1;
      currentIndex = (currentIndex + 1) % totalSlides;
      showSlide(currentIndex);
    };

    prev?.addEventListener("click", handlePrev);
    next?.addEventListener("click", handleNext);

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
    });

    window.addEventListener("resize", () => showSlide(currentIndex));
    showSlide(currentIndex);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      prev?.removeEventListener("click", handlePrev);
      next?.removeEventListener("click", handleNext);
      window.removeEventListener("resize", () => showSlide(currentIndex));
    };
  }, []);

  return (
    <div>
      {/* Intro Block */}
      <div className="intro-block">
        <div className="header">
          <img
            src={images.lineCircle}
            alt="lineCircle"
            className="line-circle-left"
          />
          <img src={images.whiteSign} alt="whiteSign" className="white-sign" />
          <img
            src={images.coderBackground}
            alt="coderBackground"
            className="coder-background"
          />
          <img
            src={images.lineCircle}
            alt="lineCircle"
            className="line-circle-right"
          />
          <div className="logo-name">{textContent.logoName}</div>
          <nav className="nav-menu">
            <span className="nav-item" onClick={handleAboutClick}>
              {textContent.about}
            </span>
            <span className="nav-item" onClick={handleContactClick}>
              {textContent.contact}
            </span>
          </nav>
          <div className="downloadCVButton">{textContent.downloadCV}</div>
        </div>

        <div className="coder-title-wrapper">
          <div className="coder-title-block">
            <div className="intro-title">{textContent.coderTitle}</div>
            <div className="coder-subtext">{textContent.coderSubText}</div>
          </div>
        </div>

        <div className="designer-title-wrapper">
          <div className="designer-title-block">
            <div className="intro-title">{textContent.designerTitle}</div>
            <div className="designer-subtext">
              {textContent.designerSubText}
            </div>
          </div>
        </div>

        <div className="split-image-wrapper">
          <div className="split-image-container">
            <img src={images.real} alt="Real" className="image image-left" />
            <img
              src={images.abstract}
              alt="Abstract"
              className="image image-right"
            />
          </div>
        </div>
      </div>

      {/* Service Block */}
      <div className="service-block">
        <div className="service-text-block">
          <div className="service-text">{textContent.journeyText}</div>
          <div className="service-title">{textContent.journeyTitle}</div>
          <div className="service-subtext">{textContent.journeySubText}</div>
          <img
            src={images.circleService}
            alt="circleService"
            className="circle-service"
          />
          <img
            src={images.purpleCircle}
            alt="purpleCircle"
            className="purple-circle-service"
          />
        </div>
        <div className="service-box-group">
          <div className="box box-1">
            <img src={images.iconBox1} alt="iconBox1" className="icon-box-1" />
            <div className="box-title">{textContent.boxTitle1}</div>
            <div className="box-content">{textContent.boxContent1}</div>
          </div>
          <div className="box box-2">
            <img src={images.iconBox2} alt="iconBox2" className="icon-box-2" />
            <div className="box-title-2">{textContent.boxTitle2}</div>
            <div className="box-content-2">{textContent.boxContent2}</div>
          </div>
          <div className="box box-3">
            <img src={images.iconBox3} alt="iconBox3" className="icon-box-3" />
            <div className="box-title">{textContent.boxTitle3}</div>
            <div className="box-content">{textContent.boxContent3}</div>
          </div>
        </div>
        <img src={images.star} alt="star" className="star" />
      </div>

      {/* About Me Block */}
      <div className="about-me-block">
        <img src={images.blackSign} alt="blackSign" className="black-sign" />
        <div className="left-block">
          <img
            src={images.aboutMeLeft}
            alt="aboutMeLeft"
            className="about-me-left"
          />
        </div>
        <div className="right-block">
          <div className="about-me-title">{textContent.aboutMeText}</div>
          <div className="about-me-subtitle">{textContent.aboutMeTitle}</div>
          <div className="about-me-content">{textContent.aboutMeSubText}</div>
          <div className="about-box-yellow">
            <img
              src={images.yellowCircleArrow}
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
              src={images.purpleCircleArrow}
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
            <span onClick={handleAboutClick}>{textContent.readMore}</span>
            <i className="arrow-icon">→</i>
          </div>
        </div>
      </div>

      {/* Project Block */}
      <div className="project-block">
        <img src={images.bluePlant} alt="bluePlant" className="blue-plant" />
        <img
          src={images.projectStar}
          alt="projectStar"
          className="project-star"
        />
        <div className="project-title-big">{textContent.projectTitle}</div>
        <div className="project-subtitle">{textContent.projectSubTitle}</div>
        <div className="project-container">
          {projects.slice(0, 5).map((project, index) => (
            <div
              className="project-block"
              key={index}
              onClick={() => setActiveProject(project)}
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="project-bottom-block">
                <div className="project-title-block">
                  <div className="project-title-small">{project.title}</div>
                  <div className="project-subtitle-block">
                    {project.subtitle}
                  </div>
                </div>
                <button className="project-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="arrow-icon"
                  >
                    <path
                      d="M4 20 L20 4 M15 4 H20 V9"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="circle-purple-project"></div>
        </div>
        {activeProject && (
          <div
            className="project-overlay"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="project-overlay-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="header-overlay">
                <div className="title-overlay">
                  <div className="title-text-overlay">
                    {activeProject.title}
                  </div>
                  <div className="subtext-text-overlay">
                    {activeProject.subtitle}
                  </div>
                </div>

                <div className="button-group">
                  {/* View Github button */}
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-github-button"
                      onMouseEnter={() => setIsGithubHovered(true)}
                      onMouseLeave={() => setIsGithubHovered(false)}
                    >
                      <img
                        src={
                          isGithubHovered
                            ? images.githubYellow
                            : images.githubWhite
                        }
                        alt="Github Icon"
                        className="github-icon"
                      />
                      <div>{textContent.viewGithub}</div>
                    </a>
                  )}
                  {/* View Figma button */}
                  <a
                    href={activeProject.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-figma-button"
                    onMouseEnter={() => setIsFigmaHovered(true)}
                    onMouseLeave={() => setIsFigmaHovered(false)}
                  >
                    <img
                      src={
                        isFigmaHovered ? images.figmaPurple : images.figmaWhite
                      }
                      alt="Figma Icon"
                      className="figma-icon"
                    />
                    <div>{textContent.viewFigma}</div>
                  </a>
                </div>
              </div>
              <div className="overlay-line"></div>
              <div className="project-overview-container">
                <div className="project-overview-title-container">
                  <div className="project-overview-title">
                    {textContent.projectOverviewTitle}
                  </div>
                  <div className="project-overview-time">
                    <img
                      src={images.calendarIcon}
                      alt="Time Icon"
                      className="time-icon"
                    />
                    {activeProject.time}
                  </div>
                </div>
                <div className="project-detail">{activeProject.detail}</div>
              </div>
              <div className="project-middle-container">
                <div className="project-tech-block">
                  <div className="technologies-text">
                    {textContent.technologiesUsed}
                  </div>
                  <div className="technologies-list-container">
                    <ul className="technology-list">
                      {activeProject.technologies?.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="key-responsibilities-text">
                  {textContent.keyResponsibilities}
                  <ul className="responsibilities-list">
                    {activeProject.responsibilities?.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="slide-container">
                <div className="project-visual-title">
                  {textContent.projectVisuals}
                </div>
                <div className="slide-wrapper">
                  {imagesArray.map((imgSrc, index) => (
                    <div
                      key={index}
                      className={`slide ${
                        index === currentSlide ? "active" : ""
                      }`}
                    >
                      <img src={imgSrc} alt={`Project Visual ${index + 1}`} />
                    </div>
                  ))}
                </div>
                <div
                  className="arrow-button arrow-left"
                  onClick={showPrevImage}
                >
                  &#10094;
                </div>
                <div
                  className="arrow-button arrow-right"
                  onClick={showNextImage}
                >
                  &#10095;
                </div>
                <div className="dots">
                  {imagesArray.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${
                        index === currentSlide ? "active" : ""
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Block */}
      <div className="contact-block">
        <div className="circle-yellow-contact-1"></div>
        <div className="contact-container">
          <div className="contact-text-block">
            <div className="contact-title">{textContent.contactTitle}</div>
            <div className="contact-content">{textContent.contactContent}</div>
          </div>
          <span className="contact-button" onClick={handleContactClick}>
            {textContent.contact}
          </span>
        </div>
        <img src={images.introArrow} alt="introArrow" className="intro-arrow" />
        <img
          src={images.whiteSign}
          alt="whiteSign"
          className="white-sign-contact"
        />
        <img src={images.real} alt="real" className="real-image-contact" />
      </div>

      {/* Contact Block */}
      {/* <div className="subscribe-block">
        <div className="subscribe-content-wrapper">
          <div className="subscribe-text-container">
            <div className="subscribe-title">{textContent.SUBSCRIBE}</div>
            <div className="subscribe-content">
              {textContent.subscribeContent}
            </div>
          </div>
          <div className="enter-email-container">
            <div className="bg-overlay"></div>
            <img
              src={images.bgSubscribe}
              alt="bgSubscribe"
              className="bg-subscribe"
            />
            <Lottie animationData={Email} className="email-footer" />
            <img src={images.earth} alt="earth" className="earth" />
            <img
              src={images.subscribeArrow}
              alt="subscribeArrow"
              className="subscribe-arrow"
            />
            <div className="email-subtext">{textContent.enterEmailSubtext}</div>
            <div className="email-input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="subscribe-button">
                {textContent.subscribe}
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <div className="footer-container">
        <div className="logo-name">{textContent.logoName}</div>
        <nav className="nav-menu">
          <span className="nav-item-footer" onClick={handleAboutClick}>
            {textContent.about}
          </span>
          <span className="nav-item-footer" onClick={handleContactClick}>
            {textContent.contact}
          </span>
        </nav>
        <Lottie
          animationData={ButtonUp}
          className="button-up hoverable"
          style={{ bottom: isVisible ? "5%" : "-90%" }} // Điều chỉnh vị trí dựa trên trạng thái
          onClick={scrollToTop} // Thêm sự kiện click
        />

        {showUpEffect && (
          <Lottie
            animationData={Up}
            className="up"
            style={{
              position: "fixed",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "25vw",
              height: "25vw",
            }}
          />
        )}

        {showCheerEffect && (
          <Lottie
            animationData={Cheer}
            className="cheer"
            style={{
              position: "fixed",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "35vw",
              height: "35vw",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
