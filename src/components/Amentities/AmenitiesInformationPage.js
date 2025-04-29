import React from "react";

// Bootstrap Components
import { Row, Col, Card } from "react-bootstrap";

// Components
import FramerSlide from "../Common/FramerSlide";
import InformationPage from "../Common/InformationPage";
import InformationGrid from "../Common/InformationGrid";
import QuoteHero from "../Common/QuoteHero";

// Config
import { desktopStyles, mobileStyles } from "../../configuration/framer-slide-styles";
import { allAmenities, images, amenitiesHighlightData } from '../../configuration/amenities'

// Assets
import coverImage from "../../img/amemities/Clubroom.png";

// Styles
import "./AmenitiesInformationPage.css";


export default function AmenitiesInformationPage() {
    const pageTitle = 'Amenities';
    const subText = "Elevate Your Lifestyle With Unmatched Amenities";
    const quote = "Where Luxury Meets Serenity"

    return (
        <div className="amenities-information-page">
            <FramerSlide text="Amenities" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={pageTitle} subText={subText} img={coverImage} imgStyles={'amenitities-information-page-cover-img'}>
                <InformationGrid data={amenitiesHighlightData} />
                <QuoteHero quote={quote} />
                {/* Amenities & Services Section */}
                <h1 className="amenities-information-page-list-title">Amenities & Services</h1>
                {/* List of Amenities */}
                <div className="amenities-information-page-list-container">
                    <Row className="amenities-information-page-list-row">
                        {allAmenities.map((list, colIndex) => (
                            <Col xs={6} sm={6} md={2} lg={2} xl={2} key={colIndex}>
                                <ul className="list-unstyled">
                                    {list.map((amenity, index) => (
                                        <li key={index} className="mb-3">{amenity}</li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </div>
                {/* Amenities Image Gallery */}
                <Row className="g-4 amenities-image-gallery-row">
                    {images.map((image, index) => (
                        <Col xs={12} sm={12} md={6} lg={6} xl={4} key={index}>
                            <Card>
                                <Card.Img variant="top" src={image.src} alt={image.alt} className="amenities-image-gallery-image" />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </InformationPage>
        </div>
    );
}