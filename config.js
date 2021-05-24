import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDS2nJSBPkRRtRXAVuhw6oFT8w3uxZdPP4",
    authDomain: "project-77-e397a.firebaseapp.com",
    databaseURL: "https://project-77-e397a.firebaseio.com",
    projectId: "project-77-e397a",
    storageBucket: "project-77-e397a.appspot.com",
    messagingSenderId: "145667844636",
    appId: "1:145667844636:web:2d5031df390b8d40624dd9",
    measurementId: "G-SP6RR890JS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()