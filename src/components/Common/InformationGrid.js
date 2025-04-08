import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import './InformationGrid.css'

export default function InformationGrid({ data }) {
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

    const size = windowWidth < 576 ? "mobile" : "desktop";

    return (
        <div className="information-grid-container">
            <Row className="information-grid-row">
                {data.map((information, index) => {
                    if (index % 2 === 0 && size === 'desktop') {
                        return (<><Col key={information.title + 1} xs={12} sm={12} md={12} lg={6} className="information-grid-text-container">
                            <div className="information-grid-text">
                                <p className='information-grid-title-text'>{information.title}</p>
                                {information.content.map((content, index) => {
                                    return <p key={index}>{content}</p>
                                })}
                            </div>
                        </Col>
                            <Col key={information.title + 2} xs={12} sm={12} md={6} lg={6} className="information-grid-img-comtainer">
                                <Image src={information.image} className="information-grid-img" />
                            </Col></>)
                    }
                    return (<><Col key={information.title + 3} xs={12} sm={12} md={6} lg={6} className="information-grid-img-comtainer">
                        <Image src={information.image} className="information-grid-img" />
                    </Col>
                        <Col key={information.title + 4} xs={12} sm={12} md={12} lg={6} className="information-grid-text-container">
                            <div className="information-grid-text">
                                <p className='information-grid-title-text'>{information.title}</p>
                                {information.content.map((content, index) => {
                                    return <p key={index}>{content}</p>
                                })}
                            </div>
                        </Col></>)
                })}
            </Row>
        </div>
    );
}