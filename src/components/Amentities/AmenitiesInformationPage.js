import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';

import './AmenitiesInformationPage.css'

export default function AmenitiesInformationPage() {

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
        <div className="amenities-information-page">
            <FramerSlide text="Our Amenities" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Our Amenities'} subText={"Elevate Your Lifestyle with Unmatched Amenities"}>

            </InformationPage>
        </div>
    );
}