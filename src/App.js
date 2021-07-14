import React from 'react';
import './App.css'
import CardContainer from './components/CardContainer'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar/>
        <CardContainer />

      </div>
    </div>
  );
}

export default App;
