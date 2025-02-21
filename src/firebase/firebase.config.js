// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEQOkdSm40Of-XmmUFDYcicjzDFmOmix0",
  authDomain: "the-dragon-news-9ce9f.firebaseapp.com",
  projectId: "the-dragon-news-9ce9f",
  storageBucket: "the-dragon-news-9ce9f.firebasestorage.app",
  messagingSenderId: "420945455528",
  appId: "1:420945455528:web:45b33efe84478023a7959d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;