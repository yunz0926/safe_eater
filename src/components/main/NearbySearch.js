import React, { useEffect } from 'react';

const NearbySearch = () => {
    const { kakao, navigator } = window;

    useEffect(() => {
        const infowindow = new kakao.maps.InfoWindow({zindex: 1});
        const mapContainer = document.getElementById('nearby');

        var map, currentPosition;
        const ps = new kakao.maps.services.Places();

        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude,
                      lon = position.coords.longitude;
                
                currentPosition = new kakao.maps.LatLng(lat, lon);
                const message = "현재 위치";
                const mapOption = {
                    center: currentPosition,
                    level: 6,
                };
                map = new kakao.maps.Map(mapContainer, mapOption);
                displayCurrentLocation(currentPosition, message);
                
                ps.keywordSearch('코로나 안심식당', placesSearchCB, {
                    location: currentPosition,
                    radius: 3000,
                });

            }, error => { console.log(error);});
        }
        else {
            const locPosition = new kakao.maps.LatLng(37.566826, 126.9786567),
                  message="현재 위치를 표시할 수 없습니다.";
            displayCurrentLocation(locPosition, message);
        }

        function displayCurrentLocation(place, message) {
            const marker = new kakao.maps.Marker({
                map: map,
                position: place,
            });

            kakao.maps.event.addListener(marker, 'click', () => {
                infowindow.setContent('<div style="padding:5px; font-size:12px;">' + message + '</div>');
                infowindow.open(map, marker);
            });
        }

        function placesSearchCB (data, status, pagination) {
            console.log(data);
            if (status === kakao.maps.services.Status.OK) {
                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);    
                }       
            } 
        }
    
        function displayMarker(place) {
            
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x) 
            });
        
            kakao.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }       
    },[kakao.maps, navigator.geolocation])
    return (
        <div id='nearby' style={{ width: '600px', height: '600px'}} />
    );
};

export default NearbySearch;