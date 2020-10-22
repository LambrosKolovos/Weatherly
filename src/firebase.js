import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDCR0_actNTII68k3ncyq-SVFiQXjIx0AI",
    authDomain: "weatherly54.firebaseapp.com",
    databaseURL: "https://weatherly54.firebaseio.com",
    projectId: "weatherly54",
    storageBucket: "weatherly54.appspot.com",
    messagingSenderId: "349591119647",
    appId: "1:349591119647:web:3f874d68cdc093e62bb22a",
    measurementId: "G-3V0CDPV6J9"
};

const firebaseapp = firebase.initializeApp(firebaseConfig)

export default firebaseapp;