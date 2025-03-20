import React, { Component } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import Section from "../Common/Section"
import MainText from "../Common/MainText"

import "../../styles/Neighborhood.css"


export default function Neighborhood() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });

  return (
    <Section id="neighborhood">
      <div className="neighborhood-container">
        <MainText subText="04" text="Neighborhood" className="section-main-text neighborhood-text" />
        <AnimatePresence>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: .5, duration: 1.5 }}
          >
            <Link as={Link} to="/neighborhood" className="neighborhood-link">
              <Button className="neighborhood-btn">Explore Our Neighborhood</Button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}