// firebase.js (ou seu arquivo de configuração do Firebase)
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBb6Mekd0L5O3GZVBQTZQ0rqLP96DiAV6E",
  authDomain: "dev-to-dev-9fac1.firebaseapp.com",
  projectId: "dev-to-dev-9fac1",
  storageBucket: "dev-to-dev-9fac1.firebasestorage.app",
  messagingSenderId: "468732821336",
  appId: "1:468732821336:web:0c7ed4c60482bd14b96f2d",
  measurementId: "G-SZH04073X0",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export {
  auth,
  database,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
};
