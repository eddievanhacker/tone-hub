import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import logo from './assets/guitar.png';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemListContainer mensaje="Este mensaje será mostrado en ItemListContainer" parrafo="HOLA HOLA HOLA Este es un párrafo" />
      <Footer />

      
    </div>
  );
}

export default App;
