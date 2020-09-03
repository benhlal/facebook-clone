import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBP3Y58G2s2kiu2l8anLTXAauPH-NMvR4c",
    authDomain: "facebook-2870e.firebaseapp.com",
    databaseURL: "https://facebook-2870e.firebaseio.com",
    projectId: "facebook-2870e",
    storageBucket: "facebook-2870e.appspot.com",
    messagingSenderId: "982261064174",
    appId: "1:982261064174:web:65db782ebb938f76bdeeff",
    measurementId: "G-0P948QJBVN"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

