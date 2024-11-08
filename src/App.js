import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import CartWidget from './components/CartWidget/CartWidget.jsx';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/Checkout/Checkout.jsx';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <CartProvider>
        <NavBar />
        <CartWidget />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 ups!</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;

