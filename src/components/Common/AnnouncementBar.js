import * as React from 'react';
import './AnnouncementBar.css'
import { Link } from 'react-router-dom';

export default function AnnouncementBar({ text, link }) {

    return (
        <div className="announcement-bar-container">
            {(link &&
                <Link to={link} className="announcement-bar-link"><p className="announcement-bar-text">{text}</p></Link>)
             || <p className="announcement-bar-text">{text}</p>}

        </div>
    );
}