// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZaZQeMvggtdyfKCKmX0miXj-Z8BzFHms",
  authDomain: "setlogin-app.firebaseapp.com",
  projectId: "setlogin-app",
  storageBucket: "setlogin-app.appspot.com",
  messagingSenderId: "1095293241922",
  appId: "1:1095293241922:web:b7ab74cbc30301234afbdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;