import './ItemList.css'
import Item from '../Item/Item'
// import { collection, getDocs } from "firebase/firestore";
// import BBDD from "../../config/firebase.js";
// import { useEffect } from "react";

const ItemList = ({ products }) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}



// const ItemList = () => {
//     useEffect(() => {
//         const collectionsRef = collection(BBDD.db, "products");
//         getDocs(collectionsRef).then((snaps) => {
//             const { docs } = snaps;
//             const list = docs.map(doc => doc.data());
//             console.log(list)
//         });
//     }, []);
//     return <h1>Item List</h1>
// }

export default ItemList