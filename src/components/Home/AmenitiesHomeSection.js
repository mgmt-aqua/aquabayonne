import React from 'react';
import './AmenitiesHomeSection.css';
import { motion } from 'framer-motion';
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FramerTextReveal from '../Common/Framer/FramerTextReveal';
import AnimatedWaveSvg from '../Common/Framer/AnimatedWaveSvg';

import clubRoomBarImage from '../../img/amemities/Clubroom.png';

export default function AmenitiesHomeSection() {
    return (
        <Section id="amenities" className="amenities-home-section">
            <AnimatedWaveSvg direction="right" />
            <div className="amenities-content-wrapper">
            <Row className="amenities-home-section-row flex-column-reverse flex-lg-row">
                    <Col md={12} lg={6} className="amenities-home-section-content-container">
                        <motion.img
                            src={clubRoomBarImage}
                            className="amenities-home-section-image"
                            alt="Club room and bar"
                            initial={{ x: -300, opacity: 0.5 }}
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
                    <Col md={12} lg={6} className="amenities-text-column">
                        <div className="amenities-home-section-text-container">
                            <FramerTextReveal>
                                <h4 className="amenities-pre-text">Modern Conveniences with a Touch of Luxury</h4>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.25}>
                                <h1 className="amenities-home-section-main-text">Amenities</h1>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.35}>
                                <p className="amenities-home-section-description">
                                    Discover a collection of sophisticated amenities designed to complement your lifestyle.
                                    Whether you're unwinding in the resident lounge, focusing in a serene co-working space,
                                    or staying active in the fitness center, every detail has been considered to offer comfort,
                                    convenience, and connection. Experience a community where everyday moments feel effortlessly luxurious.
                                </p>
                            </FramerTextReveal>
                            <FramerTextReveal delay={0.45}>
                                <Link to="/amenities">
                                    <Button className="amenities-home-section-button">
                                        Explore Our Lifestyle
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