import React from "react";
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

import FramerTextReveal from '../Common/Framer/FramerTextReveal';
import AnimatedWaveSvg from '../Common/Framer/AnimatedWaveSvg';

import './BuildingHomeSection.css';

import lobbyImage from '../../img/building/Lobby.png';

export default function BuildingHomeSection() {
    return (
        <Section id="building" className="building-home-section">
                <AnimatedWaveSvg direction="left" />
            <div className="building-content-wrapper">
                <Row className="building-home-section-row">
                    <Col md={12} lg={6} className="building-text-column">
                        <div className="building-home-section-text-container">
                            <FramerTextReveal>
                                <h4 className="building-pre-text">Designed to Impress. Built to Last.</h4>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.25}>
                                <h1 className="building-home-section-main-text">Building</h1>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.35}>
                                <p className="building-home-section-description">
                                    From the moment you arrive, Aqua commands attention—where striking architecture
                                    meets timeless design. Crafted with meticulous detail, every corner reflects an
                                    uncompromising commitment to quality, security, and refined urban living.
                                </p>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.45}>
                                <Link to="/building">
                                    <Button
                                        className="building-home-section-button"
                                        aria-label="Explore our building details"
                                    >
                                        Explore Our Building
                                    </Button>
                                </Link>
                            </FramerTextReveal>
                        </div>
                    </Col>
                    <Col md={12} lg={6} className="building-home-section-content-container">
                        <motion.img
                            src={lobbyImage}
                            className="building-home-section-image"
                            alt="Lobby view of the building"
                            initial={{ x: 500, opacity: 0.5 }}
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
                </Row>
            </div>
        </Section>
    );
}
