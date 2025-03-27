import * as React from 'react';
import { Col, Row, Image } from 'react-bootstrap'

import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';

import {motion} from 'framer-motion'

import coverImage from '../../img/our_building_1.jpg'

import './BuildingInformationPage.css'

// Image imports
import image1 from '../../img/our_building_1.jpg';
import image2 from '../../img/our_building_2.jpg';
import image3 from '../../img/our_building_1.jpg';
import image4 from '../../img/our_building_2.jpg';
import image5 from '../../img/our_building_1.jpg';
import image6 from '../../img/our_building_2.jpg';
import image7 from '../../img/our_building_1.jpg';
import image8 from '../../img/our_building_2.jpg';
import image9 from '../../img/our_building_1.jpg';

import apartmentBuilding from '../../img/apartment_building.jpg'
import ApplyNowHero from '../Common/ApplyNowHero';
import Section from '../Common/Section';


export default function BuildingInformationPage() {

    const images = [
        image1,
        image1,
        image1,
        image1,
        // image5,
        // image6,
        // image7,
        // image8,
        // image9,
    ];

    // Styles for transition page
    const baseStyles = {
        color: "transparent",
        textTransform: "uppercase",
        fontWeight: "700",
        WebkitTextStroke: "3px #D0D3D4",
        textStroke: "3px #D0D3D4"
    }

    const desktopStyles = {
        ...baseStyles,
        fontSize: "8rem"
    }

    const mobileStyles = {
        ...baseStyles,
        fontSize: "3rem"
    }

    return (
        <div className="building-information-page">
            <FramerSlide text="Our Building" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Our Buidling'} subText={"Modern Living, Timeless Design"} img={coverImage} >
                {/* Intro Section */}
                <div className="building-information-page-section">
                    <Row className="building-information-page-section-1-row">
                        <Col key={1} xs={12} sm={12} md={12} lg={6} className="mb-4 section-1-col col-left">
                            <motion.h1 className="building-information-page-section-title">Where Elegance Meets Serenity</motion.h1>
                        </Col>
                        <Col key={2} xs={12} sm={12} md={12} lg={6} className="mb-4 section-1-col">
                            <Image src={apartmentBuilding} fluid className="building-information-page-img" />
                        </Col>
                    </Row>
                </div>

                <div className="building-information-page-content-container">
                    {/* Our Story Section
                    <Row className="building-information-our-story-row">
                            <Col key={1} xs={12} sm={12} md={4} lg={4} className="mb-4 our-story-col-left">
                                <h1 className="building-information-page-our-story-heading">(01) Our Story</h1>
                            </Col>
                            <Col key={2} xs={12} sm={12} md={8} lg={8} className="mb-4 our-story-col-right">
                                <p className="our-story-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Col>
                    </Row>
                     */}

                    {/* Information Section */}
                    <div className="building-information-page-section">

                    </div>

                    {/* Image Gallery */}
                    <Row className="building-information-image-gallery-row">
                        {images.map((image, index) => (
                            <Col key={index} xs={12} sm={6} md={6} lg={6} className="mb-4">
                                <Image src={image} fluid />
                            </Col>
                        ))}
                    </Row>

                    {/* Hero Section */}
                    <ApplyNowHero />
                </div>

            </InformationPage>
        </div>
    );
}