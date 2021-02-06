import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ItemList from '../../components/search/ItemList';
import Pagination from '../../components/search/Pagination';

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
            <ItemList data={currentItems(searchedData)}/>
            <Pagination itemsPerPage={itemsPerPage} totalItems={searchedData.length} paginate={setCurrentPage} />
        </div>

    );
};

export default ItemListPage;