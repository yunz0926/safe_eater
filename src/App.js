import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import './App.css';
import GlobalFonts from './fonts/fonts';
import ScrollToTop from './containers/common/ScrollToTop';

const App = () => {
  return (
    <ScrollToTop>
      <GlobalFonts />
      <Route component={Main} path="/" exact />
      <Route component={Search} path="/search/:ccd_code?" />
    </ScrollToTop>
  )
}

export default App;