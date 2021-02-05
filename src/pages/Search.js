import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import ItemListPage from '../containers/search/ItemListPage';

const Search = () => {
    return (
        <div>
            <TopBar />
            <SelectContainer style={{marginTop: '0'}}/>
            <ItemListPage />
        </div>
    );
};

export default Search;