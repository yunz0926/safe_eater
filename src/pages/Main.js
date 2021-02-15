import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/common/TopBar';
import Banner from '../components/main/Banner';
import styled from 'styled-components';

const MenuBlock = styled.div`
    display: inline-block;
    width: 250px;
    height: 250px;
    margin-top: 150px;
    margin-left: 250px;
    margin-bottom: 100px;
    font-size: 20px;
    font-family: '고양일산';
    color: black;
    text-align: center;
    border: 1px solid #cdd0cb;
    border-radius: 250px;

    &:hover{
      background-color: #c7cfb7;
      color: white;
    }
`;

const Home = () => {
    return (
        <div>  
          <TopBar />
          <Banner />
          <div style={{width: '1310px'}}>
          <Link to="/selectsearch">
            <MenuBlock>
              <div style={{padding: '100px 0'}}>
                지역별, 카테고리별로<br/>검색하기
              </div>
            </MenuBlock>
          </Link>
          <Link to="/nearbysearch">
            <MenuBlock>
              <div style={{padding: '100px 0'}}>
                주변에서 <br/> 검색하기
              </div>
            </MenuBlock>
          </Link>
          </div>
        </div>
    );
};

export default Home;