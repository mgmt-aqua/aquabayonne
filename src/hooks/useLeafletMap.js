import { useEffect } from 'react';
import aquaLogo from '../img/aqua-logo-white.png';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-providers';

export default function useLeafletMap(mapContainerRef) {
    const title = '<b>AQUA Bayonne</b>'

    useEffect(() => {
        const map = L.map(mapContainerRef.current, {
            center: [40.670988, -74.100399],
            zoom: 16,
            scrollWheelZoom: false,
        });

        L.tileLayer.provider('CartoDB.DarkMatter').addTo(map);

        const logoIcon = L.icon({
            iconUrl: aquaLogo,
            iconSize: [70, 20],
            iconAnchor: [20, 25],
        });

        L.marker([40.670988, -74.100399], { icon: logoIcon })
            .addTo(map)
            .bindPopup(title);

        map.zoomControl.remove();

        return () => map.remove();
    }, [mapContainerRef]);
}
