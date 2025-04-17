import React from "react";
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FramerTextReveal from '../Common/Framer/FramerTextReveal'
import AnimatedSvg from '../Common/Framer/AnimatedSvg';

import './BuildingHomeSection.css'

export default function BuildingHomeSection() {
    return(
        <Section id="building">
            <AnimatedSvg color="#DADFF7" left/>
          
            <Row className="amenities-home-section-row">
            <Col xs={12} md={6} className="amenities-text-column">
                               
            <div className="building-home-section-text-container">
                                    <FramerTextReveal><h4 className="building-pre-text">Designed to Impress. Built to Last.</h4></FramerTextReveal>
                                    <FramerTextReveal delay={.25}><h1 className="building-home-section-main-text"><span>01</span>Building</h1></FramerTextReveal>
                                    <FramerTextReveal delay={.35}><p className="building-home-section-description">From the moment you arrive, Aqua commands attention—where striking architecture meets timeless design. Crafted with meticulous detail, every corner reflects an uncompromising commitment to quality, security, and refined urban living. This is more than a residence; it’s a landmark that defines your lifestyle.</p></FramerTextReveal>
                                    <FramerTextReveal delay={.45}><Link to={"/building"}><Button className="building-home-section-button">Explore Our Building</Button></Link></FramerTextReveal>
                                </div>
                            </Col>
                            
            
                        </Row>
        </Section>
    );
}