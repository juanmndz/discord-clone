import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBLsayG6LM8uRVxks2gP1Q81pKlpnIct_I",
    authDomain: "discordapp-b6daf.firebaseapp.com",
    databaseURL: "https://discordapp-b6daf.firebaseio.com",
    projectId: "discordapp-b6daf",
    storageBucket: "discordapp-b6daf.appspot.com",
    messagingSenderId: "459221834734",
    appId: "1:459221834734:web:b7709a7e66a1b0a6418cff",
    measurementId: "G-N6SP0DTPGS"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db