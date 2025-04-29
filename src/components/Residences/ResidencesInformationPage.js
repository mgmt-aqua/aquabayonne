import React, { useState } from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap'
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import QuoteHero from '../Common/QuoteHero';

import './ResidencesInformationPage.css'

// Images
import coverImage from '../../img/residences/Livingroom.png'
import bedRoom1 from '../../img/residences/Bedroom 1.png'
import bedRoom2 from '../../img/residences/Bedroom 2.png'
import bedRoom3 from '../../img/residences/Bedroom Upscale.png'
import bathRoom1 from '../../img/residences/Bathroom.png'
import bathRoom2 from '../../img/residences/Bathroom 2.png'
import livingRoom1Bed from '../../img/residences/Livingroom.png'
import livingRoomStudio from '../../img/residences/Livingroom Studio.png'
import livingRoom2Bed from '../../img/residences/Living Room 2 Bed.png'
import kitchen from '../../img/residences/residences_2.PNG'

// Floor Plans
import Studio1 from '../../assets/Floor Plans/S1.jpg'
import Studio2 from '../../assets/Floor Plans/S2.jpg'
import Studio3 from '../../assets/Floor Plans/S3.jpg'
import Studio4 from '../../assets/Floor Plans/S4.jpg'

import OneBed1 from '../../assets/Floor Plans/A1.jpg'
import OneBed2 from '../../assets/Floor Plans/A2.jpg'
import OneBed3 from '../../assets/Floor Plans/A3.jpg'
import OneBed4 from '../../assets/Floor Plans/AD1.jpg'

import TwoBed1 from '../../assets/Floor Plans/B1.jpg'
import TwoBed2 from '../../assets/Floor Plans/B2.jpg'
import TwoBed3 from '../../assets/Floor Plans/B3.jpg'
import TwoBed4 from '../../assets/Floor Plans/B4.jpg'
import ResidencesModal from './ResidencesModal';

export default function ResidencesInformationPage() {
    const filterOptions = ['All', 'Studio', '1 Bed', '2 Bed'];
    const inventoryOptions = [{
        id: "S1",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio1,
        sqft: "551 sqft.",
        images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
    }, {
        id: "S2",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio2,
        sqft: "550 sqft.",
        images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
    }, {
        id: "S3",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio3,
        sqft: "550 sqft.",
        images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
    }, {
        id: "S4",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio4,
        sqft: "550 sqft.",
        images: [Studio1, livingRoomStudio, bathRoom2, bedRoom3, kitchen]
    }, {
        id: "A1",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed1,
        sqft: "708-734 sqft.",
        images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
    }, {
        id: "A2",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed2,
        sqft: "650-652 sqft.",
        images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
    }, {
        id: "A3",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed3,
        sqft: "704 sqft.",
        images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
    },
    {
        id: "AD1",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed4,
        sqft: "827 sqft.",
        images: [Studio1, livingRoom1Bed, bathRoom2, bedRoom2, kitchen]
    },
    {
        id: "B1",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "1",
        floorplan: TwoBed1,
        sqft: "1,030-1,054 sqft.",
        images: [Studio1, livingRoom2Bed, bathRoom2, bedRoom1, bedRoom2, kitchen]
    },
    {
        id: "B2",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "1",
        floorplan: TwoBed2,
        sqft: "953 sqft.",
        images: [Studio1, livingRoom2Bed, bathRoom2, bedRoom1, bedRoom2, kitchen]
    },
    {
        id: "B3",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "2",
        floorplan: TwoBed3,
        sqft: "1,063 sqft.",
        images: [Studio1, livingRoom2Bed, bathRoom1, bathRoom2, bedRoom1, bedRoom2, kitchen]
    },
    {
        id: "B4",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "2",
        floorplan: TwoBed4,
        sqft: "1,046 sqft.",
        images: [Studio1, livingRoom2Bed, bathRoom1, bathRoom2, bedRoom1, bedRoom2, kitchen]
    }]

    const [activeFilter, setActiveFilter] = useState('All');
    const [activeInventoryOptions, setActiveInventoryOptions] = useState(inventoryOptions);
    const [show, setShow] = useState(false);
    const [selectedOption, setSelectedOption] = useState({})

    const handleClickFilter = (item) => {
        setActiveFilter(item)
        const filteredInventory = item === 'All' ? inventoryOptions : inventoryOptions.filter(inventory => inventory.type === item);
        setActiveInventoryOptions(filteredInventory)
    }

    const handleViewDetails = (item) => {
        setSelectedOption(item)
        setShow(true);
    }

    const featuresData = [
        {
            title: "Spacious Living Rooms",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: livingRoom2Bed
        },
        {
            title: "Modern Kitchen",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: require('../../img/residences/residences_2.PNG')
        },
        {
            title: "Luxurious Bathrooms",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: require('../../img/residences/residences_3.PNG')
        },
        {
            title: "Private Balconies",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            img: require('../../img/residences/residences_4.PNG')
        }
    ];

    return (
        <div className="residences-information-page">
            <FramerSlide text="Residences" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Residences'} subText={"Your Ideal Living Space Awaits"} img={coverImage} imgStyles={'residences_cover_image'}>
                <div className="building-information-carousel">
                        <p></p>
                </div>
                <div className="features-carousel-section">
                <h3 className="residences-feature-title">Residence Features</h3>
                <Carousel className='feature-carousel'>
                    {featuresData.map((feature, index) => (
                        <Carousel.Item key={index} interval={8000}>
                            <div className="feature-item">
                                <div className="feature-caption">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                                <img 
                                    className="d-block w-100 feature-carousel-img" 
                                    src={feature.img} 
                                    alt={feature.title} 
                                />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <QuoteHero quote={"Where Luxury Meets Comfort"} />
                <div className="floorplans-container">
                    <h1 className="floorplans-heading-text">Floor Plans</h1>
                    <p className="floorplan-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="button-wrapper">
                        {filterOptions.map(item => {
                            return <Button
                                key={item}
                                className={activeFilter === item ? "button-filters-btn active" : "button-filters-btn"}
                                onClick={() => handleClickFilter(item)}
                            >{item}</Button>
                        })}
                    </div>
                    <Row className="floorplans-row">
                        <AnimatePresence>
                            {activeInventoryOptions.map((item, index) => (
                                <Col sm={12} md={4} lg={4} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }}
                                        layout
                                        transition={{
                                            type: "spring",
                                            stiffness: 800,
                                            damping: 100,
                                            delay: index * 0.1
                                        }}
                                    >
                                        <Card className="mb-4 floorplans-card">
                                            <Card.Body className="floorplans-card-body">
                                                <img src={item.floorplan} alt={item.id + " img"} className="floorplans-card-img" />


                                                <div className="floorplans-card-text">
                                                    <span className="floorplans-card-text-span"><IoIosBed className="floorplans-card-icon" />{item.bedrooms}</span>
                                                    <span className="floorplans-card-text-span"><FaBath className="floorplans-card-icon" />{item.bathrooms} </span>
                                                </div>

                                            </Card.Body>
                                            <Button className="floorplans-card-btn" onClick={() => handleViewDetails(item)}>View Details</Button>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row>
                    <ResidencesModal selectedOption={selectedOption} show={show} handleClose={() => setShow(false)}/>
                </div>
            </InformationPage>
        </div>
    );
}