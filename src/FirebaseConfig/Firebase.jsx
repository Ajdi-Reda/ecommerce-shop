// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByTS0IMMlCu3jxILbZHfpGIg1RRgv3NS0",
  authDomain: "electronstore-e3d6a.firebaseapp.com",
  projectId: "electronstore-e3d6a",
  storageBucket: "electronstore-e3d6a.appspot.com",
  messagingSenderId: "904090245259",
  appId: "1:904090245259:web:8501de1b6b18e2b0415c8e",
  measurementId: "G-RJ17YCHDS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);