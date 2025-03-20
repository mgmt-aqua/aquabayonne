import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from "../../img/aqua-logo-white.png";
import '../../styles/Navbar.css';

function ResponsiveCenteredNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid className="d-flex justify-content-between align-items-center navbar">
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleShow}
          className="d-lg-none navbar-toggler"
        />

        {/* Left Links */}
        <Nav className="d-none d-lg-flex align-items-center">
        <Nav.Link as={Link} to="/inquire" className="book-tour-link">
            <Button className="book-tour-btn">Book A Tour</Button>
          </Nav.Link>
          <Nav.Link as={Link} to="/building" className="navbar-links">
            Building
          </Nav.Link>
          <Nav.Link as={Link} to="/amenities" className="navbar-links">
            Amenities
          </Nav.Link>
        </Nav>

        <Navbar.Brand className="mx-auto navbar-logo">
          <Link to={{ pathname: '/', hash: '#home' }}>
            <img src={img} alt="Aqua Bayonne" />
          </Link>
        </Navbar.Brand>

        {/* Right Buttons */}
        <Nav className="d-none d-lg-flex align-items-center">
          <Nav.Link as={Link} to="/residences" className="navbar-links">
            Residences
          </Nav.Link>
          <Nav.Link as={Link} to="/neighborhood" className="navbar-links">
            Neighborhood
          </Nav.Link>
          <Nav.Link as={Link} to="/contact-us" className="contact-us-link">
            <Button className="contact-us-btn">Contact Us</Button>
          </Nav.Link>
        </Nav>

        {show && (
          <Navbar.Offcanvas
            id="responsive-navbar-nav"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel" className="mobile-menu-title">
                Aqua Bayone
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 mobile-menu-body">
                <Nav.Link as={Link} to="/#home" onClick={handleClose}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/building" className="left-link">
                  Building
                </Nav.Link>
                <Nav.Link as={Link} to="/amenities" className="left-link">
                  Amenities
                </Nav.Link>
                <Nav.Link as={Link} to="/residences" className="left-link">
                  Residences
                </Nav.Link>
                <Nav.Link as={Link} to="/neighborhood" className="left-link">
                  Neighborhood
                </Nav.Link>
                <Nav.Link as={Link} to="/inquire" onClick={handleClose}>
                  Book a Tour
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us" onClick={handleClose}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        )}
      </Container>
    </Navbar>
  );
}

export default ResponsiveCenteredNavbar;