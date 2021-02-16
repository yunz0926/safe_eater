import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`  
    display: inline-block;
    margin-left: 600px;
    padding-bottom: 10px;
`;
const Nav = styled(Link)`
    display: inline-block;
    margin-left: 70px;
    font-family: 'Raleway';
    font-size: 20px;
    font-weight: 600;
    color: #373737;
    text-decoration: none;

    &:hover{
        color: #49735D;
        font-weight: 700;
    }
`;

const Navigation = () => {
    return (
        <NavBar>
            <Nav to="/">
                메인
            </Nav>
            <Nav to="/introduction">
                소개
            </Nav>
            <Nav to="/search">
                검색
            </Nav>
            <Nav to="/contact">
                의견
            </Nav>
        </NavBar>
    );
};

export default Navigation;