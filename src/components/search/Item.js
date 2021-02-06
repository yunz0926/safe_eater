import React from 'react';
import styled from 'styled-components';


const ItemBlock = styled.div`
    float: center;
    font-family: '고양일산';
    width: 440px;
    padding: 3rem 6rem;
    margin-left: 300px;
    text-align: left;
    border-bottom: 3px solid #c7cfb7;
`;

const NameBlock = styled.div`
    font-size: 20px;
    padding-bottom: 1rem;
`;
const SubInfoBlock = styled.div`
    font-size: 17px;
    line-height: 1.5rem;
    color: #686d76;
`;

const Item = ({name, category, addr, telephone}) => {
    return (
        <ItemBlock>
            <NameBlock>
                {name} / {category} <br/>
            </NameBlock>
            <SubInfoBlock>
                주소: {addr} <br/>
                전화번호: {telephone}
            </SubInfoBlock>
        </ItemBlock>
    );
};

export default Item;