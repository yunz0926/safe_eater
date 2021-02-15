import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import ItemListPage from '../containers/search/ItemListPage';
import Navigation from '../components/common/Navigation';
import styled from 'styled-components';

const SelectBlock = styled.div`
    width: 1310px;
    height: 70px;
    margin-left: 330px;
    margin-top: 70px;
`;


const SelectSearchResult = () => {
    return (
        <div>
            <TopBar />
            <Navigation/>
            <SelectBlock>
                <SelectContainer/>
            </SelectBlock>
            <ItemListPage />
        </div>
    );
};

export default SelectSearchResult;