import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAr96-bQDwvDZ0gCQ4Crju1oZJVCmYTYKs",
  authDomain: "front-end-portfolio-831cb.firebaseapp.com",
  projectId: "front-end-portfolio-831cb",
  storageBucket: "front-end-portfolio-831cb.appspot.com",
  messagingSenderId: "924185590945",
  appId: "1:924185590945:web:f5bc975722eb28e42704e0",
  measurementId: "G-QPQM6F2TWZ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
