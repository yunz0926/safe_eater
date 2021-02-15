import React from 'react';
import styled from 'styled-components';
import NearbyMap from '../components/search/NearbyMap';
import TopBar from '../components/common/TopBar';
import Navigation from '../components/common/Navigation';


const TextBlock = styled.div`
    font-family: 'NanumBarunGothic';
    font-size: 16px;
    line-height: 2;
    margin-left: 400px;
    margin-top: 80px;
    color: #3d3d3d;
`;
const MapBlock = styled.div`
  width: 800px;
  padding: 30px 0px 100px 400px;
`;

const NearbySearch = () => {
    return (
        <div>
          <TopBar/>
          <Navigation/>
          <TextBlock>
              사용자 위치를 기준으로 근처 안심식당을 보여줍니다. <br/>
              지도가 나타나지 않을 경우, 위치 정보 액세스 권한 요청을 허용하였는지 확인하여 주세요.
          </TextBlock>
            <MapBlock>
                <NearbyMap />
            </MapBlock>
        </div>
    );
};

export default NearbySearch;