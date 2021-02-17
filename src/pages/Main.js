import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/common/TopBar';
import Banner from '../components/main/Banner';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const MenuBlock = styled.div`
    display: inline-block;
    width: 250px;
    height: 250px;
    margin-top: 80px;
    margin-left: 250px;
    margin-bottom: 100px;
    font-size: 20px;
    font-family: 'Raleway';
    color: black;
    text-align: center;
    border: 1px solid #cdd0cb;
    border-radius: 250px;

    &:hover{
      background-color: #c7cfb7;
      color: white;
    }
`;

const SearchShorcut = styled.div`
    width: 110px;
    margin-left: 200px;
    margin-top: 150px;
    border-bottom: 4px solid #49735D; 
    font-family: Raleway;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
`;

const Home = () => {
    return (
        <div>  
          <TopBar />
          <Banner />
          <div style={{width: '1310px'}}>
          <SearchShorcut>
            검색 바로가기
          </SearchShorcut>
          <Link to="/select">
            <MenuBlock>
              <div style={{padding: '100px 0'}}>
                지역별, 카테고리별로<br/>검색하기
              </div>
            </MenuBlock>
          </Link>
          <Link to="/nearby">
            <MenuBlock>
              <div style={{padding: '100px 0'}}>
                주변에서 <br/> 검색하기
              </div>
            </MenuBlock>
          </Link>
          </div>
          <Footer/>
        </div>
    );
};

export default Home;