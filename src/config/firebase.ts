import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Firebaseの設定オブジェクトをここに貼り付けます
  apiKey: "AIzaSyCoLaD3hiUYx13-gCXDDOFhRxd3p8s3i0g",
  authDomain: "english-d9b20.firebaseapp.com",
  projectId: "english-d9b20",
  storageBucket: "english-d9b20.appspot.com",
  messagingSenderId: "811813936481",
  appId: "1:811813936481:web:2116c11a82c23a17753920",
  measurementId: "G-9LBSMLDTEX",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
