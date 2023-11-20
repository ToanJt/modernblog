// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIveKt1CYG4oBSf73jzQM_NiMEYWj71Kk",
  authDomain: "fex-modern-blog.firebaseapp.com",
  projectId: "fex-modern-blog",
  storageBucket: "fex-modern-blog.appspot.com",
  messagingSenderId: "1032284677753",
  appId: "1:1032284677753:web:194200a06200b2d2ae56a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const dbCartRef = collection(db, "cart");