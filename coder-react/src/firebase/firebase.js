// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCmIkHLpXBRKTYvWPgBRhCCw_O7_SXeD0",
  authDomain: "reacproyect.firebaseapp.com",
  projectId: "reacproyect",
  storageBucket: "reacproyect.appspot.com",
  messagingSenderId: "22968150521",
  appId: "1:22968150521:web:76536915d1bf510bbb3528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

