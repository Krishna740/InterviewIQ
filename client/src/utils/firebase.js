
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-preparation-deaba.firebaseapp.com",
  projectId: "ai-interview-preparation-deaba",
  storageBucket: "ai-interview-preparation-deaba.firebasestorage.app",
  messagingSenderId: "330786121365",
  appId: "1:330786121365:web:0db3d776848db7785d1d9c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}