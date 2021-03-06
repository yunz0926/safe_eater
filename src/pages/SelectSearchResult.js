import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import ItemListPage from '../containers/search/ItemListPage';
import SubNavigation from '../components/common/SubNavigation';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const SelectBlock = styled.div`
    width: 1310px;
    height: 70px;
    margin-left: 330px;
    margin-top: 170px;
`;


const SelectSearchResult = () => {
    return (
        <div>
            <TopBar />
            <SubNavigation/>
            <SelectBlock>
                <SelectContainer/>
            </SelectBlock>
            <ItemListPage />
            <Footer/>
        </div>
    );
};

export default SelectSearchResult;