import * as React from 'react';
import './ApplyNowHero.css'
import { Button } from 'react-bootstrap';


export default function ApplyNowHero() {
    
    return (
        <div className="apply-now-hero">
            <h1 className="apply-now-hero-text">Ready to Move In? Browse Our Available Apartments and Apply Today!</h1>
            <Button className='apply-now-hero-button'>Apply Now</Button>
        </div>
    );
}