import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Section from "../Common/Section";
import "./Footer.css";
import img from "../../img/aqua-logo-white.png";

export default function Footer({ id }) {
    // If `id` is provided, wrap the content in a Section component
    const content = (
        <footer className="bg-dark text-white py-4 d-flex align-items-center justify-content-center footer-container">
            <Container className="text-center">
                <Row>
                    <Col>
                        <img 
                            src={img} 
                            alt="Aqua Bayonne logo" 
                            className="mb-3 footer-logo" 
                        />
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
                            Copyright ©2025 Aqua Bayonne. All Rights Reserved. All trademarks are the property of their respective holders.
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

    // Conditionally wrap with Section if `id` is passed in
    return id ? <Section id={id}>{content}</Section> : content;
}
