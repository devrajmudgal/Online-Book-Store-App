// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCxclwn_cgZIUFA2tna3KloWRWpeG8NOw",
  authDomain: "engireads-9370b.firebaseapp.com",
  projectId: "engireads-9370b",
  storageBucket: "engireads-9370b.appspot.com",
  messagingSenderId: "293255073379",
  appId: "1:293255073379:web:57c33423ccdc7f26313256",
  measurementId: "G-L81Y6F4LRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;