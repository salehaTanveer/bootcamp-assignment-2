import React from 'react';
import './App.css';
import PrintMessage from './print_message.js';

function App() {
  return (
    <div className="App">
      {/* PrintMessage */}
       <PrintMessage message="Bootcamp- 2020!" /> 
       <hr/>
       <PrintMessage message="Assignment 2" /> 
    </div>
  );
}
export default App;
