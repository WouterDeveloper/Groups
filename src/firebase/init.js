// Import the functions you need from the SDKs you need
import { initializeApp, Firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDADNngvGgCXCd8WEpmONrBqJzClY3wcRA",
  authDomain: "groups-prototype-ead70.firebaseapp.com",
  projectId: "groups-prototype-ead70",
  storageBucket: "groups-prototype-ead70.appspot.com",
  messagingSenderId: "471728599691",
  appId: "1:471728599691:web:eb3e64f4de03cfe8625a8e"
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export default firebase.firestore();
// export default db = getFirestore();

  // getting data
// db.collection('Groepen').get().then(snapshot => {
//     console.log("test");
// });