import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';

import coverImage from '../../img/neighborhood_cover.jpg'
import './NeighborhoodInformationPage.css'

export default function NeighborhoodInformationPage() {

    return (
        <div className="neighborhood-information-page">
            <FramerSlide text="Our Neighborhood" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Our Neighborhood'} img={coverImage} imgStyles={'neighborhood-cover-img'}></InformationPage>
        </div>
    );
}