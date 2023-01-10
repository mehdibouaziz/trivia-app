// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuKfvPpj64dnYWVCiEoSG-WNNOLABRpQw",
  authDomain: "trivia-game-36a28.firebaseapp.com",
  projectId: "trivia-game-36a28",
  storageBucket: "trivia-game-36a28.appspot.com",
  messagingSenderId: "390754901030",
  appId: "1:390754901030:web:9a7b7c4f00698a7c729ae7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()