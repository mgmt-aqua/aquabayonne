import * as React from 'react';
import './AnnouncementBar.css'

export default function AnnouncementBar({text}) {
    
    return (
        <div className="announcement-bar-container">
            <p className="announcement-bar-text">{text}</p>
        </div>
    );
}