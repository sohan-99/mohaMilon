// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxTkowXVKpiIk7G7Lts-WUf3HNuwgnPIA",
  authDomain: "mohamilon-dd60e.firebaseapp.com",
  projectId: "mohamilon-dd60e",
  storageBucket: "mohamilon-dd60e.appspot.com",
  messagingSenderId: "841816584214",
  appId: "1:841816584214:web:dde47ea06449d6fa3b4537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;