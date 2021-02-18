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
      <Route component={Main} path="/safe_eater" exact />
      <Route component={Introduction} path="/safe_eater/introduction"/>
      <Route component={Search} path="/safe_eater/search"/>
      <Route component={Contact} path="/safe_eater/contact"/>
      <Route component={SelectSearch} path="/safe_eater/select"/>
      <Route component={NearbySearch} path="/safe_eater/nearby"/>
      <Route component={SelectSearchResult} path="/safe_eater/searchresult"/>
    </ScrollToTop>
  )
}

export default App;