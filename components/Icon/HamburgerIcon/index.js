"use client";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const HamburgerIcon = ({ width, height, variants, color }) => (
  <motion.svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path variants={variants} transition={{ duration: 0.1 }} color={color} />
  </motion.svg>
);

const Path = ({ color, ...props }) => (
  <motion.path fill={color} fillRule="evenodd" clipRule="evenodd" {...props} />
);

HamburgerIcon.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
export default HamburgerIcon;
