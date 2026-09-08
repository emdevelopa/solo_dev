import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 35,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none h-1.5 bg-transparent">
      <motion.div
        className="h-full bg-primary origin-left border-b border-foreground"
        style={{ scaleX }}
      />
    </div>
  );
};
