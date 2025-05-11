import React from "react";

// React Router
import { Link } from "react-router-dom";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

// Local Components
import Section from "../Common/Section";

// Assets
import logo from "../../img/aqua-logo-white.png";
import equalHousingLogo from "../../img/equal-housing.png";

// Styles
import "./Footer.css";

export default function Footer({ id }) {
    const content = (
        <footer className="bg-dark text-white py-4 d-flex align-items-center justify-content-center footer-container">
            <Container fluid className="text-center px-0">
                <Row className="d-flex justify-content-center align-items-center g-0">
                    {/* First Column with Inline Logos */}
                    <Col xs={12} sm={12} md={12} lg={4} className="footer-col d-flex flex-column align-items-center justify-content-center">
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
                    </Col>

                    {/* Second Column with Address, Contact Info, and Hours */}
                    <Col xs={12} sm={12} md={12} lg={4} className="footer-col d-flex flex-column align-items-center justify-content-center">
                        <p className="footer-address">54 Flagship Street, Bayonne, NJ 07002</p>

                        <p className="footer-contact-information">
                            <a href="tel:+12015610066">(201) 322-2999</a> | <a href="mailto:leasing@aquabayonne.com">leasing@aquabayonne.com</a>
                        </p>
                    </Col>

                    {/* Third Column with Social Icons */}
                    <Col xs={12} sm={12} md={12} lg={4} className="footer-col d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center gap-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook size={30} className="footer-icon" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram size={30} className="footer-icon" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                                <FaTiktok size={30} className="footer-icon" />
                            </a>
                        </div>
                    </Col>
                </Row>
                <p className="footer-rights">
                    Copyright ©2025 AQUA Bayonne. All Rights Reserved. All trademarks are the property of their respective holders. <Link to="/privacy" className="privacy-policy-link">PRIVACY POLICY.</Link>
                </p>
            </Container>
        </footer>
    );

    // Conditionally wrap with Section if `id` is passed in
    return id ? <Section id={id}>{content}</Section> : content;
}
