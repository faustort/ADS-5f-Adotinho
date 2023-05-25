// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsT0S5F68CEsdS8Pllw2j4StDz-iQV56k",
  authDomain: "appregistro5f.firebaseapp.com",
  projectId: "appregistro5f",
  storageBucket: "appregistro5f.appspot.com",
  messagingSenderId: "1023499054233",
  appId: "1:1023499054233:web:81458117ba54a954bfdc08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
