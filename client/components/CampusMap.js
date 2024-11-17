import React, { useEffect } from 'react';
import L from 'leaflet';

function CampusMap() {
    useEffect(() => {
        const map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Gayacollegegaya Campus')
            .openPopup();
    }, []);

    return <div id="map" style={{ height: '500px', width: '100%' }}></div>;
}

export default CampusMap; 