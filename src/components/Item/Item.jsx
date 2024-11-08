import './Item.css'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import { useEffect, useState } from 'react';

const Item = ({id, name, img, price, stock}) => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db,"products");
    getDocs(collectionRef).then(snaps => {
        const { docs } = snaps;
        const list = docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setItems(list);
    });
    }, []);

    return (
        <article className='CardItem'>

{/* *************** START TESTING****************** */}

         {/* <h1>Item List</h1> */}
         <div className='ListGroup'>
         {items.map((item) => (
             <div key={item.id}>
                 <p>{item.description}</p>
                 <p>${item.price}</p>
                 <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </footer>
                 {/* <button onClick={() => addCart(item.id)}>Agregar a Carrito</button> */}
             </div>
         ))}
         </div>

{/* ***************END TESTING****************** */}

            {/* <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: USD${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalles</Link>
            </footer> */}
        </article>
    )
}

export default Item