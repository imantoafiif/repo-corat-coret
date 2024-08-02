export const navVariants = (delay) => ({
  hidden: {
    opacity: 0,
    marginTop: "-10px",
    y: -50,
    transition: {
      type: "tween",
    },
  },
  show: {
    opacity: 1,
    marginTop: "0px",
    y: 0,
    transition: {
      type: "tween",
      delay: delay,
    },
  },
});

export const navItemVariants = (delay, duration) => ({
  hidden: {
    y: -30,
    opacity: 0,
    transition: {
      type: "tween",
      duration,
      delay: delay,
    },
  },
  show: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration,
      delay,
    },
  },
  hidden: {
    y: -90,
    opacity: 0,

    transition: {
      type: "tween",
      duration,
      delay: delay,
    },
  },
});

export const navMobileVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      type: "easeOut",
      duration: 0.1,
    },
  },
  show: {
    height: "auto",
    opacity: 1,
    transition: {
      type: "easeOut",
      duration: 0.3,
    },
  },
  exit: {
    height: "0%",
    opacity: 0,
    transition: {
      type: "easeOut",
      duration: 0.1,
    },
  },
};

export const modalAnim = {
  wrapperHidden: {
    opacity: 0,
    y: "120vh",
    transition: {
      type: "easeIn",
      stiffness: 200,
      damping: 140,
    },
  },
  wrapperShow: {
    opacity: 1,
    y: 0,
    transition: {
      type: "easeIn",
      stiffness: 200,
      damping: 140,
    },
  },
  bodyHidden: {
    opacity: 0,
    bottom: "-100vh",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  bodyShow: {
    opacity: 1,
    bottom: "0vh",
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
  headerHidden: {
    opacity: 0,
    y: -80,
    transition: {
      type: "easeIn",
      stiffness: 200,
      damping: 140,
    },
  },
  headerShow: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    transition: {
      type,
      duration,
      ease: "easeOut",
    },
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const classicFade = (
  hiddenDuration = 0.2,
  hiddenDelay = 0,
  showDuration = 0.2,
  showDelay = 0.2
) => ({
  hidden: {
    opacity: 0,
    transition: {
      duration: hiddenDuration,
      delay: hiddenDelay,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: showDuration,
      delay: showDelay,
    },
  },
});

export const taglineAnim = {
  init: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
    },
  },
  tagTextHidden: {
    opacity: 0,
    y: "40px",
  },
  tagTextShow: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.7,
      delay: 1.2,
    },
  },
  tagIconHidden: {
    scale: 0,
  },
  tagIconShow: {
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.7,
      delay: 0.5,
    },
  },
};

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};

export const solutionHeroAnim = (opValue) => ({
  moveToRight: {
    opacity: opValue,
    marginRight: 0,
    transition: {
      type: "easeIn",
      stiffness: 200,
      damping: 140,
      delay: 0.6,
      duration: 1,
    },
  },
  fadeInUp: {
    opacity: opValue,
    y: 0,
    transition: {
      type: "easeIn",
      stiffness: 200,
      damping: 140,
      delay: 0.8,
      duration: 1,
    },
  },
});

export const accordionVariants = {
  open: {
    opacity: 1,
    height: "auto",

    transition: { duration: 0.3, ease: "easeIn" },
  },
  collapsed: {
    opacity: 0,
    height: 0,

    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// export const cookieVariants = {
//   open: {
//     opacity: 1,
//     display: "block",

//     transition: { duration: 0.2 },
//   },
//   collapsed: {
//     opacity: 0,
//     display: "none",
//     transition: { duration: 0.2 },
//   },
// };

export const headerUnderlineVariants = {
  hidden: {
    "&::after": {
      scaleX: 0,
    },
  },
  show: {
    "&::after": {
      scaleX: 1,
    },
  },
};

export const carouselAnim = {
  carouselHidden: { opacity: 0, transitionEnd: { display: "none" } },
  carouselShow: { display: "flex", opacity: 1, transition: { delay: 0.25 } },
  imageHidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  imageShow: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1.25,
    },
  },
  bodyInit: {
    opacity: 0,
    x: -40,
    y: 40,
  },
  bodyShow: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 0.75,
      duration: 0.4,
    },
  },
  bodyHidden: {
    opacity: 0,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
    },
    transitionEnd: {
      x: -40,
      y: 40,
    },
  },
  headerHidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  headerShow: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.4,
    },
  },
};

export const popUpAnim = {
  show: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "easeOut",
      duration: 0.3,
    },
  },
};

export const buttonArrowVariants = {
  hidden: {
    x: `0%`,
  },
  show: {
    // opacity: [`1`, `1`, `0`, `0`, `1`],
    x: [`0%`, `100%`, `100%`, `-100%`, `0%`],
    transition: {
      repeat: Infinity,
      ease: `easeInOut`,
      times: [0, 0.3, 0.3, 0.2, 0.7],
      duration: 1.5,
    },
  },
};

export const chipsVariants = (direction, type, delay, duration) => ({
  hidden: {
    x: `-50%`,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
    transition: {
      type,
      duration,
      ease: "easeOut",
    },
  },
  show: {
    x: `-50%`,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
