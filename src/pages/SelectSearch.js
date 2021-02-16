import React from 'react';
import SelectContainer from '../containers/common/SelectContainer';
import TopBar from '../components/common/TopBar';
import Navigation from '../components/common/Navigation';
import SubNavigation from '../components/common/SubNavigation';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const SelectBlock = styled.div`
    width: 1310px;
    height: 70px;
    margin: 70px 0px 600px 330px;
`;

const Search = () => {
    return (
        <div>
            <TopBar />
            <Navigation/>
            <SubNavigation/>
            <SelectBlock>
                <SelectContainer/>
            </SelectBlock>
            <Footer/>
        </div>
    );
};

export default Search;