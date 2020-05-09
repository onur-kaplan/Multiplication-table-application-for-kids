import firebase from 'firebase/app';
// import 'firebase/database';
// import {firstStart} from "./functions";
import AppComponent from "./src/Components/AppComponent";
import Mahmut from "./src/Core/Mahmut";

// firebase.initializeApp(firebaseConfig);
//
// // Initialize Firebase
// firebase.database().ref('/').once('value').then(function(snapshot) {
//     firstStart(snapshot.val().users);
// });

Mahmut.initialize(new AppComponent, document.getElementById('root'))
