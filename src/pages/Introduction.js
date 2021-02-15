import React from 'react';
import Topbar from '../components/common/TopBar';
import Navigation from '../components/common/Navigation';
import Explanation from '../components/common/Explanation';

const Introduction = () => {
    return (
        <div>
            <Topbar/>
            <Navigation/>
            <Explanation/>
        </div>
    );
};

export default Introduction;