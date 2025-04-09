import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import QuoteHero from '../Common/QuoteHero';
import InformationGrid from '../Common/InformationGrid';

import coverImage from '../../img/neighborhood_cover.jpg'
import './NeighborhoodInformationPage.css'
import MapComponent from './MapComponent';

import neighborhoodGolf from '../../img/neighborhood/neighborhood_golf.jpg';
import neighborhoodWaterfront from '../../img/neighborhood/neighborhood_waterfront.jpg';
import neighborhoodFoodHall from '../../img/neighborhood/neighborhood_food_hall.jpg';
import neighborhoodCostco from '../../img/neighborhood/neighborhood_costco.jpeg';

export default function NeighborhoodInformationPage() {


        const neighborhoodHighlights = [{
            title: "A Golfer’s Paradise, Just Minutes Away",
            content: ["Elevate your lifestyle with exclusive access to a world-class championship golf course just moments from your doorstep. Immerse yourself in lush fairways and scenic greens, offering not only a premier golfing experience but also a serene backdrop for relaxation. Perfect for weekend rounds or casual strolls, this prestigious course blends luxury and leisure seamlessly."],
            image: neighborhoodGolf,
            imageAlt: 'Neighborhood Golf Course'
        },{
            title: "Stunning Waterfront Retreat",
            content: ["Step outside and unwind with breathtaking views along a pristine waterfront walkway. Whether you’re enjoying a morning jog or a peaceful evening stroll, the calm waters and picturesque scenery will become your personal sanctuary. The perfect blend of tranquility and beauty, this idyllic setting offers the luxury of nature, right at your feet."],
            image: neighborhoodWaterfront,
            imageAlt: 'Neighborhood Waterfront Walkway'
        },{
            title: "A Culinary Journey at Your Doorstep",
            content: ["Experience the art of dining with an upscale food hall directly attached to your building, offering an array of gourmet options for every palate. From artisanal dishes to decadent treats, indulge in a world-class culinary experience without ever leaving the comfort of your home. The convenience and elegance of a fine dining experience, just an elevator ride away."],
            image: neighborhoodFoodHall,
            imageAlt: 'Neighborhood Food Hall'
        },{
            title: "Luxury Meets Everyday Convenience",
            content: ["Enjoy the ultimate convenience with Costco just a short walk from your front door. Stock up on everything you need for both everyday essentials and indulgent luxuries, all within walking distance. Whether you’re preparing for a dinner party or simply running errands, this easy access to one of the world’s most trusted retailers brings practical luxury to your lifestyle."],
            image: neighborhoodCostco,
            imageAlt: 'Neighborhood Costco'
        }]

    return (
        <div className="neighborhood-information-page">
            <FramerSlide text="Neighborhood" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Neighborhood'} subText={"Embrace Our Vibrant Energy and Lifestyle"} img={coverImage} imgStyles={'neighborhood-cover-img'}>
                <div className="neighborhood-highlights">
                    {/* <h1 className="neighborhood-highlights-title">Our Neighborhood</h1> */}
                     <InformationGrid data={neighborhoodHighlights} />
                </div>
                <QuoteHero quote={"Where Luxury Meets Serenity"} />
                <div className='neighborhood-map-container'>
                {/* <h1 className="neighborhood-map-title">Our Neighborhood</h1> */}
                <MapComponent />
                </div>
            </InformationPage>
        </div>
    );
}