import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDttioUKR99VjLKDR92J8AYYm4Isf_53hU",
    authDomain: "todo-app-2ac29.firebaseapp.com",
    projectId: "todo-app-2ac29",
    storageBucket: "todo-app-2ac29.appspot.com",
    messagingSenderId: "655563046209",
    appId: "1:655563046209:web:928dad5bd5b7d22bb935c0",
    measurementId: "G-WX3JKK4RXN"

});
const db = firebaseApp.firestore();

export default db;