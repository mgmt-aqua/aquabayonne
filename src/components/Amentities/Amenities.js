import React from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import Section from "../Common/Section"
import MainText from "../Common/MainText"
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import "../../styles/Amenities.css"

export default function Amenities() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.1 });
  
  return (
    <Section id="amenites">
      <div className="amenities-container">
          <MainText subText="02" text="Amenities" className="section-main-text amenities-text" />
          <AnimatePresence>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0}}
            transition={{ delay: .5, duration: 1.5 }}
          >
          <Link as={Link} to="/amenities" className="amenities-link">
            <Button className="amenities-btn">Explore Our Amenities</Button>
          </Link>
          </motion.div>
          </AnimatePresence>
      </div>
    </Section>
  )
}
