// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyD_lbYIMe6_Hd1bLtKY2PqWCVFPWuIqu3I",
  authDomain: "facebook-590de.firebaseapp.com",
  projectId: "facebook-590de",
  storageBucket: "facebook-590de.appspot.com",
  messagingSenderId: "954162557489",
  appId: "1:954162557489:web:bb9bcfad6db8578f899b10",
  measurementId: "G-YZDBPCLVBK"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth =firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider }
  export default db