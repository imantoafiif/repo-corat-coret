"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import lottieFile from "@/public/lottie/icon-download.json";

const AnimatedDownloadIcon = ({ isAnimate, ...props }) => {
  const lottieRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (lottieRef.current) {
      if (isAnimate) {
        lottieRef.current.setDirection(1);
        lottieRef.current.play();
      } else {
        currentFrame < 10 && lottieRef.current.stop();
        currentFrame < 45 && lottieRef.current.setDirection(-1);
      }
    }
  }, [currentFrame, isAnimate]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={lottieFile}
      autoplay={false}
      loop={true}
      onDOMLoaded={() => {
        lottieRef.current.setSpeed(1.5);
      }}
      onEnterFrame={(e) => {
        setCurrentFrame(e.currentTime);
      }}
      style={{ width: "100%", height: "100%" }}
      {...props}
    />
  );
};
export default AnimatedDownloadIcon;
