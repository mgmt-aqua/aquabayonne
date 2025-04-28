import React from "react";
import './ResidencesHomeSection.css';
import { motion } from 'framer-motion';
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FramerTextReveal from '../Common/Framer/FramerTextReveal';
import AnimatedWaveSvg from '../Common/Framer/AnimatedWaveSvg';

import livingRoomImage from '../../img/residences/Living Room.png'

export default function ResidencesHomeSection() {

    return (
        <Section id="residences" className="residences-home-section">
            <AnimatedWaveSvg direction="left" />
            <div className="residences-content-wrapper">
                <Row className="residences-home-section-row">
                    <Col md={12} lg={6} className="residences-text-column">
                        <div className="residences-home-section-text-container">
                            <FramerTextReveal>
                                <h4 className="residences-pre-text">Designed to Impress. Built to Last.</h4>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.25}>
                                <h1 className="residences-home-section-main-text">
                                    <span>01</span>Residences
                                </h1>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.35}>
                                <p className="residences-home-section-description">
                                    From the moment you arrive, Aqua commands attention—where striking architecture
                                    meets timeless design. Crafted with meticulous detail, every corner reflects an
                                    uncompromising commitment to quality, security, and refined urban living.
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
