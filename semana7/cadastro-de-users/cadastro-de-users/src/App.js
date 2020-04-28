import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cadastro from './components/Cadastro'
import Lista from './components/Lista'

function App() {
  return (
    <div className="App">
      <Lista/>
      <Cadastro/>
    </div>
  );
}

export default App;
