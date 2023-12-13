//Initialize Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDyq_8r8fMbQUa919fNy6uxOPXF_6V2yg0",
    authDomain: "fir-demo-d8000.firebaseapp.com",
    projectId: "fir-demo-d8000",
    storageBucket: "fir-demo-d8000.appspot.com",
    messagingSenderId: "190123843247",
    appId: "1:190123843247:web:8bcf14131e753fa72d3e5a",
    measurementId: "G-JJJLFP3C8S"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export{auth};
export default db;
