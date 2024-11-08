
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({ products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}


// import { collection, getDocs } from 'firebase/firestore';
// import './ItemList.css';
// import { db } from '../../config/firebase.js';
// import { useEffect, useState } from 'react';

// const ItemList = () => {
//     const [items, setItems] = useState([]);
//     useEffect(() => {
//         const collectionRef = collection(db,"products");
//     getDocs(collectionRef).then(snaps => {
//         const { docs } = snaps;
//         const list = docs.map(doc => ({ ...doc.data(), id: doc.id }));
//         console.log(list);
//         setItems(list);
//     });
//     }, []);

//     return (
//     <>
//         <h1>Item List</h1>
//         <div className='ListGroup'>
//         {items.map((item) => (
//             <div key={item.id}>
//                 <p>Nombre: {item.description}</p>
//                 <p>Precio: {item.price}</p>
//                 {/* <button onClick={() => addCart(item.id)}>Agregar a Carrito</button> */}
//             </div>
//         ))}
//         </div>
//     </>
//     );
// };

export default ItemList;