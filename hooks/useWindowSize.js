"use client";
import { useEffect, useState } from "react";

const useWindowSize = () => {
  const hasWindow = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (hasWindow) {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      handleResize();
      window.addEventListener("resize", handleResize, { passive: true });

      return () =>
        window.removeEventListener("resize", handleResize, { passive: true });
    }
  }, []);
  return windowSize;
};

export default useWindowSize;
