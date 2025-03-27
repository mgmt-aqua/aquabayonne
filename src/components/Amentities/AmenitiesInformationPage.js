import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';

import './AmenitiesInformationPage.css'

export default function AmenitiesInformationPage() {

    return (
        <div className="amenities-information-page">
            <FramerSlide text="Our Amenities" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Our Amenities'} subText={"Elevate Your Lifestyle with Unmatched Amenities"}>

            </InformationPage>
        </div>
    );
}