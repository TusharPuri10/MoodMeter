// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBW3dQC9qMNItQj4LHt4_osrncSxn3Ra_U",
    authDomain: "depression-analysis-by-tweets.firebaseapp.com",
    projectId: "depression-analysis-by-tweets",
    storageBucket: "depression-analysis-by-tweets.appspot.com",
    messagingSenderId: "192688041527",
    appId: "1:192688041527:web:7162e2ebbd35ec845019b2",
    measurementId: "G-DNDFH0H25Z"
  };


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db