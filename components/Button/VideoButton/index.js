import React from "react";
import classes from "./VideoButton.module.css";

const VideoButton = () => {
  return (
    <div className={classes[`video-button`]}>
      <div className={classes[`button-icon`]}>
        <PlayIcon />
      </div>
    </div>
  );
};

export default VideoButton;

const PlayIcon = () => {
  return (
    <svg viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Extension/commsult Web/Icon">
        <path
          id="Vector"
          d="M18 12.5008V60.5008C17.9998 61.0346 18.1421 61.5588 18.4121 62.0193C18.6822 62.4797 19.0702 62.8598 19.5361 63.1203C20.002 63.3807 20.529 63.5122 21.0627 63.501C21.5963 63.4899 22.1174 63.3366 22.572 63.0568L61.572 39.0568C62.0088 38.7884 62.3695 38.4126 62.6198 37.9651C62.87 37.5176 63.0014 37.0135 63.0014 36.5008C63.0014 35.9882 62.87 35.484 62.6198 35.0366C62.3695 34.5891 62.0088 34.2133 61.572 33.9448L22.572 9.94485C22.1174 9.66514 21.5963 9.5118 21.0627 9.50065C20.529 9.48951 20.002 9.62095 19.5361 9.88143C19.0702 10.1419 18.6822 10.522 18.4121 10.9824C18.1421 11.4429 17.9998 11.9671 18 12.5008Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
