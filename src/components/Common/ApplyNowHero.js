import * as React from 'react';
import './ApplyNowHero.css'
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Row, Col } from 'react-bootstrap';


export default function ApplyNowHero() {
    
    return (
        <AnimatePresence>
        <div className="apply-now-hero">
            <h1 className="apply-now-hero-text">Your Perfect Apartment Awaits – Start the Search Now</h1>
            <Button className='apply-now-hero-button'>Apply Now</Button>
            {/* <Row>
            <Col key={1} xs={12} sm={12} md={6} lg={6} className="mb-4 apply-now-hero-text-col">
                
            </Col>
            <Col key={2} xs={12} sm={12} md={6} lg={6} className="mb-4 apply-now-hero-button-col">
                
            </Col>
            </Row> */}
        </div>
        </AnimatePresence>
        
    );
}