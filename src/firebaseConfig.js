import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAw0quGadCi3_GpbrgY9LjTKxRXiubfC28",
  authDomain: "kutu-c7a44.firebaseapp.com",
  projectId: "kutu-c7a44",
  storageBucket: "kutu-c7a44.firebasestorage.app",
  messagingSenderId: "63680745706",
  appId: "1:63680745706:web:ec1a69c82a9214914ec793"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);