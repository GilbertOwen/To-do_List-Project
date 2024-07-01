// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKnohLdQ9qgE_SCiseqP4oRAPGbHXf4ic",
  authDomain: "wha-do.firebaseapp.com",
  projectId: "wha-do",
  storageBucket: "wha-do.appspot.com",
  messagingSenderId: "498330860573",
  appId: "1:498330860573:web:63313e8698b511850a5af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db }
export default app;