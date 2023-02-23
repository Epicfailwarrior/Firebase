// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALD6fmrcTVJyW6_2iZEMRq18pH7ovJ-3E",
  authDomain: "stfirebaseproject-67cc2.firebaseapp.com",
  projectId: "stfirebaseproject-67cc2",
  storageBucket: "stfirebaseproject-67cc2.appspot.com",
  messagingSenderId: "778353226414",
  appId: "1:778353226414:web:368602ba12de701c5ab33f",
  measurementId: "G-DZ2F5ERHC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);