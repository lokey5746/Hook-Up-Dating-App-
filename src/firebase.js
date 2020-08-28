import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgwV0zkuoh4W1U0nJxMSg6VnkgYGWr3oE",
  authDomain: "hook-up-8e74a.firebaseapp.com",
  databaseURL: "https://hook-up-8e74a.firebaseio.com",
  projectId: "hook-up-8e74a",
  storageBucket: "hook-up-8e74a.appspot.com",
  messagingSenderId: "1005271912136",
  appId: "1:1005271912136:web:46ee8ee7fc8b3512495ffd",
};

//Initialize firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
//Accessing firebase firestore database
const db = firebaseApp.firestore();

export default db;
