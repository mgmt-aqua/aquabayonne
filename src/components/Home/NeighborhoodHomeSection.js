import React from "react";
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import AnimatedWaveSvg from '../Common/Framer/AnimatedWaveSvg'

import FramerTextReveal from '../Common/Framer/FramerTextReveal'

import './NeighborhoodHomeSection.css'

import coverImage from '../../img/neighborhood/waterfront.png'

export default function NeighborhoodHomeSection() {
    return (
        <Section id="neighborhood" className="neighborhood-home-section">
        <AnimatedWaveSvg direction="right" />
        <div className="neighborhood-content-wrapper">
        <Row className="neighborhood-home-section-row flex-column-reverse flex-lg-row">
                <Col md={12} lg={6} className="neighborhood-home-section-content-container">
                    <motion.img
                        src={coverImage}
                        className="neighborhood-home-section-image"
                        alt="Club room and bar"
                        initial={{ x: -100, opacity: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                            delay: 0.2
                        }}
                        viewport={{ once: true, amount: 0.1 }}
                    />
                </Col>
                <Col md={12} lg={6} className="neighborhood-text-column">
                    <div className="neighborhood-home-section-text-container">
                        <FramerTextReveal>
                            <h4 className="neighborhood-pre-text">Effortless Access to It All</h4>
                        </FramerTextReveal>
                        <FramerTextReveal delay={0.25}>
                            <h1 className="neighborhood-home-section-main-text">Neighborhood</h1>
                        </FramerTextReveal>
                        <FramerTextReveal delay={0.35}>
                            <p className="neighborhood-home-section-description">
                            AQUA offers the perfect balance of neighborhood charm and metropolitan access. Ideally located in Bayonne’s waterfront district, Ocean Terminal, residents enjoy a relaxed, community-focused setting with seamless connections to Manhattan via nearby Light Rail and ferry. From local parks and shoreline paths to vibrant dining and cultural spots, AQUA places you at the crossroads of comfort, convenience, and city energy—just minutes from the heart of NYC.
                            </p>
                        </FramerTextReveal>
                        <FramerTextReveal delay={0.45}>
                            <Link to="/neighborhood">
                                <Button className="neighborhood-home-section-button">
                                    Explore Our Neighborhood
                                </Button>
                            </Link>
                        </FramerTextReveal>
                    </div>
                </Col>
            </Row>
        </div>
    </Section>
    );
}