import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBfKuCwjJcmK8MJewd9ryReg52N-7UzitQ",
    authDomain: "jl-yue-gallery.firebaseapp.com",
    projectId: "jl-yue-gallery",
    storageBucket: "jl-yue-gallery.appspot.com",
    messagingSenderId: "563003027521",
    appId: "1:563003027521:web:96e01b2f8f7d7756cd96c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFIrestore = firebase.firestore();

  export {projectStorage, projectFIrestore};