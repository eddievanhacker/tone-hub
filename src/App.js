import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import logo from './assets/guitar.png';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 ups!</h1>} />
      </Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ItemListContainer mensaje="Este mensaje será mostrado en ItemListContainer" parrafo="HOLA HOLA HOLA Este es un párrafo" />

      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
