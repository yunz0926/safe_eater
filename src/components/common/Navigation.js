import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBlock = styled.div`
    display: inline-block;
    position: absolute;
    top: 150px;
    left: 10px;
    width: 250px;
    height: 300px;
`;

const Menu = styled(Link)`
    display: inline-block;
    padding: 10px;
    margin: 25px 5px;
    color: black;
    text-decoration: none;
    font-family: 'NanumBarunGothic';
    font-size: 16px;
    border-left: 4px solid #49735D;

    &:hover {
        color: #49735D;
    }
`;

const Navigation = ({menu}) => {

    return (
        <NavigationBlock>
            <Menu to="/introduction">
                코로나 안심식당이란?
            </Menu>
            <Menu to="/selectsearch">
                지역별, 카테고리별로 검색하기
            </Menu>
            <Menu to="/nearbysearch">
                주변에서 검색하기
            </Menu>
        </NavigationBlock>
    );
};

export default Navigation;