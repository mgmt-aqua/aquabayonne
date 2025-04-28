import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import useWindowSize from '../../hooks/useWindowSize'
import './InformationGrid.css'
import FramerTextReveal from './Framer/FramerTextReveal';

export default function InformationGrid({ data }) {
    const { windowSize } = useWindowSize();

    return (
        <div className="information-grid-container">
            <Row className="information-grid-row">
                {data.map((information, index) => {
                    if (index % 2 === 0 && windowSize === 'desktop') {
                        return (<><Col key={information.title + 1} xs={12} sm={12} md={12} lg={5} className="information-grid-text-container">
                            <div className="information-grid-text">
                                <FramerTextReveal><p className='information-grid-title-text'>{information.title}</p></FramerTextReveal>
                                {information.content.map((content, index) => {
                                    return <FramerTextReveal delay={.35}><p key={index}>{content}</p></FramerTextReveal>
                                })}
                            </div>
                        </Col>
                            <Col key={information.title + 2} xs={12} sm={12} md={6} lg={7} className="information-grid-img-comtainer">
                            <FramerTextReveal><Image src={information.image} className="information-grid-img" /></FramerTextReveal>
                            </Col></>)
                    }
                    return (<><Col key={information.title + 3} xs={12} sm={12} md={6} lg={7} className="information-grid-img-comtainer">
                        <FramerTextReveal><Image src={information.image} className="information-grid-img" /></FramerTextReveal>
                    </Col>
                        <Col key={information.title + 4} xs={12} sm={12} md={12} lg={5} className="information-grid-text-container">
                            <div className="information-grid-text">
                            <FramerTextReveal><p className='information-grid-title-text'>{information.title}</p></FramerTextReveal>
                                {information.content.map((content, index) => {
                                    return <FramerTextReveal delay={.35}><p key={index}>{content}</p></FramerTextReveal>
                                })}
                            </div>
                        </Col></>)
                })}
            </Row>
        </div>
    );
}