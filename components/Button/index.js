"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import classes from "./Button.module.css";
import { motion } from "framer-motion";
import { AnimatedDownloadIcon, ArrowIcon } from "../Icon";

const Button = ({
  type = `primary`,
  iconType = "arrow",
  theme = `light`,
  size = `default`,
  link = ``,
  isDisabled = false,
  btnStyle = ``,
  clickEvent,
  target,
  btnText,
  isArrowAnim = false,
  onClick = null,
  ...props
}) => {
  type = type === `submit` ? `primary` : type;

  const chooseArrowSize = () => {
    switch (size) {
      case `small`:
        return {
          width: 20,
          height: 20,
        };

      case `medium`:
        return {
          width: 30,
          height: 29,
        };

      case `large`:
        return {
          width: 52,
          height: 51,
        };

      default:
        return {
          width: 52,
          height: 51,
        };
    }
  };
  const chooseArrowSizeTertiary = () => {
    switch (size) {
      case `small`:
        return {
          width: 20,
          height: 20,
        };

      case `medium`:
        return {
          width: 30,
          height: 29,
        };

      case `large`:
        return {
          width: 46,
          height: 46,
        };

      default:
        return {
          width: 46,
          height: 46,
        };
    }
  };

  const arrowWidth = chooseArrowSize().width;
  const arrowHeight = chooseArrowSize().height;
  const arrowWidthTertiary = chooseArrowSizeTertiary().width;
  const arrowHeightTertiary = chooseArrowSizeTertiary().height;
  const [isHovered, setIsHovered] = useState(false);

  const getArrowComponent = () => (
    <>
      {type !== `tertiary` && (
        <div className={`${classes[`btn__arrow`]}`}>
          {iconType === "download" ? (
            <AnimatedDownloadIcon isAnimate={isHovered} />
          ) : (
            <ArrowIcon
              width={arrowWidth}
              height={arrowHeight}
              className={classes[`btn__arrow-path`]}
              type={iconType}
              size={size}
              isAnim={true}
              isHovered={isHovered || isArrowAnim}
            />
          )}
        </div>
      )}
      {type === `tertiary` && (
        <div className={`${classes[`btn__arrow`]}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.303 9.55381C16.3023 9.50168 16.2813 9.45187 16.2444 9.41501L11.5753 4.74586C11.5363 4.70682 11.4828 4.68566 11.4277 4.68738L8.89787 4.76611C8.72276 4.77156 8.63879 4.98356 8.76267 5.10744L12.1711 8.51588C12.2971 8.64188 12.2079 8.85731 12.0297 8.8573L4.31441 8.85698C4.20347 8.85697 4.11373 8.94725 4.1144 9.05818L4.12543 10.8886C4.12609 10.9985 4.21528 11.0873 4.32516 11.0874L12.0603 11.0975C12.2384 11.0977 12.3274 11.313 12.2015 11.4389L8.77459 14.8658C8.65099 14.9894 8.73426 15.2009 8.90894 15.2071L11.4544 15.2971C11.5098 15.299 11.5636 15.2778 11.6029 15.2386L16.2561 10.5854C16.2942 10.5473 16.3153 10.4953 16.3146 10.4414L16.303 9.55381Z"
              fill={theme === "dark" ? "#2A2E34" : "#F1F2F1"}
            />
          </svg>
        </div>
      )}
    </>
  );

  return (
    <>
      {link !== "" && (
        <Link
          href={link}
          prefetch={false}
          target={target === `blank` ? "_blank" : ""}
          className={classes[`btn-link`]}
          aria-label={btnText}
          onClick={onClick}
        >
          <motion.button
            className={`${classes.btn} ${classes[`btn-${type}`]} ${
              classes[`btn__${theme}`]
            } ${classes[`btn__${size}`]} ${btnStyle}`}
            onClick={clickEvent !== undefined ? clickEvent : undefined}
            disabled={isDisabled}
            onHoverStart={() => {
              setIsHovered(true);
            }}
            onHoverEnd={() => {
              setIsHovered(false);
            }}
            {...props}
          >
            {/* Condition Link null or not */}

            {btnText}
            {getArrowComponent()}
          </motion.button>
        </Link>
      )}
      {link === "" && (
        <motion.button
          className={`${classes.btn} ${classes[`btn-${type}`]} ${
            classes[`btn__${theme}`]
          } ${classes[`btn__${size}`]} ${btnStyle}`}
          onClick={clickEvent !== undefined ? clickEvent : undefined}
          disabled={isDisabled}
          onHoverStart={() => {
            setIsHovered(true);
          }}
          onHoverEnd={() => {
            setIsHovered(false);
          }}
          {...props}
        >
          {/* Condition Link null or not */}
          {link === `` && btnText}
          {link === `` && getArrowComponent()}
        </motion.button>
      )}
    </>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf([`primary`, `secondary`, `tertiary`, `submit`]),
  theme: PropTypes.oneOf([`light`, `dark`, `purple`]),
  size: PropTypes.oneOf([`small`, `medium`, `large`, `default`]),
  clickEvent: PropTypes.func,
  link: PropTypes.string,
  target: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,

  btnStyle: PropTypes.string,
};

export default Button;
