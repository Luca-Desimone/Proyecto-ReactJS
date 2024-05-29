// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

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

export { db, doc, getDoc, updateDoc };
