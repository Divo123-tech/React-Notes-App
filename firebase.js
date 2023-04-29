
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBI_qF6hl3g8mTyJ4RGqY0QTEQt47EZIbQ",
  authDomain: "react-notes-bd0bd.firebaseapp.com",
  projectId: "react-notes-bd0bd",
  storageBucket: "react-notes-bd0bd.appspot.com",
  messagingSenderId: "61511865375",
  appId: "1:61511865375:web:2330295fab89828003312a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const NotesCollection = collection(db, "notes");