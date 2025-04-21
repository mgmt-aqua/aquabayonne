import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap'

import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import QuoteHero from '../Common/QuoteHero'

import coverImage from '../../img/our_building_1.jpg'
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';

import './BuildingInformationPage.css'

// Image imports
import image3 from '../../img/our_building_3.jpg';
import lobbyImage from '../../img/building/lobby_1.jpg'

import buildingGif from '../../img/building.gif'

import residencesGridImg from '../../img/residences_cover.jpg'
import amenitiesGridImg from '../../img/amemities/amenities_gym.jpg'
import neighborhoodGridImg from '../../img/neighborhood/neighborhood_golf.jpg'
import { Link } from 'react-router-dom';
import InformationGrid from '../Common/InformationGrid';


export default function BuildingInformationPage() {
    const [hoveredGridIndex, setHoveredGridIndex] = useState(null);

    const gridBlocksContent = [{
        title: "Amenities",
        description: "Experience the comfort and luxury.",
        img: amenitiesGridImg,
        link: '/amenities'
    },
    {
        title: "Residences",
        description: "Find your perfect home here.",
        img: residencesGridImg,
        link: '/residences'
    },
    {
        title: "Neighborhood",
        description: "A vibrant community awaits you.",
        img: neighborhoodGridImg,
        link: '/neighborhood'
    },
    {
        title: "Food Hall",
        description: "Savor the Art of Our Kitchen.",
        img: image3,
        link: '/explore'
    },
    {
        title: "Book A Tour",
        description: "See the space in person, schedule now!",
        img: image3,
        link: '/inquire'
    },
    {
        title: "Contact Us",
        description: "We're here to help you anytime.",
        img: image3,
        link: '/contact'
    }]

    const buildingInformationData = [{
        title: "Our Story",
        content: ["Nestled near the picturesque shores of the Hudson River in Bayonne, NJ, AQUA offers an unparalleled living experience that redefines luxury. AQUA is thoughtfully designed to provide residents with a harmonious blend of comfort, elegance, and modernity.", "Our apartment units range from comfortable studios to expansive two-bedroom layouts, our units feature large windows that boast breathtaking views of the Hudson River, the iconic New York City skyline, and the beautiful Bayonne golf course."],
        image: lobbyImage,
        imageAlt: 'Our Story Image'
    }, {
        title: "Our Journey",
        content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta."],
        image: buildingGif,
        imageAlt: 'Our Journey Image'
    }]

    return (
        <div className="building-information-page">
            <FramerSlide text="Building" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Building'} subText={"Explore the Unmatched Elegance of Aqua"} img={coverImage} >
                {/** Intro Section */}
                <InformationGrid data={buildingInformationData} />
                {/** Quote Hero */}
                <QuoteHero quote={"Where Luxury Meets Serenity"} />
                {/* Grid Blocks Section */}
                <div className="building-information-grid-blocks">
                    <Row className="building-information-page-grid-blocks-row">
                        {gridBlocksContent.map((data, index) => (

                            <Col key={index} xs={12} sm={12} md={6} lg={4} className="mb-4 building-information-page-grid-blocks-col"
                                onMouseEnter={() => setHoveredGridIndex(index)} // Set the index when hovered
                                onMouseLeave={() => setHoveredGridIndex(null)} >
                                <Link to={data.link}>
                                    <img src={data.img} alt={data.title || ""} className="building-information-page-grig-img" />
                                    {(hoveredGridIndex === index && <div className="building-information-page-grid-blocks-overlay-hovered"></div>) || (<div className="building-information-page-grid-blocks-overlay"></div>)}
                                    {hoveredGridIndex === index ? <h1 className="building-information-page-grid-blocks-description">{data.description}</h1> : <h1 className="building-information-page-grid-blocks-title">{data.title}</h1>}
                                </Link>
                            </Col>

                        ))}
                    </Row>
                </div>
            </InformationPage>
        </div>
    );
}