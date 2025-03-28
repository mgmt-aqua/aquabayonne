import * as React from 'react';
import './ApplyNowHero.css'

import './QuoteHero.css'


export default function QuoteHero({ quote }) {
    
    return (
        <div className="quote-hero-container">
            <div className="quote-line"></div>
            <p className="quote-hero-text">{quote}</p>
            <div className="quote-line"></div>
        </div>
    );
}