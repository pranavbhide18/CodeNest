// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6119f.firebaseapp.com",
  projectId: "mern-blog-6119f",
  storageBucket: "mern-blog-6119f.appspot.com",
  messagingSenderId: "344879629305",
  appId: "1:344879629305:web:26f985adf238cdddc3b328"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);