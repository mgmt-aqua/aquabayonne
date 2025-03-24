import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button, Row, Col, Card } from 'react-bootstrap'
import FramerSlide from '../Common/FramerSlide'
import "../../styles/Availability.css"

function Availability() {
    const filterOptions = ['All', 'Studio', '1 Bed', '2 Bed'];
    const inventoryOptions = [{
        id: "studio1",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    }, {
        id: "studio2",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    }, {
        id: "studio3",
        type: "Studio",
        bedrooms: "Studio",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    }, {
        id: "1bed1",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    }, {
        id: "1bed2",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    }, {
        id: "1bed3",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    },
    {
        id: "1bed4",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    },
    {
        id: "1bed5",
        type: "1 Bed",
        bedrooms: "1",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    },
    {
        id: "2bed1",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    },
    {
        id: "2bed2",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "1",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    },
    {
        id: "2bed3",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "2",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
    },
    {
        id: "2bed4",
        type: "2 Bed",
        bedrooms: "2",
        bathrooms: "2",
        floorplan: "Some Random Floor Plan Will Go Here",
        gallery: ["some", "images", "will", "go", "here"]
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
                                <Col sm={12} md={6} lg={4} key={index}>
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
                                                <Card.Title className="availability-card-title">{item.type}</Card.Title>
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
