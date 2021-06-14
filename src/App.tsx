import React from 'react';
import Form  from './Components/Form';
import "./Components/Contact";
import './App.css';

function App() {
  return ( 
    <div className="App">
      <Form />
        <div id="contacts-list" >
        </div>
    </div>
  );
};

export default App;
