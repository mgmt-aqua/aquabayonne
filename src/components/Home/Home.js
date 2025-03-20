import React, { Component } from "react"
import Section from "../Common/Section"
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"

import "../../styles/Home.css"

import video from '../../assets/DJI_0300.mp4'

export default function Home() {

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      height: '100vh', // Full viewport height
      overflow: 'hidden',
    },
    videoWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    video: {
      width: '100%',
      height: '100%',
      objectFit: 'cover', // Ensures the video covers the entire container
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Dark overlay with opacity
    },
    overlayText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      textAlign: 'center',
      width: "50vw"
    },
    text: {
      padding: "50px",
      border: '5px solid white',
      textTransform: 'uppercase',
      fontFamily: '-apple-system, BlinkMacSystemFont, "ofelia-text", sans-serif;',
      fontSize: '6rem', // Adjust as needed
      fontWeight: '700',
      width: "100%",
    },
  };

  return (
    <Section id="home">
      <div className="home-container">
        <AnimatePresence>
          <motion.div style={styles.container}>
            <div style={styles.videoWrapper}>
              <video style={styles.video} autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div style={styles.overlay}></div>
            </div>
            <motion.div
              style={styles.overlayText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            >
              <h1 style={styles.text}>Aqua Bayonne</h1>
              <Link as={Link} to="/contact-us" className="contact-us-link">
                <Button className="contact-us-home-btn">Contact Us</Button>
              </Link>

            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}

