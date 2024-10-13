import React from 'react';
import './ItemListContainer.css';
import '../../App.css';
import logo from '../../assets/guitar.png';

const ItemListContainer = ({ mensaje, parrafo }) => {
    return (
      <div className='App'>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

        <h1>HOLA!</h1>

      </div>
    );
  };

export default ItemListContainer;