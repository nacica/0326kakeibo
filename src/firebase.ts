// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS6bLqJs36DccKsfUdoR1ose9YCSDeIMQ",
  authDomain: "householdtypescript-1716a.firebaseapp.com",
  projectId: "householdtypescript-1716a",
  storageBucket: "householdtypescript-1716a.appspot.com",
  messagingSenderId: "727126551918",
  appId: "1:727126551918:web:bfc9a54af596cea08a657f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};