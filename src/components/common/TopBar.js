import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const TopBarBlock = styled.div`
    width: 170px;
    margin-left: 30px;
    margin-top: 10px;
    display: inline-block;
`;

const TopBar = () => {
    return(
        <Link to = "/">
            <TopBarBlock>
            <img src={logo} width='165' height='75' alt="logo"/>
            </TopBarBlock>
        </Link>
    );
};

export default TopBar;