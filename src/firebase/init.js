// import firebase from 'firebase/compat/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

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

export const storage = firebase.storage();
export default firebase.firestore();