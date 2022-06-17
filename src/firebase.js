// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSEmWbKI3xrckr-MyRAXDZGDfYMa3gCJM",
  authDomain: "upload2-b0c1a.firebaseapp.com",
  projectId: "upload2-b0c1a",
  storageBucket: "upload2-b0c1a.appspot.com",
  messagingSenderId: "811853887567",
  appId: "1:811853887567:web:ab9c16fd9710adcdd9d23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);