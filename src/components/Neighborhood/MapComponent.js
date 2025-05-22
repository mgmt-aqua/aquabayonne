import React, { useEffect, useRef, useState } from 'react';
import { Accordion, Col, Row } from 'react-bootstrap';
import useWindowSize from '../../hooks/useWindowSize';

import { mapData } from '../../configuration/neighborhood-map';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-providers';
import './MapComponent.css';

// Fix for loading marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom Logo Marker
const createLogoIcon = () =>
    L.icon({
        iconUrl: require('../../img/aqua-logo-white.png'),
        iconSize: [70, 20],
        iconAnchor: [20, 25],
        popupAnchor: [0, -50],
    });

// Map center (used in multiple places)
const MAP_CENTER = [40.670988, -74.100399];

export default function MapComponent() {
    const mapContainer = useRef(null);
    const [activeKey, setActiveKey] = useState(null);
    const [map, setMap] = useState(null);
    const { windowSize } = useWindowSize();

    useEffect(() => {
        const mapInstance = L.map(mapContainer.current, {
            center: MAP_CENTER,
            zoom: 16,
            scrollWheelZoom: false,
            dragging: windowSize !== 'mobile',
        });

        L.tileLayer.provider('CartoDB.DarkMatter').addTo(mapInstance);

        L.marker(MAP_CENTER, { icon: createLogoIcon() })
            .addTo(mapInstance)
            .bindPopup('<b>AQUA Bayonne</b>');

        mapInstance.zoomControl.setPosition('bottomright');
        setMap(mapInstance);

        return () => mapInstance.remove();
    }, [windowSize]);

    const handleAccordionSelect = (key) => {
        setActiveKey(key);
        const selectedMap = mapData.find(data => data.accordionDetails.id === key);
        if (!selectedMap || !map) return;

        const { centerCoordinates, zoom, locations } = selectedMap.mapDetails;

        map.setView(centerCoordinates, zoom);

        map.eachLayer(layer => {
            if (layer instanceof L.Marker) map.removeLayer(layer);
        });

        locations.forEach(location => {
            L.marker(location.coordinates).addTo(map).bindPopup(location.name);
        });

        L.marker(MAP_CENTER, { icon: createLogoIcon() })
            .addTo(map)
            .bindPopup('<b>AQUA Bayonne</b>');

        map.zoomControl.setPosition('bottomright');
    };

    return (
        <div className="map-component-container">
            <Row className="map-component-row">
                <Col xs={12} xl={9} className="map-component-map" ref={mapContainer} />
                <Col xs={12} xl={3} className="map-component-legend">
                    <Accordion activeKey={activeKey} onSelect={handleAccordionSelect}>
                        {mapData.map(({ accordionDetails, mapDetails }) => (
                            <Accordion.Item
                                eventKey={accordionDetails.id}
                                className="map-accordion-item"
                                key={accordionDetails.id}
                            >
                                <Accordion.Header className="map-accordion-header">
                                    {accordionDetails.title}
                                </Accordion.Header>
                                <Accordion.Body className="map-accordion-body">
                                    <ul className="map-accordion-list">
                                        {mapDetails.locations
                                            .filter(location => location.highlight)
                                            .map((location, index) => (
                                                <li className="map-accordion-list-item" key={index}>
                                                    <span>0{index + 1}</span> {location.name}
                                                </li>
                                            ))}
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </Col>
            </Row>
        </div>
    );
}
