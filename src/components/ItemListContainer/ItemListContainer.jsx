import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje, parrafo }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
      const asyncFunc = categoryId ? getProductsByCategory : getProducts

      asyncFunc(categoryId)
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.error(error)
        })
    }, [categoryId])
  
  
  return (
      <div className='App'>
        <ItemList products={products} />
      </div>
    );
  };

export default ItemListContainer;