import React from 'react';
import styled from 'styled-components';

const ButtonBlock = styled.button`
    width: 70px;
    height: 45px;
    color: white;
    background-color: #c7cfb7;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-family: '고양일산';
`

const Button = () => {
    return <ButtonBlock>검색</ButtonBlock>;
};

export default Button;