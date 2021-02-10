import React from 'react';
import styled from 'styled-components';
import NearbyMap from '../components/search/NearbyMap';
import TopBar from '../components/common/TopBar';

const MenuBlock = styled.div`
    display: inline-block;
    color: #393e46;
    font-size: 20px;
    font-family: 'NanumBarunGothic';
    padding-bottom: 3px;
    border-bottom: 5px solid #6BA688;
    margin: 70px 0 60px 200px;
`;

const MapBlock = styled.div`
  width: 100%;
  margin-left: 350px;
  margin-bottom: 100px;
`;

const NearbySearch = () => {
    return (
        <div>
          <TopBar/>
          <MenuBlock>
            주변에서 검색하기
          </MenuBlock>
            <MapBlock>
                <NearbyMap />
            </MapBlock>
        </div>
    );
};

export default NearbySearch;