import React from 'react';
import './App.css';

//components
import Home from './Home'
import Header from './Header'
import Search from './Search'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
      <Search/>
    </React.Fragment>
  );
}

export default App;
