import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button, Row, Col, Card } from 'react-bootstrap'
import FramerSlide from '../Common/FramerSlide'
import "../../styles/Availability.css"

// Floor Plans
import Studio1 from '../../assets/Floor Plans/S1.jpg'
import Studio2 from '../../assets/Floor Plans/S2.jpg'
import Studio3 from '../../assets/Floor Plans/S3.jpg'
import Studio4 from '../../assets/Floor Plans/S4.jpg'

import OneBed1 from '../../assets/Floor Plans/A1.jpg'
import OneBed2 from '../../assets/Floor Plans/A2.jpg'
import OneBed3 from '../../assets/Floor Plans/A3.jpg'
import OneBed4 from '../../assets/Floor Plans/AD1.jpg'

import TwoBed1 from '../../assets/Floor Plans/B1.jpg'
import TwoBed2 from '../../assets/Floor Plans/B2.jpg'
import TwoBed3 from '../../assets/Floor Plans/B3.jpg'
import TwoBed4 from '../../assets/Floor Plans/B4.jpg'

function Availability() {
    const filterOptions = ['All', 'Studio', '1 Bed', '2 Bed'];
    const inventoryOptions = [{
        id: "S1",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio1
    }, {
        id: "S2",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio2
    }, {
        id: "S3",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio3
    },{
        id: "S4",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: Studio4
    }, {
        id: "A1",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed1
    }, {
        id: "A2",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed2
    }, {
        id: "A3",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed3
    },
    {
        id: "AD1",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: OneBed4
    },
    {
        id: "B1",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "1",
        floorplan: TwoBed1
    },
    {
        id: "B2",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "1",
        floorplan: TwoBed2
    },
    {
        id: "B3",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "2",
        floorplan: TwoBed3
    },
    {
        id: "B4",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "2",
        floorplan: TwoBed4
    }]

    const [activeFilter, setActiveFilter] = useState('All');
    const [activeInventoryOptions, setActiveInventoryOptions] = useState(inventoryOptions);

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

    const handleClickFilter = (item) => {
        setActiveFilter(item)
        const filteredInventory = item === 'All' ? inventoryOptions : inventoryOptions.filter(inventory => inventory.type === item);
        setActiveInventoryOptions(filteredInventory)
    }

    return (
        <AnimatePresence>
            <FramerSlide text="Availability" desktopTextStyles={desktopStyles} mobileTextStyles={mobileStyles} />
            <div className="availability-container">
                <h1 className="availability-main-text">Our Availability</h1>
                <div className="button-wrapper">
                    {filterOptions.map(item => {
                        return <Button
                            key={item}
                            className={activeFilter === item ? "button-filters-btn active" : "button-filters-btn"}
                            onClick={() => handleClickFilter(item)}
                        >{item}</Button>
                    })}
                </div>
                <div className="availability-inventory-container">
                    <Row>
                        <AnimatePresence>
                            {activeInventoryOptions.map((item, index) => (
                                <Col sm={12} md={6} lg={6} key={index}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 50 }} // For when an item is removed
                                        layout // This prop ensures smooth layout transitions
                                        transition={{
                                            type: "spring",
                                            stiffness: 800,
                                            damping: 100,
                                            delay: index * 0.1
                                        }}
                                    >
                                        <Card className="mb-4 availability-card">
                                            <Card.Body>
                                                <Card.Title className="availability-card-title">Residence {item.id}</Card.Title>
                                                <Card.Text>
                                                    <strong>Bedrooms:</strong>{item.bedrooms}
                                                </Card.Text>
                                                <Card.Text>
                                                    <strong>Bathrooms:</strong> {item.bathrooms}
                                                </Card.Text>
                                            </Card.Body>
                                            <Button className="availability-card-btn">View Details</Button>
                                        </Card>
                                    </motion.div>
                                </Col>
                            ))}
                        </AnimatePresence>
                    </Row> 
                    </div>
                </div>
        </AnimatePresence>
    )
}

export default Availability