// Import the functions you need from the SDKs you need
import { initializeApp, Firebase } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/firestore"

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDADNngvGgCXCd8WEpmONrBqJzClY3wcRA",
  authDomain: "groups-prototype-ead70.firebaseapp.com",
  projectId: "groups-prototype-ead70",
  storageBucket: "groups-prototype-ead70.appspot.com",
  messagingSenderId: "471728599691",
  appId: "1:471728599691:web:eb3e64f4de03cfe8625a8e"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore();