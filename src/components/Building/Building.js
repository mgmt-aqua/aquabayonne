import React, { Component } from "react"
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Section from "../Common/Section"
import MainText from "../Common/MainText"
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../../styles/Building.css"

export default function Building() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });


  return (
    <Section id="building">
      <div className="building-container">
          <MainText subText="01" text="Building" className="section-main-text building-text" />
          <AnimatePresence>
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: .5, duration: 1.5 }}
            >
              <Link as={Link} to="/building" className="building-link">
                <Button className="building-btn">Explore Our Building</Button>
              </Link>
            </motion.div>
          </AnimatePresence>
      </div>
    </Section>
  )
}
