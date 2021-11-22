import firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyAtxcgKjZydz3ZECCB5o2kfVbWM64_4kUk",
    authDomain: "wireless-library-4c438.firebaseapp.com",
    projectId: "wireless-library-4c438",
    storageBucket: "wireless-library-4c438.appspot.com",
    messagingSenderId: "750870588868",
    appId: "1:750870588868:web:418807af907ae2a94c4891"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()