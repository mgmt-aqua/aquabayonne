import * as React from 'react';
import './ApplyNowHero.css'
import { Button } from 'react-bootstrap';


export default function ApplyNowHero() {
    
    return (
        <div className="apply-now-hero">
            <h1 className="apply-now-hero-text">Ready to move in? Browse our available apartments and apply today!</h1>
            <Button className='apply-now-hero-button'>Apply Now</Button>
        </div>
    );
}