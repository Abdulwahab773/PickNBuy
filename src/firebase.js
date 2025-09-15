import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9f27Vq0mrU6iSpMQR3eFEIOhrNupDNsw",
  authDomain: "picknbuy-a183e.firebaseapp.com",
  projectId: "picknbuy-a183e",
  storageBucket: "picknbuy-a183e.firebasestorage.app",
  messagingSenderId: "802408408592",
  appId: "1:802408408592:web:e6c3966aa889aae9f54c95"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
  auth,
  db
}