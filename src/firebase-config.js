// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCaPdfEJTgU8BGF1p04yHxddZJ33lnsI",
  authDomain: "bearwear-55f59.firebaseapp.com",
  projectId: "bearwear-55f59",
  storageBucket: "bearwear-55f59.appspot.com",
  messagingSenderId: "644991244759",
  appId: "1:644991244759:web:d3ddb7156ec708d44f1392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth(app);