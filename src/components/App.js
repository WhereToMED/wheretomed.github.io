import React from 'react';
import './App.css';

//components
import Home from './Home'
import Header from './Header'

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Home/>
    </React.Fragment>
  );
}

export default App;
