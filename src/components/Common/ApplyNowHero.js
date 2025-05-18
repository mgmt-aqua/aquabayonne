import * as React from 'react';
import './ApplyNowHero.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function ApplyNowHero() {
    
    return (
        <div className="apply-now-hero">
            <h1 className="apply-now-hero-text">Ready to Move In? Browse Our Available Apartments and Apply Today!</h1>
            <Link to={'/residences'}><Button className='apply-now-hero-button'>Apply Now</Button></Link>
        </div>
    );
}