import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncMock'

const ItemListContainer = ({ mensaje, parrafo }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      getProducts()
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    })
  
  
  return (
      <div className='App'>
        <ItemList products={products} />

      </div>
    );
  };

export default ItemListContainer;