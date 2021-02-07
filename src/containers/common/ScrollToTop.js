import React, { useEffect } from 'react';
import { withRouter } from 'react-router';

const ScrollToTop = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },);

    return children;
};

export default withRouter(ScrollToTop);