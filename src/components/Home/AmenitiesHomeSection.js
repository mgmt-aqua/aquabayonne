import React from 'react';
import './AmenitiesHomeSection.css'
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import FramerTextReveal from '../Common/Framer/FramerTextReveal'
import AnimatedSvg from '../Common/Framer/AnimatedSvg';

export default function AmenitiesHomeSection() {
   

    return (
        <Section id="amenities">
            <AnimatedSvg color="#A0C1D1" right/>
            <Row className="amenities-home-section-row">
                {/* <Col xs={12} md={6} className="amenities-home-section-image-column">
                    <div className="amenities-image-grid">
                        <img src={require('../../img/amemities/amenities_gym.jpg')} alt="Amenity 1" />
                        <img src={require('../../img/amemities/amenities_cover.png')} alt="Amenity 2" />
                        <img src={require('../../img/amemities/amenities_club_room.png')} alt="Amenity 3" />
                        <img src={require('../../img/amemities/amenities_gym.png')} alt="Amenity 4" />
                    </div>
                </Col> */}
                <Col xs={12} md={6} className="amenities-text-column">
                    <div className="amenities-home-section-text-container">
                        <FramerTextReveal><h4 className="amenities-pre-text">Modern Conveniences with a Touch of Luxury</h4></FramerTextReveal>
                        <FramerTextReveal delay={.25}><h1 className="amenities-home-section-main-text"><span>02</span>Amenities</h1></FramerTextReveal>
                        <FramerTextReveal delay={.35}><p className="amenities-home-section-description">Discover a collection of sophisticated amenities designed to complement your lifestyle. Whether you're unwinding in the resident lounge, focusing in a serene co-working space, or staying active in the fitness center, every detail has been considered to offer comfort, convenience, and connection. Experience a community where everyday moments feel effortlessly luxurious.</p></FramerTextReveal>
                        <FramerTextReveal delay={.45}><Link to={"/amenities"}><Button className="amenities-home-section-button">Explore the Lifestyle</Button></Link></FramerTextReveal>
                    </div>

                </Col>

            </Row>
            
        </Section>
    );
}