import React from "react";
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FramerTextReveal from '../Common/Framer/FramerTextReveal'
import AnimatedSvg from '../Common/Framer/AnimatedSvg';

import './NeighborhoodHomeSection.css'

export default function NeighborhoodHomeSection() {
    return (
        <Section id="neighborhood">
            <AnimatedSvg color="#4A6670" right />
            <Row className="neighborhood-home-section-row">
                <Col xs={12} md={6} className="neighborhood-text-column">
                    <div className="neighborhood-home-section-text-container">
                        <FramerTextReveal><h4 className="neighborhood-pre-text">Live Here. Belong Here.</h4></FramerTextReveal>
                        <FramerTextReveal delay={.25}><h1 className="neighborhood-home-section-main-text"><span>04</span>Neighborhood</h1></FramerTextReveal>
                        <FramerTextReveal delay={.35}><p className="neighborhood-home-section-description">Nestled in the heart of Bayonne, our residences offer more than just refined interiors and premium finishes—they connect you to the culture, charm, and rhythm of the community. From locally loved cafés and curated boutiques to serene parks and vibrant nightlife, everything you need is just steps from your door. Discover a home where elegance meets authenticity.</p></FramerTextReveal>
                        <FramerTextReveal delay={.45}><Link to={"/neighborhood"}><Button className="neighborhood-home-section-button">Explore Our Neighborhood</Button></Link></FramerTextReveal>
                    </div>

                </Col>
               
            </Row>
        </Section>
    );
}