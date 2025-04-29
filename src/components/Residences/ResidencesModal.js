import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './ResidencesModal.css';

export default function ResidencesModal({ selectedOption, show, handleClose }) {
    const images = (selectedOption?.images || [selectedOption.floorplan]).map((img) => ({
        original: img,
        thumbnail: img,
    }));

    return (
        <div className="residences-modal-container">
            <Modal
                show={show}
                onHide={handleClose}
                className="residences-information-modal"
                size="xl"
                centered
            >
                <Modal.Body>
                    <Row className="floorplan-modal-grid">
                        <Col lg={4} className="floorplan-modal-info">
                            <h2 className="floorplan-info-type">{selectedOption?.type} – {selectedOption?.id}</h2>
                            <p className="floorplan-info-bedrooms"><strong>Bedrooms:</strong> {selectedOption?.bedrooms}</p>
                            <p className="floorplan-info-bathrooms"><strong>Bathrooms:</strong> {selectedOption?.bathrooms}</p>
                            <p className="floorplan-info-sqft"><strong>Square Footage:</strong> {selectedOption?.sqft || 'TBD'}</p>
                            <div className="floorplan-info-buttons">
                                <Button href="/contact-us" className="residences-modal-apply-now">Apply Now</Button>
                                <Button href="/inquire" className="residences-modal-book-tour">Book Tour</Button>
                            </div>
                        </Col>

                        <Col lg={8} className="floorplan-modal-gallery">
                            <Gallery items={images} showPlayButton={false} renderFullscreenButton={() => null} renderLeftNav={() => null} renderRightNav={() => null}/>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    );
}
