import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const TopBarBlock = styled.div`
    margin-left: 30px;
    margin-top: 10px;
    display: flex;
`

const TopBar = () => {
    return(
        <Link to = "/">
            <TopBarBlock>
            <img src={logo} width='150' alt="logo"/>
            </TopBarBlock>
        </Link>
    );
};

export default TopBar;