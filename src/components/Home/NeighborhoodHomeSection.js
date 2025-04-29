import React from "react";
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import AnimatedWaveSvg from '../Common/Framer/AnimatedWaveSvg'

import FramerTextReveal from '../Common/Framer/FramerTextReveal'

import './NeighborhoodHomeSection.css'

import waterfrontImage from '../../img/neighborhood/neighborhood_waterfront.jpg'

export default function NeighborhoodHomeSection() {
    return (
        <Section id="neighborhood" className="neighborhood-home-section">
        <AnimatedWaveSvg direction="right" />
        <div className="neighborhood-content-wrapper">
        <Row className="neighborhood-home-section-row flex-column-reverse flex-lg-row">
                <Col md={12} lg={6} className="neighborhood-home-section-content-container">
                    <motion.img
                        src={waterfrontImage}
                        className="neighborhood-home-section-image"
                        alt="Club room and bar"
                        initial={{ x: -500, opacity: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 15,
                            delay: 0.2
                        }}
                        viewport={{ once: true, amount: 0.2 }}
                    />
                </Col>
                <Col md={12} lg={6} className="neighborhood-text-column">
                    <div className="neighborhood-home-section-text-container">
                        <FramerTextReveal>
                            <h4 className="neighborhood-pre-text">Modern Conveniences with a Touch of Luxury</h4>
                        </FramerTextReveal>
                        <FramerTextReveal delay={0.25}>
                            <h1 className="neighborhood-home-section-main-text"><span>04</span>Neighborhood</h1>
                        </FramerTextReveal>
                        <FramerTextReveal delay={0.35}>
                            <p className="neighborhood-home-section-description">
                                Discover a collection of sophisticated neighborhood designed to complement your lifestyle.
                                Whether you're unwinding in the resident lounge, focusing in a serene co-working space,
                                or staying active in the fitness center, every detail has been considered to offer comfort,
                                convenience, and connection. Experience a community where everyday moments feel effortlessly luxurious.
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