import classes from "./LoaderIcon.module.css";

const LoaderIcon = ({ width, height, delay = 0, isAnimate, ...props }) => {
  return (
    <svg
      className={classes[`loading`]}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      fill="none"
      {...props}
    >
      <path
        className={classes[`loading-icon`]}
        d={`M88 47.5C88 39.5887 85.654 31.8552 81.2588 25.2772C76.8635 18.6992 70.6164 13.5723 63.3073 10.5448C55.9983 7.51731 47.9556 6.72518 40.1964 8.26859C32.4371 9.812 25.3098 13.6216 19.7157 19.2157C14.1216 24.8098 10.312 31.9371 8.76859 39.6964C7.22518 47.4556 8.01731 55.4983 11.0448 62.8073C14.0723 70.1164 19.1992 76.3635 25.7772 80.7588C32.3552 85.154 40.0887 87.5 48 87.5`}
        stroke="#3B3FEA"
        strokeWidth={10}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LoaderIcon;
