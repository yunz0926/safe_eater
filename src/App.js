import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Introduction from './pages/Introduction';
import Search from './pages/Search';
import Contact from './pages/Contact';
import SelectSearch from './pages/SelectSearch';
import NearbySearch from './pages/NearbySearch'
import SelectSearchResult from './pages/SelectSearchResult';
import './App.css';
import GlobalFonts from './fonts/fonts';
import ScrollToTop from './containers/common/ScrollToTop';


const App = () => {
  return (
    <ScrollToTop>
      <GlobalFonts />
      <Route component={Main} path="/" exact />
      <Route component={Introduction} path="/introduction"/>
      <Route component={Search} path="/search"/>
      <Route component={Contact} path="/contact"/>
      <Route component={SelectSearch} path="/select"/>
      <Route component={NearbySearch} path="/nearby"/>
      <Route component={SelectSearchResult} path="/searchresult"/>
    </ScrollToTop>
  )
}

export default App;