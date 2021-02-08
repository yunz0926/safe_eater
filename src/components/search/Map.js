import React, { useEffect } from 'react';

const Map = ({searchPlace}) => {
    const { kakao } = window;

    useEffect(() => {
        console.log(searchPlace);

        const infowindow = new kakao.maps.InfoWindow({zIndex: 1});
        const mapContainer = document.getElementById(searchPlace), //지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(37.566826, 126.9786567), //지도의 중심좌표
            level: 10, //지도의 확대 레벨
        };

        //지도 생성
        const map = new kakao.maps.Map(mapContainer, mapOption);
        
        //장소 검색 객체 생성
        const ps = new kakao.maps.services.Places();

        //키워드로 장소 검색
        ps.keywordSearch(searchPlace, placesSearchCB);

        //키워드 검색 완료 시 호출되는 콜백 함수
        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                //검색된 장소 위치를 기준으로 지도 범위 재설정
                const bounds = new kakao.maps.LatLngBounds();

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                //검색된 장소 위치를 기준으로 지도 범위를 재설정
                map.setBounds(bounds);
            }
        };

        //지도에 마커를 표시하는 함수
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