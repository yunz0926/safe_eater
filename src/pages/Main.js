import React from 'react';
import TopBar from '../components/common/TopBar';
import Banner from '../components/main/Banner';
import SelectContainer from '../containers/common/SelectContainer';
import NearbySearch from '../components/main/NearbySearch';
import styled from 'styled-components';

const MenuBlock = styled.div`
    display: inline-block;
    color: #393e46;
    font-size: 20px;
    font-family: 'NanumBarunGothic';
    padding-bottom: 3px;
    border-bottom: 5px solid #6BA688;
    margin-left: 200px;
    margin-top: 130px;
    margin-bottom: 60px;
`;
const SelectBlock = styled.div`
    width: 100%;
    height: 100px;
    margin-left: 300px;
`;

const MapBlock = styled.div`
  width: 100%;
  margin-left: 350px;
  margin-bottom: 100px;
`
const Home = () => {
    return (
        <div>  
          <TopBar />
          <Banner />
          <MenuBlock>
            지역별, 카테고리별로 검색하기
          </MenuBlock>
          <SelectBlock>
            <SelectContainer/>
          </SelectBlock>
          <MenuBlock>
              주변에서 검색하기
          </MenuBlock>
          <MapBlock>
            <NearbySearch/>
          </MapBlock>
        </div>
    );
};

export default Home;