import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOjb-nGbATMTbczf76BUvkXZyw1FHhXO4",
    authDomain: "coderhouse-ecommerce-d0212.firebaseapp.com",
    projectId: "coderhouse-ecommerce-d0212",
    storageBucket: "coderhouse-ecommerce-d0212.appspot.com",
    messagingSenderId: "685922588520",
    appId: "1:685922588520:web:094abc43aba4830beea8dd",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export  { db };