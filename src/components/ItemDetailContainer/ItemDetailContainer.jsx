import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

// import { useState, useEffect } from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail'
// import { useParams } from 'react-router-dom';
// import { getDoc, doc } from 'firebase/firestore';
// import { db } from '../../config/firebase';

// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState(null)
//     const [loading, setLoading] = useState(true)

//     const { itemId } = useParams()

//     useEffect(() => {
//         setLoading(true)

//         const docRef = doc(db, 'products', itemId)

//         getDoc(docRef)
//             .then(response => {
//                 const data = response.data()
//                 const productAdapted = { id: response.id, ...data }
//                 setProduct(productAdapted)
//             })
//             .catch(error => {
//                 console.log(error)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     }, [itemId])
// }

export default ItemDetailContainer