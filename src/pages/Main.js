import React from 'react';
import TopBar from '../components/common/TopBar';
import Banner from '../components/main/Banner';
import SelectContainer from '../containers/common/SelectContainer';
import styled from 'styled-components';

const SelectBlock = styled.div`
    width: 100%;
    height: 500px;
    margin-left: 300px;
    margin-top: 100px;
`;

const Home = () => {
    return (
        <div>  
          <TopBar />
          <Banner />
          <SelectBlock>
            <SelectContainer/>
          </SelectBlock>
        </div>
    );
};

export default Home;