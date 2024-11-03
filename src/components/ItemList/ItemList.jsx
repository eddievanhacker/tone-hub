import { collection, getDocs } from 'firebase/firestore';
import './ItemList.css';
import { db } from '../../config/firebase.js';
import { useEffect } from 'react';

const ItemList = () => {

    useEffect(() => {
        const collectionRef = collection(db,"products");
    getDocs(collectionRef).then(snaps => {
        console.log(snaps);
    });
    }, []);

    return <h1>ItemList</h1>;
};

export default ItemList;