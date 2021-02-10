import React, { useEffect } from 'react';

const Map = ({searchPlace, address}) => {
    const { kakao } = window;

    useEffect(() => {
        const mapContainer = document.getElementById(searchPlace);
        const mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), 
            level: 3, 
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);
        const geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function(result, status) {
            if(status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                kakao.maps.event.addListener(marker);

                map.setCenter(coords);
            }
        })

    }, [searchPlace, address, kakao.maps]);

    return (
        <div id={searchPlace} style={{ width: '280px', height: '280px'}} />
    );
};

export default Map;