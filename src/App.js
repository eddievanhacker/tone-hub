import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';

function App() {
  return (
    <div className="App">

      <NavBar />
      <CartWidget />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 ups!</h1>} />
      </Routes>
      </BrowserRouter>

      <ItemDetailContainer />
      
      <Footer />

    </div>
  );
}

export default App;
