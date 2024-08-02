"use client";
import useWindowSize from "@/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { useState } from "react";

const HighlightIcon = ({
  width,
  height,
  path,
  delay = 0,
  isAnimate,
  ...props
}) => {
  const size = useWindowSize();
  const [isAnimateDone, setIsAnimateDone] = useState(false);
  const handleAnimationComplete = () => {
    setIsAnimateDone(true);
  };
  return (
    <AnimatePresence>
      {isAnimate && !isAnimateDone && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width={width}
          // height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          {...props}
        >
          <motion.path
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              opacity: isAnimate ? 1 : 0,
              pathLength: isAnimate ? 1 : 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay,
            }}
            d={path}
            stroke="#EAE63B"
            strokeWidth={`6`}
            strokeLinecap="round"
            onAnimationComplete={handleAnimationComplete}
          />
        </svg>
      )}
      {isAnimateDone && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          // width={width}
          // height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          {...props}
        >
          <path
            pathLength="1"
            d={path}
            stroke="#EAE63B"
            // strokeWidth={size.width <1280 ? `3` : `6`}
            strokeWidth={`6`}
            strokeLinecap="round"
          />
        </svg>
      )}
    </AnimatePresence>
  );
};

HighlightIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  delay: PropTypes.number,
};
export default HighlightIcon;
