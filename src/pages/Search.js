import React from 'react';
import TopBar from '../components/common/TopBar';
import SubNavigation from '../components/common/SubNavigation';
import Footer from '../components/common/Footer';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    100% {
        opacity: 1;
    }
`;

const Content = styled.div`
    width: 500px;
    padding: 10px;
    border-radius: 20px;
    margin: 200px 0px 600px 450px;
    background-color: #c7cfb7;
    font-family: 'Raleway';
    font-size: 20px;
    color: white;
    text-align: center;

    animation-delay: 1s;
    animation-duration: 4s;
    animation-name: ${blink};
    animation-iteration-count: infinite;
    animation-timing-function: 
`;

const Search = () => {
    return (
        <div>
            <TopBar/>
            <SubNavigation/>
            <Content>
                코로나 안심식당을 찾기 위한 검색 방법을 선택하세요.
            </Content>
            <Footer/>
        </div>
    );
};

export default Search;