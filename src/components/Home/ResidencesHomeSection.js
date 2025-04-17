import React from "react";
import './ResidencesHomeSection.css'
import Section from "../Common/Section";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AnimatedSvg from "../Common/Framer/AnimatedSvg";

import FramerTextReveal from '../Common/Framer/FramerTextReveal'
import 'swiper/css';
import 'swiper/css/navigation';

// Images
import image1 from '../../img/our_building_1.jpg'
import image2 from '../../img/our_building_2.jpg'
import image3 from '../../img/our_building_3.jpg'

export default function ResidencesHomeSection() {

    const images = [image1, image2, image3];

    return (
        <Section id="residences">
            <AnimatedSvg color="#C3B59F" left/>
            <Row className="residences-home-section-row">
                <Col xs={12} md={6} className="residences-text-column">
                    <div className="residences-home-section-text-container">
                        <FramerTextReveal><h4 className="residences-pre-text">Luxury Studio, One Bed & Two Bed Apartments</h4></FramerTextReveal>
                        <FramerTextReveal delay={.25}><h1 className="residences-home-section-main-text"><span>03</span>Residences</h1></FramerTextReveal>
                        <FramerTextReveal delay={.35}><p className="residences-home-section-description">Experience elevated living in thoughtfully crafted spaces that balance comfort and sophistication. Each residence features refined finishes, spacious layouts, and a timeless design sensibility—perfectly tailored for modern city life. From quiet mornings to lively evenings, discover a home that feels both elegant and effortless.</p></FramerTextReveal>
                        <FramerTextReveal delay={.45}><Link to={"/residences"}><Button className="residences-home-section-button">Discover Our Residences</Button></Link></FramerTextReveal>
                    </div>
                </Col>
                <Col xs={12} md={6} className="residences-home-section-image-column">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        spaceBetween={25}
                        slidesPerView={1.1}
                        centeredSlides={false}
                        loop={true}
                        grabCursor={true}
                        style={{ marginLeft: 'auto' }}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.2,
                            },
                            1024: {
                                slidesPerView: 1.2,
                            },
                        }}
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="residence-slide">
                                    <img src={src} alt={`Residence ${idx + 1}`} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Col>
            </Row>
        </Section>
    );
}