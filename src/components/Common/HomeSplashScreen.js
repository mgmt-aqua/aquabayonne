import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from "../../img/aqua-logo-white.png";

const HomeSplashScreen = ({ duration = 1500, children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Set a timer to update progress every 50ms
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (duration / 100));  // Increment progress over time
        if (newProgress >= 100) {
          clearInterval(progressInterval);  // Stop the interval once it's done
        }
        return newProgress;
      });
    }, 50);

    // Timer to hide the splash screen after the specified duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [duration]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="splash"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#4A6670", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            zIndex: 9999,
          }}
        >
          <motion.img
            src={img}
            alt="Logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{ duration: 2, delay: .5 }}
            style={{
              height: "50px",
              display: "block",
            }}
          />
          
          {/* Loading Bar */}
          <motion.div
            style={{
              width: "200px",
              height: "4px",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                backgroundColor: "#649FB9",
                borderRadius: "5px",
              }}
              initial={{ width: `0%`, x: "0%" }}
              animate={{ width: `${progress}%`, x: "0%" }}
              transition={{ duration: 1.8, ease: "easeOut", delay: .1 }} // Slightly adjusted transition timing for smoother progress
            />
          </motion.div>
        </motion.div>
      )}

      {!loading && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeSplashScreen;
