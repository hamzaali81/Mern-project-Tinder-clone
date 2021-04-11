import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgtUPM3I0Fv5M1ECIAR7HrLYe17XwBzjg",
    authDomain: "tinder-clone-7cd80.firebaseapp.com",
    projectId: "tinder-clone-7cd80",
    storageBucket: "tinder-clone-7cd80.appspot.com",
    messagingSenderId: "329051908986",
    appId: "1:329051908986:web:32c1cfd6e29f0730f104c3"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();
export { db,auth,storage,provider };