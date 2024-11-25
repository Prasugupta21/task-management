// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-q5nLj2Rp48xK91_iWF2ubZPiljnz9kU",
  authDomain: "task-d848d.firebaseapp.com",
  projectId: "task-d848d",
  storageBucket: "task-d848d.firebasestorage.app",
  messagingSenderId: "525361347290",
  appId: "1:525361347290:web:71add237971650ff7d03e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;
