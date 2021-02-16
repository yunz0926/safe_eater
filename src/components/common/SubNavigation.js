import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SubNavigationBlock = styled.div`
    display: inline-block;
    position: absolute;
    top: 150px;
    left: 10px;
    width: 250px;
    height: 300px;
`;

const Menu = styled(Link)`
    display: inline-block;
    padding: 5px;
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

const SubNavigation = ({menu}) => {

    return (
        <SubNavigationBlock>
            <Menu to="/select">
                지역별, 카테고리별로 검색하기
            </Menu>
            <Menu to="/nearby">
                주변에서 검색하기
            </Menu>
        </SubNavigationBlock>
    );
};

export default SubNavigation;