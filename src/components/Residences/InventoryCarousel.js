import React, { useState } from 'react';
import { Modal, Row, Col, Card, Button } from 'react-bootstrap';
import { floorplanMap } from '../../configuration/residences'
import './InventoryCarousel.css'

export default function InventoryCarousel({ floorPlan }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const selectedFloorPlan = floorplanMap[floorPlan];
  
    const handleImageClick = (img) => {
      setSelectedImage(img);
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
      setSelectedImage(null);
    };
  
    return (
      <div className="inventory-carousel-container">
        <h3 className="mb-3 inventory-carousel-title">Our Luxury {floorPlan} Residences</h3>
        <iframe src={selectedFloorPlan.matterportUrl} className="residences-matterport"/>
        <Row className="justify-content-center inventory-carousel-row">
                  {selectedFloorPlan.floorplans.map((plan, idx) => (
                    <Col key={idx} xs={12} sm={6} md={6} lg={3} className="mb-4">  
                      <Card className="h-100 border-0">
                        <Card.Img
                          variant="top"
                          src={plan.floorplan}
                          alt={plan.type}
                          style={{ cursor: 'pointer', maxHeight: '250px', objectFit: 'contain' }}
                          onClick={() => handleImageClick(plan.floorplan)}
                        />
                        <Card.Body className="text-center p-2">
                          <Card.Text className="inventory-carousel-floor-plan-type">{plan.type}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
        <div className="d-flex justify-content-center appfolio-container">
          <iframe title="Available Properties" src={`https://guptaassociates.appfolio.com/listings?1747144685304&amp;filters%5Bbedrooms%5D=${selectedFloorPlan.filterOptions.bedrooms}&amp;filters%5Bproperty_list%5D=Aqua&amp;theme_color=%234A6670&amp;filters%5Border_by%5D=bedrooms`} tabindex="0" className="residences-appfolio"> </iframe>
        </div>


        {/* <Carousel 
            interval={null}
            prevIcon={<FaChevronLeft className="custom-carousel-icon" />}
            nextIcon={<FaChevronRight className="custom-carousel-icon" />}
        >
          {inventoryCarousel.map((unit, index) => (
            <Carousel.Item key={index}>
                <h3 className="mb-3 inventory-carousel-title">Our Collection of {unit.type} Apartments</h3>
              <div className="text-center mb-4">
                <Row className="justify-content-center inventory-carousel-row">
                  {unit.floorplans.map((plan, idx) => (
                    <Col key={idx} xs={12} sm={6} md={6} lg={3} className="mb-4">
                      <Card className="h-100 border-0">
                        <Card.Img
                          variant="top"
                          src={plan.floorplan}
                          alt={plan.type}
                          style={{ cursor: 'pointer', maxHeight: '250px', objectFit: 'contain' }}
                          onClick={() => handleImageClick(plan.floorplan)}
                        />
                        <Card.Body className="text-center p-2">
                          <Card.Text className="inventory-carousel-floor-plan-type">{plan.type}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
               
              </div>
              <div className="mt-3 inventory-starting-price">
                  <strong>Starting at:</strong> {unit.startingPrice || 'Contact for pricing'}
                </div>
            </Carousel.Item>
          ))}
        </Carousel> */}
  
        {/* Fullscreen Modal */}
        <Modal show={showModal} onHide={handleClose} centered fullscreen>
          <Modal.Body className="bg-dark d-flex justify-content-center align-items-center">
            <img
              src={selectedImage}
              alt="Fullscreen"
              className="img-fluid"
              style={{ maxHeight: '90vh' }}
            />
            <Button
              variant="light"
              onClick={handleClose}
              className="position-absolute top-0 end-0 m-3"
            >
              ✕
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    );
};
