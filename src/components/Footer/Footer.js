import React, { Component } from "react"
import { Container, Row, Col } from 'react-bootstrap';

import Section from "../Common/Section"
import "../../styles/Footer.css"
import img from "../../img/aqua-logo-white.png";


class Footer extends Component {
    render() {
        return (
            <Section id="footer">
                <footer className="bg-dark text-white py-4 d-flex align-items-center justify-content-center footer-container">
                    <Container className="text-center">
                        <Row>
                            <Col>
                                <img src={img} alt="Logo" className="mb-3 footer-logo" />
                                <p className="footer-address">54 Flagship Street, Bayonne, NJ 07002</p>

                                <p className="footer-phone-number">Phone: (201) 561-0066</p>
                                <p className="footer-email">Email: leasing@auqabayonne.com</p>
                                <p className="footer-hours">Mon - Sat: 10 am - 6 pm</p>
                                <p className="footer-hours">Sun: 10 am - 5:30 pm</p>

                                <p className="footer-rights">Copyright ©2025 Aqua Bayonne. All Rights Reserved. All trademarks are the property of their respective holders.</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Section>
        )
    }
}

export default Footer
