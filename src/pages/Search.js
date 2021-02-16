import React from 'react';
import TopBar from '../components/common/TopBar';
import Navigation from '../components/common/Navigation';
import SubNavigation from '../components/common/SubNavigation';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const Content = styled.div`
    width: 420px;
    padding: 10px;
    border-radius: 20px;
    margin: 150px 0px 600px 450px;
    background-color: #c7cfb7;
    font-family: 'Raleway';
    font-size: 20px;
    color: white;
`;

const Search = () => {
    return (
        <div>
            <TopBar/>
            <Navigation/>
            <SubNavigation/>
            <Content>
                코로나 안심식당을 찾기 위한 검색 방법을 선택하세요.
            </Content>
            <Footer/>
        </div>
    );
};

export default Search;