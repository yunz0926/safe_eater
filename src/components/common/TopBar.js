import React from 'react';
import styled from 'styled-components';
import logo from './logo.png';

const TopBarBlock = styled.div`
    margin-left: 30px;
    margin-top: 10px;
    display: flex;
`

const TopBar = () => {
    return(
        <TopBarBlock>
        <img src={logo} width='150' alt="logo"/>
        </TopBarBlock>
    );
};

export default TopBar;