import React from "react";
import './ResidencesHomeSection.css';
import { motion } from 'framer-motion';
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FramerTextReveal from '../Common/Framer/FramerTextReveal';
import AnimatedWaveSvg from '../Common/Framer/AnimatedWaveSvg';

import livingRoomImage from '../../img/residences/Living Room 2 Bed.png'

export default function ResidencesHomeSection() {

    return (
        <Section id="residences" className="residences-home-section">
            <AnimatedWaveSvg direction="left" />
            <div className="residences-content-wrapper">
                <Row className="residences-home-section-row">
                    <Col md={12} lg={6} className="residences-text-column">
                        <div className="residences-home-section-text-container">
                            <FramerTextReveal>
                                <h4 className="residences-pre-text">Where Comfort Meets Style</h4>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.25}>
                                <h1 className="residences-home-section-main-text">Residences</h1>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.35}>
                                <p className="residences-home-section-description">
                                    Designed for modern living, AQUA's residences blend clean lines, natural light, and thoughtful finishes. Choose from studios, one-, and two-bedroom layouts—each offering spacious interiors, oversized windows, and elevated views of the Hudson River, Manhattan skyline, or Bayonne’s lush green spaces. It’s comfort, style, and function—brought together seamlessly.
                                </p>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.45}>
                                <Link to="/residences">
                                    <Button
                                        className="residences-home-section-button"
                                        aria-label="Explore our residences details"
                                    >
                                        Explore Our Residences
                                    </Button>
                                </Link>
                            </FramerTextReveal>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="residences-home-section-content-container">
                        <motion.img
                            src={livingRoomImage}
                            className="residences-home-section-image"
                            alt="Lobby view of the residences"
                            initial={{ x: 100, opacity: 0.5 }}
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
                </Row>
            </div>
        </Section>
    );
}
