import * as firebase from 'firebase';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAOdZNRS6oc4ICvt6yBJIW8Xb1lJemw1fk",
    authDomain: "to-watch-react.firebaseapp.com",
    projectId: "to-watch-react",
    storageBucket: "to-watch-react.appspot.com",
    messagingSenderId: "343639237494",
    appId: "1:343639237494:web:11c3e47a9122ba97089057",
    measurementId: "G-21GB4RS34T"
  };
  // Initialize Firebase
  firebase.default.initializeApp(firebaseConfig);
  firebase.default.analytics();

  export const database = firebase.default.firestore();