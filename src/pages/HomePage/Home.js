import React, { useState, useEffect } from "react";
import "../../styles/Home.css";
import textContent from "../../constants/textContent";
import images from "../../constants/images";
import Lottie from "lottie-react";
import Email from "../../lotties/email.json";
import ButtonUp from "../../lotties/button-up.json";
import Up from "../../lotties/up.json";
import Cheer from "../../lotties/cheer.json";

const Home = () => {
  const projects = [
    {
      title: textContent.project1Title,
      subtitle: textContent.project1SubTitle,
    },
    {
      title: textContent.project2Title,
      subtitle: textContent.project2SubTitle,
    },
    {
      title: textContent.project3Title,
      subtitle: textContent.project3SubTitle,
    },
    {
      title: textContent.project4Title,
      subtitle: textContent.project4SubTitle,
    },
    {
      title: textContent.project5Title,
      subtitle: textContent.project5SubTitle,
    },
    {
      title: textContent.project6Title,
      subtitle: textContent.project6SubTitle,
    },
  ];

  const [selectedButton, setSelectedButton] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [showUpEffect, setShowUpEffect] = useState(false);
  const [showCheerEffect, setShowCheerEffect] = useState(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

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

  useEffect(() => {
    // Gọi scroll ban đầu
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const container = document.querySelector(".intro-block");
    const imageWrapper = document.querySelector(".split-image-wrapper");
    const rightImage = document.querySelector(".image-right");

    // Nếu phần tử chưa sẵn sàng → dừng
    if (!container || !imageWrapper || !rightImage) return;

    const handleMouseMove = (e) => {
      const wrapperRect = imageWrapper.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      const leftLimit = containerRect.width * 0.1;
      const rightLimit = containerRect.width * 0.9;

      const isInsideY =
        y >= wrapperRect.top - containerRect.top &&
        y <= wrapperRect.bottom - containerRect.top;

      if (!isInsideY) {
        // ✅ Reset khi ra ngoài chiều cao ảnh
        rightImage.style.clipPath = `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`;
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

      // ✅ Áp dụng polygon để tạo hiệu ứng cắt
      rightImage.style.clipPath = `polygon(${percent}% 0, 100% 0, 100% 100%, ${percent}% 100%)`;
    };

    const handleMouseLeave = () => {
      // ✅ Reset về giữa
      rightImage.style.clipPath = `polygon(50% 0, 100% 0, 100% 100%, 50% 100%)`;
    };

    // Gán sự kiện
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
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
          <img
            src={images.lineCircle}
            alt="lineCircle"
            className="line-circle-right"
          />
          <div className="logo-name">{textContent.logoName}</div>
          <nav className="nav-menu">
            <span className="nav-item">{textContent.about}</span>
            <span className="nav-item">{textContent.contact}</span>
          </nav>
          <div className="downloadCVButton">{textContent.downloadCV}</div>
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
            <span>{textContent.downloadCV}</span>
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
        <div className="project-title">{textContent.projectTitle}</div>
        <div className="project-subtitle">{textContent.projectSubTitle}</div>
        <div className="menu-button">
          {[
            { key: "all", text: textContent.all },
            { key: "landingPage", text: textContent.landingPage },
            { key: "appDesign", text: textContent.appDesign },
            { key: "dashboard", text: textContent.dashboard },
            { key: "posterDesign", text: textContent.posterDesign },
          ].map((button) => (
            <div
              key={button.key}
              className={`button ${button.key}-button ${
                selectedButton === button.key ? "selected" : ""
              }`}
              onClick={() => handleButtonClick(button.key)}
            >
              {button.text}
            </div>
          ))}
        </div>
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-block" key={index}>
              <div className="project-image"></div>
              <div className="project-bottom-block">
                <div className="project-title-block">
                  <div className="project-title">{project.title}</div>
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
      </div>

      {/* Contact Block */}
      <div className="contact-block">
        <div className="circle-yellow-contact-1"></div>
        <div className="contact-container">
          <div className="contact-text-block">
            <div className="contact-title">{textContent.contactTitle}</div>
            <div className="contact-content">{textContent.contactContent}</div>
          </div>
          <div className="contact-button">{textContent.contact}</div>
        </div>
        <img
          src={images.whiteSign}
          alt="whiteSign"
          className="white-sign-contact"
        />
        <div className="circle-yellow-contact-2"></div>
      </div>

      {/* Contact Block */}
      <div className="subscribe-block">
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
      </div>

      {/* Footer */}
      <div className="footer-container">
        <div className="logo-name">{textContent.logoName}</div>
        <nav className="nav-menu">
          <span className="nav-item-footer">{textContent.about}</span>
          <span className="nav-item-footer">{textContent.projects}</span>
          <span className="nav-item-footer">{textContent.contact}</span>
        </nav>
        <div class="footer-line"></div>
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
