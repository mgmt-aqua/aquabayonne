import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'; // React Icons
import Section from "../Common/Section";
import "./Footer.css";
import logo from "../../img/aqua-logo-white.png";
import equalHousingLogo from '../../img/equal-housing.png';
import { Link } from "react-router-dom";

export default function Footer({ id }) {
    const content = (
        <footer className="bg-dark text-white py-4 d-flex align-items-center justify-content-center footer-container">
            <Container fluid className="text-center px-0">
            <div className="d-flex justify-content-center gap-5">
                            <img 
                                src={logo} 
                                alt="Aqua Bayonne logo" 
                                className="mb-3 footer-logo" 
                            />
                            <img 
                                src={equalHousingLogo} 
                                alt="Equal Housing logo" 
                                className="mb-3 footer-logo" 
                            />
                            
                        </div>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={4} className="footer-visit-us">
                        <h3 className="footer-title">Visit Us</h3>
                        <h3 className="footer-title-content">54 Flagship Street, Bayonne, NJ 07002</h3>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} className="footer-contact-us">
                        <h3 className="footer-title">Contact Us</h3>
                        <h3 className="footer-contact-us-content">Call us at <a href="tel:5555555555">(555) 555-555</a> or <Link to="/contact">reach out.</Link></h3>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} className="footer-follow-us">
                        <h3 className="footer-title">Follow Us</h3>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook size={30} className="footer-icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={30} className="footer-icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter size={30} className="footer-icon" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <FaTiktok size={30} className="footer-icon" />
                            </a>
                    </Col>
                    <Row>
                        <p className="footer-rights">
                            Copyright ©2025 Aqua Bayonne. All Rights Reserved. All trademarks are the property of their respective holders. <Link to="/privacy" className="privacy-policy-link">PRIVACY POLICY.</Link>
                        </p>

                    </Row>
                    {/* First Column with Inline Logos */}
                    {/* <Col xs={12} sm={12} md={4} lg={4} className="footer-col d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center gap-5">
                            <img 
                                src={logo} 
                                alt="Aqua Bayonne logo" 
                                className="mb-3 footer-logo" 
                            />
                            <img 
                                src={equalHousingLogo} 
                                alt="Equal Housing logo" 
                                className="mb-3 footer-logo" 
                            />
                        </div>
                    </Col> */}
                    
                    {/* Second Column with Address, Contact Info, and Hours */}
                    {/* <Col xs={12} sm={12} md={4} lg={4} className="footer-col d-flex flex-column align-items-center justify-content-center">
                        <p className="footer-address">54 Flagship Street, Bayonne, NJ 07002</p>

                        <p className="footer-phone-number">
                            <a href="tel:+12015610066">Phone: (201) 561-0066</a>
                        </p>
                        <p className="footer-email">
                            <a href="mailto:leasing@aquabayonne.com">Email: leasing@aquabayonne.com</a>
                        </p>

                        <div className="footer-hours">
                            <p>Mon - Sat: 10 am - 6 pm</p>
                            <p>Sun: 10 am - 5:30 pm</p>
                        </div>

                        <p className="footer-rights">
                            Copyright ©2025 Aqua Bayonne. All Rights Reserved. All trademarks are the property of their respective holders. <Link to="/privacy" className="privacy-policy-link">PRIVACY POLICY.</Link>
                        </p>
                    </Col> */}

                    {/* Third Column with Social Icons */}
                    {/* <Col xs={12} sm={12} md={4} lg={4} className="footer-col d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook size={30} className="footer-icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={30} className="footer-icon" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter size={30} className="footer-icon" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <FaTiktok size={30} className="footer-icon" />
                            </a>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </footer>
    );

    // Conditionally wrap with Section if `id` is passed in
    return id ? <Section id={id}>{content}</Section> : content;
}
