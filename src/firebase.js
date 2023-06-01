// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK3Km0dO1kcT-nIT9emmHQvN9bI1BSYHg",
  authDomain: "react--chat-app.firebaseapp.com",
  projectId: "react--chat-app",
  storageBucket: "react--chat-app.appspot.com",
  messagingSenderId: "531352183672",
  appId: "1:531352183672:web:d40ee070872bf706b89e8d",
  measurementId: "G-8RWKQCGZ6R"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
