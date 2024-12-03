// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9iBgIYT954TJIYmMcmg3EKzr6osYun84",
  authDomain: "assignment-10-54898.firebaseapp.com",
  projectId: "assignment-10-54898",
  storageBucket: "assignment-10-54898.firebasestorage.app",
  messagingSenderId: "655509526447",
  appId: "1:655509526447:web:8237497164b80a2d9d815a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
