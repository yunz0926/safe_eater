import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import SubNavigation from '../components/common/SubNavigation';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const SelectBlock = styled.div`
    width: 1310px;
    height: 70px;
    margin: 170px 0px 600px 330px;
`;

const Search = () => {
    return (
        <div>
            <TopBar />
            <SubNavigation/>
            <SelectBlock>
                <SelectContainer/>
            </SelectBlock>
            <Footer/>
        </div>
    );
};

export default Search;