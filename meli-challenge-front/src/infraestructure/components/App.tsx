import React from 'react';
import logo from './../../logo.svg';
import './App.css';
import { ProductListV1 } from './ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mi amorsito si consigo el trabajo te voy
          a  comprar muchas cosas bonitas 
          <code> ♥️</code>
        </p>
        <ProductListV1 />
      </header>
    </div>
  );
}

export default App;
