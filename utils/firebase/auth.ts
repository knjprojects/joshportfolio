import { initializeApp } from "firebase/app"
import { getAuth,GoogleAuthProvider } from "firebase/auth"
import { getApps,getApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB6wqj40TIcX9bvaB93DX7Jvgep1z0Y8a4",
  authDomain: "joshthedevportfolio.firebaseapp.com",
  projectId: "joshthedevportfolio",
  storageBucket: "joshthedevportfolio.firebasestorage.app",
  messagingSenderId: "619815800396",
  appId: "1:619815800396:web:c610dedafbc3471e97eee9",
  measurementId: "G-5GZJ30P3ER"
};
//const app = initializeApp(firebaseConfig)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();