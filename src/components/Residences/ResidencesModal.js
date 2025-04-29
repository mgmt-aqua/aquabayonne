import React from "react";
import { Modal, Carousel, Button, Row, Col } from "react-bootstrap";
import './ResidencesModal.css';

export default function ResidencesModal({ selectedOption, show, handleClose }) {

    return (
        <div className="residences-modal-container">
            <Modal
                show={show}
                onHide={handleClose}
                className="residences-information-modal"
                size="xl"
                fullscreen
            >
                <Modal.Body>
                    <Row className="floorplan-modal-grid">
                        {/* LEFT COLUMN: Floorplan Info */}
                        <Col md={3} className="floorplan-modal-info">
                            <h2 className="floorplan-info-type">{selectedOption?.type} – {selectedOption?.id}</h2>
                            <p className="floorplan-info-bedrooms"><strong>Bedrooms:</strong> {selectedOption?.bedrooms}</p>
                            <p className="floorplan-info-bathrooms"><strong>Bathrooms:</strong> {selectedOption?.bathrooms}</p>
                            <p className="floorplan-info-sqft"><strong>Square Footage:</strong> {selectedOption?.sqft || 'TBD'}</p>
                            {/* Add more fields as needed */}
                            <Button variant="dark" onClick={handleClose} className="floorplan-info-close-button">Close</Button>
                        </Col>

                        {/* RIGHT COLUMN: Gallery */}
                        <Col md={9} className="floorplan-modal-gallery">
                            <Carousel className="w-100 h-100">
                                {(selectedOption?.images || [selectedOption.floorplan]).map((img, idx) => (
                                    <Carousel.Item key={idx} className="h-100">
                                        <img
                                            className="d-block w-100 h-100"
                                            src={img}
                                            alt={`Slide ${idx + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>

                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
}
