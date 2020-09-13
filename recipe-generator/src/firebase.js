import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBalBCk6bGOL4_dpEFHEbZuj6zRG8LTHr0",
  authDomain: "bon-hacketit-d1f8d.firebaseapp.com",
  databaseURL: "https://bon-hacketit-d1f8d.firebaseio.com",
  projectId: "bon-hacketit-d1f8d",
  storageBucket: "bon-hacketit-d1f8d.appspot.com",
  messagingSenderId: "12639227245",
  appId: "1:12639227245:web:6300016cf3d2f843f29e64",
  measurementId: "G-387NC8HZ94"
});

export default firebaseConfig;