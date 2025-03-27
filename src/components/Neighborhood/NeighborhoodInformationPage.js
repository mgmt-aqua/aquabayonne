import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';

import './NeighborhoodInformationPage'

export default function NeighborhoodInformationPage() {

    // Styles for transition page
    const baseStyles = {
        color: "transparent",
        textTransform: "uppercase",
        fontWeight: "700",
        WebkitTextStroke: "3px #D0D3D4",
        textStroke: "3px #D0D3D4"
    }

    const desktopStyles = {
        ...baseStyles,
        fontSize: "8rem"
    }

    const mobileStyles = {
        ...baseStyles,
        fontSize: "3rem"
    }

    return (
        <div className="neighborhood-information-page">
            <FramerSlide text="Our Neighborhood" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Our Neighborhood'}></InformationPage>
        </div>
    );
}