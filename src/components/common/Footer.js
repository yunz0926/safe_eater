import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
    /*width: 300px;*/
    height: 20px;
    padding: 60px;
    width: 100%;
    text-align: center;
    margin-top: 100px;
    background-color: rgba(196, 196, 196, 0.2);
    font-family: 'Raleway';
    font-size: 15px;
    color: #4d4d4d;
    line-height: 1.5;
`;

const Footer = () => {
    return (
        <FooterBlock>
            Copyright 2021. Yunji Choi<br/> All rights reserved.
        </FooterBlock>
    );
};

export default Footer;