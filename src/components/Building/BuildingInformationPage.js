import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import FramerSlide from '../Common/FramerSlide';
import InformationPage from '../Common/InformationPage';
import QuoteHero from '../Common/QuoteHero';
import InformationGrid from '../Common/InformationGrid';
import ApplyNowHero from '../Common/ApplyNowHero'

import coverImage from '../../img/building/building_background.png';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import { buildingInformationData, buildingGridBlocksContent } from '../../configuration/building';

import './BuildingInformationPage.css';

export default function BuildingInformationPage() {
    const [hoveredGridIndex, setHoveredGridIndex] = useState(null);

    return (
        <div className="building-information-page">
            <FramerSlide
                text="Building"
                desktopTextStyles={desktopStyles}
                mobileTextStyles={mobileStyles}
            />

            <InformationPage
                pageTitle="Building"
                subText="Explore the Unmatched Elegance of AQUA"
                img={coverImage}
                imgStyles="building-information-page-cover-img"
            >
                <InformationGrid data={buildingInformationData} />

                <QuoteHero quote="Luxury Meets Serenity" />

                <div className="building-information-grid-blocks">
                    <Row>
                        {buildingGridBlocksContent.map((data, index) => (
                            <Col
                                key={index}
                                xs={12}
                                sm={12}
                                md={6}
                                lg={4}
                                className="mb-4 building-information-page-grid-blocks-col"
                                onMouseEnter={() => setHoveredGridIndex(index)}
                                onMouseLeave={() => setHoveredGridIndex(null)}
                            >
                                <Link to={data.link}>
                                    <img
                                        src={data.img}
                                        alt={data.title || ''}
                                        className="building-information-page-grid-img"
                                    />
                                    <div className={
                                        hoveredGridIndex === index
                                            ? 'building-information-page-grid-blocks-overlay-hovered'
                                            : 'building-information-page-grid-blocks-overlay'
                                    } />
                                    <h1 className={
                                        hoveredGridIndex === index
                                            ? 'building-information-page-grid-blocks-description'
                                            : 'building-information-page-grid-blocks-title'
                                    }>
                                        {hoveredGridIndex === index ? data.description : data.title}
                                    </h1>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
                <ApplyNowHero />
            </InformationPage>
        </div>
    );
}
