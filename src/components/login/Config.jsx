import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDGtSYHZTpVLJxso38VGkbqR6aBqgCn8BM",
  authDomain: "thebron-82896.firebaseapp.com",
  projectId: "thebron-82896",
  storageBucket: "thebron-82896.appspot.com",
  messagingSenderId: "722142994215",
  appId: "1:722142994215:web:cc5c2d7da22803af8b9302",
  measurementId: "G-NT10PQT19J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };