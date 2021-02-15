import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemListBlock = styled.div`
    width: 100%;
    margin-left: 150px;
    font-size: 17px;
    text-align: center;
    display: block;
`

const ItemList = ({data}) => {
    return (
        <ItemListBlock>
            {data.length === 0 && <div>검색결과가 없습니다.</div>}
            {data && data.map((item, index) => (
                <Item key={index}
                      name={item.RELAX_RSTRNT_NM}
                      category={item.RELAX_GUBUN_DETAIL}
                      addr={item.RELAX_ADD1}
                      telephone={item.RELAX_RSTRNT_TEL} /> ))}
        </ItemListBlock>
    );
};

export default ItemList;