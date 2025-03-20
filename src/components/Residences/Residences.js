import React, { Component } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Button} from 'react-bootstrap'
import { Link } from "react-router-dom"
import Section from "../Common/Section"
import MainText from "../Common/MainText"
import "../../styles/Residences.css"

export default function Residences() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });
  
    return (
      <Section id="residences">
        <div className="residences-container">
        <MainText subText="03" text="Residences" className="section-main-text residences-text" />
        <AnimatePresence>
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: .5, duration: 1.5 }}
            >
              <Link as={Link} to="/availability" className="residences-link">
                <Button className="residences-btn">Explore Our Residences</Button>
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    )
}

