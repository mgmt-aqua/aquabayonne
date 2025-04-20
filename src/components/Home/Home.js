import React, { useEffect } from "react"
import Section from "../Common/Section"
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Typewriter from 'typewriter-effect/dist/core';

import "./Home.css"

import video from '../../assets/neighborhood_1.mp4'

export default function Home() {

  useEffect(() => {
    var typewriter = document.getElementById('typewriter');

    if(typewriter) {
      new Typewriter(typewriter, {
        strings: ['serenity.', 'luxury.', 'elegance.', 'comfort.', 'home.'],
        pauseFor: 2500,
        loop: true,
        autoStart: true,
        delay: 'natural'
      });
    }
  }, [])

  return (
    <Section id="home">
      <div className="home-container">
        <AnimatePresence>
          <motion.div className="home-video-container">
            <div className="home-video-wrapper">
              <video className="home-video" autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="home-overlay"></div>
            </div>
            <motion.div
              className="home-overlay-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <h1 className="home-text">AQUA is</h1>
              <div id="typewriter"></div>
              <Link to="/inquire" className="book-tour-link" >
                <Button className="book-tour-home-btn">Book A Tour</Button>
              </Link>
              <Link to="/contact-us" className="contact-us-link">
                <Button className="contact-us-home-btn">Contact Us</Button>
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}

