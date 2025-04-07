import React, { useState, useEffect } from 'react';
import FramerSlide from '../Common/FramerSlide'
import InformationPage from '../Common/InformationPage';
import { desktopStyles, mobileStyles } from '../../configuration/framer-slide-styles';
import { Row, Col, Card, Image } from 'react-bootstrap'
import QuoteHero from '../Common/QuoteHero'
import ApplyNowHero from '../Common/ApplyNowHero'

import coverImage from '../../img/amemities/amenities_club_room.png'
import amenitiesGymImage from '../../img/amemities/amenities_gym.png'
import './AmenitiesInformationPage.css'

// Images for gallery
import amenitiesClubRoom from '../../img/amemities/amenities_club_room.png'
import amenitiesGym from '../../img/amemities/amenities_gym.png'
import amenitiesRendering from '../../img/amemities/amenities_cover.png'

export default function AmenitiesInformationPage() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    const size = windowWidth < 576 ? "small" : windowWidth < 1200 ? "medium" : "large";

    const amenitiesList = ["Amenities 1", "Amenities 2", "Amenities 3", "Amenities 4", "Amenities 5"]
    const amenitiesList2 = ["Amenities 6", "Amenities 7", "Amenities 8", "Amenities 9", "Amenities 10"]
    const amenitiesList3 = ["Amenities 11", "Amenities 12", "Amenities 13", "Amenities 14", "Amenities 15"]
    const amenitiesList4 = ["Amenities 16", "Amenities 17", "Amenities 18", "Amenities 19", "Amenities 20"]
    const images = [
    { src: amenitiesClubRoom, alt: 'Image 1' },
    { src: amenitiesClubRoom, alt: 'Image 2' },
    { src: amenitiesClubRoom, alt: 'Image 3' },
    { src: amenitiesGym, alt: 'Image 4' },
    { src: amenitiesGym, alt: 'Image 5' },
    { src: amenitiesGym, alt: 'Image 6' },
    { src: amenitiesRendering, alt: 'Image 7' },
    { src: amenitiesRendering, alt: 'Image 8' },
    { src: amenitiesRendering, alt: 'Image 9' }];

    const amenitiesHighlightData = [{
        title: "Rooftop Terrace with Stunning NYC Skyline Views",
        content: "Our luxurious rooftop terrace offers an unparalleled experience with breathtaking views of the iconic New York City skyline. Whether you're looking to unwind after a long day or entertain guests, the spacious lounge area provides the perfect setting. With comfortable seating and an inviting atmosphere, you can relax while taking in the sparkling city lights and iconic landmarks that make NYC truly one-of-a-kind. It’s more than just an amenity – it’s your personal retreat in the heart of the city.",
        image: coverImage,
        imageAlt: 'Some Image Alt'
    },{
        title: "Exclusive Club Room with Full-Service Bar",
        content: "Step into our stylish club room, where sophistication meets relaxation. This inviting space features a full-service bar, perfect for entertaining guests or enjoying a quiet evening with a drink in hand. Whether you're hosting a gathering or simply unwinding after a busy day, the club room offers a cozy and upscale atmosphere. With modern furnishings and a chic design, it’s the ideal spot to relax, socialize, or celebrate in style.",
        image: coverImage,
        imageAlt: 'Some Image Alt'
    },{
        title: "Spacious Courtyard with Lawn, BBQ Grills, and TVs",
        content: "Our vibrant courtyard offers the ultimate outdoor experience with expansive lawn space, perfect for relaxation or recreational activities. Equipped with BBQ grills and plenty of seating, it's an ideal setting for hosting cookouts and enjoying meals with friends and family. Plus, with strategically placed TVs, you can catch your favorite shows or sports games while soaking up the sun. Whether you're grilling, lounging, or simply enjoying the outdoors, the courtyard provides a welcoming and versatile space for all occasions.",
        image: coverImage,
        imageAlt: 'Some Image Alt'
    },{
        title: "State-of-the-Art Luxury Gym",
        content: "Our luxury gym is designed to elevate your fitness routine with top-of-the-line equipment and a sleek, modern atmosphere. Featuring a wide range of machines, free weights, and specialized workout areas, it's the perfect space for all fitness levels. Whether you're looking to lift, run, or practice yoga, our gym offers the tools and environment you need to stay active and energized. With clean, spacious facilities and a motivating ambiance, you'll feel inspired to achieve your fitness goals every time you work out.",
        image: coverImage,
        imageAlt: 'Some Image Alt'
    }]

return (
    <div className="amenities-information-page">
        <FramerSlide text="Amenities" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
        <InformationPage pageTitle={'Amenities'} subText={"Elevate Your Lifestyle With Unmatched Amenities"} img={coverImage} imgStyles={'amenitities-information-page-cover-img'}>
            <Row className="amenities-information-page-section-1-row">
                {amenitiesHighlightData.map((highlight, index) => {
                    if(index % 2 === 0 && (size === 'medium' || size === 'large' )) {
                        return (<><Col key={1} xs={12} sm={12} md={12} lg={6} className="amenities-information-grid-text-container">
                            <div className="amenities-information-grid-text">
                                <p className='amenities-information-grid-title-text'>{highlight.title}</p>
                                <p>{highlight.content}</p>
                            </div>
                        </Col>
                        <Col key={2} xs={12} sm={12} md={6} lg={6} className="section-1-col amenities-information-grid-img-comtainer">
                            <Image src={highlight.image} className="amenities-information-grid-img" />
                        </Col></>)
                    }
                    return (<><Col key={3} xs={12} sm={12} md={6} lg={6} className="section-1-col amenities-information-grid-img-comtainer">
                        <Image src={highlight.image} className="amenities-information-grid-img" />
                    </Col>
                    <Col key={1} xs={12} sm={12} md={12} lg={6} className="amenities-information-grid-text-container">
                        <div className="amenities-information-grid-text">
                            <p className='amenities-information-grid-title-text'>{highlight.title}</p>
                            <p>{highlight.content}</p>
                        </div>
                    </Col></>)
                })}
            {/*                
                <Col key={1} xs={12} sm={12} md={12} lg={6} className="building-information-grid-text-container">
                    <div className="building-information-grid-text">
                        <p className='building-information-grid-title-text'>Our Story</p>
                        <p>Nestled near the picturesque shores of the Hudson River in Bayonne, NJ, AQUA offers an unparalleled living experience that redefines luxury. AQUA is thoughtfully designed to provide residents with a harmonious blend of comfort, elegance, and modernity.</p>
                        <p>Our apartment units range from comfortable studios to expansive two-bedroom layouts, our units feature large windows that boast breathtaking views of the Hudson River, the iconic New York City skyline, and the beautiful Bayonne golf course.</p>
                    </div>
                </Col>
                <Col key={2} xs={12} sm={12} md={6} lg={6} className="section-1-col building-information-grid-img-comtainer">
                    <Image src={image3} className="building-information-grid-img" />
                </Col>
                <Col key={3} xs={12} sm={12} md={6} lg={6} className="section-1-col building-information-grid-img-comtainer">
                    <Image src={buildingGif} className="building-information-grid-img" />
                </Col>
                <Col key={1} xs={12} sm={12} md={12} lg={6} className="building-information-grid-text-container">
                    <div className="building-information-grid-text">
                        <p className='building-information-grid-title-text'>Our Journey</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta.</p>
                    </div>
                </Col> */}
            </Row>
            <QuoteHero quote={"Where Luxury Meets Serenity"} />
            {/* <div className="amenities-information-page-highlight-container">
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
            </div> */}
            <div>
                <h1 className="amenities-information-page-list-title">Amenities & Services</h1>
                <div className="amenities-information-page-list-container">
                    <Row className="amenities-information-page-list-row">
                        {/* First Column */}
                        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                            <ul className='list-unstyled'>
                                {amenitiesList.map((amenity, index) => (
                                    <li key={index} className="mb-3">{amenity}</li>
                                ))}
                            </ul>
                        </Col>

                        {/* Second Column */}
                        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                            <ul className='list-unstyled'>
                                {amenitiesList2.map((amenity, index) => (
                                    <li key={index} className="mb-3">{amenity}</li>
                                ))}
                            </ul>
                        </Col>

                        {/* Third Column */}
                        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                            <ul className='list-unstyled'>
                                {amenitiesList3.map((amenity, index) => (
                                    <li key={index} className="mb-3">{amenity}</li>
                                ))}
                            </ul>
                        </Col>


                        {/* Fourth Column */}
                        <Col xs={6} sm={6} md={2} lg={2} xl={2}>
                            <ul className='list-unstyled'>
                                {amenitiesList4.map((amenity, index) => (
                                    <li key={index} className="mb-3">{amenity}</li>
                                ))}
                            </ul>
                        </Col>
                    </Row>
                </div>
                <Row className="g-4 amenities-image-gallery-row">
                    {images.map((image, index) => (
                        <Col xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <Card.Img variant="top" src={image.src} alt={image.alt} className="amenities-image-gallery-image"/>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
            <ApplyNowHero />
        </InformationPage>
    </div>
);
}