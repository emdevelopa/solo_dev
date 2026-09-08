import { Variants } from "framer-motion";

// Spring transition presets for snappy, physical neo-brutalist feel
export const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const bouncySpring = {
  type: "spring",
  stiffness: 500,
  damping: 20,
};

export const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1.0],
  duration: 0.5,
};

// Common container stagger variants
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// Fade In + Slide Up
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 28,
    },
  },
};

// Fade In + Slide Down (for header, badges)
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 25,
    },
  },
};

// Slide In Left / Right
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
    },
  },
};

// Pop / Scale In
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 22,
    },
  },
};

// Neo-Brutalist Micro-interactions (Hover lift & click depress)
export const brutalHoverProps = {
  whileHover: {
    x: -4,
    y: -4,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
  whileTap: {
    x: 2,
    y: 2,
    transition: { type: "spring", stiffness: 600, damping: 20 },
  },
};

export const brutalScaleHover = {
  whileHover: {
    scale: 1.03,
    transition: { type: "spring", stiffness: 450, damping: 20 },
  },
  whileTap: {
    scale: 0.97,
  },
};

// Standard viewport trigger settings
export const viewportOnce = {
  once: true,
  amount: 0.2,
};
