import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import './App.css';
import GlobalFonts from './fonts/fonts';

const App = () => {
  return (
    <div>
      <GlobalFonts />
      <Route component={Main} path="/" exact />
      <Route component={Search} path="/search/:ccd_code?" />
    </div>
  )
}

export default App;