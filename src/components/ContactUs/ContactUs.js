import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Row, Col, Form, Button } from 'react-bootstrap';

import useLeafletMap from '../../hooks/useLeafletMap';
import TextInput from '../Common/Forms/TextInput';
import SelectInput from '../Common/Forms/SelectInput';
import DateInput from '../Common/Forms/DateInput';
import FramerSlide from '../Common/FramerSlide';
import Footer from '../Footer/Footer';

import { mobileStyles, desktopStyles } from '../../configuration/framer-slide-styles';
import { 
  defaultFormOptions, 
  validateForm, 
  defaultFormErrors, 
  budgetOptions,
  attributionOptions, 
  bedroomOptions, 
  petOptions,
  parkingOptions,
  formSuccessMessage,
  formFailureMessage 
} from '../../helpers/form';

import './ContactUs.css';

export default function ContactUsForm() {
  const mapContainer = useRef(null);
  useLeafletMap(mapContainer);
  const [formErrors, setFormErrors] = useState(defaultFormErrors);
  const [formData, setFormData] = useState(defaultFormOptions);
  const [successMessage, setSuccessMessage] = useState("");

  /* Fucntion that is used to handle any input form changes.
     If we detect any changes to a form input that has an error, we remove that error
  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (formErrors[name]) {
      delete formErrors[name];
    }

    if(formErrors.submit) {
      delete formErrors.submit;
    }

    if(successMessage) {
      setSuccessMessage("")
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function used to endcode form data to POST for Netlify forms
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  // Function to handle the submit of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, newErrors } = validateForm(formData);
    if (isValid) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData })
      })
        .then(() => setSuccessMessage(formSuccessMessage))
        .catch(() => setFormErrors({...formErrors, submit: formFailureMessage }));
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
          <p className="contact-us-sub-text">Interested in learning more? Fill out some info and we will be in touch shortly! We can't wait to hear from you!</p>

          {/* Form */}
          <Form
            name="contact" // Netlify form name
            method="POST"
            data-netlify="true" // Netlify form handling
            onSubmit={handleSubmit}
          >
            {/* Hidden input field for form name */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Name */}
            <TextInput
              label="Name*"
              name="name"
              placeholder="e.g. John Smith"
              value={formData.name}
              onChange={handleInputChange}
              error={formErrors.name}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Email */}
            <TextInput
              label="Email*"
              name="email"
              placeholder="e.g. johnsmith@example.com"
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Phone */}
            <TextInput
              label="Phone Number*"
              name="phone"
              placeholder="e.g. 555-555-5555"
              value={formData.phone}
              onChange={handleInputChange}
              error={formErrors.phone}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Budget */}
            <SelectInput
              label="Select your budget*"
              name="budget"
              options={budgetOptions}
              value={formData.budget}
              onChange={handleInputChange}
              error={formErrors.budget}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Bedrooms */}
            <SelectInput
              label="What apartment are you interested in?*"
              name="bedrooms"
              options={bedroomOptions}
              value={formData.bedrooms}
              onChange={handleInputChange}
              error={formErrors.bedrooms}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Pets */}
            <SelectInput
              label="Do you have any pets?"
              name="pets"
              options={petOptions}
              value={formData.pets}
              onChange={handleInputChange}
              error={formErrors.pets}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
            />

            {/* Parking */}
            <SelectInput
              label="Do you need parking?"
              name="parking"
              options={parkingOptions}
              value={formData.parking}
              onChange={handleInputChange}
              error={formErrors.parking}
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
              label="How did you hear about us?"
              name="attribution"
              options={attributionOptions}
              value={formData.attribution}
              onChange={handleInputChange}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
            />

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="contact-us-submit-button">
              Submit
            </Button>
            {successMessage && <p className='submit-success'>{successMessage}</p>}
            {formErrors.submit && <p className='submit-error'>{formErrors.submit}</p>}
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