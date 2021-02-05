import React from 'react';
import styled from 'styled-components';

const ItemBlock = styled.div`
    font-family: 'NanumBarunGothic';
    width: 100%;
`;

const Item = ({name, category, addr, telephone}) => {
    return (
        <ItemBlock>
            {name} / {category} <br/>
            주소: {addr} <br/>
            전화번호: {telephone}
        </ItemBlock>
    );
};

export default Item;