import * as firebase from 'firebase';
import {firstStart} from "./functions";

const firebaseConfig = {
    apiKey: "AIzaSyAQ2dI3cgrr021G-X7Wm68-XsF_QM_db8U",
    authDomain: "carpim-tablosu-dd6ad.firebaseapp.com",
    databaseURL: "https://carpim-tablosu-dd6ad.firebaseio.com",
    projectId: "carpim-tablosu-dd6ad",
    storageBucket: "carpim-tablosu-dd6ad.appspot.com",
    messagingSenderId: "1072204701021",
    appId: "1:1072204701021:web:1f3f0e3edb2c70c63bdcb4",
    measurementId: "G-0W8ZVV9W1Z"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase
return firebase.database().ref('/').once('value').then(function(snapshot) {
    firstStart(snapshot.val().users);
});



