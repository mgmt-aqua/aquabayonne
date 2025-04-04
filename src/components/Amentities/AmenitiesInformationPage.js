import * as React from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import {Row, Col} from 'react-bootstrap'

import coverImage from '../../img/amemities/amenities_club_room.png'
import amenitiesGymImage from '../../img/amemities/amenities_gym.png'
import './AmenitiesInformationPage.css'

export default function AmenitiesInformationPage() {

    return (
        <div className="amenities-information-page">
            <FramerSlide text="Amenities" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <InformationPage pageTitle={'Amenities'} subText={"Elevate Your Lifestyle With Unmatched Amenities"} img={coverImage} imgStyles={'amenitities-information-page-cover-img'}>
                <div className="amenities-information-page-highlight-container">
                    <h1 className="amenities-information-page-highlight-title">Communtity Amenities</h1>
                    <Row className="amenities-information-highlight-row">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-text-left">
                            <h3>Rooftop Terrace with Stunning NYC Skyline Views</h3>
                            <p>Our luxurious rooftop terrace offers an unparalleled experience with breathtaking views of the iconic New York City skyline. Whether you're looking to unwind after a long day or entertain guests, the spacious lounge area provides the perfect setting. With comfortable seating and an inviting atmosphere, you can relax while taking in the sparkling city lights and iconic landmarks that make NYC truly one-of-a-kind. It’s more than just an amenity – it’s your personal retreat in the heart of the city.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-image-right">
                            <div className="amenities-highlight-image-container-right">
                                <img src={coverImage} alt='Some Text' />
                            </div>
                        </Col>
                    </Row>
                    <Row className="amenities-information-highlight-row">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-image-left">
                            <div className="amenities-highlight-image-container-left">
                                <img src={coverImage} alt='Some Text' />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-text-right">
                            <h3>Exclusive Club Room with Full-Service Bar</h3>
                            <p>Step into our stylish club room, where sophistication meets relaxation. This inviting space features a full-service bar, perfect for entertaining guests or enjoying a quiet evening with a drink in hand. Whether you're hosting a gathering or simply unwinding after a busy day, the club room offers a cozy and upscale atmosphere. With modern furnishings and a chic design, it’s the ideal spot to relax, socialize, or celebrate in style.</p>
                        </Col>
                    </Row>
                    <Row className="amenities-information-highlight-row">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-text-left">
                            <h3>Spacious Courtyard with Lawn, BBQ Grills, and TVs</h3>
                            <p>Our vibrant courtyard offers the ultimate outdoor experience with expansive lawn space, perfect for relaxation or recreational activities. Equipped with BBQ grills and plenty of seating, it's an ideal setting for hosting cookouts and enjoying meals with friends and family. Plus, with strategically placed TVs, you can catch your favorite shows or sports games while soaking up the sun. Whether you're grilling, lounging, or simply enjoying the outdoors, the courtyard provides a welcoming and versatile space for all occasions.</p>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-image-right">
                            <div className="amenities-highlight-image-container-right">
                                <img src={coverImage} alt='Some Text' />
                            </div>
                        </Col>
                    </Row>
                    <Row className="amenities-information-highlight-row">
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-image-left">
                            <div className="amenities-highlight-image-container-left">
                                <img src={amenitiesGymImage} alt='Some Text' />
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} className="amenities-highlight-text-right">
                        <h3>State-of-the-Art Luxury Gym</h3>
                        <p>Our luxury gym is designed to elevate your fitness routine with top-of-the-line equipment and a sleek, modern atmosphere. Featuring a wide range of machines, free weights, and specialized workout areas, it's the perfect space for all fitness levels. Whether you're looking to lift, run, or practice yoga, our gym offers the tools and environment you need to stay active and energized. With clean, spacious facilities and a motivating ambiance, you'll feel inspired to achieve your fitness goals every time you work out.</p>
                        </Col>
                    </Row>
                </div>
                <div className="amenities-information-page-list-container">
                    <h1 className="amenities-information-page-list-title">Amenities & Services</h1>

                </div>
            </InformationPage>
        </div>
    );
}