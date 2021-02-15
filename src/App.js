import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import SelectSearch from './pages/SelectSearch';
import NearbySearch from './pages/NearbySearch'
import SelectSearchResult from './pages/SelectSearchResult';
import Introduction from './pages/Introduction';
import './App.css';
import GlobalFonts from './fonts/fonts';
import ScrollToTop from './containers/common/ScrollToTop';


const App = () => {
  return (
    <ScrollToTop>
      <GlobalFonts />
      <Route component={Main} path="/" exact />
      <Route component={SelectSearch} path="/selectsearch" />
      <Route component={NearbySearch} path="/nearbysearch"/>
      <Route component={SelectSearchResult} path="/searchresult"/>
      <Route component={Introduction} path="/introduction"/>
    </ScrollToTop>
  )
}

export default App;