import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';


const TopBarBlock = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
`;

const Logo = styled.div`
    width: 170px;
    margin-left: 30px;
    margin-top: 10px;
    display: inline-block;
`;

const TopBar = () => {
    return(
        <TopBarBlock>
            <Link to = "/">
                <Logo>
                <img src={logo} width='165' height='75' alt="logo"/>
                </Logo>
            </Link>
            <Navigation/>
        </TopBarBlock>
        
    );
};

export default TopBar;