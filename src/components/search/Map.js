import React, { useEffect } from 'react';

const Map = ({searchPlace}) => {
    const { kakao } = window;

    useEffect(() => {
        console.log(searchPlace);

        const infowindow = new kakao.maps.InfoWindow({zIndex: 1});
        const mapContainer = document.getElementById(searchPlace),
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), 
            level: 10, 
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);
        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(searchPlace, placesSearchCB);

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                const bounds = new kakao.maps.LatLngBounds();

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                map.setBounds(bounds);
            }
        };

        function displayMarker (place) {
            const marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            kakao.maps.event.addListener(marker, 'click', () => {
                infowindow.setContent('<div style="padding:5px; font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        };

    }, [searchPlace, kakao.maps]);

    return (
        <div id={searchPlace} style={{ width: '280px', height: '280px'}} />
    );
};

export default Map;