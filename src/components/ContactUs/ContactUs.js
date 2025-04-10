import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Row, Col, Form, Button } from 'react-bootstrap';

import useLeafletMap from '../../hooks/useLeafletMap';
import TextInput from '../Common/Forms/TextInput';
import SelectInput from '../Common/Forms/SelectInput';
import CheckboxGroup from '../Common/Forms/CheckboxGroup';
import DateInput from '../Common/Forms/DateInput';
import FramerSlide from '../Common/FramerSlide';
import Footer from '../Footer/Footer';

import { mobileStyles, desktopStyles } from '../../configuration/framer-slide-styles';
import { defaultFormOptions, validateForm, defaultFormErrors, budgetOptions, attributionOptions } from '../../helpers/form';

import '../../styles/ContactUs.css';

export default function ContactUsForm() {
  const mapContainer = useRef(null);
  useLeafletMap(mapContainer);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);
  const [formData, setFormData] = useState(defaultFormOptions);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (formErrors[name]) {
      delete formErrors[name];
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (group, name, checked) => {
    setFormData((prevData) => ({
      ...prevData,
      [group]: {
        ...prevData[group],
        [name]: checked,
      },
    }));

    if (formErrors[group]) {
      setFormErrors((prev) => {
        const updatedErrors = { ...prev };
        delete updatedErrors[group];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, newErrors } = validateForm(formData);
    if (isValid) {
      setFormData(defaultFormOptions);
      setFormErrors(defaultFormErrors);
    } else {
      setFormErrors(newErrors);
    }
  };

  return (
    <AnimatePresence>
      <FramerSlide text="Contact Us" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
      <Row className="contact-us-container">
        <Col xs={12} md={12} lg={6} xl={6} className="contact-us-col contact-us-col-left">
          <h1 className="contact-us-title">Contact Us</h1>

          {/* Form */}
          <Form
            netlify
            name="contact" // Netlify form name
            method="POST"
            data-netlify="true" // Netlify form handling
          >
            {/* Hidden input field for form name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Name */}
            <TextInput
              name="name"
              placeholder="Name*"
              value={formData.name}
              onChange={handleInputChange}
              error={formErrors.name}
              groupClassName="contact-us-form-group"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Email */}
            <TextInput
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
              groupClassName="contact-us-form-group"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Phone */}
            <TextInput
              name="phone"
              placeholder="Phone Number*"
              value={formData.phone}
              onChange={handleInputChange}
              error={formErrors.phone}
              groupClassName="contact-us-form-group"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Budget */}
            <SelectInput
              name="budget"
              options={budgetOptions}
              value={formData.budget}
              onChange={handleInputChange}
              error={formErrors.budget}
              groupClassName="contact-us-form-group"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Bedrooms */}
            <CheckboxGroup
              label="What Apartment Are You Interested In?*"
              name="bedrooms"
              options={[
                { name: 'studio', label: 'Studio' },
                { name: 'oneBed', label: '1-Bed' },
                { name: 'twoBed', label: '2-Bed' },
              ]}
              values={formData.bedrooms}
              onChange={handleCheckboxChange}
              error={formErrors.bedrooms}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Pets */}
            <CheckboxGroup
              label="Do You Have Any Pets?"
              name="pets"
              options={[
                { name: 'yes', label: 'Yes' },
                { name: 'no', label: 'No' },
              ]}
              values={formData.pets}
              onChange={handleCheckboxChange}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
            />

            {/* Parking */}
            <CheckboxGroup
              label="Do You Need Parking?"
              name="parking"
              options={[
                { name: 'yes', label: 'Yes' },
                { name: 'no', label: 'No' },
              ]}
              values={formData.parking}
              onChange={handleCheckboxChange}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
            />

            {/* Lease Start Date */}
            <DateInput
              name="leaseStartDate"
              label="Preferred Move-In Date*"
              value={formData.leaseStartDate}
              onChange={handleInputChange}
              error={formErrors.leaseStartDate}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* How did you hear about us? */}
            <SelectInput
              name="attribution"
              options={attributionOptions}
              value={formData.attribution}
              onChange={handleInputChange}
              groupClassName="contact-us-form-group"
              controlClassName="contact-us-form-control"
            />

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="contact-us-submit-button">
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={12} lg={6} xl={6} className="contact-us-col contact-us-col-right">
          <div className="contact-us-map" ref={mapContainer} style={{ width: '100%', height: '100%' }}></div>
        </Col>
      </Row>
      <Footer />
    </AnimatePresence>
  );
}