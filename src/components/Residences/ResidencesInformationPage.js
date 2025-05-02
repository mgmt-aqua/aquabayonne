import React, { useState } from 'react';
import { Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";

// Components
import FramerSlide from '../Common/FramerSlide';
import InformationPage from '../Common/InformationPage';
import QuoteHero from '../Common/QuoteHero';
import ResidencesModal from './ResidencesModal';

// Configuration
import {
  filterOptions,
  inventoryOptions,
  residencesHighlightData,
  quote,
  pageTitle,
  subText
} from '../../configuration/residences';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';

// Assets
import coverImage from '../../img/residences/Living Room 2 Bed.png';

// Styles
import './ResidencesInformationPage.css';

export default function ResidencesInformationPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeInventory, setActiveInventory] = useState(inventoryOptions);
  const [showModal, setShowModal] = useState(false);
  const [selectedResidence, setSelectedResidence] = useState({});

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setActiveInventory(
      filter === 'All' ? inventoryOptions : inventoryOptions.filter(item => item.type === filter)
    );
  };

  const handleViewDetails = (item) => {
    setSelectedResidence(item);
    setShowModal(true);
  };

  return (
    <div className="residences-information-page">
      {/* Hero Slide */}
      <FramerSlide
        text="Residences"
        desktopTextStyles={desktopStyles}
        mobileTextStyles={mobileStyles}
      />

      {/* Main Info Page */}
      <InformationPage
        pageTitle={pageTitle}
        subText={subText}
        img={coverImage}
        imgStyles="residences_cover_image"
      >
        {/* Features Carousel */}
        <section className="features-carousel-section">
          <h3 className="residences-feature-title">Residence Features</h3>
          <Carousel className="feature-carousel">
            {residencesHighlightData.map((feature, index) => (
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
        </section>

        {/* Quote Section */}
        <QuoteHero quote={quote} />

        {/* Floorplans Section */}
        <section className="floorplans-container">
          <h1 className="floorplans-heading-text">Floor Plans</h1>
          <p className="floorplan-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>

          {/* Filter Buttons */}
          <div className="button-wrapper">
            {filterOptions.map(option => (
              <Button
                key={option}
                className={`button-filters-btn ${activeFilter === option ? 'active' : ''}`}
                onClick={() => handleFilterChange(option)}
              >
                {option}
              </Button>
            ))}
          </div>

          {/* Inventory Grid */}
          <Row className="floorplans-row">
            <AnimatePresence>
              {activeInventory.map((item, index) => (
                <Col sm={12} md={4} key={item.id || index}>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 800,
                      damping: 100,
                      delay: index * 0.1,
                    }}
                  >
                    <Card className="mb-4 floorplans-card">
                      <Card.Body className="floorplans-card-body">
                        <img
                          src={item.floorplan}
                          alt={`${item.id} floorplan`}
                          className="floorplans-card-img"
                        />
                        <div className="floorplans-card-text">
                          <span className="floorplans-card-text-span">
                            <IoIosBed className="floorplans-card-icon" />{item.bedrooms}
                          </span>
                          <span className="floorplans-card-text-span">
                            <FaBath className="floorplans-card-icon" />{item.bathrooms}
                          </span>
                        </div>
                      </Card.Body>
                      <Button
                        className="floorplans-card-btn"
                        onClick={() => handleViewDetails(item)}
                      >
                        View Details
                      </Button>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </AnimatePresence>
          </Row>

          {/* Modal */}
          <ResidencesModal
            selectedOption={selectedResidence}
            show={showModal}
            handleClose={() => setShowModal(false)}
          />
        </section>
      </InformationPage>
    </div>
  );
}
