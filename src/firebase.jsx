// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUBq3E1viA5zJ2j3xK4S_v7zyx2wLdUUU",
  authDomain: "zanime-7554b.firebaseapp.com",
  projectId: "zanime-7554b",
  storageBucket: "zanime-7554b.appspot.com",
  messagingSenderId: "304153015229",
  appId: "1:304153015229:web:ea0a97b31bd886207c98d4",
  measurementId: "G-TPZPRMP7JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;