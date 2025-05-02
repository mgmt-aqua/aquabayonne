// React Imports
import React from 'react';

// Component Imports
import FramerSlide from '../Common/FramerSlide';
import InformationPage from '../Common/InformationPage';
import QuoteHero from '../Common/QuoteHero';
import InformationGrid from '../Common/InformationGrid';
import MapComponent from './MapComponent';

// Configuration Imports
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import { neighborhoodHighlights } from '../../configuration/neighborhood';

// Image Imports
import coverImage from '../../img/neighborhood_cover.jpg';

// Style Imports
import './NeighborhoodInformationPage.css';


export default function NeighborhoodInformationPage() {
    return (
        <div className="neighborhood-information-page">
            <FramerSlide text="Neighborhood" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Neighborhood'} subText={"Embrace Our Vibrant Energy and Lifestyle"} img={coverImage} imgStyles={'neighborhood-cover-img'}>
                <div className="neighborhood-highlights">
                    <InformationGrid data={neighborhoodHighlights} />
                </div>
                <QuoteHero quote={"Luxury Meets Serenity"} />
                <div className='neighborhood-map-container'>
                    <MapComponent />
                </div>
            </InformationPage>
        </div>
    );
}