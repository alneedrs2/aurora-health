// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5810iNBnGtDBWt3iaL7EqJtSSU3-kN00",
  authDomain: "assignment-ten-d4be8.firebaseapp.com",
  projectId: "assignment-ten-d4be8",
  storageBucket: "assignment-ten-d4be8.appspot.com",
  messagingSenderId: "650331784346",
  appId: "1:650331784346:web:85e7e78f48e304da72cb23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
