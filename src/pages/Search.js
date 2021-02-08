import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import ItemListPage from '../containers/search/ItemListPage';
import styled from 'styled-components';

const SelectBlock = styled.div`
    width: 100%;
    height: 70px;
    margin-left: 300px;
    margin-top: 50px;
`;

const Search = () => {
    return (
        <div>
            <TopBar />
            <SelectBlock>
                <SelectContainer/>
            </SelectBlock>
            <ItemListPage />
        </div>
    );
};

export default Search;