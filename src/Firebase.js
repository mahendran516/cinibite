
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCmgeYjeWPhsrEwiDLqY39P6T8510nbuB8",
  authDomain: "cinibite-d3c35.firebaseapp.com",
  projectId: "cinibite-d3c35",
  storageBucket: "cinibite-d3c35.appspot.com",
  messagingSenderId: "511845459475",
  appId: "1:511845459475:web:a49e7d1bd778aa2c7501e6",
  measurementId: "G-RD16C4Z9LT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);