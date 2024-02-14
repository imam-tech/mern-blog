// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7b7e3.firebaseapp.com",
  projectId: "mern-blog-7b7e3",
  storageBucket: "mern-blog-7b7e3.appspot.com",
  messagingSenderId: "959393804729",
  appId: "1:959393804729:web:d80ce99efd2f62b6e2c668"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
