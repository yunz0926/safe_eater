import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ItemListBlock = styled.div`
    width: 100%;
    text-align: center;
    display: block;
`

const ItemList = ({data}) => {
    return (
        <ItemListBlock>
            {data && data.map(item => (
                <Item name={item.RELAX_RSTRNT_NM}
                      category={item.RELAX_GUBUN_DETAIL}
                      addr={item.RELAX_ADD1}
                      telephone={item.RELAX_RSTRNT_TEL} /> ))}
            {data===[] && <div>검색결과가 없습니다.</div>}
        </ItemListBlock>
    );
};

export default ItemList;