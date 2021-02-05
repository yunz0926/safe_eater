import React from 'react';
import TopBar from '../components/common/TopBar';
import Banner from '../components/main/Banner';
import SelectContainer from '../containers/common/SelectContainer';

const Home = () => {
    return (
        <div>  
          <TopBar />
          <Banner />
          <SelectContainer />
        </div>
    );
};

export default Home;