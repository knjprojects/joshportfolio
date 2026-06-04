import { initializeApp } from "firebase/app"
import { getAuth,GoogleAuthProvider } from "firebase/auth"
import { getApps,getApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBMWaDVTJ7UUisZLJT-Z-vMtzsn6xPlPGE",
  authDomain: "portfolio-7c039.firebaseapp.com",
  projectId: "portfolio-7c039",
  storageBucket: "portfolio-7c039.firebasestorage.app",
  messagingSenderId: "817164428559",
  appId: "1:817164428559:web:3d39633e047af0eaae8a7a",
  measurementId: "G-E1PBNCN3ZH"
};
//const app = initializeApp(firebaseConfig)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();