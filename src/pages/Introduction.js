import React from 'react';
import Topbar from '../components/common/TopBar';
import Navigation from '../components/common/Navigation';
import Explanation from '../components/common/Explanation';
import Footer from '../components/common/Footer';

const Introduction = () => {
    return (
        <div>
            <Topbar/>
            <Navigation/>
            <Explanation/>
            <Footer/>
        </div>
    );
};

export default Introduction;