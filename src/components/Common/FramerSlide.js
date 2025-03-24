import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const FullPageSlideAnimation = (props) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const size = windowWidth < 600 ? "small" : windowWidth < 1200 ? "medium" : "large";

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ x: 0, transition: { duration: 0.2, ease: 'easeInOut' } });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await controls.start({ y: '-100vh', transition: { duration: 0.4, ease: 'easeInOut' } });
    };

    sequence();
  }, [controls]);

  const containerVariants = {
    initial: {
      x: '100vw',
      y: 0,
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundColor: '#050505',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    animate: {
      x: 0,
      y: 0,
    },
    exit: {
      y: '-100vh',
    },
  };

  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="initial"
      animate={controls}
      exit="exit"
    >
      <motion.h1
        variants={textVariants}
        initial="initial"
        animate="animate"
        style={size === "small" ? props.mobileTextStyles : props.desktopTextStyles}
      >
       {props.text}
      </motion.h1>
    </motion.div>
  );
};

export default FullPageSlideAnimation;