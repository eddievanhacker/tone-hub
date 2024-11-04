import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyDOjb-nGbATMTbczf76BUvkXZyw1FHhXO4",
//     authDomain: "coderhouse-ecommerce-d0212.firebaseapp.com",
//     projectId: "coderhouse-ecommerce-d0212",
//     storageBucket: "coderhouse-ecommerce-d0212.appspot.com",
//     messagingSenderId: "685922588520",
//     appId: "1:685922588520:web:094abc43aba4830beea8dd",
//   };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db };