import React, { useEffect, useState } from "react";

// Routing
import { Link, useLocation } from "react-router-dom";

// Bootstrap Components
import { Navbar, Nav, Container, Button, Offcanvas } from "react-bootstrap";

// Icons
import { MdEmail, MdPhone } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

// Assets
import img from "../../img/aqua-logo-white.png";

// Styles
import "./Navbar.css";

export default function ResponsiveCenteredNavbar() {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [navbarStyle, setNavbarStyle] = useState('transparent');
  const [isHomePath, setHomePath] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setActiveLink(location.pathname);
    setHomePath(location.pathname === '/');
    // Change the navbar style based on the current route
    if (location.pathname === '/' && location.hash === '#home') {
      setNavbarStyle('navbar-transparent');
    } else {
      setNavbarStyle('navbar');
    }
  }, [location]);

  return (
    <AnimatePresence>
      <Navbar bg="transparent" expand="xl" sticky="top">
        <motion.div
          className={navbarStyle}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: .75,
            delay: isHomePath ? 5 : 2,
            type: "spring",
            stiffness: 800,
            damping: 100
          }}
        >
          <Container fluid className="d-flex align-items-center navbar-container">
            {/* Logo on the left */}
            <Navbar.Brand className="navbar-logo me-0 me-lg-4">
              <Link to={{ pathname: '/', hash: '#home' }}>
                <img src={img} alt="Aqua Bayonne" />
              </Link>
            </Navbar.Brand>

            {/* This div will hold the nav and buttons inline with the logo */}
            <motion.div
              className='d-flex justify-content-between align-items-center flex-grow-1'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: isHomePath ? 5 : 2,
                type: "spring",
                stiffness: 800,
                damping: 100
              }}
            >
              {/* Navigation Links next to logo */}
              <Nav className="d-none d-xl-flex align-items-center">
                <Nav.Link as={Link} to="/building" className={activeLink === '/building' ? "navbar-links active" : "navbar-links"}>
                  Building
                </Nav.Link>
                <Nav.Link as={Link} to="/amenities" className={activeLink === '/amenities' ? "navbar-links active" : "navbar-links"}>
                  Amenities
                </Nav.Link>
                <Nav.Link as={Link} to="/residences" className={activeLink === '/residences' ? "navbar-links active" : "navbar-links"}>
                  Residences
                </Nav.Link>
                <Nav.Link as={Link} to="/neighborhood" className={activeLink === '/neighborhood' ? "navbar-links active" : "navbar-links"}>
                  Neighborhood
                </Nav.Link>
              </Nav>

              {/* Buttons on the right */}
              <Nav className="d-none d-xl-flex align-items-center navbar-button-container">
                <a href="mailto:info@aquabayonne.com" className="navbar-email-icon">
                  <MdEmail />
                </a>
                <a href="tel:555-555-5555" className="navbar-phone-icon">
                  <MdPhone />
                </a>
                <Nav.Link as={Link} to="/inquire" className="book-tour-link">
                  <Button className="book-tour-btn">Book A Tour</Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/contact-us" className="contact-us-link">
                  <Button className="contact-us-btn">Contact Us</Button>
                </Nav.Link>
              </Nav>
            </motion.div>

            {/* Mobile Toggle Button */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={handleShow}
              className="d-xl-none navbar-toggler order-3"
            />

            {/* Mobile Offcanvas Menu */}
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
                    Aqua Bayonne
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3 mobile-menu-body">
                    <Nav.Link as={Link} to="/#home" onClick={handleClose}>
                      Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/building" onClick={handleClose}>
                      Building
                    </Nav.Link>
                    <Nav.Link as={Link} to="/amenities" onClick={handleClose}>
                      Amenities
                    </Nav.Link>
                    <Nav.Link as={Link} to="/residences" onClick={handleClose}>
                      Residences
                    </Nav.Link>
                    <Nav.Link as={Link} to="/neighborhood" onClick={handleClose}>
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
        </motion.div>
      </Navbar>
    </AnimatePresence>
  );
}
