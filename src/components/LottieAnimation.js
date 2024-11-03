// LottieAnimation.js
import React, { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

const LottieAnimation = ({ animationUrl, width = 300, height = 300 }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    const fetchAnimationData = async () => {
      const response = await fetch(animationUrl);
      const data = await response.json();
      setAnimationData(data);
    };

    fetchAnimationData();
  }, [animationUrl]);

  if (!animationData) return null; // Không hiển thị gì khi chưa tải xong

  return (
    <div style={{ width, height }}>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation; // Xuất mặc định
