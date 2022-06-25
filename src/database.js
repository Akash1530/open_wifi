
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwyHKLRq1k6p_8mHNyNpNXBD0pPGu-bck",
  authDomain: "upload5-12397.firebaseapp.com",
  projectId: "upload5-12397",
  storageBucket: "upload5-12397.appspot.com",
  messagingSenderId: "636031537697",
  appId: "1:636031537697:web:896770e21bf4a3c209c960"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getDatabase(app);