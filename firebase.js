import firebase from "firebase/app";
import "firebase/database";


var firebaseConfig = {
    apiKey: "AIzaSyBeRDzk-GAXUoHGwzS85_5MXbsLoumTteU",
    authDomain: "react-contact-fd430.firebaseapp.com",
    databaseURL: "https://react-contact-fd430-default-rtdb.firebaseio.com",
    projectId: "react-contact-fd430",
    storageBucket: "react-contact-fd430.appspot.com",
    messagingSenderId: "1030602088824",
    appId: "1:1030602088824:web:c6a7d41d1fb0c40c79688d"
  };
  const fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();