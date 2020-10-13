import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBefuNNr5NWGHs_Lc4UTsjmcwad7J46meQ",
    authDomain: "discord-clone-db46b.firebaseapp.com",
    databaseURL: "https://discord-clone-db46b.firebaseio.com",
    projectId: "discord-clone-db46b",
    storageBucket: "discord-clone-db46b.appspot.com",
    messagingSenderId: "20090403601",
    appId: "1:20090403601:web:bf558bf67e268f1f46aab0",
    measurementId: "G-P1V0RQ1ZZM"
  };
  const firestoreApp = firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const auth = firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;