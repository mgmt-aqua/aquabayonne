import React, { useEffect, useRef, useState } from 'react';
import { Col, Row } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap';
import useWindowSize from '../../hooks/useWindowSize'

import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // For Leaflet CSS styles
import 'leaflet-providers'; // For additional map tile layers
import './MapComponent.css';

// This forces the marker icon to be loaded correctly.
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function MapComponent() {
    const mapContainer = useRef(null);
    const [activeKey, setActiveKey] = useState(null);
    const [map, setMap] = useState(null);
    const { windowSize } = useWindowSize();
    const mapWidth = windowSize === "mobile" ? '100%' : '75%'

    const mapData = [{
        accordionDetails: {
            id: "parks",
            title: "Parks",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 12,
            locations: [{
                name: "James J. Donovan Park",
                coordinates: [40.670540, -74.096501],
                highlight: true,
            },
            {
                name: "Bayonne Park",
                coordinates: [40.679475, -74.101452],
                highlight: true,
            }, {
                name: "Hudson County Park",
                coordinates: [40.679987, -74.116925],
                highlight: true,
            },
            {
                name: "Stephen R. Greg Park",
                coordinates: [40.682526, -74.114650],
                highlight: true,
            }, 
            {
                name: "Liberty State Park",
                coordinates: [40.705805, -74.055368],
                highlight: false
            }]
        }
    },{
        accordionDetails: {
            id: "restaurants",
            title: "Restaurants",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 14,
            locations: [
            {
                name: "Houlihan's",
                coordinates: [40.668299, -74.104428],
                highlight: true,
            }, {
                name: "Wendy's",
                coordinates: [40.668504, -74.106489],
                highlight: true,
            },
            {
                name: "Bubbakoo's Burritos",
                coordinates: [40.667666, -74.105202],
                highlight: true,
            },
            {
                name: "Starbucks",
                coordinates: [40.671992, -74.104402],
                highlight: true,
            }]
        }
    },
    {
        accordionDetails: {
            id: "shopping",
            title: "Shopping",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 16,
            locations: [{
                name: "Costco",
                coordinates: [40.672945, -74.103929],
                highlight: true,
            },
            {
                name: "Lidl",
                coordinates: [40.670828, -74.106556],
                highlight: true,
            }, {
                name: "CVS",
                coordinates: [40.671762, -74.106107],
                highlight: true,
            },
            {
                name: "Stop and Shop",
                coordinates: [40.666865, -74.104591],
                highlight: true,
            }]
        }
    },
    {
        accordionDetails: {
            id: "fitness",
            title: "Fitness",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 14,
            locations: [{
                name: "LA Fitness",
                coordinates: [40.670510, -74.104505],
                highlight: true,
            },
            {
                name: "CKO Kickboxing Bayonne",
                coordinates: [40.672359, -74.110728],
                highlight: true,
            }, {
                name: "Stanlaw Fitness",
                coordinates: [40.670194, -74.112604],
                highlight: true,
            },
            {
                name: "Orange Theory Fitness",
                coordinates: [40.659695, -74.110547],
                highlight: true,
            }]
        }
    },{
        accordionDetails: {
            id: "transit",
            title: "Transit",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 14,
            locations: [{
                name: "AQUA Shuttle to Path",
                coordinates: [40.671888, -74.100544],
                highlight: true
            },
                
                {
                name: "34 St/Hoboken Light Rail Station",
                coordinates: [40.671105, -74.107041],
                highlight: true,
            },
            {
                name: "Port Authority of NY & NJ",
                coordinates: [40.667004, -74.086441],
                highlight: true,
            }, {
                name: "Cape Liberty Cruise Port",
                coordinates: [40.664601, -74.071723],
                highlight: true,
            },
            {
                name: "45th Street Light Rail Station",
                coordinates: [40.678921, -74.102109],
                highlight: true,
            }]
        }
    },
    {
        accordionDetails: {
            id: "schools",
            title: "Schools",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 13,
            locations: [{
                name: "Bayonne High School",
                coordinates: [40.671461, -74.121588],
                highlight: true
            },
                
                {
                name: "Horace Mann Elementary School",
                coordinates: [40.676018, -74.108885],
                highlight: true,
            },
            {
                name: "Philip G. Vroom Elementary School",
                coordinates: [40.666500, -74.116598],
                highlight: true,
            }, {
                name: "Lincoln Community School",
                coordinates: [40.666874, -74.110199],
                highlight: true,
            },
            {
                name: "Washington Elementary School",
                coordinates: [40.683520, -74.108311],
                highlight: true,
            }]
        }
    },
    {
        accordionDetails: {
            id: "healthcare",
            title: "Healthcare",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
        },
        mapDetails: {
            centerCoordinates: [40.670988, -74.100399],
            zoom: 14,
            locations: [{
                name: "CityMD Bayonne Urgent Care",
                coordinates: [40.660522, -74.108488],
                highlight: true
            },
                
            {
                name: "Garden State Healthcare",
                coordinates: [40.668041, -74.112951],
                highlight: true,
            },
            {
                name: "Redefine Healthcare",
                coordinates: [40.675430, -74.107586],
                highlight: true,
            }, {
                name: "Optum Primary Care - Bayonne",
                coordinates: [40.665271, -74.116613],
                highlight: true,
            },
            {
                name: "Broadway Pediatric Center",
                coordinates: [40.662332, -74.119887],
                highlight: true,
            }]
        }
    }]

    useEffect(() => {
        // Initialize the map
        const map = L.map(mapContainer.current, {
            center: [40.670988, -74.100399],
            zoom: 16,
            scrollWheelZoom: false,  // Disable scroll zoom
        });

        // Set the tile layer (you can choose a tile provider)
        L.tileLayer.provider('CartoDB.DarkMatter').addTo(map);

         // Create a custom icon (your logo)
         const logoIcon = L.icon({
            iconUrl: require('../../img/aqua-logo-white.png'),
            iconSize: [70, 20],
            iconAnchor: [20, 25],
            popupAnchor: [0, -50]
        });

        // Add a permanent marker with the custom logo at a specific position
        L.marker([40.670988, -74.100399], { icon: logoIcon })
            .addTo(map)
            .bindPopup('<b>Aqua Bayonne</b>');

        map.zoomControl.setPosition('bottomright');

        setMap(map);
        // Cleanup function to remove map on component unmount
        return () => {
            map.remove();
        };
    }, []);

    const handleAccordionSelect = (key) => {
        setActiveKey(key);

        // Find the selected map data based on activeKey
        const selectedMap = mapData.find(data => data.accordionDetails.id === key);

        if (selectedMap && map) {
            const { centerCoordinates, zoom, locations } = selectedMap.mapDetails;

            // Update the map center and zoom dynamically
            map.setView(centerCoordinates, zoom);

            // Remove all existing markers
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            // Add new markers
            locations.forEach(location => {
                L.marker(location.coordinates).addTo(map).bindPopup(location.name);
            });

             // Create a custom icon (your logo)
         const logoIcon = L.icon({
            iconUrl: require('../../img/aqua-logo-white.png'),
            iconSize: [70, 20],
            iconAnchor: [20, 25],
            popupAnchor: [0, -50]
        });

        // Add a permanent marker with the custom logo at a specific position
        L.marker([40.670988, -74.100399], { icon: logoIcon })
            .addTo(map)
            .bindPopup('<b>Aqua Bayonne</b>');

        map.zoomControl.setPosition('bottomright');
        }

     
    };

    return (
        <div className="map-component-container">
            <Row className="map-component-row">
                <Col xs={12} sm={12} md={6} lg={8} xl={9} className="map-component-map" ref={mapContainer} style={{ width: {mapWidth}, height: '100vh' }}></Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={3} className="map-component-legend">
                    <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
                        {mapData.map((item) => {
                            return(
                            <Accordion.Item eventKey={item.accordionDetails.id} className='map-accordion-item'>
                            <Accordion.Header className='map-accordion-header'>{item.accordionDetails.title}</Accordion.Header>
                            <Accordion.Body className='map-accordion-body'>
                                <ul className="map-accordion-list">
                                    {item.mapDetails.locations?.filter((location) => location.highlight).map((location, index) => {
                                        return (<li className="map-accordion-list-item"><span>0{index+1}</span> {location.name}</li>)
                                    })}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>);
                        })}
                    </Accordion>
                </Col>
            </Row>
        </div>
    );
}