import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemList from '../../components/search/ItemList';
import Pagination from '../../components/search/Pagination';
import styled from 'styled-components';

const Notice = styled.div`
    margin-left: 80px;
    margin-bottom: 30px;
    font-family: 'NanumBarunGothic';
    font-size: 18px;
    color: #686d76;
    text-align: center;
    line-height: 1.5rem;
`;

const ItemListPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const {searchedData} = useSelector(({data}) => ({
        searchedData: data.searchedData,
    }));

    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    const currentItems = data => {
        let currentItems = 0;
        currentItems = data.slice(indexOfFirst, indexOfLast);

        return currentItems;
    }
    return (
        <div>
            <Notice>
                [주소 + 사업장명] 으로 검색한 위치정보를 지도 상에 보여줍니다.
                검색 결과가 없거나, 부정확할 수 있습니다.
            </Notice>
            <ItemList data={currentItems(searchedData)}/>
            <Pagination itemsPerPage={itemsPerPage} totalItems={searchedData.length} paginate={setCurrentPage} />
        </div>

    );
};

export default ItemListPage;