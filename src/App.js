import React from 'react';
import './App.css'
import CardContainer from './components/CardContainer'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="container-fluid">
          <CardContainer/>
      </div>
    </div>
  );
}

export default App;
