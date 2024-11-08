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

// import { useState, useEffect } from "react";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";
// import { getDocs, collection, query, where } from "firebase/firestore";
// import { db } from "../../config/firebase";

// const ItemListContainer = ({ greeting }) => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)

//   const { categoryID } = useParams()

//   useEffect(() => {
//     setLoading(true)

//     const collectionRef = categoryID
//       ? query(collection(db, 'products'), where('category', '==', categoryID))
//       : collection(db, 'products')

//     getDocs(collectionRef)
//       .then(response => {
//           const productsAdapted = response.docs.map(doc => {
//             const data = doc.data()
//             return { id: doc.id, ...data }
//           })
//           setProducts(productsAdapted)
//       })
//       .catch(error => {
//         console.log(error)
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   })
// }

export default ItemListContainer;