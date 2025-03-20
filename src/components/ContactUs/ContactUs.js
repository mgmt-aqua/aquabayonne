import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import FramerSlide from '../Common/FramerSlide'
import '../../styles/ContactUs.css'

function ContactUsForm() {

  // Styles for transition page
  const baseStyles = {
    color: "transparent",
    "text-transform": "uppercase",
    "font-weight": "700",
    "-webkit-text-stroke": "3px #D0D3D4",
    "text-stroke": "3px #D0D3D4"
  }

  const desktopStyles = {
    ...baseStyles,
    "font-size": "8rem"
  }

  const mobileStyles = {
    ...baseStyles,
    "font-size": "3rem"
  }

  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    bedrooms: {
      studio: false,
      oneBed: false,
      twoBed: false,
    },
    leaseStartDate: '',
  });

  // Handle input change for text, email, and select fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle checkbox changes (bedrooms selection)
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      bedrooms: {
        ...prevData.bedrooms,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log(formData);
    // Reset form after submission (optional)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      budget: '',
      bedrooms: {
        studio: false,
        oneBed: false,
        twoBed: false,
      },
      leaseStartDate: '',
    });
  };

  return (
    <AnimatePresence mode='wait'>
      <FramerSlide text="Contact Us" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
      <h1 className="text-center mb-4 contact-us-main-text">Let's get <br/> Acquainted</h1>
      <Container fluid className="d-flex justify-content-center contact-us-container">
        <Row className="w-100">
          <Col xs={12} md={6} lg={4} className="mx-auto contact-us-column">
            {/* Customizable Heading */}


            {/* Form */}
            <Form onSubmit={handleSubmit}>
              {/* Name */}
              <Form.Group controlId="Name">
                <Form.Control
                  type="text"
                  placeholder="NAME"
                  name="name"
                  className="contact-us-form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Email */}
              <Form.Group controlId="email">
                <Form.Control
                  type="email"
                  placeholder="EMAIL"
                  name="email"
                  className="contact-us-form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Phone */}
              <Form.Group controlId="phone">
                <Form.Control
                  type="text"
                  placeholder="PHONE NUMBER"
                  name="phone"
                  className="contact-us-form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Budget */}
              <Form.Group controlId="budget">
                <Form.Control
                  as="select"
                  name="budget"
                  className='contact-us-form-control'
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">SELECT YOUR BUDGET</option>
                  <option value="500">$2,000-$2,500</option>
                  <option value="1000">$2,500-$3,000</option>
                  <option value="1500">$3,000-$3,500</option>
                  <option value="2000">$3,500-$4,000</option>
                  <option value="2000">$4,000+</option>
                </Form.Control>
              </Form.Group>

              {/* Bedrooms */}
              <Form.Group controlId="bedrooms">
                <Form.Label className="contact-us-form-label">BEDROOMS</Form.Label>
                <div className="d-flex">
                  <Form.Check
                    type="checkbox"
                    label="Studio"
                    name="studio"
                    className='contact-us-form-control'
                    checked={formData.bedrooms.studio}
                    onChange={handleCheckboxChange}
                    inline
                  />
                  <Form.Check
                    type="checkbox"
                    label="1-Bed"
                    name="oneBed"
                    className='contact-us-form-control'
                    checked={formData.bedrooms.oneBed}
                    onChange={handleCheckboxChange}
                    inline
                  />
                  <Form.Check
                    type="checkbox"
                    label="2-Bed"
                    name="twoBed"
                    className='contact-us-form-control'
                    checked={formData.bedrooms.twoBed}
                    onChange={handleCheckboxChange}
                    inline
                  />
                </div>
              </Form.Group>

              {/* Lease Start Date */}
              <Form.Group controlId="leaseStartDate">
                <Form.Label className="contact-us-form-label">LEASE START DATE</Form.Label>
                <Form.Control
                  type="date"
                  name="leaseStartDate"
                  className='contact-us-form-control'
                  value={formData.leaseStartDate}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Submit Button */}
              <Button variant="primary" type="submit" className="contact-us-submit-button">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </AnimatePresence>
  );
}

export default ContactUsForm;