import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Row, Col, Form, Button } from 'react-bootstrap';

import TextInput from '../Common/Forms/TextInput';
import SelectInput from '../Common/Forms/SelectInput';
import DateInput from '../Common/Forms/DateInput';
import RadioButtonGroup from '../Common/Forms/RadioButtonGroup'
import FramerSlide from '../Common/FramerSlide';
import Footer from '../Footer/Footer';

import { mobileStyles, desktopStyles } from '../../configuration/framer-slide-styles';
import {
  defaultFormOptions,
  validateForm,
  defaultFormErrors,
  attributionOptions,
  bedroomOptions,
  optInOptions,
  petOptions,
  parkingOptions,
  formSuccessMessage,
  formFailureMessage
} from '../../helpers/form';
import useScrollToTop from '../../hooks/useScrollToTop';

import leasingOffice from '../../img/contactus.jpg'

import './ContactUs.css';

import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUsForm() {
  useScrollToTop();
  const [formErrors, setFormErrors] = useState(defaultFormErrors);
  const [formData, setFormData] = useState(defaultFormOptions);
  const [successMessage, setSuccessMessage] = useState("");
  
<ReCAPTCHA
  sitekey="6LcmlewrAAAAAFd5JOJNtryHWibXyTutMq0LxQCV"
  onChange={(value) => setFormData((prev) => ({ ...prev, "g-recaptcha-response": value }))}
    />
    
    <script src="https://www.google.com/recaptcha/api.js"></script>

   <script>
   function onSubmit(token) {
     document.getElementById("demo-form").submit();
   }
 </script>

  <button class="g-recaptcha" 
        data-sitekey="reCAPTCHA_site_key" 
        data-callback='onSubmit' 
        data-action='submit'>Submit</button>
  
  /* Function that is used to handle any input form changes.
     If we detect any changes to a form input that has an error, we remove that error
  */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (formErrors[name]) {
      delete formErrors[name];
    }

    if (formErrors.submit) {
      delete formErrors.submit;
    }

    if (successMessage) {
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
        .catch(() => setFormErrors({ ...formErrors, submit: formFailureMessage }));
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
          <p className="contact-us-sub-text">We’re Here to Help You Find Your New Home-Share a few details, and our team will be in touch shortly. We look forward to connecting with you.</p>

          {/* Form */}
          <Form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            {/* Hidden input field for form name. This is needed for Netlify forms */}
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

            {/* Bedrooms */}
            <RadioButtonGroup
              label="Desired Unit Size*"
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

            {/* Lease Start Date */}
            <DateInput
              name="leaseStartDate"
              label="Desired Move-in Date*"
              value={formData.leaseStartDate}
              onChange={handleInputChange}
              error={formErrors.leaseStartDate}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />


            {/* Budget */}
            <TextInput
              label="Enter your budget*"
              name="budget"
              placeholder="e.g. $2,500"
              value={formData.budget}
              onChange={handleInputChange}
              error={formErrors.budget}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
              errorClassName="contact-us-form-error"
            />

            {/* Parking */}
            <RadioButtonGroup
              label="Are you looking to secure parking?"
              name="parking"
              options={parkingOptions}
              value={formData.parking}
              onChange={handleInputChange}
              error={formErrors.parking}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              controlClassName="contact-us-form-control"
            />

            {/* Pets */}
            <RadioButtonGroup
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

            {formData.attribution === 'OTHER' &&
              <TextInput
                label="Please specify how you heard about us:"
                name="attributionOther"
                value={formData.attributionOther}
                onChange={handleInputChange}
                groupClassName="contact-us-form-group"
                labelClassName="contact-us-form-label"
                controlClassName="contact-us-form-control"
              />
            }

            {/* Opt-in */}
            <RadioButtonGroup
              label="Opt-in to receive SMS communication?*"
              name="optIn"
              options={optInOptions}
              value={formData.optIn}
              onChange={handleInputChange}
              error={formErrors.optIn}
              groupClassName="contact-us-form-group"
              labelClassName="contact-us-form-label"
              radioClassName="contact-us-form-control-radio"
              errorClassName="contact-us-form-error"
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
          <img src={leasingOffice} alt="Leasing Office" className='contact-us-image'/>
        </Col>
      </Row>
      <Footer />
    </AnimatePresence>
  );
}
